import React, { useState } from "react";
import {
  ArrowRight,
  BookOpen,
  Users,
  Star,
  ShoppingCart,
  X,
} from "lucide-react";
import ProductPage1 from "../components/ProductPage1";
import BlogPage from "./BlogPage";

// ---------- Reusable Button ----------
const Button = ({ children, onClick, className = "" }) => (
  <button
    onClick={onClick}
    className={`px-6 py-3 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition w-full sm:w-auto ${className}`}
  >
    {children}
  </button>
);

// ---------- Product Popup ----------
const ProductPopup = ({ product, onClose }) => {
  if (!product) return null;
  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center p-4 z-50 animate-fadeIn">
      <div className="bg-white rounded-2xl shadow-2xl max-w-3xl w-full overflow-hidden relative animate-slideUp">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 bg-gray-100 p-2 rounded-full hover:bg-gray-200 transition"
        >
          <X size={20} />
        </button>

        <div className="grid md:grid-cols-2">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-80 object-cover"
          />
          <div className="p-6 flex flex-col justify-between">
            <div>
              <h2 className="text-2xl font-bold mb-2">{product.name}</h2>
              <p className="text-gray-600 mb-4">{product.description}</p>
              <p className="text-indigo-600 font-bold text-xl mb-6">
                {product.price}
              </p>
            </div>
            <Button onClick={() => window.open(product.shopifyUrl, "_blank")}>
              <ShoppingCart className="inline-block mr-2 w-5 h-5" />
              Buy Now
            </Button>
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
            transform: translateY(20px);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.25s ease-out;
        }
        .animate-slideUp {
          animation: slideUp 0.35s ease-out;
        }
      `}</style>
    </div>
  );
};

// ---------- MAIN HOMEPAGE ----------
const HomePage = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const features = [
    {
      icon: <BookOpen className="w-8 h-8 text-indigo-600" />,
      title: "Quality Learning",
      text: "Access curated knowledge and insights from trusted sources.",
    },
    {
      icon: <Users className="w-8 h-8 text-indigo-600" />,
      title: "Community Growth",
      text: "Join an inspiring network of thinkers and creators.",
    },
    {
      icon: <Star className="w-8 h-8 text-indigo-600" />,
      title: "Continuous Excellence",
      text: "Grow with consistency through our learning ecosystem.",
    },
  ];

  return (
    <div className="bg-white text-gray-900 min-h-screen overflow-x-hidden my-10">
      {/* ---------- HERO SECTION ---------- */}
      <section className="flex flex-col md:flex-row items-center justify-between px-8 md:px-16 py-24 bg-gradient-to-r from-indigo-50 via-white to-indigo-100 rounded-b-3xl">
        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="text-5xl md:text-6xl font-black leading-tight mb-6">
            Learn. Grow. Create. 🚀
          </h1>
          <p className="text-gray-600 mb-8 text-lg max-w-md mx-auto md:mx-0">
            Welcome to <strong>Googly</strong> — a space where innovation meets
            learning. Discover tools, products, and stories that move the world
            forward.
          </p>
          <Button>
            Get Started <ArrowRight className="inline-block ml-2 w-5 h-5" />
          </Button>
        </div>
        <div className="md:w-1/2 mt-10 md:mt-0 flex justify-center">
          <img
            src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=900"
            alt="Creative Learning"
            className="rounded-3xl shadow-2xl w-full max-w-lg object-cover"
          />
        </div>
      </section>

      {/* ---------- PRODUCT PAGE ---------- */}
      <section className="px-6 md:px-12 py-20">
        <ProductPage1 setSelectedProduct={setSelectedProduct} />
      </section>

      {/* ---------- FEATURES ---------- */}
      <section className="max-w-6xl mx-auto grid sm:grid-cols-2 md:grid-cols-3 gap-6 px-6 md:px-12 py-16">
        {features.map((f, i) => (
          <div
            key={i}
            className="border border-gray-200 rounded-2xl p-8 text-center hover:shadow-md transition transform hover:-translate-y-1"
          >
            <div className="flex justify-center mb-4">{f.icon}</div>
            <h3 className="font-semibold text-xl mb-2">{f.title}</h3>
            <p className="text-gray-600 text-sm">{f.text}</p>
          </div>
        ))}
      </section>

      {/* ---------- BLOG SECTION ---------- */}
      <div className="bg-gray-50 py-20">
        <div className="max-w-6xl mx-auto px-6 md:px-12 text-center mb-12">
          <h2 className="text-3xl font-bold mb-2">From Our Blog</h2>
          <p className="text-gray-600">
            Stay inspired with the latest stories and insights.
          </p>
        </div>
        <BlogPage />
      </div>

      {/* ---------- TESTIMONIALS ---------- */}
      <section className="max-w-6xl mx-auto py-20 px-6 md:px-12 text-center">
        <h2 className="text-3xl font-bold mb-8">What Our Users Say 💬</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
          {[
            {
              name: "Ananya Patel",
              quote:
                "Googly transformed how I learn — it’s visual, fast, and inspiring.",
            },
            {
              name: "Rahul Mehta",
              quote:
                "A truly refreshing experience — minimal yet powerful content delivery.",
            },
            {
              name: "Sofia Khan",
              quote:
                "I found my creative rhythm again thanks to Googly’s amazing content!",
            },
          ].map((t, i) => (
            <div
              key={i}
              className="p-6 bg-white rounded-2xl shadow-sm border border-gray-200"
            >
              <p className="text-gray-700 italic mb-4">“{t.quote}”</p>
              <h4 className="font-semibold text-indigo-600">{t.name}</h4>
            </div>
          ))}
        </div>
      </section>

      {/* ---------- SUBSCRIBE SECTION ---------- */}
      <section className="bg-indigo-600 text-white text-center py-16 px-6 md:px-12 rounded-t-3xl">
        <h2 className="text-3xl font-bold mb-4">Join Our Community</h2>
        <p className="mb-6 text-indigo-100">
          Subscribe for the latest updates, ideas, and curated learning content.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4 max-w-md mx-auto">
          <input
            type="email"
            placeholder="Enter your email"
            className="p-3 rounded-xl text-gray-800 w-full"
          />
          <Button className="bg-amber-400 text-black hover:bg-amber-500">
            Subscribe
          </Button>
        </div>
      </section>

      {/* ---------- PRODUCT POPUP ---------- */}
      <ProductPopup
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
      />
    </div>
  );
};

export default HomePage;
