import { NextResponse } from 'next/server';
import { prisma } from "@/app/prisma";

// Update an endpoint by ID
export async function PUT(
    request: Request,
    { params }: { params: Promise<{ id: string } >}
) {
    try {
        const { id } = await params;
        const body = await request.json();

        const updatedEndpoint = await prisma.endpoint.update({
            where: { id: id }, 
            data: {
                name: body.name,
                description: body.description,
                method: body.method,
                path: body.path,
                targetendpointId: body.targetendpointId || null, // Allow null for targetendpointId
            },
        });

        return NextResponse.json(updatedEndpoint, { status: 200 });
    } catch (error) {
        console.error("Error updating endpoint:", error);
        return NextResponse.json({ error: "Failed to update endpoint" }, { status: 500 });
    }
}

// Delete an endpoint by ID
export async function DELETE(
    request: Request,
    { params }: { params: Promise<{ id: string }> }
) {
    try {
        const id = await params;

        // First delete all mappings that reference this endpoint
        await prisma.mapping.deleteMany({
            where: {
                endpointId: id.id,}
        });

        // Then delete the endpoint
        const deletedEndpoint = await prisma.endpoint.delete({
            where: id 
        });

        return NextResponse.json(deletedEndpoint, { status: 200 });
    } catch (error) {
        console.error("Error deleting endpoint:", error);
        return NextResponse.json({ error: "Failed to delete endpoint" }, { status: 500 });
    }
}