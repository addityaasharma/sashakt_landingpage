import React from "react";
import AdsterraAd from "../../components/AdsterraAd";
import AdsterraSocialBar from "../../components/AdsterraSocialBar";

const TemplateA = ({ blog }) => {
    return (
        <div className="w-full bg-gradient-to-r from-gray-50 via-white to-blue-50 shadow-xl rounded-none md:rounded-2xl md:space-y-10">
            <header className="text-center space-y-3 px-3 sm:px-6 md:px-10 py-6">
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    {blog.title}
                </h1>
                <p className="text-gray-500 text-sm">By {blog.author} • {blog.date}</p>
            </header>

            <div>
                <AdsterraAd/>
            </div>

            <section className="space-y-8 text-base sm:text-lg leading-relaxed text-gray-800 px-3 sm:px-6 md:px-10 pb-10">
                {blog.content?.map((block, idx) => {
                    switch (block.type) {
                        case "heading":
                            return (
                                <h2 key={idx} className="text-2xl sm:text-3xl font-bold text-blue-700 mt-6">
                                    {block.text}
                                </h2>
                            );
                        case "paragraph":
                            return (
                                <p key={idx} className="mt-2 first-letter:text-3xl sm:first-letter:text-4xl first-letter:font-bold first-letter:text-blue-600">
                                    {block.text}
                                </p>
                            );
                        case "image":
                            return (
                                <div key={idx} className="my-6">
                                    <img
                                        src={block.src}
                                        alt={block.alt}
                                        className="rounded-lg md:rounded-xl shadow-lg object-cover w-full h-56 sm:h-72 md:h-96"
                                    />
                                </div>
                            );
                        case "video":
                            return (
                                <div key={idx} className="my-6">
                                    <div className="aspect-w-16 aspect-h-9">
                                        <iframe
                                            className="w-full h-60 sm:h-80 md:h-96 rounded-lg md:rounded-xl shadow-lg"
                                            src={block.src}
                                            title="Video"
                                            frameBorder="0"
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                            allowFullScreen
                                        ></iframe>
                                    </div>
                                </div>
                            );
                        case "table":
                            return (
                                <div key={idx} className="overflow-x-auto my-6 rounded-lg shadow">
                                    <table className="table-auto border-collapse border border-gray-300 w-full text-left text-gray-700 text-sm sm:text-base">
                                        <thead className="bg-blue-100">
                                            <tr>
                                                {block.headers.map((head, hIdx) => (
                                                    <th
                                                        key={hIdx}
                                                        className="border border-gray-300 px-3 sm:px-4 py-2 font-semibold"
                                                    >
                                                        {head}
                                                    </th>
                                                ))}
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {block.rows.map((row, rIdx) => (
                                                <tr key={rIdx} className="hover:bg-blue-50">
                                                    {row.map((cell, cIdx) => (
                                                        <td
                                                            key={cIdx}
                                                            className="border border-gray-300 px-3 sm:px-4 py-2"
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
                        case "links":
                            return (
                                <div key={idx} className="my-6">
                                    <h3 className="text-xl sm:text-2xl font-bold text-blue-700 mb-3">Useful Resources</h3>
                                    <ul className="space-y-2">
                                        {block.items.map((link, lIdx) => (
                                            <li key={lIdx}>
                                                <a
                                                    href={link.href}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="text-blue-600 hover:text-purple-600 underline"
                                                >
                                                    {link.label}
                                                </a>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            );
                        case "ad":
                            return (
                                <div key={idx} className="my-6 flex justify-center">
                                    <AdsterraSocialBar/>
                                </div>
                            );
                        default:
                            return null;
                    }
                })}
            </section>
        </div>
    );
};

export default TemplateA;