"use client";

import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useSafeReducedMotion } from "@/hooks/useSafeReducedMotion";

gsap.registerPlugin(ScrollTrigger);

interface HorizontalPanProps {
    children: React.ReactNode;
}

export function HorizontalPan({ children }: HorizontalPanProps) {
    const wrapRef = useRef<HTMLDivElement>(null);
    const trackRef = useRef<HTMLDivElement>(null);
    const reduceMotion = useSafeReducedMotion();

    useGSAP(
        () => {
            if (reduceMotion || !wrapRef.current || !trackRef.current) return;

            const trackWidth = trackRef.current.scrollWidth;
            const viewportWidth = window.innerWidth;
            const distance = trackWidth - viewportWidth;

            if (distance <= 0) return;

            gsap.to(trackRef.current, {
                x: -distance,
                ease: "none",
                scrollTrigger: {
                    trigger: wrapRef.current,
                    start: "top top",
                    end: () => `+=${distance}`,
                    pin: true,
                    scrub: 1,
                    invalidateOnRefresh: true,
                    id: "horizontal-scroll",
                },
            });
        },
        { scope: wrapRef, dependencies: [reduceMotion] }
    );

    return (
        <section ref={wrapRef} className="relative w-full overflow-hidden">
            <div ref={trackRef} className="flex h-[100dvh] w-max items-center">
                {children}
            </div>
        </section>
    );
}
