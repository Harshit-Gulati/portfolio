"use client";

import { useState } from "react";
import { IconCode, IconPlayerPlay } from "@tabler/icons-react";
import { cn } from "@/lib/utils";

interface InteractiveDemoProps {
  title?: string;
  description?: string;
  children: React.ReactNode;
  code?: string;
  className?: string;
}

export const InteractiveDemo = ({
  title,
  description,
  children,
  code,
  className,
}: InteractiveDemoProps) => {
  const [viewCode, setViewCode] = useState(false);

  return (
    <div
      className={cn(
        "my-8 overflow-hidden rounded-xl border border-neutral-200/80 bg-neutral-50/50 shadow-xs dark:border-neutral-800/80 dark:bg-neutral-900/40",
        className,
      )}
    >
      <div className="flex items-center justify-between border-b border-neutral-200/80 bg-neutral-100/60 px-4 py-2.5 dark:border-neutral-800/80 dark:bg-neutral-900/80">
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1.5 rounded-full border border-indigo-500/20 bg-indigo-50 px-2 py-0.5 text-xs font-medium text-indigo-700 dark:bg-indigo-950/40 dark:text-indigo-300">
            <IconPlayerPlay size={12} className="animate-pulse" />
            <span>Interactive Demo</span>
          </div>
          {title && (
            <span className="text-primary text-xs font-semibold">{title}</span>
          )}
        </div>

        {code && (
          <button
            type="button"
            onClick={() => setViewCode(!viewCode)}
            className="flex items-center gap-1 rounded-md px-2 py-1 text-xs text-neutral-500 transition-colors hover:bg-neutral-200/60 hover:text-neutral-900 dark:text-neutral-400 dark:hover:bg-neutral-800 dark:hover:text-neutral-100"
          >
            <IconCode size={14} />
            <span>{viewCode ? "Preview" : "Code"}</span>
          </button>
        )}
      </div>

      {description && (
        <div className="border-b border-neutral-200/40 px-4 py-2 text-xs text-neutral-500 dark:border-neutral-800/40 dark:text-neutral-400">
          {description}
        </div>
      )}

      <div className="p-6">
        {viewCode && code ? (
          <pre className="overflow-x-auto rounded-lg bg-neutral-950 p-4 text-xs font-mono text-neutral-200">
            <code>{code}</code>
          </pre>
        ) : (
          <div className="flex min-h-[140px] items-center justify-center">
            {children}
          </div>
        )}
      </div>
    </div>
  );
};
