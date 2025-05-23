import { NextResponse } from 'next/server'
import { prisma } from "@/app/prisma";

// GET all companies
export async function GET() {
  const companies = await prisma.company.findMany()
  return NextResponse.json(companies)
}

// ADD a new company
export async function POST(request: Request) {
  const body = await request.json();
  if (!body.name) {
    return NextResponse.json({ error: "Name is required" }, { status: 400 });
  }
  const company = await prisma.company.create({
    data: { name: body.name }
  });
  return NextResponse.json(company, { status: 200 });
}

// DELETE a company by id
export async function DELETE(request: Request) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get('id');
  if (!id) {
    return NextResponse.json({ error: "Missing id parameter" }, { status: 400 });
  }
  await prisma.company.delete({ where: { id } });
  return NextResponse.json({ success: true }, { status: 200 });
}