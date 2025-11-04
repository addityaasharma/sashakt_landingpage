import React from "react";
import { useNavigate } from "react-router-dom";
import blogs from "../blogs/blog"; // your blogs object

const BlogPage = () => {
  const navigate = useNavigate();

  const openBlog = (category) => {
    navigate(`/blog/${category}`);
  };

  return (
    <div className="max-w-7xl mx-auto px-6 py-12 transition-colors duration-500 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <h1 className="text-4xl font-extrabold mb-12 text-center tracking-tight">
        All Blogs
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {Object.entries(blogs).map(([category, blog]) => {
          const imageSrc =
            blog.content.find((c) => c.type === "image")?.src ||
            "https://via.placeholder.com/400x200";
          const paragraphText =
            blog.content.find((c) => c.type === "paragraph")?.text ||
            "Click to read more...";

          return (
            <div
              key={category}
              onClick={() => openBlog(category)}
              className="cursor-pointer rounded-xl overflow-hidden shadow-md hover:shadow-2xl transform hover:scale-105 transition duration-300 bg-gray-50 dark:bg-gray-800"
              tabIndex={0}
              role="button"
              onKeyPress={(e) => {
                if (e.key === "Enter") openBlog(category);
              }}
              aria-label={`Read blog about ${blog.title}`}
            >
              <div className="relative overflow-hidden rounded-t-xl">
                <img
                  src={imageSrc}
                  alt={blog.title}
                  className="w-full h-52 object-cover transition-transform duration-300 hover:scale-110"
                />
                <span className="absolute top-3 left-3 bg-amber-400 text-black text-xs font-semibold uppercase px-2 py-1 rounded-md shadow-md">
                  {category.replace(/-/g, " ")}
                </span>
              </div>
              <div className="p-6 flex flex-col h-[220px]">
                <h2 className="text-xl font-bold mb-2 line-clamp-2">{blog.title}</h2>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-2 hover:text-amber-400 transition">
                  By <span className="font-medium">{blog.author}</span> •{" "}
                  <time
                    dateTime={blog.date}
                    title={new Date(blog.date).toLocaleDateString()}
                  >
                    {new Date(blog.date).toLocaleDateString(undefined, {
                      month: "short",
                      day: "numeric",
                      year: "numeric",
                    })}
                  </time>
                </p>
                <p className="text-gray-700 dark:text-gray-300 text-sm line-clamp-3 flex-grow">
                  {paragraphText}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default BlogPage;
