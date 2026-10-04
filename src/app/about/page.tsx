import { WorkExperience } from "@/components/about/work-experience";
import { Timeline } from "@/components/about/timeline";
import { Container } from "@/components/container";
import { Heading } from "@/components/heading";
import { Subheading } from "@/components/subheading";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Me",
  description:
    "Learn more about Harshit Gulati - Software Engineer and Aerospace Engineering graduate (CS minor) from PEC, working across C++, QML, React and Next.js.",
  alternates: {
    canonical: "/about",
  },
};

export default function AboutPage() {
  return (
    <div className="flex min-h-screen items-start justify-start">
      <Container className="overflow-visible px-4 pt-20 md:pt-28">
        <Heading className="grainy-text mb-4 text-3xl md:text-5xl">
          About Me
        </Heading>
        <Subheading className="mb-6 max-w-2xl space-y-4 leading-relaxed">
          <p>
            I graduated with a{" "}
            <span className="text-primary">
              B.Tech in Aerospace Engineering and a Minor in Computer Science &
              Engineering
            </span>{" "}
            from{" "}
            <Link
              href="https://pec.ac.in/"
              target="_blank"
              className="text-primary underline-offset-4 hover:text-indigo-600 hover:underline dark:hover:text-indigo-400"
            >
              Punjab Engineering College (PEC), Chandigarh
            </Link>
            . My engineering background unites mathematical rigor and physical
            dynamics with high-performance software systems.
          </p>
          <p>
            My engineering work spans native systems software and modern web
            applications. In systems engineering, I specialize in C++ and Qt/QML
            - architecting real-time video and imaging integration layers,
            migrating desktop codebases to modular QML and optimizing
            multi-threaded pipelines for high-reliability environments like
            medical endoscopy.
          </p>
          <p>
            Beyond native desktop software, I have a deep affinity for interface
            craft and web architecture: building responsive full-stack
            applications with Next.js and TypeScript and engineering component
            design systems.
          </p>
        </Subheading>

        <div className="my-8">
          <WorkExperience />
        </div>
      </Container>
    </div>
  );
}
