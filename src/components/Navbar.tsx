"use client";

import React from "react";
import { motion } from "framer-motion";

export const Navbar = () => {
    return (
        <motion.nav
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-xl"
        >
            <div className="max-w-7xl mx-auto px-16 lg:px-32 py-6 flex justify-between items-center">
                <span className="text-xl font-black">
                    <span className="text-[#ff4d00]">A</span>S<span className="text-[#ff4d00]">.</span>
                </span>
                <div className="flex gap-12">
                    {["Experience", "Projects", "Contact"].map((item) => (
                        <a key={item} href={`#${item.toLowerCase()}`} className="text-xs text-white/40 hover:text-white transition-colors tracking-[0.2em] uppercase cursor-none">
                            {item}
                        </a>
                    ))}
                </div>
            </div>
        </motion.nav>
    );
};
