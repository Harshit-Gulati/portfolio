"use client";

import { useState } from "react";
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll,
} from "motion/react";
import { ThemeToggle } from "./theme-toggle";
import { Link } from "next-view-transitions";
import { navItems } from "@/constants/nav-items";
import { Logo } from "../logo";
import { usePathname } from "next/navigation";

export const DesktopNavbar = () => {
  const [scrolled, setScrolled] = useState<boolean>(false);
  const { scrollY } = useScroll();
  const pathname = usePathname();

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 20) setScrolled(true);
    else setScrolled(false);
  });
  return (
    <div className="fixed inset-x-0 top-3 z-50 mx-auto hidden max-w-4xl md:block">
      <motion.nav
        className={`mx-auto flex max-w-4xl items-center justify-between rounded-md px-2 py-2 ${scrolled && "backdrop-blur-xl"} transition-colors duration-500`}
        style={{
          boxShadow: scrolled ? "var(--shadow-custom)" : "none",
        }}
      >
        <div className="flex h-8 w-12 items-center justify-center overflow-visible">
          <AnimatePresence>
            {(pathname !== "/" || scrolled) && (
              <Link href="/">
                <Logo />
              </Link>
            )}
          </AnimatePresence>
        </div>
        <div className="flex items-center">
          <ThemeToggle />
          {navItems.map((item, idx) => (
            <Link
              className="group relative px-2 py-1 text-sm"
              href={item.href}
              key={idx}
            >
              {item.title}
              <span className="absolute bottom-0 left-1/2 h-0.5 w-0 -translate-x-1/2 rounded-full bg-[#9013FE] transition-all duration-[400ms] ease-out group-hover:w-[calc(100%-10px)]" />
            </Link>
          ))}
        </div>
      </motion.nav>
    </div>
  );
};
