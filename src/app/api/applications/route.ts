import { NextResponse } from 'next/server'
import { prisma } from "@/app/prisma";


// GET all applications or applications for a specific company
export async function GET(request: Request) {
    try {
        const { searchParams } = new URL(request.url);
        const companyId = searchParams.get('companyId');

        if (companyId) {
            const applications = await prisma.api.findMany({
                where: { companyId },
                include: {
                    apiAuth: true,
                    endpoints: {
                        include: {
                            targetendpoint: {
                                include: {
                                    api: true
                                }
                            }
                        }
                    },
                    _count: {
                        select: { endpoints: true },
                    }
                },
            });
            return NextResponse.json(applications, { status: 200 });
        } else {
            const applications = await prisma.api.findMany({
                include: {
                    apiAuth: true,
                    endpoints: {
                        include: {
                            targetendpoint: {
                                include: {
                                    api: true
                                }
                            }
                        }
                    },
                    _count: {
                        select: { endpoints: true },
                    }
                },
            });
            return NextResponse.json(applications, { status: 200 });
        }
    } catch (error) {
        console.error("Error fetching applications:", error);
        return NextResponse.json({ error: "Failed to fetch applications" }, { status: 500 });
    }
}

// CREATE a new API
export async function POST(request: Request) {  
    try {
        const body = await request.json();
        
        const result = await prisma.api.create({
            data: {
                name: body.name,
                baseurl: body.baseurl,
                description: body.description,
                companyId: body.companyId,
            },
        });

        return NextResponse.json(result, { status: 201 });
    } catch (error) {
        console.error("Error creating API:", error);
        return NextResponse.json({ error: "Failed to create API" }, { status: 500 });
    }
}

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
        console.error("Error deleting application:", error);
        return NextResponse.json({ error: "Failed to delete application" }, { status: 500 });
    }
}

