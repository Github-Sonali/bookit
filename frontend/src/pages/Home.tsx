import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"; // ✅ Added for navigation
import ExperienceCard from "../components/ExperienceCard";
import Loader from "../components/Loader";
import { getExperiences } from "../services/api";
import type { Experience } from "../types/experience";

const Home = () => {
  const [experiences, setExperiences] = useState<Experience[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const navigate = useNavigate(); // ✅ Hook for navigation

  useEffect(() => {
    (async () => {
      try {
        const res = await getExperiences();
        setExperiences(res.data as Experience[]);
      } catch (error) {
        console.error("Error fetching experiences", error);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  if (loading) return <Loader />;

  return (
    <div className="px-4 sm:px-6 lg:px-8 py-8">
      <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">
        Explore Unique Experiences 🌍
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {experiences.map((exp) => (
          <div
            key={exp._id}
            className="bg-white shadow-lg rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-300"
          >
            <ExperienceCard {...exp} />
            <div className="p-4 text-center">
              <button
                onClick={() => navigate(`/experience/${exp._id}`)}
                className="mt-3 bg-blue-600 text-white px-5 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-300"
              >
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
