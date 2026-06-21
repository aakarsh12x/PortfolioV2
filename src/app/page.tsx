"use client";

import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Experience } from "@/components/Experience";
import { Achievements } from "@/components/Achievements";
import { Skills } from "@/components/Skills";
import { Projects } from "@/components/Projects";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main
      className="min-h-screen antialiased lg:cursor-none"
      style={{ backgroundColor: "var(--bg-primary)", color: "var(--text-primary)" }}
    >
      <Navbar />
      <Hero />
      <Experience />
      <Achievements />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
}
