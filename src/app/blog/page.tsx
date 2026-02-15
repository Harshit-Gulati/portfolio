import { Container } from "@/components/container";
import { Heading } from "@/components/heading";
import { Subheading } from "@/components/subheading";
import { getAllItems } from "@/utils/mdx";
import { Metadata } from "next";
import { Link } from "next-view-transitions";
import Image from "next/image";

export const metadata: Metadata = {
  title: "All blogs - Harshit Gulati",
  description: "All my general wisdom and thoughts",
};

export default async function BlogsPage() {
  const allBlogs = await getAllItems("blogs");

  return (
    <div className="flex items-start justify-start">
      <Container>
        <Heading>Blog</Heading>
        <Subheading>This is where I write things that I did.</Subheading>
        <BlogList blogs={allBlogs} />
      </Container>
    </div>
  );
}

const BlogList = ({
  blogs,
}: {
  blogs: {
    title?: string | undefined;
    description?: string | undefined;
    image?: string | undefined;
    date?: string | undefined;
    slug: string;
  }[];
}) => {
  return (
    <div className="shadow-section-inset mt-4 grid grid-cols-1 gap-4 p-4 sm:grid-cols-2">
      {blogs.map((blog, idx) => (
        <BlogCard key={idx} blog={blog} />
      ))}
    </div>
  );
};

const BlogCard = ({ blog }: { blog: any }) => {
  return (
    <>
      <Link
        href={`/blog/${blog.slug}`}
        className="group flex flex-col gap-2 rounded-md border border-neutral-950/10 p-2 dark:border-neutral-100/10"
      >
        <div className="rounded-md border border-neutral-950/10 dark:border-neutral-100/10">
          <Image
            alt="React Wheel Picker joins Vercel Open Source Program"
            width="1200"
            height="630"
            className="relative aspect-1200/630 rounded-md select-none"
            decoding="async"
            data-nimg="1"
            src="https://assets.chanhdai.com/images/blog/react-wheel-picker-joins-vercel-open-source-program.webp"
          />
        </div>
        <div className="flex flex-col gap-1 p-2">
          <h3 className="text-primary text-lg leading-snug font-medium text-balance underline-offset-[6px] group-hover:underline">
            {blog.title}
          </h3>
          <div className="text-secondary pt-1 text-sm">
            {new Date(blog.date!).toLocaleDateString("en-us", {
              weekday: "long",
              year: "numeric",
              month: "short",
              day: "numeric",
            })}
          </div>
        </div>
      </Link>
    </>
  );
};
