import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

/* UPDATE */
export async function PUT(
  request: NextRequest,
  context: { params: Promise<{ id: string }> }
) {
  const { id } = await context.params;
  const { title, description, imageUrl } = await request.json();

  const updated = await prisma.newsletter.update({
    where: { id },
    data: { title, description, imageUrl },
  });

  return NextResponse.json(updated);
}

/* DELETE */
export async function DELETE(
  request: NextRequest,
  context: { params: Promise<{ id: string }> }
) {
  const { id } = await context.params;

  await prisma.newsletter.delete({
    where: { id },
  });

  return NextResponse.json({ message: "Deleted successfully" });
}
