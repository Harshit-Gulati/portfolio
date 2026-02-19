import { Container } from "@/components/container";
import { Heading } from "@/components/heading";
import { Subheading } from "@/components/subheading";
import { Link } from "next-view-transitions";
import { IconExternalLink } from "@tabler/icons-react";
import { WireframeTextDemo } from "@/components/labs/wireframe-text/demo";
import { CodeBlocks } from "@/components/labs/wireframe-text/code-blocks";
import { FadeIn } from "@/components/ui/fade-in";

export default function WireframeTextPage() {
  return (
    <div className="min-h-screen w-full bg-neutral-50 pb-20 dark:bg-neutral-950">
      <Container className="px-4 pt-20 md:pt-24">
        <Heading className="grainy-text mb-4">Oblique Wireframe Text</Heading>
        <Subheading className="mb-4 flex flex-wrap items-center gap-1 text-neutral-600 dark:text-neutral-400">
          A projection-based text component. Inspired By:
          <Link
            href="https://invoicely.gg/"
            target="_blank"
            className="group relative inline-flex items-center gap-1 font-medium text-neutral-900 hover:text-indigo-600 dark:text-neutral-100"
          >
            Invoicely.gg <IconExternalLink size={14} />
          </Link>
        </Subheading>

        <div className="flex flex-col gap-8">
          <div className="space-y-6">
            <div className="sticky top-24 space-y-6">
              <WireframeTextDemo />
            </div>
          </div>

          <FadeIn className="space-y-6 lg:col-span-5">
            <Heading as="h5" className="text-xl font-semibold">
              Installation
            </Heading>
            <CodeBlocks />
          </FadeIn>
        </div>
      </Container>
    </div>
  );
}
