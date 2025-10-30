import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { getExperienceById } from "../services/api";

interface Experience {
  _id: string;
  title: string;
  description: string;
  location: string;
  price: number;
  imageUrl: string;
  availableSlots: string[];
}

const ExperienceDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [experience, setExperience] = useState<Experience | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        const res = await getExperienceById(id!);
        setExperience(res.data);
      } catch (error) {
        console.error("Error fetching experience:", error);
      } finally {
        setLoading(false);
      }
    })();
  }, [id]);

  if (loading) return <p className="text-center mt-10">Loading...</p>;
  if (!experience) return <p className="text-center mt-10">Experience not found.</p>;

  return (
    <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-md p-6 mt-10">
      <img
        src={experience.imageUrl}
        alt={experience.title}
        className="w-full h-80 object-cover rounded-lg mb-6"
      />
      <h2 className="text-3xl font-bold mb-3">{experience.title}</h2>
      <p className="text-gray-600 mb-2">{experience.location}</p>
      <p className="text-gray-700 mb-4">{experience.description}</p>
      <p className="font-semibold text-lg mb-4">Price: ₹{experience.price}</p>

      <div className="mb-4">
        <h3 className="font-semibold mb-2">Available Slots:</h3>
        <ul className="flex flex-wrap gap-2">
          {experience.availableSlots.map((slot, index) => (
            <li key={index} className="bg-blue-100 text-blue-700 px-3 py-1 rounded-md">
              {slot}
            </li>
          ))}
        </ul>
      </div>

      <button
        onClick={() => navigate(`/book/${experience._id}`)}
        className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700"
      >
        Book Now
      </button>
    </div>
  );
};

export default ExperienceDetails;
