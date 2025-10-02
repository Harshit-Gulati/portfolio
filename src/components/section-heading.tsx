"use client";
import { cn } from "@/lib/utils";
import { motion, useInView } from "motion/react";
import { useRef } from "react";

export const SectionHeading = ({
  children,
  delay = 0,
  className,
}: {
  children: string;
  delay?: number;
  className?: string;
}) => {
  const ref = useRef<HTMLHeadingElement | null>(null);
  const isInView = useInView(ref, { once: true });
  return (
    <h2
      ref={ref}
      className={cn(
        "relative mt-4 w-fit text-sm font-normal text-neutral-800 md:text-base dark:text-neutral-300",
        className,
      )}
    >
      <Background isInView={isInView} />
      {children.split(" ").map((word, idx) => (
        <motion.span
          initial={{ opacity: 0, y: 5, filter: "blur(2px)" }}
          animate={{
            opacity: isInView ? 1 : 0,
            y: isInView ? 0 : 5,
            filter: isInView ? "blur(0px)" : "blur(2px)",
          }}
          transition={{
            delay: delay + idx * 0.05,
            duration: 0.3,
            ease: "easeInOut",
          }}
          key={word + idx}
        >
          {word}&nbsp;
        </motion.span>
      ))}
    </h2>
  );
};

const Background = ({ isInView }: { isInView: boolean }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: isInView ? 1 : 0 }}
      transition={{
        duration: 0.3,
        ease: "easeInOut",
        delay: 1,
      }}
      className="absolute inset-0 h-full w-full scale-[1.02] bg-neutral-100 dark:bg-neutral-800"
    >
      <div className="absolute -top-px -left-px h-1 w-1 animate-pulse rounded-full bg-neutral-200" />
      <div className="absolute -top-px -right-px h-1 w-1 animate-pulse rounded-full bg-neutral-200" />
      <div className="absolute -bottom-px -left-px h-1 w-1 animate-pulse rounded-full bg-neutral-200" />
      <div className="absolute -right-px -bottom-px h-1 w-1 animate-pulse rounded-full bg-neutral-200" />
    </motion.div>
  );
};
