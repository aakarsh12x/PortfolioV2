"use client";

import { motion, Variants } from "framer-motion";

interface StaggerContainerProps {
    children: React.ReactNode;
    className?: string;
    staggerDelay?: number;
    initialDelay?: number;
    viewportAmount?: number;
    once?: boolean;
}

export const StaggerContainer = ({
    children,
    className = "",
    staggerDelay = 0.1,
    initialDelay = 0,
    viewportAmount = 0.15,
    once = true,
}: StaggerContainerProps) => {
    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: staggerDelay,
                delayChildren: initialDelay,
            },
        },
    };

    return (
        <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once, amount: viewportAmount }}
            className={className}
        >
            {children}
        </motion.div>
    );
};

export const StaggerItem = ({
    children,
    className = "",
    variant = "fade-up"
}: {
    children: React.ReactNode;
    className?: string;
    variant?: "fade-up" | "scale" | "slide-left" | "slide-right" | "blur";
}) => {
    const variants: Record<string, Variants> = {
        "fade-up": {
            hidden: { opacity: 0, y: 30, filter: "blur(8px)" },
            visible: {
                opacity: 1,
                y: 0,
                filter: "blur(0px)",
                transition: {
                    duration: 0.6,
                    ease: [0.25, 0.1, 0.25, 1]
                }
            },
        },
        "scale": {
            hidden: { opacity: 0, scale: 0.5, filter: "blur(8px)" },
            visible: {
                opacity: 1,
                scale: 1,
                filter: "blur(0px)",
                transition: {
                    type: "spring",
                    stiffness: 100,
                    damping: 15
                }
            },
        },
        "slide-left": {
            hidden: { opacity: 0, x: -50, filter: "blur(5px)" },
            visible: {
                opacity: 1,
                x: 0,
                filter: "blur(0px)",
                transition: {
                    duration: 0.5,
                    ease: [0.25, 0.1, 0.25, 1]
                }
            },
        },
        "slide-right": {
            hidden: { opacity: 0, x: 50, filter: "blur(5px)" },
            visible: {
                opacity: 1,
                x: 0,
                filter: "blur(0px)",
                transition: {
                    duration: 0.5,
                    ease: [0.25, 0.1, 0.25, 1]
                }
            },
        },
        "blur": {
            hidden: { opacity: 0, filter: "blur(20px)", scale: 1.1 },
            visible: {
                opacity: 1,
                filter: "blur(0px)",
                scale: 1,
                transition: {
                    duration: 0.7,
                    ease: [0.25, 0.1, 0.25, 1]
                }
            },
        },
    };

    return (
        <motion.div variants={variants[variant]} className={className}>
            {children}
        </motion.div>
    );
};
