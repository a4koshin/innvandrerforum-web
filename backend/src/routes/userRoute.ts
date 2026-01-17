import express from "express";
import {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
} from "../controllers/userController";
import { protect } from "../middleware/authMiddleware";
import { authorize } from "../middleware/roleMiddleware"; // <-- import authorize

const userRouter = express.Router();

userRouter.use(protect); // 🔐 all routes require login

// Only ADMIN can access these routes
userRouter.get("/", authorize("ADMIN"), getAllUsers);
userRouter.get("/:id", authorize("ADMIN"), getUserById);
userRouter.post("/", authorize("ADMIN"), createUser);
userRouter.put("/:id", authorize("ADMIN"), updateUser);
userRouter.delete("/:id", authorize("ADMIN"), deleteUser);

export default userRouter;
