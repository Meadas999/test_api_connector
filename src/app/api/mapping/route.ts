import { NextResponse } from 'next/server'
import { prisma } from "@/app/prisma";

/**
 * GET - Retrieve all mappings for a specific endpoint
 * Query parameter: endpointId (required)
 * Returns: Array of mapping objects
 */
export async function GET(request: Request) {
    // Extract query parameters from the request URL
    const { searchParams } = new URL(request.url);
    const endpointId = searchParams.get('endpointId');

    // Validate that endpointId parameter is provided
    if (!endpointId) {
        return NextResponse.json({ error: "Missing endpointId parameter" }, { status: 400 });
    }

    // Query database for all mappings associated with the given endpoint
    const mappings = await prisma.mapping.findMany({
        where: { endpointId: endpointId },
    });

    // Return the mappings as JSON response
    return NextResponse.json(mappings, { status: 200 });
}

/**
 * POST - Create a new mapping for a specific endpoint
 * Query parameter: endpointId (required)
 * Request body: { sourceField, targetField }
 * Returns: Created mapping object
 */
export async function POST(request: Request) {
    // Extract query parameters from the request URL
    const { searchParams } = new URL(request.url);
    const endpointId = searchParams.get('endpointId');

    // Validate that endpointId parameter is provided
    if (!endpointId) {
        return NextResponse.json({ error: "Missing endpointId parameter" }, { status: 400 });
    }

    // Parse the JSON body from the request
    const body = await request.json();

    // Create a new mapping record in the database
    const result = await prisma.mapping.create({
        data: {
            sourceField: body.sourceField,    // Field name from source API
            targetField: body.targetField,    // Field name in target API
            endpointId: endpointId,          // Associate with specific endpoint
            name: "Objectkenmerk",           // Default name for the mapping
        },
    });

    // Return the created mapping as JSON response
    return NextResponse.json(result, { status: 200 });
}

/**
 * PUT - Update multiple existing mappings for a specific endpoint
 * Query parameter: endpointId (required)
 * Request body: Array of mapping objects with id, sourceField, targetField
 * Returns: Array of updated mapping objects
 */
export async function PUT (request: Request) {
    // Extract query parameters from the request URL
    const { searchParams } = new URL(request.url);
    const endpointId = searchParams.get('endpointId');

    // Validate that endpointId parameter is provided
    if (!endpointId) {
        return NextResponse.json({ error: "Missing endpointId parameter" }, { status: 400 });
    }

    // Parse the JSON body containing array of mappings to update
    const body = await request.json();

    // Update multiple mappings in parallel using Promise.all
    const results = await Promise.all(
        body.map((m: any) =>
            prisma.mapping.update({
                where: { id: m.id },           // Find mapping by ID
                data: {
                    sourceField: m.sourceField, // Update source field mapping
                    targetField: m.targetField, // Update target field mapping
                },
            })
        )
    );

    // Return array of updated mappings as JSON response
    return NextResponse.json(results, { status: 200 });
}

/**
 * DELETE - Remove a specific mapping by ID
 * Query parameter: id (required)
 * Returns: Deleted mapping object
 */
export async function DELETE(request: Request) {    
    // Extract query parameters from the request URL
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');

    // Validate that id parameter is provided
    if (!id) {
        return NextResponse.json({ error: "Missing id parameter" }, { status: 400 });
    }

    // Delete the mapping record from the database
    const result = await prisma.mapping.delete({
        where: { id: id },
    });

    // Return the deleted mapping as JSON response
    return NextResponse.json(result, { status: 200 });
}


