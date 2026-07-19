"use client";

import { ArrowUpRight } from "lucide-react";
import { useRef, useEffect } from "react";
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

    useGSAP(
        () => {
            if (reduceMotion || !sectionRef.current) return;

            // Heading entrance
            const heading = headingRef.current;
            if (heading) {
                gsap.from(heading, {
                    y: 60,
                    opacity: 0,
                    duration: 1,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: heading,
                        start: "top 85%",
                        end: "top 50%",
                        toggleActions: "play none none none",
                    },
                });
            }

            // Each experience role - stagger entrance
            const roles = gsap.utils.toArray<HTMLElement>(".experience-role");
            roles.forEach((role, i) => {
                gsap.from(role, {
                    y: 80,
                    opacity: 0,
                    duration: 0.9,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: role,
                        start: "top 88%",
                        end: "top 55%",
                        toggleActions: "play none none none",
                    },
                });

                // Animate the metric values with a count-up effect
                const metricValues = role.querySelectorAll<HTMLElement>(".experience-role__impact dd");
                metricValues.forEach((dd) => {
                    const text = dd.textContent || "";
                    gsap.from(dd, {
                        textContent: 0,
                        duration: 1.5,
                        delay: 0.3,
                        ease: "power2.out",
                        snap: { textContent: 1 },
                        scrollTrigger: {
                            trigger: dd,
                            start: "top 90%",
                            toggleActions: "play none none none",
                        },
                        onComplete: () => {
                            dd.textContent = text; // Restore original text with symbols
                        },
                    });
                });

                // Rail number scale-in
                const railNum = role.querySelector(".experience-role__rail > span");
                if (railNum) {
                    gsap.from(railNum, {
                        scale: 0,
                        opacity: 0,
                        duration: 0.6,
                        delay: 0.15,
                        ease: "back.out(1.7)",
                        scrollTrigger: {
                            trigger: role,
                            start: "top 85%",
                            toggleActions: "play none none none",
                        },
                    });
                }
            });

            // Community section - slide in
            const communityHeading = sectionRef.current.querySelector(".experience-community__heading");
            const communityRoles = sectionRef.current.querySelector(".experience-community__roles");
            if (communityHeading) {
                gsap.from(communityHeading, {
                    x: -60,
                    opacity: 0,
                    duration: 0.9,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: communityHeading,
                        start: "top 85%",
                        toggleActions: "play none none none",
                    },
                });
            }
            if (communityRoles) {
                const articles = communityRoles.querySelectorAll("article");
                articles.forEach((article, i) => {
                    gsap.from(article, {
                        x: 50,
                        opacity: 0,
                        duration: 0.7,
                        delay: i * 0.12,
                        ease: "power3.out",
                        scrollTrigger: {
                            trigger: communityRoles,
                            start: "top 85%",
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
                                    <p>{job.description}</p>
                                    <ul aria-label={`Technologies used at ${job.company}`}>
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
                    <div className="experience-community__heading">
                        <p>Beyond the commit</p>
                        <h3>Leadership is another kind of system design.</h3>
                    </div>
                    <div className="experience-community__roles">
                        {COLLEGE_EXPERIENCE.map((role) => (
                            <article key={`${role.role}-${role.organization}`}>
                                <role.icon aria-hidden="true" />
                                <div>
                                    <h4>{role.role}</h4>
                                    <p>{role.organization}</p>
                                </div>
                                <span>{role.period}</span>
                            </article>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};
