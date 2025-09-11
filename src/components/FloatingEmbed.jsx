import React from "react";
import { motion } from "framer-motion";
import floatingbutton from "../assets/floatingbutton.png";

const FloatingEmbed = () => {
    return (
        <>
            <motion.a
                href="https://t.me/+4aszd823mslmMjBl"
                target="_blank"
                rel="noopener noreferrer"
                className="fixed bottom-[120px] right-[40px] p-0 rounded-full shadow-lg z-50"
                animate={{ y: [0, -8, 0] }}
                transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
            >
                <img
                    src={floatingbutton}
                    alt="Floating Button"
                    className="w-24 h-24 object-contain"
                />
            </motion.a>
        </>
    );
};

export default FloatingEmbed;