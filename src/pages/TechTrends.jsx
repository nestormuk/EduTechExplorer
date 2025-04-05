import React from 'react';
import { useNavigate } from "react-router-dom";



function TechTrends() {
    const navigate = useNavigate();
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-blue-50 to-white p-6 text-center">
      <div className="max-w-3xl bg-white rounded-xl shadow-lg p-8 mx-auto">
        <h1 className="text-3xl font-bold text-blue-800 mb-2">Tech Trends</h1>
        <div className="h-1 w-24 bg-blue-500 mx-auto mb-6 rounded-full"></div>
        
        <div className="flex flex-col items-center space-y-6">
          <h2 className="text-2xl text-gray-700 font-semibold">Page Under Maintenance</h2>
          <p className="text-gray-600 mb-6">
            We're currently updating this page with the latest technology trends and insights.
            Please check back soon for an enhanced experience!
          </p>
          
          <div className="w-full max-w-md mb-6">
            <img 
              src="public/Maintenance-bro.png" 
              alt="Maintenance Illustration" 
              className="w-full object-contain rounded-lg"
            />
          </div>
          
          <div className="mt-6">
            <p className="text-gray-500 text-sm">
              Expected completion: Within 48 hours
            </p>
            <button className="mt-4 bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-lg transition duration-300"
                onClick={() => navigate("/")}>
              Go to Home
            </button>
          </div>
        </div>
      </div>
      
      
    </div>
  );
}

export default TechTrends;