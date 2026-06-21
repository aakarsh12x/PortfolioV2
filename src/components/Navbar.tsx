"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "./ThemeProvider";
import { useSafeReducedMotion } from "@/hooks/useSafeReducedMotion";
import { ArrowUpRight, X } from "lucide-react";

const EASE = [0.22, 1, 0.36, 1] as const;

const NAV_LINKS = [
    { label: "Experience", href: "#experience" },
    { label: "Projects",   href: "#projects"   },
    { label: "Skills",     href: "#skills"      },
    { label: "Contact",    href: "#contact"     },
];

export const Navbar = () => {
    const [scrolled,  setScrolled]  = useState(false);
    const [progress,  setProgress]  = useState(0);
    const [isOpen,    setIsOpen]    = useState(false);
    const { theme, toggle }         = useTheme();
    const reduceMotion              = useSafeReducedMotion();

    useEffect(() => {
        const onScroll = () => {
            const y = window.scrollY;
            setScrolled(y > 32);
            const max = document.documentElement.scrollHeight - window.innerHeight;
            setProgress(max > 0 ? Math.min((y / max) * 100, 100) : 0);
        };
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    useEffect(() => {
        document.body.style.overflow = isOpen ? "hidden" : "";
        return () => { document.body.style.overflow = ""; };
    }, [isOpen]);

    const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        e.preventDefault();
        const id = href.replace("#", "");
        const element = document.getElementById(id);
        if (element) {
            const offset = 64; // Height of fixed navbar
            const bodyRect = document.body.getBoundingClientRect().top;
            const elementRect = element.getBoundingClientRect().top;
            const elementPosition = elementRect - bodyRect;
            const offsetPosition = elementPosition - offset;

            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth"
            });
            
            // Update URL hash without standard jump
            window.history.pushState(null, "", href);
        }
    };

    return (
        <>
            <motion.header
                className={`nav-bar${scrolled ? " nav-bar--scrolled" : ""}`}
                initial={reduceMotion ? false : { y: -80, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.75, ease: EASE }}
                role="banner"
            >
                {/* Wordmark */}
                <a href="#home" className="nav-wordmark" aria-label="Aakarsh Singh — home">
                    <span className="nav-wordmark__mark">
                        AS<span aria-hidden="true">.</span>
                    </span>
                    <span className="nav-wordmark__badge" aria-hidden="true">
                        <span className="nav-wordmark__dot" />
                        Open
                    </span>
                </a>

                {/* Desktop links — rolling text */}
                <nav className="nav-links" aria-label="Primary navigation">
                    {NAV_LINKS.map(({ label, href }) => (
                        <a
                            key={href}
                            href={href}
                            className="nav-link"
                            aria-label={label}
                            onClick={(e) => handleScroll(e, href)}
                        >
                            <span className="nav-link__roll" aria-hidden="true">
                                <span>{label}</span>
                                <span>{label}</span>
                            </span>
                        </a>
                    ))}
                </nav>

                {/* Right cluster */}
                <div className="nav-actions">
                    {/* CTA — slide-fill pill */}
                    <a
                        href="#contact"
                        className="nav-cta"
                        aria-label="Let's talk"
                        onClick={(e) => handleScroll(e, "#contact")}
                    >
                        <span aria-hidden="true">Let&apos;s talk</span>
                        <span className="nav-cta__arrow" aria-hidden="true">
                            <ArrowUpRight className="w-3 h-3" />
                        </span>
                    </a>

                    {/* Theme toggle switch */}
                    <button
                        onClick={toggle}
                        className={`nav-toggle${theme === "light" ? " nav-toggle--light" : ""}`}
                        aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
                        aria-pressed={theme === "light"}
                    >
                        <span className="nav-toggle__thumb" />
                    </button>

                    {/* Mobile hamburger */}
                    <button
                        className="nav-burger"
                        onClick={() => setIsOpen(true)}
                        aria-label="Open navigation menu"
                        aria-expanded={isOpen}
                    >
                        <span /><span /><span />
                    </button>
                </div>

                {/* Scroll progress bar */}
                <div
                    className="nav-progress"
                    style={{ width: `${progress}%` }}
                    role="progressbar"
                    aria-valuenow={Math.round(progress)}
                    aria-valuemin={0}
                    aria-valuemax={100}
                    aria-label="Page scroll progress"
                />
            </motion.header>

            {/* Mobile overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        className="nav-overlay"
                        initial={reduceMotion ? { opacity: 1 } : { opacity: 0, clipPath: "inset(0 0 100% 0)" }}
                        animate={{ opacity: 1, clipPath: "inset(0 0 0% 0)" }}
                        exit={reduceMotion ? { opacity: 0 } : { opacity: 0, clipPath: "inset(0 0 100% 0)" }}
                        transition={{ duration: 0.55, ease: EASE }}
                        role="dialog"
                        aria-modal="true"
                        aria-label="Navigation menu"
                    >
                        <button
                            className="nav-overlay__close"
                            onClick={() => setIsOpen(false)}
                            aria-label="Close navigation menu"
                        >
                            <X className="w-4 h-4" aria-hidden="true" />
                        </button>

                        <span className="nav-overlay__wordmark" aria-hidden="true">
                            AS<span>.</span>
                        </span>

                        <nav className="nav-overlay__links" aria-label="Mobile navigation">
                            {NAV_LINKS.map(({ label, href }, i) => (
                                <motion.div
                                    key={href}
                                    className="nav-overlay__item"
                                    initial={reduceMotion ? false : { opacity: 0, x: -40 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.45, delay: 0.15 + i * 0.07, ease: EASE }}
                                >
                                    <a
                                        href={href}
                                        className="nav-overlay__link"
                                        onClick={(e) => {
                                            setIsOpen(false);
                                            handleScroll(e, href);
                                        }}
                                    >
                                        <span className="nav-overlay__num" aria-hidden="true">
                                            {String(i + 1).padStart(2, "0")}
                                        </span>
                                        {label}
                                    </a>
                                </motion.div>
                            ))}
                        </nav>

                        <div className="nav-overlay__footer">
                            <a href="mailto:singhaakarsh28@gmail.com" className="nav-overlay__email">
                                singhaakarsh28@gmail.com
                            </a>
                            <button onClick={toggle} className="nav-overlay__theme"
                                aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}>
                                {theme === "dark" ? "Light mode" : "Dark mode"}
                            </button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};
