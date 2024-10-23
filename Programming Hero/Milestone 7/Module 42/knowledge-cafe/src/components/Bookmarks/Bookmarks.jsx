import React from "react";
import PropTypes from "prop-types";
import Bookmark from "../Bookmark/Bookmark";

const Bookmarks = ({ bookmarks, readingTime }) => {
  return (
    <div className=" rounded-lg h-full shadow-lg">
      <div>
        <h1 className="text-3xl font-bold text-center mb-4  bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent">
          Bookmarks:{" "}
          <span className="bg-gradient-to-r from-purple-400 via-slate-900 to-purple-500 bg-clip-text text-transparent">
            {bookmarks.length}
          </span>
          <hr className="w-1/2 m-auto border-1 border-purple-700 " />
        </h1>
      </div>
      <div>
        {bookmarks.map((bookmark, index) => (
          <Bookmark key={index} bookmark={bookmark} readTime={readingTime} />
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
