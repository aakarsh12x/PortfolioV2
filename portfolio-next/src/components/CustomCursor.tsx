"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export const CustomCursor = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [isHovering, setIsHovering] = useState(false);

    useEffect(() => {
        const updateMousePosition = (e: MouseEvent) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
        };

        const handleMouseOver = (e: MouseEvent) => {
            if ((e.target as HTMLElement).closest('a, button, .group, [role="button"]')) {
                setIsHovering(true);
            } else {
                setIsHovering(false);
            }
        };

        window.addEventListener("mousemove", updateMousePosition);
        window.addEventListener("mouseover", handleMouseOver);

        return () => {
            window.removeEventListener("mousemove", updateMousePosition);
            window.removeEventListener("mouseover", handleMouseOver);
        };
    }, []);

    return (
        <div className="fixed top-0 left-0 pointer-events-none z-[9999] mix-blend-difference">
            {/* Outer Square */}
            <motion.div
                style={{
                    position: 'fixed',
                    left: 0,
                    top: 0,
                    width: 32,
                    height: 32,
                    x: mousePosition.x - 16,
                    y: mousePosition.y - 16,
                }}
                animate={{
                    scale: isHovering ? 1.5 : 1,
                    rotate: isHovering ? 45 : 0,
                }}
                transition={{ type: "spring", stiffness: 150, damping: 15 }}
                className="border border-[#ff4d00]"
            />

            {/* Inner Dot */}
            <motion.div
                style={{
                    position: 'fixed',
                    left: 0,
                    top: 0,
                    width: 4,
                    height: 4,
                    x: mousePosition.x - 2,
                    y: mousePosition.y - 2,
                }}
                className="bg-[#ff4d00]"
            />
        </div>
    );
};
