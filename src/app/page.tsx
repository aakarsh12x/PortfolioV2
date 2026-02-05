"use client";

import { CustomCursor } from "@/components/CustomCursor";
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
    <main className="bg-black text-white min-h-screen antialiased selection:bg-[#ff4d00] selection:text-black cursor-none">
      <CustomCursor />
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
