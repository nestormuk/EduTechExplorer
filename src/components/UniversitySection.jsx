import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import UniversityCard from "./UniversityCard";

const UniversitySection = () => {
  const [universities, setUniversities] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("/mockdata/universities.json") // Fetch from public folder
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch university data");
        }
        return response.json();
      })
      .then((data) => {
        setUniversities(data.slice(0, 3)); 
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error loading university data:", error);
        setLoading(false);
      });
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Top Universities</h2>

      {loading ? (
       
        <div className="flex justify-center items-center">
          <div className="animate-spin h-8 w-8 border-4 border-blue-600 border-t-transparent rounded-full"></div>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {universities.map((uni) => (
            <UniversityCard key={uni.name} university={uni} />
          ))}
        </div>
      )}

      <button
        className="mt-6 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
        onClick={() => navigate("/universities")}
      >
        View More Universities
      </button>
    </div>
  );
};

export default UniversitySection;
