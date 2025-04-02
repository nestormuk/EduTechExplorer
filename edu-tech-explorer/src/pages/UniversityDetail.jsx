import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { FaGlobe, FaUniversity, FaMapMarkerAlt, FaUserGraduate, FaUsers, FaBook, FaChartBar, FaSpinner, FaExclamationTriangle, FaImage } from "react-icons/fa";
import Header from "../components/Header";
import Footer from "../components/Footer";

const UniversityDetail = () => {
  const { name } = useParams();
  const [university, setUniversity] = useState(null);
  const [loading, setLoading] = useState(true);
  const [imageUrl, setImageUrl] = useState("");
  const [imageError, setImageError] = useState(false);

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
        if (foundUniversity) {
          fetchUniversityLogo(foundUniversity.websiteUrl);
        }
      })
      .catch((error) => {
        console.error("Error fetching university details:", error);
        setLoading(false);
      });
  }, [name]);

  const fetchUniversityLogo = async (websiteUrl) => {
    try {
      const response = await fetch(`https://${websiteUrl}`);
      const html = await response.text();
      const parser = new DOMParser();
      const doc = parser.parseFromString(html, "text/html");
      
      // Try fetching Open Graph image first
      const ogImage = doc.querySelector("meta[property='og:image']");
      if (ogImage && ogImage.content) {
        setImageUrl(ogImage.content);
        return;
      }
      
      // Try fetching the favicon or logo in the header
      const linkIcon = doc.querySelector("link[rel='icon'], link[rel='shortcut icon']");
      if (linkIcon && linkIcon.href) {
        setImageUrl(linkIcon.href);
        return;
      }
      
      setImageError(true);
    } catch (error) {
      console.error("Error fetching university logo:", error);
      setImageError(true);
    }
  };

  if (loading) {
    return (
      <div>
        <Header />
        <div className="flex justify-center items-center p-6">
          <FaSpinner className="animate-spin text-blue-600 text-4xl" />
        </div>
        <Footer />
      </div>
    );
  }

  if (!university) {
    return (
      <div>
        <Header />
        <div className="flex justify-center items-center p-6 text-red-600">
          <FaExclamationTriangle className="text-2xl mr-2" /> University not found.
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div>
      <Header />
      <div className="p-6 space-y-4">
        <h1 className="text-3xl font-bold flex items-center gap-2">
          <FaUniversity className="text-blue-600" /> {university.name}
        </h1>
        {imageUrl ? (
          <img src={imageUrl} alt="University Logo" className="w-full max-w-lg rounded-lg shadow-md" />
        ) : imageError ? (
          <p className="flex items-center gap-2 text-red-600"><FaImage /> Error displaying university logo.</p>
        ) : (
          <p className="text-gray-500 flex items-center gap-2"><FaImage /> Loading logo...</p>
        )}
        <p className="flex items-center gap-2"><FaGlobe className="text-gray-600" /> <strong>Country:</strong> {university.country}</p>
        <p className="flex items-center gap-2"><FaChartBar className="text-gray-600" /> <strong>Rank in Africa:</strong> {university.rankedInAfrica}</p>
        <p className="flex items-center gap-2"><FaMapMarkerAlt className="text-gray-600" /> <strong>Location:</strong> {university.location}</p>
        <p className="flex items-center gap-2"><FaUserGraduate className="text-gray-600" /> <strong>Type:</strong> {university.type}</p>
        <p className="flex items-center gap-2"><FaUsers className="text-gray-600" /> <strong>Enrollment:</strong> {university.enrollment}</p>
        <p className="flex items-center gap-2"><FaBook className="text-gray-600" /> <strong>Notable Faculties:</strong> {university.notableFaculties.join(", ")}</p>
        <p className="flex items-center gap-2"><FaGlobe className="text-gray-600" /> <strong>Website:</strong> 
          <a href={`https://${university.websiteUrl}`} target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">
            {university.websiteUrl}
          </a>
        </p>
      </div>
      <Footer />
    </div>
  );
};

export default UniversityDetail;
