import { useState } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-gray-900 text-white p-4 flex justify-between items-center">
      <img width="1024" height="108" src="https://growthgear.in/wp-content/uploads/2023/09/Group-6-1024x108.png" className="w-40" alt=""></img>

      {/* Desktop Navigation */}
      <ul className="hidden sm:flex space-x-6 items-center">
        <li className="hover:text-gray-400 cursor-pointer">Home</li>
        <li className="hover:text-gray-400 cursor-pointer">About</li>
        <li className="hover:text-gray-400 cursor-pointer">Contact Us</li>
        <div className="flex space-x-4">
          <button className="bg-blue-600 px-4 py-2 rounded hover:bg-blue-700">
            Login
          </button>
          <button className="bg-green-600 px-4 py-2 rounded hover:bg-green-700">
            Signup
          </button>
        </div>
      </ul>

      {/* Mobile Menu Button */}
      <button
        className="sm:hidden text-white focus:outline-none"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        ☰
      </button>

      {/* Mobile Navigation (Hidden by Default) */}
      {menuOpen && (
        <div className="absolute top-16 z-10 left-0 w-full bg-gray-800 sm:hidden flex flex-col items-center space-y-4 p-4">
          <li className="hover:text-gray-400 cursor-pointer">Home</li>
          <li className="hover:text-gray-400 cursor-pointer">About</li>
          <li className="hover:text-gray-400 cursor-pointer">Contact Us</li>
          <button className="bg-blue-600 px-4 py-2 rounded hover:bg-blue-700 w-full">
            Login
          </button>
          <button className="bg-green-600 px-4 py-2 rounded hover:bg-green-700 w-full">
            Signup
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
