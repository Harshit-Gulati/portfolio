import { Container } from "@/components/container";
import { Scales } from "@/components/scales";
import { getProjectFrontMatterBySlug, getSingleProject } from "@/utils/mdx";
import { redirect } from "next/navigation";

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  const frontmatter = await getProjectFrontMatterBySlug(params.slug);

  if (!frontmatter) return { title: "Project not found" };

  return {
    title: frontmatter.title + " - Harshit Gulati",
    description: frontmatter.description,
  };
}

export default async function SingleProjectPage({
  params,
}: {
  params: { slug: string };
}) {
  const slug = (await params).slug;
  const project = await getSingleProject(slug);

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
