"use client";

import { useInView } from "motion/react";
import { Project } from "@/constants/projects";
import { SectionHeading } from "../section-heading";
import { useRef } from "react";
import { ProjectCard } from "./project-card";
import { Heading } from "../heading";

export const Projects = ({ projects }: { projects: Project[] }) => {
  const divRef = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(divRef, { once: true });

  return (
    <div
      ref={divRef}
      className="mt-4 border-neutral-100 px-4 dark:border-neutral-900"
    >
      <SectionHeading delay={0.2} className="mb-2 px-2">
        I love building stuff.
      </SectionHeading>
      <Heading>Projects</Heading>
      <div className="grid grid-cols-1 gap-8 py-4 md:grid-cols-2">
        {projects.map((project, idx) => (
          <ProjectCard
            idx={idx}
            project={project}
            isInView={isInView}
            key={idx}
          />
        ))}
      </div>
    </div>
  );
};
