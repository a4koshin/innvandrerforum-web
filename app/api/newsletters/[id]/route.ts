import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import cloudinary from "@/lib/cloudinary";

/* UPDATE */
export async function PUT(req: Request, { params }: any) {
  const formData = await req.formData();
  const title = formData.get("title") as string;
  const description = formData.get("description") as string;
  const image = formData.get("image") as File | null;

  const existing = await prisma.newsletter.findUnique({
    where: { id: params.id },
  });

  if (!existing)
    return NextResponse.json({ message: "Not found" }, { status: 404 });

  let imageUrl = existing.imageUrl;
  let imageId = existing.imageId;

  if (image) {
    await cloudinary.uploader.destroy(existing.imageId); // 🔥 delete old

    const buffer = Buffer.from(await image.arrayBuffer());
    const upload: any = await new Promise((resolve, reject) => {
      cloudinary.uploader
        .upload_stream({ folder: "newsletters" }, (err, res) => {
          if (err) reject(err);
          resolve(res);
        })
        .end(buffer);
    });

    imageUrl = upload.secure_url;
    imageId = upload.public_id;
  }

  await prisma.newsletter.update({
    where: { id: params.id },
    data: { title, description, imageUrl, imageId },
  });

  return NextResponse.json({ success: true });
}

/* DELETE */
export async function DELETE(_: Request, { params }: any) {
  const newsletter = await prisma.newsletter.findUnique({
    where: { id: params.id },
  });

  if (!newsletter) {
    return NextResponse.json({ message: "Not found" }, { status: 404 });
  }

  await cloudinary.uploader.destroy(newsletter.imageId); // 🔥 delete image
  await prisma.newsletter.delete({ where: { id: params.id } });

  return NextResponse.json({ success: true });
}
