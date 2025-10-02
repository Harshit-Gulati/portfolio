"use client";
import Image from "next/image";
import { useState } from "react";
import {
  motion,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from "motion/react";
import { ThemeToggle } from "./theme-toggle";
import { Link } from "next-view-transitions";
import { navItems } from "@/constants/nav-items";

export const DesktopNavbar = () => {
  const [hovered, setHovered] = useState<number | null>(null);

  const [scrolled, setScrolled] = useState<boolean>(false);
  const { scrollY } = useScroll();

  const y = useTransform(scrollY, [0, 100], [0, 10]);
  const width = useTransform(scrollY, [0, 100], ["92%", "75%"]);

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 20) setScrolled(true);
    else setScrolled(false);
  });
  return (
    <div className="fixed inset-x-0 top-0 z-50 mx-auto hidden max-w-4xl md:block">
      <motion.nav
        className="mx-auto flex max-w-4xl items-center justify-between rounded-full bg-white/50 px-3 py-2 backdrop-blur-sm dark:bg-neutral-900/50"
        style={{
          boxShadow: scrolled ? "var(--shadow-custom)" : "none",
          width,
          y,
        }}
        transition={{ duration: 0.4, ease: "linear" }}
      >
        <Link href="/">
          <motion.span
            animate={{ rotateY: scrolled ? 180 : 0 }}
            transition={{ duration: 0.6, ease: "linear" }}
            className="flex items-center justify-center"
          >
            <Image
              className="h-10 w-10 rounded-full"
              src="/avatar.png"
              height={100}
              width={100}
              alt="Avatar"
            />
          </motion.span>
        </Link>
        <div className="flex items-center">
          <ThemeToggle />
          {navItems.map((item, idx) => (
            <Link
              className="relative px-2 py-1 text-sm"
              href={item.href}
              key={idx}
              onMouseEnter={() => setHovered(idx)}
              onMouseLeave={() => setHovered(null)}
            >
              {hovered === idx && (
                <motion.span
                  layoutId="hovered-span"
                  className="absolute inset-0 h-full w-full rounded-md bg-neutral-100 dark:bg-neutral-800"
                />
              )}
              <span className="relative z-10">{item.title}</span>
            </Link>
          ))}
        </div>
      </motion.nav>
    </div>
  );
};
