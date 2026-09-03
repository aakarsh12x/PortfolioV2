"use client";

import { motion, useScroll, useSpring, useTransform } from "framer-motion";

export const ScrollProgress = () => {
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 280,
        damping: 35,
        restDelta: 0.0001,
    });
    // Smoothly fade out the progress bar when at the top to eliminate any shadow/blur artifacts
    const opacity = useTransform(scrollYProgress, [0, 0.008], [0, 1]);

    return (
        <motion.div
            style={{
                position: "fixed",
                top: 0,
                left: 0,
                right: 0,
                height: "2.5px",
                backgroundColor: "var(--accent)",
                transformOrigin: "0%",
                scaleX,
                opacity,
                zIndex: 99999,
                pointerEvents: "none",
                boxShadow: "0 1px 6px rgba(240, 209, 0, 0.35)",
            }}
            aria-hidden="true"
        />
    );
};
