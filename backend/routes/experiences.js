import express from "express";
import {
  getAllExperiences,
  getExperienceById,
  createExperience,
} from "../controllers/experiencesController.js";

const router = express.Router();

// GET all experiences
router.get("/", getAllExperiences);

// GET single experience by id
router.get("/:id", getExperienceById);

// POST new experience
router.post("/", createExperience);

export default router;
