"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

export const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const menuVariants = {
        closed: {
            opacity: 0,
            y: "-100%",
            transition: {
                duration: 0.5,
                ease: [0.22, 1, 0.36, 1] as any
            }
        },
        open: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
                ease: [0.22, 1, 0.36, 1] as any
            }
        }
    };

    const linkVariants = {
        closed: { y: 20, opacity: 0 },
        open: (i: number) => ({
            y: 0,
            opacity: 1,
            transition: {
                delay: 0.3 + (i * 0.1),
                duration: 0.4,
                ease: "easeOut" as any
            }
        })
    };

    return (
        <motion.nav
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-xl border-b border-white/5"
        >
            <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-32 py-6 flex justify-between items-center relative z-50 bg-black/90 md:bg-transparent">
                <span className="text-xl font-black relative z-50">
                    <span className="text-[#ff4d00]">A</span>S<span className="text-[#ff4d00]">.</span>
                </span>

                {/* Desktop Menu */}
                <div className="hidden md:flex gap-12">
                    {["Experience", "Projects", "Skills", "Contact"].map((item) => (
                        <a key={item} href={`#${item.toLowerCase()}`} className="text-xs text-white/40 hover:text-white transition-colors tracking-[0.2em] uppercase cursor-none">
                            {item}
                        </a>
                    ))}
                </div>

                {/* Mobile Hamburger */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="md:hidden text-white relative z-50 p-2 -mr-2 cursor-none"
                    aria-label="Toggle menu"
                >
                    {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>
            </div>

            {/* Mobile Fullscreen Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial="closed"
                        animate="open"
                        exit="closed"
                        variants={menuVariants}
                        className="fixed inset-0 bg-black/95 backdrop-blur-3xl flex flex-col justify-center items-center z-[60] md:hidden"
                        style={{ height: '100dvh' }}
                    >
                        <div className="absolute top-6 right-6 lg:right-32 px-6">
                            <button
                                onClick={() => setIsOpen(false)}
                                className="text-white p-2"
                            >
                                <X className="w-8 h-8" />
                            </button>
                        </div>

                        <div className="flex flex-col gap-8 text-center">
                            {["Experience", "Projects", "Skills", "Contact"].map((item, i) => (
                                <motion.div
                                    key={item}
                                    custom={i}
                                    variants={linkVariants}
                                >
                                    <a
                                        href={`#${item.toLowerCase()}`}
                                        onClick={() => setIsOpen(false)}
                                        className="text-5xl font-black text-white hover:text-[#ff4d00] transition-colors tracking-tighter block py-2"
                                    >
                                        {item}
                                    </a>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
};
