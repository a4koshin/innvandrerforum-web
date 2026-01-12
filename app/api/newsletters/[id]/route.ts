import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

/* UPDATE */
export async function PUT(
  req: Request,
  { params }: { params: { id: string } }
) {
  const { title, description, imageUrl } = await req.json();

  const updated = await prisma.newsletter.update({
    where: { id: params.id },
    data: { title, description, imageUrl },
  });

  return NextResponse.json(updated);
}

/* DELETE */
export async function DELETE(
  _: Request,
  { params }: { params: { id: string } }
) {
  await prisma.newsletter.delete({
    where: { id: params.id },
  });

  return NextResponse.json({ message: "Deleted successfully" });
}
