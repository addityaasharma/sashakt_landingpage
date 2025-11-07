import React from "react";
import { useNavigate } from "react-router-dom";
import blogs from "../blogs/blog";

const BlogPage = () => {
  const navigate = useNavigate();

  const openBlog = (category, index) => {
    navigate(`/blog/${category}/${index}`);
  };

  return (
    <div className="max-w-6xl mx-auto px-6 py-16 bg-white text-gray-800 mt-20">
      <h1 className="text-4xl font-extrabold mb-12 text-center tracking-tight text-gray-900">
        All Blogs
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {Object.entries(blogs).map(([category, blogArray]) =>
          blogArray.map((blog, index) => {
            const imageSrc =
              blog.content.find((c) => c.type === "image")?.src ||
              "https://via.placeholder.com/400x250";
            const paragraphText =
              blog.content.find((c) => c.type === "paragraph")?.text ||
              "Click to read more...";

            return (
              <div
                key={`${category}-${index}`}
                onClick={() => openBlog(category, index)}
                className="cursor-pointer bg-white border border-gray-200 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden hover:-translate-y-1"
                tabIndex={0}
                role="button"
                onKeyPress={(e) => e.key === "Enter" && openBlog(category, index)}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={imageSrc}
                    alt={blog.title}
                    className="w-full h-56 object-cover transition-transform duration-500 hover:scale-110"
                  />
                  <span className="absolute top-3 left-3 bg-amber-400 text-gray-900 text-xs font-semibold uppercase px-3 py-1 rounded-md shadow-sm">
                    {category.replace(/-/g, " ")}
                  </span>
                </div>

                <div className="p-6">
                  <h2 className="text-lg font-semibold mb-2 text-gray-900 line-clamp-2 hover:text-amber-500 transition-colors duration-200">
                    {blog.title}
                  </h2>
                  <p className="text-sm text-gray-500 mb-3">
                    By <span className="font-medium text-gray-700">{blog.author}</span> •{" "}
                    <time dateTime={blog.date}>
                      {blog.date ? new Date(blog.date).toLocaleDateString(undefined, {
                        month: "short",
                        day: "numeric",
                        year: "numeric",
                      }) : "No date"}
                    </time>
                  </p>
                  <p className="text-sm text-gray-600 line-clamp-3">{paragraphText}</p>
                </div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};

export default BlogPage;