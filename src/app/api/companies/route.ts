import { NextResponse } from 'next/server'
import { prisma } from "@/app/prisma";


export async function GET() {
  const companies = await prisma.company.findMany()
  return NextResponse.json(companies)
}