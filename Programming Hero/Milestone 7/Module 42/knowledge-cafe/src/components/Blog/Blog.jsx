import React from "react";

import propTypes from "prop-types";
const Blog = ({ blog }) => {
  const {
    cover,
    title,
    author,
    author_img,
    posted_date,
    posted_time,
    hashtags,
  } = blog;
  return (
    <>
      <div className="bg-white p-4 rounded-lg shadow-md">
        <img
          src={cover}
          alt="Blog Cover"
          className="w-full h-64 object-cover rounded-lg"
        />
        <h1 className="text-xl font-bold mt-2">{title}</h1>
        <div className="flex items-center mt-2">
          <img
            src={author_img}
            alt="Author"
            className="w-10 h-10 rounded-full"
          />
          <div className="ml-2">
            <p className="text-sm font-semibold">{author}</p>
            <p className="text-xs text-gray-600">
              {posted_date} at {posted_time}
            </p>
          </div>
        </div>
        <div className="mt-2">
          {hashtags.map((hashtag, index) => (
            <span
              key={index}
              className="text-xs bg-gray-200 px-2 py-1 rounded-full mr-2"
            >
              {hashtag}
            </span>
          ))}
        </div>
      </div>
    </>
  );
};

Blog.propTypes = {
  blog: propTypes.object.isRequired,
};

export default Blog;
