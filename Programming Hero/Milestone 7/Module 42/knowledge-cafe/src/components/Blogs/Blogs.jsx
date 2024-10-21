import React from "react";
import { useEffect, useState } from "react";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch("/blogs.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);

  return (
    <>
      <h1 className="text-3xl text-center font-bold my-8">Blogs</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {blogs.map((blog) => (
          <div
            key={blog.id}
            className="bg-white shadow-lg p-4 rounded-lg overflow-hidden"
          >
            <img
              src={blog.cover}
              alt={blog.title}
              className="w-full h-40 object-cover object-center"
            />
            <div className="p-4">
              <h2 className="text-xl font-bold">{blog.title}</h2>
              <p className="text-gray-600">{blog.description}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Blogs;
