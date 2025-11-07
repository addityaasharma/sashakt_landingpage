import { useEffect, useState } from "react";
import { FaWhatsapp } from "react-icons/fa";

const trendingProducts = [
    {
        name: "Wireless Headphones",
        price: "₹2,999",
        image:
            "https://images.unsplash.com/photo-1580894894512-4f4a46f5a3c8?auto=format&fit=crop&w=800&q=80",
        groupLink: "https://chat.whatsapp.com/DtxEVnuARCy4bAXCxkUw66",
        buyLink: "https://clickship.in/product/headphones",
    },
    {
        name: "Smart Watch",
        price: "₹1,899",
        image:
            "https://images.unsplash.com/photo-1606813907773-4b16b5d0b66e?auto=format&fit=crop&w=800&q=80",
        groupLink: "https://chat.whatsapp.com/KqjbVusGLvgBMbd9zZ2zGz",
        buyLink: "https://clickship.in/product/smartwatch",
    },
    {
        name: "Plant Combo",
        price: "₹799",
        image:
            "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=800&q=80",
        groupLink: "https://chat.whatsapp.com/ESJR0zhmxSy9AN6eu6Ao2q",
        buyLink: "https://clickship.in/product/plant-combo",
    },
];

export const TrendingProducts = () => {
    const [current, setCurrent] = useState(0);
    const product = trendingProducts[current];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrent((prev) => (prev + 1) % trendingProducts.length);
        }, 4000);

        return () => clearInterval(interval);
    }, []);

    const openGroup = (link) => window.open(link, "_blank", "noopener,noreferrer");

    return (
        <section className="mt-12 max-w-7xl mx-auto px-6">
            <h2 className="text-2xl font-bold mb-6">🔥 Top Trending Deals</h2>
            <div className="relative bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col md:flex-row items-center">
                <div className="w-full md:w-1/2">
                    <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-64 object-cover hover:scale-105 transition-transform"
                    />
                </div>
                <div className="p-6 flex flex-col gap-4 md:w-1/2">
                    <div className="font-semibold text-xl">{product.name}</div>
                    <div className="text-green-600 font-bold text-lg">{product.price}</div>
                    <div className="flex gap-3">
                        <a
                            href={product.buyLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex-1 px-4 py-2 bg-green-600 text-white rounded-lg text-center font-semibold hover:bg-green-700"
                        >
                            Buy Now
                        </a>
                        <button
                            onClick={() => openGroup(product.groupLink)}
                            className="flex-1 px-4 py-2 border rounded-lg hover:bg-gray-50 font-semibold"
                        >
                            Join WhatsApp Group
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};
