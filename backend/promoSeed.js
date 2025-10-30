import mongoose from "mongoose";
import dotenv from "dotenv";
import PromoCode from "./models/PromoCode.js";

dotenv.config();

const promos = [
  {
    code: "WELCOME10",
    discountPercentage: 10,
    expiryDate: new Date("2026-12-31"),
  },
  {
    code: "FESTIVE20",
    discountPercentage: 20,
    expiryDate: new Date("2026-01-01"),
  },
];

const seedPromos = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    await PromoCode.deleteMany();
    await PromoCode.insertMany(promos);
    console.log("✅ Promo codes seeded successfully!");
    process.exit();
  } catch (error) {
    console.error("❌ Error seeding promo codes:", error);
    process.exit(1);
  }
};

seedPromos();
