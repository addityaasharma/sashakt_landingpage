import React, { useEffect, useState } from "react";
import { TrendingProducts } from "./TrendingProducts";
import { FaWhatsapp } from "react-icons/fa";
import { X } from "lucide-react";
import { JoinAndWin, LimitedTimeBanner } from "./Feature";
import { useNavigate } from "react-router-dom";
import Popup from "./PopUp";
const SHOP_URL = "https://clickship.in";
const PROMO_DELAY_MS = 5000;


const whatsappLinks = [
    {
        name: "Founder Support",
        link: "https://chat.whatsapp.com/K81Jyw1IuEhKVPADnD5IYc",
        image:
            "https://images.unsplash.com/photo-1532619187608-e5375cab36aa?auto=format&fit=crop&w=800&q=80",
    },
    {
        name: "Seed and Plant Combo",
        link: "https://chat.whatsapp.com/ESJR0zhmxSy9AN6eu6Ao2q",
        image:
            "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=800&q=80",
    },
    {
        name: "Accessories",
        link: "https://chat.whatsapp.com/CXAluNGTHmj9YqqZdAppZO",
        image:
            "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?auto=format&fit=crop&w=800&q=80",
    },
    {
        name: "Something Unique",
        link: "https://chat.whatsapp.com/Byuf0c3O4DsIpByKpRxpdw",
        image:
            "https://images.unsplash.com/photo-1492724441997-5dc865305da7?auto=format&fit=crop&w=800&q=80",
    },
    {
        name: "Kitchen",
        link: "https://chat.whatsapp.com/Hxhv2WXAjkTEet3hbulzcq",
        image:
            "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
    },
    {
        name: "Kids Toy",
        link: "https://chat.whatsapp.com/HwKqz8QPu0Y2j6doTDlEaE",
        image:
            "https://images.unsplash.com/photo-1615874959474-d609969a20ed?auto=format&fit=crop&w=800&q=80",
    },
    {
        name: "Hot Picks",
        link: "https://chat.whatsapp.com/DtxEVnuARCy4bAXCxkUw66",
        image:
            "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=800&q=80",
    },
    {
        name: "Gardening and Plants",
        link: "https://chat.whatsapp.com/KqjbVusGLvgBMbd9zZ2zGz",
        image:
            "https://images.unsplash.com/photo-1524594227085-4e4c1bcd0a22?auto=format&fit=crop&w=800&q=80",
    },
    {
        name: "Fashion and Lifestyle",
        link: "https://chat.whatsapp.com/I9yINQEEY0wD77RInGcRPH",
        image:
            "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=800&q=80",
    },
    {
        name: "Christmas Magic Collection",
        link: "https://chat.whatsapp.com/IuxZtSZxpXrEr7fgTDTQXA",
        image:
            "https://images.unsplash.com/photo-1512909006721-3d6018887383?auto=format&fit=crop&w=800&q=80",
    },
    {
        name: "Beauty and Personal Health Care",
        link: "https://chat.whatsapp.com/EXhW4sBTN8SKof54SewN2p",
        image:
            "https://images.unsplash.com/photo-1588514727390-91fd5ebaef1e?auto=format&fit=crop&w=800&q=80",
    },
    {
        name: "Automobile",
        link: "https://chat.whatsapp.com/E8h43csFFakIdRQNqAdujc",
        image:
            "https://images.unsplash.com/photo-1502877338535-766e1452684a?auto=format&fit=crop&w=800&q=80",
    },
];

