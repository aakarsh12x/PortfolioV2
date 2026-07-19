"use client";

import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useSafeReducedMotion } from "@/hooks/useSafeReducedMotion";
import { PROJECTS } from "@/data/portfolio";

gsap.registerPlugin(ScrollTrigger);

export const Projects = () => {
    const sectionRef = useRef<HTMLElement>(null);
    const reduceMotion = useSafeReducedMotion();

    useGSAP(
        () => {
            if (reduceMotion || !sectionRef.current) return;

            // Section heading entrance
            const heading = sectionRef.current.querySelector(".work-heading");
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

            // Each project - image scale-up on scroll + copy stagger
            const projects = gsap.utils.toArray<HTMLElement>(".work-project");
            projects.forEach((project) => {
                const visual = project.querySelector(".work-project__visual");
                const img = project.querySelector<HTMLElement>(".work-project__visual img");
                const copy = project.querySelector(".work-project__copy");

                // Image: start scaled down and slightly transparent, scrub to full
                if (img && visual) {
                    gsap.fromTo(
                        img,
                        { scale: 1.15 },
                        {
                            scale: 1,
                            ease: "none",
                            scrollTrigger: {
                                trigger: visual,
                                start: "top 95%",
                                end: "bottom 20%",
                                scrub: 1.5,
                            },
                        }
                    );

                    // Visual container entrance with clip-path reveal
                    gsap.from(visual, {
                        clipPath: "inset(15% 0 15% 0)",
                        opacity: 0,
                        duration: 1,
                        ease: "power3.out",
                        scrollTrigger: {
                            trigger: visual,
                            start: "top 88%",
                            toggleActions: "play none none none",
                        },
                    });
                }

                // Copy: stagger reveal of child elements
                if (copy) {
                    const copyChildren = copy.children;
                    gsap.from(copyChildren, {
                        y: 40,
                        opacity: 0,
                        duration: 0.7,
                        stagger: 0.08,
                        ease: "power3.out",
                        scrollTrigger: {
                            trigger: copy,
                            start: "top 88%",
                            toggleActions: "play none none none",
                        },
                    });
                }
            });

            // Magnetic overlay pill animation on hover
            const visuals = gsap.utils.toArray<HTMLElement>(".work-project__visual");
            visuals.forEach((visual) => {
                const pill = visual.querySelector<HTMLElement>(".work-project__overlay-pill");
                if (!pill) return;

                const onMouseMove = (e: MouseEvent) => {
                    const rect = visual.getBoundingClientRect();
                    const x = e.clientX - rect.left - rect.width / 2;
                    const y = e.clientY - rect.top - rect.height / 2;

                    gsap.to(pill, {
                        x: x * 0.35,
                        y: y * 0.35,
                        duration: 0.35,
                        ease: "power2.out",
                    });
                };

                const onMouseLeave = () => {
                    gsap.to(pill, {
                        x: 0,
                        y: 0,
                        duration: 0.65,
                        ease: "elastic.out(1.1, 0.6)",
                    });
                };

                visual.addEventListener("mousemove", onMouseMove);
                visual.addEventListener("mouseleave", onMouseLeave);
            });
        },
        { scope: sectionRef, dependencies: [reduceMotion] }
    );

    return (
        <section
            ref={sectionRef}
            id="projects"
            className="work-section"
            aria-labelledby="work-title"
        >
            <div className="work-shell">
                <header className="work-heading">
                    <p>Selected work</p>
                    <h2 id="work-title">Ideas are cheap. Here's what shipped.</h2>
                </header>

                <div className="work-list">
                    {PROJECTS.map((project, index) => (
                        <article key={project.title} className="work-project">
                            <a
                                className="work-project__visual"
                                href={project.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={`Open ${project.title}`}
                            >
                                <Image
                                    src={project.image}
                                    alt={`${project.title} product interface`}
                                    fill
                                    sizes="(max-width: 768px) 100vw, 58vw"
                                />
                                <span className="work-project__overlay-pill">
                                    View live <ArrowUpRight aria-hidden="true" />
                                </span>
                            </a>
                            <div className="work-project__copy">
                                <span>{String(index + 1).padStart(2, "0")}</span>
                                <h3>{project.title}</h3>
                                <p>{project.desc}</p>
                                <ul aria-label={`${project.title} technologies`}>
                                    {project.tech.map((technology) => (
                                        <li key={technology}>{technology}</li>
                                    ))}
                                </ul>
                                <a
                                    href={project.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Explore project <ArrowUpRight aria-hidden="true" />
                                </a>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
};
