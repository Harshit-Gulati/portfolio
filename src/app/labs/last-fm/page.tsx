import { Container } from "@/components/container";
import { Heading } from "@/components/heading";
import { Subheading } from "@/components/subheading";
import { FadeIn } from "@/components/ui/fade-in";
import { Player } from "@/components/player";
import { ComponentPreview } from "@/components/labs/layout/component-preview";
import { CodeBlockClient } from "@/components/labs/code-block-client";
import { lastFmCodes } from "@/data/labs/last-fm/codes";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Last FM Component | Labs",
  description:
    "An dynamic Last.fm custom player component that displays real-time track updates and album art.",
  alternates: {
    canonical: "/labs/last-fm",
  },
};

export default function WireframeTextPage() {
  return (
    <div className="min-h-screen w-full bg-neutral-50 pb-20 dark:bg-neutral-950">
      <Container className="px-4 pt-20 md:pt-24">
        <Heading className="grainy-text mb-4">Last FM</Heading>
        <Subheading className="mb-4 flex flex-wrap items-center gap-1 text-neutral-600 dark:text-neutral-400">
          Show them what you're listening to.
        </Subheading>

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
      </Container>
    </div>
  );
}
