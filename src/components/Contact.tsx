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
                    y: 30,
                    opacity: 0,
                    duration: 0.7,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: section,
                        start: "top 75%",
                        toggleActions: "play none none none",
                    },
                });
            }

            // Headline - split into words and reveal with clip-path
            const h2 = section.querySelector("h2");
            if (h2) {
                gsap.from(h2, {
                    y: 80,
                    clipPath: "inset(0 0 100% 0)",
                    duration: 1,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: h2,
                        start: "top 88%",
                        toggleActions: "play none none none",
                    },
                });
            }

            // Body text and buttons stagger
            const bottomContent = section.querySelector(".contact-bottom");
            if (bottomContent) {
                const children = bottomContent.children;
                gsap.from(children, {
                    y: 40,
                    opacity: 0,
                    duration: 0.7,
                    stagger: 0.12,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: bottomContent,
                        start: "top 85%",
                        toggleActions: "play none none none",
                    },
                });
            }

            // CTA buttons - scale up entrance
            const buttons = gsap.utils.toArray<HTMLElement>(".contact-btn");
            buttons.forEach((btn, i) => {
                gsap.from(btn, {
                    scale: 0.85,
                    opacity: 0,
                    duration: 0.5,
                    delay: 0.3 + i * 0.1,
                    ease: "back.out(1.4)",
                    scrollTrigger: {
                        trigger: btn,
                        start: "top 92%",
                        toggleActions: "play none none none",
                    },
                });
            });

            // Social links - wave entrance from bottom
            const socialLinks = gsap.utils.toArray<HTMLElement>(".contact-links a");
            socialLinks.forEach((link, i) => {
                gsap.from(link, {
                    y: 40,
                    opacity: 0,
                    duration: 0.6,
                    delay: i * 0.15,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: section.querySelector(".contact-links"),
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
