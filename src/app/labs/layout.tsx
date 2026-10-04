import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Labs",
  description:
    "Explore interactive frontend components, experiments, and tools built by Harshit Gulati, including oblique wireframe text and LastFM integrations.",
  alternates: {
    canonical: "/labs",
  },
};

export default function LabsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
