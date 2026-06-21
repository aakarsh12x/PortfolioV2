"use client";

import { SKILLS } from "@/data/portfolio";

export const Skills = () => (
    <section id="skills" className="toolkit-section" aria-labelledby="toolkit-title">
        <div className="toolkit-shell">
            <header className="toolkit-heading"><p>Working toolkit</p><h2 id="toolkit-title">Technology is a means. Shipping is the point.</h2></header>
            <div className="toolkit-index">
                {SKILLS.map((group, index) => (
                    <article key={group.category}>
                        <div className="toolkit-index__title"><span>{String(index + 1).padStart(2, "0")}</span><h3>{group.category}</h3></div>
                        <ul>{group.items.map((item) => <li key={item}>{item}</li>)}</ul>
                    </article>
                ))}
            </div>
        </div>
    </section>
);
