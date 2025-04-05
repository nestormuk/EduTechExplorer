import React, { useEffect, useState } from 'react';
import CourseCard from '../components/CourseCard';

const Courses = () => {
  const [courses, setCourses] = useState([]);
  const [filteredCourses, setFilteredCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  // Filter states
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedProvider, setSelectedProvider] = useState('');
  const [priceRange, setPriceRange] = useState(2000);
  
  // Get unique providers for the dropdown
  const [providers, setProviders] = useState([]);

  // Function to parse price string to number (e.g., "$12.99" to 12.99)
  const parsePriceToNumber = (priceString) => {
    if (!priceString) return 0;
    return parseFloat(priceString.replace(/[^0-9.]/g, ''));
  };

  useEffect(() => {
    fetch("/mockdata/courses.json") 
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch course data");
        }
        return response.json();
      })
      .then((data) => {
        setCourses(data.courses); 
        setFilteredCourses(data.courses);
        
        // Extract unique providers for the dropdown
        const uniqueProviders = [...new Set(data.courses.map(course => course.provider))];
        setProviders(uniqueProviders);
        
        // Find max price for range slider
        const maxPrice = Math.max(...data.courses.map(course => parsePriceToNumber(course.price)));
        setPriceRange(maxPrice);
        
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error loading course data:", error);
        setError(error.message);
        setLoading(false);
      });
  }, []);

  // Apply filters whenever any filter value changes
  useEffect(() => {
    if (courses.length === 0) return;
    
    const filtered = courses.filter(course => {
      // Search filter (title and provider)
      const matchesSearch = searchTerm === '' || 
        course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        course.provider.toLowerCase().includes(searchTerm.toLowerCase());
      
      // Provider filter
      const matchesProvider = selectedProvider === '' || 
        course.provider === selectedProvider;
      
      // Price filter - convert price string to number
      const coursePrice = parsePriceToNumber(course.price);
      const matchesPrice = coursePrice <= priceRange;
      
      return matchesSearch && matchesProvider && matchesPrice;
    });
    
    setFilteredCourses(filtered);
  }, [searchTerm, selectedProvider, priceRange, courses]);

  // Reset all filters
  const resetFilters = () => {
    setSearchTerm('');
    setSelectedProvider('');
    const maxPrice = Math.max(...courses.map(course => parsePriceToNumber(course.price)));
    setPriceRange(maxPrice);
  };

  return (
    <div className="text-center py-16 px-6 bg-gradient-to-r from-blue-50 to-blue-100">
      <p className="text-sm text-blue-500 font-semibold uppercase tracking-wide">Top Choices</p>
      <h1 className="text-4xl font-bold text-gray-900 mt-2">Featured Programs</h1>
      <p className="text-gray-600 max-w-2xl mx-auto mt-2">
        Discover our hand-picked selection of leading educational programs in the technology field from prestigious institutions around the world.
      </p>

      {/* Filter Section */}
      <div className="mt-8 max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-md">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Search Input */}
          <div className="relative">
            <label htmlFor="search" className="block text-sm font-medium text-gray-700 mb-1 text-left">
              Search Courses
            </label>
            <input
              type="text"
              id="search"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search by title or provider..."
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          
          {/* Provider Dropdown */}
          <div>
            <label htmlFor="provider" className="block text-sm font-medium text-gray-700 mb-1 text-left">
              Provider
            </label>
            <select
              id="provider"
              value={selectedProvider}
              onChange={(e) => setSelectedProvider(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="">All Providers</option>
              {providers.map((provider) => (
                <option key={provider} value={provider}>
                  {provider}
                </option>
              ))}
            </select>
          </div>
          
          {/* Price Range Slider */}
          <div>
            <div className="flex justify-between items-center">
              <label htmlFor="price" className="block text-sm font-medium text-gray-700 mb-1 text-left">
                Max Price: ${priceRange.toFixed(2)}
              </label>
              <span className="text-xs text-gray-500">
                {filteredCourses.length} of {courses.length} courses
              </span>
            </div>
            <input
              type="range"
              id="price"
              min="0"
              max={Math.max(...courses.map(course => parsePriceToNumber(course.price)), 2000)}
              value={priceRange}
              onChange={(e) => setPriceRange(Number(e.target.value))}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
            />
          </div>
        </div>
        
        {/* Reset Button */}
        <button
          onClick={resetFilters}
          className="mt-4 px-4 py-2 bg-gray-200 hover:bg-gray-300 text-gray-800 rounded-md transition-colors"
        >
          Reset Filters
        </button>
      </div>

      {loading ? (
        // Loading spinner while fetching data
        <div className="flex justify-center items-center mt-12">
          <div className="animate-spin h-8 w-8 border-4 border-blue-600 border-t-transparent rounded-full"></div>
        </div>
      ) : error ? (
        // Show error if there is one
        <div className="text-red-500 mt-4">{error}</div>
      ) : filteredCourses.length === 0 ? (
        // No results found
        <div className="mt-12 text-gray-600">
          <p>No courses match your current filters.</p>
          <button 
            onClick={resetFilters}
            className="mt-2 text-blue-500 underline"
          >
            Clear filters
          </button>
        </div>
      ) : (
        <div className="flex flex-wrap justify-center gap-8 mt-12">
          {filteredCourses.map((course) => (
            <CourseCard
              key={course.title}
              title={course.title}
              provider={course.provider}
              price={course.price}
              link={course.link}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Courses;