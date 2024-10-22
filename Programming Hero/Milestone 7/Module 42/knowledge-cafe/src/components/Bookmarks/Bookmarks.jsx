import React from "react";
import PropTypes from "prop-types";
import Bookmark from "../Bookmark/Bookmark";

const Bookmarks = ({ bookmarks }) => {
  return (
    <div className=" rounded-lg h-full shadow-lg">
      <div>
        <h1 className="text-3xl font-bold text-center mb-4  bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent">
          Bookmarks <hr className="w-1/2 m-auto border-1 border-purple-700 " />
        </h1>
      </div>
      <div>
        {bookmarks.map((bookmark) => (
          <Bookmark key={bookmark.id} bookmark={bookmark} />
        ))}
      </div>
    </div>
  );
};

Bookmarks.propTypes = {
  bookmarks: PropTypes.array.isRequired,
};

export default Bookmarks;
