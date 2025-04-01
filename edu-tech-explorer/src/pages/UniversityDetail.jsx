import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const UniversityDetail = () => {
  const { name } = useParams();
  const [university, setUniversity] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/mockdata/universities.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch university data");
        }
        return response.json();
      })
      .then((data) => {
        const foundUniversity = data.find((uni) => uni.name === name);
        setUniversity(foundUniversity);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching university details:", error);
        setLoading(false);
      });
  }, [name]);

  if (loading) {
    return (
      <div className="flex justify-center items-center p-6">
        <div className="animate-spin h-8 w-8 border-4 border-blue-600 border-t-transparent rounded-full"></div>
      </div>
    );
  }

  if (!university) {
    return <p className="text-red-600 p-6">University not found.</p>;
  }

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">{university.name}</h1>
      <p><strong>Country:</strong> {university.country}</p>
      <p><strong>Founded:</strong> {university.foundedYear}</p>
      <p><strong>Location:</strong> {university.location}</p>
      <p><strong>Type:</strong> {university.type}</p>
      <p><strong>Enrollment:</strong> {university.enrollment}</p>
      <p><strong>Rank in Africa:</strong> {university.rankedInAfrica}</p>
      <p><strong>Notable Faculties:</strong> {university.notableFaculties.join(", ")}</p>
      <p>
        <strong>Website:</strong>{" "}
        <a href={`https://${university.websiteUrl}`} target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">
          {university.websiteUrl}
        </a>
      </p>
      <p><strong>Research Output:</strong> {university.researchOutput}</p>
      <p><strong>International Students:</strong> {university.internationalStudents}</p>
    </div>
  );
};

export default UniversityDetail;
