import React from "react";
import { useParams } from "react-router-dom";
import templates from "../blogs/templates";

const CategoryPage = () => {
    const { slug } = useParams();
    const Template = templates[slug];

    return (
        <div className="p-6">
            {Template ? (
                <Template />
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
