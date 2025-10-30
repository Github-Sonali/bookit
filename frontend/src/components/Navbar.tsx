import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md p-4 flex justify-between items-center">
      <Link to="/" className="text-2xl font-bold text-blue-600">
        BookIt ✈️
      </Link>
      <div className="space-x-4">
        <Link to="/" className="hover:text-blue-600">
          Home
        </Link>
        <Link to="/my-bookings" className="hover:text-blue-600">
          My Bookings
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
