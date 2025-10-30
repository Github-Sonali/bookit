import PromoCode from "../models/PromoCode.js";

// Create a new promo code (Admin)
export const createPromoCode = async (req, res) => {
  try {
    const { code, discountPercentage, expiryDate } = req.body;

    const existingCode = await PromoCode.findOne({ code });
    if (existingCode)
      return res.status(409).json({ message: "Promo code already exists" });

    const promo = new PromoCode({ code, discountPercentage, expiryDate });
    await promo.save();

    res.status(201).json({ message: "Promo code created", promo });
  } catch (error) {
    res.status(500).json({ message: "Error creating promo code", error });
  }
};

// Validate a promo code (User applies during booking)
export const validatePromoCode = async (req, res) => {
  try {
    const { code } = req.body;

    const promo = await PromoCode.findOne({ code: code.toUpperCase() });
    if (!promo) return res.status(404).json({ message: "Invalid promo code" });

    if (!promo.isActive)
      return res.status(400).json({ message: "Promo code inactive" });

    if (new Date() > promo.expiryDate)
      return res.status(400).json({ message: "Promo code expired" });

    res.status(200).json({
      valid: true,
      discountPercentage: promo.discountPercentage,
      message: "Promo code applied successfully",
    });
  } catch (error) {
    res.status(500).json({ message: "Error validating promo code", error });
  }
};
