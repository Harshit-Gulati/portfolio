import { Container } from "@/components/container";
import { Heading } from "@/components/heading";
import { Subheading } from "@/components/subheading";
import { FadeIn } from "@/components/ui/fade-in";
import { getAllItems } from "@/utils/mdx";
import { Metadata } from "next";
import { Link } from "next-view-transitions";
import Image from "next/image";
import {
  IconArrowUpRight,
  IconCalendar,
  IconClock,
  IconTerminal2,
} from "@tabler/icons-react";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Articles, technical deep dives, and notes on systems programming, desktop apps, modern web architecture, and engineering experiments by Harshit Gulati.",
  alternates: {
    canonical: "/blog",
  },
};

export default async function BlogsPage() {
  const allBlogs = await getAllItems("blogs");

  return (
    <div className="flex min-h-screen items-start justify-start">
      <Container className="overflow-visible px-4 pt-20 pb-20 md:pt-28">
        <Heading className="grainy-text mb-4 text-3xl md:text-5xl">
          Writing
        </Heading>

        <Subheading className="mb-8 max-w-xl">
          Articles, technical breakdowns, and notes on systems software, C++,
          modern web architecture, and engineering experiments.
        </Subheading>

        {allBlogs.length === 0 ? (
          <FadeIn>
            <div className="flex flex-col items-center justify-center rounded-xl border border-dashed border-neutral-300/80 bg-neutral-50/50 px-6 py-20 text-center dark:border-neutral-800 dark:bg-neutral-900/30">
              <div className="flex h-12 w-12 items-center justify-center rounded-full border border-neutral-200 bg-white text-neutral-500 shadow-xs dark:border-neutral-800 dark:bg-neutral-900 dark:text-neutral-400">
                <IconTerminal2 size={22} />
              </div>
              <h3 className="mt-4 text-base font-semibold text-neutral-900 dark:text-neutral-100">
                Writing in progress
              </h3>
              <p className="mt-2 max-w-sm text-sm text-neutral-500 dark:text-neutral-400">
                Technical articles and engineering experiments will be published
                here soon. Check back soon or follow along on GitHub.
              </p>
            </div>
          </FadeIn>
        ) : (
          /* Equal-Sized Grid */
          <div className="grid grid-cols-1 items-stretch gap-6 sm:grid-cols-2">
            {allBlogs.map((blog, idx) => {
              const imageUrl =
                blog.image && blog.image.trim() !== ""
                  ? blog.image
                  : "/og-image.jpg";

              const formattedDate = blog.date
                ? new Date(blog.date).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "short",
                    day: "numeric",
                  })
                : null;

              return (
                <FadeIn key={blog.slug || idx} className="h-full">
                  <Link
                    href={`/blog/${blog.slug}`}
                    className="group relative flex h-full flex-col justify-between overflow-hidden rounded-md border border-neutral-200/80 bg-neutral-50/40 transition-all duration-300 hover:border-indigo-500/40 hover:bg-neutral-50/70 hover:shadow-xs dark:border-neutral-800/80 dark:bg-neutral-900/30 dark:hover:border-indigo-500/30 dark:hover:bg-neutral-900/60"
                  >
                    {/* Equal Fixed Height Preview Stage */}
                    <div className="relative flex h-52 w-full shrink-0 items-center justify-center overflow-hidden border-b border-neutral-200/60 bg-neutral-100 dark:border-neutral-800/60 dark:bg-neutral-950/60">
                      <Image
                        alt={blog.title || "Blog cover"}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                        src={imageUrl}
                        sizes="(max-width: 640px) 100vw, 50vw"
                      />
                    </div>

                    {/* Bottom Content Area */}
                    <div className="flex flex-1 flex-col justify-between p-4 sm:p-5">
                      <div>
                        <div className="flex items-start justify-between gap-2">
                          <h3 className="line-clamp-2 min-h-[2.8rem] text-base font-semibold leading-snug tracking-tight text-neutral-900 transition-colors group-hover:text-indigo-600 dark:text-neutral-100 dark:group-hover:text-indigo-400">
                            {blog.title}
                          </h3>
                          <IconArrowUpRight
                            size={15}
                            className="mt-1 shrink-0 text-neutral-400 opacity-60 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-indigo-600 group-hover:opacity-100 dark:group-hover:text-indigo-400"
                          />
                        </div>

                        <p className="mt-1.5 line-clamp-2 min-h-[2.5rem] text-xs leading-relaxed text-neutral-600 sm:text-sm dark:text-neutral-400">
                          {blog.description || "\u00A0"}
                        </p>
                      </div>

                      <div className="mt-4 flex items-center gap-3 border-t border-neutral-200/60 pt-3 font-mono text-[11px] text-neutral-500 dark:border-neutral-800/60 dark:text-neutral-400">
                        {formattedDate && (
                          <span className="flex items-center gap-1.5">
                            <IconCalendar size={13} className="opacity-70" />
                            {formattedDate}
                          </span>
                        )}
                        {blog.readingTime && (
                          <span className="flex items-center gap-1.5">
                            <IconClock size={13} className="opacity-70" />
                            {blog.readingTime}
                          </span>
                        )}
                      </div>
                    </div>
                  </Link>
                </FadeIn>
              );
            })}
          </div>
        )}
      </Container>
    </div>
  );
}
