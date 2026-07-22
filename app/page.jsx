"use client";
import SmoothProvider from "@/components/SmoothProvider";
import SceneMount from "@/components/SceneMount";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Extras from "@/components/Extras";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <SmoothProvider>
      <SceneMount />
      <Nav />
      <main className="relative">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Extras />
        <Footer />
      </main>
    </SmoothProvider>
  );
}
