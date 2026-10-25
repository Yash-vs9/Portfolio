"use client";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Extras from "@/components/Extras";
import Footer from "@/components/Footer";
import ResumeModal from "@/components/ResumeModal";

export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100 selection:bg-zinc-200 selection:text-zinc-900 dark:selection:bg-zinc-800 dark:selection:text-white transition-colors duration-150">
      <Nav />
      <ResumeModal />
      <main className="mx-auto max-w-4xl px-5 sm:px-8 pt-24 pb-16 space-y-16 sm:space-y-24">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Extras />
        <Footer />
      </main>
    </div>
  );
}
