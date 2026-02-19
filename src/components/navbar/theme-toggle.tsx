"use client";

import { motion } from "motion/react";
import { useTheme } from "next-themes";
import { IconMoon, IconSun } from "@tabler/icons-react";
import { useEffect, useRef, useState } from "react";
import { flushSync } from "react-dom";

export const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState<boolean>(false);
  const ref = useRef<HTMLButtonElement>(null);

  const handleThemeChange = async () => {
    const newTheme = theme === "dark" ? "light" : "dark";

    if (
      !ref.current ||
      !document.startViewTransition ||
      window.matchMedia("(prefers-reduced-motion: reduce").matches
    ) {
      setTheme(newTheme);
      return;
    }

    await document.startViewTransition(() => {
      flushSync(() => {
        setTheme(newTheme);
      });
    }).ready;

    const { top, left, width, height } = ref.current.getBoundingClientRect();
    const right = window.innerWidth - left;
    const bottom = window.innerHeight - top;
    const maxRadius = Math.hypot(Math.max(left, right), Math.max(top, bottom));

    document.documentElement.animate(
      {
        clipPath: [
          `circle(0px at ${left + width / 2}px ${top + height / 2}px)`,
          `circle(${maxRadius}px at ${left + width / 2}px ${top + height / 2}px)`,
        ],
      },
      {
        duration: 500,
        easing: "ease-in-out",
        pseudoElement: "::view-transition-new(root)",
      },
    );
  };

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted)
    return (
      <div className="flex items-center rounded-md p-2 hover:bg-neutral-100 dark:hover:bg-neutral-800">
        <div className="size-4" />
      </div>
    );

  return (
    <button
      ref={ref}
      onClick={handleThemeChange}
      className="text-primary flex cursor-pointer items-center rounded-md p-2 transition-colors duration-400 hover:text-indigo-600 dark:text-neutral-200"
    >
      {theme === "dark" ? (
        <motion.span
          key="sun"
          initial={{ opacity: 0, rotate: -90 }}
          animate={{ opacity: 1, rotate: 0 }}
          exit={{ opacity: 0, rotate: 90 }}
          transition={{ duration: 0.2 }}
        >
          <IconSun className="size-4" />
        </motion.span>
      ) : (
        <motion.span
          key="moon"
          initial={{ opacity: 0, rotate: 90 }}
          animate={{ opacity: 1, rotate: 0 }}
          exit={{ opacity: 0, rotate: -90 }}
          transition={{ duration: 0.2 }}
        >
          <IconMoon className="size-4" />
        </motion.span>
      )}
    </button>
  );
};
