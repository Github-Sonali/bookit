import mongoose from "mongoose";
import dotenv from "dotenv";
import Experience from "./models/Experience.js";

dotenv.config();

const experiences = [
  {
    title: "Skydiving Adventure",
    description: "Experience the thrill of freefall from 15,000 feet!",
    location: "Dubai, UAE",
    price: 5000,
    imageUrl: "https://images.unsplash.com/photo-1528892952291-009c663ce843",
    availableSlots: ["10:00 AM", "12:00 PM", "3:00 PM"],
  },
  {
    title: "Desert Safari",
    description: "Ride through sand dunes and enjoy dinner under the stars.",
    location: "Jaisalmer, India",
    price: 3000,
    imageUrl: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
    availableSlots: ["9:00 AM", "2:00 PM", "5:00 PM"],
  },
  {
    title: "Mountain Trekking",
    description:
      "Challenge yourself with a 2-day guided trek in the Himalayas.",
    location: "Manali, India",
    price: 4500,
    imageUrl: "https://images.unsplash.com/photo-1501785888041-af3ef285b470",
    availableSlots: ["7:00 AM", "11:00 AM"],
  },
];

const seedData = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    await Experience.deleteMany();
    await Experience.insertMany(experiences);
    console.log("✅ Sample experiences added!");
    process.exit();
  } catch (error) {
    console.error("❌ Error seeding data:", error);
    process.exit(1);
  }
};

seedData();
