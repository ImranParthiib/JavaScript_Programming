import React from "react";

const Footer = () => {
  return (
    <>
      <footer className="bg-gray-900 text-white py-2 mt-5">
        <p className="text-lg text-center">
          Knowledge Cafe &copy;{new Date().getFullYear()} All Rights Reserved
        </p>
      </footer>
    </>
  );
};

export default Footer;
