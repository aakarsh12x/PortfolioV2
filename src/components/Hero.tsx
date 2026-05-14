"use client";

import { ArrowRight, GraduationCap, ArrowDown } from "lucide-react";
import { STATS } from "@/data/portfolio";
import { motion } from "framer-motion";
import { TiltCard } from "./ui/TiltCard";

const TECH_MARQUEE = [
    "React", "TypeScript", "Next.js", "Node.js", "PostgreSQL",
    "MongoDB", "AWS", "Docker", "Express", "Socket.IO", "Redis",
    "Flutter", "Puppeteer", "FlexSearch", "Framer Motion", "PostGIS",
];

// ── Letter-flip animation ──────────────────────────────────────────────────
const letterVariants = {
    hidden: { opacity: 0, y: 50, rotateX: -90 },
    visible: (i: number) => ({
        opacity: 1, y: 0, rotateX: 0,
        transition: { delay: i * 0.05, duration: 0.5, ease: [0.6, 0.01, 0.05, 0.95] as any },
    }),
};

const AnimatedName = ({ text, fromRight = false, accent = false }: { text: string; fromRight?: boolean; accent?: boolean }) => (
    <motion.span
        className="block"
        initial="hidden"
        animate="visible"
        style={{ paddingBottom: "0.1em", color: accent ? "var(--accent)" : "var(--text-primary)" }}
    >
        {text.split("").map((char, i) => (
            <motion.span
                key={i}
                custom={fromRight ? text.length - i : i}
                variants={letterVariants}
                style={{ display: char === " " ? "inline" : "inline-block", transformOrigin: "bottom center" }}
            >
                {char === " " ? "\u00A0" : char}
            </motion.span>
        ))}
    </motion.span>
);

// ── Infinite marquee ───────────────────────────────────────────────────────
const Marquee = () => {
    const items = [...TECH_MARQUEE, ...TECH_MARQUEE, ...TECH_MARQUEE];
    return (
        <div className="overflow-hidden w-full">
            <motion.div
                className="flex gap-0 whitespace-nowrap will-change-transform"
                animate={{ x: ["0%", "-33.333%"] }}
                transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
            >
                {items.map((item, i) => (
                    <span key={i} className="inline-flex items-center text-xs font-bold tracking-[0.2em] uppercase px-6"
                        style={{ color: "var(--text-muted)" }}>
                        {item}
                        <span className="ml-6 text-[6px]" style={{ color: "var(--accent)" }}>◆</span>
                    </span>
                ))}
            </motion.div>
        </div>
    );
};

