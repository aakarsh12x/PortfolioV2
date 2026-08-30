"use client";

import { motion, useScroll, useSpring } from "framer-motion";

export const ScrollProgress = () => {
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001,
    });

    return (
        <motion.div
            style={{
                position: "fixed",
                top: 0,
                left: 0,
                right: 0,
                height: "3px",
                backgroundColor: "var(--accent)",
                transformOrigin: "0%",
                scaleX,
                zIndex: 99999,
                pointerEvents: "none",
                boxShadow: "0 0 12px rgba(240, 209, 0, 0.7)"
            }}
            aria-hidden="true"
        />
    );
};
