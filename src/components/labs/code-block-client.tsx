"use client";

import { useState } from "react";
import { IconCheck, IconCopy } from "@tabler/icons-react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";

interface CodeBlockProps {
  code: string;
  language?: string;
  filename?: string;
  maxHeight?: string;
}

export function CodeBlockClient({
  code,
  language = "typescript",
  filename,
  maxHeight = "300px",
}: CodeBlockProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="group relative mb-4 overflow-hidden rounded-md border border-neutral-200 bg-white dark:border-neutral-800 dark:bg-neutral-800">
      {filename && (
        <div className="flex items-center justify-between border-b border-neutral-100 bg-neutral-200 px-4 py-2 text-xs text-neutral-700 dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-400">
          <span>{filename}</span>
          <button
            onClick={handleCopy}
            className={`${copied ? "cursor-default" : "cursor-pointer"} flex items-center gap-1 transition-colors hover:text-neutral-400 dark:hover:text-white`}
          >
            {copied ? (
              <IconCheck size={14} className="text-green-500" />
            ) : (
              <IconCopy size={14} />
            )}
            <span className="hidden sm:inline">
              {copied ? "Copied!" : "Copy"}
            </span>
          </button>
        </div>
      )}
      {!filename && (
        <button
          onClick={handleCopy}
          className={`${copied ? "cursor-default" : "cursor-pointer"} absolute top-2 right-2 z-10 rounded p-1 text-neutral-400 hover:bg-neutral-700 hover:text-white`}
        >
          {copied ? (
            <IconCheck size={14} className="text-green-500" />
          ) : (
            <IconCopy size={14} />
          )}
        </button>
      )}
      <div className="max-h-75 overflow-y-auto text-xs">
        <SyntaxHighlighter
          language={language}
          style={vscDarkPlus}
          customStyle={{
            margin: 0,
            borderRadius: 0,
          }}
          showLineNumbers={true}
        >
          {code}
        </SyntaxHighlighter>
      </div>
    </div>
  );
}
