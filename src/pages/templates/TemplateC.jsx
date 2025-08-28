import React from "react";

const TemplateC = ({ blog }) => {
    return (
        <div className="p-8 bg-gradient-to-r from-green-100 to-green-50 shadow-lg rounded-2xl max-w-4xl mx-auto">
            <h1 className="text-4xl font-extrabold text-green-700">{blog.title}</h1>

            <p className="mt-4 text-gray-800 leading-relaxed">{blog.content}</p>

            {blog.images && blog.images.length > 0 && (
                <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {blog.images.map((img, idx) => (
                        <img
                            key={idx}
                            src={img}
                            alt={`blog-img-${idx}`}
                            className="w-full rounded-lg shadow-md"
                        />
                    ))}
                </div>
            )}

            {blog.video && (
                <div className="mt-6">
                    <iframe
                        src={blog.video}
                        title="Finance Video"
                        className="w-full h-64 sm:h-96 rounded-lg"
                        allowFullScreen
                    ></iframe>
                </div>
            )}

            {blog.table && blog.table.length > 0 && (
                <div className="mt-6 overflow-x-auto">
                    <table className="w-full border border-gray-300 text-left text-gray-700">
                        <thead className="bg-green-200">
                            <tr>
                                {Object.keys(blog.table[0]).map((header, idx) => (
                                    <th key={idx} className="px-4 py-2 border">
                                        {header}
                                    </th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            {blog.table.map((row, idx) => (
                                <tr key={idx} className="even:bg-green-50">
                                    {Object.values(row).map((cell, i) => (
                                        <td key={i} className="px-4 py-2 border">
                                            {cell}
                                        </td>
                                    ))}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}

            {blog.ads && (
                <div className="mt-8 p-6 bg-yellow-100 border border-yellow-400 rounded-lg text-center shadow">
                    <h3 className="font-bold text-yellow-800">Sponsored</h3>
                    <p className="text-sm text-yellow-700 mt-2">{blog.ads.text}</p>
                    {blog.ads.image && (
                        <img
                            src={blog.ads.image}
                            alt="ad"
                            className="mx-auto mt-3 rounded-lg"
                        />
                    )}
                </div>
            )}

            {blog.collage && blog.collage.length > 0 && (
                <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 gap-3">
                    {blog.collage.map((img, idx) => (
                        <img
                            key={idx}
                            src={img}
                            alt={`collage-${idx}`}
                            className="rounded-lg shadow-md"
                        />
                    ))}
                </div>
            )}

            {blog.comments && blog.comments.length > 0 && (
                <div className="mt-10 border-t pt-6">
                    <h2 className="text-2xl font-semibold text-green-700 mb-4">
                        Comments
                    </h2>
                    {blog.comments.map((c, idx) => (
                        <div
                            key={idx}
                            className="mb-4 p-4 bg-white rounded-lg shadow border border-gray-200"
                        >
                            <p className="font-bold text-gray-800">{c.user}</p>
                            <p className="text-gray-600">{c.text}</p>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default TemplateC;
