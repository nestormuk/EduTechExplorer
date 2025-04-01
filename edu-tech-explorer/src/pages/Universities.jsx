import { useEffect, useState } from "react";
import UniversityCard from "../components/UniversityCard";
import Header from "../components/Header";
import Footer from "../components/Footer";

const UniversityPage = () => {
  const [universities, setUniversities] = useState([]);

  useEffect(() => {
    fetch("/mockdata/universities.json")
      .then((response) => response.json())
      .then((data) => setUniversities(data))
      .catch((error) => console.error("Error loading university data:", error));
  }, []);

  return (
    <div>
        <Header />
        <div className="p-6 bg-gray-100 min-h-screen">
            <h1 className="text-3xl font-bold mb-4">Universities</h1>
            <p className="mb-6">Explore universities from around the world.</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {universities.map((uni) => (
                <UniversityCard key={uni.name} university={uni} />
            ))}
            </div>
        </div>
        <Footer />

    </div>
  );
};

export default UniversityPage;
