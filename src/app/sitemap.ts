import { MetadataRoute } from "next";
import { getAllItems } from "@/utils/mdx";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://harshitgulati.com";

  // Static routes
  const routes = [
    "",
    "/about",
    "/projects",
    "/contact",
    "/labs",
    "/labs/block-text",
    "/labs/last-fm",
    "/labs/loading-text",
    "/blog",
  ];

  const sitemapEntries: MetadataRoute.Sitemap = routes.map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "daily" : "weekly",
    priority: route === "" ? 1.0 : 0.8,
  }));

  // Add blog routes dynamically
  try {
    const blogs = await getAllItems("blogs");
    blogs.forEach((blog) => {
      if (blog.slug) {
        sitemapEntries.push({
          url: `${siteUrl}/blog/${blog.slug}`,
          lastModified: blog.date ? new Date(blog.date) : new Date(),
          changeFrequency: "monthly",
          priority: 0.6,
        });
      }
    });
  } catch (error) {
    console.error("Error generating sitemap for blogs:", error);
  }

  return sitemapEntries;
}
