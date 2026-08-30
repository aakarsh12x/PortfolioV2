"use client";

import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useSafeReducedMotion } from "@/hooks/useSafeReducedMotion";
import { SKILLS } from "@/data/portfolio";

gsap.registerPlugin(ScrollTrigger);

export const Skills = () => {
    const sectionRef = useRef<HTMLElement>(null);
    const reduceMotion = useSafeReducedMotion();

    useGSAP(
        () => {
            if (reduceMotion || !sectionRef.current) return;

            // Heading entrance
            const heading = sectionRef.current.querySelector(".toolkit-heading");
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

            // Each skill category row - gentle fade
            const rows = gsap.utils.toArray<HTMLElement>(".toolkit-index article");
            rows.forEach((row, i) => {
                gsap.from(row, {
                    y: 16,
                    opacity: 0,
                    duration: 0.5,
                    delay: i * 0.08,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: row,
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
            id="skills"
            className="toolkit-section"
            aria-labelledby="toolkit-title"
        >
            <div className="toolkit-shell">
                <header className="toolkit-heading">
                    <p>Working toolkit</p>
                    <h2 id="toolkit-title">Technology is a means. Shipping is the point.</h2>
                </header>
                <div className="toolkit-index">
                    {SKILLS.map((group, index) => (
                        <article key={group.category}>
                            <div className="toolkit-index__title">
                                <span>{String(index + 1).padStart(2, "0")}</span>
                                <h3>{group.category}</h3>
                            </div>
                            <ul>
                                {group.items.map((item) => (
                                    <li key={item}>{item}</li>
                                ))}
                            </ul>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
};
