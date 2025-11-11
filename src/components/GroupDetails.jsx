// GroupDetails.jsx
import React from "react";
import { useParams } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import { whatsappLinks } from "../blogs/blog";

const GroupDetails = () => {
    const { groupId } = useParams();
    const group = whatsappLinks.find((g, i) => i.toString() === groupId);

    if (!group)
        return (
            <div className="p-6 text-center text-gray-500">Group not found</div>
        );

    const relatedProducts = group.relatedProducts || [];

    return (
        <div className="max-w-5xl mx-auto p-6 my-20">
            <div className="flex flex-col md:flex-row items-center gap-6 mb-10">
                <img
                    src={group.image}
                    alt={group.name}
                    className="w-full md:w-1/2 h-64 object-cover rounded-xl shadow-lg"
                />
                <div className="flex-1">
                    <h1 className="text-4xl font-extrabold mb-4 text-green-700">
                        {group.name}
                    </h1>
                    <p className="text-lg text-gray-700 leading-relaxed">
                        Join our <strong>{group.name}</strong> WhatsApp group and unlock
                        exclusive deals, top-selling products, and insider tips to save big
                        every day!
                    </p>
                    <ul className="mt-4 list-disc list-inside text-gray-700 space-y-2">
                        <li>🔥 Daily curated deals you won't find anywhere else</li>
                        <li>💰 Exclusive discounts and cashback opportunities</li>
                        <li>⚡ Quick access to popular products before they sell out</li>
                        <li>🛍️ Recommendations from our trusted community members</li>
                    </ul>
                    <div className="mt-6">
                        <button
                            onClick={() =>
                                window.open(group.link, "_blank", "noopener,noreferrer")
                            }
                            className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-full font-semibold shadow-lg transition-transform transform hover:scale-105 inline-flex items-center gap-2"
                        >
                            Join Now & Grab Deals
                        </button>
                    </div>
                </div>
            </div>

            <div className="prose prose-lg text-gray-800 mb-12">
                <ReactMarkdown>{group.content}</ReactMarkdown>
            </div>

            {relatedProducts.length > 0 && (
                <div className="mb-16">
                    <h2 className="text-2xl font-bold mb-6 text-gray-800 text-center">
                        🛍️ Related Products
                    </h2>

                    <div
                        className="flex gap-6 overflow-x-auto pb-4 px-2 snap-x snap-mandatory scrollbar-thin scrollbar-thumb-gray-400/40 scrollbar-track-transparent"
                        style={{ scrollBehavior: "smooth" }}
                    >
                        {relatedProducts.map((product, i) => (
                            <div
                                key={i}
                                className="min-w-[250px] bg-white rounded-2xl shadow-[0_8px_25px_rgba(0,0,0,0.08)] overflow-hidden hover:shadow-[0_10px_35px_rgba(0,0,0,0.12)] transition-all duration-500 transform hover:-translate-y-2 snap-center"
                            >
                                <img
                                    src={product.image}
                                    alt={product.name}
                                    className="w-full h-48 object-cover"
                                />
                                <div className="p-5">
                                    <h3 className="font-semibold text-lg text-gray-800 mb-2 line-clamp-2">
                                        {product.name}
                                    </h3>
                                    <p className="text-green-600 font-bold text-xl mb-4">
                                        {product.price}
                                    </p>
                                    <button
                                        onClick={() =>
                                            window.open(
                                                product.link,
                                                "_blank",
                                                "noopener,noreferrer"
                                            )
                                        }
                                        className="w-full bg-green-600 hover:bg-green-700 text-white py-2.5 rounded-full font-semibold transition-transform transform hover:scale-105"
                                    >
                                        View Deal
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )}

            {/* Testimonials Section */}
            <div className="bg-gray-50 p-6 rounded-xl shadow-md mb-10">
                <h2 className="text-2xl font-bold mb-4">What Members Are Saying</h2>
                <div className="space-y-4">
                    <div className="p-4 bg-white rounded-lg shadow-sm">
                        <strong>Aisha — Mumbai</strong>
                        <p>
                            “I got my favorite products at 40% off! Joining this group was the
                            best decision for smart shopping.”
                        </p>
                    </div>
                    <div className="p-4 bg-white rounded-lg shadow-sm">
                        <strong>Rohit — Delhi</strong>
                        <p>
                            “Daily alerts save me hours of browsing. Plus the deals are
                            amazing and authentic.”
                        </p>
                    </div>
                    <div className="p-4 bg-white rounded-lg shadow-sm">
                        <strong>Neha — Bengaluru</strong>
                        <p>
                            “The community helps me discover hidden gems I wouldn’t find on my
                            own. Highly recommend!”
                        </p>
                    </div>
                </div>
            </div>

            {/* CTA Section */}
            <div className="text-center">
                <h2 className="text-2xl font-bold mb-4">
                    Don't Miss Out on Today's Hot Deals!
                </h2>
                <p className="mb-6 text-gray-700">
                    Click the button below to join the <strong>{group.name}</strong>{" "}
                    WhatsApp group and start saving instantly.
                </p>
                <button
                    onClick={() =>
                        window.open(group.link, "_blank", "noopener,noreferrer")
                    }
                    className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-full font-semibold shadow-lg transition-transform transform hover:scale-105 inline-flex items-center gap-2"
                >
                    Join Now & Save
                </button>
            </div>
        </div>
    );
};

export default GroupDetails;