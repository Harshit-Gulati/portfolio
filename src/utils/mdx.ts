import { promises as fs } from "fs";
import { compileMDX } from "next-mdx-remote/rsc";
import path from "path";

type FrontMatter = {
  title: string;
  description: string;
  image: string;
  date: string;
};

export type ContentType = "blogs" | "projects";

const getContentPath = (type: ContentType) =>
  path.join(process.cwd(), "src/data", type);

export const getSingleItem = async (type: ContentType, slug: string) => {
  try {
    const filePath = path.join(getContentPath(type), `${slug}.mdx`);
    const source = await fs.readFile(filePath, "utf-8");

    if (!source) return null;

    const { content, frontmatter } = await compileMDX<FrontMatter>({
      source,
      options: { parseFrontmatter: true },
    });

    return { content, frontmatter };
  } catch (err) {
    console.error(`Error reading ${type}/${slug}:`, err);
    return null;
  }
};

export const getItemFrontMatterBySlug = async (
  type: ContentType,
  slug: string,
) => {
  const filePath = path.join(getContentPath(type), `${slug}.mdx`);
  const source = await fs.readFile(filePath, "utf-8");

  if (!source) return null;

  const { frontmatter } = await compileMDX<FrontMatter>({
    source,
    options: { parseFrontmatter: true },
  });

  return frontmatter;
};

export const getAllItems = async (type: ContentType) => {
  const files = await fs.readdir(getContentPath(type));

  const items = await Promise.all(
    files.map(async (file) => {
      const slug = file.replace(".mdx", "");
      const frontmatter = await getItemFrontMatterBySlug(type, slug);
      return { slug, ...frontmatter };
    }),
  );

  return items;
};
