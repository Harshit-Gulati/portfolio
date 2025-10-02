import { Project } from "@/constants/projects";
import { truncateText } from "@/utils/project-description";
import {
  IconArrowRight,
  IconArrowUpRight,
  IconBrandGithub,
} from "@tabler/icons-react";
import { motion } from "motion/react";
import { Link } from "next-view-transitions";
import Image from "next/image";
import { useState } from "react";
import { TechTag } from "./tech-tag";

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
      className="group relative mb-4 flex h-96 w-full flex-col items-start rounded-2xl"
    >
      <Image
        src={project.src}
        alt={project.title}
        height={300}
        width={300}
        className="h-[200px] w-full rounded-xl object-cover transition duration-200 group-hover:scale-[1.02]"
      />
      <div className="flex h-28 flex-col pr-8 transition-all duration-300 group-hover:pl-4">
        <Link
          href={`/projects/${project.slug}`}
          className="z-20 mt-2 w-fit text-base font-medium tracking-tight text-neutral-500 dark:text-neutral-200"
        >
          <div className="flex items-center">
            <span className="pr-1">{project.title}</span>
            <motion.span
              initial={{ maxWidth: 0, opacity: 0 }}
              animate={{
                maxWidth: hovered ? 100 : 0,
                opacity: hovered ? 1 : 0,
              }}
              transition={{
                duration: 0.3,
                ease: "linear",
              }}
            >
              <IconArrowRight className="size-4" />
            </motion.span>
          </div>
          <span className="block h-0.5 max-w-0 bg-neutral-500 transition-all duration-400 group-hover:max-w-full dark:bg-neutral-200" />
        </Link>
        <p className="mt-1 pt-2 text-sm text-neutral-500 dark:text-neutral-400">
          {truncateText(project.description)}
        </p>
      </div>
      <div className="flex flex-wrap items-center gap-1 pr-8 pb-3 transition-all duration-300 group-hover:pl-4">
        {project.tags.map((tag, idx) => (
          <TechTag key={tag.name + idx} icon={tag.icon} name={tag.name} />
        ))}
      </div>
      <div className="flex flex-wrap items-center justify-start gap-1 pr-8 pb-2 text-xs transition-all duration-300 group-hover:pl-4">
        {project.href && (
          <Link
            href={project.href}
            target="_blank"
            className="mr-1 flex items-center justify-center rounded-lg border-neutral-200 bg-neutral-100 text-neutral-700 hover:z-10 hover:scale-[1.05] dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-200"
          >
            <IconArrowUpRight className="pl-2" />
            <span className="pr-2 pl-1">Live Demo</span>
          </Link>
        )}
        <Link
          href={project.github}
          target="_blank"
          className="flex items-center justify-center rounded-lg border-neutral-200 bg-neutral-100 text-neutral-700 hover:z-10 hover:scale-[1.05] dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-200"
        >
          <IconBrandGithub className="pl-2" />
          <span className="pr-2 pl-1">GitHub</span>
        </Link>
      </div>
    </motion.div>
  );
};
