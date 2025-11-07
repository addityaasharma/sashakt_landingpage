import React from "react";
import { useNavigate } from "react-router-dom";
import blogs from "../blogs/blog";

const BlogCarousel = () => {
    const navigate = useNavigate();

    const openBlog = (category, index) => {
        navigate(`/blog/${category}/${index}`);
    };

    // Flatten all blogs from all categories into one array
    const allBlogs = Object.entries(blogs).flatMap(([category, blogArray]) =>
        blogArray.map((blog, index) => ({
            ...blog,
            category,
            index,
        }))
    );

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-8 py-16 bg-white text-gray-800 mt-20">
            <h1 className="text-4xl font-extrabold mb-12 text-center tracking-tight text-gray-900">
                Explore Our Blogs
            </h1>

            {/* Horizontal Carousel */}
            <div className="flex overflow-x-auto gap-8 pb-6 snap-x snap-mandatory scrollbar-none scroll-smooth">
                {allBlogs.map((blog, i) => {
                    const imageSrc =
                        blog.content.find((c) => c.type === "image")?.src ||
                        "https://via.placeholder.com/400x250";
                    const paragraphText =
                        blog.content.find((c) => c.type === "paragraph")?.text ||
                        "Click to read more...";

                    return (
                        <div
                            key={`${blog.category}-${i}`}
                            onClick={() => openBlog(blog.category, blog.index)}
                            className="flex-none w-80 snap-start cursor-pointer bg-white border border-gray-200 rounded-2xl shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 overflow-hidden"
                            tabIndex={0}
                            role="button"
                            onKeyPress={(e) =>
                                e.key === "Enter" && openBlog(blog.category, blog.index)
                            }
                        >
                            {/* Image */}
                            <div className="relative overflow-hidden">
                                <img
                                    src={imageSrc}
                                    alt={blog.title}
                                    className="w-full h-48 object-cover transition-transform duration-500 hover:scale-110"
                                />
                                <span className="absolute top-3 left-3 bg-indigo-500 text-white text-xs font-semibold uppercase px-3 py-1 rounded-md shadow-sm">
                                    {blog.category.replace(/-/g, " ")}
                                </span>
                            </div>

                            {/* Content */}
                            <div className="p-5">
                                <h3 className="text-lg font-semibold text-gray-900 line-clamp-2 mb-2 hover:text-indigo-600 transition-colors duration-200">
                                    {blog.title}
                                </h3>
                                <p className="text-sm text-gray-500 mb-2">
                                    By{" "}
                                    <span className="font-medium text-gray-700">
                                        {blog.author}
                                    </span>{" "}
                                    •{" "}
                                    <time dateTime={blog.date}>
                                        {blog.date
                                            ? new Date(blog.date).toLocaleDateString(undefined, {
                                                month: "short",
                                                day: "numeric",
                                                year: "numeric",
                                            })
                                            : "No date"}
                                    </time>
                                </p>
                                <p className="text-sm text-gray-600 line-clamp-3">
                                    {paragraphText}
                                </p>
                            </div>
                        </div>
                    );
                })}
            </div>

            {/* Hide scrollbar */}
            <style jsx="true">{`
        .scrollbar-none::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-none {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
        </div>
    );
};

export default BlogCarousel;
