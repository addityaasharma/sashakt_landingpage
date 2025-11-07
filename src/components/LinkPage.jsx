import React from "react";
import { FaWhatsapp } from "react-icons/fa";

const whatsappLinks = [
    {
        name: "Founder Support",
        link: "https://chat.whatsapp.com/K81Jyw1IuEhKVPADnD5IYc",
        image: "https://images.unsplash.com/photo-1532619187608-e5375cab36aa?auto=format&fit=crop&w=800&q=80",
    },
    {
        name: "Seed and Plant Combo",
        link: "https://chat.whatsapp.com/ESJR0zhmxSy9AN6eu6Ao2q",
        image: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=800&q=80",
    },
    {
        name: "Accessories",
        link: "https://chat.whatsapp.com/CXAluNGTHmj9YqqZdAppZO",
        image: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?auto=format&fit=crop&w=800&q=80",
    },
    {
        name: "Something Unique",
        link: "https://chat.whatsapp.com/Byuf0c3O4DsIpByKpRxpdw",
        image: "https://images.unsplash.com/photo-1492724441997-5dc865305da7?auto=format&fit=crop&w=800&q=80",
    },
    {
        name: "Kitchen",
        link: "https://chat.whatsapp.com/Hxhv2WXAjkTEet3hbulzcq",
        image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
    },
    {
        name: "Kids Toy",
        link: "https://chat.whatsapp.com/HwKqz8QPu0Y2j6doTDlEaE",
        image: "https://images.unsplash.com/photo-1615874959474-d609969a20ed?auto=format&fit=crop&w=800&q=80",
    },
    {
        name: "Hot Picks",
        link: "https://chat.whatsapp.com/DtxEVnuARCy4bAXCxkUw66",
        image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=800&q=80",
    },
    {
        name: "Gardening and Plants",
        link: "https://chat.whatsapp.com/KqjbVusGLvgBMbd9zZ2zGz",
        image: "https://images.unsplash.com/photo-1524594227085-4e4c1bcd0a22?auto=format&fit=crop&w=800&q=80",
    },
    {
        name: "Fashion and Lifestyle",
        link: "https://chat.whatsapp.com/I9yINQEEY0wD77RInGcRPH",
        image: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=800&q=80",
    },
    {
        name: "Christmas Magic Collection",
        link: "https://chat.whatsapp.com/IuxZtSZxpXrEr7fgTDTQXA",
        image: "https://images.unsplash.com/photo-1512909006721-3d6018887383?auto=format&fit=crop&w=800&q=80",
    },
    {
        name: "Beauty and Personal Health Care",
        link: "https://chat.whatsapp.com/EXhW4sBTN8SKof54SewN2p",
        image: "https://images.unsplash.com/photo-1588514727390-91fd5ebaef1e?auto=format&fit=crop&w=800&q=80",
    },
    {
        name: "Automobile",
        link: "https://chat.whatsapp.com/E8h43csFFakIdRQNqAdujc",
        image: "https://images.unsplash.com/photo-1502877338535-766e1452684a?auto=format&fit=crop&w=800&q=80",
    },
];

const LinkPage = () => {
    return (
        <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 flex flex-col items-center p-6">
            <h1 className="text-4xl font-extrabold text-gray-800 mb-8 text-center">
                WhatsApp Links Directory
            </h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 w-full max-w-6xl">
                {whatsappLinks.map((item, index) => (
                    <div
                        key={index}
                        className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 hover:scale-[1.03] flex flex-col"
                    >
                        <img
                            src={item.image}
                            alt={item.name}
                            className="w-full h-48 object-cover"
                        />
                        <div className="flex flex-col items-center justify-between flex-grow p-4">
                            <h2 className="text-lg font-semibold text-gray-800 mb-3 text-center">
                                {item.name}
                            </h2>
                            <a
                                href={item.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 bg-green-500 text-white px-4 py-2 rounded-full hover:bg-green-600 transition-all duration-200"
                            >
                                <FaWhatsapp className="text-xl" />
                                <span>Join WhatsApp Group</span>
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default LinkPage;