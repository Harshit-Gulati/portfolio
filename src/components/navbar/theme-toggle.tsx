"use client";

import { motion } from "motion/react";
import { useTheme } from "next-themes";
import { IconMoon, IconSun } from "@tabler/icons-react";
import { useEffect, useState } from "react";

export const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState<boolean>(false);

  const handleThemeChange = () => {
    setTheme(theme === "dark" ? "light" : "dark");
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
      onClick={handleThemeChange}
      className="flex items-center rounded-md p-2 hover:bg-neutral-100 dark:hover:bg-neutral-800"
    >
      {theme === "dark" ? (
        <motion.span
          key="sun"
          initial={{ opacity: 0, rotate: -90 }}
          animate={{ opacity: 1, rotate: 0 }}
          exit={{ opacity: 0, rotate: 90 }}
          transition={{ duration: 0.2 }}
        >
          <IconSun className="size-4 text-neutral-700 dark:text-neutral-200" />
        </motion.span>
      ) : (
        <motion.span
          key="moon"
          initial={{ opacity: 0, rotate: 90 }}
          animate={{ opacity: 1, rotate: 0 }}
          exit={{ opacity: 0, rotate: -90 }}
          transition={{ duration: 0.2 }}
        >
          <IconMoon className="size-4 text-neutral-700 dark:text-neutral-200" />
        </motion.span>
      )}
    </button>
  );
};
