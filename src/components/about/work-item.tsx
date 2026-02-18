import Image from "next/image";
import { FadeIn } from "../ui/fade-in";
import Link from "next/link";
import { IconChevronDown } from "@tabler/icons-react";
import { AnimatePresence, motion } from "motion/react";
import { WorkItem } from "@/data/about/work";

export const SingleWorkItem = ({
  isExpanded,
  setExpanded,
  work,
}: {
  isExpanded: boolean;
  setExpanded: () => void;
  work: WorkItem;
}) => {
  return (
    <FadeIn>
      <button
        className="relative flex w-full items-start justify-start gap-2 rounded-md p-2 transition-colors hover:bg-neutral-100 dark:hover:bg-neutral-900"
        onClick={() => setExpanded()}
      >
        <div className="ring-secondary pointer-events-none relative size-8 shrink-0 rounded-md border border-[#9013fe80] select-none">
          <Image
            src={work.logo}
            fill
            alt={work.alt}
            className="size-full rounded-md object-cover"
          />
        </div>
        <div className="flex w-3/5 flex-col items-start text-left">
          <div className="text-primary flex items-center gap-1 font-semibold">
            <Link
              href={work.href}
              target="_blank"
              className="underline-offset-2 hover:underline"
            >
              {work.company}
            </Link>
            {work.isCurrent && (
              <div className="flex items-center gap-1 rounded border px-1 py-0.5 text-xs font-normal tracking-tight">
                <span className="size-2 animate-pulse rounded-full bg-green-600"></span>
                Working
              </div>
            )}
          </div>
          <div className="text-secondary text-sm font-medium">
            {work.location}
          </div>
        </div>
        <div className="text-primary/80 absolute top-2 right-2">
          <motion.span
            className="inline-block"
            animate={{ rotate: isExpanded ? 180 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <IconChevronDown size={16} className="" />
          </motion.span>
        </div>
      </button>
      <AnimatePresence initial={false}>
        {isExpanded && (
          <motion.div
            key="content"
            initial={{ opacity: 0, height: 0, y: -6, filter: "blur(4px)" }}
            animate={{ opacity: 1, height: "auto", y: 0, filter: "blur(0px)" }}
            exit={{ opacity: 0, height: 0, y: -6, filter: "blur(4px)" }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="text-secondary p-2 pl-12">
              <ul>
                {work.details.map((item, index) => (
                  <li key={index} className="list-disc pb-1">
                    {item}
                  </li>
                ))}
              </ul>
              <div className="mt-2 flex flex-wrap gap-1">
                {work.tech.map((tech, index) => (
                  <div
                    key={index}
                    className="text-secondary rounded-md border bg-neutral-100 px-1 py-0.5 text-sm dark:bg-neutral-900"
                  >
                    {tech}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </FadeIn>
  );
};
