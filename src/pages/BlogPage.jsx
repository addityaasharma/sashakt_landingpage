import React from "react";
import { useNavigate } from "react-router-dom";
import blogs from "../blogs/blog";// import your blogs object

const BlogPage = () => {
    const navigate = useNavigate();

    const openBlog = (category) => {
        navigate(`/blog/${category}`);
    };

    return (
        <div className="max-w-6xl mx-auto px-6 py-12">
            <h1 className="text-4xl font-bold mb-10 text-center">All Blogs</h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {Object.entries(blogs).map(([category, blog]) => (
                    <div
                        key={category}
                        className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl cursor-pointer transition-transform transform hover:scale-105"
                        onClick={() => openBlog(category)}
                    >
                        <img
                            src={
                                blog.content.find((c) => c.type === "image")?.src ||
                                "https://via.placeholder.com/400x200"
                            }
                            alt={blog.title}
                            className="w-full h-48 object-cover"
                        />
                        <div className="p-6">
                            <h2 className="text-xl font-bold">{blog.title}</h2>
                            <p className="text-gray-600 text-sm mt-2">
                                By {blog.author} • {blog.date}
                            </p>
                            <p className="text-gray-700 mt-3 text-sm line-clamp-3">
                                {blog.content.find((c) => c.type === "paragraph")?.text ||
                                    "Click to read more..."}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default BlogPage;
