import React from "react";
import AdsterraAd from "../../components/AdsterraAd";

const TemplateB = ({ blog }) => {
    return (
        <div className="w-full sm:max-w-7xl sm:mx-auto bg-gradient-to-br from-gray-900 via-blue-900 to-gray-800 text-gray-100 sm:rounded-xl shadow-lg p-0 sm:p-6">

            {/* Title */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-blue-400 leading-snug tracking-tight m-0 p-4 sm:p-0">
                🚀 {blog.title}
            </h1>

            {/* Author & Date */}
            <div className="flex flex-wrap items-center gap-4 text-gray-400 text-sm border-b border-blue-700 mb-0 px-4 sm:px-0 pb-4">
                <span>✍️ {blog.author || "Unknown Author"}</span>
                <span>📅 {blog.date || "Not Published"}</span>
            </div>

            {/* Render Dynamic Content */}
            <div className="space-y-8 text-lg leading-relaxed mt-0 px-4 sm:px-0 py-4 sm:py-0">
                {blog.content.map((block, idx) => {
                    switch (block.type) {
                        case "heading":
                            return (
                                <h2 key={idx} className="text-2xl sm:text-3xl font-bold text-blue-300 mt-0">
                                    {block.text}
                                </h2>
                            );

                        case "paragraph":
                            return (
                                <p key={idx} className="text-gray-200 m-0">
                                    {block.text}
                                </p>
                            );

                        case "image":
                            return (
                                <div key={idx} className="my-0 w-full -mx-4 sm:mx-0 px-4 sm:px-0">
                                    <img
                                        src={block.src}
                                        alt={block.alt}
                                        className="w-full object-cover sm:rounded-lg shadow-lg border border-blue-700"
                                    />
                                </div>
                            );

                        case "list":
                            return (
                                <ul key={idx} className="list-disc list-inside text-gray-200 m-0">
                                    {block.items.map((item, i) => (
                                        <li key={i} className="m-0">{item}</li>
                                    ))}
                                </ul>
                            );

                        case "video":
                            return (
                                <div key={idx} className="my-0 w-full -mx-4 sm:mx-0 px-4 sm:px-0">
                                    <div className="aspect-w-16 aspect-h-9 w-full">
                                        <iframe
                                            className="w-full h-full sm:rounded-lg shadow-lg"
                                            src={block.src}
                                            title={block.title}
                                            frameBorder="0"
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                            allowFullScreen
                                        ></iframe>
                                    </div>
                                </div>
                            );

                        case "table":
                            return (
                                <div key={idx} className="overflow-x-auto my-0 sm:rounded-lg shadow w-full -mx-4 sm:mx-0">
                                    <table className="table-auto border-collapse border border-blue-700 w-full text-left text-gray-200">
                                        <thead className="bg-blue-900">
                                            <tr>
                                                {block.headers.map((head, hIdx) => (
                                                    <th key={hIdx} className="border border-blue-700 px-2 py-1 font-semibold">
                                                        {head}
                                                    </th>
                                                ))}
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {block.rows.map((row, rIdx) => (
                                                <tr key={rIdx} className="hover:bg-blue-800">
                                                    {row.map((cell, cIdx) => (
                                                        <td key={cIdx} className="border border-blue-700 px-2 py-1">
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
                                    href={block.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-blue-400 hover:text-blue-200 underline block mt-0"
                                >
                                    {block.text}
                                </a>
                            );

                        case "ad":
                            return (
                                <div key={idx} className="my-6 flex justify-center">
                                    <AdsterraAd />
                                </div>
                            );

                        default:
                            return null;
                    }
                })}
            </div>

            {/* Comments */}
            <div className="mt-4 px-4 sm:px-0 pb-4 sm:pb-0">
                <h2 className="text-2xl font-semibold text-blue-300 mb-2">💬 Community Comments</h2>
                <div className="space-y-2">
                    {blog.comments?.map((c, idx) => (
                        <div key={idx} className="bg-gray-800 rounded-lg border border-blue-700 p-3">
                            <p className="font-semibold text-blue-400 m-0">{c.name}</p>
                            <p className="text-gray-300 m-0">{c.comment}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default TemplateB;
