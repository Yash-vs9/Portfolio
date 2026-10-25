"use client";
import { projects } from "@/lib/data";
import SectionHead from "./SectionHead";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  return (
    <section id="projects" className="space-y-6">
      <SectionHead title="Work" sub="Selected projects" />

      <div className="space-y-4">
        {projects.map((p) => (
          <ProjectCard key={p.id} project={p} />
        ))}
      </div>
    </section>
  );
}
