import { Request, Response } from "express";
import prisma from "../prisma/client"; // default instance
import { UserStatus } from "@prisma/client"; // enum directly from Prisma
import bcrypt from "bcryptjs";

// Get all active users (ADMIN only)
export const getAllUsers = async (req: any, res: Response) => {
  try {
    if (req.user.role !== "ADMIN") {
      return res.status(403).json({ success: false, message: "Access denied" });
    }

    const users = await prisma.user.findMany({
      where: { status: UserStatus.ACTIVE },
      select: { id: true, name: true, email: true, role: true, status: true },
    });

    res.status(200).json({ success: true, users });
  } catch (error: any) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// Get single active user by ID (ADMIN only)
export const getUserById = async (req: any, res: Response) => {
  try {
    if (req.user.role !== "ADMIN") {
      return res.status(403).json({ success: false, message: "Access denied" });
    }

    const user = await prisma.user.findFirst({
      where: { id: req.params.id, status: UserStatus.ACTIVE },
      select: { id: true, name: true, email: true, role: true, status: true },
    });

    if (!user) {
      return res
        .status(404)
        .json({ success: false, message: "User not found" });
    }

    res.status(200).json({ success: true, user });
  } catch (error: any) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// Create new user (ADMIN only)
export const createUser = async (req: any, res: Response) => {
  try {
    if (req.user.role !== "ADMIN") {
      return res.status(403).json({ success: false, message: "Access denied" });
    }

    const { name, email, password, role } = req.body;
    if (!name || !email || !password || !role) {
      return res
        .status(400)
        .json({ success: false, message: "All fields are required" });
    }

    const existingUser = await prisma.user.findUnique({ where: { email } });
    if (existingUser) {
      return res
        .status(400)
        .json({ success: false, message: "User already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await prisma.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
        role,
        status: UserStatus.ACTIVE,
      },
      select: { id: true, name: true, email: true, role: true, status: true },
    });

    res
      .status(201)
      .json({ success: true, message: "User created successfully", user });
  } catch (error: any) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// Update user (ADMIN only)
export const updateUser = async (req: any, res: Response) => {
  try {
    if (req.user.role !== "ADMIN") {
      return res.status(403).json({ success: false, message: "Access denied" });
    }

    const { id } = req.params;
    const { name, email, role, password } = req.body;

    const user = await prisma.user.findFirst({
      where: { id, status: UserStatus.ACTIVE },
    });
    if (!user) {
      return res
        .status(404)
        .json({ success: false, message: "User not found" });
    }

    const updatedData: any = { name, email, role };
    if (password) updatedData.password = await bcrypt.hash(password, 10);

    const updatedUser = await prisma.user.update({
      where: { id },
      data: updatedData,
      select: { id: true, name: true, email: true, role: true, status: true },
    });

    res.status(200).json({
      success: true,
      message: "User updated successfully",
      user: updatedUser,
    });
  } catch (error: any) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// Soft delete user (ADMIN only)
export const deleteUser = async (req: any, res: Response) => {
  try {
    if (req.user.role !== "ADMIN") {
      return res.status(403).json({ success: false, message: "Access denied" });
    }

    const { id } = req.params;

    const user = await prisma.user.update({
      where: { id },
      data: { status: UserStatus.DELETED },
      select: { id: true, name: true, email: true, role: true, status: true },
    });

    res
      .status(200)
      .json({ success: true, message: "User soft-deleted successfully", user });
  } catch (error: any) {
    res.status(404).json({ success: false, message: "User not found" });
  }
};
