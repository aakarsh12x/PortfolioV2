"use client";

import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useSafeReducedMotion } from "@/hooks/useSafeReducedMotion";
import { ACHIEVEMENTS } from "@/data/portfolio";
import { CarCard } from "./ui/CarCard";

gsap.registerPlugin(ScrollTrigger);

// Characters used for the scramble effect before resolving to the final value
const SCRAMBLE_CHARS = "0123456789%+k";

function scrambleText(element: HTMLElement, finalText: string, duration: number = 1.2) {
    const length = finalText.length;
    let frame = 0;
    const totalFrames = Math.floor(duration * 60); // ~60fps

    const interval = setInterval(() => {
        frame++;
        const progress = frame / totalFrames;

        let display = "";
        for (let i = 0; i < length; i++) {
            // Characters resolve left-to-right as progress increases
            if (progress > (i / length) * 0.7 + 0.3) {
                display += finalText[i];
            } else {
                display += SCRAMBLE_CHARS[Math.floor(Math.random() * SCRAMBLE_CHARS.length)];
            }
        }
        element.textContent = display;

        if (frame >= totalFrames) {
            clearInterval(interval);
            element.textContent = finalText;
        }
    }, 1000 / 60);

    return interval;
}

export const Achievements = () => {
    const sectionRef = useRef<HTMLElement>(null);
    const reduceMotion = useSafeReducedMotion();

    useGSAP(
        () => {
            if (reduceMotion || !sectionRef.current) return;

            // Section heading entrance
            const heading = sectionRef.current.querySelector(".proof-heading");
            if (heading) {
                gsap.from(heading, {
                    y: 50,
                    opacity: 0,
                    duration: 0.9,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: heading,
                        start: "top 85%",
                        toggleActions: "play none none none",
                    },
                });
            }

            // Each achievement card
            const articles = gsap.utils.toArray<HTMLElement>(".proof-list article");
            articles.forEach((article, i) => {
                const isEven = i % 2 === 0;

                // Stagger entrance from alternate sides
                gsap.from(article, {
                    x: isEven ? -60 : 60,
                    opacity: 0,
                    duration: 0.8,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: article,
                        start: "top 90%",
                        toggleActions: "play none none none",
                    },
                });

                // Achievement value - scramble text effect
                const valueEl = article.querySelector<HTMLElement>("strong");
                if (valueEl) {
                    const finalText = valueEl.textContent || "";
                    let scrambleInterval: ReturnType<typeof setInterval> | null = null;

                    ScrollTrigger.create({
                        trigger: article,
                        start: "top 85%",
                        onEnter: () => {
                            if (!scrambleInterval) {
                                scrambleInterval = scrambleText(valueEl, finalText, 1.2);
                            }
                        },
                        once: true,
                    });
                }

                // Icon - rotate and scale in
                const icon = article.querySelector<HTMLElement>("svg");
                if (icon) {
                    gsap.from(icon, {
                        scale: 0,
                        rotation: -45,
                        opacity: 0,
                        duration: 0.6,
                        delay: 0.2,
                        ease: "back.out(1.7)",
                        scrollTrigger: {
                            trigger: article,
                            start: "top 88%",
                            toggleActions: "play none none none",
                        },
                    });
                }
            });
        },
        { scope: sectionRef, dependencies: [reduceMotion] }
    );

    return (
        <section
            ref={sectionRef}
            className="proof-section"
            aria-labelledby="proof-title"
        >
            <div className="proof-shell">
                <header className="proof-heading">
                    <p>Evidence over adjectives</p>
                    <h2 id="proof-title">A few receipts.</h2>
                </header>
                <div className="proof-list">
                    {ACHIEVEMENTS.map((item, index) => (
                        <article key={item.label}>
                            <span>{String(index + 1).padStart(2, "0")}</span>
                            <div>
                                <strong>{item.value}</strong>
                                <h3>{item.label}</h3>
                            </div>
                            <p>{item.desc}</p>
                            <item.icon aria-hidden="true" />
                        </article>
                    ))}
                </div>
                <div style={{ marginTop: "clamp(2rem, 5vw, 4rem)" }}>
                    <CarCard />
                </div>
            </div>
        </section>
    );
};
