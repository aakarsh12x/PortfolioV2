"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Sun, Moon } from "lucide-react";
import { useTheme } from "./ThemeProvider";

export const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const { theme, toggle } = useTheme();

    const menuVariants = {
        closed: {
            opacity: 0,
            y: "-100%",
            transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as any }
        },
        open: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as any }
        }
    };

    const linkVariants = {
        closed: { y: 20, opacity: 0 },
        open: (i: number) => ({
            y: 0,
            opacity: 1,
            transition: { delay: 0.3 + (i * 0.1), duration: 0.4, ease: "easeOut" as any }
        })
    };

    return (
        <motion.nav
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl border-b"
            style={{ backgroundColor: "color-mix(in srgb, var(--bg-primary) 90%, transparent)", borderColor: "var(--border-subtle)" }}
        >
            <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-32 py-6 flex justify-between items-center relative z-50">
                <span className="text-xl font-black relative z-50">
                    <span style={{ color: "var(--accent)" }}>A</span>S<span style={{ color: "var(--accent)" }}>.</span>
                </span>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-10">
                    {["Experience", "Projects", "Skills", "Contact"].map((item) => (
                        <a key={item} href={`#${item.toLowerCase()}`}
                            className="text-xs tracking-[0.2em] uppercase transition-colors lg:cursor-none"
                            style={{ color: "var(--text-muted)" }}
                            onMouseEnter={e => (e.currentTarget.style.color = "var(--text-primary)")}
                            onMouseLeave={e => (e.currentTarget.style.color = "var(--text-muted)")}
                        >
                            {item}
                        </a>
                    ))}

                    {/* Theme Toggle */}
                    <button
                        onClick={toggle}
                        aria-label="Toggle theme"
                        className="w-8 h-8 flex items-center justify-center rounded-full border transition-all lg:cursor-none hover:scale-110"
                        style={{ borderColor: "var(--border)", color: "var(--text-muted)", backgroundColor: "var(--surface-2)" }}
                    >
                        {theme === "dark"
                            ? <Sun className="w-3.5 h-3.5" />
                            : <Moon className="w-3.5 h-3.5" />
                        }
                    </button>
                </div>

                {/* Mobile right side */}
                <div className="md:hidden flex items-center gap-3 relative z-50">
                    <button
                        onClick={toggle}
                        aria-label="Toggle theme"
                        className="w-8 h-8 flex items-center justify-center rounded-full border transition-all"
                        style={{ borderColor: "var(--border)", color: "var(--text-muted)", backgroundColor: "var(--surface-2)" }}
                    >
                        {theme === "dark" ? <Sun className="w-3.5 h-3.5" /> : <Moon className="w-3.5 h-3.5" />}
                    </button>
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="p-2 -mr-2 lg:cursor-none"
                        style={{ color: "var(--text-primary)" }}
                        aria-label="Toggle menu"
                    >
                        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </div>
            </div>

            {/* Mobile Fullscreen Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial="closed"
                        animate="open"
                        exit="closed"
                        variants={menuVariants}
                        className="fixed inset-0 backdrop-blur-3xl flex flex-col justify-center items-center z-[60] md:hidden"
                        style={{ backgroundColor: "color-mix(in srgb, var(--bg-primary) 96%, transparent)", height: "100dvh" }}
                    >
                        <div className="absolute top-6 right-6">
                            <button onClick={() => setIsOpen(false)} className="p-2" style={{ color: "var(--text-primary)" }}>
                                <X className="w-8 h-8" />
                            </button>
                        </div>

                        <div className="flex flex-col gap-8 text-center">
                            {["Experience", "Projects", "Skills", "Contact"].map((item, i) => (
                                <motion.div key={item} custom={i} variants={linkVariants}>
                                    <a
                                        href={`#${item.toLowerCase()}`}
                                        onClick={() => setIsOpen(false)}
                                        className="text-5xl font-black tracking-tighter block py-2 transition-colors"
                                        style={{ color: "var(--text-primary)" }}
                                        onMouseEnter={e => (e.currentTarget.style.color = "var(--accent)")}
                                        onMouseLeave={e => (e.currentTarget.style.color = "var(--text-primary)")}
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
