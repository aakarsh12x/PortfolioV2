"use client";

import { ArrowUpRight } from "lucide-react";
import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useSafeReducedMotion } from "@/hooks/useSafeReducedMotion";

gsap.registerPlugin(ScrollTrigger);

export const Contact = () => {
    const sectionRef = useRef<HTMLElement>(null);
    const reduceMotion = useSafeReducedMotion();

    useGSAP(
        () => {
            if (reduceMotion || !sectionRef.current) return;

            const section = sectionRef.current;

            // Status line entrance
            const status = section.querySelector(".contact-status");
            if (status) {
                gsap.from(status, {
                    y: 16,
                    opacity: 0,
                    duration: 0.5,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: section,
                        start: "top 80%",
                        toggleActions: "play none none none",
                    },
                });
            }

            // Headline entrance
            const h2 = section.querySelector("h2");
            if (h2) {
                gsap.from(h2, {
                    y: 24,
                    opacity: 0,
                    duration: 0.6,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: h2,
                        start: "top 88%",
                        toggleActions: "play none none none",
                    },
                });
            }

            // Bottom content gentle fade
            const bottomContent = section.querySelector(".contact-bottom");
            if (bottomContent) {
                gsap.from(bottomContent, {
                    y: 20,
                    opacity: 0,
                    duration: 0.6,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: bottomContent,
                        start: "top 88%",
                        toggleActions: "play none none none",
                    },
                });
            }
        },
        { scope: sectionRef, dependencies: [reduceMotion] }
    );

    return (
        <section
            ref={sectionRef}
            id="contact"
            className="contact-section"
            aria-labelledby="contact-title"
        >
            <div className="contact-shell">
                <p className="contact-status">
                    <span aria-hidden="true" />
                    Available for the right team
                </p>
                <h2 id="contact-title">
                    Bring me the problem that keeps coming back.
                </h2>
                <div className="contact-bottom">
                    <p>
                        I'm looking for product-minded engineering work with real
                        ownership, demanding constraints, and people worth learning from.
                    </p>
                    <div className="contact-buttons">
                        <a
                            href="mailto:singhaakarsh28@gmail.com"
                            className="contact-btn contact-btn--primary"
                        >
                            Email Me <ArrowUpRight aria-hidden="true" />
                        </a>
                        <a
                            href="https://wa.me/918739018155"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="contact-btn contact-btn--secondary"
                        >
                            WhatsApp / Call <ArrowUpRight aria-hidden="true" />
                        </a>
                    </div>
                </div>
                <nav className="contact-links" aria-label="Social links">
                    <a
                        href="https://github.com/aakarsh12x"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        GitHub <ArrowUpRight aria-hidden="true" />
                    </a>
                    <a
                        href="https://www.linkedin.com/in/aakarsh-singh-b27a5228b/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        LinkedIn <ArrowUpRight aria-hidden="true" />
                    </a>
                </nav>
            </div>
        </section>
    );
};