// ── Main Hero ──────────────────────────────────────────────────────────────
export const Hero = () => {
    return (
        <section
            className="min-h-screen flex flex-col justify-between pt-24 relative"
            style={{ backgroundColor: "var(--bg-primary)", overflowX: "clip" }}
        >
            {/* ── Decorative background "AS" ── */}
            <div
                className="absolute right-[-5vw] bottom-0 select-none pointer-events-none leading-none font-black"
                style={{
                    fontSize: "38vw",
                    color: "var(--text-primary)",
                    opacity: 0.025,
                    zIndex: 0,
                    lineHeight: 0.85,
                }}
                aria-hidden
            >
                AS
            </div>

            {/* ── Main content ── */}
            <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-32 w-full flex-1 flex items-center relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center w-full py-8">

                    {/* Left */}
                    <div>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            className="flex items-center gap-4 mb-6"
                        >
                            <motion.span
                                className="w-2 h-2 rounded-full"
                                style={{ backgroundColor: "var(--accent)" }}
                                animate={{ scale: [1, 1.6, 1] }}
                                transition={{ duration: 2, repeat: Infinity }}
                            />
                            <span className="text-xs font-bold tracking-[0.25em] uppercase" style={{ color: "var(--text-dim)" }}>
                                Full Stack Developer
                            </span>
                        </motion.div>

                        <h1 className="text-[13vw] md:text-[10vw] lg:text-[7.5vw] font-black leading-[0.85] tracking-tighter mb-6"
                            style={{ perspective: "1000px", maxWidth: "100%" }}>
                            <AnimatedName text="Aakarsh" />
                            <AnimatedName text="Singh" fromRight accent />
                        </h1>

                        {/* Thin accent rule */}
                        <motion.div
                            initial={{ scaleX: 0 }} animate={{ scaleX: 1 }}
                            transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
                            className="h-px mb-6 origin-left"
                            style={{ backgroundColor: "var(--accent)", opacity: 0.4, maxWidth: "24rem" }}
                        />

                        <motion.div
                            initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="flex items-center gap-3 mb-6"
                        >
                            <GraduationCap className="w-4 h-4 flex-shrink-0" style={{ color: "var(--accent)" }} />
                            <span className="text-sm tracking-widest uppercase font-medium" style={{ color: "var(--text-muted)" }}>
                                IIIT Bhopal <span className="mx-2" style={{ color: "var(--accent)" }}>•</span> Pre-Final Year
                            </span>
                        </motion.div>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                            className="text-base leading-loose mb-8 max-w-sm"
                            style={{ color: "var(--text-muted)" }}
                        >
                            Building scalable products with React, Node.js & Cloud Architecture.
                            Impacted <strong style={{ color: "var(--text-dim)" }}>25k+</strong> users across multiple production applications.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                            className="flex flex-wrap gap-4"
                        >
                            <a href="#contact"
                                className="group flex items-center gap-3 px-7 py-3.5 font-bold text-xs tracking-[0.2em] uppercase transition-all lg:cursor-none"
                                style={{ backgroundColor: "var(--accent)", color: "var(--bg-primary)" }}
                                onMouseEnter={e => (e.currentTarget.style.backgroundColor = "var(--text-primary)")}
                                onMouseLeave={e => (e.currentTarget.style.backgroundColor = "var(--accent)")}
                            >
                                Contact Me
                                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </a>
                            <a href="https://drive.google.com/file/d/1RVK8T8ZL3nPcEu00lppmESbdnHl8z5q3/view?usp=drive_link"
                                target="_blank"
                                className="px-7 py-3.5 text-xs tracking-[0.2em] uppercase transition-all lg:cursor-none"
                                style={{ border: "1px solid var(--border)", color: "var(--text-primary)" }}
                                onMouseEnter={e => { e.currentTarget.style.borderColor = "var(--accent)"; e.currentTarget.style.backgroundColor = "var(--surface-2)"; }}
                                onMouseLeave={e => { e.currentTarget.style.borderColor = "var(--border)"; e.currentTarget.style.backgroundColor = "transparent"; }}
                            >
                                Resume
                            </a>
                        </motion.div>
                    </div>

                    {/* Right – Stats */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.5 }}
                        className="flex items-center justify-center lg:justify-end"
                    >
                        <div className="grid grid-cols-2 w-full max-w-md" style={{ gap: "1px", backgroundColor: "var(--border)" }}>
                            {STATS.map((stat, i) => (
                                <TiltCard key={stat.label} className="w-full h-full">
                                    <motion.div
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ duration: 0.4, delay: 0.7 + i * 0.1 }}
                                        className="p-6 lg:p-8 flex flex-col justify-between group transition-all duration-300 cursor-default"
                                        style={{
                                            backgroundColor: "var(--bg-card)",
                                            minHeight: "clamp(130px, 14vw, 200px)",
                                        }}
                                        onMouseEnter={e => {
                                            (e.currentTarget as HTMLDivElement).style.backgroundColor = `rgba(var(--accent-r),var(--accent-g),var(--accent-b),0.07)`;
                                        }}
                                        onMouseLeave={e => {
                                            (e.currentTarget as HTMLDivElement).style.backgroundColor = "var(--bg-card)";
                                        }}
                                    >
                                        <stat.icon className="w-5 h-5 group-hover:scale-110 transition-transform duration-200" style={{ color: "var(--accent)" }} strokeWidth={1.5} />
                                        <div>
                                            <motion.span
                                                className="text-2xl lg:text-4xl font-black block mb-1 tracking-tight"
                                                style={{ color: "var(--text-primary)" }}
                                                initial={{ y: 20, opacity: 0 }}
                                                animate={{ y: 0, opacity: 1 }}
                                                transition={{ duration: 0.5, delay: 0.8 + i * 0.1 }}
                                            >
                                                {stat.value}
                                            </motion.span>
                                            <span className="text-[9px] tracking-[0.2em] uppercase font-bold block" style={{ color: "var(--text-muted)" }}>
                                                {stat.label}
                                            </span>
                                        </div>
                                    </motion.div>
                                </TiltCard>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* ── Bottom marquee strip ── */}
            <motion.div
                initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 1 }}
                className="relative z-10 py-4"
                style={{ borderTop: "1px solid var(--border-subtle)" }}
            >
                <div className="flex items-center justify-between px-6 md:px-12 lg:px-32 mb-3">
                    <span className="text-[9px] tracking-[0.25em] uppercase" style={{ color: "var(--text-trace)" }}>Tech Stack</span>
                    <motion.div
                        className="flex items-center gap-2"
                        animate={{ y: [0, 4, 0] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    >
                        <span className="text-[9px] tracking-[0.2em] uppercase" style={{ color: "var(--text-trace)" }}>Scroll</span>
                        <ArrowDown className="w-3 h-3" style={{ color: "var(--text-trace)" }} />
                    </motion.div>
                </div>
                <Marquee />
            </motion.div>
        </section>
    );
};
