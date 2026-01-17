import express from "express";
import multer from "multer";
import {
  getAllNewsletters,
  getNewsletterById,
  createNewsletter,
  updateNewsletter,
  deleteNewsletter,
} from "../controllers/newsletterController";
import { protect } from "../middleware/authMiddleware";
import { authorize } from "../middleware/roleMiddleware";

const newsRouter = express.Router();

// Multer setup (store files in memory)
const storage = multer.memoryStorage();
const upload = multer({ storage });

// 🔐 Protect all routes
newsRouter.use(protect);

// Read operations (everyone can see)
newsRouter.get("/", getAllNewsletters);

// Admin-only operations
newsRouter.get("/:id", authorize("ADMIN"), getNewsletterById);
newsRouter.post(
  "/",
  authorize("ADMIN"),
  upload.single("image"),
  createNewsletter
);
newsRouter.put(
  "/:id",
  authorize("ADMIN"),
  upload.single("image"),
  updateNewsletter
);
newsRouter.delete("/:id", authorize("ADMIN"), deleteNewsletter);

export default newsRouter;
