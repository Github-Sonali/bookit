import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import { createBooking, validatePromo } from "../services/api";
import type { AxiosError } from "axios";
import type { BookingRequest } from "../types/booking";

const Booking = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [slot, setSlot] = useState("");
  const [promoCode, setPromoCode] = useState("");
  const [discount, setDiscount] = useState(0);

  // price is constant
  const price = 5000;

  const handleApplyPromo = async () => {
    try {
      const res = await validatePromo(promoCode);
      setDiscount(res.data.discountPercentage);
      alert(res.data.message);
    } catch (error) {
      const err = error as AxiosError<{ message?: string }>;
      alert(err.response?.data?.message || "Invalid promo code");
    }
  };

  const handleBooking = async () => {
    try {
      const finalPrice = price - (price * discount) / 100;

      // ✅ Use the imported BookingRequest type here
      const bookingData: BookingRequest = {
        experienceId: id,
        userName,
        userEmail,
        slot,
        totalPrice: finalPrice,
      };

      await createBooking(bookingData);
      navigate("/success");
    } catch (error) {
      const err = error as AxiosError<{ message?: string }>;
      alert(err.response?.data?.message || "Booking failed");
    }
  };

  return (
    <div className="max-w-lg mx-auto bg-white shadow-lg rounded-xl p-6 mt-10">
      <h2 className="text-xl font-bold mb-4 text-center">Book Your Experience</h2>

      <input
        type="text"
        placeholder="Your Name"
        className="w-full border rounded p-2 mb-3"
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
      />
      <input
        type="email"
        placeholder="Your Email"
        className="w-full border rounded p-2 mb-3"
        value={userEmail}
        onChange={(e) => setUserEmail(e.target.value)}
      />
      <input
        type="text"
        placeholder="Preferred Slot (e.g. 10:00 AM)"
        className="w-full border rounded p-2 mb-3"
        value={slot}
        onChange={(e) => setSlot(e.target.value)}
      />

      <div className="flex items-center mb-3">
        <input
          type="text"
          placeholder="Promo Code"
          className="flex-1 border rounded p-2"
          value={promoCode}
          onChange={(e) => setPromoCode(e.target.value)}
        />
        <button
          onClick={handleApplyPromo}
          className="ml-2 bg-blue-600 text-white px-3 py-2 rounded hover:bg-blue-700"
        >
          Apply
        </button>
      </div>

      <p className="text-gray-600 mb-2">
        Price: ₹{price} | Discount: {discount}%
      </p>
      <p className="text-blue-600 font-semibold mb-4">
        Final Price: ₹{price - (price * discount) / 100}
      </p>

      <button
        onClick={handleBooking}
        className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700"
      >
        Confirm Booking
      </button>
    </div>
  );
};

export default Booking;
