"use client";

import { Project } from "@/constants/projects";
import { truncateText } from "@/utils/project-description";
import {
  IconArrowRight,
  IconBrandGithub,
  IconWorld,
} from "@tabler/icons-react";
import { motion } from "motion/react";
import { Link } from "next-view-transitions";
import Image from "next/image";
import { useState } from "react";
import { TechTag } from "./tech-tag";
import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip";

interface ProjectCardProps {
  isInView: boolean;
  idx: number;
  project: Project;
}

export const ProjectCard = ({ isInView, idx, project }: ProjectCardProps) => {
  const [hovered, setHovered] = useState<boolean>(false);

  return (
    <motion.div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      initial={{ opacity: 0, filter: "blur(10px)", y: 10 }}
      animate={{
        opacity: isInView ? 1 : 0,
        filter: isInView ? "blur(0px)" : "blur(10px)",
        y: isInView ? 0 : 10,
      }}
      whileHover={{ boxShadow: "var(--shadow-custom)" }}
      transition={{
        duration: 0.3,
        delay: idx * 0.1,
        ease: "easeInOut",
        boxShadow: { duration: 0.3, delay: 0 },
      }}
      className="group relative flex flex-col items-start rounded-2xl"
    >
      <Image
        src={project.src}
        alt={project.title}
        width="1920"
        height="1080"
        className="aspect-video rounded-xl object-cover transition duration-300 group-hover:scale-[1.02]"
      />
      <div className="py-4">
        <div className="mb-3 flex items-center justify-between pr-4 transition-all duration-300 group-hover:pl-4">
          <div
            // href={`/projects/${project.slug}`}
            className="z-20 mt-2 w-fit text-lg font-medium tracking-tight text-neutral-500 dark:text-neutral-200"
          >
            <div className="flex items-center">{project.title}</div>
            <span className="block h-0.5 max-w-0 bg-neutral-500 transition-all duration-400 group-hover:max-w-full dark:bg-neutral-200" />
          </div>
          <div className="flex items-center gap-1 text-xs">
            {project.href && (
              <Tooltip>
                <TooltipTrigger asChild>
                  <Link
                    href={project.href}
                    target="_blank"
                    className="flex size-6 items-center justify-center text-neutral-500 hover:scale-[1.05] dark:text-neutral-400"
                  >
                    <IconWorld size={24} />
                  </Link>
                </TooltipTrigger>
                <TooltipContent className="text-xs">Live Demo</TooltipContent>
              </Tooltip>
            )}
            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  href={project.github}
                  target="_blank"
                  className="flex size-6 items-center justify-center text-neutral-500 hover:scale-[1.05] dark:text-neutral-400"
                >
                  <IconBrandGithub size={24} />
                </Link>
              </TooltipTrigger>
              <TooltipContent className="text-xs">GitHub</TooltipContent>
            </Tooltip>
          </div>
        </div>
        <div className="mb-3 flex items-center justify-between pr-12 text-neutral-500 transition-all duration-300 group-hover:pl-4 dark:text-neutral-400">
          {truncateText(project.description)}
        </div>
        <div className="text-sm text-neutral-500 transition-all duration-300 group-hover:pl-4 dark:text-neutral-400">
          Technologies
        </div>
        <div className="mb-3 flex flex-wrap items-center gap-1 pr-8 transition-all duration-300 select-none group-hover:pl-4">
          {project.tags.map((tag, idx) => (
            <TechTag key={tag.name + idx} icon={tag.icon} name={tag.name} />
          ))}
        </div>
        {/* <Link
          href={`/projects/${project.slug}`}
          className="flex w-fit items-center gap-1 text-sm font-medium tracking-tight text-neutral-500 underline-offset-[6px] transition-all duration-300 group-hover:pl-4 hover:underline dark:text-neutral-400"
        >
          View Details <IconArrowRight size={16} />
        </Link> */}
      </div>
    </motion.div>
  );
};
