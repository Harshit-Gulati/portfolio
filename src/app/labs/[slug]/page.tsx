import { notFound } from "next/navigation";
import { Metadata } from "next";
import { Container } from "@/components/container";
import { Link } from "next-view-transitions";
import { IconArrowLeft } from "@tabler/icons-react";
import { allLabs, getLabBySlug } from "@/components/labs/registry";

export async function generateStaticParams() {
  return allLabs.map((lab) => ({
    slug: lab.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const lab = getLabBySlug(slug);

  if (!lab) {
    return {
      title: "Lab Not Found | Harshit Gulati",
    };
  }

  return {
    ...lab.seo,
    alternates: {
      canonical: `/labs/${slug}`,
    },
  };
}

export default async function SingleLabPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const lab = getLabBySlug(slug);

  if (!lab) {
    notFound();
  }

  const PageContent = lab.PageContent;

  return (
    <div className="flex min-h-screen items-start justify-start">
      <Container className="overflow-visible px-4 pt-20 pb-20 md:pt-28">
        <div className="mb-6">
          <Link
            href="/labs"
            className="group inline-flex items-center gap-1.5 text-xs font-mono text-neutral-500 transition-colors hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-100"
          >
            <IconArrowLeft
              size={14}
              className="transition-transform duration-200 group-hover:-translate-x-1"
            />
            <span>Back to Labs</span>
          </Link>
        </div>

        <PageContent />
      </Container>
    </div>
  );
}
