"use client";

import { Calendar, MapPin, ArrowRight } from "lucide-react";
import { EXPERIENCE, COLLEGE_EXPERIENCE } from "@/data/portfolio";
import { ScrollReveal } from "./ui/ScrollReveal";
import { StaggerContainer, StaggerItem } from "./ui/StaggerContainer";

export const Experience = () => {
    return (
        <section id="experience" className="py-10" style={{ backgroundColor: "var(--bg-card)" }}>
            <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-32">

                {/* Header */}
                <div className="mb-10">
                    <ScrollReveal variant="slide-up">
                        <span className="text-xs tracking-[0.3em] uppercase mb-6 block" style={{ color: "var(--accent)" }}>Career</span>
                        <h2 className="text-3xl lg:text-4xl font-black tracking-tighter" style={{ color: "var(--text-primary)" }}>Experience</h2>
                        <div className="mt-4 h-px w-24" style={{ backgroundColor: "var(--accent)", opacity: 0.5 }} />
                    </ScrollReveal>
                </div>

                {/* Work History */}
                <div className="mb-10">
                    {EXPERIENCE.map((job, index) => (
                        <div key={job.id} className="mb-10 last:mb-0">
                            <ScrollReveal variant="slide-up" delay={index * 0.1}>
                                <div className="flex items-center gap-6 mb-8">
                                    <span className="text-xs tracking-[0.2em]" style={{ color: "var(--accent)" }}>0{index + 1}</span>
                                    <div className="flex-1 h-px" style={{ backgroundColor: "var(--border-subtle)" }} />
                                    {job.current && (
                                        <span className="px-4 py-2 text-[10px] font-bold tracking-[0.15em] uppercase" style={{ backgroundColor: "var(--accent)", color: "var(--bg-primary)" }}>Current</span>
                                    )}
                                </div>
                            </ScrollReveal>

                            <div className="grid lg:grid-cols-2 gap-10">
                                <ScrollReveal variant="slide-left" delay={0.2}>
                                    <div>
                                        <div className="flex items-center gap-3 mb-6" style={{ color: "var(--text-faint)" }}>
                                            <Calendar className="w-4 h-4" strokeWidth={1.5} />
                                            <span className="text-sm">{job.period}</span>
                                        </div>

                                        <h3 className="text-2xl lg:text-3xl font-black tracking-tight mb-4" style={{ color: "var(--text-primary)" }}>{job.role}</h3>

                                        <div className="flex items-center gap-6 mb-5">
                                            {job.url ? (
                                                <a href={job.url} target="_blank" rel="noopener noreferrer"
                                                    className="text-lg font-bold flex items-center gap-2 group/link transition-colors"
                                                    style={{ color: "var(--accent)" }}
                                                    onMouseEnter={e => (e.currentTarget.style.color = "var(--text-primary)")}
                                                    onMouseLeave={e => (e.currentTarget.style.color = "var(--accent)")}
                                                >
                                                    {job.company}
                                                    <ArrowRight className="w-4 h-4 -rotate-45 mb-1" />
                                                </a>
                                            ) : (
                                                <span className="text-lg font-bold" style={{ color: "var(--accent)" }}>{job.company}</span>
                                            )}
                                            <div className="flex items-center gap-2" style={{ color: "var(--text-faint)" }}>
                                                <MapPin className="w-3 h-3" strokeWidth={1.5} />
                                                <span className="text-xs">{job.location}</span>
                                            </div>
                                        </div>

                                        <p className="text-sm leading-relaxed mb-6" style={{ color: "var(--text-muted)" }}>{job.description}</p>

                                        <div className="flex flex-wrap gap-2">
                                            {job.tech.map((t) => (
                                                <span key={t} className="px-3 py-1.5 text-xs" style={{ backgroundColor: "var(--surface-2)", border: "1px solid var(--border-subtle)", color: "var(--text-faint)" }}>{t}</span>
                                            ))}
                                        </div>
                                    </div>
                                </ScrollReveal>

                                <ScrollReveal variant="slide-right" delay={0.4}>
                                    <div className="grid grid-cols-3 lg:grid-cols-1 gap-2 lg:gap-3">
                                        {job.metrics.map((m, i) => (
                                            <div key={i} className="p-3 lg:p-5" style={{ backgroundColor: "var(--bg-primary)", border: "1px solid var(--border-subtle)" }}>
                                                <span className="text-lg lg:text-2xl font-black block mb-1 leading-tight" style={{ color: "var(--accent)" }}>{m.value}</span>
                                                <span className="text-[8px] lg:text-[9px] tracking-[0.1em] uppercase leading-tight" style={{ color: "var(--text-faint)" }}>{m.label}</span>
                                            </div>
                                        ))}
                                    </div>
                                </ScrollReveal>
                            </div>
                        </div>
                    ))}
                </div>

                {/* College Experience */}
                <div className="pt-8 lg:pt-12" style={{ borderTop: "1px solid var(--border-subtle)" }}>
                    <ScrollReveal variant="slide-up">
                        <h3 className="text-xl font-black tracking-tight mb-6 lg:mb-12" style={{ color: "var(--text-primary)" }}>Leadership & Community</h3>
                    </ScrollReveal>

                    <StaggerContainer className="grid md:grid-cols-2 gap-8" staggerDelay={0.2}>
                        {COLLEGE_EXPERIENCE.map((role, i) => (
                            <StaggerItem key={i} variant="fade-up">
                                <div
                                    className="p-5 lg:p-12 flex items-start gap-4 lg:gap-8 transition-colors group h-full"
                                    style={{ backgroundColor: "var(--surface-1)", border: "1px solid var(--border-subtle)" }}
                                >
                                <div className="p-3 lg:p-4 rounded-full transition-colors" style={{ backgroundColor: "var(--surface-3)" }}>
                                    <role.icon className="w-5 h-5 lg:w-6 lg:h-6" style={{ color: "var(--text-muted)" }} />
                                </div>
                                <div>
                                    <h4 className="text-xl font-bold mb-2" style={{ color: "var(--text-primary)" }}>{role.role}</h4>
                                    <p className="text-sm font-bold tracking-widest uppercase mb-4" style={{ color: "var(--accent)" }}>{role.organization}</p>
                                    <div className="flex flex-col gap-1 text-xs uppercase tracking-widest" style={{ color: "var(--text-faint)" }}>
                                        <span>{role.institution}</span>
                                        <span>{role.period}</span>
                                    </div>
                                </div>
                                </div>
                            </StaggerItem>
                        ))}
                    </StaggerContainer>
                </div>
            </div>
        </section>
    );
};
