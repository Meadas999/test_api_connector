import { NextResponse } from 'next/server'
import { prisma } from "@/app/prisma";

export async function GET(request: Request) {
    try {
        const { searchParams } = new URL(request.url);
        const endpointId = searchParams.get('endpointId');

        if (!endpointId) {
            return NextResponse.json({ error: "Missing endpointId parameter" }, { status: 400 });
        }

        const logs = await prisma.apiLog.findMany({
            where: { endpointId },
            orderBy: { createdAt: 'desc' },
            take: 100 // Limit to last 100 logs
        });

        return NextResponse.json(logs, { status: 200 });
    } catch (error) {
        console.error("Error fetching logs:", error);
        return NextResponse.json({ error: "Failed to fetch logs" }, { status: 500 });
    }
}