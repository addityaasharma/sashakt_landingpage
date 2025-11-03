import React from "react";
import AdsterraAd from "../../components/AdsterraAd";

const TemplateC = ({ blog }) => {
    return (
        <div className="w-full sm:max-w-4xl mx-auto bg-gradient-to-br from-gray-50 via-green-50 to-gray-100 text-gray-900 rounded-2xl shadow-xl">

            <header className="px-4 sm:px-6 py-6 sm:py-8 border-b border-green-200">
                <h1 className="text-3xl sm:text-4xl font-extrabold text-green-700 tracking-tight">
                    💹 {blog.title}
                </h1>
                <p className="text-gray-600 text-sm mt-1">
                    By {blog.author || "Finance Expert"} • {blog.date || "Not Published"}
                </p>
            </header>

            <div className="px-4 sm:px-6 py-6 space-y-6 text-gray-800 text-lg leading-relaxed">
                {blog.content.map((block, idx) => {
                    switch (block.type) {
                        case "heading":
                            return (
                                <h2 key={idx} className="text-2xl sm:text-3xl font-bold text-green-700 mt-6">
                                    {block.text}
                                </h2>
                            );

                        case "paragraph":
                            return (
                                <p key={idx} className="text-gray-800">{block.text}</p>
                            );

                        case "image":
                            return (
                                <div key={idx} className="my-4">
                                    <img
                                        src={block.src}
                                        alt={block.alt}
                                        className="w-full rounded-xl shadow-md border border-green-200 hover:scale-105 transition-transform duration-300"
                                    />
                                </div>
                            );

                        case "video":
                            return (
                                <div key={idx} className="w-full aspect-video rounded-xl overflow-hidden shadow-lg my-4">
                                    <iframe
                                        src={block.src}
                                        title={block.title || "Finance Video"}
                                        className="w-full h-full"
                                        allowFullScreen
                                    ></iframe>
                                </div>
                            );

                        case "table":
                            return (
                                <div key={idx} className="overflow-x-auto rounded-xl shadow-lg border border-green-200 my-4">
                                    <table className="w-full text-left border-collapse">
                                        <thead className="bg-green-100">
                                            <tr>
                                                {block.headers.map((header, hIdx) => (
                                                    <th key={hIdx} className="px-4 py-2 border text-green-700 font-semibold">{header}</th>
                                                ))}
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {block.rows.map((row, rIdx) => (
                                                <tr key={rIdx} className="even:bg-green-50 hover:bg-green-100">
                                                    {row.map((cell, cIdx) => (
                                                        <td key={cIdx} className="px-4 py-2 border text-gray-800">{cell}</td>
                                                    ))}
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            );

                        case "ad":
                            return (
                                <div key={idx} className="my-6 flex justify-center">
                                    <AdsterraAd/>
                                </div>
                            );

                        case "links":
                            return (
                                <div key={idx} className="space-y-2 my-4">
                                    {block.items.map((link, lIdx) => (
                                        <a
                                            key={lIdx}
                                            href={link.href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-green-700 hover:text-green-900 underline block"
                                        >
                                            {link.label}
                                        </a>
                                    ))}
                                </div>
                            );

                        case "collage":
                            return (
                                <div key={idx} className="grid grid-cols-2 sm:grid-cols-3 gap-3 my-4">
                                    {block.items.map((img, cIdx) => (
                                        <img
                                            key={cIdx}
                                            src={img}
                                            alt={`collage-${cIdx}`}
                                            className="rounded-xl shadow-md hover:scale-105 transition-transform duration-300"
                                        />
                                    ))}
                                </div>
                            );

                        default:
                            return null;
                    }
                })}
            </div>

            {/* Comments Section */}
            {blog.comments && blog.comments.length > 0 && (
                <div className="px-4 sm:px-6 py-6 border-t border-green-200 space-y-4">
                    <h2 className="text-2xl font-semibold text-green-700">💬 Community Comments</h2>
                    {blog.comments.map((c, idx) => (
                        <div key={idx} className="p-4 bg-white rounded-xl shadow border border-green-200">
                            <p className="font-semibold text-green-800">{c.user}</p>
                            <p className="text-gray-700">{c.comment}</p>
                        </div>
                    ))}
                </div>
            )}

        </div>
    );
};

export default TemplateC;
