import express from "express";
import {
  createBooking,
  getAllBookings,
} from "../controllers/bookingsController.js";

const router = express.Router();

// POST - create booking
router.post("/", createBooking);

// GET - get all bookings (optional)
router.get("/", getAllBookings);

export default router;
