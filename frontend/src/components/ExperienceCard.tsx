import { Link } from "react-router-dom";

interface ExperienceProps {
  _id: string;
  title: string;
  description: string;
  location: string;
  price: number;
  imageUrl: string;
}

const ExperienceCard = ({
  _id,
  title,
  description,
  location,
  price,
  imageUrl,
}: ExperienceProps) => {
  return (
    <div className="bg-white shadow-lg rounded-xl overflow-hidden hover:shadow-2xl transition">
      <img src={imageUrl} alt={title} className="h-56 w-full object-cover" />
      <div className="p-4">
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-gray-500 text-sm mt-1">{location}</p>
        <p className="text-gray-700 text-sm mt-2">{description}</p>
        <p className="text-blue-600 font-semibold mt-3">₹{price}</p>
        <Link
          to={`/book/${_id}`}
          className="inline-block mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
        >
          Book Now
        </Link>
      </div>
    </div>
  );
};

export default ExperienceCard;
