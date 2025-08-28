import React from "react";

const TemplateA = ({ blog }) => {
    return (
        <div className="max-w-5xl mx-auto p-6 bg-white shadow-xl rounded-2xl space-y-8">
            <header>
                <h1 className="text-4xl font-extrabold text-blue-700">{blog.title}</h1>
                <p className="mt-4 text-lg text-gray-700 leading-relaxed">{blog.content}</p>
            </header>

            {/* Images Section */}
            <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {blog.images?.map((img, idx) => (
                    <img
                        key={idx}
                        src={img}
                        alt={`Tech Image ${idx + 1}`}
                        className="rounded-xl shadow-md object-cover w-full h-64"
                    />
                ))}
            </section>

            {/* Video Section */}
            {blog.video && (
                <section>
                    <h2 className="text-2xl font-bold mb-3">Demo Video</h2>
                    <div className="aspect-w-16 aspect-h-9">
                        <iframe
                            className="w-full h-96 rounded-xl"
                            src={blog.video}
                            title="Tech Blog Video"
                            frameBorder="0"
                            allowFullScreen
                        ></iframe>
                    </div>
                </section>
            )}

            {/* Table Section */}
            {blog.tableData && (
                <section>
                    <h2 className="text-2xl font-bold mb-3">Comparison Table</h2>
                    <div className="overflow-x-auto">
                        <table className="table-auto border-collapse border border-gray-300 w-full text-left">
                            <thead className="bg-blue-50">
                                <tr>
                                    {blog.tableData.headers.map((head, idx) => (
                                        <th key={idx} className="border border-gray-300 px-4 py-2 font-semibold">
                                            {head}
                                        </th>
                                    ))}
                                </tr>
                            </thead>
                            <tbody>
                                {blog.tableData.rows.map((row, rowIdx) => (
                                    <tr key={rowIdx}>
                                        {row.map((cell, cellIdx) => (
                                            <td key={cellIdx} className="border border-gray-300 px-4 py-2">
                                                {cell}
                                            </td>
                                        ))}
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </section>
            )}

            {/* Ads Section */}
            <section className="p-6 border border-dashed border-gray-400 text-center bg-gray-50 rounded-xl">
                <p className="text-gray-600">Advertisement</p>
                {blog.adImage && (
                    <img
                        src={blog.adImage}
                        alt="Ad"
                        className="mx-auto mt-3 w-full max-w-md rounded-lg shadow"
                    />
                )}
            </section>

            {/* Collage Section */}
            {blog.collages && (
                <section>
                    <h2 className="text-2xl font-bold mb-3">Tech Collage</h2>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                        {blog.collages.map((img, idx) => (
                            <img
                                key={idx}
                                src={img}
                                alt={`Collage ${idx + 1}`}
                                className="rounded-lg shadow-md object-cover w-full h-48"
                            />
                        ))}
                    </div>
                </section>
            )}

            {/* Comments Section */}
            <section>
                <h2 className="text-2xl font-bold mb-3">Comments</h2>
                <div className="space-y-4">
                    {blog.comments?.map((c, idx) => (
                        <div key={idx} className="p-4 bg-gray-100 rounded-lg">
                            <p className="font-semibold text-blue-600">{c.user}</p>
                            <p className="text-gray-700">{c.text}</p>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default TemplateA;