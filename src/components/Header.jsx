import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import { Menu, X, ChevronDown } from "lucide-react"; // icons

// ✅ Categories (33 example categories)
const categories = [
  "Technology", "Health", "Finance", "Travel", "Education", "Sports",
  "Food", "Fashion", "Lifestyle", "Fitness", "Gaming", "Business",
  "Marketing", "Real Estate", "Music", "Movies", "Books", "Science",
  "Politics", "History", "DIY", "Parenting", "Spirituality", "Self Improvement",
  "Art", "Photography", "Programming", "AI ML", "Web Development", "Startups",
  "Crypto", "Environment", "Automobiles",
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showCategories, setShowCategories] = useState(false);
  const [mobileCategories, setMobileCategories] = useState(false);

  return (
    <header className="h-[80px] w-full bg-[#283646] flex items-center px-6 relative">
      <div className="h-[60px] w-[60px] flex-shrink-0">
        <img src={logo} alt="logo" className="h-full w-full object-contain" />
      </div>

      <div className="flex-1 hidden md:flex justify-center">
        <nav className="flex gap-8 text-white text-lg font-medium items-center relative">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>

          <div className="relative">
            <button
              className="flex items-center gap-1"
              onClick={() => setShowCategories(!showCategories)}
            >
              Categories <ChevronDown size={18} />
            </button>
            {showCategories && (
              <div className="absolute top-full mt-2 bg-[#34495e] shadow-lg rounded-md w-[220px] max-h-[300px] overflow-y-auto z-50">
                {categories.map((cat, i) => (
                  <Link
                    key={i}
                    to={`/category/${cat.toLowerCase().replace(/\s+/g, "")}`}
                    className="block px-4 py-2 text-white hover:bg-[#2c3e50]"
                    onClick={() => setShowCategories(false)}
                  >
                    {cat}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link to="/blog">Blog</Link>
          <Link to="/contact">Contact Us</Link>
        </nav>
      </div>

      <div className="md:hidden ml-auto">
        <button onClick={() => setIsOpen(!isOpen)} className="text-white">
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {isOpen && (
        <div className="absolute top-[80px] left-0 w-full bg-[#283646] flex flex-col items-center gap-6 py-6 md:hidden z-40">
          <Link to="/" className="text-white text-lg" onClick={() => setIsOpen(false)}>Home</Link>
          <Link to="/about" className="text-white text-lg" onClick={() => setIsOpen(false)}>About</Link>

          <div className="w-full flex flex-col items-center">
            <button
              className="flex items-center gap-1 text-white text-lg"
              onClick={() => setMobileCategories(!mobileCategories)}
            >
              Categories <ChevronDown size={18} className={`${mobileCategories ? "rotate-180" : ""}`} />
            </button>

            {mobileCategories && (
              <div className="flex flex-col gap-2 max-h-[250px] overflow-y-auto mt-2 w-full px-4">
                {categories.map((cat, i) => (
                  <Link
                    key={i}
                    to={`/category/${cat.toLowerCase().replace(/\s+/g, "-")}`}
                    className="text-white text-md hover:bg-[#2c3e50] px-2 py-1 rounded"
                    onClick={() => {
                      setIsOpen(false);
                      setMobileCategories(false);
                    }}
                  >
                    {cat}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link to="/blog" className="text-white text-lg" onClick={() => setIsOpen(false)}>Blog</Link>
          <Link to="/contact" className="text-white text-lg" onClick={() => setIsOpen(false)}>Contact Us</Link>
        </div>
      )}
    </header>
  );
};

export default Header;
