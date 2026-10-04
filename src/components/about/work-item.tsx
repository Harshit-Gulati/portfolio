"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { IconChevronDown, IconTerminal2 } from "@tabler/icons-react";
import { WorkItem, Position } from "@/data/about/work";

export const SingleWorkItem = ({ work }: { work: WorkItem }) => {
  return (
    <div className="group/experience border-b border-neutral-200/70 py-6 last:border-b-0 dark:border-neutral-800/70">
      {/* Company Header */}
      <div className="flex items-start gap-3 sm:items-center">
        {/* Company Avatar */}
        <div className="relative flex size-7.5 shrink-0 items-center justify-center overflow-hidden rounded-md border border-neutral-200 bg-white select-none dark:border-neutral-800 dark:bg-neutral-900">
          <Image
            src={work.logo}
            fill
            alt={work.alt}
            className="size-full rounded-md object-cover transition-[filter] duration-300"
          />
        </div>
        {/* Company Title & Location / Status */}
        <div className="flex min-w-0 flex-1 flex-col gap-x-3 gap-y-1 sm:flex-row sm:items-baseline sm:justify-between">
          <div className="flex items-center gap-1.5">
            <h3 className="text-base font-semibold tracking-tight text-neutral-900 dark:text-neutral-100">
              {work.href ? (
                <Link
                  href={work.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline-offset-4 transition-colors hover:text-indigo-600 hover:underline dark:hover:text-indigo-400"
                  aria-label={`Visit ${work.company} website`}
                >
                  {work.company}
                </Link>
              ) : (
                work.company
              )}
            </h3>
          </div>
          <div className="flex items-center gap-2 font-mono text-xs text-neutral-500 dark:text-neutral-400">
            <span>{work.location}</span>
            {work.isCurrent && (
              <span
                className="relative flex size-2.5 items-center justify-center"
                title="Currently Working"
              >
                <span className="absolute inline-flex size-2.5 animate-ping rounded-full bg-emerald-500 opacity-60" />
                <span className="relative inline-flex size-1.5 rounded-full bg-emerald-500" />
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Positions tree along the vertical continuous line */}
      <div className="relative mt-4 space-y-4">
        {work.roles.map((roleItem, rIdx) => (
          <PositionItem
            key={rIdx}
            position={roleItem}
            isLast={rIdx === work.roles.length - 1}
            tech={work.tech}
          />
        ))}
      </div>
    </div>
  );
};

const PositionItem = ({
  position,
  isLast,
  tech,
}: {
  position: Position;
  isLast: boolean;
  tech?: string[];
}) => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="relative">
      {!isLast && (
        <div className="absolute top-7 -bottom-4 left-3.5 w-px bg-linear-to-b from-neutral-200 via-neutral-300 to-transparent dark:from-neutral-800 dark:via-neutral-700 dark:to-transparent" />
      )}

      {/* Position Header button */}
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        className="group/pos flex w-full cursor-pointer items-start text-left outline-none"
        aria-expanded={isOpen}
      >
        <div className="flex w-full items-start gap-3">
          {/* Icon tile */}
          <div className="relative z-10 flex size-7 shrink-0 items-center justify-center rounded-md border border-neutral-200 bg-white text-neutral-600 ring-2 ring-white select-none dark:border-neutral-800 dark:bg-neutral-900 dark:text-neutral-300 dark:ring-neutral-950">
            <IconTerminal2 size={14} />
          </div>

          <div className="min-w-0 flex-1">
            <div className="flex items-center justify-between gap-2">
              <h4 className="text-sm font-medium text-neutral-900 transition-colors dark:text-neutral-100">
                {position.role}
              </h4>
              <motion.div
                animate={{ rotate: isOpen ? 180 : 0 }}
                transition={{ duration: 0.2 }}
                className="text-neutral-400 group-hover/pos:text-neutral-700 dark:text-neutral-500 dark:group-hover/pos:text-neutral-300"
              >
                <IconChevronDown size={15} />
              </motion.div>
            </div>

            {/* Position metadata row */}
            <div className="mt-1 flex flex-wrap items-center gap-2 font-mono text-xs text-neutral-500 dark:text-neutral-400">
              {position.type && (
                <>
                  <span>{position.type}</span>
                  <span className="h-3 w-px bg-neutral-200 dark:bg-neutral-800" />
                </>
              )}
              <span>{position.period}</span>
            </div>
          </div>
        </div>
      </button>

      {/* Collapsible Details */}
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="pt-2 pb-1 pl-10">
              <ul className="space-y-1.5 text-xs leading-relaxed text-neutral-600 sm:text-sm dark:text-neutral-400">
                {position.details.map((detail, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="mt-1.5 size-1 shrink-0 rounded-full bg-neutral-400 dark:bg-neutral-600" />
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>

              {/* Tech Stack subtle chips */}
              {isLast && tech && tech.length > 0 && (
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {tech.map((t, idx) => (
                    <span
                      key={idx}
                      className="rounded border border-neutral-200/80 bg-neutral-100/60 px-1.5 py-0.5 font-mono text-[11px] text-neutral-600 dark:border-neutral-800 dark:bg-neutral-900/60 dark:text-neutral-400"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
