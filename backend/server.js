import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import experienceRoutes from "./routes/experiences.js";
import bookingRoutes from "./routes/bookings.js";
import promoRoutes from "./routes/promoCodes.js";

dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use("/api/experiences", experienceRoutes);
app.use("/api/bookings", bookingRoutes);
app.use("/api/promos", promoRoutes);

// Default route
app.get("/", (req, res) => {
  res.send("Backend is running 🚀");
});

// Connect to MongoDB
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("✅ MongoDB Connected"))
  .catch((err) => console.log("❌ DB Connection Error:", err));

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
