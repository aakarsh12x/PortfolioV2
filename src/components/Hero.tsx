"use client";

import { ArrowRight, GraduationCap } from "lucide-react";
import { STATS } from "@/data/portfolio";
import { motion } from "framer-motion";
import { TiltCard } from "./ui/TiltCard";

// Letter animation variants
const letterVariants = {
    hidden: { opacity: 0, y: 50, rotateX: -90 },
    visible: (i: number) => ({
        opacity: 1,
        y: 0,
        rotateX: 0,
        transition: {
            delay: i * 0.05,
            duration: 0.5,
            ease: [0.6, 0.01, 0.05, 0.95] as any,
        },
    }),
};

const AnimatedName = ({ text, fromRight = false, color = "text-white" }: { text: string; fromRight?: boolean; color?: string }) => (
    <motion.span
        className={`block ${color}`}
        initial="hidden"
        animate="visible"
        style={{ paddingBottom: "0.1em" }}
    >
        {text.split("").map((char, i) => (
            <motion.span
                key={i}
                custom={fromRight ? text.length - i : i}
                variants={letterVariants}
                className="inline-block"
                style={{
                    display: char === " " ? "inline" : "inline-block",
                    transformOrigin: "bottom center"
                }}
            >
                {char === " " ? "\u00A0" : char}
            </motion.span>
        ))}
    </motion.span>
);

export const Hero = () => {
    return (
        <section className="min-h-screen flex items-center pt-30 pb-12 overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-32 w-full">
                <div className="grid lg:grid-cols-2 gap-32 items-center">

                    {/* Left */}
                    <div>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            className="flex items-center gap-4 mb-7"
                        >
                            <motion.span
                                className="w-2 h-2 bg-[#ff4d00]"
                                animate={{ scale: [1, 1.5, 1] }}
                                transition={{ duration: 2, repeat: Infinity }}
                            />
                            <span className="text-sm font-bold tracking-[0.2em] uppercase text-white">Full Stack Developer</span>
                        </motion.div>

                        <h1 className="text-6xl md:text-7xl lg:text-9xl font-black leading-[0.85] tracking-tighter mb-7 whitespace-nowrap" style={{ perspective: "1000px" }}>
                            <AnimatedName text="Aakarsh" />
                            <AnimatedName text="Singh" fromRight color="text-[#ff4d00]" />
                        </h1>

                        {/* Education Highlight - Clean Design */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="flex items-center gap-3 mb-8"
                        >
                            <GraduationCap className="w-5 h-5 text-[#ff4d00]" />
                            <span className="text-sm lg:text-base text-white/50 tracking-widest uppercase font-medium">
                                IIIT Bhopal <span className="text-[#ff4d00] mx-2">•</span> Pre-Final Year
                            </span>
                        </motion.div>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                            className="text-lg text-white/40 max-w-md leading-loose mb-8"
                        >
                            Building scalable products with React, Node.js & Cloud Architecture.
                            Impacted 25k+ users across multiple production applications.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                            className="flex gap-6"
                        >
                            <a href="#contact" className="group flex items-center gap-4 px-8 py-4 bg-[#ff4d00] text-black font-bold text-xs tracking-[0.2em] uppercase hover:bg-white transition-all lg:cursor-none">
                                Contact Me
                                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </a>
                            <a href="https://drive.google.com/file/d/1YkAAahT3mnxU-wAC_qXMCWBHLeLAl9g1/view?usp=sharing" target="_blank" className="px-8 py-4 border border-white/10 text-xs tracking-[0.2em] uppercase hover:bg-white/5 hover:border-[#ff4d00] transition-all lg:cursor-none">
                                Resume
                            </a>
                        </motion.div>
                    </div>

                    {/* Right - Stats */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.7, delay: 0.5 }}
                        className="flex items-center justify-center lg:justify-end"
                    >
                        <div className="grid grid-cols-2 gap-2 w-full max-w-lg aspect-square">
                            {STATS.map((stat, i) => (
                                <TiltCard key={stat.label} className="w-full h-full">
                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{
                                            opacity: 1,
                                            y: 0,
                                            borderColor: ["rgba(255,255,255,0.05)", "rgba(255,77,0,0.4)", "rgba(255,255,255,0.05)"]
                                        }}
                                        whileHover={{
                                            borderColor: "#ff4d00",
                                            backgroundColor: "rgba(255, 77, 0, 0.1)",
                                            boxShadow: "0 0 30px rgba(255,77,0,0.2)",
                                            transition: { duration: 0.15 }
                                        }}
                                        transition={{
                                            duration: 0.3,
                                            delay: 0.6 + (i * 0.1),
                                            borderColor: {
                                                duration: 2,
                                                repeat: Infinity,
                                                repeatType: "reverse",
                                                delay: i * 0.5
                                            }
                                        }}
                                        className="w-full h-full p-6 lg:p-10 bg-[#0a0a0a] border border-white/5 flex flex-col justify-between group"
                                    >
                                        <stat.icon className="w-6 h-6 text-[#ff4d00] mb-4 group-hover:scale-110 transition-transform duration-150" strokeWidth={1.5} />
                                        <div>
                                            <motion.span
                                                className="text-3xl lg:text-5xl font-black block mb-3 text-white group-hover:text-[#ff4d00] transition-colors duration-150 tracking-tight"
                                                layoutId={`stat-${stat.label}`}
                                            >
                                                {stat.value}
                                            </motion.span>
                                            <span className="text-[10px] text-white/40 tracking-[0.25em] uppercase block font-bold">{stat.label}</span>
                                        </div>
                                    </motion.div>
                                </TiltCard>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};
