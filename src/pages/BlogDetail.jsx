import React from "react";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import blogs from "../blogs/blog";
import AdsterraAd from "../components/AdsterraAd";

const BlogDetail = () => {
    const { category, blogIndex } = useParams();
    const categoryBlogs = blogs[category] || [];
    const index = parseInt(blogIndex, 10);

    if (!categoryBlogs.length || isNaN(index) || !categoryBlogs[index]) {
        return (
            <p className="text-center mt-10 text-gray-600 text-lg">
                Blog not found
            </p>
        );
    }

    const blog = categoryBlogs[index];

    const promotions = [
        {
            id: 1,
            type: "image",
            src: "/promo1.jpg",
            caption: "🚀 Learn Growth Hacking",
            link: "https://yourpromo1.com",
        },
        {
            id: 2,
            type: "video",
            src: "/promo2.mp4",
            caption: "🎥 Watch Startup Success Stories",
            link: "https://yourpromo2.com",
        },
        {
            id: 3,
            type: "image",
            src: "/promo3.jpg",
            caption: "💼 Join Our Creator Network",
            link: "https://yourpromo3.com",
        },
    ];

    return (
        <div className="max-w-7xl mx-auto mt-0 px-0 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-0 lg:gap-6">
            <div className="hidden lg:block lg:col-span-2 sticky top-24 self-start space-y-6">
                <AdsterraAd />
                <AdsterraAd />
                <AdsterraAd />
            </div>

            <div className="lg:col-span-8 my-20 bg-white rounded-none lg:rounded-2xl shadow-none lg:shadow p-3 lg:p-10">
                <h1 className="text-4xl font-bold mb-4 text-black">
                    {blog.title}
                </h1>
                <p className="text-black mb-8">
                    By {blog.author || "Unknown"} • {blog.date || "No date"}
                </p>

                {Array.isArray(blog.content) &&
                    blog.content.map((block, idx) => {
                        switch (block.type) {
                            case "heading":
                                return (
                                    <h2
                                        key={idx}
                                        className="text-2xl font-semibold mt-6 mb-2"
                                    >
                                        {block.text}
                                    </h2>
                                );
                            case "paragraph":
                                return (
                                    <p
                                        key={idx}
                                        className="text-black mt-2 mb-4 leading-relaxed"
                                    >
                                        {block.text}
                                    </p>
                                );
                            case "image":
                                return (
                                    <img
                                        key={idx}
                                        src={block.src}
                                        alt={block.alt || ""}
                                        className="my-6 w-full rounded-lg object-cover shadow"
                                    />
                                );
                            case "video":
                                return (
                                    <div key={idx} className="my-6">
                                        <iframe
                                            width="100%"
                                            height="400"
                                            src={block.src}
                                            title={block.title || "Video"}
                                            frameBorder="0"
                                            allowFullScreen
                                            className="rounded-lg"
                                        ></iframe>
                                    </div>
                                );
                            case "list":
                                return (
                                    <ul
                                        key={idx}
                                        className="list-disc list-inside my-4 text-black space-y-1"
                                    >
                                        {block.items.map((item, i) => (
                                            <li key={i}>{item}</li>
                                        ))}
                                    </ul>
                                );
                            case "table":
                                return (
                                    <div key={idx} className="my-6 overflow-x-auto">
                                        <table className="min-w-full border-collapse border border-gray-300 dark:border-gray-700">
                                            <thead>
                                                <tr>
                                                    {block.headers.map((h, i) => (
                                                        <th
                                                            key={i}
                                                            className="border border-gray-300 dark:border-gray-700 px-4 py-2 bg-gray-100 dark:bg-gray-800 text-left whitespace-nowrap"
                                                        >
                                                            {h}
                                                        </th>
                                                    ))}
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {block.rows.map((row, i) => (
                                                    <tr key={i}>
                                                        {row.map((cell, j) => (
                                                            <td
                                                                key={j}
                                                                className="border border-gray-300 dark:border-gray-700 px-4 py-2 whitespace-nowrap"
                                                            >
                                                                {cell}
                                                            </td>
                                                        ))}
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>
                                );
                            case "link":
                                return (
                                    <a
                                        key={idx}
                                        href={block.href || block.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-blue-600 underline my-2 block"
                                    >
                                        {block.text || block.label}
                                    </a>
                                );
                            case "links":
                                return (
                                    <div key={idx} className="my-4">
                                        {block.items.map((link, i) => (
                                            <a
                                                key={i}
                                                href={link.href}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-blue-600 underline block mb-1"
                                            >
                                                {link.label}
                                            </a>
                                        ))}
                                    </div>
                                );
                            case "ad":
                                return (
                                    <div key={idx} className="my-6">
                                        <AdsterraAd />
                                    </div>
                                );
                            default:
                                return null;
                        }
                    })}

                {Array.isArray(blog.comments) && blog.comments.length > 0 && (
                    <div className="mt-12 border-t border-gray-300 dark:border-gray-700 pt-6">
                        <h3 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-gray-100">
                            Comments
                        </h3>
                        {blog.comments.map((comment) => (
                            <div
                                key={comment.id}
                                className="mb-4 border-b border-gray-200 dark:border-gray-700 pb-3"
                            >
                                <p className="font-medium">{comment.author || "Anonymous"}</p>
                                <p className="text-gray-600 dark:text-gray-400 text-sm">
                                    {comment.date}
                                </p>
                                <p className="mt-1 text-gray-800 dark:text-gray-200">
                                    {comment.text}
                                </p>
                            </div>
                        ))}
                    </div>
                )}
            </div>

            <div className="hidden lg:block lg:col-span-2 sticky top-24 self-start space-y-6">
                {promotions.map((promo) => (
                    <motion.a
                        key={promo.id}
                        href={promo.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.03 }}
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="bg-white dark:bg-gray-800 rounded-md overflow-hidden shadow hover:shadow-lg transition block"
                    >
                        {promo.type === "image" ? (
                            <img
                                src={promo.src}
                                alt={promo.caption}
                                className="w-full h-30 object-cover"
                            />
                        ) : (
                            <video
                                src={promo.src}
                                controls
                                className="w-full h-40 object-cover"
                            />
                        )}
                        <p className="p-3 text-sm text-gray-800 dark:text-gray-200 font-semibold">
                            {promo.caption}
                        </p>
                    </motion.a>
                ))}
            </div>
        </div>
    );
};

export default BlogDetail;