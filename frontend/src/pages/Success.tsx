import { Link } from "react-router-dom";

const Success = () => {
  return (
    <div className="flex flex-col items-center justify-center h-[80vh] text-center">
      <h2 className="text-3xl font-bold text-green-600 mb-4">
        🎉 Booking Confirmed!
      </h2>
      <p className="text-gray-600 mb-6">
        Thank you for booking with BookIt. Check your email for details.
      </p>
      <Link
        to="/"
        className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700"
      >
        Back to Home
      </Link>
    </div>
  );
};

export default Success;
