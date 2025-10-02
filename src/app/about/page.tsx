import { Container } from "@/components/container";
import { Heading } from "@/components/heading";
import { Scales } from "@/components/scales";
import { Subheading } from "@/components/subheading";
import { Timeline } from "@/components/timeline";

export default function AboutPage() {
  return (
    <div className="flex min-h-screen items-start justify-start">
      <Container className="min-h-screen px-4 pt-10 md:px-8 md:pt-20 md:pb-1">
        <Scales />
        <Heading>About Me</Heading>
        <Subheading>
          I&apos;m a final-year B.Tech student with a focus on software
          engineering and web development. I have experience working with React,
          Next.js, Node.js, and databases to build practical, user-friendly
          applications. I enjoy solving problems through code and am looking for
          opportunities to grow as a full-stack developer while contributing to
          impactful projects.
        </Subheading>
        <Timeline />
      </Container>
    </div>
  );
}
