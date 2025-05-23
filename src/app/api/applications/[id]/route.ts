import { NextResponse } from 'next/server'
import { prisma } from "@/app/prisma";

// Update an API by ID
export async function PUT(
    request: Request,
    { params }: { params: Promise<{ id: string }> }
) {
    try {
        const id = await params;
        const body = await request.json();

        const updatedApi = await prisma.api.update({
            where: id ,
            data: {
                name: body.name,
                baseurl: body.baseurl,
                description: body.description,
            },
        });

        return NextResponse.json(updatedApi, { status: 200 });
    } catch (error) {
        console.error("Error updating API:", error);
        return NextResponse.json({ error: "Failed to update API" }, { status: 500 });
    }
}

// Get a single API by ID
export async function GET(
    request: Request,
    { params }: { params: Promise<{ id: string } >}
) {
    try {
        const id = await params;  // Remove 'await' here
        
        const api = await prisma.api.findUnique({
            where: id ,
            include: {
                apiAuth: true,
                endpoints: {
                    include: {
                        targetendpoint: {
                            include: {
                                api: true,
                            }
                        }
                    }
                },
                _count: {
                    select: { endpoints: true },
                },
            },
        });

        if (!api) {
            return NextResponse.json({ error: "API not found" }, { status: 404 });
        }

        return NextResponse.json(api, { status: 200 });
    } catch (error) {
        console.error("Error fetching API:", error);
        return NextResponse.json({ error: "Failed to fetch API" }, { status: 500 });
    }
}

// DELETE an API
export async function DELETE(request: Request) {
    try {
        const { searchParams } = new URL(request.url);
        const id = searchParams.get('id');

        if (!id) {
            return NextResponse.json({ error: "Missing id parameter" }, { status: 400 });
        }

        await prisma.api.delete({ where: { id } });
        return NextResponse.json({ success: true }, { status: 200 });
    } catch (error) {
        console.error("Error deleting API:", error);
        return NextResponse.json({ error: "Failed to delete API" }, { status: 500 });
    }
}