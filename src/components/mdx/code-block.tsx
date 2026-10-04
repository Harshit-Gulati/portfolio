"use client";

import { useState } from "react";
import { IconCheck, IconCopy } from "@tabler/icons-react";
import { cn } from "@/lib/utils";

interface PreCodeProps {
  children?: React.ReactNode;
  className?: string;
  filename?: string;
}

export const PreCode = ({ children, className, filename }: PreCodeProps) => {
  const [copied, setCopied] = useState(false);

  const extractText = (node: React.ReactNode): string => {
    if (typeof node === "string") return node;
    if (Array.isArray(node)) return node.map(extractText).join("");
    if (typeof node === "object" && node && "props" in node) {
      return extractText((node as { props: { children?: React.ReactNode } }).props.children);
    }
    return "";
  };

  const handleCopy = () => {
    const text = extractText(children);
    if (!text) return;
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="group relative my-6 overflow-hidden rounded-xl border border-neutral-200/80 bg-neutral-950 text-neutral-100 dark:border-neutral-800">
      <div className="flex items-center justify-between border-b border-neutral-800/80 bg-neutral-900/60 px-4 py-2 text-xs font-mono text-neutral-400">
        <span>{filename || "code"}</span>
        <button
          type="button"
          onClick={handleCopy}
          aria-label="Copy code"
          className="flex items-center gap-1.5 rounded px-2 py-1 text-xs text-neutral-400 transition-colors hover:bg-neutral-800 hover:text-neutral-200"
        >
          {copied ? (
            <>
              <IconCheck size={14} className="text-emerald-400" />
              <span className="text-emerald-400">Copied!</span>
            </>
          ) : (
            <>
              <IconCopy size={14} />
              <span>Copy</span>
            </>
          )}
        </button>
      </div>
      <div className="overflow-x-auto p-4 text-sm leading-relaxed font-mono">
        <pre className={cn("m-0 p-0 bg-transparent text-neutral-200", className)}>
          {children}
        </pre>
      </div>
    </div>
  );
};
