"use client";

import { ArrowUpRight } from "lucide-react";
import { PROJECTS } from "@/data/portfolio";
import { ScrollReveal } from "./ui/ScrollReveal";

export const Projects = () => {
    return (
        <section id="projects" className="py-6 lg:py-12 overflow-hidden" style={{ backgroundColor: "var(--bg-card)" }}>
            <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-32">

                {/* Header */}
                <div className="mb-5 lg:mb-10">
                    <ScrollReveal variant="slide-up">
                        <span className="text-xs tracking-[0.3em] uppercase mb-6 block" style={{ color: "var(--accent)" }}>Selected Work</span>
                        <h2 className="text-3xl lg:text-4xl font-black tracking-tighter" style={{ color: "var(--text-primary)" }}>Projects</h2>
                    </ScrollReveal>
                </div>

                {/* List */}
                <div className="flex flex-col">
                    {PROJECTS.map((project, i) => (
                        <ScrollReveal key={i} variant={i % 2 === 0 ? "slide-left" : "slide-right"} delay={0.1} className="w-full">
                            <a
                                href={project.url || "#"}
                                target={project.url ? "_blank" : "_self"}
                                rel={project.url ? "noopener noreferrer" : ""}
                                className="group block py-4 lg:py-7 transition-colors lg:cursor-none"
                                style={{ borderTop: "1px solid var(--border)" }}
                                onMouseEnter={e => (e.currentTarget.style.backgroundColor = "var(--surface-1)")}
                                onMouseLeave={e => (e.currentTarget.style.backgroundColor = "transparent")}
                            >
                                <div className="flex items-center justify-between gap-4 mb-2 lg:mb-3">
                                    <h3 className="text-lg lg:text-3xl font-black tracking-tight transition-colors" style={{ color: "var(--text-primary)" }}
                                        onMouseEnter={e => (e.currentTarget.style.color = "var(--accent)")}
                                        onMouseLeave={e => (e.currentTarget.style.color = "var(--text-primary)")}
                                    >
                                        {project.title}
                                    </h3>
                                    {project.url && (
                                        <ArrowUpRight className="w-6 h-6 group-hover:rotate-45 transition-all duration-500 flex-shrink-0" style={{ color: "var(--text-ghost)" }} />
                                    )}
                                </div>

                                <div className="flex flex-col lg:flex-row justify-between lg:items-end gap-3 lg:gap-6">
                                    <p className="text-sm lg:text-base max-w-xl leading-relaxed" style={{ color: "var(--text-muted)" }}>
                                        {project.desc}
                                    </p>
                                    <div className="flex flex-wrap gap-3">
                                        {project.tech.map((t) => (
                                            <span key={t} className="px-3 py-1 rounded-full text-[10px] uppercase tracking-wider transition-colors"
                                                style={{ border: "1px solid var(--border)", color: "var(--text-faint)" }}>
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
