import { Request, Response } from "express";
import prisma from "../prisma/client";
import cloudinary from "cloudinary";

// Cloudinary configuration
cloudinary.v2.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// Get all active newsletters (everyone can see)
export const getAllNewsletters = async (_req: Request, res: Response) => {
  try {
    const newsletters = await prisma.newsletter.findMany({
      where: { status: "ACTIVE" },
      select: {
        id: true,
        name: true,
        description: true,
        image: true,
        status: true,
      },
    });

    res.status(200).json({ success: true, newsletters });
  } catch (error: any) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// Get single newsletter (everyone can see)
export const getNewsletterById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const newsletter = await prisma.newsletter.findFirst({
      where: { id, status: "ACTIVE" },
      select: {
        id: true,
        name: true,
        description: true,
        image: true,
        status: true,
      },
    });

    if (!newsletter) {
      return res
        .status(404)
        .json({ success: false, message: "Newsletter not found" });
    }

    res.status(200).json({ success: true, newsletter });
  } catch (error: any) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// Create newsletter (ADMIN only)
export const createNewsletter = async (req: any, res: Response) => {
  try {
    if (req.user.role !== "ADMIN") {
      return res.status(403).json({ success: false, message: "Access denied" });
    }

    const { name, description } = req.body;
    const file = req.file;

    if (!name || !description || !file) {
      return res
        .status(400)
        .json({ success: false, message: "All fields are required" });
    }

    // Upload image to Cloudinary
    const uploadResult = await new Promise<any>((resolve, reject) => {
      const stream = cloudinary.v2.uploader.upload_stream(
        { folder: "newsletter" },
        (error, result) => {
          if (error || !result) reject(error || new Error("Upload failed"));
          else resolve(result);
        }
      );
      stream.end(file.buffer);
    });

    const newsletter = await prisma.newsletter.create({
      data: {
        name,
        description,
        image: uploadResult.secure_url,
        status: "ACTIVE",
      },
      select: {
        id: true,
        name: true,
        description: true,
        image: true,
        status: true,
      },
    });

    res
      .status(201)
      .json({
        success: true,
        message: "Newsletter created successfully",
        newsletter,
      });
  } catch (error: any) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// Update newsletter (ADMIN only)
export const updateNewsletter = async (req: any, res: Response) => {
  try {
    if (req.user.role !== "ADMIN") {
      return res.status(403).json({ success: false, message: "Access denied" });
    }

    const { id } = req.params;
    const { name, description } = req.body;
    const file = req.file;

    const newsletter = await prisma.newsletter.findFirst({
      where: { id, status: "ACTIVE" },
    });
    if (!newsletter) {
      return res
        .status(404)
        .json({ success: false, message: "Newsletter not found" });
    }

    let imageUrl = newsletter.image;

    // If new image uploaded, replace it in Cloudinary
    if (file) {
      const uploadResult = await new Promise<any>((resolve, reject) => {
        const stream = cloudinary.v2.uploader.upload_stream(
          { folder: "newsletter" },
          (error, result) => {
            if (error || !result) reject(error || new Error("Upload failed"));
            else resolve(result);
          }
        );
        stream.end(file.buffer);
      });
      imageUrl = uploadResult.secure_url;
    }

    const updatedNewsletter = await prisma.newsletter.update({
      where: { id },
      data: { name, description, image: imageUrl },
      select: {
        id: true,
        name: true,
        description: true,
        image: true,
        status: true,
      },
    });

    res.status(200).json({
      success: true,
      message: "Newsletter updated successfully",
      newsletter: updatedNewsletter,
    });
  } catch (error: any) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// Soft delete newsletter (ADMIN only)
export const deleteNewsletter = async (req: any, res: Response) => {
  try {
    if (req.user.role !== "ADMIN") {
      return res.status(403).json({ success: false, message: "Access denied" });
    }

    const { id } = req.params;

    const newsletter = await prisma.newsletter.update({
      where: { id },
      data: { status: "DELETED" },
      select: {
        id: true,
        name: true,
        description: true,
        image: true,
        status: true,
      },
    });

    res
      .status(200)
      .json({
        success: true,
        message: "Newsletter soft-deleted successfully",
        newsletter,
      });
  } catch (error: any) {
    res.status(404).json({ success: false, message: "Newsletter not found" });
  }
};
