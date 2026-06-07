"use client";

import { SKILLS } from "@/data/portfolio";
import { StaggerContainer, StaggerItem } from "./ui/StaggerContainer";
import { ScrollReveal } from "./ui/ScrollReveal";

export const Skills = () => {
    return (
        <section id="skills" className="py-6 lg:py-10" style={{ backgroundColor: "var(--bg-subtle)" }}>
            <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-32">
                {/* Header */}
                <div className="mb-5 lg:mb-10">
                    <ScrollReveal variant="slide-up">
                        <span className="text-xs tracking-[0.3em] uppercase mb-6 block" style={{ color: "var(--accent)" }}>Expertise</span>
                        <h2 className="text-3xl lg:text-4xl font-black tracking-tighter" style={{ color: "var(--text-primary)" }}>Skills</h2>
                        <div className="mt-4 h-px w-24" style={{ backgroundColor: "var(--accent)", opacity: 0.5 }} />
                    </ScrollReveal>
                </div>

                <div className="grid lg:grid-cols-2 gap-6 lg:gap-12">
                    {SKILLS.map((cat, i) => (
                        <div key={cat.category}>
                            <ScrollReveal variant="slide-left" delay={i * 0.1}>
                                <h3 className="text-base font-bold mb-3 lg:mb-6 tracking-widest uppercase pb-3 inline-block"
                                    style={{ color: "var(--accent)", borderBottom: "1px solid var(--border)" }}>
                                    {cat.category}
                                </h3>
                            </ScrollReveal>

                            <StaggerContainer className="flex flex-wrap gap-x-4 gap-y-2" staggerDelay={0.05} initialDelay={0.2}>
                                {cat.items.map((item, j) => (
                                    <StaggerItem key={item} variant="fade-up">
                                        <span
                                            className="text-lg lg:text-4xl font-black leading-tight cursor-default transition-colors"
                                            style={{
                                                color: "var(--text-primary)",
                                                animationDelay: `${((i * 10 + j) * 0.7) % 5}s`,
                                                animationDuration: `${4 + ((i * 10 + j) * 0.5) % 4}s`,
                                            }}
                                            onMouseEnter={e => (e.currentTarget.style.color = "var(--accent)")}
                                            onMouseLeave={e => (e.currentTarget.style.color = "var(--text-primary)")}
                                        >
                                            {item} <span style={{ color: "var(--accent)", opacity: 0.2 }}>•</span>
                                        </span>
                                    </StaggerItem>
                                ))}
                            </StaggerContainer>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
