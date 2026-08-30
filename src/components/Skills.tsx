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

            // Each skill category row - stagger entrance
            const rows = gsap.utils.toArray<HTMLElement>(".toolkit-index article");
            rows.forEach((row, i) => {
                // Row slides in from left
                gsap.from(row, {
                    x: -50,
                    opacity: 0,
                    duration: 0.7,
                    delay: i * 0.1,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: row,
                        start: "top 90%",
                        toggleActions: "play none none none",
                    },
                });

                // Individual skill items stagger within each row
                const items = row.querySelectorAll("li");
                gsap.from(items, {
                    y: 20,
                    opacity: 0,
                    duration: 0.45,
                    stagger: 0.05,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: row,
                        start: "top 85%",
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
                    <h2 id="toolkit-title">
                        Technology is a means. Shipping is the point.
                    </h2>
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
