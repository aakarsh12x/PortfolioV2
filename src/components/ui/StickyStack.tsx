"use client";

import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useSafeReducedMotion } from "@/hooks/useSafeReducedMotion";

gsap.registerPlugin(ScrollTrigger);

interface StickyStackProps {
    cards: React.ReactNode[];
}

export function StickyStack({ cards }: StickyStackProps) {
    const containerRef = useRef<HTMLDivElement>(null);
    const reduceMotion = useSafeReducedMotion();

    useGSAP(
        () => {
            if (reduceMotion || !containerRef.current) return;

            const cardEls = gsap.utils.toArray<HTMLElement>(".stack-card");
            if (cardEls.length <= 1) return;

            cardEls.forEach((card, i) => {
                // Pin all cards except the last one
                if (i < cardEls.length - 1) {
                    ScrollTrigger.create({
                        trigger: card,
                        start: "top top",
                        endTrigger: cardEls[cardEls.length - 1],
                        end: "top top",
                        pin: true,
                        pinSpacing: false,
                        id: `pin-${i}`,
                    });

                    // Scale down and fade out the card as the next one scrolls over it
                    gsap.to(card, {
                        scale: 0.92,
                        opacity: 0.55,
                        ease: "none",
                        scrollTrigger: {
                            trigger: cardEls[i + 1],
                            start: "top bottom",
                            end: "top top",
                            scrub: true,
                            id: `scale-${i}`,
                        },
                    });
                }
            });
        },
        { scope: containerRef, dependencies: [reduceMotion, cards] }
    );

    return (
        <div ref={containerRef} className="relative w-full">
            {cards.map((card, i) => (
                <div
                    key={i}
                    className="stack-card sticky top-0 min-h-[100dvh] w-full flex items-center justify-center overflow-hidden"
                >
                    {card}
                </div>
            ))}
        </div>
    );
}
