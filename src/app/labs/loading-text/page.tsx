"use client";

import { Container } from "@/components/container";
import { useEffect } from "react";
import { animate, useMotionValue } from "motion/react";
import { Heading } from "@/components/heading";
import { Subheading } from "@/components/subheading";
import { Link } from "next-view-transitions";
import { IconExternalLink } from "@tabler/icons-react";
import { useTheme } from "next-themes";
import { WireframeProgress } from "@/components/ui/wireframe-progress";

export default function BlockText() {
  const { theme } = useTheme();
  const progress = useMotionValue(0);

  // Simulate generic loading 0 -> 100
  useEffect(() => {
    const controls = animate(progress, 100, {
      duration: 4,
      ease: "linear",
      repeat: Infinity, // loops forever
      repeatType: "loop", // jumps back to 0 after hitting 100
      repeatDelay: 0.5, // optional: slight pause at full before resetting
    });

    // Cleanup animation on unmount
    return () => controls.stop();
  }, [progress]);
  return (
    <div className="flex items-start justify-start">
      <Container className="overflow-visible px-2 pt-20 md:px-4 md:pt-24 md:pb-1">
        <div className="mb-5 px-2">
          <Heading>Oblique Text</Heading>
          <Subheading className="mt-2 inline-flex gap-1">
            Oblique projected text inspired by
            <Link
              href="https://invoicely.gg/"
              target="_blank"
              className="group hover:text-primary relative flex gap-1 transition-colors"
            >
              Invoicely.gg <IconExternalLink />
              <span className="absolute -bottom-0.5 left-1/2 h-0.5 w-0 -translate-x-1/2 rounded-full bg-[#9013FE] transition-all duration-400 ease-out group-hover:w-full" />
            </Link>
          </Subheading>
        </div>
        {/* // component showcase */}
        <div className="px-2">
          <div>Progress Bar</div>
          <div className="rounded-md border bg-white p-10 dark:bg-black">
            <WireframeProgress
              text="loading"
              animation="wipe"
              progress={progress}
              variant={theme == "dark" ? "dark" : "light"}
            />
          </div>
        </div>
        <div className="px-2">
          <div>Water Fill Animation</div>
          <div className="rounded-md border bg-white p-10 dark:bg-black">
            <WireframeProgress
              text="WATER"
              animation="liquid"
              progress={progress}
              variant={theme == "dark" ? "dark" : "light"}
            />
          </div>
        </div>
      </Container>
    </div>
  );
}
