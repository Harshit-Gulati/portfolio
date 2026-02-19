"use client";

import { Container } from "@/components/container";
import { Heading } from "@/components/heading";
import { Player } from "@/components/player";
import { Subheading } from "@/components/subheading";
import { FadeIn } from "@/components/ui/fade-in";
import { WireframeText } from "@/components/ui/wireframe-text";
import { cn } from "@/lib/utils";
import { Link } from "next-view-transitions";
import { useRef } from "react";

export default function LabsPage() {
  const divRef = useRef<HTMLDivElement | null>(null);

  return (
    <div className="flex min-h-screen items-start justify-start">
      <Container className="overflow-visible px-4 pt-20 md:pt-28">
        <Heading className="grainy-text mb-4 text-3xl md:text-5xl">
          Labs
        </Heading>
        <Subheading className="mb-4">
          A collection of components or tools made by me.
        </Subheading>

        <div
          ref={divRef}
          className="my-8 grid grid-cols-1 gap-4 md:grid-cols-2"
        >
          <Card
            href="/labs/block-text"
            componentName="Oblique Wireframe Text"
            description="A projection-based text component."
          >
            <div className="flex h-full w-full items-center justify-center">
              <WireframeText text="text" variant="dark" animate={true} />
            </div>
          </Card>
          <Card
            href="/labs/last-fm"
            componentName="LastFM"
            description="Show what you're listening to."
          >
            <div className="flex h-full w-full items-center justify-center">
              <Player />
            </div>
          </Card>
        </div>
      </Container>
    </div>
  );
}

const Card = ({
  children,
  componentName,
  description,
  href,
}: {
  children: React.ReactNode;
  componentName: string;
  description: string;
  href: string;
}) => {
  return (
    <FadeIn>
      <Link
        href={href}
        className="group block overflow-hidden rounded-md border border-neutral-200 bg-neutral-50 shadow-indigo-600 transition-all hover:border-indigo-600/80 hover:shadow-sm dark:border-neutral-800 dark:bg-black"
      >
        <div className="relative flex h-52 items-center justify-center overflow-hidden border-b border-neutral-200 bg-neutral-50 p-4 dark:border-neutral-800 dark:bg-neutral-900">
          <div
            className={cn(
              "absolute inset-0",
              "bg-size-[20px_20px]",
              "bg-[radial-gradient(#d4d4d4_1px,transparent_1px)]",
              "dark:bg-[radial-gradient(#404040_1px,transparent_1px)]",
            )}
          />
          <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white mask-[radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black" />
          <div className="relative h-full w-full">{children}</div>
        </div>

        <div className="p-4 pt-2">
          <div className="text-primary mb-1 text-base font-semibold tracking-tight transition-colors group-hover:text-indigo-600">
            {componentName}
          </div>
          <div className="text-secondary text-sm leading-relaxed">
            {description}
          </div>
        </div>
      </Link>
    </FadeIn>
  );
};
