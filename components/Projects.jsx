"use client";
import { projects } from "@/lib/data";
import SectionHead from "./SectionHead";
import Reveal from "./Reveal";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative z-10 px-6 py-24 sm:px-10 lg:px-24 lg:py-36"
    >
      <SectionHead num="03" title="Work" sub="Two builds, in depth" />

      <div className="flex flex-col gap-8 lg:gap-12">
        {projects.map((p, i) => (
          <Reveal key={p.id} delay={i * 0.08} y={40}>
            {/* offset alternate cards for an asymmetric column */}
            <div className={i % 2 === 1 ? "lg:ml-[8%]" : "lg:mr-[8%]"}>
              <ProjectCard project={p} i={i} />
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
