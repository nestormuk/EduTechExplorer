import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const UniversityCard = ({ university }) => {
  const navigate = useNavigate();

  return (
    <Card className="p-4 border rounded-lg shadow-md">
      <CardContent>
        <h2 className="text-xl font-bold">{university.name}</h2>
        <p className="text-gray-600">{university.country}</p>
        <p className="text-gray-700">Notable Faculties: {university.notableFaculties.join(", ")}</p>
        <Button 
          className="mt-3" 
          onClick={() => navigate(`/university/${encodeURIComponent(university.name)}`)}
        >
          View More
        </Button>
      </CardContent>
    </Card>
  );
};

export default UniversityCard;
