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
      <Container className="overflow-visible px-2 pt-20 md:px-4 md:pt-24 md:pb-1">
        <div className="px-4">
          <Heading>Projects</Heading>
          <Subheading className="mt-2">
            These projects reflect my journey as a developer, demonstrating my
            ability to learn, adapt, and bring ideas to life through code.
          </Subheading>
        </div>
        <div
          ref={divRef}
          className="shadow-section-inset mt-4 grid grid-cols-1 gap-8 p-4 md:grid-cols-2"
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
