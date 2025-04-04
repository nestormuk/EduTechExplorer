import React from "react";

const CourseCard = ({ title, provider, price, link }) => {
  return (
    <div className="bg-white shadow-lg rounded-2xl p-4 w-80 border border-gray-200">
      <h2 className="text-xl font-semibold text-gray-800">{title}</h2>
      <p className="text-sm text-gray-600 mt-1">Provider: {provider}</p>
      <p className="text-lg font-bold text-blue-500 mt-2">{price}</p>
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-4 inline-block text-white bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg transition"
      >
        Go to Course
      </a>
    </div>
  );
};

export default CourseCard;
