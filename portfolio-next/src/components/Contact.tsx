"use client";

import { ScrollReveal } from "./ui/ScrollReveal";

export const Contact = () => {
    return (
        <section id="contact" className="py-16" style={{ backgroundColor: "var(--bg-primary)", borderTop: "1px solid var(--border)" }}>
            <div className="max-w-5xl mx-auto px-6 md:px-12 lg:px-32 text-center">
                <ScrollReveal variant="slide-up">
                    <span className="text-xs tracking-[0.3em] uppercase mb-12 block" style={{ color: "var(--accent)" }}>Get In Touch</span>
                </ScrollReveal>

                {/* Profile Image */}
                <div className="mb-12 flex justify-center">
                    <ScrollReveal variant="scale" delay={0.2}>
                        <div className="relative w-32 h-32 lg:w-40 lg:h-40 rounded-full p-2 group transition-colors duration-500"
                            style={{ border: "1px solid var(--border)" }}
                            onMouseEnter={e => (e.currentTarget.style.borderColor = "var(--accent)")}
                            onMouseLeave={e => (e.currentTarget.style.borderColor = "var(--border)")}
                        >
                            <div className="w-full h-full rounded-full overflow-hidden relative">
                                <img src="/profile-pic.png" alt="Aakarsh Singh"
                                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
                            </div>
                        </div>
                    </ScrollReveal>
                </div>

                <ScrollReveal variant="slide-up" delay={0.3}>
                    <h2 className="text-5xl lg:text-7xl font-black tracking-tighter mb-12 leading-[0.8]" style={{ color: "var(--text-primary)" }}>
                        Let's work
                        <br />
                        <span style={{ color: "var(--accent)" }}>together.</span>
                    </h2>
                </ScrollReveal>

                <ScrollReveal variant="slide-up" delay={0.4}>
                    <div className="flex flex-col items-center gap-6 mb-12">
                        <a href="mailto:singhaakarsh28@gmail.com"
                            className="text-2xl lg:text-4xl font-bold pb-1 transition-colors"
                            style={{ color: "var(--text-primary)", borderBottom: "1px solid transparent" }}
                            onMouseEnter={e => { e.currentTarget.style.color = "var(--accent)"; e.currentTarget.style.borderBottomColor = "var(--accent)"; }}
                            onMouseLeave={e => { e.currentTarget.style.color = "var(--text-primary)"; e.currentTarget.style.borderBottomColor = "transparent"; }}
                        >
                            singhaakarsh28@gmail.com
                        </a>
                        <a href="tel:8739018155"
                            className="text-lg font-mono transition-colors"
                            style={{ color: "var(--text-muted)" }}
                            onMouseEnter={e => (e.currentTarget.style.color = "var(--text-primary)")}
                            onMouseLeave={e => (e.currentTarget.style.color = "var(--text-muted)")}
                        >
                            +91 8739018155
                        </a>
                    </div>
                </ScrollReveal>

                <ScrollReveal variant="slide-up" delay={0.5}>
                    <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6 w-full md:w-auto">
                        <a href="https://github.com/aakarsh12x" target="_blank" rel="noopener noreferrer"
                            className="w-full md:w-auto px-8 py-4 font-bold tracking-[0.2em] uppercase text-xs transition-all lg:cursor-none"
                            style={{ backgroundColor: "var(--accent)", color: "var(--bg-primary)" }}
                            onMouseEnter={e => (e.currentTarget.style.backgroundColor = "var(--text-primary)")}
                            onMouseLeave={e => (e.currentTarget.style.backgroundColor = "var(--accent)")}
                        >
                            GitHub
                        </a>
                        {[
                            { href: "https://www.linkedin.com/in/aakarsh-singh-b27a5228b/", label: "LinkedIn" },
                            { href: "mailto:singhaakarsh28@gmail.com", label: "Email Me" },
                        ].map(({ href, label }) => (
                            <a key={label} href={href} target={href.startsWith("http") ? "_blank" : undefined}
                                rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                                className="w-full md:w-auto px-8 py-4 text-xs tracking-[0.2em] uppercase transition-all lg:cursor-none"
                                style={{ border: "1px solid var(--border)", color: "var(--text-primary)" }}
                                onMouseEnter={e => { e.currentTarget.style.borderColor = "var(--accent)"; e.currentTarget.style.backgroundColor = "var(--surface-2)"; }}
                                onMouseLeave={e => { e.currentTarget.style.borderColor = "var(--border)"; e.currentTarget.style.backgroundColor = "transparent"; }}
                            >
                                {label}
                            </a>
                        ))}
                    </div>
                </ScrollReveal>
            </div>
        </section>
    );
};
