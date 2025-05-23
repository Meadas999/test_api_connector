import { NextResponse } from 'next/server';
import { prisma } from "@/app/prisma";

export async function GET(request: Request) {
    try {
        const { searchParams } = new URL(request.url);
        const apiId = searchParams.get('apiId');
        
        let endpoints;
        
        if (apiId) {
            // Fetch endpoints for a specific API
            endpoints = await prisma.endpoint.findMany({
                where: { apiId },
                include: { targetendpoint: true }
            });
        } else {
            // Fetch all endpoints
            endpoints = await prisma.endpoint.findMany({
                include: { targetendpoint: true }
            });
        }
        
        return NextResponse.json(endpoints);
    } catch (error) {
        console.error("Error fetching endpoints:", error);
        return NextResponse.json({ error: "Failed to fetch endpoints" }, { status: 500 });
    }
}

export async function POST(request: Request) {
    try {
        const data = await request.json();
        
        const newEndpoint = await prisma.endpoint.create({
            data: {
                name: data.name,
                description: data.description,
                method: data.method,
                path: data.path,
                apiId: data.apiId,
                targetendpointId: data.targetendpointId
            }
        });
        
        return NextResponse.json(newEndpoint, { status: 201 });
    } catch (error) {
        console.error("Error creating endpoint:", error);
        return NextResponse.json({ error: "Failed to create endpoint" }, { status: 500 });
    }
}