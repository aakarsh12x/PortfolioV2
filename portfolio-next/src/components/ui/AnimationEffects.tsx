"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface FloatingElementProps {
    children: ReactNode;
    className?: string;
    duration?: number;
    distance?: number;
    delay?: number;
}

export const FloatingElement = ({
    children,
    className = "",
    duration = 3,
    distance = 10,
    delay = 0,
}: FloatingElementProps) => {
    return (
        <motion.div
            className={className}
            animate={{
                y: [-distance, distance, -distance],
            }}
            transition={{
                duration,
                repeat: Infinity,
                ease: "easeInOut",
                delay,
            }}
        >
            {children}
        </motion.div>
    );
};

export const GlowPulse = ({
    children,
    className = "",
}: {
    children: ReactNode;
    className?: string;
}) => {
    return (
        <motion.div
            className={className}
            animate={{
                boxShadow: [
                    "0 0 20px rgba(255, 77, 0, 0)",
                    "0 0 40px rgba(255, 77, 0, 0.3)",
                    "0 0 20px rgba(255, 77, 0, 0)",
                ],
            }}
            transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
            }}
        >
            {children}
        </motion.div>
    );
};

export const TextReveal = ({ text, className = "" }: { text: string; className?: string }) => {
    return (
        <motion.span className={`inline-block overflow-hidden ${className}`}>
            {text.split("").map((char, i) => (
                <motion.span
                    key={i}
                    initial={{ y: "100%" }}
                    animate={{ y: 0 }}
                    transition={{
                        duration: 0.5,
                        delay: i * 0.03,
                        ease: [0.6, 0.01, 0.05, 0.95],
                    }}
                    className="inline-block"
                >
                    {char === " " ? "\u00A0" : char}
                </motion.span>
            ))}
        </motion.span>
    );
};

export const MagneticButton = ({
    children,
    className = "",
}: {
    children: ReactNode;
    className?: string;
}) => {
    return (
        <motion.div
            className={className}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
        >
            {children}
        </motion.div>
    );
};
