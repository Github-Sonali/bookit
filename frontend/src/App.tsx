import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Booking from "./pages/Booking";
import Success from "./pages/Success";
import MyBookings from "./pages/MyBookings";
import ExperienceDetails from "./pages/ExperienceDetails"; // ✅ added this import

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="p-6">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/book/:id" element={<Booking />} />
          <Route path="/success" element={<Success />} />
          <Route path="/my-bookings" element={<MyBookings />} />
          <Route path="/experience/:id" element={<ExperienceDetails />} /> {/* ✅ fixed */}
        </Routes>
      </div>
    </div>
  );
}

export default App;
