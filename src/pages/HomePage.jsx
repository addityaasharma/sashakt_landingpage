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
import HeroSection from "../components/HeroSection";
import ShoppingSection from "../components/ShoppingSection";
import BlogCarousel from "../components/BlogCarousel";

const Button = ({ children, onClick, className = "" }) => (
  <button
    onClick={onClick}
    className={`px-6 py-3 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition w-full sm:w-auto ${className}`}
  >
    {children}
  </button>
);

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
      <HeroSection />
      <section className="max-w-3xl mx-auto text-center mt-28 px-6">
        <h2 className="text-5xl font-semibold mb-8 tracking-tight text-gray-900">
          Why You’ll Love Shopping With Us
        </h2>
        <p className="text-gray-500 text-lg leading-relaxed">
          Discover products that bring beauty, purpose, and craftsmanship into your life.
          Every piece is handpicked to inspire mindful living — where quality meets simplicity.
        </p>
      </section>


      <ShoppingSection />

      <section className="bg-gray-50 py-24 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <img
              src="https://images.pexels.com/photos/7805671/pexels-photo-7805671.jpeg"
              alt="About Us"
              className="rounded-3xl shadow-lg object-cover w-full h-[450px]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-white/40 to-transparent rounded-3xl"></div>
          </div>

          <div className="text-center md:text-left">
            <h2 className="text-4xl font-semibold mb-6 tracking-tight text-gray-900">
              About <span className="text-indigo-600">Googlyy</span>
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              Googlyy isn’t just a shopping destination — it’s a movement to empower
              creativity, sustainability, and community. Every product we feature is
              thoughtfully selected, supporting small creators, local artisans, and
              eco-conscious innovation.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              Our mission is simple — to make quality, design, and purpose accessible
              to everyone. Whether it’s a plant combo for your home or a handmade
              accessory, we aim to inspire mindful living through every purchase.
            </p>

            <button className="px-8 py-3 bg-indigo-600 text-white rounded-xl font-medium hover:bg-indigo-700 transition shadow-md">
              Learn More
            </button>
          </div>
        </div>
      </section>

      <BlogCarousel />

      <section className="bg-gray-50 py-24 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-semibold mb-6 text-gray-900">
            What Our Customers Say
          </h2>
          <p className="text-gray-600 text-lg mb-16 max-w-2xl mx-auto">
            Real stories from happy customers who love shopping with{" "}
            <span className="font-semibold text-indigo-600">Sashakt</span>.
          </p>

          <div className="flex overflow-x-auto gap-6 pb-6 scrollbar-none snap-x snap-mandatory">
            {[
              {
                name: "Ananya Patel",
                role: "Home Decor Enthusiast",
                text: "Absolutely loved the quality of the seed and plant combo I ordered. The packaging was eco-friendly and thoughtful!",
                img: "https://randomuser.me/api/portraits/women/79.jpg",
              },
              {
                name: "Rohit Sharma",
                role: "Tech Professional",
                text: "I ordered some lifestyle items — all products were exactly as shown and delivery was super fast.",
                img: "https://randomuser.me/api/portraits/men/65.jpg",
              },
              {
                name: "Neha Verma",
                role: "Creative Artist",
                text: "The jewelry and accessories collection is just stunning. It feels premium yet affordable!",
                img: "https://randomuser.me/api/portraits/women/68.jpg",
              },
              {
                name: "Aman Mehra",
                role: "Plant Lover",
                text: "Sashakt is my go-to for unique finds and eco-conscious products. The curation is simply beautiful!",
                img: "https://randomuser.me/api/portraits/men/74.jpg",
              },
            ].map((testimonial, i) => (
              <div
                key={i}
                className="flex-none w-80 bg-white border border-gray-200 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 p-6 snap-start"
              >
                <div className="flex items-center mb-4">
                  <img
                    src={testimonial.img}
                    alt={testimonial.name}
                    className="w-14 h-14 rounded-full object-cover mr-4"
                  />
                  <div className="text-left">
                    <h3 className="font-semibold text-gray-900">{testimonial.name}</h3>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">
                  “{testimonial.text}”
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Hide scrollbar */}
        <style jsx="true">{`
    .scrollbar-none::-webkit-scrollbar {
      display: none;
    }
    .scrollbar-none {
      -ms-overflow-style: none;
      scrollbar-width: none;
    }
  `}</style>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-white px-6 border-t border-gray-100">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-semibold text-center mb-6 text-gray-900">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Everything you need to know before you shop with{" "}
            <span className="font-semibold text-indigo-600">Sashakt</span>.
          </p>

          <div className="space-y-6">
            {[
              {
                q: "How long does delivery take?",
                a: "Most orders are delivered within 4–7 business days depending on your location. You’ll receive tracking updates once your order ships.",
              },
              {
                q: "Do you offer returns or exchanges?",
                a: "Yes, we offer easy 7-day returns for most products. Items must be unused and in original packaging.",
              },
              {
                q: "Are your products eco-friendly?",
                a: "Absolutely! We focus on sustainability by curating eco-conscious, handmade, and locally sourced products.",
              },
              {
                q: "Can I join your WhatsApp shopping groups?",
                a: "Yes! Each category in our shopping section includes a direct link to join relevant WhatsApp groups.",
              },
              {
                q: "Do you ship internationally?",
                a: "Currently, we ship only within India, but we’re expanding soon!",
              },
            ].map((faq, i) => (
              <details
                key={i}
                className="group border border-gray-200 rounded-2xl p-6 hover:shadow-sm transition"
              >
                <summary className="flex justify-between items-center cursor-pointer text-lg font-medium text-gray-900">
                  {faq.q}
                  <span className="text-indigo-600 transition-transform group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="text-gray-600 mt-3 leading-relaxed">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <ProductPopup
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
      />
    </div>
  );
};

export default HomePage;
