"use client";

import { Container } from "@/components/container";
import { Heading } from "@/components/heading";
import { ProjectCard } from "@/components/projects/project-card";
import { Subheading } from "@/components/subheading";
import { projects } from "@/constants/projects";
import { useInView } from "motion/react";
import { useRef } from "react";

export default function ProjectsPage() {
  const divRef = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(divRef, { once: true });

  return (
    <div className="flex items-start justify-start">
      <Container className="overflow-visible px-4 pt-20 md:pt-28">
        <Heading className="grainy-text mb-4 text-3xl md:text-5xl">
          Projects
        </Heading>
        <Subheading className="mb-4">
          These projects reflect my journey as a developer, demonstrating my
          ability to learn, adapt, and bring ideas to life through code.
        </Subheading>

        <div
          ref={divRef}
          className="shadow-section-inset my-8 grid grid-cols-1 gap-8 md:grid-cols-2"
        >
          {projects.map((project, idx) => (
            <ProjectCard
              idx={idx}
              project={project}
              isInView={isInView}
              key={idx}
            />
          ))}
        </div>
      </Container>
    </div>
  );
}
