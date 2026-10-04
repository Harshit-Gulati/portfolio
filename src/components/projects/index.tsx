"use client";

import { useInView } from "motion/react";
import { Project } from "@/constants/projects";
import { useRef } from "react";
import { ProjectCard } from "./project-card";
import { Heading } from "../heading";
import { Link } from "next-view-transitions";
import { IconArrowRight } from "@tabler/icons-react";

export const Projects = ({ projects }: { projects: Project[] }) => {
  const divRef = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(divRef, { once: true, amount: 0.1 });

  return (
    <div
      ref={divRef}
      className="mt-16 border-neutral-100 dark:border-neutral-900"
    >
      <div className="flex items-baseline justify-between mb-5">
        <Heading as="h2" className="grainy-text">Featured Projects</Heading>
        <Link
          href="/projects"
          className="group inline-flex items-center gap-1 text-xs font-mono text-neutral-500 transition-colors hover:text-indigo-600 dark:text-neutral-400 dark:hover:text-indigo-400"
        >
          <span>All projects</span>
          <IconArrowRight size={13} className="transition-transform duration-200 group-hover:translate-x-0.5" />
        </Link>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {projects.map((project, idx) => (
          <ProjectCard
            idx={idx}
            project={project}
            isInView={isInView}
            key={project.title + idx}
          />
        ))}
      </div>
    </div>
  );
};
