"use client";

import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useSafeReducedMotion } from "@/hooks/useSafeReducedMotion";
import { ACHIEVEMENTS } from "@/data/portfolio";
import { CarCard } from "./ui/CarCard";

gsap.registerPlugin(ScrollTrigger);

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
                    y: 24,
                    opacity: 0,
                    duration: 0.6,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: heading,
                        start: "top 88%",
                        toggleActions: "play none none none",
                    },
                });
            }

            // Each achievement row - gentle subtle fade
            const articles = gsap.utils.toArray<HTMLElement>(".proof-list article");
            articles.forEach((article) => {
                gsap.from(article, {
                    y: 16,
                    opacity: 0,
                    duration: 0.5,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: article,
                        start: "top 92%",
                        toggleActions: "play none none none",
                    },
                });
            });
        },
        { scope: sectionRef, dependencies: [reduceMotion] }
    );

    return (
        <section
            ref={sectionRef}
            id="achievements"
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
