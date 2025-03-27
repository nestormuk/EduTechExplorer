import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="text-lg font-bold">
          Edu<span className="text-blue-500">Tech</span>Explorer
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-6">
          <a href="#" className="hover:text-blue-500">Home</a>
          <a href="#" className="hover:text-blue-500">Universities</a>
          <a href="#" className="hover:text-blue-500">Courses</a>
          <a href="#" className="hover:text-blue-500">Tech Trends</a>
          <a href="#" className="hover:text-blue-500">About</a>
        </div>

        {/* Search Button (Always Visible) */}
        <button className="hidden md:block bg-blue-500 text-white px-4 py-2 rounded-md">
          Search
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
          <a href="#" className="block text-lg hover:text-blue-500">Home</a>
          <a href="#" className="block text-lg hover:text-blue-500">Universities</a>
          <a href="#" className="block text-lg hover:text-blue-500">Courses</a>
          <a href="#" className="block text-lg hover:text-blue-500">Tech Trends</a>
          <a href="#" className="block text-lg hover:text-blue-500">About</a>
          <button className="bg-blue-500 text-white px-4 py-2 rounded-md w-full">
            Search
          </button>
        </div>
      )}
    </nav>
  );
}
