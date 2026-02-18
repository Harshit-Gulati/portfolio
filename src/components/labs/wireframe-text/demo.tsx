"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { ComponentPreview } from "@/components/labs/layout/component-preview";
import { WireframeText } from "@/components/ui/wireframe-text";
import { ComponentControls } from "@/components/labs/layout/component-controls";
import { FadeIn } from "@/components/ui/fade-in";

export const WireframeTextDemo = () => {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const currentVariant = mounted && theme === "dark" ? "dark" : "light";

  const [inputText, setInputText] = useState("Hello");
  const [animate, setAnimate] = useState(true);

  useEffect(() => setMounted(true), []);

  return (
    <FadeIn className="space-y-4">
      <ComponentPreview>
        <div className="my-5 flex h-72 w-full items-center justify-center">
          <WireframeText
            text={inputText}
            variant={currentVariant}
            animate={animate}
            className="h-full w-full"
          />
        </div>
      </ComponentPreview>
      <ComponentControls>
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end">
          <div className="flex-1 space-y-2">
            <label className="text-xs font-semibold tracking-wide text-neutral-500 uppercase">
              Text Input
            </label>
            <div className="relative">
              <input
                type="text"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                className="w-full rounded-md border border-neutral-200 bg-white px-3 py-2 text-sm outline-none focus:border-neutral-400 focus:ring-2 focus:ring-neutral-200/50 dark:border-neutral-700 dark:bg-neutral-800 dark:text-white dark:focus:border-neutral-500"
              />
              <div className="absolute top-1/2 right-2 -translate-y-1/2 text-xs text-neutral-400">
                {inputText.length} chars
              </div>
            </div>
          </div>
          <div className="flex items-center gap-2 pb-2">
            <label className="flex cursor-pointer items-center gap-2 text-sm text-neutral-600 select-none dark:text-neutral-300">
              <input
                type="checkbox"
                checked={animate}
                onChange={(e) => setAnimate(e.target.checked)}
                className="h-4 w-4 rounded-md border-gray-300 text-neutral-900 focus:ring-neutral-900"
              />
              Animate
            </label>
          </div>
        </div>
      </ComponentControls>
    </FadeIn>
  );
};
