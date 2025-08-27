import React from "react";

const TemplateB = ({ blog }) => (
    <div className="p-6 bg-gray-900 text-white rounded">
        <h1 className="text-4xl font-bold">{blog.title}</h1>
        <p className="mt-4">{blog.content}</p>
    </div>
);

export default TemplateB;
