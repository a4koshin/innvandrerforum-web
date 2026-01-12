import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import cloudinary from "@/lib/cloudinary";
/* PUBLIC — list newsletters */
export async function GET() {
  const newsletters = await prisma.newsletter.findMany({
    orderBy: { createdAt: "desc" },
  });

  return NextResponse.json(newsletters);
}

export async function POST(req: Request) {
  const formData = await req.formData();

  const title = formData.get("title") as string;
  const description = formData.get("description") as string;
  const image = formData.get("image") as File;

  if (!title || !description || !image) {
    return NextResponse.json(
      { message: "All fields are required" },
      { status: 400 }
    );
  }

  // 🔹 Convert File → Buffer
  const bytes = await image.arrayBuffer();
  const buffer = Buffer.from(bytes);

  // 🔹 Upload to Cloudinary
  const uploadResult: any = await new Promise((resolve, reject) => {
    cloudinary.uploader
      .upload_stream({ folder: "newsletters" }, (error, result) => {
        if (error) reject(error);
        resolve(result);
      })
      .end(buffer);
  });

  // 🔹 Save URL to DB
  const newsletter = await prisma.newsletter.create({
    data: {
      title,
      description,
      imageUrl: uploadResult.secure_url,
      imageId: uploadResult.public_id, // ✅ SAVE THIS
    },
  });

  return NextResponse.json(newsletter, { status: 201 });
}
