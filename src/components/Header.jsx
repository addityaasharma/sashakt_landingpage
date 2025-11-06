import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";

const categories = [
  "Technology",
  "Health",
  "Finance",
  "Travel",
  "Education",
  "Sports",
  "Food",
  "Fashion",
  "Lifestyle",
  "Fitness",
  "Gaming",
  "Business",
  "Marketing",
  "Real Estate",
  "Music",
  "Movies",
  "Books",
  "Science",
  "Politics",
  "History",
  "DIY",
  "Parenting",
  "Spirituality",
  "Self Improvement",
  "Art",
  "Photography",
  "Programming",
  "AI ML",
  "Web Development",
  "Startups",
  "Crypto",
  "Environment",
  "Automobiles",
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showCategories, setShowCategories] = useState(false);
  const [mobileCategories, setMobileCategories] = useState(false);
  const [hideHeader, setHideHeader] = useState(false);

  useEffect(() => {
    let lastScrollY = window.pageYOffset;

    const handleScroll = () => {
      const currentScrollY = window.pageYOffset;

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setHideHeader(true);
      } else {
        setHideHeader(false);
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-transform duration-300 bg-white shadow-sm ${
        hideHeader ? "-translate-y-full" : "translate-y-0"
      }`}
    >
      <div className="max-w-7xl mx-auto h-[80px] px-6 md:px-12 flex items-center justify-between ">
        <Link
          to="/"
          className="text-2xl font-extrabold text-blue-700 hover:opacity-80 transition cursor-pointer"
        >
          Googly<span className="text-amber-400">.</span>com
        </Link>

        <nav className="hidden md:flex items-center gap-10 font-semibold text-gray-800">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `relative px-2 py-1 hover:text-amber-400 transition ${
                isActive ? "text-amber-400 font-bold" : ""
              }`
            }
            end
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              `relative px-2 py-1 hover:text-amber-400 transition ${
                isActive ? "text-amber-400 font-bold" : ""
              }`
            }
          >
            About
          </NavLink>

          <div className="relative group">
            <button
              onClick={() => setShowCategories(!showCategories)}
              className="flex items-center gap-1 px-2 py-1 hover:text-amber-400 transition focus:outline-none"
              aria-haspopup="true"
              aria-expanded={showCategories ? "true" : "false"}
            >
              Categories <ChevronDown size={18} />
            </button>
            <div
              className={`absolute top-full left-0 mt-2 w-48 max-h-64 bg-white rounded-md shadow-lg overflow-y-auto transition-opacity duration-200 ${
                showCategories ? "opacity-100 visible" : "opacity-0 invisible"
              }`}
              onMouseLeave={() => setShowCategories(false)}
            >
              {categories.map((cat, i) => (
                <Link
                  key={i}
                  to={`/category/${cat.toLowerCase().replace(/\s+/g, "-")}`}
                  className="block px-4 py-2 text-gray-800 hover:bg-amber-400 hover:text-white transition"
                  onClick={() => setShowCategories(false)}
                >
                  {cat}
                </Link>
              ))}
            </div>
          </div>

          <NavLink
            to="/blog"
            className={({ isActive }) =>
              `relative px-2 py-1 hover:text-amber-400 transition ${
                isActive ? "text-amber-400 font-bold" : ""
              }`
            }
          >
            Blog
          </NavLink>

          <NavLink
            to="/product"
            className={({ isActive }) =>
              `relative px-2 py-1 hover:text-amber-400 transition ${
                isActive ? "text-amber-400 font-bold" : ""
              }`
            }
          >
            Products
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `relative px-2 py-1 hover:text-amber-400 transition ${
                isActive ? "text-amber-400 font-bold" : ""
              }`
            }
          >
            Contact Us
          </NavLink>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 rounded-full text-gray-800 hover:bg-gray-200 transition focus:outline-none"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <nav className="md:hidden bg-white shadow-lg py-6 z-40">
          <div className="flex flex-col gap-5 px-6 font-semibold text-gray-800">
            <Link
              to="/"
              onClick={() => setIsOpen(false)}
              className="hover:text-amber-400 transition"
            >
              Home
            </Link>
            <Link
              to="/about"
              onClick={() => setIsOpen(false)}
              className="hover:text-amber-400 transition"
            >
              About
            </Link>

            {/* Mobile Categories Collapse */}
            <div className="flex flex-col">
              <button
                onClick={() => setMobileCategories(!mobileCategories)}
                className="flex items-center justify-between hover:text-amber-400 transition focus:outline-none"
                aria-expanded={mobileCategories ? "true" : "false"}
              >
                Categories{" "}
                <ChevronDown
                  className={`${
                    mobileCategories ? "rotate-180" : "rotate-0"
                  } transition-transform`}
                />
              </button>
              {mobileCategories && (
                <div className="mt-2 flex flex-col gap-2 max-h-64 overflow-auto pl-4 border-l border-gray-300">
                  {categories.map((cat, i) => (
                    <Link
                      key={i}
                      to={`/category/${cat.toLowerCase().replace(/\s+/g, "-")}`}
                      onClick={() => {
                        setIsOpen(false);
                        setMobileCategories(false);
                      }}
                      className="hover:text-amber-400 transition"
                    >
                      {cat}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              to="/blog"
              onClick={() => setIsOpen(false)}
              className="hover:text-amber-400 transition"
            >
              Blog
            </Link>
            <Link
              to="/contact"
              onClick={() => setIsOpen(false)}
              className="hover:text-amber-400 transition"
            >
              Contact Us
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;
