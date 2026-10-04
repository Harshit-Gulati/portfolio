"use client";

import { WireframeText } from "@/components/ui/wireframe-text";
import { WireframeTextDemo } from "@/components/labs/wireframe-text/demo";
import { CodeBlocks } from "@/components/labs/wireframe-text/code-blocks";
import { FadeIn } from "@/components/ui/fade-in";
import { Heading } from "@/components/heading";
import { Subheading } from "@/components/subheading";
import Link from "next/link";
import { IconExternalLink } from "@tabler/icons-react";
import { useTheme } from "next-themes";

export const BlockTextCardPreview = () => {
  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme === "dark";

  return (
    <div className="flex h-full w-full items-center justify-center pointer-events-none select-none">
      <WireframeText text="WIRE" variant={isDark ? "dark" : "light"} animate={true} />
    </div>
  );
};

export const BlockTextPageContent = () => {
  return (
    <div>
      <div className="mb-8">
        <Heading className="grainy-text mb-4">Oblique Wireframe Text</Heading>
        <Subheading className="mb-4 flex flex-wrap items-center gap-1 text-neutral-600 dark:text-neutral-400">
          <span>A projection-based text component. Inspired By:</span>
          <Link
            href="https://invoicely.gg/"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center gap-1 font-medium text-neutral-900 hover:text-indigo-600 dark:text-neutral-100"
          >
            <span>Invoicely.gg</span>
            <IconExternalLink size={14} />
          </Link>
        </Subheading>
      </div>

      <div className="flex flex-col gap-8">
        <div className="space-y-6">
          <div className="sticky top-24 space-y-6">
            <WireframeTextDemo />
          </div>
        </div>

        <FadeIn className="space-y-6 lg:col-span-5">
          <Heading as="h2" className="text-xl font-semibold">
            Installation
          </Heading>
          <CodeBlocks />
        </FadeIn>
      </div>
    </div>
  );
};

export const blockTextLab = {
  slug: "block-text",
  title: "Oblique Wireframe Text",
  description: "Projection-based 3D wireframe text rendering inspired by isometric architectural drawings.",
  seo: {
    title: "Oblique Wireframe Text | Labs",
    description: "A custom projection-based oblique wireframe text component built with React and Tailwind CSS.",
  },
  CardPreview: BlockTextCardPreview,
  PageContent: BlockTextPageContent,
};
