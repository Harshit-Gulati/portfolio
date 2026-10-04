import { Container } from "@/components/container";
import { getItemFrontMatterBySlug, getSingleItem } from "@/utils/mdx";
import { redirect } from "next/navigation";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const resolvedParams = await params;
  const frontmatter = await getItemFrontMatterBySlug("blogs", resolvedParams.slug);

  if (!frontmatter) return { title: "Blog not found" };

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://harshitgulati.com";
  const postUrl = `${siteUrl}/blog/${resolvedParams.slug}`;
  const title = `${frontmatter.title} | Harshit Gulati`;
  const description = frontmatter.description;
  const image = frontmatter.image || "/og-image.jpg";

  return {
    title,
    description,
    alternates: {
      canonical: `/blog/${resolvedParams.slug}`,
    },
    openGraph: {
      type: "article",
      url: postUrl,
      title,
      description,
      publishedTime: frontmatter.date,
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

export default async function SingleBlogPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const slug = (await params).slug;
  const blog = await getSingleItem("blogs", slug);

  if (!blog) redirect("/blog");

  const { content, frontmatter } = blog;

  return (
    <div className="flex min-h-screen items-start justify-start">
      <Container className="min-h-[200vh] p-4 md:pt-20 md:pb-10">
        <div className="prose mx-auto">{content}</div>
      </Container>
    </div>
  );
}
