import { promises as fs } from "fs";
import { compileMDX } from "next-mdx-remote/rsc";
import path from "path";
import { mdxComponents } from "@/components/mdx";

export type FrontMatter = {
  title: string;
  description: string;
  image?: string;
  date: string;
  tags?: string[];
  readingTime?: string;
  draft?: boolean;
};

export type ContentType = "blogs" | "projects";

const getContentPath = (type: ContentType) =>
  path.join(process.cwd(), "src/data", type);

export const calculateReadingTime = (text: string): string => {
  const words = text.trim().split(/\s+/).length;
  const minutes = Math.max(1, Math.ceil(words / 200));
  return `${minutes} min read`;
};

export const getSingleItem = async (type: ContentType, slug: string) => {
  try {
    const filePath = path.join(getContentPath(type), `${slug}.mdx`);
    const source = await fs.readFile(filePath, "utf-8");

    if (!source) return null;

    const readingTime = calculateReadingTime(source);

    const { content, frontmatter } = await compileMDX<FrontMatter>({
      source,
      options: { parseFrontmatter: true },
      components: mdxComponents,
    });

    if (process.env.NODE_ENV === "production" && frontmatter.draft) {
      return null;
    }

    return {
      content,
      frontmatter: {
        ...frontmatter,
        readingTime,
      },
    };
  } catch (err) {
    console.error(`Error reading ${type}/${slug}:`, err);
    return null;
  }
};

export const getItemFrontMatterBySlug = async (
  type: ContentType,
  slug: string,
) => {
  try {
    const filePath = path.join(getContentPath(type), `${slug}.mdx`);
    const source = await fs.readFile(filePath, "utf-8");

    if (!source) return null;

    const readingTime = calculateReadingTime(source);

    const { frontmatter } = await compileMDX<FrontMatter>({
      source,
      options: { parseFrontmatter: true },
    });

    return {
      ...frontmatter,
      readingTime,
    };
  } catch (err) {
    console.error(`Error reading frontmatter for ${type}/${slug}:`, err);
    return null;
  }
};

export const getAllItems = async (type: ContentType) => {
  try {
    const dirPath = getContentPath(type);
    const files = await fs.readdir(dirPath);

    const mdxFiles = files.filter((file) => file.endsWith(".mdx"));

    const items = await Promise.all(
      mdxFiles.map(async (file) => {
        const slug = file.replace(".mdx", "");
        const frontmatter = await getItemFrontMatterBySlug(type, slug);
        return { slug, ...frontmatter };
      }),
    );

    // Filter out draft items in production builds
    const publishedItems = items.filter((item) => {
      if (process.env.NODE_ENV === "production" && item.draft) {
        return false;
      }
      return true;
    });

    // Sort by date descending
    return publishedItems.sort((a, b) => {
      if (!a.date || !b.date) return 0;
      return new Date(b.date).getTime() - new Date(a.date).getTime();
    });
  } catch (err) {
    console.error(`Error loading items for ${type}:`, err);
    return [];
  }
};
