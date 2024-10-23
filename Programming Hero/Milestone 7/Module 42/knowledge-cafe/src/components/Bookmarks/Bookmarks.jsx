import React from "react";
import PropTypes from "prop-types";
import Bookmark from "../Bookmark/Bookmark";

const Bookmarks = ({ bookmarks, readingTime }) => {
  return (
    <div className=" rounded-lg h-full shadow-lg">
      <div className="flex justify-between px-2">
        <h1 className="text-3xl font-bold text-center    bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent">
          Bookmarks:{" "}
          <span className="bg-gradient-to-r from-purple-400 via-slate-900 to-purple-500 bg-clip-text text-transparent">
            {bookmarks.length}
          </span>
        </h1>
        <h1 className="text-xl font-bold text-center bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent">
          Read Time: {readingTime} mins
        </h1>
      </div>
      <div className="mx-2">
        <hr className="   border-1 border-purple-700  " />
        <hr className="   border-1 border-purple-700  " />
      </div>
      <div>
        {bookmarks.map((bookmark, index) => (
          <Bookmark key={index} bookmark={bookmark} />
        ))}
      </div>
    </div>
  );
};

Bookmarks.propTypes = {
  bookmarks: PropTypes.array.isRequired,
  readingTime: PropTypes.number.isRequired,
};

export default Bookmarks;
