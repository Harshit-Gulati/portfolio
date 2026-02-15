"use client";

import { Heading } from "@/components/heading";
import { Subheading } from "@/components/subheading";
import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandX,
  IconMail,
} from "@tabler/icons-react";
import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip";

export const TopSection = () => {
  const [isLoading, setIsLoading] = useState(true);
  return (
    <div className="mb-16 flex h-48 flex-col-reverse gap-2 px-4 md:flex-row">
      <div className="flex h-full w-full flex-col items-start justify-start">
        <Heading>Harshit Gulati</Heading>
        <Subheading className="pt-2">
          I&apos;m a final-year B.Tech student and aspiring full-stack
          developer, passionate about building clean, responsive, and
          user-friendly web applications.
        </Subheading>
        <div className="flex gap-2 pt-2 text-neutral-600 dark:text-neutral-500">
          <Tooltip>
            <TooltipTrigger asChild>
              <Link
                href="https://www.linkedin.com/in/harshit-gulati/"
                target="_blank"
              >
                <IconBrandLinkedin
                  size={22}
                  className="transition-colors hover:text-neutral-500 dark:hover:text-neutral-600"
                />
              </Link>
            </TooltipTrigger>
            <TooltipContent>LinkedIn</TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger asChild>
              <Link href="https://github.com/harshit-gulati" target="_blank">
                <IconBrandGithub
                  size={22}
                  className="transition-colors hover:text-neutral-500 dark:hover:text-neutral-600"
                />
              </Link>
            </TooltipTrigger>
            <TooltipContent>GitHub</TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger asChild>
              <Link href="https://x.com/harshitWrld" target="_blank">
                <IconBrandX
                  size={22}
                  className="transition-colors hover:text-neutral-500 dark:hover:text-neutral-600"
                />
              </Link>
            </TooltipTrigger>
            <TooltipContent>X</TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger asChild>
              <Link
                href="mailto:harshit.gulati.999@outlook.com"
                target="_blank"
              >
                <IconMail
                  size={22}
                  className="transition-colors hover:text-neutral-500 dark:hover:text-neutral-600"
                />
              </Link>
            </TooltipTrigger>
            <TooltipContent>Email</TooltipContent>
          </Tooltip>
        </div>
      </div>
      <motion.div
        initial={{ opacity: 0, filter: "blur(12px)" }}
        animate={
          !isLoading
            ? { opacity: 1, filter: "blur(0px)" }
            : { opacity: 0, filter: "blur(12px)" }
        }
        transition={{ duration: 1.2, ease: "easeInOut" }}
        className="pointer-events-none size-24 shrink-0 select-none md:size-48"
      >
        <Image
          src="/avatar.jpg"
          width={150}
          height={150}
          className="size-full rounded-md object-cover shadow-[0_0_5px_#9013FE50,0_0_15px_#9013FE60,0_0_20px_#9013FE4d] md:shadow-[0_0_5px_#9013FE50,0_0_35px_#9013FE60,0_0_60px_#9013FE4d]"
          alt="avatar"
          onLoad={() => setIsLoading(false)}
        />
      </motion.div>
    </div>
  );
};
