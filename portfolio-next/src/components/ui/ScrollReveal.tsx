"use client";

import { motion, useInView, Variants } from "framer-motion";
import { useRef } from "react";

interface ScrollRevealProps {
    children: React.ReactNode;
    variant?: "fade" | "slide-left" | "slide-right" | "slide-up" | "slide-down" | "scale" | "rotate" | "blur" | "flip";
    delay?: number;
    duration?: number;
    className?: string;
    viewportAmount?: number;
    once?: boolean;
}

export const ScrollReveal = ({
    children,
    variant = "fade",
    delay = 0,
    duration = 0.6,
    className = "",
    viewportAmount = 0.15,
    once = true,
}: ScrollRevealProps) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once, amount: viewportAmount });

    const getVariants = (): Variants => {
        const baseTransition = {
            duration,
            delay,
            ease: [0.25, 0.1, 0.25, 1] as any,
        };

        switch (variant) {
            case "slide-left":
                return {
                    hidden: { opacity: 0, x: -100, filter: "blur(10px)" },
                    visible: { opacity: 1, x: 0, filter: "blur(0px)", transition: baseTransition },
                };
            case "slide-right":
                return {
                    hidden: { opacity: 0, x: 100, filter: "blur(10px)" },
                    visible: { opacity: 1, x: 0, filter: "blur(0px)", transition: baseTransition },
                };
            case "slide-up":
                return {
                    hidden: { opacity: 0, y: 80, filter: "blur(8px)" },
                    visible: { opacity: 1, y: 0, filter: "blur(0px)", transition: baseTransition },
                };
            case "slide-down":
                return {
                    hidden: { opacity: 0, y: -80, filter: "blur(8px)" },
                    visible: { opacity: 1, y: 0, filter: "blur(0px)", transition: baseTransition },
                };
            case "scale":
                return {
                    hidden: { opacity: 0, scale: 0.5, filter: "blur(10px)" },
                    visible: { opacity: 1, scale: 1, filter: "blur(0px)", transition: { ...baseTransition, type: "spring", stiffness: 100, damping: 15 } },
                };
            case "rotate":
                return {
                    hidden: { opacity: 0, rotate: -15, y: 50 },
                    visible: { opacity: 1, rotate: 0, y: 0, transition: { ...baseTransition, type: "spring", stiffness: 80, damping: 12 } },
                };
            case "blur":
                return {
                    hidden: { opacity: 0, filter: "blur(20px)", scale: 1.1 },
                    visible: { opacity: 1, filter: "blur(0px)", scale: 1, transition: baseTransition },
                };
            case "flip":
                return {
                    hidden: { opacity: 0, rotateX: 90, y: 30 },
                    visible: { opacity: 1, rotateX: 0, y: 0, transition: { ...baseTransition, type: "spring", stiffness: 60, damping: 10 } },
                };
            case "fade":
            default:
                return {
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0, transition: baseTransition },
                };
        }
    };

    return (
        <motion.div
            ref={ref}
            variants={getVariants()}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className={className}
            style={{ perspective: variant === "flip" ? "1000px" : undefined }}
        >
            {children}
        </motion.div>
    );
};
