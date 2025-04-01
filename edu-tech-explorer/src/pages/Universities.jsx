import { useEffect, useState } from "react";
import UniversityCard from "../components/UniversityCard";
import Header from "../components/Header";
import Footer from "../components/Footer";

const UniversityPage = () => {
  const [universities, setUniversities] = useState([]);
  const [filteredUniversities, setFilteredUniversities] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [locationFilter, setLocationFilter] = useState("");
  const [facultiesFilter, setFacultiesFilter] = useState("");

  useEffect(() => {
    fetch("/mockdata/universities.json")
      .then((response) => response.json())
      .then((data) => {
        setUniversities(data);
        setFilteredUniversities(data); // Initialize with all universities
      })
      .catch((error) => console.error("Error loading university data:", error));
  }, []);

  // Filter universities based on search query and selected filters
  useEffect(() => {
    const filtered = universities.filter((university) => {
      const matchesSearchQuery = university.name
        .toLowerCase()
        .includes(searchQuery.toLowerCase());
      const matchesLocation = locationFilter
        ? university.country.toLowerCase().includes(locationFilter.toLowerCase())
        : true;
      const matchesFaculties = facultiesFilter
        ? university.notableFaculties.some((faculty) =>
            faculty.toLowerCase().includes(facultiesFilter.toLowerCase())
          )
        : true;

      return matchesSearchQuery && matchesLocation && matchesFaculties;
    });

    setFilteredUniversities(filtered);
  }, [searchQuery, locationFilter, facultiesFilter, universities]);

  return (
    <div>
      <Header />
      <div className="p-6 bg-gray-100 min-h-screen">
        <h1 className="text-3xl font-bold mb-4">Universities</h1>
        <p className="mb-6">Explore universities from around the world.</p>

        {/* Search and Filter Section */}
        <div className="mb-6 flex gap-4">
          <input
            type="text"
            placeholder="Search by name"
            className="px-4 py-2 border rounded-md"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <input
            type="text"
            placeholder="Filter by location"
            className="px-4 py-2 border rounded-md"
            value={locationFilter}
            onChange={(e) => setLocationFilter(e.target.value)}
          />
          <input
            type="text"
            placeholder="Filter by notable faculties"
            className="px-4 py-2 border rounded-md"
            value={facultiesFilter}
            onChange={(e) => setFacultiesFilter(e.target.value)}
          />
        </div>

        {/* Display filtered universities */}
        {filteredUniversities.length === 0 ? (
          <p>No universities found that match your search and filter criteria.</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {filteredUniversities.map((uni) => (
              <UniversityCard key={uni.name} university={uni} />
            ))}
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default UniversityPage;
