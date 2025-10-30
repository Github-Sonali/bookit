import Experience from "../models/Experience.js";

// ✅ Get all experiences
export const getAllExperiences = async (req, res) => {
  try {
    const experiences = await Experience.find();
    res.status(200).json(experiences);
  } catch (error) {
    console.error("Error fetching experiences:", error);
    res.status(500).json({ message: "Server error fetching experiences" });
  }
};

// ✅ Get a single experience by ID
export const getExperienceById = async (req, res) => {
  try {
    const experience = await Experience.findById(req.params.id);
    if (!experience) {
      return res.status(404).json({ message: "Experience not found" });
    }
    res.status(200).json(experience);
  } catch (error) {
    console.error("Error fetching experience:", error);
    res.status(500).json({ message: "Server error fetching experience" });
  }
};

// ✅ Create a new experience
export const createExperience = async (req, res) => {
  try {
    const newExp = new Experience(req.body);
    await newExp.save();
    res.status(201).json(newExp);
  } catch (error) {
    console.error("Error creating experience:", error);
    res.status(400).json({ message: "Error creating experience" });
  }
};
