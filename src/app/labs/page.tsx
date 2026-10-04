"use client";

import { Container } from "@/components/container";
import { Heading } from "@/components/heading";
import { Subheading } from "@/components/subheading";
import { FadeIn } from "@/components/ui/fade-in";
import { Link } from "next-view-transitions";
import { allLabs } from "@/components/labs/registry";
import { IconArrowUpRight } from "@tabler/icons-react";

export default function LabsPage() {
  return (
    <div className="flex min-h-screen items-start justify-start">
      <Container className="overflow-visible px-4 pt-20 pb-20 md:pt-28">
        <Heading className="grainy-text mb-4 text-3xl md:text-5xl">
          Labs
        </Heading>

        <Subheading className="mb-8 max-w-xl">
          A collection of interactive UI components, algorithms, experiments by
          me.
        </Subheading>

        {/* Equal Sized Blocks Grid */}
        <div className="grid grid-cols-1 items-stretch gap-6 sm:grid-cols-2">
          {allLabs.map((lab) => {
            const CardPreview = lab.CardPreview;
            return (
              <FadeIn key={lab.slug} className="h-full">
                <Link
                  href={`/labs/${lab.slug}`}
                  className="group relative flex h-full flex-col justify-between overflow-hidden rounded-md border border-neutral-200/80 bg-neutral-50/40 transition-all duration-300 hover:border-indigo-500/40 hover:bg-neutral-50/70 hover:shadow-xs dark:border-neutral-800/80 dark:bg-neutral-900/30 dark:hover:border-indigo-500/30 dark:hover:bg-neutral-900/60"
                >
                  {/* Equal Fixed Height Preview Stage */}
                  <div className="relative flex h-52 shrink-0 items-center justify-center overflow-hidden border-b border-neutral-200/60 bg-white/60 p-4 dark:border-neutral-800/60 dark:bg-neutral-950/60">
                    <CardPreview />
                  </div>

                  {/* Bottom Content Area */}
                  <div className="flex flex-1 flex-col justify-between p-4 sm:p-5">
                    <div>
                      <div className="flex items-center justify-between gap-2">
                        <h3 className="text-base font-semibold tracking-tight text-neutral-900 transition-colors group-hover:text-indigo-600 dark:text-neutral-100 dark:group-hover:text-indigo-400">
                          {lab.title}
                        </h3>
                        <IconArrowUpRight
                          size={15}
                          className="shrink-0 text-neutral-400 opacity-60 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-indigo-600 group-hover:opacity-100 dark:group-hover:text-indigo-400"
                        />
                      </div>

                      <p className="mt-1.5 line-clamp-2 min-h-[2.5rem] text-xs leading-relaxed text-neutral-600 sm:text-sm dark:text-neutral-400">
                        {lab.description}
                      </p>
                    </div>
                  </div>
                </Link>
              </FadeIn>
            );
          })}
        </div>
      </Container>
    </div>
  );
}
