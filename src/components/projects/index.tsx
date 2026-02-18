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
      className="mt-16 border-neutral-100 dark:border-neutral-900"
    >
      <Heading className="grainy-text">Projects</Heading>
      <div className="grid grid-cols-1 mt-5 gap-8 md:grid-cols-2">
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
