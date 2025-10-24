import React from "react";
import { useParams } from "react-router-dom";
import blogs from "../blogs/blog";
import AdsterraAd from "../components/AdsterraAd"; // Ad component

const BlogDetail = () => {
    const { category } = useParams();
    const blog = blogs[category];

    if (!blog)
        return (
            <p className="text-center mt-10 text-gray-600 text-lg">
                Blog not found
            </p>
        );

    return (
        <div className="max-w-4xl mx-auto px-6 py-12">
            {/* Blog Title */}
            <h1 className="text-4xl font-bold mb-4">{blog.title}</h1>
            <p className="text-gray-600 mb-8">
                By {blog.author} • {blog.date}
            </p>

            {/* Blog Content */}
            {blog.content.map((block, index) => {
                switch (block.type) {
                    case "heading":
                        return (
                            <h2
                                key={index}
                                className="text-2xl font-semibold mt-6 mb-2"
                            >
                                {block.text}
                            </h2>
                        );

                    case "paragraph":
                        return (
                            <p
                                key={index}
                                className="text-gray-800 mt-2 mb-4"
                            >
                                {block.text}
                            </p>
                        );

                    case "image":
                        return (
                            <img
                                key={index}
                                src={block.src}
                                alt={block.alt || ""}
                                className="my-6 w-full rounded-lg object-cover"
                            />
                        );

                    case "video":
                        return (
                            <div key={index} className="my-6">
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
                                key={index}
                                className="list-disc list-inside my-4 text-gray-800"
                            >
                                {block.items.map((item, idx) => (
                                    <li key={idx}>{item}</li>
                                ))}
                            </ul>
                        );

                    case "table":
                        return (
                            <div
                                key={index}
                                className="my-6 overflow-x-auto"
                            >
                                <table className="min-w-full border-collapse border border-gray-300">
                                    <thead>
                                        <tr>
                                            {block.headers.map((h, i) => (
                                                <th
                                                    key={i}
                                                    className="border border-gray-300 px-4 py-2 bg-gray-100 text-left whitespace-nowrap"
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
                                                        className="border border-gray-300 px-4 py-2 whitespace-nowrap"
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
                                key={index}
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
                            <div key={index} className="my-4">
                                {block.items.map((link, idx) => (
                                    <a
                                        key={idx}
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
                            <div key={index}>
                                <AdsterraAd />
                            </div>
                        );

                    default:
                        return null;
                }
            })}
        </div>
    );
};

export default BlogDetail;
