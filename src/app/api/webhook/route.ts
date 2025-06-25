import { NextRequest, NextResponse } from 'next/server';
import { prisma } from "@/app/prisma";
import { v4 as uuidv4 } from 'uuid';

// In-memory store for tracking active requests (you could use Redis for production)
const activeRequests = new Map<string, { timestamp: number; endpointChain: string[] }>();
const MAX_HOP_COUNT = 5; // Maximum number of hops allowed
const REQUEST_TIMEOUT = 5 * 60 * 1000; // 5 minutes timeout

/**
 * Interface defining the structure of incoming webhook payloads
 */
interface WebhookPayload {
  type: 'object_created';
  data: any;
  endpointId: string;
  timestamp: string;
  requestId?: string; // Add unique request ID
  originEndpointId?: string; // Track the original endpoint that started the chain
  hopCount?: number; // Track how many hops this request has made
}

/**
 * POST - Handle incoming webhooks from external APIs
 * Request body: WebhookPayload containing type, data, endpointId, and timestamp
 * Returns: Success response confirming webhook processing
 */
export async function POST(request: NextRequest) {
  let webhookLogId: string | null = null;
  let payload: WebhookPayload | null = null;
  const startTime = Date.now();

  try {
    // Parse the webhook payload from the request body
    payload = await request.json();
    
    console.log('Received webhook:', payload);

    // Validate payload exists
    if (!payload) {
      return NextResponse.json({ error: 'Invalid payload' }, { status: 400 });
    }

    // Generate or use existing request ID
    const requestId = payload.requestId || uuidv4();
    const originEndpointId = payload.originEndpointId || payload.endpointId;
    const hopCount = (payload.hopCount || 0) + 1;

    // **LOOP PREVENTION CHECKS**
    
    // 1. Check for maximum hop count
    if (hopCount > MAX_HOP_COUNT) {
      console.warn(`Request ${requestId} exceeded max hop count: ${hopCount}`);
      return NextResponse.json({ 
        error: 'Maximum hop count exceeded - potential infinite loop detected',
        requestId,
        hopCount 
      }, { status: 400 });
    }

    // 2. Check if this request is already being processed
    const existingRequest = activeRequests.get(requestId);
    if (existingRequest) {
      // 3. Check for direct circular calls (A -> B -> A)
      if (existingRequest.endpointChain.includes(payload.endpointId)) {
        console.warn(`Circular loop detected in request ${requestId}: ${existingRequest.endpointChain.join(' -> ')} -> ${payload.endpointId}`);
        return NextResponse.json({ 
          error: 'Circular loop detected',
          requestId,
          chain: [...existingRequest.endpointChain, payload.endpointId]
        }, { status: 400 });
      }
    }

    // Register this request as active
    activeRequests.set(requestId, {
      timestamp: Date.now(),
      endpointChain: existingRequest ? [...existingRequest.endpointChain, payload.endpointId] : [payload.endpointId]
    });

    // Clean up old requests (older than timeout)
    cleanupOldRequests();

    // Create webhook log
    const webhookLog = await prisma.webhookLog.create({
      data: {
        endpointId: payload.endpointId,
        type: payload.type,
        method: request.method,
        url: request.url,
        status: 'received',
        requestBody: { 
          ...payload, 
          requestId, 
          originEndpointId, 
          hopCount 
        } as any,
        timestamp: new Date(payload.timestamp),
        success: false,
      }
    });
    webhookLogId = webhookLog.id;

    // Process the webhook
    const enrichedPayload = {
      ...payload,
      requestId,
      originEndpointId,
      hopCount
    };

    const mappingResponse = await handleObjectCreated(enrichedPayload, webhookLogId);
    
    // Calculate response time
    const responseTime = Date.now() - startTime;
    
    // Update log with success
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

    // Clean up the active request
    activeRequests.delete(requestId);
    
    return NextResponse.json({ 
      message: 'Webhook processed successfully',
      webhookLogId: webhookLogId,
      requestId,
      hopCount,
      timestamp: new Date().toISOString()
    });

  } catch (error) {
    console.error('Webhook processing error:', error);
    
    // Clean up active request on error
    if (payload?.requestId) {
      activeRequests.delete(payload.requestId);
    }
    
    const responseTime = Date.now() - startTime;
    
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
    const response = await fetch(`${process.env.NEXTAUTH_URL || 'https://test-api-connector.onrender.com'}/api/map?endpointId=${endpointId}`, {
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

function cleanupOldRequests() {
  const now = Date.now();
  for (const [requestId, request] of activeRequests.entries()) {
    if (now - request.timestamp > REQUEST_TIMEOUT) {
      activeRequests.delete(requestId);
    }
  }
}