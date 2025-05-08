import { NextResponse } from 'next/server'
import { prisma } from "@/app/prisma";


export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);
    const endpointId = searchParams.get('endpointId');

    if (!endpointId) {
        return NextResponse.json({ error: "Missing endpointId parameter" }, { status: 400 });
    }
    const mappings = await prisma.mapping.findMany({
        where: { endpointId: endpointId },
    });
    return NextResponse.json(mappings, { status: 200 });
}

export async function PUT (request: Request) {
    const { searchParams } = new URL(request.url);
    const endpointId = searchParams.get('endpointId');

    if (!endpointId) {
        return NextResponse.json({ error: "Missing endpointId parameter" }, { status: 400 });
    }

    const body = await request.json();
    const results = await Promise.all(
        body.map((m: any) =>
            prisma.mapping.update({
                where: { id: m.id },
                data: {
                    sourceField: m.sourceField,
                    targetField: m.targetField,
                },
            })
        )
    );

    return NextResponse.json(results, { status: 200 });
}

