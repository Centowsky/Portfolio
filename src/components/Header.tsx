import React from "react";
import { Link } from "react-router-dom";

const Header: React.FC = () => {
  return (
    <header className="bg-blue-500 py-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-white text-lg font-semibold">
          Centowsky Portfolio
        </Link>
        <nav className="space-x-4">
          <Link to="/" className="text-white hover:underline">
            Home
          </Link>
          <Link to="/projects" className="text-white hover:underline">
            Projects
          </Link>
          <Link to="/about" className="text-white hover:underline">
            About
          </Link>
          <Link to="/contact" className="text-white hover:underline">
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
