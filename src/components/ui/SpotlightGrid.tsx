"use client";

import React, { useRef, useEffect } from "react";

export const SpotlightGrid = () => {
    const gridRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const grid = gridRef.current;
        if (!grid) return;

        const handleMouseMove = (e: MouseEvent) => {
            const rect = grid.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            grid.style.setProperty("--mouse-x", `${x}px`);
            grid.style.setProperty("--mouse-y", `${y}px`);
        };

        window.addEventListener("mousemove", handleMouseMove);
        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
        };
    }, []);

    return (
        <>
            {/* Ambient Background Grid */}
            <div className="grid-overlay-base" />

            {/* Interactive Spotlight Glow Grid */}
            <div 
                ref={gridRef} 
                className="grid-overlay-spotlight" 
            />
        </>
    );
};
