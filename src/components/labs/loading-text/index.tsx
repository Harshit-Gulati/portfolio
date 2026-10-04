"use client";

import { useEffect } from "react";
import { animate, useMotionValue } from "motion/react";
import { useTheme } from "next-themes";
import { WireframeProgress } from "@/components/ui/wireframe-progress";
import { Heading } from "@/components/heading";
import { Subheading } from "@/components/subheading";
import Link from "next/link";
import { IconExternalLink } from "@tabler/icons-react";

export const LoadingTextCardPreview = () => {
  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme === "dark";
  const progress = useMotionValue(50);

  useEffect(() => {
    const controls = animate(progress, 100, {
      duration: 3.5,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    });
    return () => controls.stop();
  }, [progress]);

  return (
    <div className="flex h-full w-full max-w-[220px] items-center justify-center pointer-events-none select-none">
      <WireframeProgress
        text="FLUID"
        animation="liquid"
        progress={progress}
        variant={isDark ? "dark" : "light"}
      />
    </div>
  );
};

export const LoadingTextPageContent = () => {
  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme === "dark";
  const progress = useMotionValue(0);

  useEffect(() => {
    const controls = animate(progress, 100, {
      duration: 3.5,
      ease: "linear",
      repeat: Infinity,
      repeatType: "loop",
      repeatDelay: 0.5,
    });
    return () => controls.stop();
  }, [progress]);

  return (
    <div>
      <div className="mb-8">
        <Heading className="grainy-text mb-2">Wireframe Progress & Liquid Fill</Heading>
        <Subheading className="flex flex-wrap items-center gap-1.5 text-sm text-neutral-600 dark:text-neutral-400">
          <span>Projection-based typography masks with linear wipe and fluid wave animations.</span>
          <span>Inspired by</span>
          <Link
            href="https://invoicely.gg/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-0.5 font-medium text-neutral-900 hover:text-indigo-600 dark:text-neutral-100 dark:hover:text-indigo-400"
          >
            <span>Invoicely.gg</span>
            <IconExternalLink size={13} />
          </Link>
        </Subheading>
      </div>

      <div className="space-y-8">
        <div className="rounded-xl border border-neutral-200/80 bg-neutral-50/50 p-6 dark:border-neutral-800/80 dark:bg-neutral-900/40">
          <div className="mb-3 text-xs font-mono text-neutral-500">LINEAR WIPE PROGRESS</div>
          <div className="flex items-center justify-center rounded-lg border border-neutral-200/60 bg-white p-10 dark:border-neutral-800/60 dark:bg-neutral-950">
            <WireframeProgress
              text="LOADING"
              animation="wipe"
              progress={progress}
              variant={isDark ? "dark" : "light"}
            />
          </div>
        </div>

        <div className="rounded-xl border border-neutral-200/80 bg-neutral-50/50 p-6 dark:border-neutral-800/80 dark:bg-neutral-900/40">
          <div className="mb-3 text-xs font-mono text-neutral-500">FLUID WAVE LIQUID FILL</div>
          <div className="flex items-center justify-center rounded-lg border border-neutral-200/60 bg-white p-10 dark:border-neutral-800/60 dark:bg-neutral-950">
            <WireframeProgress
              text="WATER"
              animation="liquid"
              progress={progress}
              variant={isDark ? "dark" : "light"}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export const loadingTextLab = {
  slug: "loading-text",
  title: "Wireframe Progress & Liquid Fill",
  description: "Text-masked wireframe progress bar and fluid-fill wave animation using motion values.",
  seo: {
    title: "Wireframe Progress & Liquid Fill | Labs",
    description: "Projection-based typography masks with linear wipe and fluid wave animations built with Motion and React.",
  },
  CardPreview: LoadingTextCardPreview,
  PageContent: LoadingTextPageContent,
};
