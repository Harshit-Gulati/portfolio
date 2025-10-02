"use client";

import { motion } from "motion/react";
import { useEffect, useState } from "react";
import { Song } from "@/types/song";
import Image from "next/image";

export const Player = () => {
  const [song, setSong] = useState<Song | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNowPlaying = async () => {
      setLoading(true);

      try {
        const res = await fetch("/api/track");

        const result = await res.json();

        setSong(result.song);
      } catch (error) {
        console.error("Error fetching now playing:", error);
      }

      setLoading(false);
    };

    fetchNowPlaying();
  }, []);

  if (!song || loading) return <Skeleton />;

  return (
    <motion.div
      className="mt-3 ml-4 flex w-fit min-w-52 items-center justify-start rounded-md px-2 py-1.5"
      style={{
        background: "linear-gradient(90deg, #7b61ff, #00ccb1, #ffc414)",
        backgroundSize: "200% 200%",
      }}
      animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
      initial={{ filter: "blur(10px)", opacity: 0 }}
      whileInView={{
        filter: "blur(0px)",
        opacity: 1,
      }}
      transition={{
        backgroundPosition: {
          duration: 6,
          repeat: Infinity,
          repeatType: "reverse",
        },
        filter: {
          ease: "easeInOut",
          duration: 0.3,
        },
        opacity: {
          ease: "easeInOut",
          duration: 0.3,
        },
      }}
      viewport={{ once: true }}
    >
      <Image
        className="size-16 rounded-md"
        src={song.src}
        alt="cover"
        height={64}
        width={64}
      />
      <div className="flex h-full flex-col justify-center gap-1 pl-2 text-xs font-semibold tracking-tight text-white md:text-sm">
        <div>{song?.name}</div>
        <div>{song?.artist}</div>
        <div className="italic">{song?.album}</div>
      </div>
    </motion.div>
  );
};

const Skeleton = () => {
  return (
    <motion.div
      initial={{ filter: "blur(10px)", opacity: 0 }}
      animate={{
        filter: "blur(0px)",
        opacity: 1,
      }}
      transition={{
        ease: "easeInOut",
        duration: 0.3,
      }}
      className="m-4 flex animate-pulse items-center justify-start"
    >
      <div className="mb-4 size-16 rounded-md bg-neutral-200 dark:bg-neutral-700" />
      <div className="flex flex-col justify-center px-2">
        <div className="mb-1 h-4 w-28 rounded-md bg-neutral-200 dark:bg-neutral-700" />
        <div className="mb-1 h-4 w-28 rounded-md bg-neutral-200 dark:bg-neutral-700" />
        <div className="mb-1 h-4 w-28 rounded-md bg-neutral-200 dark:bg-neutral-700" />
      </div>
    </motion.div>
  );
};
