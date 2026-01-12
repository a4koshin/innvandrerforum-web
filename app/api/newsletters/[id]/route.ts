import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import cloudinary from "@/lib/cloudinary";

/* UPDATE */
export async function PUT(
  req: Request,
  context: { params: Promise<{ id: string }> }
) {
  try {
    // ✅ UNWRAP params
    const { id } = await context.params;

    const formData = await req.formData();
    const title = formData.get("title") as string;
    const description = formData.get("description") as string;
    const image = formData.get("image") as File | null;

    if (!title || !description) {
      return NextResponse.json(
        { message: "Title and description are required" },
        { status: 400 }
      );
    }

    // ✅ Fetch existing newsletter
    const existing = await prisma.newsletter.findUnique({
      where: { id },
    });

    if (!existing) {
      return NextResponse.json(
        { message: "Newsletter not found" },
        { status: 404 }
      );
    }

    let imageUrl = existing.imageUrl;
    let imageId = existing.imageId;

    // ✅ Replace image only if provided
    if (image && image.size > 0) {
      if (existing.imageId) {
        await cloudinary.uploader.destroy(existing.imageId);
      }

      const buffer = Buffer.from(await image.arrayBuffer());

      const uploadResult: any = await new Promise((resolve, reject) => {
        cloudinary.uploader
          .upload_stream({ folder: "newsletters" }, (error, result) => {
            if (error) reject(error);
            resolve(result);
          })
          .end(buffer);
      });

      imageUrl = uploadResult.secure_url;
      imageId = uploadResult.public_id;
    }

    await prisma.newsletter.update({
      where: { id },
      data: {
        title,
        description,
        imageUrl,
        imageId,
      },
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("UPDATE NEWSLETTER ERROR:", error);
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  }
}

/* DELETE */
export async function DELETE(
  _req: Request,
  context: { params: Promise<{ id: string }> }
) {
  try {
    // ✅ UNWRAP params (THIS IS THE KEY FIX)
    const { id } = await context.params;

    // ✅ Find newsletter
    const newsletter = await prisma.newsletter.findUnique({
      where: { id },
    });

    if (!newsletter) {
      return NextResponse.json(
        { message: "Newsletter not found" },
        { status: 404 }
      );
    }

    // ✅ Delete Cloudinary image (if exists)
    if (newsletter.imageId) {
      await cloudinary.uploader.destroy(newsletter.imageId);
    }

    // ✅ Delete DB record
    await prisma.newsletter.delete({
      where: { id },
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("DELETE NEWSLETTER ERROR:", error);
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  }
}
