import { NextResponse } from 'next/server';
import { prisma } from "@/app/prisma";

// Update an endpoint by ID
export async function PUT(
    request: Request,
    { params }: { params: { id: string } }
) {
    try {
        const id = params.id;
        const body = await request.json();

        const updatedEndpoint = await prisma.endpoint.update({
            where: { id },
            data: {
                name: body.name,
                description: body.description,
                method: body.method,
                path: body.path,
                targetendpointId: body.targetendpointId
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
    { params }: { params: { id: string } }
) {
    try {
        const id = params.id;

        // First delete all mappings that reference this endpoint
        await prisma.mapping.deleteMany({
            where: { endpointId: id }
        });

        // Then delete the endpoint
        const deletedEndpoint = await prisma.endpoint.delete({
            where: { id }
        });

        return NextResponse.json(deletedEndpoint, { status: 200 });
    } catch (error) {
        console.error("Error deleting endpoint:", error);
        return NextResponse.json({ error: "Failed to delete endpoint" }, { status: 500 });
    }
}