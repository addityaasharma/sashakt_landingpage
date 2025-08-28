import React from "react";

const TemplateB = ({ blog }) => (
    <div className="max-w-4xl mx-auto p-8 bg-white text-gray-900 rounded-lg shadow-lg">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 leading-snug">
            {blog.title}
        </h1>

        <div className="mt-3 flex items-center gap-4 text-gray-600 text-sm border-b pb-3">
            <span>✍️ {blog.author || "Unknown Author"}</span>
            <span>📅 {blog.date || "Not Published"}</span>
        </div>

        {blog.image && (
            <div className="mt-6">
                <img
                    src={blog.image}
                    alt="Blog Banner"
                    className="w-full h-72 object-cover rounded-md shadow-md"
                />
            </div>
        )}

        <div className="mt-6 text-lg leading-relaxed space-y-6">
            <p>{blog.content}</p>
        </div>

        {blog.keyPoints && blog.keyPoints.length > 0 && (
            <div className="mt-8 bg-gray-50 p-6 rounded-md border">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                    📌 Key Takeaways
                </h2>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                    {blog.keyPoints.map((point, idx) => (
                        <li key={idx}>{point}</li>
                    ))}
                </ul>
            </div>
        )}

        {blog.quote && (
            <div className="mt-8 border-l-4 border-gray-400 pl-6 italic text-lg text-gray-700">
                “{blog.quote}”
            </div>
        )}

        {blog.resources && blog.resources.length > 0 && (
            <div className="mt-10">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                    📚 Recommended Resources
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {blog.resources.map((res, idx) => (
                        <a
                            key={idx}
                            href={res.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-4 bg-gray-100 rounded-md border hover:bg-gray-200 transition"
                        >
                            {res.title}
                        </a>
                    ))}
                </div>
            </div>
        )}

        <div className="mt-10">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">💬 Comments</h2>
            <div className="bg-gray-50 p-4 rounded-md border">
                <p className="text-gray-600">Comments feature coming soon...</p>
            </div>
        </div>
    </div>
);

export default TemplateB;
