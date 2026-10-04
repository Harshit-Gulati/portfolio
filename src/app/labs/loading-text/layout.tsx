import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Oblique Projected Text | Labs",
  description:
    "Explore oblique projected text progress animations and liquid fill indicators designed with Tailwind CSS and Framer Motion.",
  alternates: {
    canonical: "/labs/loading-text",
  },
};

export default function LoadingTextLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
