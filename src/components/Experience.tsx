"use client";

import { Calendar, MapPin, ArrowRight } from "lucide-react";
import { EXPERIENCE, COLLEGE_EXPERIENCE } from "@/data/portfolio";
import { ScrollReveal } from "./ui/ScrollReveal";
import { StaggerContainer, StaggerItem } from "./ui/StaggerContainer";

export const Experience = () => {
    return (
        <section id="experience" className="py-16 bg-[#050505]">
            <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-32">

                {/* Header */}
                <div className="mb-20">
                    <ScrollReveal variant="slide-up">
                        <span className="text-[#ff4d00] text-xs tracking-[0.3em] uppercase mb-6 block">Career</span>
                        <h2 className="text-5xl lg:text-7xl font-black tracking-tighter">Experience</h2>
                    </ScrollReveal>
                </div>

                {/* Work History */}
                <div className="mb-20">
                    {EXPERIENCE.map((job, index) => (
                        <div key={job.id} className="mb-10 last:mb-0">
                            <ScrollReveal variant="slide-up" delay={index * 0.1}>
                                <div className="flex items-center gap-6 mb-12">
                                    <span className="text-xs text-[#ff4d00] tracking-[0.2em]">0{index + 1}</span>
                                    <div className="flex-1 h-px bg-white/10" />
                                    {job.current && (
                                        <span className="px-4 py-2 bg-[#ff4d00] text-black text-[10px] font-bold tracking-[0.15em] uppercase">Current</span>
                                    )}
                                </div>
                            </ScrollReveal>

                            <div className="grid lg:grid-cols-2 gap-16">
                                <ScrollReveal variant="slide-left" delay={0.2}>
                                    <div>
                                        <div className="flex items-center gap-3 text-white/30 mb-6">
                                            <Calendar className="w-4 h-4" strokeWidth={1.5} />
                                            <span className="text-sm">{job.period}</span>
                                        </div>

                                        <h3 className="text-4xl lg:text-5xl font-black tracking-tight mb-6">{job.role}</h3>

                                        <div className="flex items-center gap-6 mb-8">
                                            {job.url ? (
                                                <a
                                                    href={job.url}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="text-lg text-[#ff4d00] font-bold hover:text-white transition-colors flex items-center gap-2 group/link"
                                                >
                                                    {job.company}
                                                    <ArrowRight className="w-4 h-4 text-[#ff4d00] group-hover/link:text-white transition-colors -rotate-45 mb-1" />
                                                </a>
                                            ) : (
                                                <span className="text-lg text-[#ff4d00] font-bold">{job.company}</span>
                                            )}
                                            <div className="flex items-center gap-2 text-white/30">
                                                <MapPin className="w-3 h-3" strokeWidth={1.5} />
                                                <span className="text-xs">{job.location}</span>
                                            </div>
                                        </div>

                                        <p className="text-base text-white/40 leading-relaxed mb-10">{job.description}</p>

                                        <div className="flex flex-wrap gap-2">
                                            {job.tech.map((t) => (
                                                <span key={t} className="px-3 py-1.5 bg-white/5 border border-white/5 text-xs text-white/50">{t}</span>
                                            ))}
                                        </div>
                                    </div>
                                </ScrollReveal>

                                <ScrollReveal variant="slide-right" delay={0.4}>
                                    <div className="grid gap-4">
                                        {job.metrics.map((m, i) => (
                                            <div key={i} className="p-8 bg-black border border-white/5">
                                                <span className="text-3xl lg:text-4xl font-black text-[#ff4d00] block mb-1">{m.value}</span>
                                                <span className="text-[10px] text-white/30 tracking-[0.15em] uppercase">{m.label}</span>
                                            </div>
                                        ))}
                                    </div>
                                </ScrollReveal>
                            </div>
                        </div>
                    ))}
                </div>

                {/* College Experience */}
                <div className="pt-20 border-t border-white/5">
                    <ScrollReveal variant="slide-up">
                        <h3 className="text-3xl font-black tracking-tight mb-20">Leadership & Community</h3>
                    </ScrollReveal>

                    <StaggerContainer className="grid md:grid-cols-2 gap-8" staggerDelay={0.2}>
                        {COLLEGE_EXPERIENCE.map((role, i) => (
                            <StaggerItem key={i} variant="fade-up" className="p-12 bg-white/[0.02] border border-white/5 flex items-start gap-8 hover:bg-white/[0.04] transition-colors group">
                                <div className="p-4 bg-white/5 rounded-full group-hover:bg-[#ff4d00]/20 group-hover:text-[#ff4d00] transition-colors">
                                    <role.icon className="w-6 h-6" />
                                </div>
                                <div>
                                    <h4 className="text-xl font-bold mb-2">{role.role}</h4>
                                    <p className="text-[#ff4d00] text-sm font-bold tracking-widest uppercase mb-4">{role.organization}</p>
                                    <div className="flex flex-col gap-1 text-xs text-white/30 uppercase tracking-widest">
                                        <span>{role.institution}</span>
                                        <span>{role.period}</span>
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
