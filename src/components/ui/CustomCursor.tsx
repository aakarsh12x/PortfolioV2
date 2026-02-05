"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export const CustomCursor = () => {
    const [isMobile, setIsMobile] = useState(true);
    const [isReady, setIsReady] = useState(false);

    useEffect(() => {
        const checkMobile = () => {
            const hasCoarsePointer = window.matchMedia("(pointer: coarse)").matches;
            const hasNoHover = window.matchMedia("(hover: none)").matches;
            const isSmallScreen = window.innerWidth < 1024;
            const isTouchCapable = 'ontouchstart' in window || navigator.maxTouchPoints > 0;

            const mobile = hasCoarsePointer || hasNoHover || isSmallScreen || isTouchCapable;
            setIsMobile(mobile);
            setIsReady(true);
        };

        checkMobile();
        window.addEventListener("resize", checkMobile);
        return () => window.removeEventListener("resize", checkMobile);
    }, []);

    const [isHovering, setIsHovering] = useState(false);
    const [isClicking, setIsClicking] = useState(false);
    const [isVisible, setIsVisible] = useState(false);

    const cursorX = useMotionValue(-100);
    const cursorY = useMotionValue(-100);

    // Smooth spring animation for the main cursor
    const springConfig = { damping: 28, stiffness: 400 };
    const cursorXSpring = useSpring(cursorX, springConfig);
    const cursorYSpring = useSpring(cursorY, springConfig);

    // Delayed spring for the trailing ring
    const delayedSpringConfig = { damping: 30, stiffness: 200 };
    const delayedX = useSpring(cursorX, delayedSpringConfig);
    const delayedY = useSpring(cursorY, delayedSpringConfig);

    useEffect(() => {
        if (isMobile || !isReady) return;

        let lastTouchTime = 0;

        const moveCursor = (e: MouseEvent) => {
            if (Date.now() - lastTouchTime < 500) return;

            cursorX.set(e.clientX);
            cursorY.set(e.clientY);
            setIsVisible(true);
        };

        const handleMouseDown = (e: MouseEvent) => {
            if (Date.now() - lastTouchTime < 500) return;
            setIsClicking(true);
        };

        const handleMouseUp = (e: MouseEvent) => {
            if (Date.now() - lastTouchTime < 500) return;
            setIsClicking(false);
        };

        const handleMouseOver = (e: MouseEvent) => {
            if (Date.now() - lastTouchTime < 500) return;

            const target = e.target as HTMLElement;
            if (
                target.tagName === "A" ||
                target.tagName === "BUTTON" ||
                target.closest("a") ||
                target.closest("button") ||
                target.classList.contains("cursor-pointer")
            ) {
                setIsHovering(true);
            }
        };

        const handleMouseOut = () => setIsHovering(false);

        const handleTouch = () => {
            lastTouchTime = Date.now();
        };

        window.addEventListener("mousemove", moveCursor);
        window.addEventListener("mousedown", handleMouseDown);
        window.addEventListener("mouseup", handleMouseUp);
        window.addEventListener("mouseover", handleMouseOver);
        window.addEventListener("mouseout", handleMouseOut);
        window.addEventListener("touchstart", handleTouch, { passive: true });
        window.addEventListener("touchmove", handleTouch, { passive: true });

        return () => {
            window.removeEventListener("mousemove", moveCursor);
            window.removeEventListener("mousedown", handleMouseDown);
            window.removeEventListener("mouseup", handleMouseUp);
            window.removeEventListener("mouseover", handleMouseOver);
            window.removeEventListener("mouseout", handleMouseOut);
            window.removeEventListener("touchstart", handleTouch);
            window.removeEventListener("touchmove", handleTouch);
        };
    }, [cursorX, cursorY, isMobile, isReady]);

    if (isMobile || !isReady) return null;

    return (
        <div className="custom-cursor-wrapper">
            {/* Central dot - fast following */}
            <motion.div
                className="fixed top-0 left-0 pointer-events-none z-[9999]"
                style={{
                    x: cursorXSpring,
                    y: cursorYSpring,
                }}
            >
                <motion.div
                    className="relative -translate-x-1/2 -translate-y-1/2 rounded-full"
                    animate={{
                        width: isClicking ? 4 : 8,
                        height: isClicking ? 4 : 8,
                        opacity: isVisible ? 1 : 0,
                        scale: isHovering ? 0 : 1,
                    }}
                    transition={{
                        type: "spring",
                        stiffness: 500,
                        damping: 30,
                    }}
                    style={{
                        background: "linear-gradient(135deg, #ff4d00, #ff6b35)",
                        boxShadow: "0 0 15px rgba(255, 77, 0, 0.8)",
                    }}
                />
            </motion.div>

            {/* Delayed trailing ring */}
            <motion.div
                className="fixed top-0 left-0 pointer-events-none z-[9998]"
                style={{
                    x: delayedX,
                    y: delayedY,
                }}
            >
                <motion.div
                    className="relative -translate-x-1/2 -translate-y-1/2 rounded-full"
                    animate={{
                        width: isHovering ? 60 : 40,
                        height: isHovering ? 60 : 40,
                        opacity: isVisible ? (isHovering ? 0.5 : 0.3) : 0,
                        scale: isClicking ? 0.9 : 1,
                    }}
                    transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 25,
                    }}
                    style={{
                        border: "2px solid rgba(255, 77, 0, 0.6)",
                        background: "radial-gradient(circle, rgba(255, 77, 0, 0.1) 0%, transparent 70%)",
                    }}
                />
            </motion.div>

            {/* Outer glow ring - even more delayed */}
            <motion.div
                className="fixed top-0 left-0 pointer-events-none z-[9997]"
                style={{
                    x: delayedX,
                    y: delayedY,
                }}
            >
                <motion.div
                    className="relative -translate-x-1/2 -translate-y-1/2 rounded-full"
                    animate={{
                        width: isHovering ? 80 : 0,
                        height: isHovering ? 80 : 0,
                        opacity: isVisible && isHovering ? 0.3 : 0,
                    }}
                    transition={{
                        type: "spring",
                        stiffness: 200,
                        damping: 30,
                    }}
                    style={{
                        background: "radial-gradient(circle, rgba(255, 77, 0, 0.3) 0%, transparent 70%)",
                        filter: "blur(8px)",
                    }}
                />
            </motion.div>

            {/* Hover state - expanding circle */}
            {isHovering && (
                <motion.div
                    className="fixed top-0 left-0 pointer-events-none z-[9999]"
                    style={{
                        x: cursorXSpring,
                        y: cursorYSpring,
                    }}
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    exit={{ scale: 0 }}
                >
                    <motion.div
                        className="relative -translate-x-1/2 -translate-y-1/2 rounded-full flex items-center justify-center"
                        animate={{
                            width: 60,
                            height: 60,
                            rotate: 360,
                        }}
                        transition={{
                            width: { type: "spring", stiffness: 400, damping: 28 },
                            height: { type: "spring", stiffness: 400, damping: 28 },
                            rotate: { duration: 8, repeat: Infinity, ease: "linear" },
                        }}
                        style={{
                            background: "linear-gradient(135deg, rgba(255, 77, 0, 0.15), rgba(255, 107, 53, 0.15))",
                            border: "1px solid rgba(255, 77, 0, 0.3)",
                            boxShadow: "0 0 20px rgba(255, 77, 0, 0.4), inset 0 0 20px rgba(255, 77, 0, 0.1)",
                        }}
                    />
                </motion.div>
            )}
        </div>
    );
};
