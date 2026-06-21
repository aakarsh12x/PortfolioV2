"use client";

import Image from "next/image";
import { ArrowDownRight, ArrowUpRight } from "lucide-react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import type { MouseEvent } from "react";
import { useSafeReducedMotion } from "@/hooks/useSafeReducedMotion";
import { Magnetic } from "./ui/Magnetic";

const EASE = [0.22, 1, 0.36, 1] as const;
const lineVariants = {
    hidden: { y: "110%" },
    visible: (delay: number) => ({ y: 0, transition: { duration: 0.9, delay, ease: EASE } }),
};

export const Hero = () => {
    const reduceMotion = useSafeReducedMotion();
    const portraitX = useMotionValue(0);
    const portraitY = useMotionValue(0);
    const smoothX = useSpring(portraitX, { stiffness: 110, damping: 20, mass: 0.6 });
    const smoothY = useSpring(portraitY, { stiffness: 110, damping: 20, mass: 0.6 });

    const movePortrait = (event: MouseEvent<HTMLElement>) => {
        if (reduceMotion) return;
        const bounds = event.currentTarget.getBoundingClientRect();
        portraitX.set(((event.clientX - bounds.left) / bounds.width - 0.5) * 12);
        portraitY.set(((event.clientY - bounds.top) / bounds.height - 0.5) * 12);
    };
    const resetPortrait = () => { portraitX.set(0); portraitY.set(0); };

    return (
        <section id="home" className="hero-stage" aria-labelledby="hero-title" onMouseMove={movePortrait} onMouseLeave={resetPortrait}>
            <div className="hero-stage__wash" aria-hidden="true" />
            <div className="hero-shell">
                <motion.div className="hero-meta" initial={reduceMotion ? false : { opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.7, delay: 0.15 }}>
                    <p className="hero-availability"><span aria-hidden="true" />Open to SDE roles</p>
                    <p className="hero-coordinate">Full-stack engineer · India · 2026</p>
                </motion.div>

                <div className="hero-composition">
                    <motion.figure className="hero-portrait"
                        initial={reduceMotion ? false : { opacity: 0, clipPath: "inset(100% 0 0 0)" }}
                        animate={{ opacity: 1, clipPath: "inset(0% 0 0 0)" }}
                        transition={{ duration: 1.1, delay: 0.2, ease: EASE }}>
                        <div className="hero-portrait__offset" aria-hidden="true" />
                        <motion.div className="hero-portrait__frame" style={{ x: smoothX, y: smoothY }}>
                            <Image src="/profile.jpg" alt="Aakarsh Singh in profile" fill priority sizes="(max-width: 768px) 82vw, 42vw" className="hero-portrait__image" />
                            <div className="hero-portrait__tone" aria-hidden="true" />
                            <div className="hero-portrait__scan" aria-hidden="true" />
                        </motion.div>
                        <motion.div className="hero-crosshair-float" initial={reduceMotion ? false : { opacity: 0, scale: 0.6 }}
                            animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5, delay: 1, ease: EASE }} aria-hidden="true">
                            <motion.div className="hero-crosshair" animate={reduceMotion ? undefined : { rotate: 360 }}
                                transition={{ duration: 24, repeat: Infinity, ease: "linear" }}><span /><i /></motion.div>
                        </motion.div>
                        <div className="hero-portrait__stamp" aria-hidden="true"><span>Product</span><span>Systems</span><span>Scale</span></div>
                        <figcaption>Aakarsh Singh / Founding engineer</figcaption>
                    </motion.figure>

                    <h1 id="hero-title" className="hero-title">
                        <span className="hero-line"><motion.span custom={0.22} variants={lineVariants} initial={reduceMotion ? false : "hidden"} animate="visible">I build</motion.span></span>
                        <span className="hero-line"><motion.span custom={0.31} variants={lineVariants} initial={reduceMotion ? false : "hidden"} animate="visible">products</motion.span></span>
                        <span className="hero-line hero-line--cut"><motion.span custom={0.4} variants={lineVariants} initial={reduceMotion ? false : "hidden"} animate="visible">people</motion.span></span>
                        <span className="hero-line hero-line--accent"><motion.span custom={0.49} variants={lineVariants} initial={reduceMotion ? false : "hidden"} animate="visible">actually use.</motion.span></span>
                    </h1>

                    <motion.div className="hero-intro" initial={reduceMotion ? false : { opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.75, ease: EASE }}>
                        <p>Founding engineer and product-minded builder turning raw ideas into fast, resilient software—from the first commit to the first <strong>25,000 users.</strong></p>
                        <div className="hero-actions">
                            <Magnetic><a href="#projects" className="hero-action hero-action--primary">View selected work <ArrowDownRight aria-hidden="true" /></a></Magnetic>
                            <Magnetic><a href="#contact" className="hero-action hero-action--text">Discuss a role <ArrowUpRight aria-hidden="true" /></a></Magnetic>
                        </div>
                    </motion.div>
                </div>

                <motion.div className="hero-proof" initial={reduceMotion ? false : { opacity: 0, scaleX: 0.92 }} animate={{ opacity: 1, scaleX: 1 }} transition={{ duration: 0.8, delay: 0.95, ease: EASE }}>
                    <p><strong>Founding engineer</strong><span>Cherry Dating</span></p>
                    <p><strong>25k+ users</strong><span>across shipped products</span></p>
                    <p><strong>800+ problems</strong><span>solved with intent</span></p>
                    <a href="#experience">Selected experience <ArrowDownRight aria-hidden="true" /></a>
                </motion.div>
            </div>
        </section>
    );
};
