import React, { useState, useEffect } from 'react';
import { X, ShoppingCart, ExternalLink } from 'lucide-react';

const ProductPage1 = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [currentProduct, setCurrentProduct] = useState(null);

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
        if (isOpen && !currentProduct) {
            const randomProduct = products[Math.floor(Math.random() * products.length)];
            setCurrentProduct(randomProduct);
        }
    }, [isOpen]);

    const openPopup = () => {
        const randomProduct = products[Math.floor(Math.random() * products.length)];
        setCurrentProduct(randomProduct);
        setIsOpen(true);
    };

    const closePopup = () => setIsOpen(false);

    const handleBuyNow = () => {
        if (currentProduct) {
            window.open(currentProduct.shopifyUrl, '_blank');
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50 flex items-center justify-center p-4">
            {/* Trigger Button */}
            <button
                onClick={openPopup}
                className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-3 rounded-full font-semibold text-base sm:text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center gap-2"
            >
                <ShoppingCart size={20} />
                View Product
            </button>

            {/* Popup Modal */}
            {isOpen && currentProduct && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-2 sm:p-4 z-50 animate-fadeIn">
                    <div className="relative bg-white rounded-xl sm:rounded-2xl w-full max-w-md sm:max-w-3xl max-h-[90vh] overflow-y-auto shadow-2xl animate-slideUp">
                        {/* Close Button */}
                        <button
                            onClick={closePopup}
                            className="absolute top-3 right-3 bg-white rounded-full p-1.5 sm:p-2 shadow-md hover:bg-gray-100 transition-colors z-10"
                        >
                            <X size={20} className="text-gray-600" />
                        </button>

                        <div className="grid sm:grid-cols-2 gap-4 sm:gap-8 p-4 sm:p-8">
                            {/* Product Image */}
                            <div className="relative">
                                <div className="aspect-square rounded-lg sm:rounded-xl overflow-hidden bg-gray-100 shadow-md sm:shadow-lg">
                                    <img
                                        src={currentProduct.image}
                                        alt={currentProduct.name}
                                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                                    />
                                </div>
                                <div className="absolute top-3 left-3 bg-purple-600 text-white px-3 py-1 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-semibold shadow-lg">
                                    Featured
                                </div>
                            </div>

                            {/* Product Details */}
                            <div className="flex flex-col justify-between">
                                <div>
                                    <h2 className="text-xl sm:text-3xl font-bold text-gray-900 mb-2 sm:mb-4">
                                        {currentProduct.name}
                                    </h2>

                                    <div className="text-2xl sm:text-4xl font-bold text-purple-600 mb-4 sm:mb-6">
                                        {currentProduct.price}
                                    </div>

                                    <p className="text-gray-600 leading-relaxed text-sm sm:text-base mb-4 sm:mb-6">
                                        {currentProduct.description}
                                    </p>

                                    <div className="space-y-2 sm:space-y-3 mb-6">
                                        <div className="flex items-center gap-2 text-gray-700 text-sm sm:text-base">
                                            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                                            <span>In Stock</span>
                                        </div>
                                        <div className="flex items-center gap-2 text-gray-700 text-sm sm:text-base">
                                            <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                                            <span>Free Shipping</span>
                                        </div>
                                        <div className="flex items-center gap-2 text-gray-700 text-sm sm:text-base">
                                            <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                                            <span>30-Day Returns</span>
                                        </div>
                                    </div>
                                </div>

                                {/* Buttons */}
                                <div className="space-y-2 sm:space-y-3">
                                    <button
                                        onClick={handleBuyNow}
                                        className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white py-3 sm:py-4 rounded-lg sm:rounded-xl font-semibold text-base sm:text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2"
                                    >
                                        <ShoppingCart size={18} />
                                        Buy Now
                                        <ExternalLink size={14} />
                                    </button>

                                    <button
                                        onClick={closePopup}
                                        className="w-full bg-gray-100 text-gray-700 py-2.5 sm:py-3 rounded-lg sm:rounded-xl font-semibold text-sm sm:text-base hover:bg-gray-200 transition-colors"
                                    >
                                        Continue Shopping
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}

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

export default ProductPage1;