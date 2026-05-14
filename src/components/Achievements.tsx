"use client";

import { ACHIEVEMENTS } from "@/data/portfolio";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export const Achievements = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.1 });

    return (
        <section
            className="py-8 lg:py-20"
            style={{
                backgroundColor: "var(--bg-section)",
                borderTop: "1px solid var(--border-subtle)",
                borderBottom: "1px solid var(--border-subtle)",
            }}
        >
            <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-32">

                {/* Header */}
                <motion.div
                    className="mb-8 lg:mb-16"
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    ref={ref}
                >
                    <span className="text-xs tracking-[0.3em] uppercase mb-4 block" style={{ color: "var(--accent)" }}>
                        Recognition
                    </span>
                    <h2 className="text-3xl lg:text-4xl font-black tracking-tighter" style={{ color: "var(--text-primary)" }}>
                        Achievements
                    </h2>
                    <div className="mt-4 h-px w-24" style={{ backgroundColor: "var(--accent)", opacity: 0.5 }} />
                </motion.div>

                {/* Cards — 2×2 on mobile, 4×1 on desktop, with border hairlines */}
                <div className="grid grid-cols-2 lg:grid-cols-4">
                    {ACHIEVEMENTS.map((item, i) => (
                        <motion.div
                            key={i}
                            className="group relative flex flex-col justify-between overflow-hidden p-5 lg:p-10 transition-colors duration-500"
                            style={{
                                backgroundColor: "var(--bg-section)",
                                minHeight: "clamp(150px, 20vw, 250px)",
                                borderRight: i < 3 ? "1px solid var(--border-subtle)" : undefined,
                                borderBottom: i < 2 ? "1px solid var(--border-subtle)" : undefined,
                            }}
                            initial={{ opacity: 0, y: 20 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.5, delay: 0.1 + i * 0.1 }}
                            onMouseEnter={e => (e.currentTarget.style.backgroundColor = "var(--surface-2)")}
                            onMouseLeave={e => (e.currentTarget.style.backgroundColor = "var(--bg-section)")}
                        >
                            {/* Index */}
                            <span className="text-[10px] tracking-[0.25em] uppercase font-mono mb-2 block" style={{ color: "var(--text-trace)" }}>
                                0{i + 1}
                            </span>

                            {/* Value */}
                            <div className="mb-3">
                                <span
                                    className="font-black leading-none block group-hover:scale-105 transition-transform duration-300 origin-left"
                                    style={{
                                        color: "var(--accent)",
                                        fontSize: "clamp(1.2rem, 3vw, 2.5rem)",
                                    }}
                                >
                                    {item.value}
                                </span>
                            </div>

                            {/* Expanding line */}
                            <div
                                className="h-px w-8 group-hover:w-full transition-all duration-500 mb-3"
                                style={{ backgroundColor: "var(--accent)", opacity: 0.35 }}
                            />

                            {/* Label */}
                            <p className="text-[9px] lg:text-[10px] font-bold uppercase tracking-[0.15em] leading-tight" style={{ color: "var(--text-faint)" }}>
                                {item.label}
                            </p>

                            {/* Desc – desktop only */}
                            <p className="hidden lg:block text-xs mt-2 leading-relaxed" style={{ color: "var(--text-muted)" }}>
                                {item.desc}
                            </p>

                            {/* Corner glow */}
                            <div
                                className="absolute -bottom-10 -right-10 w-28 h-28 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-all duration-700 pointer-events-none"
                                style={{ backgroundColor: `rgba(var(--accent-r),var(--accent-g),var(--accent-b),0.12)` }}
                            />

                            {/* Background icon */}
                            <div className="absolute top-3 right-3 opacity-[0.04] group-hover:opacity-[0.09] transition-opacity pointer-events-none">
                                <item.icon
                                    className="w-10 h-10 lg:w-16 lg:h-16"
                                    style={{ color: "var(--accent)" }}
                                    strokeWidth={1}
                                />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
