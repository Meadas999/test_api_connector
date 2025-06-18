import { NextResponse } from 'next/server';
import { prisma } from "@/app/prisma";
export async function PUT(
    request: Request,
    { params }: { params: Promise<{ id: string } >}
) {
    try {
        const { id } = await params;
        const body = await request.json();

        const updatedmapping = await prisma.mapping.update({
            where: { id: id },  
            data: {
                sourceField: body.sourceField,
                targetField: body.targetField,
                name: body.name, // Ensure this is included if needed
            },}) 

        return NextResponse.json(updatedmapping, { status: 200 });
    } catch (error) {
        console.error("Error updating mapping:", error);
        return NextResponse.json({ error: "Failed to update mapping" }, { status: 500 });
    }
    }