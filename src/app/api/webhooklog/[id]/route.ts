import {  NextResponse } from 'next/server';
import { prisma } from "@/app/prisma";

/**
 * GET - Retrieve specific webhook log by ID with full details
 * URL parameter: id - Webhook log ID
 * Returns: Complete webhook log entry including request and response data
 */
export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const logId = params.id;

    // Fetch complete webhook log details
    const log = await prisma.webhookLog.findUnique({
      where: { id: logId }
    });

    if (!log) {
      return NextResponse.json(
        { error: 'Webhook log not found' },
        { status: 404 }
      );
    }

    return NextResponse.json(log);

  } catch (error) {
    console.error('Error fetching webhook log:', error);
    return NextResponse.json(
      { error: 'Failed to fetch webhook log' },
      { status: 500 }
    );
  }
}