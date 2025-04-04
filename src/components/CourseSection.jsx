import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import CourseCard from "./CourseCard";

const CourseSection = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("/mockdata/courses.json") // Fetch from public folder
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch course data");
        }
        return response.json();
      })
      .then((data) => {
        console.log(data); // Log the data to inspect the structure
        setCourses(data.courses.slice(0, 3)); // Access 'courses' and slice the first 3
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error loading course data:", error);
        setError(error.message);
        setLoading(false);
      });
  }, []);

  return (
    <div className="text-center py-16 px-6 bg-gradient-to-r from-blue-50 to-blue-100">
      <p className="text-sm text-blue-500 font-semibold uppercase tracking-wide">Top Choices</p>
      <h1 className="text-4xl font-bold text-gray-900 mt-2">Featured Programs</h1>
      <p className="text-gray-600 max-w-2xl mx-auto mt-2">
        Discover our hand-picked selection of leading educational programs in the technology field from prestigious institutions around the world.
      </p>

      {loading ? (
        // Loading spinner while fetching data
        <div className="flex justify-center items-center mt-12">
          <div className="animate-spin h-8 w-8 border-4 border-blue-600 border-t-transparent rounded-full"></div>
        </div>
      ) : error ? (
        // Show error if there is one
        <div className="text-red-500 mt-4">{error}</div>
      ) : (
        <div className="flex flex-wrap justify-center gap-8 mt-12">
          {courses.map((course) => (
            <CourseCard
              key={course.title} // Using `title` as a unique key
              title={course.title}
              provider={course.provider}
              price={course.price}
              link={course.link}
            />
          ))}
        </div>
      )}

      <button
        className="mt-12 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
        onClick={() => navigate("/courses")}
      >
        Explore More Courses
      </button>
    </div>
  );
};

export default CourseSection;
