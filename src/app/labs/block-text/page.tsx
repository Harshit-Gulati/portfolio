import { Container } from "@/components/container";
import { Heading } from "@/components/heading";
import { Subheading } from "@/components/subheading";
import { Link } from "next-view-transitions";
import { IconExternalLink } from "@tabler/icons-react";
import { WireframeTextDemo } from "@/components/labs/wireframe-text/demo";
import { CodeBlocks } from "@/components/labs/wireframe-text/code-blocks";

export default function WireframeTextPage() {
  return (
    <div className="min-h-screen w-full bg-neutral-50 pb-20 dark:bg-neutral-950">
      <Container className="px-4 pt-20 md:pt-24">
        <div className="mb-10 px-2">
          <Heading>Oblique Wireframe Text</Heading>
          <Subheading className="mt-2 flex flex-wrap items-center gap-2 text-neutral-600 dark:text-neutral-400">
            A projection-based text component. Inspired By:
            <Link
              href="https://invoicely.gg/"
              target="_blank"
              className="group relative inline-flex items-center gap-1 font-medium text-neutral-900 hover:text-[#9013FE] dark:text-neutral-100"
            >
              Invoicely.gg <IconExternalLink size={14} />
            </Link>
          </Subheading>
        </div>

        <div className="flex flex-col gap-8 px-2">
          <div className="space-y-6">
            <div className="sticky top-24 space-y-6">
              <WireframeTextDemo />
            </div>
          </div>

          <div className="space-y-6 lg:col-span-5">
            <Heading as="h5" className="text-xl font-semibold">
              Installation
            </Heading>
            <CodeBlocks />
          </div>
        </div>
      </Container>
    </div>
  );
}
