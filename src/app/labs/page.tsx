"use client";

import { Container } from "@/components/container";
import { Heading } from "@/components/heading";
import { Subheading } from "@/components/subheading";
import { WireframeText } from "@/components/ui/wireframe-text";
import { Link } from "next-view-transitions";
import { useRef } from "react";

export default function LabsPage() {
  const divRef = useRef<HTMLDivElement | null>(null);

  return (
    <div className="flex items-start justify-start">
      <Container className="min-h-screen overflow-visible px-2 pt-20 md:px-4 md:pt-24 md:pb-1">
        <div className="px-4">
          <Heading>Labs</Heading>
          <Subheading className="mt-2">
            A collection of components or tools made by me.
          </Subheading>
        </div>
        <div
          ref={divRef}
          className="shadow-section-inset mt-4 grid grid-cols-1 gap-8 p-4 md:grid-cols-2"
        >
          <Card
            href="/labs/block-text"
            componentName="Oblique Wireframe Text"
            description="A projection-based text component."
          >
            <div className="rounded-md bg-neutral-100 p-4 py-9 dark:bg-black">
              <WireframeText text="3d text" variant="dark" animate={true} />
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
    <Link
      href={href}
      className="rounded-md border border-neutral-200 p-4 dark:border-neutral-800"
    >
      <div>{children}</div>
      <div className="text-primary py-2 text-lg font-medium">
        {componentName}
      </div>
      <div className="text-secondary">{description}</div>
    </Link>
  );
};
