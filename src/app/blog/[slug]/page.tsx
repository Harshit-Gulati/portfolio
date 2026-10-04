import { Container } from "@/components/container";
import { getAllItems, getItemFrontMatterBySlug, getSingleItem } from "@/utils/mdx";
import { redirect } from "next/navigation";
import { Link } from "next-view-transitions";
import { IconArrowLeft, IconCalendar, IconClock } from "@tabler/icons-react";
import Image from "next/image";

export async function generateStaticParams() {
  const blogs = await getAllItems("blogs");
  return blogs.map((blog) => ({
    slug: blog.slug,
  }));
}

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

  const formattedDate = frontmatter.date
    ? new Date(frontmatter.date).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      })
    : null;

  return (
    <div className="flex min-h-screen items-start justify-start">
      <Container className="overflow-visible px-4 pt-20 pb-20 md:pt-28">
        {/* Back navigation */}
        <div className="mb-8">
          <Link
            href="/blog"
            className="group inline-flex items-center gap-1.5 text-xs font-medium text-neutral-500 transition-colors hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-100"
          >
            <IconArrowLeft
              size={14}
              className="transition-transform duration-200 group-hover:-translate-x-1"
            />
            <span>Back to all posts</span>
          </Link>
        </div>

        {/* Article header */}
        <header className="mb-10 pb-8 border-b border-neutral-200/80 dark:border-neutral-800/80">
          <h1 className="text-primary text-3xl md:text-5xl font-bold tracking-tight text-balance leading-tight">
            {frontmatter.title}
          </h1>

          {frontmatter.description && (
            <p className="text-secondary mt-3 text-lg leading-relaxed max-w-2xl">
              {frontmatter.description}
            </p>
          )}

          <div className="mt-5 flex flex-wrap items-center gap-4 text-xs font-mono text-neutral-500 dark:text-neutral-400">
            {formattedDate && (
              <span className="flex items-center gap-1.5">
                <IconCalendar size={14} />
                {formattedDate}
              </span>
            )}
            {frontmatter.readingTime && (
              <span className="flex items-center gap-1.5">
                <IconClock size={14} />
                {frontmatter.readingTime}
              </span>
            )}
          </div>

          {frontmatter.image && frontmatter.image.trim() !== "" && (
            <div className="relative mt-8 aspect-[16/9] w-full overflow-hidden rounded-xl border border-neutral-200/80 dark:border-neutral-800">
              <Image
                src={frontmatter.image}
                alt={frontmatter.title}
                fill
                className="object-cover"
                priority
              />
            </div>
          )}
        </header>

        {/* Article Body */}
        <article className="prose prose-neutral dark:prose-invert max-w-none prose-headings:font-bold prose-headings:tracking-tight prose-a:text-indigo-600 dark:prose-a:text-indigo-400 prose-img:rounded-xl">
          {content}
        </article>

        {/* Article Footer */}
        <div className="mt-16 pt-8 border-t border-neutral-200/80 dark:border-neutral-800/80 flex items-center justify-between">
          <Link
            href="/blog"
            className="group inline-flex items-center gap-1.5 text-sm font-medium text-neutral-600 transition-colors hover:text-indigo-600 dark:text-neutral-400 dark:hover:text-indigo-400"
          >
            <IconArrowLeft
              size={16}
              className="transition-transform duration-200 group-hover:-translate-x-1"
            />
            <span>Back to all posts</span>
          </Link>
          <span className="text-xs text-neutral-400 font-mono">
            Written by Harshit Gulati
          </span>
        </div>
      </Container>
    </div>
  );
}
