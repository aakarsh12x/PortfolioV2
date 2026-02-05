"use client";

import { ACHIEVEMENTS } from "@/data/portfolio";
import { ScrollReveal } from "./ui/ScrollReveal";

export const Achievements = () => {
    return (
        <section className="py-16 border-y border-white/5 bg-[#080808]">
            <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-32">

                {/* Header */}
                <div className="mb-15">
                    <ScrollReveal variant="slide-up">
                        <span className="text-[#ff4d00] text-xs tracking-[0.3em] uppercase mb-6 block">Recognition</span>
                        <h2 className="text-3xl lg:text-5xl font-black tracking-tighter">Achievements</h2>
                    </ScrollReveal>
                </div>

                {/* Achievement Cards - Horizontal Layout */}
                <div className="grid md:grid-cols-2 gap-1">
                    {ACHIEVEMENTS.map((item, i) => (
                        <ScrollReveal key={i} variant="scale" delay={i * 0.1}>
                            <div
                                className="group relative bg-black border border-white/10 hover:border-[#ff4d00] transition-all duration-500 overflow-hidden h-full"
                                style={{ padding: '50px 40px' }}
                            >
                                {/* Background Icon */}
                                <div className="absolute top-8 right-8 opacity-5 group-hover:opacity-10 transition-opacity pointer-events-none">
                                    <item.icon className="w-32 h-32 text-[#ff4d00]" strokeWidth={1} />
                                </div>

                                {/* Content */}
                                <div className="relative z-10 flex items-start gap-8">
                                    {/* Icon */}
                                    <div className="flex-shrink-0 w-16 h-16 flex items-center justify-center bg-[#ff4d00]/10 border border-[#ff4d00]/20 group-hover:bg-[#ff4d00]/20 transition-colors">
                                        <item.icon className="w-8 h-8 text-[#ff4d00]" strokeWidth={1.5} />
                                    </div>

                                    {/* Text */}
                                    <div className="flex-1">
                                        <h3 className="text-4xl font-black text-[#ff4d00] mb-3 leading-none group-hover:scale-105 transition-transform origin-left">
                                            {item.value}
                                        </h3>
                                        <p className="text-sm font-bold uppercase tracking-[0.15em] text-white/60 mb-3">
                                            {item.label}
                                        </p>
                                        <p className="text-sm text-white/40 leading-relaxed">
                                            {item.desc}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </ScrollReveal>
                    ))}
                </div>
            </div>
        </section>
    );
};
