// pages/templates/UniversalTemplate.jsx
import React from "react";
import AdsterraAd from "../../components/AdsterraAd"; // import your ad component

const UniversalTemplate = ({ blog }) => {
    if (!blog) return <p className="text-red-500">⚠ No blog data provided</p>;

    return (
        <div className="p-6 bg-white rounded-lg shadow-md space-y-6">
            {blog.title && (
                <h1 className="text-4xl font-bold text-gray-900">{blog.title}</h1>
            )}

            {(blog.author || blog.date) && (
                <p className="text-sm text-gray-500">
                    {blog.author && <span>✍ {blog.author}</span>}
                    {blog.date && <span className="ml-2">📅 {blog.date}</span>}
                </p>
            )}

            {Array.isArray(blog.content) &&
                blog.content.map((block, i) => {
                    switch (block.type) {
                        case "heading":
                            return (
                                <h2 key={i} className="text-2xl font-semibold text-gray-800 mt-4">
                                    {block.text}
                                </h2>
                            );

                        case "paragraph":
                            return (
                                <p key={i} className="text-gray-700 leading-relaxed">
                                    {block.text}
                                </p>
                            );

                        case "image":
                            return (
                                <img
                                    key={i}
                                    src={block.src}
                                    alt={block.alt || `image-${i}`}
                                    className="w-full rounded-lg shadow-md"
                                />
                            );

                        case "video":
                            return (
                                <div key={i} className="w-full aspect-video">
                                    <iframe
                                        src={block.src}
                                        title={block.title || `video-${i}`}
                                        className="w-full h-full rounded-lg"
                                        allowFullScreen
                                    ></iframe>
                                </div>
                            );

                        case "link":
                            return (
                                <a
                                    key={i}
                                    href={block.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="block text-blue-600 underline"
                                >
                                    {block.text || block.href}
                                </a>
                            );

                        case "list":
                            return (
                                <ul key={i} className="list-disc list-inside mb-4">
                                    {block.items?.map((item, index) => (
                                        <li key={index} className="mb-1">
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            );

                        case "faq":
                            return (
                                <div key={i} className="faq-section my-4">
                                    {block.items.map((faq, index) => (
                                        <div key={index} className="faq-item mb-2">
                                            <strong>Q: {faq.question}</strong>
                                            <p>A: {faq.answer}</p>
                                        </div>
                                    ))}
                                </div>
                            );

                        case "table":
                            return (
                                <div key={i} className="overflow-x-auto">
                                    <table className="table-auto border-collapse border border-gray-300 w-full">
                                        <thead>
                                            <tr>
                                                {block.headers.map((h, idx) => (
                                                    <th
                                                        key={idx}
                                                        className="border border-gray-300 px-4 py-2 text-left font-semibold"
                                                    >
                                                        {h}
                                                    </th>
                                                ))}
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {block.rows.map((row, r) => (
                                                <tr key={r}>
                                                    {row.map((cell, c) => (
                                                        <td
                                                            key={c}
                                                            className="border border-gray-300 px-4 py-2 text-gray-700"
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

                        case "ad":
                            return (
                                <div key={i} className="my-6 flex justify-center">
                                    <AdsterraAd/>
                                </div>
                            );

                        default:
                            return null;
                    }
                })}
        </div>
    );
};

export default UniversalTemplate;
