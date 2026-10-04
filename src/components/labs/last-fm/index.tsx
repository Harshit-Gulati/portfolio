"use client";

import { Player } from "@/components/player";
import { Heading } from "@/components/heading";
import { Subheading } from "@/components/subheading";
import { FadeIn } from "@/components/ui/fade-in";
import { ComponentPreview } from "@/components/labs/layout/component-preview";
import { CodeBlockClient } from "@/components/labs/code-block-client";
import { lastFmCodes } from "@/data/labs/last-fm/codes";

export const LastFmCardPreview = () => {
  return (
    <div className="flex h-full w-full items-center justify-center pointer-events-none scale-90 select-none">
      <Player />
    </div>
  );
};

export const LastFmPageContent = () => {
  return (
    <div>
      <div className="mb-8">
        <Heading className="grainy-text mb-4">Last FM</Heading>
        <Subheading className="mb-4 flex flex-wrap items-center gap-1 text-neutral-600 dark:text-neutral-400">
          Show them what you&apos;re listening to.
        </Subheading>
      </div>

      <div className="flex flex-col gap-8">
        <div className="space-y-6">
          <div className="sticky top-24 space-y-6">
            <FadeIn>
              <ComponentPreview>
                <Player />
              </ComponentPreview>
            </FadeIn>
          </div>
        </div>

        <FadeIn className="space-y-6 lg:col-span-5">
          <Heading as="h2" className="text-xl font-semibold">
            Installation
          </Heading>
          <FadeIn>
            {lastFmCodes.map((code, index) => (
              <CodeBlockClient
                key={index}
                code={code.code}
                filename={code.filename}
                language={code.language ?? "typescript"}
              />
            ))}
          </FadeIn>
        </FadeIn>
      </div>
    </div>
  );
};

export const lastFmLab = {
  slug: "last-fm",
  title: "Last.fm Scrobbler Widget",
  description: "Live real-time music scrobbling player connecting to the Last.fm AudioScrobbler API with live album art.",
  seo: {
    title: "Last FM Component | Labs",
    description: "A dynamic Last.fm custom player component that displays real-time track updates and album art.",
  },
  CardPreview: LastFmCardPreview,
  PageContent: LastFmPageContent,
};
