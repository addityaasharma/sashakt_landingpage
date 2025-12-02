import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import { ShoppingBag } from "lucide-react";

const categories = [
    {
        id: 1,
        name: "Gardening & Plant Combo",
        image: "https://images.pexels.com/photos/7782163/pexels-photo-7782163.jpeg",
        whatsappLink: "https://chat.whatsapp.com/ESJR0zhmxSy9AN6eu6Ao2q",
        shopLink: "https://clickship.in/collections/gardening-plants",
    },
    {
        id: 2,
        name: "Jewellery Spiritual & Accessories",
        image: "https://images.pexels.com/photos/6567673/pexels-photo-6567673.jpeg",
        whatsappLink: "https://chat.whatsapp.com/CXAluNGTHmj9YqqZdAppZO",
        shopLink: "https://clickship.in/collections/devotional-jewellery-spiritual-accessories",
    },
    {
        id: 3,
        name: "Unique Finds",
        image: "https://images.pexels.com/photos/5865343/pexels-photo-5865343.jpeg",
        whatsappLink: "https://chat.whatsapp.com/ESJR0zhmxSy9AN6eu6Ao2q",
        shopLink: "https://clickship.in/collections/unique-finds",
    },
    {
        id: 4,
        name: "Home Decor & Collection",
        image: "https://images.pexels.com/photos/1454805/pexels-photo-1454805.jpeg",
        whatsappLink: "https://chat.whatsapp.com/Hxhv2WXAjkTEet3hbulzcq",
        shopLink: "https://clickship.in/collections/home-decor-collection",
    },
    {
        id: 5,
        name: "Toys",
        image: "https://images.pexels.com/photos/132464/pexels-photo-132464.jpeg",
        whatsappLink: "https://chat.whatsapp.com/HwKqz8QPu0Y2j6doTDlEaE",
        shopLink: "https://clickship.in/collections/kids-toys-creative-products",
    },
    {
        id: 6,
        name: "Hot Picks",
        image: "https://images.pexels.com/photos/15404793/pexels-photo-15404793.jpeg",
        whatsappLink: "https://chat.whatsapp.com/DtxEVnuARCy4bAXCxkUw66",
        shopLink: "https://clickship.in/collections/hot-picks-2025",
    },
    {
        id: 7,
        name: "Plants",
        image: "https://images.pexels.com/photos/1599969/pexels-photo-1599969.jpeg",
        whatsappLink: "https://chat.whatsapp.com/KqjbVusGLvgBMbd9zZ2zGz",
        shopLink: "https://clickship.in/collections/gardening-plants",
    },
    {
        id: 8,
        name: "Lifestyle",
        image: "https://images.pexels.com/photos/1449667/pexels-photo-1449667.jpeg",
        whatsappLink: "https://chat.whatsapp.com/I9yINQEEY0wD77RInGcRPH",
        shopLink: "https://clickship.in/collections/fashion-lifestyle",
    },
    {
        id: 9,
        name: "Christmas",
        image: "https://images.pexels.com/photos/3444345/pexels-photo-3444345.png",
        whatsappLink: "https://chat.whatsapp.com/IuxZtSZxpXrEr7fgTDTQXA",
        shopLink: "https://clickship.in/collections/christmas-magic-collection",
    },
    {
        id: 10,
        name: "Beauty Products",
        image: "https://images.pexels.com/photos/3373739/pexels-photo-3373739.jpeg",
        whatsappLink: "https://chat.whatsapp.com/EXhW4sBTN8SKof54SewN2p",
        shopLink: "https://clickship.in/collections/beauty-personal-care-health",
    },
    {
        id: 11,
        name: "Automobile & Tools",
        image: "https://images.pexels.com/photos/1592384/pexels-photo-1592384.jpeg",
        whatsappLink: "https://chat.whatsapp.com/E8h43csFFakIdRQNqAdujc",
        shopLink: "https://clickship.in/collections/automobile-tools",
    },
     {
        id: 12,
        name: "Hair care ",
        image: "https://images.pexels.com/photos/11497210/pexels-photo-11497210.jpeg",
        whatsappLink: "https://chat.whatsapp.com/E8h43csFFakIdRQNqAdujc",
        shopLink: "http://clickship.in/collections/best-of-hair-care",
    },
     {
        id: 13,
        name: "kitchen Accessories  ",
        image: "https://images.pexels.com/photos/2062426/pexels-photo-2062426.jpeg",
        whatsappLink: "https://chat.whatsapp.com/E8h43csFFakIdRQNqAdujc",
        shopLink: "https://clickship.in/collections/best-of-kitchen-accessories",
    },
    {
        id: 14,
        name: "Personal Care ",
        image: "https://images.pexels.com/photos/34997539/pexels-photo-34997539.jpeg",
        whatsappLink: "https://chat.whatsapp.com/E8h43csFFakIdRQNqAdujc",
        shopLink: "https://clickship.in/collections/best-of-personal-care",
    },
     {
        id: 15,
        name: "High Delivery Rate ",
        image: "https://images.pexels.com/photos/4481259/pexels-photo-4481259.jpeg",
        whatsappLink: "https://chat.whatsapp.com/E8h43csFFakIdRQNqAdujc",
        shopLink: "https://clickship.in/collections/high-delivery-rate",
    },
      {
        id: 16,
        name: "Newly Launched ",
        image: "https://images.pexels.com/photos/6347522/pexels-photo-6347522.jpeg",
        whatsappLink: "https://chat.whatsapp.com/E8h43csFFakIdRQNqAdujc",
        shopLink: "https://clickship.in/collections/newly-launched",
    },
];


const ShoppingSection = () => {
    return (
        <section className="max-w-7xl mx-auto px-4 py-16 bg-white">
            <h2 className="text-3xl font-semibold text-center text-gray-900 mb-10">
                Shop by Category
            </h2>

            <div className="flex overflow-x-auto space-x-6 pb-6 snap-x snap-mandatory no-scrollbar">
                {categories.map((cat) => (
                    <div
                        key={cat.id}
                        className="flex-none w-72 h-96 snap-start rounded-3xl overflow-hidden relative group shadow-sm hover:shadow-lg transition-all duration-300"
                    >
                        <img
                            src={cat.image}
                            alt={cat.name}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />

                        {/* Overlay gradient */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-70 group-hover:opacity-80 transition-opacity duration-300"></div>

                        {/* Text + Buttons */}
                        <div className="absolute inset-0 flex flex-col justify-end items-center text-center pb-6">
                            <h3 className="text-white text-lg font-semibold mb-3 drop-shadow-lg">
                                {cat.name}
                            </h3>
                            <div className="flex gap-3">
                                <a
                                    href={cat.whatsappLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 px-4 py-2 text-sm font-medium bg-white/90 text-gray-800 rounded-xl hover:bg-white transition"
                                >
                                    <FaWhatsapp className="text-green-500" />
                                    Join
                                </a>
                                <a
                                    href={cat.shopLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 px-4 py-2 text-sm font-medium bg-white/90 text-gray-800 rounded-xl hover:bg-white transition"
                                >
                                    <ShoppingBag className="w-4 h-4 text-gray-700" />
                                    Shop
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default ShoppingSection;
