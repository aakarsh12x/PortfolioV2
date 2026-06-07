"use client";

import { ArrowUpRight } from "lucide-react";
import { PROJECTS } from "@/data/portfolio";
import { ScrollReveal } from "./ui/ScrollReveal";

export const Projects = () => {
    return (
        <section id="projects" className="py-6 lg:py-12 overflow-hidden" style={{ backgroundColor: "var(--bg-card)" }}>
            <style>{`
                .project-card-link .project-image {
                    transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);
                }
                .project-card-link:hover .project-image {
                    transform: scale(1.12);
                }
            `}</style>
            <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-32">

                {/* Header */}
                <div className="mb-5 lg:mb-10">
                    <ScrollReveal variant="slide-up">
                        <span className="text-xs tracking-[0.3em] uppercase mb-6 block" style={{ color: "var(--accent)" }}>Selected Work</span>
                        <h2 className="text-3xl lg:text-4xl font-black tracking-tighter" style={{ color: "var(--text-primary)" }}>Projects</h2>
                    </ScrollReveal>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-6">
                    {PROJECTS.map((project, i) => (
                        <ScrollReveal key={i} variant="slide-up" delay={i * 0.05} className="w-full">
                            <a
                                href={project.url || "#"}
                                target={project.url ? "_blank" : "_self"}
                                rel={project.url ? "noopener noreferrer" : ""}
                                className="group project-card-link flex flex-row items-center gap-4 p-3.5 rounded-xl border transition-all duration-500 lg:cursor-none"
                                style={{ 
                                    borderColor: "var(--border)",
                                    backgroundColor: "var(--surface-1)"
                                }}
                                onMouseEnter={e => {
                                    e.currentTarget.style.backgroundColor = "var(--surface-2)";
                                    e.currentTarget.style.borderColor = "var(--accent)";
                                }}
                                onMouseLeave={e => {
                                    e.currentTarget.style.backgroundColor = "var(--surface-1)";
                                    e.currentTarget.style.borderColor = "var(--border)";
                                }}
                            >
                                {/* Image Container */}
                                {/* @ts-ignore */}
                                {project.image && (
                                    <div className="w-24 sm:w-32 md:w-36 lg:w-40 aspect-video flex-shrink-0 overflow-hidden rounded-lg border" style={{ borderColor: "var(--border)" }}>
                                        {/* @ts-ignore */}
                                        <img 
                                            src={project.image} 
                                            alt={project.title} 
                                            className="project-image w-full h-full object-cover" 
                                        />
                                    </div>
                                )}
                                
                                {/* Info Container */}
                                <div className="flex-1 min-w-0 flex flex-col justify-between py-0.5">
                                    <div>
                                        <div className="flex items-center justify-between gap-2 mb-1">
                                            <h3 className="text-base lg:text-lg font-black tracking-tight transition-colors truncate" style={{ color: "var(--text-primary)" }}
                                                onMouseEnter={e => (e.currentTarget.style.color = "var(--accent)")}
                                                onMouseLeave={e => (e.currentTarget.style.color = "var(--text-primary)")}
                                            >
                                                {project.title}
                                            </h3>
                                            {project.url && (
                                                <ArrowUpRight className="w-4 h-4 group-hover:rotate-45 transition-all duration-500 flex-shrink-0" style={{ color: "var(--text-ghost)" }} />
                                            )}
                                        </div>

                                        <p className="text-xs lg:text-sm leading-relaxed line-clamp-2" style={{ color: "var(--text-muted)" }}>
                                            {project.desc}
                                        </p>
                                    </div>

                                    {/* Tech Tags */}
                                    <div className="flex flex-wrap gap-1.5 mt-2">
                                        {project.tech.map((t) => (
                                            <span key={t} className="px-2 py-0.5 rounded-full text-[9px] uppercase tracking-wider transition-colors"
                                                style={{ border: "1px solid var(--border)", color: "var(--text-faint)", backgroundColor: "var(--bg-subtle)" }}>
                                                {t}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </a>
                        </ScrollReveal>
                    ))}
                </div>
            </div>
        </section>
    );
};
