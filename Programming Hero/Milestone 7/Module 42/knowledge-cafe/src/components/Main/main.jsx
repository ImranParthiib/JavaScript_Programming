import React from "react";
import Blogs from "../Blogs/Blogs";
import Bookmarks from "../Bookmarks/Bookmarks";
import PropTypes from "prop-types";

const Main = ({ addBookmark, bookmarks }) => {
  return (
    <div className="grid grid-cols-3 gap-4 my-4 rounded-lg p-4 ">
      <div className="col-span-2">
        <Blogs addBookmark={addBookmark} />
      </div>
      <div className="col-span-1">
        <Bookmarks bookmarks={bookmarks} />
      </div>
    </div>
  );
};
Main.propTypes = {
  addBookmark: PropTypes.func.isRequired,
  bookmarks: PropTypes.array.isRequired,
};

export default Main;
