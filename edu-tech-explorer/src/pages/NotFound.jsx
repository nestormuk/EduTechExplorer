import React from "react";
import { Link } from "react-router-dom";
import Header from '../components/Header'
import Footer from "../components/Footer";
const NotFound = () => {
  return (
    <div >
        <Header />
    <div className="flex flex-col items-center justify-center p-16  text-white text-center">
      
      <h1 className="text-6xl font-bold text-blue-500">404</h1>
      <p className="text-xl mt-4">Oops! The page you are looking for does not exist.</p>
      <p className="text-md mt-2 text-gray-400">It might have been removed or the URL is incorrect.</p>

      <Link to="/" className="mt-6 px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition">
        Go Back Home
      </Link>
    </div>
    <Footer />
    </div>
    
  );
};

export default NotFound;
