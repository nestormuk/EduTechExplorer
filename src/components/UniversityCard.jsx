import { useNavigate } from "react-router-dom";
import { MapPin } from "lucide-react"; 

const UniversityCard = ({ university }) => {
  const navigate = useNavigate();

  return (
    <div className="p-4 border rounded-lg shadow-md bg-white transition-transform transform hover:scale-105 hover:shadow-lg">
      <div className="p-4">
        <h2 className="text-xl font-bold">{university.name}</h2>
        <p className="text-gray-600 flex items-center">
          <MapPin className="w-4 h-4 text-gray-500 mr-1" />
          {university.country}
        </p>
        <p className="text-gray-700 mt-2">
          <strong>Notable Faculties:</strong> {university.notableFaculties.join(", ")}
        </p>
        <button 
          className="mt-3 text-blue-600 hover:text-blue-800 flex items-center gap-1 transition"
          onClick={() => navigate(`/university/${encodeURIComponent(university.name)}`)}
        >
          More details →
        </button>
      </div>
    </div>
  );
};

export default UniversityCard;
