"use client";

import { SKILLS } from "@/data/portfolio";
import { StaggerContainer, StaggerItem } from "./ui/StaggerContainer";
import { ScrollReveal } from "./ui/ScrollReveal";

export const Skills = () => {
    return (
        <section className="py-16 bg-[#030303]">
            <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-32">
                {/* Header */}
                <div className="mb-20">
                    <ScrollReveal variant="slide-up">
                        <span className="text-[#ff4d00] text-xs tracking-[0.3em] uppercase mb-6 block">Expertise</span>
                        <h2 className="text-5xl lg:text-6xl font-black tracking-tighter">Skills</h2>
                    </ScrollReveal>
                </div>

                <div className="grid lg:grid-cols-2 gap-20">
                    {SKILLS.map((cat, i) => (
                        <div key={cat.category}>
                            <ScrollReveal variant="slide-left" delay={i * 0.1}>
                                <h3 className="text-xl font-bold mb-10 text-[#ff4d00] tracking-widest uppercase border-b border-white/10 pb-4 inline-block">{cat.category}</h3>
                            </ScrollReveal>

                            <StaggerContainer className="flex flex-wrap gap-x-4 gap-y-2" staggerDelay={0.05} initialDelay={0.2}>
                                {cat.items.map((item, j) => (
                                    <StaggerItem key={item} variant="fade-up">
                                        <span
                                            className="text-3xl lg:text-5xl font-black text-white animate-dark-pulse md:animate-none md:text-white/20 md:hover:text-white transition-colors cursor-default leading-tight"
                                            style={{
                                                animationDelay: `${((i * 10 + j) * 0.7) % 5}s`,
                                                animationDuration: `${4 + ((i * 10 + j) * 0.5) % 4}s`
                                            }}
                                        >
                                            {item} <span className="text-[#ff4d00]/20">•</span>
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
