import { NextResponse } from 'next/server'
import { prisma } from "@/app/prisma";


export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);
    const endpointId = searchParams.get('id');

    if (!endpointId) {
        return NextResponse.json({ error: "Missing endpointId parameter" }, { status: 400 });
    }
    const mappings = await prisma.mapping.findMany({
        where: { endpointId: endpointId },
    });
    return NextResponse.json(mappings, { status: 200 });
}

