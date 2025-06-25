import { NextResponse } from 'next/server'
import { prisma } from "@/app/prisma";

/**
 * POST - Transform and forward data from source API to target API
 * Query parameter: endpointId (required) - ID of the source endpoint
 * Request body: Source object data to be transformed
 * Returns: Success response with mapped data and target API response
 */
export async function POST(request: Request) {
    let endpointId: string | null = null;

    try {
        const { searchParams } = new URL(request.url);
        endpointId = searchParams.get('endpointId');
        
        // Extract request context from headers or body
        const requestId = searchParams.get('requestId');
        const originEndpointId = searchParams.get('originEndpointId');
        const hopCount = parseInt(searchParams.get('hopCount') || '0');

        // Validate that endpointId parameter is provided
        if (!endpointId) {
            return NextResponse.json({ error: "Missing endpointId parameter" }, { status: 400 });
        }

        // Parse the source object data from the request body
        const sourceObject = await request.json();
        console.log("Source Object:", sourceObject);

        // Fetch the source endpoint configuration with its mappings and target endpoint details
        const sourceEndpoint = await prisma.endpoint.findUnique({
            where: { id: endpointId },
            include: {
                mapping: true,              // Include field mappings for transformation
                targetendpoint: {           // Include target endpoint configuration
                    include: {
                        api: {              // Include target API details (baseurl)
                            select: {
                                baseurl: true,
                            }
                        }
                    }
                }
            }
        });

        // Check if source endpoint exists
        if (!sourceEndpoint) {
            await logApiCall(endpointId, "error", "POST", sourceObject, null, "Endpoint not found", 404);
            return NextResponse.json({ error: "Endpoint not found" }, { status: 404 });
        }

        // Check if target endpoint is configured
        if (!sourceEndpoint.targetendpoint) {
            await logApiCall(endpointId, "error", "POST", sourceObject, null, "No target endpoint configured", 400);
            return NextResponse.json({ error: "No target endpoint configured" }, { status: 400 });
        }

        console.log("Source Endpoint:", sourceEndpoint);
        
        // Initialize object to store transformed data
        const transformedObject: Record<string, any> = {};

        // Process each field mapping to transform source data to target format
        for (const mapping of sourceEndpoint.mapping) {
            console.log(`Processing mapping: ${mapping.sourceField} → ${mapping.targetField}`);
            
            // Extract value from source object using dot notation path
            const value = getNestedValue(sourceObject, mapping.sourceField);
            console.log(`  Value found: ${JSON.stringify(value)}`);
            
            // Set the value in transformed object using target field path
            setNestedValue(transformedObject, mapping.targetField, value);
            console.log(`  After setting: ${JSON.stringify(transformedObject)}`);
        }

        /**
         * Helper function to get nested values using dot notation
         * @param obj - Object to extract value from
         * @param path - Dot notation path (e.g., "user.profile.name")
         * @returns Value at the specified path or undefined if not found
         */
        function getNestedValue(obj: Record<string, any>, path: string): any {
            const keys = path.split('.');
            let value = obj;

            // Traverse the object following the dot notation path
            for (const key of keys) {
                if (value === null || value === undefined) {
                    return undefined;
                }
                value = value[key];
            }

            return value;
        }

        /**
         * Helper function to set nested values using dot notation
         * @param obj - Object to set value in
         * @param path - Dot notation path (e.g., "user.profile.name")
         * @param value - Value to set at the specified path
         */
        function setNestedValue(obj: Record<string, any>, path: string, value: any): void {
            const keys = path.split('.');
            const lastKey = keys.pop()!;  // Get the final key to set
            let current = obj;

            // Create nested structure if it doesn't exist
            for (const key of keys) {
                if (current[key] === undefined) {
                    current[key] = {};
                }
                current = current[key];
            }

            // Set the value at the final key
            current[lastKey] = value;
        }

        // Construct the full target URL by combining base URL and endpoint path
        const targetUrl = (sourceEndpoint.targetendpoint.api.baseurl ?? "") + (sourceEndpoint.targetendpoint.path ?? "");
        console.log("Target URL:", targetUrl);
        console.log("Transformed Object:", transformedObject);
        
        // Get the HTTP method for the target endpoint
        const targetMethod = sourceEndpoint.targetendpoint.method;
        console.log("Target Method:", targetMethod);
        
        // Send the transformed data to the target API endpoint
        const targetRequestBody = {
            ...transformedObject,
            _requestContext: {
                requestId,
                originEndpointId,
                hopCount: hopCount + 1,
                sourceEndpointId: endpointId
            }
        };

        const response = await fetch(targetUrl, {
            method: targetMethod,
            headers: {
                'Content-Type': 'application/json',
                'X-Request-ID': requestId || '',
                'X-Origin-Endpoint': originEndpointId || '',
                'X-Hop-Count': String(hopCount + 1)
            },
            body: JSON.stringify(targetRequestBody)
        });

        // Handle target API error responses
        if (!response.ok) {
            const errorText = await response.text();
            await logApiCall(endpointId, "error", targetMethod || "POST", sourceObject, null, `Error calling target endpoint: ${errorText}`, response.status);

            return NextResponse.json({
                error: "Error calling target endpoint",
                status: response.status,
                details: errorText
            }, { status: 502 });
        }

        // Parse successful response from target API
        const responseData = await response.json();
        
        // Log successful API call for monitoring and debugging
        await logApiCall(endpointId, "success", targetMethod || "POST", sourceObject, responseData, null, response.status);

        // Return success response with both mapped data and target API response
        return NextResponse.json({
            success: true,
            mappedData: transformedObject,      // Show how data was transformed
            response: responseData              // Show target API response
        }, { status: 200 });

    } catch (error) {
        // Handle any unexpected errors during processing
        console.error("Error in map route:", error);
        await logApiCall(endpointId || "unknown", "error", "POST", null, null, error instanceof Error ? error.message : String(error), 500);
        
        return NextResponse.json({
            error: "Internal server error",
            details: error instanceof Error ? error.message : String(error)
        }, { status: 500 });
    }
}

/**
 * Helper function to log API calls for monitoring and debugging
 * @param endpointId - ID of the endpoint being called
 * @param status - Success or error status
 * @param method - HTTP method used
 * @param requestBody - Original request data
 * @param responseBody - Response data from target API
 * @param errorMessage - Error message if call failed
 * @param statusCode - HTTP status code
 */
async function logApiCall(
    endpointId: string,
    status: "success" | "error",
    method: string,
    requestBody: any,
    responseBody: any,
    errorMessage: string | null,
    statusCode: number
) {
    try {
        // Create log entry in database for audit trail
        await prisma.apiLog.create({
            data: {
                endpointId,
                status,
                method,
                requestBody,
                responseBody,
                errorMessage,
                statusCode
            }
        });
    } catch (error) {
        console.error("Failed to log API call:", error);
    }
}