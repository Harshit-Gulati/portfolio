import { motion } from "motion/react";

interface TechTagProps {
  icon: React.ReactElement;
  name: string;
}

export const TechTag = ({ icon: Icon, name }: TechTagProps) => {
  return (
    <motion.div
      initial="rest"
      whileHover="hovered"
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className="-mr-3 flex items-center justify-start rounded-full border border-neutral-200 bg-neutral-100 p-1 text-xs text-neutral-500 hover:z-10 dark:border-neutral-700 dark:bg-neutral-800"
    >
      <span className="size-4 shrink-0">{Icon}</span>
      <motion.span
        variants={{
          rest: { width: 0, opacity: 0, paddingLeft: 0, paddingRight: 0 },
          hovered: {
            width: "auto",
            opacity: 1,
            paddingLeft: 4,
            paddingRight: 2,
          },
        }}
        className="w-fit overflow-hidden whitespace-nowrap text-neutral-500 dark:text-neutral-200"
      >
        {name}
      </motion.span>
    </motion.div>
  );
};
