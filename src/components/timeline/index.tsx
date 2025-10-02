"use client";

import { useInView, motion } from "motion/react";
import React, { useRef } from "react";
import { SectionHeading } from "../section-heading";
import { timeline } from "@/constants/timeline";
import { Step } from "./step";

export const Timeline = () => {
  const divRef = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(divRef, { once: true, amount: 0.6 });

  return (
    <div
      ref={divRef}
      className="shadow-section-inset my-4 border-y border-neutral-100 px-4 py-4 dark:border-neutral-900"
    >
      <SectionHeading>
        Here&apos;s a timeline of my life achievements.
      </SectionHeading>
      {timeline.map((year, idx) => (
        <div key={year.title} className="my-4">
          <motion.h2
            className="shadow-custom mb-2 w-fit rounded-md px-4 py-0.5 font-bold text-neutral-900 dark:text-neutral-100"
            initial={{ filter: "blur(10px)", opacity: 0 }}
            animate={{
              filter: isInView ? "blur(0px)" : "blur(10px)",
              opacity: isInView ? 1 : 0,
            }}
            transition={{
              ease: "easeInOut",
              duration: 0.3,
              delay: 0.1 * idx,
            }}
          >
            {year.title}
          </motion.h2>
          <div className="flex flex-col gap-4">
            {year.content.map((item, idx) => (
              <div key={item.title} className="pl-4">
                <Step isInView={isInView} idx={idx}>
                  {item.title}
                </Step>
                {item.description && (
                  <motion.p
                    initial={{ y: -10, opacity: 0 }}
                    animate={{
                      opacity: isInView ? 1 : 0,
                      y: isInView ? 0 : -10,
                    }}
                    transition={{
                      ease: "easeInOut",
                      duration: 0.3,
                      delay: 0.3 * idx,
                    }}
                    className="pt-1 pl-7 text-sm text-neutral-400"
                  >
                    {item.description}
                  </motion.p>
                )}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};
