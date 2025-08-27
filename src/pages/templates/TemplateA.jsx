import React from "react";

const TemplateA = ({ blog }) => (
    <div className="p-6 bg-white shadow rounded">
        <h1 className="text-3xl font-bold text-blue-600">{blog.title}</h1>
        <p className="mt-4 text-gray-700">{blog.content}</p>
    </div>
);

export default TemplateA;
