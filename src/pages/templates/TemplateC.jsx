import React from "react";

const TemplateC = ({ blog }) => (
    <div className="p-6 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold">{blog.title}</h1>
        <p className="mt-4">{blog.content}</p>
    </div>
);

export default TemplateC;
