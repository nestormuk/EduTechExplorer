import React from "react";
import { ExternalLink, BookOpen, Info } from "lucide-react";

const CourseCard = ({ title, provider, price, link }) => {
  
  const hasExtraPriceInfo = /\(.*\)/.test(price);
  const mainPrice = price.split("(")[0].trim();
  const tooltipText = price.includes("(") ? price.slice(price.indexOf("(")).replace(/[()]/g, "") : "";

  return (
    <div className="bg-white shadow-lg rounded-xl overflow-hidden border border-gray-200 w-96  flex flex-col">
      {/* Decorative Top Bar */}
      <div className="h-2 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"></div>

      {/* Card Body */}
      <div className="p-8 flex-grow flex flex-col ">
        <div className="flex items-center text-sm text-gray-600 mb-3">
          <BookOpen className="w-4 h-4 mr-1" />
          {provider}
        </div>

        <h2 className="text-lg font-semibold text-gray-800 mb-4 line-clamp-2 hover:text-indigo-600 transition-colors">
          {title}
        </h2>

        <div className="flex items-center mt-auto text-emerald-600 font-bold text-lg relative group">
          {mainPrice}
          {hasExtraPriceInfo && (
            <div className="ml-2 relative">
              <Info className="w-4 h-4 text-gray-400 cursor-pointer group-hover:text-indigo-500" />
              <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 w-max max-w-xs bg-black text-white text-xs rounded-md py-1 px-2 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-10">
                {tooltipText}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Button */}
      <div className="px-5 pb-5 mt-auto">
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full inline-flex items-center justify-center bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-medium py-2.5 px-4 rounded-lg transition shadow hover:shadow-lg"
        >
          Go to Course <ExternalLink className="w-4 h-4 ml-2" />
        </a>
      </div>
    </div>
  );
};

export default CourseCard;
