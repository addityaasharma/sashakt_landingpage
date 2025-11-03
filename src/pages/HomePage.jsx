import React from "react";
import { BookOpen, Users, Star } from "lucide-react";
import BlogPage from "./BlogPage";
import AdsterraAd from "../components/AdsterraAd";
import AdsterraSocialBar from "../components/AdsterraSocialBar";

const HomePage = () => {
    return (
        <>
            <div className="min-h-screen flex flex-col md:flex-row items-center justify-between bg-gray-100 text-black px-6 md:px-20 lg:px-40">
                <div className="w-full md:w-1/2 flex flex-col justify-center text-center md:text-left mt-10 md:mt-0">
                    <p className="text-xl md:text-2xl uppercase font-bold text-gray-700">
                        Discover Research -
                    </p>
                    <h2 className="text-3xl md:text-5xl font-bold leading-snug mt-3">
                        A better learning <br className="hidden md:block" /> future starts here
                    </h2>
                    <div className="flex flex-col sm:flex-row gap-4 mt-6 justify-center md:justify-start">
                        <button className="px-6 py-3 border rounded-lg hover:bg-black hover:text-white transition">
                            Read More
                        </button>
                        <button className="px-6 py-3 border rounded-lg hover:bg-black hover:text-white transition">
                            Get A Quote
                        </button>
                    </div>
                    <p className="mt-8 text-gray-600 leading-relaxed max-w-xl mx-auto md:mx-0">
                        Welcome to Googly.com, your ultimate destination for insightful, engaging, and up-to-date blogs across a wide range of topics. Whether you’re a curious learner, a passionate professional, or someone who just loves to stay informed, Googly.com has something for everyone. Our platform is designed to bring together the best content from diverse fields, making it easy for readers to explore and discover blogs that match their interests.
                    </p>
                </div>

                <div className="w-full md:w-1/2 flex items-center justify-center mt-10 md:mt-0">
                    <img
                        src="https://solverwp.com/demo/react/edumint/assets/img/banner/1.png"
                        alt="Learning Banner"
                        className="max-h-[400px] w-auto object-contain"
                    />
                </div>
            </div>

            {/* Key Points */}
            <div className="max-w-6xl mx-auto -mt-10 md:-mt-16 bg-[#002147] rounded-xl text-white flex flex-col md:flex-row overflow-hidden">
                <div className="w-full md:w-[35%] p-6 border-b md:border-b-0 md:border-r border-white">
                    <h1 className="text-2xl md:text-4xl font-bold">Vivamas Maximus</h1>
                    <p className="mt-4 text-sm md:text-base">
                        At Googly.com, we understand that knowledge is vast and ever-evolving. That’s why we cover a variety of categories including Technology, Health, Finance, Travel, Education, Sports, Food, Fashion, Lifestyle, Fitness, Gaming, Business, Marketing, Real Estate, Music, Movies, Books, Science, Politics, History, DIY, Parenting, Spirituality, Self-Improvement, Art, Photography, Programming, AI & ML, Web Development, Startups, Crypto, Environment, and Automobiles
                    </p>
                    <ul className="mt-4 space-y-1 list-disc list-inside text-sm">
                        <li>Real Estate</li>
                        <li>Fashion and LifeStyle</li>
                    </ul>
                </div>

                <div className="flex-1 grid grid-cols-1 sm:grid-cols-3">
                    <div className="flex flex-col items-center justify-center border-b sm:border-b-0 sm:border-r border-white p-6">
                        <BookOpen size={36} className="mb-2" />
                        <p className="text-center text-sm">Learning resources available.</p>
                    </div>
                    <div className="flex flex-col items-center justify-center border-b sm:border-b-0 sm:border-r border-white p-6">
                        <Users size={36} className="mb-2" />
                        <p className="text-center text-sm">Connect with the community.</p>
                    </div>
                    <div className="flex flex-col items-center justify-center p-6">
                        <Star size={36} className="mb-2" />
                        <p className="text-center text-sm">Achieve excellence with us.</p>
                    </div>
                </div>
            </div>

            <div>
                <AdsterraAd scriptSrc="//www.highperformanceformat.com/24cfcce803380b677dd0e174b93362b2/invoke.js" />
            </div>

            <div>
                <BlogPage />
            </div>

            <div>
                <AdsterraSocialBar />
            </div>

            {/* About Us */}
            <div className="max-w-6xl mx-auto my-12 flex flex-col md:flex-row items-center gap-8 px-6">
                <div className="w-full md:w-1/2 flex items-center justify-center">
                    <img
                        src="https://images.pexels.com/photos/159866/books-book-pages-read-literature-159866.jpeg"
                        alt="About us"
                        className="w-full max-h-[400px] object-cover rounded-xl shadow-lg"
                    />
                </div>

                <div className="w-full md:w-1/2">
                    <p className="text-base md:text-lg uppercase tracking-wide text-gray-500 font-semibold">
                        About Us -
                    </p>
                    <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mt-2 mb-4">
                        Strength in Numbers
                    </h2>
                    <p className="text-gray-600 leading-relaxed mb-6 text-sm md:text-base">
                        Our goal is to make reading blogs a seamless and enjoyable experience. Googly.com features a clean, user-friendly interface that allows you to easily navigate between categories, discover trending topics, and access blogs that cater to your preferences. Each article is carefully curated to provide value, whether it’s practical advice, inspiring stories, or thought-provoking insights.
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-gray-700 text-sm md:text-base">
                        <li>Our team constantly updates the platform with fresh content.</li>
                        <li>We cover a wide range of topics to cater to diverse interests.</li>
                    </ul>
                </div>
            </div>

            {/* Contact */}
            <div className="max-w-6xl mx-auto my-12 flex flex-col md:flex-row items-center bg-amber-300/50 gap-8 p-6 md:p-10 rounded-xl shadow-md">
                <div className="w-full md:w-1/2 flex items-center justify-center">
                    <img
                        src="https://images.pexels.com/photos/9429335/pexels-photo-9429335.jpeg"
                        alt="Contact Us"
                        className="w-full max-h-[400px] object-cover rounded-xl shadow-lg"
                    />
                </div>

                {/* Right: Contact Form */}
                <div className="w-full md:w-1/2">
                    <p className="text-base md:text-lg uppercase tracking-wide text-gray-500 font-semibold">
                        Contact Us -
                    </p>
                    <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mt-2 mb-6">
                        Get in Touch
                    </h2>

                    <form className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                Full Name
                            </label>
                            <input
                                type="text"
                                placeholder="Enter your name"
                                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-[#002147] outline-none"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                Email
                            </label>
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-[#002147] outline-none"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                Message
                            </label>
                            <textarea
                                rows="4"
                                placeholder="Write your message..."
                                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-[#002147] outline-none resize-none"
                            ></textarea>
                        </div>

                        <button
                            type="submit"
                            className="w-full py-3 bg-[#002147] text-white rounded-lg font-semibold hover:bg-[#013366] transition"
                        >
                            Send Message
                        </button>
                    </form>
                </div>
            </div>
        </>
    );
};

export default HomePage;
