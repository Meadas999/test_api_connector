import { NextResponse } from 'next/server'
import { prisma } from "@/app/prisma";

export async function POST(request: Request) {
    
    
    const body = await request.json();
    console.log(body);;
    const result = await prisma.endpoint.create({
        data: {
            name: body.name,
            description: body.description,
            method: body.method,
            path: body.path,
            targetendpointId: body.targetendpointId,
            apiId: body.apiId, // Ensure 'api' is provided in the request body
        },
    });

    return NextResponse.json(result, { status: 200 });
}

export async function GET() {
    try {
        const endpoints = await prisma.endpoint.findMany({
            select: {
                id: true,
                name: true,
                path: true,
            },
        });

        return NextResponse.json(endpoints, { status: 200 });
    } catch (error) {
        console.error("Error fetching endpoints:", error);
        return NextResponse.json({ error: "Failed to fetch endpoints" }, { status: 500 });
    }
}   