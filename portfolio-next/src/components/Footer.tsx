"use client";

export const Footer = () => {
    return (
        <footer className="py-12" style={{ backgroundColor: "var(--bg-primary)", borderTop: "1px solid var(--border-subtle)" }}>
            <div className="max-w-7xl mx-auto px-16 lg:px-32">

                {/* Main Footer Content */}
                <div className="grid md:grid-cols-3 gap-16 mb-20">

                    {/* Brand */}
                    <div>
                        <h3 className="text-2xl font-black mb-6">
                            <span style={{ color: "var(--accent)" }}>A</span>
                            <span style={{ color: "var(--text-primary)" }}>S</span>
                            <span style={{ color: "var(--accent)" }}>.</span>
                        </h3>
                        <p className="text-sm leading-relaxed" style={{ color: "var(--text-faint)" }}>
                            Full-stack engineer building scalable products with modern technologies.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-xs font-bold tracking-[0.2em] uppercase mb-6" style={{ color: "var(--text-muted)" }}>Navigation</h4>
                        <div className="flex flex-col gap-3">
                            {["experience", "projects", "contact"].map((link) => (
                                <a key={link} href={`#${link}`}
                                    className="text-sm capitalize transition-colors"
                                    style={{ color: "var(--text-faint)" }}
                                    onMouseEnter={e => (e.currentTarget.style.color = "var(--accent)")}
                                    onMouseLeave={e => (e.currentTarget.style.color = "var(--text-faint)")}
                                >
                                    {link.charAt(0).toUpperCase() + link.slice(1)}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Social */}
                    <div>
                        <h4 className="text-xs font-bold tracking-[0.2em] uppercase mb-6" style={{ color: "var(--text-muted)" }}>Connect</h4>
                        <div className="flex flex-col gap-3">
                            {[
                                { href: "https://github.com/aakarsh12x", label: "GitHub" },
                                { href: "https://www.linkedin.com/in/aakarsh-singh-b27a5228b/", label: "LinkedIn" },
                                { href: "mailto:singhaakarsh28@gmail.com", label: "Email" },
                            ].map(({ href, label }) => (
                                <a key={label} href={href}
                                    target={href.startsWith("http") ? "_blank" : undefined}
                                    rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                                    className="text-sm transition-colors"
                                    style={{ color: "var(--text-faint)" }}
                                    onMouseEnter={e => (e.currentTarget.style.color = "var(--accent)")}
                                    onMouseLeave={e => (e.currentTarget.style.color = "var(--text-faint)")}
                                >
                                    {label}
                                </a>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4" style={{ borderTop: "1px solid var(--border-subtle)" }}>
                    <p className="text-xs font-mono" style={{ color: "var(--text-trace)" }}>
                        © 2026 Aakarsh Singh. All rights reserved.
                    </p>
                    <p className="text-xs font-mono" style={{ color: "var(--text-trace)" }}>
                        Built with Next.js & Tailwind CSS
                    </p>
                </div>
            </div>
        </footer>
    );
};
