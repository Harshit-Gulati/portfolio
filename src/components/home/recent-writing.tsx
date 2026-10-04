import { getAllItems } from "@/utils/mdx";
import { Link } from "next-view-transitions";
import { Heading } from "@/components/heading";
import { IconArrowRight } from "@tabler/icons-react";

export const RecentBlogs = async () => {
  const blogs = (await getAllItems("blogs")).slice(0, 3);
  if (!blogs || blogs.length === 0) return null;

  return (
    <div className="mt-16">
      <div className="mb-4 flex items-baseline justify-between">
        <Heading as="h2" className="grainy-text">
          Blog
        </Heading>
        <Link
          href="/blog"
          className="group inline-flex items-center gap-1 font-mono text-xs text-neutral-500 transition-colors hover:text-indigo-600 dark:text-neutral-400 dark:hover:text-indigo-400"
        >
          <span>All posts</span>
          <IconArrowRight
            size={13}
            className="transition-transform duration-200 group-hover:translate-x-0.5"
          />
        </Link>
      </div>

      <div className="border-t border-neutral-200/70 dark:border-neutral-800/70">
        {blogs.map((blog) => (
          <Link
            key={blog.slug}
            href={`/blog/${blog.slug}`}
            className="group flex flex-col gap-1 border-b border-neutral-200/60 py-3.5 transition-colors sm:flex-row sm:items-baseline sm:justify-between sm:gap-4 dark:border-neutral-800/60"
          >
            <span className="text-sm font-medium text-neutral-800 transition-colors group-hover:text-indigo-600 sm:text-base dark:text-neutral-200 dark:group-hover:text-indigo-400">
              {blog.title}
            </span>
            <div className="flex shrink-0 items-center gap-2 font-mono text-xs text-neutral-400 dark:text-neutral-500">
              {blog.date && (
                <span>
                  {new Date(blog.date).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "short",
                  })}
                </span>
              )}
              {blog.readingTime && (
                <>
                  <span>•</span>
                  <span>{blog.readingTime}</span>
                </>
              )}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};
