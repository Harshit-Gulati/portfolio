"use client";

import { motion } from "motion/react";
import Image from "next/image";
import { useState } from "react";

export const Avatar = () => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <motion.div
      initial={{ opacity: 0, filter: "blur(12px)" }}
      animate={
        !isLoading
          ? { opacity: 1, filter: "blur(0px)" }
          : { opacity: 0, filter: "blur(12px)" }
      }
      transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
      className="pointer-events-none size-20 shrink-0 select-none md:size-40"
    >
      <Image
        src="/avatar.jpg"
        width={150}
        height={150}
        className="size-full rounded-md object-cover shadow-[0_0_5px_#4F46E550,0_0_15px_#4F46E560,0_0_20px_#4F46E54d] md:shadow-[0_0_5px_#4F46E550,0_0_35px_#4F46E560,0_0_60px_#4F46E54d]"
        alt="avatar"
        onLoad={() => setIsLoading(false)}
      />
    </motion.div>
  );
};
