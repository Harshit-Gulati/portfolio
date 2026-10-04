import { Callout } from "./callout";
import { Tabs, Tab } from "./tabs";
import { InteractiveDemo } from "./interactive-demo";
import { PreCode } from "./code-block";
import { WireframeText } from "@/components/ui/wireframe-text";
import { Player } from "@/components/player";
import Link from "next/link";
import React from "react";

export const mdxComponents = {
  Callout,
  Tabs,
  Tab,
  InteractiveDemo,
  WireframeText,
  Player,
  pre: PreCode,
  a: ({ href, children, ...props }: React.AnchorHTMLAttributes<HTMLAnchorElement>) => {
    const isInternal = href && (href.startsWith("/") || href.startsWith("#"));
    if (isInternal) {
      return (
        <Link
          href={href}
          className="font-medium text-indigo-600 underline underline-offset-4 transition-colors hover:text-indigo-500 dark:text-indigo-400 dark:hover:text-indigo-300"
          {...props}
        >
          {children}
        </Link>
      );
    }
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="font-medium text-indigo-600 underline underline-offset-4 transition-colors hover:text-indigo-500 dark:text-indigo-400 dark:hover:text-indigo-300"
        {...props}
      >
        {children}
      </a>
    );
  },
  h2: ({ children, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h2
      className="mt-10 mb-4 text-2xl font-bold tracking-tight text-neutral-900 dark:text-neutral-100"
      {...props}
    >
      {children}
    </h2>
  ),
  h3: ({ children, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h3
      className="mt-8 mb-3 text-xl font-semibold tracking-tight text-neutral-900 dark:text-neutral-100"
      {...props}
    >
      {children}
    </h3>
  ),
  hr: () => (
    <hr className="my-8 border-neutral-200 dark:border-neutral-800" />
  ),
};

export { Callout, Tabs, Tab, InteractiveDemo, PreCode };
