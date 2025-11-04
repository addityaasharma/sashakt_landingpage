import React, { useState } from "react";
import { BookOpen, Users, Star } from "lucide-react";
import BlogPage from "./BlogPage";
import AdsterraAd from "../components/AdsterraAd";
import AdsterraSocialBar from "../components/AdsterraSocialBar";

const PrimaryButton = ({ children, ...props }) => (
  <button
    className="px-7 py-3 rounded-xl font-extrabold text-lg bg-gradient-to-br from-blue-600 to-amber-400 text-white shadow-lg hover:scale-105 transition-all duration-300 w-full sm:w-auto"
    {...props}
  >
    {children}
  </button>
);

const HomePage = () => {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div
      className={`${
        darkMode ? "bg-gray-900 text-gray-200" : "bg-blue-50 text-gray-900"
      } min-h-screen transition-colors duration-500`}
    >
      {/* Toggle button */}
      <div className="fixed top-4 right-4 z-50">
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="px-4 py-2 bg-gradient-to-r from-yellow-400 to-pink-500 text-white rounded-lg shadow-lg hover:scale-110 transform transition"
          aria-label="Toggle Dark Mode"
        >
          Toggle {darkMode ? "Light" : "Dark"}
        </button>
      </div>

      {/* Hero Section */}
      <section
        className={`min-h-[75vh] flex flex-col md:flex-row items-center justify-between px-4 sm:px-6 md:px-20 lg:px-40 py-20 ${
          darkMode
            ? "bg-gradient-to-br from-gray-800 via-gray-900 to-black"
            : "bg-gradient-to-br from-blue-200 via-white to-blue-100"
        }`}
      >
        <div className="w-full md:w-1/2 text-center md:text-left mb-12 md:mb-0 z-10">
          <p className="uppercase font-semibold tracking-widest text-indigo-400 mb-3">
            Discover Research
          </p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6 leading-tight bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 via-amber-400 to-pink-500 drop-shadow-lg">
            A better learning
            <br className="hidden md:block" /> future starts here
          </h1>
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center md:justify-start mb-8">
            <PrimaryButton>Read More</PrimaryButton>
            <PrimaryButton>Get A Quote</PrimaryButton>
          </div>
          <p className="max-w-lg mx-auto md:mx-0 text-base sm:text-lg leading-relaxed tracking-wide text-gray-700 dark:text-gray-300">
            Welcome to Googly.com, your ultimate destination for engaging,
            curated blogs. Explore trending insights and creative works from
            across industries, all presented with bold visuals and interactive
            design.
          </p>
        </div>
        <div className="w-full md:w-1/2 flex justify-center z-10">
          <img
            src="https://solverwp.com/demo/react/edumint/assets/img/banner/1.png"
            alt="Learning Banner"
            className="max-h-[360px] sm:max-h-[400px] md:max-h-[440px] w-auto rounded-3xl shadow-2xl border-8 border-indigo-100 dark:border-indigo-900 bg-white dark:bg-gray-800"
          />
        </div>
      </section>

      {/* Key Points */}
      <section className="max-w-7xl mx-auto -mt-16 rounded-xl shadow-lg overflow-hidden flex flex-col md:flex-row text-gray-800 dark:text-gray-200 px-4 sm:px-6 md:px-0">
        <div className="w-full md:w-1/3 p-6 md:p-10 bg-gradient-to-br from-indigo-600 to-pink-500 text-white rounded-l-xl relative">
          <div className="absolute inset-0 bg-black bg-opacity-30 rounded-l-xl pointer-events-none"></div>
          <div className="relative z-10">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold mb-6 drop-shadow-lg">
              Vivamas Maximus
            </h2>
            <p className="text-base sm:text-lg leading-relaxed drop-shadow-md">
              Explore categories including Technology, Health, Finance, Travel,
              Education, Sports, Food, Fashion, Lifestyle, Fitness, Gaming,
              Business, Marketing, Real Estate, Music, Movies, Books, Science,
              Politics, History, DIY, Parenting, Spirituality, Self-Improvement,
              Art, Photography, Programming, AI & ML, Web Development, Startups,
              Crypto, Environment, and Automobiles.
            </p>
            <ul className="mt-6 space-y-3 list-disc list-inside text-base font-semibold drop-shadow-md">
              <li>Real Estate</li>
              <li>Fashion and Lifestyle</li>
            </ul>
          </div>
        </div>
        <div className="flex-1 grid grid-cols-1 sm:grid-cols-3 bg-transparent divide-x divide-gray-300 dark:divide-gray-600 text-center gap-4 p-6 md:p-8">
          {[
            {
              Icon: BookOpen,
              label: "Learning resources available.",
              iconColor: "text-indigo-700 dark:text-indigo-300",
              bgColor: "bg-indigo-100 dark:bg-indigo-900",
            },
            {
              Icon: Users,
              label: "Connect with the community.",
              iconColor: "text-pink-600 dark:text-pink-400",
              bgColor: "bg-pink-100 dark:bg-pink-900",
            },
            {
              Icon: Star,
              label: "Achieve excellence with us.",
              iconColor: "text-amber-400 dark:text-amber-300",
              bgColor: "bg-amber-100 dark:bg-amber-900",
            },
          ].map(({ Icon, label, iconColor, bgColor }, idx) => (
            <div
              key={idx}
              className={`${bgColor} rounded-3xl shadow-lg p-6 sm:p-10 cursor-pointer hover:scale-105 transition transform flex flex-col items-center justify-center`}
            >
              <Icon size={48} className={`${iconColor} mb-4`} />
              <p className="font-semibold text-lg text-gray-900 dark:text-gray-100 drop-shadow-sm">
                {label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Ad Section */}
      <div className="my-12 max-w-7xl mx-auto px-4 sm:px-6 md:px-20">
        <AdsterraAd />
      </div>

      {/* Blog Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-20">
        <BlogPage darkMode={darkMode} />
      </div>

      {/* Social Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-20 my-8">
        <AdsterraSocialBar />
      </div>

      {/* About Section */}
      <section className="max-w-7xl mx-auto my-20 px-4 sm:px-6 md:px-20 flex flex-col md:flex-row items-center gap-8 md:gap-12 bg-indigo-50 dark:bg-gray-900 rounded-xl shadow-lg text-gray-900 dark:text-gray-100 p-8 sm:p-12">
        <div className="w-full md:w-1/2">
          <img
            src="https://images.pexels.com/photos/159866/books-book-pages-read-literature-159866.jpeg"
            alt="About us"
            className="rounded-3xl shadow-xl border-4 sm:border-8 border-indigo-200 dark:border-indigo-700 mix-blend-darken dark:mix-blend-lighten"
          />
        </div>
        <div className="w-full md:w-1/2">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-3">
            Strength in Numbers
          </h2>
          <p className="mb-6 text-base sm:text-lg leading-relaxed">
            Our goal is to make blog reading seamless and inspiring. Enjoy
            curated articles, trending topics, and creative stories in a
            visually immersive space.
          </p>
          <ul className="list-disc list-inside font-semibold space-y-2 text-base sm:text-lg">
            <li>Fresh content updated daily.</li>
            <li>Diverse topics for every creative interest.</li>
          </ul>
        </div>
      </section>

      {/* Contact Section */}
      <section className="max-w-7xl mx-auto my-20 px-4 sm:px-6 md:px-20 bg-indigo-100 dark:bg-gray-900 rounded-xl shadow-xl p-8 sm:p-12 flex flex-col md:flex-row items-center gap-8 md:gap-10">
        <div className="w-full md:w-1/2">
          <img
            src="https://images.pexels.com/photos/9429335/pexels-photo-9429335.jpeg"
            alt="Contact Us"
            className="rounded-3xl shadow-lg border-4 sm:border-8 border-indigo-300 dark:border-indigo-800"
          />
        </div>
        <div className="w-full md:w-1/2 bg-white/90 dark:bg-gray-800/90 rounded-xl p-6 sm:p-10 shadow-inner">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold mb-6 text-indigo-700 dark:text-amber-400">
            Get in Touch
          </h2>
          <form className="space-y-6 sm:space-y-8">
            <div>
              <label
                htmlFor="full-name"
                className="block mb-2 font-semibold text-gray-700 dark:text-gray-300"
              >
                Full Name
              </label>
              <input
                id="full-name"
                type="text"
                placeholder="Enter your name"
                className="w-full border-b-2 border-indigo-300 focus:border-indigo-600 dark:border-amber-400 dark:focus:border-amber-500 bg-transparent px-3 py-2 text-base sm:text-lg outline-none transition rounded"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block mb-2 font-semibold text-gray-700 dark:text-gray-300"
              >
                Email
              </label>
              <input
                id="email"
                type="email"
                placeholder="Enter your email"
                className="w-full border-b-2 border-indigo-300 focus:border-indigo-600 dark:border-amber-400 dark:focus:border-amber-500 bg-transparent px-3 py-2 text-base sm:text-lg outline-none transition rounded"
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block mb-2 font-semibold text-gray-700 dark:text-gray-300"
              >
                Message
              </label>
              <textarea
                id="message"
                rows="5"
                placeholder="Write your message..."
                className="w-full border-b-2 border-indigo-300 focus:border-indigo-600 dark:border-amber-400 dark:focus:border-amber-500 bg-transparent px-3 py-2 text-base sm:text-lg outline-none transition rounded resize-none"
              />
            </div>
            <PrimaryButton type="submit" className="w-full">
              Send Message
            </PrimaryButton>
          </form>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
