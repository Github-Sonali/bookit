import Booking from "../models/Booking.js";
import Experience from "../models/Experience.js";

// Create a new booking
export const createBooking = async (req, res) => {
  try {
    const { experienceId, userName, userEmail, slot, totalPrice } = req.body;

    // check experience exists
    const exp = await Experience.findById(experienceId);
    if (!exp) return res.status(404).json({ message: "Experience not found" });

    // prevent double booking on same slot
    const existing = await Booking.findOne({ experience: experienceId, slot });
    if (existing)
      return res
        .status(409)
        .json({ message: "Slot already booked. Please choose another." });

    const newBooking = new Booking({
      experience: experienceId,
      userName,
      userEmail,
      slot,
      totalPrice,
      paymentStatus: "Completed",
    });

    await newBooking.save();

    res
      .status(201)
      .json({ message: "Booking confirmed!", booking: newBooking });
  } catch (error) {
    res.status(500).json({ message: "Error creating booking", error });
  }
};

// Get all bookings (for admin)
export const getAllBookings = async (req, res) => {
  try {
    const bookings = await Booking.find().populate("experience");
    res.status(200).json(bookings);
  } catch (error) {
    res.status(500).json({ message: "Error fetching bookings", error });
  }
};
