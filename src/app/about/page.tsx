import { Container } from "@/components/container";
import { Heading } from "@/components/heading";
import { Subheading } from "@/components/subheading";
import { Timeline } from "@/components/timeline";

export default function AboutPage() {
  return (
    <div className="flex min-h-screen items-start justify-start">
      <Container className="overflow-visible px-2 pt-20 md:px-4 md:pt-24 md:pb-1">
        <div className="px-4">
          <Heading>About Me</Heading>
          <Subheading className="mt-2">
            I&apos;m a final-year B.Tech student with a focus on software
            engineering and web development. I have experience working with
            React, Next.js, Node.js, and databases to build practical,
            user-friendly applications. I enjoy solving problems through code
            and am looking for opportunities to grow as a full-stack developer
            while contributing to impactful projects.
          </Subheading>
        </div>
        <Timeline />
      </Container>
    </div>
  );
}
