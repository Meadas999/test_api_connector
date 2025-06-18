import { NextResponse } from 'next/server';
import { prisma } from "@/app/prisma";

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const endpointId = searchParams.get('endpointId');
    
    if (!endpointId) {
      return NextResponse.json({ error: "Missing endpointId parameter" }, { status: 400 });
    }

    // Fetch webhook logs for the specific endpoint
    const webhookLogs = await prisma.webhookLog.findMany({
      where: { endpointId },
      orderBy: { timestamp: 'desc' },
      take: 100, // Limit to last 100 logs
    });
    
    return NextResponse.json(webhookLogs);
  } catch (error) {
    console.error("Error fetching webhook logs:", error);
    return NextResponse.json({ error: "Failed to fetch webhook logs" }, { status: 500 });
  }
}