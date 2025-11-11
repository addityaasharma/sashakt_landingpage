import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Popup = () => {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setVisible(true), 5000); // show after 5 sec
        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        if (visible) {
            // Set Adsterra config
            window.atOptions = {
                key: "24cfcce803380b677dd0e174b93362b2",
                format: "iframe",
                height: 50,
                width: 320,
                params: {},
            };

            // Create script dynamically
            const script = document.createElement("script");
            script.type = "text/javascript";
            script.src =
                "//www.highperformanceformat.com/24cfcce803380b677dd0e174b93362b2/invoke.js";
            script.async = true;

            const adContainer = document.getElementById("adsterra-container");
            if (adContainer) {
                adContainer.innerHTML = "";
                adContainer.appendChild(script);
            }
        }
    }, [visible]);

    const closePopup = () => setVisible(false);

    return (
        <AnimatePresence>
            {visible && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-[9999]"
                >
                    <motion.div
                        initial={{ scale: 0.8, opacity: 0, y: 20 }}
                        animate={{ scale: 1, opacity: 1, y: 0 }}
                        exit={{ scale: 0.8, opacity: 0, y: 20 }}
                        transition={{ type: "spring", stiffness: 200, damping: 20 }}
                        className="relative w-[90%] max-w-sm p-6 rounded-3xl border border-white/20 
            bg-white/10 backdrop-blur-2xl shadow-2xl text-center text-white"
                    >
                        {/* Glow border effect */}
                        <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-lime-400/40 to-cyan-400/40 blur-xl opacity-20 -z-10"></div>

                        {/* Close button */}
                        <button
                            onClick={closePopup}
                            className="absolute top-3 right-4 text-white/70 hover:text-white transition text-2xl"
                            aria-label="Close Advertisement"
                        >
                            &times;
                        </button>

                        <h2 className="text-xl font-semibold mb-2 text-white">
                            Sponsored Advertisement
                        </h2>
                        <p className="text-sm text-white/70 mb-4">
                            Empower your brand with Sashakt — and our partners!
                        </p>

                        {/* Ad container */}
                        <div
                            id="adsterra-container"
                            className="flex justify-center items-center"
                            style={{ minHeight: "60px" }}
                        ></div>

                        <p className="text-xs text-white/50 mt-3">
                            Advertisement by Adsterra
                        </p>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default Popup;
