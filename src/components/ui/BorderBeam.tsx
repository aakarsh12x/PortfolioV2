"use client";

import React from "react";

interface BorderBeamProps {
    size?: number;
    duration?: number;
    anchor?: number;
    borderWidth?: number;
    colorFrom?: string;
    colorTo?: string;
    delay?: number;
    className?: string;
}

export const BorderBeam = ({
    size = 250,
    duration = 10,
    anchor = 90,
    borderWidth = 1.5,
    colorFrom = "var(--accent)",
    colorTo = "transparent",
    delay = 0,
    className = "",
}: BorderBeamProps) => {
    return (
        <div
            style={
                {
                    "--size": size,
                    "--duration": duration,
                    "--anchor": anchor,
                    "--border-width": borderWidth,
                    "--color-from": colorFrom,
                    "--color-to": colorTo,
                    "--delay": delay,
                } as React.CSSProperties
            }
            className={`pointer-events-none absolute inset-0 rounded-[inherit] border border-transparent [mask-clip:padding-box,border-box] [mask-composite:intersect] [mask-image:linear-gradient(transparent,transparent),linear-gradient(white,white)] ${className}`}
        >
            <div
                className="absolute aspect-square w-[calc(var(--size)*1px)]"
                style={{
                    background: "linear-gradient(to left, var(--color-from), var(--color-to), transparent)",
                    offsetPath: "rect(0 auto auto 0 round calc(var(--border-width)*1px))",
                    offsetAnchor: "var(--anchor)% 50%",
                    animation: "border-beam var(--duration)s linear infinite",
                    animationDelay: `${delay}s`,
                }}
            />
        </div>
    );
};
