"use client";

import { Container } from "@/components/container";
import { Heading } from "@/components/heading";
import { Subheading } from "@/components/subheading";
import { projects } from "@/constants/projects";
import { ProjectCard } from "@/components/projects/project-card";
import { useInView } from "motion/react";
import { useRef } from "react";

export default function ProjectsPage() {
  const divRef = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(divRef, { once: true, amount: 0.1 });

  return (
    <div className="flex min-h-screen items-start justify-start">
      <Container className="overflow-visible px-4 pt-20 pb-20 md:pt-28">
        <div className="mb-4 flex items-baseline gap-3">
          <Heading className="grainy-text text-3xl md:text-5xl">
            Projects
          </Heading>
        </div>

        <Subheading className="mb-8 max-w-xl">
          These projects reflect my journey as a developer, demonstrating my
          ability to learn, adapt, and bring ideas to life through code.
        </Subheading>

        <div ref={divRef} className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {projects.map((project, idx) => (
            <ProjectCard
              key={project.title + idx}
              project={project}
              idx={idx}
              isInView={isInView}
            />
          ))}
        </div>
      </Container>
    </div>
  );
}
