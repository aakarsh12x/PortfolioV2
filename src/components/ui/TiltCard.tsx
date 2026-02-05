"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ReactNode, useRef } from "react";

interface TiltCardProps {
    children: ReactNode;
    className?: string;
    tiltAmount?: number;
    glareEnabled?: boolean;
}

export const TiltCard = ({
    children,
    className = "",
    tiltAmount = 10,
    glareEnabled = true,
}: TiltCardProps) => {
    const ref = useRef<HTMLDivElement>(null);

    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const xSpring = useSpring(x, { stiffness: 150, damping: 15 });
    const ySpring = useSpring(y, { stiffness: 150, damping: 15 });

    const rotateX = useTransform(ySpring, [-0.5, 0.5], [tiltAmount, -tiltAmount]);
    const rotateY = useTransform(xSpring, [-0.5, 0.5], [-tiltAmount, tiltAmount]);

    const glareX = useTransform(xSpring, [-0.5, 0.5], [0, 100]);
    const glareY = useTransform(ySpring, [-0.5, 0.5], [0, 100]);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!ref.current) return;

        const rect = ref.current.getBoundingClientRect();
        const xPos = (e.clientX - rect.left) / rect.width - 0.5;
        const yPos = (e.clientY - rect.top) / rect.height - 0.5;

        x.set(xPos);
        y.set(yPos);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <motion.div
            ref={ref}
            className={`relative ${className}`}
            style={{
                rotateX,
                rotateY,
                transformStyle: "preserve-3d",
                perspective: "1000px",
            }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
        >
            {children}

            {/* Glare effect */}
            {glareEnabled && (
                <motion.div
                    className="absolute inset-0 pointer-events-none rounded-inherit"
                    style={{
                        background: `radial-gradient(circle at ${glareX}% ${glareY}%, rgba(255, 77, 0, 0.15) 0%, transparent 50%)`,
                    }}
                />
            )}
        </motion.div>
    );
};
