import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-gray-900 text-white p-8 mt-8">
      <div className="container mx-auto text-center">
        <div className="mb-4">
          <h2 className="text-2xl font-bold">PiLab</h2>
          <p className="text-sm mt-2">
            &copy; {new Date().getFullYear()} PiLab. All rights reserved.
          </p>
        </div>
        <nav className="mt-4">
          <ul className="flex justify-center space-x-8">
            <li>
              <a href="/" className="text-white hover:text-gray-400">
                Home
              </a>
            </li>
            <li>
              <a href="/about" className="text-white hover:text-gray-400">
                About
              </a>
            </li>
            <li>
              <a href="/services" className="text-white hover:text-gray-400">
                Services
              </a>
            </li>
            <li>
              <a href="/contact" className="text-white hover:text-gray-400">
                Contact
              </a>
            </li>
          </ul>
        </nav>
        <div className="mt-8">
          <p className="text-sm">Follow us on:</p>
          <div className="flex justify-center space-x-4 mt-2">
            <a
              href="https://facebook.com"
              className="text-white hover:text-gray-400"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://twitter.com"
              className="text-white hover:text-gray-400"
            >
              <FaTwitter />
            </a>
            <a
              href="https://instagram.com"
              className="text-white hover:text-gray-400"
            >
              <FaInstagram />
            </a>
            <a
              href="https://linkedin.com"
              className="text-white hover:text-gray-400"
            >
              <FaLinkedinIn />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
