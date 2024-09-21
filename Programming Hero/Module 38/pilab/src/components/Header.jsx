import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-3xl font-bold">PiLab</h1>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <Link to="/" className="text-white hover:text-gray-400">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="text-white hover:text-gray-400">
                About
              </Link>
            </li>
            <li>
              <Link to="/services" className="text-white hover:text-gray-400">
                Services
              </Link>
            </li>
            <li>
              <Link to="/contact" className="text-white hover:text-gray-400">
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
