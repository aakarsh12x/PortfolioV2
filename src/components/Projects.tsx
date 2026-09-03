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

            // Each project - gentle fade entrance
            const projects = gsap.utils.toArray<HTMLElement>(".work-project");
            projects.forEach((project) => {
                gsap.from(project, {
                    y: 24,
                    opacity: 0,
                    duration: 0.6,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: project,
                        start: "top 90%",
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
            id="projects"
            className="work-section"
            aria-labelledby="work-title"
        >
            <div className="work-shell">
                <header className="work-heading">
                    <p>Selected work</p>
                    <h2 id="work-title">Ideas are cheap. Here&apos;s what shipped.</h2>
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
                                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                />
                                <span className="work-project__overlay-pill">
                                    View live <ArrowUpRight aria-hidden="true" />
                                </span>
                            </a>
                            <div className="work-project__copy">
                                <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                                    <div className="work-project__header">
                                        <h3>{project.title}</h3>
                                        <span>{String(index + 1).padStart(2, "0")}</span>
                                    </div>
                                    <p>{project.desc}</p>
                                </div>
                                <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem", marginTop: "0.5rem" }}>
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
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
};
