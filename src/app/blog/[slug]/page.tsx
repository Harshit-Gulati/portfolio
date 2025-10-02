import { Container } from "@/components/container";
import { getBlogFrontMatterBySlug, getSingleBlog } from "@/utils/mdx";
import { redirect } from "next/navigation";

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  const frontmatter = await getBlogFrontMatterBySlug(params.slug);

  if (!frontmatter) return { title: "Blog not found" };

  return {
    title: frontmatter.title + " - Harshit Gulati",
    description: frontmatter.description,
  };
}

export default async function SingleBlogPage({
  params,
}: {
  params: { slug: string };
}) {
  const slug = (await params).slug;
  const blog = await getSingleBlog(slug);

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
