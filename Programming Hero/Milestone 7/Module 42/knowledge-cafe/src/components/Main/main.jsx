import React from "react";
import Blogs from "../Blogs/Blogs";
import Bookmarks from "../Bookmarks/Bookmarks";

const Main = () => {
  return (
    <div className="grid grid-cols-3 gap-4 my-4 rounded-lg p-4 ">
      <div className="col-span-2">
        <Blogs />
      </div>
      <div className="col-span-1">
        <Bookmarks />
      </div>
    </div>
  );
};

export default Main;
