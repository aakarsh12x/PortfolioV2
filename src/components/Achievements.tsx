"use client";

import { ACHIEVEMENTS } from "@/data/portfolio";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { useSafeReducedMotion } from "@/hooks/useSafeReducedMotion";

export const Achievements = () => {
    const ref = useRef<HTMLElement>(null);
    const inView = useInView(ref, { once: true, amount: 0.15 });
    const reduceMotion = useSafeReducedMotion();
    return (
        <section ref={ref} className="proof-section" aria-labelledby="proof-title">
            <div className="proof-shell">
                <header className="proof-heading"><p>Evidence over adjectives</p><h2 id="proof-title">A few receipts.</h2></header>
                <div className="proof-list">
                    {ACHIEVEMENTS.map((item, index) => (
                        <motion.article key={item.label} initial={reduceMotion ? false : { opacity: 0, x: index % 2 ? 36 : -36 }}
                            animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.7, delay: index * 0.08 }}>
                            <span>{String(index + 1).padStart(2, "0")}</span>
                            <div><strong>{item.value}</strong><h3>{item.label}</h3></div>
                            <p>{item.desc}</p><item.icon aria-hidden="true" />
                        </motion.article>
                    ))}
                </div>
            </div>
        </section>
    );
};
