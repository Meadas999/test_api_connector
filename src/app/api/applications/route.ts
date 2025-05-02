import { NextResponse } from 'next/server'
import { prisma } from "@/app/prisma";


export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);
    const companyid = searchParams.get('companyid');

    if (!companyid) {
        return NextResponse.json({ error: "Missing companyid parameter" }, { status: 400 });
    }
    const applications = await prisma.api.findMany({
        where: {
            companyId: companyid,
        },
        include: {
            apiAuth: {
                select: { type: true }
            },
            _count: {
                select: { endpoints: true },
            }
        },
    });
    return NextResponse.json(applications);
}

