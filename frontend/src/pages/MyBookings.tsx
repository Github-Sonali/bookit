import { useEffect, useState } from "react";
import { getBookings } from "../services/api";
import Loader from "../components/Loader";
import type { BookingResponse } from "../types/booking";

const MyBookings = () => {
  const [bookings, setBookings] = useState<BookingResponse[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    (async () => {
      try {
        const res = await getBookings();
        setBookings(res.data);
      } catch (error) {
        console.error("Error fetching bookings:", error);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  if (loading) return <Loader />;

  return (
    <div className="max-w-4xl mx-auto mt-8">
      <h2 className="text-2xl font-bold mb-6 text-center text-blue-700">
        My Bookings
      </h2>

      {bookings.length === 0 ? (
        <p className="text-center text-gray-600">No bookings found yet.</p>
      ) : (
        <div className="space-y-4">
          {bookings.map((b) => (
            <div
              key={b.booking._id}
              className="bg-white p-5 rounded-lg shadow hover:shadow-lg transition"
            >
              <h3 className="text-lg font-semibold text-blue-700">
                {b.booking.userName}
              </h3>
              <p className="text-gray-600 text-sm">{b.booking.userEmail}</p>
              <p className="mt-2">
                <span className="font-semibold">Slot:</span> {b.booking.slot}
              </p>
              <p>
                <span className="font-semibold">Total Price:</span> ₹
                {b.booking.totalPrice}
              </p>
              <p>
                <span className="font-semibold">Payment:</span>{" "}
                {b.booking.paymentStatus}
              </p>
              <p className="text-gray-500 text-sm mt-2">
                Booked on {new Date(b.booking.createdAt).toLocaleDateString()}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MyBookings;
