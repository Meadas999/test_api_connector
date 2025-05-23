import { NextResponse } from 'next/server'
import { prisma } from "@/app/prisma";

export async function GET(
    request: Request,
    { params }: { params: { id: string } }
) {
    try {
        const id = await params.id;
        
        const company = await prisma.company.findUnique({
            where: { id },
        });

        if (!company) {
            return NextResponse.json({ error: "Company not found" }, { status: 404 });
        }

        return NextResponse.json(company, { status: 200 });
    } catch (error) {
        console.error("Error fetching company:", error);
        return NextResponse.json({ error: "Failed to fetch company" }, { status: 500 });
    }
}