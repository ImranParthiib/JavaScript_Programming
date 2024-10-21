import React from "react";
import { ArrowUp } from "lucide-react";

const Footer = () => {
  return (
    <>
      <footer className="bg-gray-900 text-white py-2 mt-5">
        <p className="text-lg text-center">
          Knowledge Cafe &copy;{new Date().getFullYear()} All Rights Reserved
        </p>
      </footer>
      <div className="flex justify-center mt-4">
        <ArrowUp className="w-6 h-6 text-white" />
      </div>
    </>
  );
};

export default Footer;
