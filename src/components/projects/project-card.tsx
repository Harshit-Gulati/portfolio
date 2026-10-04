"use client";

import Image from "next/image";
import Link from "next/link";
import { Project } from "@/constants/projects";
import {
  IconArrowUpRight,
  IconBrandGithub,
  IconSparkles,
} from "@tabler/icons-react";
import { TechTag } from "./tech-tag";
import { motion } from "motion/react";

interface ProjectCardProps {
  project: Project;
  idx?: number;
  isInView?: boolean;
}

export const ProjectCard = ({
  project,
  idx = 0,
  isInView = true,
}: ProjectCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, filter: "blur(8px)", y: 12 }}
      animate={{
        opacity: isInView ? 1 : 0,
        filter: isInView ? "blur(0px)" : "blur(8px)",
      }}
      transition={{
        duration: 0.35,
        delay: idx * 0.08,
        ease: "easeOut",
      }}
      className="group relative flex flex-col justify-between overflow-hidden rounded-md border border-neutral-200/80 bg-neutral-900/2 p-5 transition-all duration-300 hover:border-indigo-500/40 hover:bg-neutral-900/4 hover:shadow-[0_0_30px_rgba(99,102,241,0.08)] dark:border-neutral-800/80 dark:bg-neutral-900/30 dark:hover:border-indigo-500/30 dark:hover:bg-neutral-900/60 dark:hover:shadow-[0_0_30px_rgba(99,102,241,0.12)]"
    >
      {/* Ambient gradient aura */}
      <div className="pointer-events-none absolute -top-12 -right-12 size-40 rounded-full bg-linear-to-br from-indigo-500/10 via-purple-500/5 to-transparent blur-2xl transition-opacity duration-500 group-hover:opacity-100 dark:from-indigo-500/15" />

      <div>
        {/* Floating App Stage */}
        <div className="relative aspect-video w-full overflow-hidden rounded-md border border-neutral-200/80 bg-neutral-100 shadow-xs dark:border-neutral-800 dark:bg-neutral-950">
          <Image
            src={project.src}
            alt={project.title}
            fill
            className="object-cover object-top transition-transform duration-500 ease-out group-hover:scale-[1.04]"
          />
          {/* Subtle top glare */}
          <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-black/40 via-transparent to-white/10 dark:to-white/5" />
        </div>

        {/* Content */}
        <div className="pt-5">
          <h3 className="text-lg font-bold tracking-tight text-neutral-900 dark:text-neutral-100">
            {project.title}
          </h3>

          <p className="mt-2 text-sm leading-relaxed text-neutral-600 dark:text-neutral-400">
            {project.description}
          </p>
        </div>
      </div>

      {/* Buttons and Skills Footer Area */}
      <div className="mt-6 space-y-4 border-t border-neutral-200/70 pt-4 dark:border-neutral-800/70">
        {/* Action Buttons: Equal size & above skills */}
        <div className="grid grid-cols-2 gap-2.5">
          {project.href ? (
            <Link
              href={project.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full items-center justify-center gap-1.5 rounded-md border border-neutral-200 bg-white py-2 text-xs font-medium text-neutral-900 shadow-2xs transition-colors hover:border-indigo-600 hover:text-indigo-600 dark:border-neutral-800 dark:bg-neutral-900 dark:text-neutral-100 dark:hover:border-indigo-500 dark:hover:text-indigo-400"
            >
              <span>Live Demo</span>
              <IconArrowUpRight size={13} />
            </Link>
          ) : (
            <div />
          )}

          {project.github && (
            <Link
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full items-center justify-center gap-1.5 rounded-md border border-neutral-200 bg-white py-2 text-xs font-medium text-neutral-900 shadow-2xs transition-colors hover:border-indigo-600 hover:text-indigo-600 dark:border-neutral-800 dark:bg-neutral-900 dark:text-neutral-100 dark:hover:border-indigo-500 dark:hover:text-indigo-400"
            >
              <IconBrandGithub size={14} />
              <span>Source Code</span>
            </Link>
          )}
        </div>

        {/* Skills: Original hover-to-expand tags at bottom */}
        <div className="flex flex-wrap items-center pt-1 select-none">
          {project.tags.map((tag, tIdx) => (
            <TechTag key={tag.name + tIdx} icon={tag.icon} name={tag.name} />
          ))}
        </div>
      </div>
    </motion.div>
  );
};