export default function MarketingLanding() {
    const [showPromo, setShowPromo] = useState(false);
    const [promoGroup, setPromoGroup] = useState(null);
    const [hasAutoShown, setHasAutoShown] = useState(false);

    const navigate = useNavigate()

    useEffect(() => {
        const hot = whatsappLinks.find((g) => g.name === "Hot Picks") || whatsappLinks[0];
        setPromoGroup(hot);

        const promoFlag = localStorage.getItem("marketing_promo_shown_v1");
        if (!promoFlag) {
            const t = setTimeout(() => {
                setShowPromo(true);
                localStorage.setItem("marketing_promo_shown_v1", "1");
                setHasAutoShown(true);
            }, PROMO_DELAY_MS);
            return () => clearTimeout(t);
        } else {
            setHasAutoShown(true);
        }
    }, []);

    const openGroup = (link, name) => {
        window.open(link, "_blank", "noopener,noreferrer");
    };

    const closePromo = () => {
        setShowPromo(false);
    };

    return (
        <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white text-gray-900 mt-15">
            <header className="max-w-7xl mx-auto px-6 py-10">
                <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                    <div className="max-w-2xl">
                        <div className="inline-flex items-center gap-3 bg-white px-3 py-2 rounded-full shadow-sm">
                            <div className="w-10 h-10 rounded-full bg-green-500 flex items-center justify-center text-white font-bold">
                                W
                            </div>
                            <div className="text-sm">
                                <div className="font-semibold">WhatsApp Directory</div>
                                <div className="text-xs text-gray-500">Join groups & get daily deals</div>
                            </div>
                        </div>

                        <h1 className="mt-6 text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight">
                            Shop Smarter Together —{" "}
                            <span className="text-green-600">Join our exclusive WhatsApp groups</span>
                        </h1>

                        <p className="mt-4 text-gray-600 text-sm sm:text-base">
                            Daily hot picks, member-only discounts, quick founder support — all inside WhatsApp. Join a
                            group to get updates, early offers, and community recommendations.
                        </p>

                        <div className="mt-6 flex gap-3 flex-wrap">
                            <button
                                onClick={() => {
                                    const hot = whatsappLinks.find((g) => g.name === "Hot Picks") || whatsappLinks[0];
                                    openGroup(hot.link, hot.name);
                                }}
                                className="inline-flex items-center gap-2 bg-green-600 text-white px-5 py-3 rounded-full font-semibold shadow hover:scale-[1.02] transition-transform"
                            >
                                <FaWhatsapp /> Join Hot Picks
                            </button>

                            <a
                                href={SHOP_URL}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 px-5 py-3 rounded-full border border-gray-200 hover:shadow transition-shadow"
                            >
                                Shop Now
                                <svg
                                    className="w-4 h-4"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                                </svg>
                            </a>
                        </div>
                        <div>
                            <Popup />
                        </div>

                        <div className="mt-6 flex flex-wrap gap-3 items-center text-sm text-gray-600">
                            <div className="inline-flex items-center gap-2 bg-white px-3 py-2 rounded-lg shadow-sm">
                                <strong>10K+</strong>
                                <span>Members</span>
                            </div>
                            <div className="inline-flex items-center gap-2 bg-white px-3 py-2 rounded-lg shadow-sm">
                                <strong>Verified</strong>
                                <span>Offers</span>
                            </div>
                            <div className="inline-flex items-center gap-2 bg-white px-3 py-2 rounded-lg shadow-sm">
                                <strong>Fast</strong>
                                <span>Support</span>
                            </div>
                        </div>
                    </div>

                    <div className="w-full md:w-1/2 lg:w-2/5">
                        <div className="rounded-2xl overflow-hidden shadow-xl bg-white">
                            <img
                                src={
                                    "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=1200&q=80"
                                }
                                alt="hot picks"
                                className="w-full h-64 object-cover"
                            />
                            <div className="p-4">
                                <div className="text-sm text-gray-500">Featured</div>
                                <div className="mt-2 font-semibold">Hot Picks — deals selected by our community</div>
                                <p className="text-xs text-gray-500 mt-2">Join the group to get instant deal alerts.</p>
                                <div className="mt-4">
                                    <button
                                        onClick={() => {
                                            const hot = whatsappLinks.find((g) => g.name === "Hot Picks") || whatsappLinks[0];
                                            openGroup(hot.link, hot.name);
                                        }}
                                        className="w-full inline-flex items-center justify-center gap-2 bg-green-600 text-white px-4 py-2 rounded-lg"
                                    >
                                        <FaWhatsapp /> Join Hot Picks
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            <TrendingProducts />

            <main className="max-w-7xl mx-auto px-6 pb-16">
                <section className="mt-6">
                    <h2 className="text-2xl font-bold mb-4">All Groups</h2>
                    <p className="text-sm text-gray-600 mb-6">
                        Browse groups by interest. Click any card to open the invite link and join.
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                        {whatsappLinks.map((item, i) => (
                            <article
                                key={i}
                                className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow transform hover:-translate-y-1 cursor-pointer"
                                onClick={() => navigate(`/group/${i}`)}
                            >
                                <div className="relative">
                                    <img src={item.image} alt={item.name} className="w-full h-44 object-cover" />
                                    <div className="absolute top-3 left-3 bg-white bg-opacity-90 px-3 py-1 rounded-full text-xs font-semibold">
                                        {item.name.split(" ").slice(0, 2).join(" ")}
                                    </div>
                                </div>

                                <div className="p-4 flex flex-col gap-3">
                                    <h3 className="font-semibold text-gray-800">{item.name}</h3>
                                    <p className="text-xs text-gray-500">Active community · daily posts · exclusive offers</p>
                                </div>
                            </article>
                        ))}
                    </div>

                </section>

                <section className="mt-12 grid md:grid-cols-2 gap-8">
                    <div className="bg-white p-6 rounded-2xl shadow-sm">
                        <h3 className="font-bold text-lg">What members say</h3>
                        <div className="mt-4 space-y-4 text-sm text-gray-700">
                            <div className="bg-gray-50 p-3 rounded-lg">
                                <strong>Ria — Mumbai</strong>
                                <div className="mt-1">“I found products at 30–40% off through Hot Picks. Amazing!”</div>
                            </div>
                            <div className="bg-gray-50 p-3 rounded-lg">
                                <strong>Arjun — Delhi</strong>
                                <div className="mt-1">“Founder support is super responsive. Quick refunds.”</div>
                            </div>
                            <div className="bg-gray-50 p-3 rounded-lg">
                                <strong>Neha — Bengaluru</strong>
                                <div className="mt-1">“Daily deal alerts save me time and money.”</div>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white p-6 rounded-2xl shadow-sm">
                        <h3 className="font-bold text-lg">Frequently asked</h3>
                        <div className="mt-4 space-y-3 text-sm text-gray-700">
                            <details className="bg-gray-50 p-3 rounded-lg">
                                <summary className="cursor-pointer font-medium">How do I join?</summary>
                                <p className="mt-2 text-xs">Click any Join button; WhatsApp will open with the invite link.</p>
                            </details>
                            <details className="bg-gray-50 p-3 rounded-lg">
                                <summary className="cursor-pointer font-medium">Is it free?</summary>
                                <p className="mt-2 text-xs">Yes — joining groups is free. Offers inside may be time-limited.</p>
                            </details>
                            <details className="bg-gray-50 p-3 rounded-lg">
                                <summary className="cursor-pointer font-medium">What should I expect?</summary>
                                <p className="mt-2 text-xs">Deal alerts, short polls, support chats, and exclusive coupon codes.</p>
                            </details>
                        </div>
                    </div>
                </section>
            </main>
            <LimitedTimeBanner />
            <JoinAndWin />


            <footer className="bg-white border-t">
                <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col md:flex-row gap-6 justify-between">
                    <div>
                        <div className="font-bold text-lg">WhatsApp Directory</div>
                        <p className="text-sm text-gray-600 mt-2">Quick links to groups and exclusive deals.</p>
                        <div className="mt-4 flex gap-3">
                            <a
                                href={SHOP_URL}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-3 py-2 rounded-full border text-sm"
                            >
                                Shop
                            </a>
                            <button
                                onClick={() => {
                                    const hot = whatsappLinks.find((g) => g.name === "Hot Picks") || whatsappLinks[0];
                                    openGroup(hot.link, hot.name);
                                }}
                                className="px-3 py-2 rounded-full bg-green-600 text-white text-sm"
                            >
                                Join Hot Picks
                            </button>
                        </div>
                    </div>

                    <div className="text-sm text-gray-600">
                        <div>© {new Date().getFullYear()} Googly. All rights reserved.</div>
                        <div className="mt-2">support@googlyy.com · +91 95755 84999</div>
                    </div>
                </div>
            </footer>

            {showPromo && promoGroup && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
                    <div className="absolute inset-0 bg-black/40" onClick={closePromo} />

                    <div className="relative bg-white rounded-2xl shadow-2xl max-w-md w-full overflow-hidden">
                        <button
                            onClick={closePromo}
                            className="absolute top-3 right-3 bg-white rounded-full p-1.5 shadow hover:bg-gray-50 z-10"
                        >
                            <X size={18} />
                        </button>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-4 sm:p-6">
                            <div className="flex items-center justify-center">
                                <img src={promoGroup.image} alt={promoGroup.name} className="w-full h-40 object-cover rounded-lg" />
                            </div>

                            <div className="flex flex-col justify-between">
                                <div>
                                    <div className="text-xs text-gray-500">Featured group</div>
                                    <h3 className="text-xl font-bold mt-1">{promoGroup.name}</h3>
                                    <p className="text-sm text-gray-600 mt-2">Join now to get instant deal alerts and member-only coupons.</p>
                                </div>

                                <div className="mt-4 flex gap-2">
                                    <button
                                        onClick={() => openGroup(promoGroup.link, promoGroup.name)}
                                        className="flex-1 inline-flex items-center justify-center gap-2 bg-green-600 text-white px-4 py-2 rounded-lg"
                                    >
                                        <FaWhatsapp /> Join Now
                                    </button>

                                    <button
                                        onClick={() => {
                                            // Continue browsing = just close promo
                                            closePromo();
                                        }}
                                        className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2 rounded-lg border"
                                    >
                                        Continue Browsing
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 z-40 md:hidden">
                <div className="bg-white rounded-full shadow-lg flex items-center gap-3 px-4 py-2">
                    <button
                        onClick={() => {
                            const hot = whatsappLinks.find((g) => g.name === "Hot Picks") || whatsappLinks[0];
                            openGroup(hot.link, hot.name);
                        }}
                        className="inline-flex items-center gap-2 bg-green-600 text-white px-4 py-2 rounded-full text-sm"
                    >
                        <FaWhatsapp /> Join
                    </button>
                    <a
                        href={SHOP_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2 rounded-full border text-sm"
                    >
                        Shop
                    </a>
                </div>
            </div>
        </div>
    );
}
