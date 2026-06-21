"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export const CustomCursor = () => {
    const [isMobile, setIsMobile] = useState(true);
    const [isReady, setIsReady] = useState(false);
    const [isHovering, setIsHovering] = useState(false);
    const [isClicking, setIsClicking] = useState(false);
    const [isVisible, setIsVisible] = useState(false);

    const cursorX = useMotionValue(-100);
    const cursorY = useMotionValue(-100);

    const springConfig = { damping: 28, stiffness: 400 };
    const cursorXSpring = useSpring(cursorX, springConfig);
    const cursorYSpring = useSpring(cursorY, springConfig);
    const delayedX = useSpring(cursorX, { damping: 30, stiffness: 200 });
    const delayedY = useSpring(cursorY, { damping: 30, stiffness: 200 });

    useEffect(() => {
        const checkMobile = () => {
            const mobile =
                window.matchMedia("(pointer: coarse)").matches ||
                window.matchMedia("(hover: none)").matches ||
                window.innerWidth < 1024 ||
                ('ontouchstart' in window || navigator.maxTouchPoints > 0);
            setIsMobile(mobile);
            setIsReady(true);
        };
        checkMobile();
        window.addEventListener("resize", checkMobile);
        return () => window.removeEventListener("resize", checkMobile);
    }, []);

    useEffect(() => {
        if (isMobile || !isReady) return;

        let lastTouchTime = 0;
        const moveCursor = (e: MouseEvent) => {
            if (Date.now() - lastTouchTime < 500) return;
            cursorX.set(e.clientX);
            cursorY.set(e.clientY);
            setIsVisible(true);
        };
        const onDown = () => setIsClicking(true);
        const onUp = () => setIsClicking(false);
        const onOver = (e: MouseEvent) => {
            if (Date.now() - lastTouchTime < 500) return;
            const t = e.target as HTMLElement;
            if (t.tagName === "A" || t.tagName === "BUTTON" || t.closest("a") || t.closest("button"))
                setIsHovering(true);
        };
        const onOut = () => setIsHovering(false);
        const onTouch = () => { lastTouchTime = Date.now(); };

        window.addEventListener("mousemove", moveCursor);
        window.addEventListener("mousedown", onDown);
        window.addEventListener("mouseup", onUp);
        window.addEventListener("mouseover", onOver);
        window.addEventListener("mouseout", onOut);
        window.addEventListener("touchstart", onTouch, { passive: true });
        window.addEventListener("touchmove", onTouch, { passive: true });

        return () => {
            window.removeEventListener("mousemove", moveCursor);
            window.removeEventListener("mousedown", onDown);
            window.removeEventListener("mouseup", onUp);
            window.removeEventListener("mouseover", onOver);
            window.removeEventListener("mouseout", onOut);
            window.removeEventListener("touchstart", onTouch);
            window.removeEventListener("touchmove", onTouch);
        };
    }, [cursorX, cursorY, isMobile, isReady]);

    if (isMobile || !isReady) return null;

    return (
        <div className="custom-cursor-wrapper">
            {/* Central dot — uses CSS variable directly, no JS color tracking needed */}
            <motion.div
                className="fixed top-0 left-0 pointer-events-none z-[9999]"
                style={{ x: cursorXSpring, y: cursorYSpring,  }}
            >
                <motion.div
                    className="relative -translate-x-1/2 -translate-y-1/2 rounded-full"
                    animate={{
                        width: isClicking ? 4 : 8,
                        height: isClicking ? 4 : 8,
                        opacity: isVisible ? 1 : 0,
                        scale: isHovering ? 1.5 : 1,
                    }}
                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                    style={{
                        background: "var(--accent)",
                    }}
                />
            </motion.div>

            {/* Trailing ring */}
            <motion.div
                className="fixed top-0 left-0 pointer-events-none z-[9998]"
                style={{ x: delayedX, y: delayedY,  }}
            >
                <motion.div
                    className="relative -translate-x-1/2 -translate-y-1/2 rounded-full"
                    animate={{
                        width: isHovering ? 60 : 40,
                        height: isHovering ? 60 : 40,
                        opacity: isVisible ? (isHovering ? 0.5 : 0.3) : 0,
                        scale: isClicking ? 0.9 : 1,
                    }}
                    transition={{ type: "spring", stiffness: 300, damping: 25 }}
                    style={{
                        border: "2px solid rgba(var(--accent-r),var(--accent-g),var(--accent-b),0.6)",
                        background: "radial-gradient(circle, rgba(var(--accent-r),var(--accent-g),var(--accent-b),0.1) 0%, transparent 70%)",
                    }}
                />
            </motion.div>
        </div>
    );
};
