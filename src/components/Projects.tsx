"use client";

import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { PROJECTS } from "@/data/portfolio";

export const Projects = () => (
    <section id="projects" className="work-section" aria-labelledby="work-title">
        <div className="work-shell">
            <header className="work-heading">
                <p>Selected work · Built end to end</p>
                <h2 id="work-title">Ideas are cheap. Here’s what shipped.</h2>
            </header>

            <div className="work-list">
                {PROJECTS.map((project, index) => (
                    <article key={project.title} className="work-project">
                        <a className="work-project__visual" href={project.url} target="_blank" rel="noopener noreferrer" aria-label={`Open ${project.title}`}>
                            <Image src={project.image} alt={`${project.title} product interface`} fill sizes="(max-width: 768px) 100vw, 58vw" />
                            <span>View live <ArrowUpRight aria-hidden="true" /></span>
                        </a>
                        <div className="work-project__copy">
                            <span>{String(index + 1).padStart(2, "0")}</span>
                            <h3>{project.title}</h3>
                            <p>{project.desc}</p>
                            <ul aria-label={`${project.title} technologies`}>{project.tech.map((technology) => <li key={technology}>{technology}</li>)}</ul>
                            <a href={project.url} target="_blank" rel="noopener noreferrer">Explore project <ArrowUpRight aria-hidden="true" /></a>
                        </div>
                    </article>
                ))}
            </div>
        </div>
    </section>
);
