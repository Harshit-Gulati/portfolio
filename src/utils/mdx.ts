import { promises as fs } from "fs";
import { compileMDX } from "next-mdx-remote/rsc";
import path from "path";

type FrontMatter = {
  title: string;
  description: string;
  image: string;
  date: string;
};

export const getSingleProject = async (slug: string) => {
  try {
    const singleProject = await fs.readFile(
      path.join(process.cwd(), "src/data/", `${slug}.mdx`),
      "utf-8",
    );

    if (!singleProject) return null;

    const { content, frontmatter } = await compileMDX<FrontMatter>({
      source: singleProject,
      options: { parseFrontmatter: true },
    });

    return { content, frontmatter };
  } catch (err) {
    console.error(`Error reading the file for project slug "${slug}" : `, err);
    return null;
  }
};

export const getProjectFrontMatterBySlug = async (slug: string) => {
  const singleProject = await fs.readFile(
    path.join(process.cwd(), "src/data/", `${slug}.mdx`),
    "utf-8",
  );

  if (!singleProject) return null;

  const { frontmatter } = await compileMDX<FrontMatter>({
    source: singleProject,
    options: { parseFrontmatter: true },
  });

  return frontmatter;
};

export const getSingleBlog = async (slug: string) => {
  try {
    const singleBlog = await fs.readFile(
      path.join(process.cwd(), "src/data/", `${slug}.mdx`),
      "utf-8",
    );

    if (!singleBlog) return null;

    const { content, frontmatter } = await compileMDX<FrontMatter>({
      source: singleBlog,
      options: { parseFrontmatter: true },
    });

    return { content, frontmatter };
  } catch (err) {
    console.error(`Error reading the file for slug "${slug}" : `, err);
    return null;
  }
};

export const getBlogs = async () => {
  const files = await fs.readdir(path.join(process.cwd(), "src/data/"));

  const allBlogs = await Promise.all(
    files.map(async (file) => {
      const slug = file.replace(".mdx", "");
      const frontmatter = await getBlogFrontMatterBySlug(slug);
      return { slug, ...frontmatter };
    }),
  );

  return allBlogs;
};

export const getBlogFrontMatterBySlug = async (slug: string) => {
  const singleBlog = await fs.readFile(
    path.join(process.cwd(), "src/data/", `${slug}.mdx`),
    "utf-8",
  );

  if (!singleBlog) return null;

  const { frontmatter } = await compileMDX<FrontMatter>({
    source: singleBlog,
    options: { parseFrontmatter: true },
  });

  return frontmatter;
};
