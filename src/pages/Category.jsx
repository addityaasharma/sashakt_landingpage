import React from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import blogs from "../blogs/blog";
import categoryAds from "../blogs/categoryAds";

const Category = () => {
    const { categorySlug } = useParams();
    const categoryName = categorySlug.replace(/-/g, " ").toLowerCase();

    const categoryBlogs = Array.isArray(blogs[categoryName])
        ? blogs[categoryName]
        : blogs[categoryName]
            ? [blogs[categoryName]]
            : [];

    const banners =
        categoryAds[categoryName] ||
        categoryAds["technology"];

    return (
        <div className="min-h-screen bg-white text-gray-900 mt-20">
            <div className="text-center pt-5 border-b border-gray-100">
                <motion.h1
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-3xl md:text-5xl font-extrabold mb-2 capitalize tracking-tight"
                >
                    {categoryName} Blogs
                </motion.h1>
                <p className="text-gray-500 text-base md:text-lg">
                    Explore the latest insights and updates on {categoryName}.
                </p>
            </div>

            <div className="w-full mt-3">
                {/* Desktop Grid */}
                <div className="hidden md:grid grid-cols-2 gap-6 max-w-7xl mx-auto px-4 md:px-8">
                    {banners.map((ad, i) => (
                        <motion.a
                            key={ad.id}
                            href={ad.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 }}
                            className="relative block rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
                        >
                            <img
                                src={ad.image}
                                alt={ad.title}
                                className="w-full h-64 object-cover hover:scale-105 transition-transform duration-500"
                            />
                            <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                                <span className="text-white text-lg md:text-xl font-semibold text-center px-4">
                                    {ad.title}
                                </span>
                            </div>
                        </motion.a>
                    ))}
                </div>

                {/* Mobile Carousel */}
                <div className="md:hidden w-full">
                    <Swiper
                        spaceBetween={10}
                        slidesPerView={1}
                        loop={true}
                        autoplay={{ delay: 3000 }}
                        className="w-full"
                    >
                        {banners.map((ad) => (
                            <SwiperSlide key={ad.id}>
                                <a
                                    href={ad.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="relative block w-full"
                                >
                                    <img
                                        src={ad.image}
                                        alt={ad.title}
                                        className="w-full h-48 sm:h-56 object-cover"
                                    />
                                    <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                                        <span className="text-white text-base font-semibold px-3 text-center">
                                            {ad.title}
                                        </span>
                                    </div>
                                </a>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>

            {/* --- Blogs --- */}
            <div className="max-w-7xl mx-auto px-2 md:px-6 py-5 lg:py-12 grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-5 md:gap-8">
                {categoryBlogs.length === 0 ? (
                    <div className="col-span-full text-center text-gray-500 text-lg py-16">
                        No blogs found in this category.
                    </div>
                ) : (
                    categoryBlogs.map((blog, i) => {
                        const imageSrc =
                            blog.content.find((c) => c.type === "image")?.src ||
                            "https://via.placeholder.com/400x250";

                        return (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.05 }}
                            >
                                <Link
                                    to={`/blog/${categorySlug}/${i}`}
                                    className="block group bg-white lg:rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300"
                                >
                                    <div className="relative overflow-hidden lg:rounded-t-2xl">
                                        <img
                                            src={imageSrc}
                                            alt={blog.title}
                                            className="w-full h-44 sm:h-52 object-cover group-hover:scale-105 transition-transform duration-500"
                                        />
                                    </div>
                                    <div className="p-4 sm:p-5">
                                        <p className="text-xs sm:text-sm text-gray-500 mb-1">
                                            {blog.date
                                                ? new Date(blog.date).toLocaleDateString(undefined, {
                                                    month: "short",
                                                    day: "numeric",
                                                    year: "numeric",
                                                })
                                                : "No date"}
                                        </p>
                                        <h2 className="text-sm sm:text-base font-semibold text-gray-900 mb-2 group-hover:text-amber-500 transition-colors line-clamp-2">
                                            {blog.title}
                                        </h2>
                                        <p className="text-gray-600 text-xs sm:text-sm line-clamp-2">
                                            {blog.content[1]?.text ||
                                                blog.content[0]?.text ||
                                                "Read more..."}
                                        </p>
                                    </div>
                                </Link>
                            </motion.div>
                        );
                    })
                )}
            </div>
        </div>
    );
};

export default Category;
