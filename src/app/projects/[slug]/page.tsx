import { Container } from "@/components/container";
import { Scales } from "@/components/scales";
import { getItemFrontMatterBySlug, getSingleItem } from "@/utils/mdx";
import { redirect } from "next/navigation";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const resolvedParams = await params;
  const frontmatter = await getItemFrontMatterBySlug("projects", resolvedParams.slug);

  if (!frontmatter) return { title: "Project not found" };

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://harshitgulati.com";
  const projectUrl = `${siteUrl}/projects/${resolvedParams.slug}`;
  const title = `${frontmatter.title} | Harshit Gulati`;
  const description = frontmatter.description;
  const image = frontmatter.image || "/og-image.jpg";

  return {
    title,
    description,
    alternates: {
      canonical: `/projects/${resolvedParams.slug}`,
    },
    openGraph: {
      type: "website",
      url: projectUrl,
      title,
      description,
      images: [
        {
          url: image,
          alt: frontmatter.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
  };
}

export default async function SingleProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const slug = (await params).slug;
  const project = await getSingleItem("projects", slug);

  if (!project) redirect("/projects");

  const { content, frontmatter } = project;

  return (
    <div className="flex min-h-screen items-start justify-start">
      <Container className="min-h-screen px-4 pt-10 md:px-8 md:pt-20 md:pb-1">
        <Scales />
        <div className="prose mx-auto w-full px-4 pb-10">{content}</div>
      </Container>
    </div>
  );
}
