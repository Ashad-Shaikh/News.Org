import React from "react";
import { Link } from "react-router-dom";
import { FaUser } from "react-icons/fa";

const BlogCards = ({ blogs }) => {
  let filteredBlogs = blogs;

  return (
    <div className="max-w-[1200px] mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {filteredBlogs.map((blog) => (
          <Link key={blog.name} target="_blank" to={blog.url} className="mx-auto my-10">
            <div className="flex flex-col max-w-[350px] justify-center hover:scale-105 transition-all shadow-2xl p-4">
              <img
                className="w-full h-[250px] object-center object-cover"
                src={blog.urlToImage || "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZzC9UZarBbfdA7R_jV1PkHQ5wPW_64T9vJA&s"}
                alt="Blog"
              />
              <h3 className="mt-4 mb-2 font-bold font-[Poppins] hover:text-blue-400">{blog?blog.title.slice(0, 45): "No title available"}...</h3>
              <h2 className="mb-2 font-bold font-[Poppins] text-md text-gray-700">
                {blog.description?blog.description.slice(0, 88):"Description not Available"}...
              </h2>
              <p className="font-semibold text-sm text-gray-500 flex items-center"><FaUser className="inline-flex  items-center mr-2 text-md"/>{blog.author || "The Author is Anonymous"}</p>
              <p className="text-sm font-normal">Published: {blog.publishedAt}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default BlogCards;
