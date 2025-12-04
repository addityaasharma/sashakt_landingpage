import React from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

const heroSlides = [
    {
        id: 1,
        image:
            "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1920&q=80",
        title: "Discover Ideas that Inspire 💡",
        subtitle: "Explore insightful blogs, guides, and stories tailored for creative minds.",
        buttonText: "Read Blogs",
        buttonLink: "https://chat.whatsapp.com/DtxEVnuARCy4bAXCxkUw66",
    },
    {
        id: 2,
        image:
            "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1920&q=80",
        title: "Fuel Your Curiosity 🔥",
        subtitle: "Stay ahead with trending topics, startup insights, and expert tips.",
        buttonText: "Explore Categories",
        buttonLink: "https://chat.whatsapp.com/DtxEVnuARCy4bAXCxkUw66",
    },
    {
        id: 3,
        image:
            "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=1920&q=80",
        title: "Join the Community 🌍",
        subtitle: "Connect with thinkers, founders, and creators through meaningful content.",
        buttonText: "Join Us",
        buttonLink: "https://chat.whatsapp.com/DtxEVnuARCy4bAXCxkUw66",
    },
];

const HeroSection = () => {
    return (
        <section className="relative w-full h-[85vh] overflow-hidden">
            <Swiper
                modules={[Autoplay, Pagination, EffectFade]}
                effect="fade"
                autoplay={{ delay: 4000, disableOnInteraction: false }}
                pagination={{ clickable: true }}
                loop={true}
                className="w-full h-full"
            >
                {heroSlides.map((slide) => (
                    <SwiperSlide key={slide.id}>
                        <div className="relative w-full h-full">
                            {/* Background Image */}
                            <img
                                src={slide.image}
                                alt={slide.title}
                                className="absolute inset-0 w-full h-full object-cover brightness-[0.65]"
                            />

                            {/* Overlay Content */}
                            <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-6">
                                <motion.h1
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.8 }}
                                    className="text-4xl md:text-6xl font-extrabold mb-4 leading-tight"
                                >
                                    {slide.title}
                                </motion.h1>
                                <motion.p
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 0.3, duration: 0.8 }}
                                    className="max-w-2xl text-lg md:text-xl text-gray-100 mb-6"
                                >
                                    {slide.subtitle}
                                </motion.p>
                                <motion.a
                                    href={slide.buttonLink}
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="bg-amber-500 hover:bg-amber-600 text-gray-900 font-semibold px-6 py-3 rounded-full shadow-md transition-colors"
                                >
                                    {slide.buttonText}
                                </motion.a>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
};

export default HeroSection;
