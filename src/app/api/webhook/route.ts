import { NextRequest, NextResponse } from 'next/server';
import { prisma } from "@/app/prisma";

/**
 * Interface defining the structure of incoming webhook payloads
 */
interface WebhookPayload {
  type: 'object_created';
  data: any;
  endpointId: string; // Changed from apiId to endpointId
  timestamp: string;
}

/**
 * POST - Handle incoming webhooks from external APIs
 * Request body: WebhookPayload containing type, data, endpointId, and timestamp
 * Returns: Success response confirming webhook processing
 */
export async function POST(request: NextRequest) {
  let webhookLogId: string | null = null;
  const startTime = Date.now();

  try {
    // Parse the webhook payload from the request body
    const payload: WebhookPayload = await request.json();
    
    console.log('Received webhook:', payload);

    // Get the webhook URL and method from the request
    const url = request.url;
    const method = request.method;

    // Create initial webhook log entry with 'received' status
    const webhookLog = await prisma.webhookLog.create({
      data: {
        endpointId: payload.endpointId, // Use endpointId instead of apiId
        type: payload.type,
        method: method,
        url: url,
        status: 'received',
        requestBody: payload as any,
        timestamp: new Date(payload.timestamp),
        success: false, // Initially false, will be updated on success
      }
    });
    webhookLogId = webhookLog.id;
    
    // Verify the webhook type is supported
    if (payload.type !== 'object_created') {
      // Calculate response time
      const responseTime = Date.now() - startTime;
      
      // Update log entry with error status
      await prisma.webhookLog.update({
        where: { id: webhookLogId },
        data: {
          status: 'failed',
          statusCode: 400,
          errorMessage: 'Invalid webhook type',
          responseTime: responseTime,
          processedAt: new Date()
        }
      });
      
      return NextResponse.json({ error: 'Invalid webhook type' }, { status: 400 });
    }

    // Process the webhook and trigger mapping
    const mappingResponse = await handleObjectCreated(payload, webhookLogId);
    
    // Calculate response time
    const responseTime = Date.now() - startTime;
    
    // Update log entry with successful status
    await prisma.webhookLog.update({
      where: { id: webhookLogId },
      data: {
        status: 'success',
        statusCode: 200,
        responseBody: mappingResponse,
        responseTime: responseTime,
        success: true,
        processedAt: new Date()
      }
    });
    
    return NextResponse.json({ 
      message: 'Webhook processed successfully',
      webhookLogId: webhookLogId,
      timestamp: new Date().toISOString()
    });

  } catch (error) {
    console.error('Webhook processing error:', error);
    
    // Calculate response time
    const responseTime = Date.now() - startTime;
    
    // Update log entry with error details if we have a log ID
    if (webhookLogId) {
      try {
        await prisma.webhookLog.update({
          where: { id: webhookLogId },
          data: {
            status: 'error',
            statusCode: 500,
            errorMessage: error instanceof Error ? error.message : String(error),
            responseTime: responseTime,
            success: false,
            processedAt: new Date()
          }
        });
      } catch (logError) {
        console.error('Failed to update webhook log:', logError);
      }
    }
    
    return NextResponse.json(
      { error: 'Failed to process webhook' }, 
      { status: 500 }
    );
  }
}

/**
 * Handle object creation webhook events
 * @param payload - The webhook payload containing object data
 * @param webhookLogId - ID of the webhook log entry for tracking
 */
async function handleObjectCreated(payload: WebhookPayload, webhookLogId: string) {
  try {
    console.log(`Processing object creation for endpoint ${payload.endpointId}`);
    
    // Trigger the mapping process and get response
    const mappingResponse = await triggerMapping(payload.endpointId, payload.data);
    
    return mappingResponse;
    
  } catch (error) {
    console.error('Error handling object creation:', error);
    throw error;
  }
}

/**
 * Trigger the data mapping process for the webhook data
 * @param endpointId - ID of the endpoint configuration
 * @param data - Source data to be mapped and forwarded
 * @returns Response from the mapping API
 */
async function triggerMapping(endpointId: string, data: any) {
  try {
    // Call the mapping API to transform and forward the data
    const response = await fetch(`${process.env.NEXTAUTH_URL || 'http://localhost:3000'}/api/map?endpointId=${endpointId}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data) // Send the data directly, not wrapped in sourceData
    });

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`Mapping API returned ${response.status}: ${errorText}`);
    }

    const responseData = await response.json();
    console.log(`Successfully triggered mapping for endpoint ${endpointId}`);
    
    return responseData;
  } catch (error) {
    console.error('Error triggering mapping:', error);
    throw error;
  }
}