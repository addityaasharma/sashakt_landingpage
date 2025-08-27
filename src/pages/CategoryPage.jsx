// CategoryPage.jsx
import React from "react";
import { useParams } from "react-router-dom";
import TemplateA from "./templates/TemplateA";
import TemplateB from "./templates/TemplateB";

const blogs = {
    tech: { title: "Latest in Tech", content: "AI, Robotics, and more..." },
    travel: { title: "Travel Guide", content: "Explore the world..." },
};

const CategoryPage = () => {
    const { slug } = useParams();

    const templates = {
        tech: <TemplateA blog={blogs.tech} />,
        travel: <TemplateB blog={blogs.travel} />,
    };

    return (
        <div className="p-6">
            {templates[slug] ? (
                templates[slug]
            ) : (
                <div>
                    <h1 className="text-3xl font-bold">Category Not Found</h1>
                    <p className="mt-4">We don’t have a template for "{slug}".</p>
                </div>
            )}
        </div>
    );
};

export default CategoryPage;
