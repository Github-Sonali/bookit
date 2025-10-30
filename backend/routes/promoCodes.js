import express from "express";
import {
  createPromoCode,
  validatePromoCode,
} from "../controllers/promoCodeController.js";

const router = express.Router();

// POST - Create promo code (admin)
router.post("/", createPromoCode);

// POST - Validate promo code (user)
router.post("/validate", validatePromoCode);

export default router;
