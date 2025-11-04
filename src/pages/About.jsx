import React, { useState, useEffect } from "react";
import { Users, Globe, Award } from "lucide-react";

const categories = [
  // your categories if needed for other parts
];

const About = () => {
  const [darkMode, setDarkMode] = useState(false);

  // Add/remove dark class on <html> root for Tailwind dark mode styles
  useEffect(() => {
    if (darkMode) document.documentElement.classList.add("dark");
    else document.documentElement.classList.remove("dark");
  }, [darkMode]);

  return (
    <>
      {/* Dark mode toggle fixed button */}
      <div className="fixed top-4 right-4 z-50">
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="px-4 py-2 bg-gradient-to-r from-yellow-400 to-pink-500 text-white rounded-lg shadow-lg hover:scale-110 transform transition"
          aria-label="Toggle Dark Mode"
        >
          Toggle {darkMode ? "Light" : "Dark"}
        </button>
      </div>

      <div
        className={`min-h-screen flex flex-col md:flex-row items-center justify-between 
          px-6 md:px-20 lg:px-40 py-16 transition-colors duration-700
          ${
            darkMode
              ? "bg-gradient-to-br from-gray-900 via-gray-800 to-black text-gray-200"
              : "bg-gradient-to-br from-gray-50 via-white to-blue-50 text-gray-900"
          }
        `}
      >
        <div className="w-full md:w-1/2 flex flex-col justify-center text-center md:text-left mt-10 md:mt-0 max-w-lg z-10">
          <p className="text-xl md:text-2xl uppercase font-bold text-indigo-400">
            Who We Are
          </p>
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mt-3">
            Building Knowledge <br className="hidden md:block" />
            Together
          </h1>
          <p className="mt-6 text-gray-700 dark:text-gray-300 leading-relaxed text-base md:text-lg">
            We are dedicated to empowering learners worldwide with high-quality
            resources, collaboration, and guidance. Our mission is to make
            education accessible, engaging, and effective for everyone.
          </p>
        </div>
        <div className="w-full md:w-1/2 flex items-center justify-center mt-10 md:mt-0 z-0">
          <img
            src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg"
            alt="About Us Hero"
            className="max-h-[450px] w-auto object-contain rounded-3xl shadow-2xl border-4 border-indigo-400 dark:border-indigo-700"
          />
        </div>
      </div>

      {/* Stats Cards */}
      <div className="max-w-6xl mx-auto my-16 grid grid-cols-1 sm:grid-cols-3 gap-8 px-6 md:px-0 transition-colors duration-700">
        {[
          {
            Icon: Users,
            title: "10k+",
            subtitle: "Active Learners",
            bgGradientLight: "from-indigo-600 to-pink-500",
            bgGradientDark: "from-indigo-500 to-pink-600",
            iconColorLight: "text-white",
            iconColorDark: "text-white",
          },
          {
            Icon: Globe,
            title: "50+",
            subtitle: "Countries Reached",
            bgGradientLight: "from-teal-600 to-blue-600",
            bgGradientDark: "from-teal-700 to-blue-700",
            iconColorLight: "text-white",
            iconColorDark: "text-white",
          },
          {
            Icon: Award,
            title: "100+",
            subtitle: "Expert Contributors",
            bgGradientLight: "from-yellow-400 to-orange-400",
            bgGradientDark: "from-yellow-500 to-orange-500",
            iconColorLight: "text-white",
            iconColorDark: "text-white",
          },
        ].map(
          (
            {
              Icon,
              title,
              subtitle,
              bgGradientLight,
              bgGradientDark,
              iconColorLight,
              iconColorDark,
            },
            i
          ) => (
            <div
              key={i}
              className={`flex flex-col items-center rounded-3xl p-8 shadow-lg 
                bg-gradient-to-br ${
                  darkMode ? bgGradientDark : bgGradientLight
                } hover:scale-105 transition-transform duration-300 cursor-pointer`}
            >
              <Icon
                size={48}
                className={`mb-4 ${darkMode ? iconColorDark : iconColorLight}`}
              />
              <h2 className="text-4xl font-extrabold text-white">{title}</h2>
              <p className="mt-2 text-white text-center text-sm">{subtitle}</p>
            </div>
          )
        )}
      </div>

      {/* Mission Section */}
      <div
        className={`max-w-6xl mx-auto my-16 flex flex-col md:flex-row items-center gap-12 px-6 md:px-20 transition-colors duration-700`}
      >
        <div className="w-full md:w-1/2 flex items-center justify-center">
          <img
            src="https://images.pexels.com/photos/3184299/pexels-photo-3184299.jpeg"
            alt="Mission"
            className="w-full max-h-[450px] object-cover rounded-3xl shadow-2xl border-4 border-indigo-300 dark:border-indigo-700"
          />
        </div>
        <div className="w-full md:w-1/2 max-w-xl text-gray-900 dark:text-gray-200">
          <p className="uppercase tracking-wide text-indigo-600 dark:text-indigo-400 font-semibold mb-2">
            Our Mission
          </p>
          <h2 className="text-3xl md:text-5xl font-extrabold mb-6">
            Educate. Inspire. Transform.
          </h2>
        <p className="text-gray-900 dark:text-gray-100 mb-6 leading-relaxed text-sm md:text-base font-medium">
  We aim to provide innovative learning experiences that inspire
  curiosity, foster critical thinking, and transform lives.
</p>

          <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 font-semibold text-base md:text-lg">
            <li>High-quality, accessible educational resources.</li>
            <li>Global collaboration and knowledge sharing.</li>
            <li>Empowering learners with practical skills.</li>
          </ul>
        </div>
      </div>

      {/* Team Section */}
      <div className="max-w-6xl mx-auto my-16 px-6 md:px-20">
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-gray-100 mb-10 text-center">
          Meet Our Team
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10">
          {[
            {
              img: "https://randomuser.me/api/portraits/men/32.jpg",
              name: "Ravi Sharma",
              role: "Founder & CEO",
            },
            {
              img: "https://randomuser.me/api/portraits/women/44.jpg",
              name: "Ananya Gupta",
              role: "Chief Educator",
            },
            {
              img: "https://randomuser.me/api/portraits/men/56.jpg",
              name: "Karan Verma",
              role: "Head of Research",
            },
          ].map(({ img, name, role }, i) => (
            <div
              key={i}
              className="bg-white dark:bg-gray-800 rounded-3xl shadow-xl p-8 flex flex-col items-center transition hover:shadow-2xl"
            >
              <img
                src={img}
                alt={name}
                className="w-28 h-28 rounded-full object-cover mb-6 border-4 border-indigo-300 dark:border-indigo-700"
              />
              <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-2">
                {name}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">{role}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default About;
