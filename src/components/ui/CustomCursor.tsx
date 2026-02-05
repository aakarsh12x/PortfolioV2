"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export const CustomCursor = () => {
    // Aggressive mobile detection - start with true to prevent flash
    const [isMobile, setIsMobile] = useState(true);
    const [isReady, setIsReady] = useState(false);

    useEffect(() => {
        // Multiple checks for mobile devices
        const checkMobile = () => {
            const hasCoarsePointer = window.matchMedia("(pointer: coarse)").matches;
            const hasNoHover = window.matchMedia("(hover: none)").matches;
            const isSmallScreen = window.innerWidth < 1024;
            const isTouchCapable = 'ontouchstart' in window || navigator.maxTouchPoints > 0;

            // If ANY of these are true, it's mobile
            const mobile = hasCoarsePointer || hasNoHover || isSmallScreen || isTouchCapable;
            setIsMobile(mobile);
            setIsReady(true);
        };

        checkMobile();
        window.addEventListener("resize", checkMobile);
        return () => window.removeEventListener("resize", checkMobile);
    }, []);

    // All other hooks must be called unconditionally (React rules)
    const [isHovering, setIsHovering] = useState(false);
    const [isClicking, setIsClicking] = useState(false);
    const [isVisible, setIsVisible] = useState(false);

    const cursorX = useMotionValue(-100);
    const cursorY = useMotionValue(-100);

    const springConfig = { damping: 30, stiffness: 500 };
    const cursorXSpring = useSpring(cursorX, springConfig);
    const cursorYSpring = useSpring(cursorY, springConfig);

    useEffect(() => {
        // Don't attach ANY listeners on mobile or before ready
        if (isMobile || !isReady) return;

        // Filter out touch-generated mouse events
        let lastTouchTime = 0;

        const moveCursor = (e: MouseEvent) => {
            // Ignore mouse events that come from touch (within 500ms of touch)
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

        // Track touch events to filter mouse events
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

    // Return null on mobile - no rendering at all
    if (isMobile || !isReady) return null;

    return (
        <div className="custom-cursor-wrapper">
            {/* Main cursor dot */}
            <motion.div
                className="fixed top-0 left-0 pointer-events-none z-[9999] mix-blend-difference"
                style={{
                    x: cursorXSpring,
                    y: cursorYSpring,
                }}
            >
                <motion.div
                    className="relative -translate-x-1/2 -translate-y-1/2 rounded-full bg-white"
                    animate={{
                        width: isHovering ? 50 : isClicking ? 6 : 10,
                        height: isHovering ? 50 : isClicking ? 6 : 10,
                        opacity: isVisible ? 1 : 0,
                    }}
                    transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 28,
                    }}
                />
            </motion.div>

            {/* Outer ring with glow */}
            <motion.div
                className="fixed top-0 left-0 pointer-events-none z-[9998]"
                style={{
                    x: cursorXSpring,
                    y: cursorYSpring,
                }}
            >
                <motion.div
                    className="relative -translate-x-1/2 -translate-y-1/2 rounded-full border-2"
                    animate={{
                        width: isHovering ? 70 : 35,
                        height: isHovering ? 70 : 35,
                        opacity: isVisible ? (isHovering ? 0.8 : 0.4) : 0,
                        borderColor: isHovering ? "#ff4d00" : "rgba(255, 77, 0, 0.5)",
                    }}
                    transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 25,
                    }}
                    style={{
                        boxShadow: isHovering
                            ? "0 0 25px rgba(255, 77, 0, 0.6), inset 0 0 15px rgba(255, 77, 0, 0.3)"
                            : "0 0 12px rgba(255, 77, 0, 0.25)",
                    }}
                />
            </motion.div>
        </div>
    );
};
