"use client";
import { motion } from "motion/react";

export const Subheading = ({
  as: Tag = "h2",
  children,
}: {
  as?: "h2" | "h2" | "h3" | "h4" | "h5" | "h6";
  children: React.ReactNode;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, filter: "blur(10px)", y: 10 }}
      animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
      transition={{
        duration: 0.3,
        ease: "easeInOut",
      }}
      viewport={{ once: true }}
    >
      <Tag className="text-secondary max-w-lg px-4 pt-4 text-sm md:text-base">
        {children}
      </Tag>
    </motion.div>
  );
};
