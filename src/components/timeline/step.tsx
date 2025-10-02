import { cn } from "@/lib/utils";
import { IconCircleCheckFilled } from "@tabler/icons-react";
import { motion } from "motion/react";

interface StepProps {
  className?: string;
  children: React.ReactNode;
  isInView: boolean;
  idx: number;
}

export const Step = ({ className, children, isInView, idx }: StepProps) => (
  <motion.div
    initial={{ y: -10, opacity: 0 }}
    animate={{
      opacity: isInView ? 1 : 0,
      y: isInView ? 0 : -10,
    }}
    transition={{
      ease: "easeInOut",
      duration: 0.3,
      delay: 0.2 * idx,
    }}
    className={cn("flex items-start gap-2", className)}
  >
    <IconCircleCheckFilled className="mt-0.5 h-5 w-5 text-neutral-500" />
    <motion.h3
      initial={{ y: -10, opacity: 0 }}
      animate={{
        opacity: isInView ? 1 : 0,
        y: isInView ? 0 : -10,
      }}
      transition={{
        ease: "easeInOut",
        duration: 0.3,
        delay: 0.2 * idx,
      }}
      className="text-neutral-600 dark:text-neutral-400"
    >
      {children}
    </motion.h3>
  </motion.div>
);
