"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";

interface TabItem {
  label: string;
  children: React.ReactNode;
}

interface TabsProps {
  items?: string[];
  children: React.ReactNode;
  defaultIndex?: number;
}

export const Tabs = ({
  items = [],
  children,
  defaultIndex = 0,
}: TabsProps) => {
  const [selectedIndex, setSelectedIndex] = useState(defaultIndex);

  // When used as <Tabs items={["C++", "QML"]}> ...children... </Tabs>
  const childArray = Array.isArray(children) ? children : [children];

  return (
    <div className="my-6 overflow-hidden rounded-lg border border-neutral-200/80 bg-neutral-50/50 dark:border-neutral-800/80 dark:bg-neutral-900/50">
      <div className="flex items-center gap-1 border-b border-neutral-200/80 bg-neutral-100/60 px-3 py-2 dark:border-neutral-800/80 dark:bg-neutral-900/80">
        {items.map((item, idx) => (
          <button
            key={idx}
            type="button"
            onClick={() => setSelectedIndex(idx)}
            className={cn(
              "rounded-md px-3 py-1 text-xs font-medium transition-all",
              selectedIndex === idx
                ? "bg-white text-neutral-900 shadow-xs dark:bg-neutral-800 dark:text-neutral-100"
                : "text-neutral-500 hover:text-neutral-800 dark:text-neutral-400 dark:hover:text-neutral-200",
            )}
          >
            {item}
          </button>
        ))}
      </div>
      <div className="p-4">
        {childArray[selectedIndex] ?? childArray[0]}
      </div>
    </div>
  );
};

export const Tab = ({ children }: { children: React.ReactNode }) => {
  return <div>{children}</div>;
};
