import { useNavigate } from "react-router-dom";

const UniversityCard = ({ university }) => {
  const navigate = useNavigate();

  return (
    <div className="p-4 border rounded-lg shadow-md bg-white">
      <div className="p-4">
        <h2 className="text-xl font-bold">{university.name}</h2>
        <p className="text-gray-600">{university.country}</p>
        <p className="text-gray-700">
          <strong>Notable Faculties:</strong> {university.notableFaculties.join(", ")}
        </p>
        <button 
          className="mt-3 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
          onClick={() => navigate(`/university/${encodeURIComponent(university.name)}`)}
        >
          View More
        </button>
      </div>
    </div>
  );
};

export default UniversityCard;
