"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "./ThemeProvider";
import { useSafeReducedMotion } from "@/hooks/useSafeReducedMotion";
import { ArrowUpRight, Sun, Moon, Copy, Check } from "lucide-react";

const EASE = [0.22, 1, 0.36, 1] as const;

const NAV_ITEMS = [
    { label: "Experience", href: "#experience", num: "01" },
    { label: "Projects",   href: "#projects",   num: "02" },
    { label: "Skills",     href: "#skills",     num: "03" },
    { label: "Contact",    href: "#contact",    num: "04" },
];

export const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [activeSection, setActiveSection] = useState<string>("experience");
    const [hoveredNav, setHoveredNav] = useState<string | null>(null);
    const [copied, setCopied] = useState(false);

    const { theme, toggle } = useTheme();
    const reduceMotion = useSafeReducedMotion();

    // Scroll listener for floating island condensation
    useEffect(() => {
        const onScroll = () => {
            setScrolled(window.scrollY > 28);
        };
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    // Prevent background scrolling when mobile menu is active
    useEffect(() => {
        document.body.style.overflow = isOpen ? "hidden" : "";
        return () => {
            document.body.style.overflow = "";
        };
    }, [isOpen]);

    // Active section Scroll Spy with IntersectionObserver
    useEffect(() => {
        const sectionIds = ["experience", "projects", "skills", "contact"];
        const observers: IntersectionObserver[] = [];

        sectionIds.forEach((id) => {
            const el = document.getElementById(id);
            if (!el) return;

            const observer = new IntersectionObserver(
                (entries) => {
                    entries.forEach((entry) => {
                        if (entry.isIntersecting) {
                            setActiveSection(id);
                        }
                    });
                },
                { rootMargin: "-25% 0px -45% 0px", threshold: 0 }
            );

            observer.observe(el);
            observers.push(observer);
        });

        return () => {
            observers.forEach((obs) => obs.disconnect());
        };
    }, []);

    const handleScroll = useCallback((e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        e.preventDefault();
        const id = href.replace("#", "");
        const element = document.getElementById(id);

        if (element) {
            const offset = 88; // Height + spacing of floating island navbar
            const bodyRect = document.body.getBoundingClientRect().top;
            const elementRect = element.getBoundingClientRect().top;
            const elementPosition = elementRect - bodyRect;
            const offsetPosition = elementPosition - offset;

            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth"
            });

            window.history.pushState(null, "", href);
        }
    }, []);

    const handleCopyEmail = (e: React.MouseEvent) => {
        e.preventDefault();
        navigator.clipboard.writeText("singhaakarsh28@gmail.com");
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    const currentPill = hoveredNav || activeSection;

    return (
        <>
            {/* Top Island Navbar Shell */}
            <motion.header
                className={`nav-island-wrapper ${scrolled ? "nav-island-wrapper--scrolled" : ""}`}
                initial={reduceMotion ? false : { y: -50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.65, ease: EASE }}
                role="banner"
            >
                <div className="nav-island">
                    {/* Wordmark (Keep AS.) */}
                    <a
                        href="#home"
                        className="nav-wordmark"
                        aria-label="Aakarsh Singh — home"
                        onClick={(e) => {
                            if (window.scrollY > 0) {
                                e.preventDefault();
                                window.scrollTo({ top: 0, behavior: "smooth" });
                                window.history.pushState(null, "", "#home");
                            }
                        }}
                    >
                        <span className="nav-wordmark__mark">
                            AS<span className="nav-wordmark__dot-mark">.</span>
                        </span>
                    </a>

                    {/* Desktop Navigation Links with Magnetic Floating Pill */}
                    <nav
                        className="nav-island__links"
                        aria-label="Primary navigation"
                        onMouseLeave={() => setHoveredNav(null)}
                    >
                        {NAV_ITEMS.map(({ label, href }) => {
                            const sectionId = href.replace("#", "");
                            const isCurrent = currentPill === sectionId;
                            const isActive = activeSection === sectionId;

                            return (
                                <a
                                    key={href}
                                    href={href}
                                    className={`nav-island__link ${isActive ? "is-active" : ""}`}
                                    onClick={(e) => handleScroll(e, href)}
                                    onMouseEnter={() => setHoveredNav(sectionId)}
                                    aria-current={isActive ? "page" : undefined}
                                >
                                    {/* Liquid Floating Pill */}
                                    {isCurrent && (
                                        <motion.span
                                            layoutId="nav-island-pill"
                                            className="nav-island__pill"
                                            transition={{
                                                type: "spring",
                                                stiffness: 420,
                                                damping: 32,
                                            }}
                                            aria-hidden="true"
                                        />
                                    )}
                                    <span className="nav-island__link-label">{label}</span>
                                </a>
                            );
                        })}
                    </nav>

                    {/* Right Tactical Cluster */}
                    <div className="nav-island__actions">
                        {/* Theme Switcher Micro-Toggle */}
                        <button
                            onClick={toggle}
                            className="nav-island__theme-toggle"
                            aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
                            aria-pressed={theme === "light"}
                            type="button"
                        >
                            <motion.div
                                className="nav-island__theme-icon-wrap"
                                initial={false}
                                animate={{ rotate: theme === "light" ? 180 : 0 }}
                                transition={{ duration: 0.45, ease: EASE }}
                            >
                                {theme === "light" ? (
                                    <Sun className="nav-island__theme-icon" aria-hidden="true" />
                                ) : (
                                    <Moon className="nav-island__theme-icon" aria-hidden="true" />
                                )}
                            </motion.div>
                        </button>

                        {/* Button-in-Button CTA */}
                        <a
                            href="#contact"
                            className="nav-island__cta group"
                            aria-label="Let's talk"
                            onClick={(e) => handleScroll(e, "#contact")}
                        >
                            <span className="nav-island__cta-text">Let&apos;s talk</span>
                            <span className="nav-island__cta-icon-pod" aria-hidden="true">
                                <ArrowUpRight className="nav-island__cta-arrow" />
                            </span>
                        </a>

                        {/* Architectural Hamburger Toggle */}
                        <button
                            className={`nav-island__burger ${isOpen ? "is-open" : ""}`}
                            onClick={() => setIsOpen(!isOpen)}
                            aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
                            aria-expanded={isOpen}
                            type="button"
                        >
                            <span className="nav-island__burger-line nav-island__burger-line--top" />
                            <span className="nav-island__burger-line nav-island__burger-line--bottom" />
                        </button>
                    </div>
                </div>
            </motion.header>

            {/* Mobile Fullscreen Glass Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        className="nav-fullscreen-overlay"
                        initial={reduceMotion ? { opacity: 0 } : { opacity: 0, backdropFilter: "blur(0px)" }}
                        animate={{ opacity: 1, backdropFilter: "blur(24px)" }}
                        exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
                        transition={{ duration: 0.35, ease: EASE }}
                        role="dialog"
                        aria-modal="true"
                        aria-label="Mobile Navigation"
                    >
                        <div className="nav-fullscreen-content">
                            {/* Header inside overlay */}
                            <div className="nav-fullscreen-header">
                                <span className="nav-wordmark">
                                    <span className="nav-wordmark__mark">
                                        AS<span className="nav-wordmark__dot-mark">.</span>
                                    </span>
                                </span>

                                <button
                                    className="nav-fullscreen-close"
                                    onClick={() => setIsOpen(false)}
                                    aria-label="Close menu"
                                    type="button"
                                >
                                    <span />
                                    <span />
                                </button>
                            </div>

                            {/* Staggered Navigation Items */}
                            <nav className="nav-fullscreen-links" aria-label="Mobile navigation links">
                                {NAV_ITEMS.map(({ label, href, num }, i) => (
                                    <motion.div
                                        key={href}
                                        className="nav-fullscreen-link-row"
                                        initial={reduceMotion ? false : { opacity: 0, y: 28 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.45, delay: 0.08 + i * 0.06, ease: EASE }}
                                    >
                                        <a
                                            href={href}
                                            className="nav-fullscreen-link group"
                                            onClick={(e) => {
                                                setIsOpen(false);
                                                handleScroll(e, href);
                                            }}
                                        >
                                            <span className="nav-fullscreen-link__num">{num}</span>
                                            <span className="nav-fullscreen-link__label">{label}</span>
                                            <span className="nav-fullscreen-link__arrow" aria-hidden="true">
                                                <ArrowUpRight className="w-5 h-5" />
                                            </span>
                                        </a>
                                    </motion.div>
                                ))}
                            </nav>

                            {/* Bottom Card / Drawer */}
                            <motion.div
                                className="nav-fullscreen-footer"
                                initial={reduceMotion ? false : { opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.45, delay: 0.35, ease: EASE }}
                            >
                                <div className="nav-fullscreen-meta">
                                    <span className="nav-fullscreen-status">
                                        <span className="nav-status-beacon__core" />
                                        <span>New Delhi, IN • UTC+5:30</span>
                                    </span>

                                    <button
                                        onClick={handleCopyEmail}
                                        className="nav-fullscreen-copy-btn"
                                        type="button"
                                    >
                                        {copied ? (
                                            <>
                                                <Check className="w-3.5 h-3.5 text-green-400" />
                                                <span>Email Copied!</span>
                                            </>
                                        ) : (
                                            <>
                                                <Copy className="w-3.5 h-3.5" />
                                                <span>singhaakarsh28@gmail.com</span>
                                            </>
                                        )}
                                    </button>
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};
