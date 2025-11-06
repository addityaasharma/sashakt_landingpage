import React, { useState, useEffect } from "react";
import { BookOpen, Users, Star, X, ShoppingCart, ExternalLink } from "lucide-react";

const PrimaryButton = ({ children, ...props }) => (
  <button
    className="px-7 py-3 rounded-xl font-extrabold text-lg bg-gradient-to-br from-blue-600 to-amber-400 text-white shadow-lg hover:scale-105 transition-all duration-300 w-full sm:w-auto"
    {...props}
  >
    {children}
  </button>
);

// Product Popup Component
const ProductPopup = ({ isOpen, onClose, product }) => {
  if (!isOpen || !product) return null;

  const handleBuyNow = () => {
    window.open(product.shopifyUrl, '_blank');
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50 animate-fadeIn">
      <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl animate-slideUp">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100 transition-colors z-10"
        >
          <X size={24} className="text-gray-600" />
        </button>

        <div className="grid md:grid-cols-2 gap-8 p-8">
          <div className="relative">
            <div className="aspect-square rounded-xl overflow-hidden bg-gray-100 shadow-lg">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
              />
            </div>
            <div className="absolute top-4 left-4 bg-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
              Featured Product
            </div>
          </div>

          <div className="flex flex-col justify-between">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                {product.name}
              </h2>

              <div className="text-4xl font-bold text-purple-600 mb-6">
                {product.price}
              </div>

              <div className="prose prose-lg">
                <p className="text-gray-600 leading-relaxed mb-6">
                  {product.description}
                </p>
              </div>

              <div className="space-y-3 mb-8">
                <div className="flex items-center gap-2 text-gray-700">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span>In Stock</span>
                </div>
                <div className="flex items-center gap-2 text-gray-700">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span>Free Shipping</span>
                </div>
                <div className="flex items-center gap-2 text-gray-700">
                  <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                  <span>30-Day Returns</span>
                </div>
              </div>
            </div>

            <div className="space-y-3">
              <button
                onClick={handleBuyNow}
                className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2"
              >
                <ShoppingCart size={20} />
                Buy Now
                <ExternalLink size={16} />
              </button>

              <button
                onClick={onClose}
                className="w-full bg-gray-100 text-gray-700 py-3 rounded-xl font-semibold hover:bg-gray-200 transition-colors"
              >
                Continue Shopping
              </button>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }

        .animate-slideUp {
          animation: slideUp 0.4s ease-out;
        }
      `}</style>
    </div>
  );
};

const HomePage = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [showProductPopup, setShowProductPopup] = useState(false);
  const [currentProduct, setCurrentProduct] = useState(null);
  const [disablePopup, setDisablePopup] = useState(false);

  const products = [
    {
      id: 1,
      name: "Premium Wireless Headphones",
      price: "$299.99",
      image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&h=500&fit=crop",
      description: "Experience crystal-clear audio with our premium wireless headphones. Features active noise cancellation, 30-hour battery life, and premium comfort padding.",
      shopifyUrl: "https://your-store.myshopify.com/products/wireless-headphones"
    },
    {
      id: 2,
      name: "Smart Watch Pro",
      price: "$399.99",
      image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&h=500&fit=crop",
      description: "Stay connected and track your fitness goals with our advanced smartwatch. Water-resistant design with heart rate monitoring and GPS tracking.",
      shopifyUrl: "https://your-store.myshopify.com/products/smart-watch-pro"
    },
    {
      id: 3,
      name: "Minimalist Backpack",
      price: "$89.99",
      image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500&h=500&fit=crop",
      description: "Sleek and functional backpack perfect for everyday use. Features multiple compartments, laptop sleeve, and water-resistant material.",
      shopifyUrl: "https://your-store.myshopify.com/products/minimalist-backpack"
    },
    {
      id: 4,
      name: "Organic Cotton T-Shirt",
      price: "$34.99",
      image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500&h=500&fit=crop",
      description: "Sustainable and comfortable organic cotton t-shirt. Soft fabric with a perfect fit, available in multiple colors.",
      shopifyUrl: "https://your-store.myshopify.com/products/organic-tshirt"
    },
    {
      id: 5,
      name: "Stainless Steel Water Bottle",
      price: "$29.99",
      image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=500&h=500&fit=crop",
      description: "Keep your drinks cold for 24 hours or hot for 12 hours. Double-wall vacuum insulation with leak-proof cap.",
      shopifyUrl: "https://your-store.myshopify.com/products/water-bottle"
    }
  ];

  useEffect(() => {
    if (disablePopup) return;

    const interval = setInterval(() => {
      const randomProduct = products[Math.floor(Math.random() * products.length)];
      setCurrentProduct(randomProduct);
      setShowProductPopup(true);
    }, 5000);

    return () => clearInterval(interval);
  }, [disablePopup]);

  const closeProductPopup = () => {
    setShowProductPopup(false);
  };

  const disableProductPopup = () => {
    setDisablePopup(true);
    setShowProductPopup(false);
  };

  return (
    <div
      className={`${darkMode ? "bg-gray-900 text-gray-200" : "bg-blue-50 text-gray-900"
        } min-h-screen transition-colors duration-500`}
    >
      <ProductPopup
        isOpen={showProductPopup}
        onClose={closeProductPopup}
        product={currentProduct}
      />

      {/* <div className="fixed top-4 right-4 z-50">
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="px-4 py-2 bg-gradient-to-r from-yellow-400 to-pink-500 text-white rounded-lg shadow-lg hover:scale-110 transform transition"
        >
          Toggle {darkMode ? "Light" : "Dark"}
        </button>
      </div> */}

      <section
        className={`min-h-[75vh] flex flex-col md:flex-row items-center justify-between px-4 sm:px-6 md:px-20 lg:px-40 py-20 ${darkMode
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

      <section className="max-w-7xl mx-auto my-20 px-4 sm:px-6 md:px-20 flex flex-col md:flex-row items-center gap-8 md:gap-12 bg-indigo-50 dark:bg-gray-900 rounded-xl shadow-lg text-gray-900 dark:text-gray-100 p-8 sm:p-12">
        <div className="w-full md:w-1/2">
          <img
            src="https://images.pexels.com/photos/159866/books-book-pages-read-literature-159866.jpeg"
            alt="About us"
            className="rounded-3xl shadow-xl border-4 sm:border-8 border-indigo-200 dark:border-indigo-700"
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

      <section className="max-w-7xl mx-auto my-20 px-4 sm:px-6 md:px-20 text-center">
        <h2 className="text-3xl sm:text-4xl font-extrabold mb-8 text-indigo-700 dark:text-amber-400">
          Get in Touch
        </h2>
        <p className="text-lg mb-6">Contact us for more information about our services and offerings.</p>
        <PrimaryButton>Contact Us</PrimaryButton>
      </section>
    </div>
  );
};

export default HomePage;