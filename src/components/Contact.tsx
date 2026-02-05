"use client";

import { ScrollReveal } from "./ui/ScrollReveal";

export const Contact = () => {
    return (
        <section id="contact" className="py-16 bg-black border-t border-white/10">
            <div className="max-w-5xl mx-auto px-6 md:px-12 lg:px-32 text-center">
                <ScrollReveal variant="slide-up">
                    <span className="text-[#ff4d00] text-xs tracking-[0.3em] uppercase mb-12 block">Get In Touch</span>
                </ScrollReveal>

                {/* Profile Image */}
                <div className="mb-12 flex justify-center">
                    <ScrollReveal variant="scale" delay={0.2}>
                        <div className="relative w-32 h-32 lg:w-40 lg:h-40 rounded-full border border-white/10 p-2 group hover:border-[#ff4d00] transition-colors duration-500">
                            <div className="w-full h-full rounded-full overflow-hidden relative">
                                <img
                                    src="/profile-pic.png"
                                    alt="Aakarsh Singh"
                                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                                />
                            </div>
                        </div>
                    </ScrollReveal>
                </div>

                <ScrollReveal variant="slide-up" delay={0.3}>
                    <h2 className="text-5xl lg:text-7xl font-black tracking-tighter mb-12 leading-[0.8]">
                        Let's work
                        <br />
                        <span className="text-[#ff4d00]">together.</span>
                    </h2>
                </ScrollReveal>

                <ScrollReveal variant="slide-up" delay={0.4}>
                    <div className="flex flex-col items-center gap-6 mb-12">
                        <a href="mailto:singhaakarsh28@gmail.com" className="text-2xl lg:text-4xl font-bold text-white hover:text-[#ff4d00] transition-colors border-b border-transparent hover:border-[#ff4d00] pb-1">
                            singhaakarsh28@gmail.com
                        </a>
                        <a href="tel:8739018155" className="text-lg text-white/40 font-mono hover:text-white transition-colors">
                            +91 8739018155
                        </a>
                    </div>
                </ScrollReveal>

                <ScrollReveal variant="slide-up" delay={0.5}>
                    <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6 w-full md:w-auto">
                        <a href="https://github.com/aakarsh12x" target="_blank" rel="noopener noreferrer" className="w-full md:w-auto px-8 py-4 bg-[#ff4d00] text-black font-bold tracking-[0.2em] uppercase text-xs hover:bg-white transition-all cursor-none">
                            GitHub
                        </a>
                        <a href="https://www.linkedin.com/in/aakarsh-singh-b27a5228b/" target="_blank" rel="noopener noreferrer" className="w-full md:w-auto px-8 py-4 border border-white/10 text-xs tracking-[0.2em] uppercase hover:bg-white/5 hover:border-[#ff4d00] transition-all cursor-none">
                            LinkedIn
                        </a>
                        <a href="mailto:singhaakarsh28@gmail.com" className="w-full md:w-auto px-8 py-4 border border-white/10 text-xs tracking-[0.2em] uppercase hover:bg-white/5 hover:border-[#ff4d00] transition-all cursor-none">
                            Email Me
                        </a>
                    </div>
                </ScrollReveal>
            </div>
        </section>
    );
};
