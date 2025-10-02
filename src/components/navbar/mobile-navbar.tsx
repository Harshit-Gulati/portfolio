"use client";

import Image from "next/image";
import { useState } from "react";
import { motion } from "motion/react";
import { ThemeToggle } from "./theme-toggle";
import { IconMenu2, IconX } from "@tabler/icons-react";
import { Link } from "next-view-transitions";
import { navItems } from "@/constants/nav-items";

export const MobileNavbar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleToggleMenu = () => setIsOpen((prev) => !prev);

  return (
    <nav className="fixed top-0 left-0 z-50 block w-full border-b border-neutral-100 bg-white md:hidden dark:border-neutral-800 dark:bg-neutral-900">
      <div className="flex w-full items-center justify-between px-4 py-3">
        <Link href="/">
          <Image
            className="h-10 w-10 rounded-full"
            src="/avatar.png"
            height={100}
            width={100}
            alt="Avatar"
          />
        </Link>
        <button
          className="flex h-10 w-10 items-center justify-center rounded-md text-neutral-700 dark:text-neutral-200"
          onClick={handleToggleMenu}
        >
          <IconMenu2 className="size-6" />
        </button>
      </div>
      <NavMenu isOpen={isOpen} handleToggleMenu={handleToggleMenu} />
    </nav>
  );
};

const NavMenu = ({
  isOpen,
  handleToggleMenu,
}: {
  isOpen: boolean;
  handleToggleMenu: () => void;
}) => {
  if (!isOpen) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4, ease: "easeInOut" }}
      className="fixed inset-0 z-50 flex flex-col bg-white dark:bg-neutral-900"
    >
      <div className="flex w-full items-center justify-end px-4 py-3">
        <button
          className="flex h-10 w-10 items-center justify-center rounded-md text-neutral-700 dark:text-neutral-200"
          onClick={handleToggleMenu}
        >
          <IconX className="size-6" />
        </button>
      </div>
      <div className="flex flex-1 flex-col items-center justify-center gap-7">
        {navItems.map((item, idx) => (
          <motion.span
            key={item.title + idx}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
          >
            <Link
              className="text-2xl font-medium text-neutral-800 transition-colors hover:text-neutral-500 dark:text-neutral-200 dark:hover:text-neutral-400"
              href={item.href}
              onClick={handleToggleMenu}
            >
              <span className="relative z-10">{item.title}</span>
            </Link>
          </motion.span>
        ))}
        <ThemeToggle />
      </div>
    </motion.div>
  );
};
