"use client";

export const Footer = () => {
    return (
        <footer className="py-12 bg-black border-t border-white/5">
            <div className="max-w-7xl mx-auto px-16 lg:px-32">

                {/* Main Footer Content */}
                <div className="grid md:grid-cols-3 gap-16 mb-20">

                    {/* Brand */}
                    <div>
                        <h3 className="text-2xl font-black mb-6">
                            <span className="text-[#ff4d00]">A</span>S<span className="text-[#ff4d00]">.</span>
                        </h3>
                        <p className="text-white/30 text-sm leading-relaxed">
                            Full-stack engineer building scalable products with modern technologies.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-xs font-bold tracking-[0.2em] uppercase text-white/40 mb-6">Navigation</h4>
                        <div className="flex flex-col gap-3">
                            <a href="#experience" className="text-sm text-white/50 hover:text-[#ff4d00] transition-colors">Experience</a>
                            <a href="#projects" className="text-sm text-white/50 hover:text-[#ff4d00] transition-colors">Projects</a>
                            <a href="#contact" className="text-sm text-white/50 hover:text-[#ff4d00] transition-colors">Contact</a>
                        </div>
                    </div>

                    {/* Social */}
                    <div>
                        <h4 className="text-xs font-bold tracking-[0.2em] uppercase text-white/40 mb-6">Connect</h4>
                        <div className="flex flex-col gap-3">
                            <a
                                href="https://github.com/aakarsh12x"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-sm text-white/50 hover:text-[#ff4d00] transition-colors"
                            >
                                GitHub
                            </a>
                            <a
                                href="https://www.linkedin.com/in/aakarsh-singh-b27a5228b/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-sm text-white/50 hover:text-[#ff4d00] transition-colors"
                            >
                                LinkedIn
                            </a>
                            <a
                                href="mailto:singhaakarsh28@gmail.com"
                                className="text-sm text-white/50 hover:text-[#ff4d00] transition-colors"
                            >
                                Email
                            </a>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-xs text-white/20 font-mono">
                        © 2025 Aakarsh Singh. All rights reserved.
                    </p>
                    <p className="text-xs text-white/20 font-mono">
                        Built with Next.js & Tailwind CSS
                    </p>
                </div>
            </div>
        </footer>
    );
};
