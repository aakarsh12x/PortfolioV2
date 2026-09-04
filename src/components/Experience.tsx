"use client";

import { ArrowUpRight } from "lucide-react";
import { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useSafeReducedMotion } from "@/hooks/useSafeReducedMotion";
import { COLLEGE_EXPERIENCE, EXPERIENCE } from "@/data/portfolio";

gsap.registerPlugin(ScrollTrigger);

export const Experience = () => {
    const sectionRef = useRef<HTMLElement>(null);
    const headingRef = useRef<HTMLElement>(null);
    const reduceMotion = useSafeReducedMotion();
    const [expandedIds, setExpandedIds] = useState<Record<number, boolean>>({});

    const toggleDescription = (id: number) => {
        setExpandedIds((prev) => ({
            ...prev,
            [id]: !prev[id],
        }));
    };

    useGSAP(
        () => {
            if (reduceMotion || !sectionRef.current) return;

            // Heading entrance
            const heading = headingRef.current;
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

            // Each experience role - gentle fade
            const roles = gsap.utils.toArray<HTMLElement>(".experience-role");
            roles.forEach((role) => {
                gsap.from(role, {
                    y: 20,
                    opacity: 0,
                    duration: 0.5,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: role,
                        start: "top 90%",
                        toggleActions: "play none none none",
                    },
                });
            });

            // Community section - gentle fade
            const communityHeader = sectionRef.current.querySelector(".experience-community__header");
            const communityRows = sectionRef.current.querySelectorAll(".experience-community__row");
            if (communityHeader) {
                gsap.from(communityHeader, {
                    y: 20,
                    opacity: 0,
                    duration: 0.6,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: communityHeader,
                        start: "top 88%",
                        toggleActions: "play none none none",
                    },
                });
            }
            if (communityRows.length) {
                communityRows.forEach((row, i) => {
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
            }
        },
        { scope: sectionRef, dependencies: [reduceMotion] }
    );

    return (
        <section
            ref={sectionRef}
            id="experience"
            className="experience-section"
            aria-labelledby="experience-title"
        >
            <div className="experience-shell">
                <header ref={headingRef} className="experience-heading">
                    <p className="experience-heading__label">Selected experience</p>
                    <h2 id="experience-title">Work that survived contact with reality.</h2>
                    <p className="experience-heading__intro">
                        I like the part after the prototype: real users, real constraints,
                        and systems that still have to feel fast on a bad connection.
                    </p>
                </header>

                <div className="experience-ledger">
                    {EXPERIENCE.map((job, index) => (
                        <article
                            key={job.id}
                            className={`experience-role${job.current ? " experience-role--current" : ""}`}
                        >
                            <div className="experience-role__rail">
                                <span>{String(index + 1).padStart(2, "0")}</span>
                                <p>{job.period}</p>
                            </div>

                            <div className="experience-role__story">
                                <div className="experience-role__identity">
                                    <p>{job.current ? "Building now" : job.location}</p>
                                    <h3>{job.role}</h3>
                                    {job.url ? (
                                        <a href={job.url} target="_blank" rel="noopener noreferrer">
                                            {job.company} <ArrowUpRight aria-hidden="true" />
                                        </a>
                                    ) : (
                                        <strong>{job.company}</strong>
                                    )}
                                </div>

                                <div className="experience-role__brief">
                                    <button
                                        type="button"
                                        className={`experience-role__toggle ${expandedIds[job.id] ? "experience-role__toggle--active" : ""}`}
                                        onClick={() => toggleDescription(job.id)}
                                        aria-expanded={Boolean(expandedIds[job.id])}
                                        aria-controls={`exp-desc-${job.id}`}
                                    >
                                        <span className="experience-role__toggle-indicator" aria-hidden="true">
                                            {expandedIds[job.id] ? "−" : "+"}
                                        </span>
                                        <span className="experience-role__toggle-label">
                                            {expandedIds[job.id] ? "Close Details" : "Overview & Impact"}
                                        </span>
                                    </button>

                                    <AnimatePresence initial={false}>
                                        {expandedIds[job.id] && (
                                            <motion.div
                                                id={`exp-desc-${job.id}`}
                                                key="desc"
                                                initial={{ opacity: 0, height: 0 }}
                                                animate={{ opacity: 1, height: "auto" }}
                                                exit={{ opacity: 0, height: 0 }}
                                                transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                                                className="experience-role__dropdown"
                                                onAnimationComplete={() => {
                                                    ScrollTrigger.refresh();
                                                }}
                                            >
                                                {job.points && job.points.length > 0 ? (
                                                    <ul className="experience-role__points">
                                                        {job.points.map((point, i) => (
                                                            <li key={i}>{point}</li>
                                                        ))}
                                                    </ul>
                                                ) : (
                                                    <p className="experience-role__desc">{job.description}</p>
                                                )}
                                            </motion.div>
                                        )}
                                    </AnimatePresence>

                                    <ul className="experience-role__tech" aria-label={`Technologies used at ${job.company}`}>
                                        {job.tech.map((technology) => (
                                            <li key={technology}>{technology}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>

                            <dl
                                className="experience-role__impact"
                                aria-label={`${job.company} outcomes`}
                            >
                                {job.metrics.map((metric) => (
                                    <div key={metric.label}>
                                        <dt>{metric.label}</dt>
                                        <dd>{metric.value}</dd>
                                    </div>
                                ))}
                            </dl>
                        </article>
                    ))}
                </div>

                <div className="experience-community">
                    <header className="experience-community__header">
                        <span className="experience-community__index">01.B / Ecosystem &amp; Community</span>
                        <h3>Leadership is another kind of system design.</h3>
                        <p className="experience-community__manifesto">
                            Directing ecosystem partnerships, digital brand architecture, and flagship student initiatives at IIIT Bhopal.
                        </p>
                    </header>

                    <div className="experience-community__ledger">
                        {COLLEGE_EXPERIENCE.map((role) => (
                            <article key={`${role.role}-${role.organization}`} className="experience-community__row">
                                <div className="experience-community__rail">
                                    <span className="experience-community__num">{role.id}</span>
                                    <span className="experience-community__tenure">{role.period}</span>
                                </div>

                                <div className="experience-community__body">
                                    <div className="experience-community__identity">
                                        <p className="experience-community__dept">{role.organization} <span>/</span> {role.institution}</p>
                                        <h4>{role.role}</h4>
                                    </div>
                                    <p className="experience-community__narrative">{role.description}</p>
                                </div>

                                <div className="experience-community__metrics">
                                    {role.metrics.map((m) => (
                                        <div key={m.label} className="experience-community__metric">
                                            <strong>{m.value}</strong>
                                            <span>{m.label}</span>
                                        </div>
                                    ))}
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};
