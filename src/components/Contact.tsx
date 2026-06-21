"use client";

import { ArrowUpRight } from "lucide-react";

export const Contact = () => (
    <section id="contact" className="contact-section" aria-labelledby="contact-title">
        <div className="contact-shell">
            <p className="contact-status"><span aria-hidden="true" /> Available for the right team</p>
            <h2 id="contact-title">Bring me the problem that keeps coming back.</h2>
            <div className="contact-bottom">
                <p>I’m looking for product-minded engineering work with real ownership, demanding constraints, and people worth learning from.</p>
                <div className="contact-buttons">
                    <a href="mailto:singhaakarsh28@gmail.com" className="contact-btn contact-btn--primary">
                        Email Me <ArrowUpRight aria-hidden="true" />
                    </a>
                    <a href="https://wa.me/918739018155" target="_blank" rel="noopener noreferrer" className="contact-btn contact-btn--secondary">
                        WhatsApp / Call <ArrowUpRight aria-hidden="true" />
                    </a>
                </div>
            </div>
            <nav className="contact-links" aria-label="Social links">
                <a href="https://github.com/aakarsh12x" target="_blank" rel="noopener noreferrer">GitHub <ArrowUpRight aria-hidden="true" /></a>
                <a href="https://www.linkedin.com/in/aakarsh-singh-b27a5228b/" target="_blank" rel="noopener noreferrer">LinkedIn <ArrowUpRight aria-hidden="true" /></a>
            </nav>
        </div>
    </section>
);
