import { NextResponse } from 'next/server'
import { prisma } from "@/app/prisma";

export async function POST(request: Request) {
    try {
        // Get the query parameters from the URL
        const { searchParams } = new URL(request.url);
        const endpointId = searchParams.get('endpointId');

        if (!endpointId) {
            return NextResponse.json({ error: "Missing endpointId parameter" }, { status: 400 });
        }

        // Get the source object from the request body
        const sourceObject = await request.json();

        // Fetch the source endpoint with its mappings and target endpoint
        const sourceEndpoint = await prisma.endpoint.findUnique({
            where: { id: endpointId },
            include: {
                mapping: true,
                targetendpoint: {
                    include: {
                        api: {
                            select: {
                                baseurl: true,
                            }
                        }
                    }
                    

                }
            }
        });

        if (!sourceEndpoint) {
            return NextResponse.json({ error: "Endpoint not found" }, { status: 404 });
        }

        if (!sourceEndpoint.targetendpoint) {
            return NextResponse.json({ error: "No target endpoint configured" }, { status: 400 });
        }
        console.log("Source Endpoint:", sourceEndpoint);
        // Transform the source object according to the mappings
        const transformedObject: Record<string, any> = {};

        for (const mapping of sourceEndpoint.mapping) {
            // Handle dot notation in sourceField
                console.log(`Processing mapping: ${mapping.sourceField} → ${mapping.targetField}`);

            const value = getNestedValue(sourceObject, mapping.sourceField);
                console.log(`  Value found: ${JSON.stringify(value)}`);


            // Handle dot notation in targetField
            setNestedValue(transformedObject, mapping.targetField, value);
                console.log(`  After setting: ${JSON.stringify(transformedObject)}`);

        }

        // Helper function to get nested values using dot notation
        function getNestedValue(obj: Record<string, any>, path: string): any {
            const keys = path.split('.');
            let value = obj;

            for (const key of keys) {
                if (value === null || value === undefined) {
                    return undefined;
                }
                value = value[key];
            }

            return value;
        }

        // Helper function to set nested values using dot notation
        function setNestedValue(obj: Record<string, any>, path: string, value: any): void {
            const keys = path.split('.');
            const lastKey = keys.pop()!;
            let current = obj;

            for (const key of keys) {
                if (current[key] === undefined) {
                    current[key] = {};
                }
                current = current[key];
            }

            current[lastKey] = value;
        }

        // Send the transformed object to the target endpoint
        const targetUrl = sourceEndpoint.targetendpoint.api.baseurl + sourceEndpoint.targetendpoint.path;
        console.log("Target URL:", targetUrl);
        console.log("Transformed Object:", transformedObject);
        const targetMethod = sourceEndpoint.targetendpoint.method;
        console.log("Target Method:", targetMethod);
        const response = await fetch(targetUrl, {
            method: targetMethod,
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(transformedObject)
        });

        if (!response.ok) {
            const errorText = await response.text();
            return NextResponse.json({
                error: "Error calling target endpoint",
                status: response.status,
                details: errorText
            }, { status: 502 });
        }

        const responseData = await response.json();

        return NextResponse.json({
            success: true,
            mappedData: transformedObject,
            response: responseData
        }, { status: 200 });

    } catch (error) {
        console.error("Error in map route:", error);
        return NextResponse.json({
            error: "Internal server error",
            details: error instanceof Error ? error.message : String(error)
        }, { status: 500 });
    }
}