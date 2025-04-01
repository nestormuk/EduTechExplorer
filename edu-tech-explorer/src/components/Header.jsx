import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="text-lg font-bold">
          <Link to="/">
            Edu<span className="text-blue-500">Tech</span>Explorer
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-6">
          <Link to="/" className="hover:text-blue-500">Home</Link>
          <Link to="/universities" className="hover:text-blue-500">Universities</Link>
          <Link to="/courses" className="hover:text-blue-500">Courses</Link>
          <Link to="/tech-trends" className="hover:text-blue-500">Tech Trends</Link>
          <Link to="/about" className="hover:text-blue-500">About</Link>
        </div>

        {/* Search Button (Always Visible) */}
        <button className="hidden md:block bg-blue-500 text-white px-4 py-2 rounded-md">
          Explore
        </button>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-700"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden flex flex-col items-center bg-white shadow-md mt-4 p-4 space-y-4">
          <Link to="/" className="block text-lg hover:text-blue-500" onClick={() => setIsOpen(false)}>Home</Link>
          <Link to="/universities" className="block text-lg hover:text-blue-500" onClick={() => setIsOpen(false)}>Universities</Link>
          <Link to="/courses" className="block text-lg hover:text-blue-500" onClick={() => setIsOpen(false)}>Courses</Link>
          <Link to="/tech-trends" className="block text-lg hover:text-blue-500" onClick={() => setIsOpen(false)}>Tech Trends</Link>
          <Link to="/about" className="block text-lg hover:text-blue-500" onClick={() => setIsOpen(false)}>About</Link>
          <button className="bg-blue-500 text-white px-4 py-2 rounded-md w-full">
            Search
          </button>
        </div>
      )}
    </nav>
  );
}
