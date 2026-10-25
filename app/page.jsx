"use client";
import SmoothProvider from "@/components/SmoothProvider";
import SceneMount from "@/components/SceneMount";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Achievements from "@/components/Achievements";
import Footer from "@/components/Footer";
import ResumeModal from "@/components/ResumeModal";

export default function Home() {
  return (
    <SmoothProvider>
      <SceneMount />
      <Nav />
      <ResumeModal />
      <main className="relative">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Achievements />
        <Footer />
      </main>
    </SmoothProvider>
  );
}
