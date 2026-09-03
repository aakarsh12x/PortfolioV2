"use client";

import Image from "next/image";
import { ArrowDownRight, ArrowUpRight } from "lucide-react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import type { MouseEvent } from "react";
import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useSafeReducedMotion } from "@/hooks/useSafeReducedMotion";
import { Magnetic } from "./ui/Magnetic";

gsap.registerPlugin(ScrollTrigger);

const EASE = [0.22, 1, 0.36, 1] as const;
const lineVariants = {
    hidden: { y: "110%" },
    visible: (delay: number) => ({ y: 0, transition: { duration: 0.9, delay, ease: EASE } }),
};

export const Hero = () => {
    const reduceMotion = useSafeReducedMotion();
    const sectionRef = useRef<HTMLElement>(null);
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
        <section ref={sectionRef} id="home" className="hero-stage" aria-labelledby="hero-title" onMouseMove={movePortrait} onMouseLeave={resetPortrait}>
            <div className="hero-stage__wash" aria-hidden="true" />
            <div className="hero-shell">
                <div className="hero-composition">
                    <motion.figure className="hero-portrait"
                        initial={reduceMotion ? false : { opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1.1, delay: 0.2, ease: EASE }}>
                        <div className="hero-portrait__offset" aria-hidden="true" />
                        <motion.div className="hero-portrait__frame" style={{ x: smoothX, y: smoothY }}
                            initial={reduceMotion ? false : { clipPath: "inset(100% 0 0 0)" }}
                            animate={{ clipPath: "inset(0% 0 0 0)" }}
                            transition={{ duration: 1.1, delay: 0.2, ease: EASE }}>
                            <Image src="/profile.jpg" alt="Aakarsh Singh in profile" fill priority sizes="(max-width: 768px) 82vw, 42vw" className="hero-portrait__image" />
                            <div className="hero-portrait__tone" aria-hidden="true" />
                        </motion.div>
                        <div className="hero-portrait__stamp" aria-hidden="true"><span>Product</span><span>Systems</span><span>Scale</span></div>
                        <figcaption>Aakarsh Singh / Full-Stack &amp; AI Engineer</figcaption>
                    </motion.figure>

                    <h1 id="hero-title" className="hero-title">
                        <span className="hero-line"><motion.span custom={0.22} variants={lineVariants} initial={reduceMotion ? false : "hidden"} animate="visible">I build</motion.span></span>
                        <span className="hero-line"><motion.span custom={0.31} variants={lineVariants} initial={reduceMotion ? false : "hidden"} animate="visible">products</motion.span></span>
                        <span className="hero-line hero-line--cut"><motion.span custom={0.4} variants={lineVariants} initial={reduceMotion ? false : "hidden"} animate="visible">people</motion.span></span>
                        <span className="hero-line hero-line--accent"><motion.span custom={0.49} variants={lineVariants} initial={reduceMotion ? false : "hidden"} animate="visible">actually use.</motion.span></span>
                    </h1>

                    <motion.div className="hero-intro" initial={reduceMotion ? false : { opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.75, ease: EASE }}>
                        <p>Full-stack and AI engineer building resilient software and high-scale backends powering over <strong>7.5 million active users</strong>.</p>
                        <div className="hero-actions">
                            <Magnetic><a href="#experience" className="hero-action hero-action--primary">Selected experience <ArrowDownRight aria-hidden="true" /></a></Magnetic>
                            <Magnetic><a href="#contact" className="hero-action hero-action--text">Discuss a role <ArrowUpRight aria-hidden="true" /></a></Magnetic>
                        </div>
                    </motion.div>
                </div>

            </div>
        </section>
    );
};
