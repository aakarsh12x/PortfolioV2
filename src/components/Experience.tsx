"use client";

import { ArrowUpRight } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { useSafeReducedMotion } from "@/hooks/useSafeReducedMotion";
import { COLLEGE_EXPERIENCE, EXPERIENCE } from "@/data/portfolio";

const EASE = [0.22, 1, 0.36, 1] as const;

const ExperienceRow = ({ job, index }: { job: (typeof EXPERIENCE)[number]; index: number }) => {
    const ref = useRef<HTMLElement>(null);
    const inView = useInView(ref, { once: true, amount: 0.18 });
    const reduceMotion = useSafeReducedMotion();

    return (
        <motion.article ref={ref} className={`experience-role${job.current ? " experience-role--current" : ""}`}
            initial={reduceMotion ? false : { opacity: 0, y: 42 }} animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.75, delay: index * 0.06, ease: EASE }}>
            <div className="experience-role__rail">
                <span>{String(index + 1).padStart(2, "0")}</span>
                <p>{job.period}</p>
            </div>

            <div className="experience-role__story">
                <div className="experience-role__identity">
                    <p>{job.current ? "Building now" : job.location}</p>
                    <h3>{job.role}</h3>
                    {job.url ? (
                        <a href={job.url} target="_blank" rel="noopener noreferrer">{job.company} <ArrowUpRight aria-hidden="true" /></a>
                    ) : <strong>{job.company}</strong>}
                </div>

                <div className="experience-role__brief">
                    <p>{job.description}</p>
                    <ul aria-label={`Technologies used at ${job.company}`}>
                        {job.tech.map((technology) => <li key={technology}>{technology}</li>)}
                    </ul>
                </div>
            </div>

            <dl className="experience-role__impact" aria-label={`${job.company} outcomes`}>
                {job.metrics.map((metric) => (
                    <div key={metric.label}><dt>{metric.label}</dt><dd>{metric.value}</dd></div>
                ))}
            </dl>
        </motion.article>
    );
};

export const Experience = () => {
    const headingRef = useRef<HTMLDivElement>(null);
    const headingInView = useInView(headingRef, { once: true, amount: 0.35 });
    const reduceMotion = useSafeReducedMotion();

    return (
        <section id="experience" className="experience-section" aria-labelledby="experience-title">
            <div className="experience-shell">
                <motion.header ref={headingRef} className="experience-heading"
                    initial={reduceMotion ? false : { opacity: 0, y: 36 }} animate={headingInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8, ease: EASE }}>
                    <p className="experience-heading__label">Selected experience · 2025—Now</p>
                    <h2 id="experience-title">Work that survived contact with reality.</h2>
                    <p className="experience-heading__intro">I like the part after the prototype: real users, real constraints, and systems that still have to feel fast on a bad connection.</p>
                </motion.header>

                <div className="experience-ledger">
                    {EXPERIENCE.map((job, index) => <ExperienceRow key={job.id} job={job} index={index} />)}
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
                                <div><h4>{role.role}</h4><p>{role.organization}</p></div>
                                <span>{role.period}</span>
                            </article>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};
