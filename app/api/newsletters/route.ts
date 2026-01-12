import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

/* PUBLIC — list newsletters */
export async function GET() {
  const newsletters = await prisma.newsletter.findMany({
    orderBy: { createdAt: "desc" },
  });

  return NextResponse.json(newsletters);
}

/* ADMIN — create newsletter */
export async function POST(req: Request) {
  const { title, description, imageUrl } = await req.json();

  if (!title || !description || !imageUrl) {
    return NextResponse.json(
      { message: "All fields are required" },
      { status: 400 }
    );
  }

  const newsletter = await prisma.newsletter.create({
    data: { title, description, imageUrl },
  });

  return NextResponse.json(newsletter, { status: 201 });
}
