import React from "react";
import { ArrowUp } from "lucide-react";

const Footer = () => {
  return (
    <>
      <footer className="bg-gray-900 text-white py-2 mt-5 rounded">
        <p className="text-lg text-center">
          Knowledge Cafe &copy;{new Date().getFullYear()} All Rights Reserved
        </p>
      </footer>

      <div className="fixed bottom-0 right-0 m-3">
        <a href="#top" className="text-6xl  px-24 py-2">
          <ArrowUp className="text-purple-600 border rounded-full p-2 w-16 h-16" />
        </a>
      </div>
    </>
  );
};

export default Footer;
