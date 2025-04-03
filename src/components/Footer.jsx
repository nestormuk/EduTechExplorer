import React from 'react';
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[#1D2D44] text-white py-8">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between  md:items-start">
          {/* Left side */}
          <div className="mb-4 md:mb-0">
             {/* Logo */}
            <div className="text-lg font-bold">
              Edu<span className="text-blue-500">Tech</span>Explorer
            </div>
            <p className="mt-2 text-sm">
              Your ultimate resource for finding top universities, training programs, and staying updated with emerging tech trends.
            </p>
            <p className="mt-4 text-xs">© 2025 EduTechExplorer. All rights reserved.</p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col md:ml-12 md:w-1/4">
            <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
            <div className="text-sm space-y-2">

            <Link to="/" className="hover:text-blue-500">Home</Link>
            <Link to="/universities" className="hover:text-blue-500">Universities</Link>
            <Link to="/courses" className="hover:text-blue-500">Courses</Link>
            <Link to="/tech-trends" className="hover:text-blue-500">Tech Trends</Link>
            <Link to="/about" className="hover:text-blue-500">About</Link>

            </div>
          </div>

          {/* Resources */}
          <div className="flex flex-col md:ml-12 md:w-1/4 mt-4 md:mt-0">
            <h3 className="text-lg font-semibold mb-2">Resources</h3>
            <ul className="text-sm space-y-2">
              <li><a href="/blog" className="hover:underline">Blog</a></li>
              <li><a href="/career-advice" className="hover:underline">Career Advice</a></li>
              <li><a href="/success-stories" className="hover:underline">Success Stories</a></li>
              <li><a href="/faq" className="hover:underline">FAQ</a></li>
              <li><a href="/support" className="hover:underline">Support</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="mt-4 md:mt-0">
            <h3 className="text-lg font-semibold mb-2">Contact</h3>
            <p className="text-sm">contact@edutechexplorer.com</p>
            <p className="text-sm">Kk 228st, Kigali, Rwanda</p>
            <p className="text-sm">Mon-Fri: 9AM - 6PM (GMT)</p>
            <p className="text-sm">Sat: 10AM - 1PM</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
