"use client";

import { ArrowUpRight } from "lucide-react";
import { PROJECTS } from "@/data/portfolio";
import { ScrollReveal } from "./ui/ScrollReveal";

export const Projects = () => {
    return (
        <section id="projects" className="py-16 bg-[#050505] overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-32">

                {/* Header */}
                <div className="mb-20">
                    <ScrollReveal variant="slide-up">
                        <span className="text-[#ff4d00] text-xs tracking-[0.3em] uppercase mb-6 block">Selected Work</span>
                        <h2 className="text-3xl lg:text-6xl font-black tracking-tighter">Projects</h2>
                    </ScrollReveal>
                </div>

                {/* List */}
                <div className="flex flex-col">
                    {PROJECTS.map((project, i) => (
                        <ScrollReveal
                            key={i}
                            variant={i % 2 === 0 ? "slide-left" : "slide-right"}
                            delay={0.1}
                            className="w-full"
                        >
                            <a
                                href={project.url || "#"}
                                target={project.url ? "_blank" : "_self"}
                                rel={project.url ? "noopener noreferrer" : ""}
                                className="group block py-12 border-t border-white/10 hover:bg-white/[0.02] transition-colors cursor-none"
                                style={{ cursor: project.url ? 'pointer' : 'default' }}
                            >
                                <div className="flex flex-col lg:flex-row lg:items-baseline justify-between gap-6 mb-6">
                                    <h3 className="text-2xl lg:text-4xl font-black tracking-tight group-hover:text-[#ff4d00] transition-colors">
                                        {project.title}
                                    </h3>
                                    {project.url && (
                                        <ArrowUpRight className="w-6 h-6 text-white/20 group-hover:text-[#ff4d00] group-hover:rotate-45 transition-all duration-500" />
                                    )}
                                </div>

                                <div className="flex flex-col lg:flex-row justify-between lg:items-end gap-6">
                                    <p className="text-lg text-white/40 max-w-xl leading-relaxed">
                                        {project.desc}
                                    </p>
                                    <div className="flex flex-wrap gap-3">
                                        {project.tech.map((t) => (
                                            <span key={t} className="px-3 py-1 border border-white/10 rounded-full text-[10px] text-white/40 uppercase tracking-wider group-hover:border-[#ff4d00]/30 group-hover:text-[#ff4d00] transition-colors">
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
