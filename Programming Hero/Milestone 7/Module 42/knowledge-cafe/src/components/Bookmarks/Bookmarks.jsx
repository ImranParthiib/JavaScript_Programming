import React from "react";

const Bookmarks = () => {
  return (
    <div className="bg-white h-screen my-8 shadow-lg rounded-lg p-6 m-4">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-4">
        Bookmarks
      </h1>
      <ul className="list-disc list-inside text-gray-700">
        <li className="mb-2">Bookmark 1</li>
        <li className="mb-2">Bookmark 2</li>
        <li className="mb-2">Bookmark 3</li>
      </ul>
    </div>
  );
};

export default Bookmarks;
