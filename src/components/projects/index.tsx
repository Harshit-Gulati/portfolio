"use client";

import { useInView } from "motion/react";
import { Project } from "@/constants/projects";
import { SectionHeading } from "../section-heading";
import { useRef } from "react";
import { ProjectCard } from "./project-card";

export const Projects = ({ projects }: { projects: Project[] }) => {
  const divRef = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(divRef, { once: true });

  return (
    <div
      ref={divRef}
      className="shadow-section-inset my-4 border-y border-neutral-100 px-4 py-4 dark:border-neutral-900"
    >
      <SectionHeading delay={0.2}>I love building stuff.</SectionHeading>
      <div className="grid grid-cols-1 gap-4 py-4 md:grid-cols-3">
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
