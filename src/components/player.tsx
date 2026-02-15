"use client";

import { motion } from "motion/react";
import { useEffect, useState } from "react";
import Image from "next/image";
import { Song } from "@/types/song";

const DEFAULT_LQIP =
  "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjQiIGhlaWdodD0iNjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjY0IiBoZWlnaHQ9IjY0IiBmaWxsPSIjMzMzIi8+PC9zdmc+";

export const Player = () => {
  const [song, setSong] = useState<Song | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const controller = new AbortController();

    const fetchNowPlaying = async () => {
      try {
        setLoading(true);
        setError(false);

        const res = await fetch("/api/track", {
          signal: controller.signal,
          cache: "no-store",
        });

        if (!res.ok) throw new Error("Failed to fetch track");

        const result = await res.json();
        setSong(result.song ?? null);
      } catch (err) {
        if (!(err instanceof DOMException)) {
          console.error("Now playing fetch failed:", err);
          setError(true);
        }
      } finally {
        setLoading(false);
      }
    };

    fetchNowPlaying();

    return () => controller.abort();
  }, []);

  if (loading) return <Skeleton />;

  if (error || !song) return null;

  return (
    <motion.div
      className="mt-3 ml-4 flex w-fit min-w-52 items-center rounded-md"
      style={{
        background: "linear-gradient(90deg, #7b61ff, #00ccb1, #ffc414)",
        backgroundSize: "200% 200%",
      }}
      animate={{
        backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
      }}
      initial={{ opacity: 0, filter: "blur(8px)" }}
      whileInView={{ opacity: 1, filter: "blur(0px)" }}
      transition={{
        backgroundPosition: {
          duration: 6,
          repeat: Infinity,
          repeatType: "reverse",
        },
        opacity: { duration: 0.3 },
        filter: { duration: 0.3 },
      }}
      viewport={{ once: true }}
      aria-label="Now playing"
    >
      <div className="flex min-w-52 items-center rounded-md bg-black/35 p-1 backdrop-blur-xl">
        <Image
          src={song.src}
          alt={`${song.name} album cover`}
          width={64}
          height={64}
          className="size-16 rounded-md object-cover"
          placeholder="blur"
          blurDataURL={DEFAULT_LQIP}
          sizes="64px"
          priority={false}
        />

        <div className="flex flex-col gap-0.5 pl-2">
          <span className="text-sm leading-tight font-semibold text-white">
            {song.name}
          </span>
          <span className="text-xs font-medium text-white">{song.artist}</span>
          <span className="text-[11px] text-white italic">{song.album}</span>
        </div>
      </div>
    </motion.div>
  );
};

/* -------------------------------- Skeleton -------------------------------- */

const Skeleton = () => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.2 }}
    className="mt-3 ml-4 flex w-fit min-w-52 animate-pulse items-center rounded-md px-2 py-1.5"
    aria-hidden
  >
    <div className="size-16 rounded-md bg-neutral-200 dark:bg-neutral-700" />
    <div className="flex flex-col gap-1 pl-2">
      <div className="h-4 w-28 rounded-md bg-neutral-200 dark:bg-neutral-700" />
      <div className="h-4 w-16 rounded-md bg-neutral-200 dark:bg-neutral-700" />
      <div className="h-4 w-20 rounded-md bg-neutral-200 dark:bg-neutral-700" />
    </div>
  </motion.div>
);
