import { WorkExperience } from "@/components/about/work-experience";
import { Container } from "@/components/container";
import { Heading } from "@/components/heading";
import { Subheading } from "@/components/subheading";
import { Timeline } from "@/components/about/timeline";

export default function AboutPage() {
  return (
    <div className="flex min-h-screen items-start justify-start">
      <Container className="overflow-visible px-4 pt-20 md:pt-28">
        <Heading className="grainy-text mb-4 text-3xl md:text-5xl">
          About Me
        </Heading>
        <Subheading className="mb-4">
          I'm a final-year B.Tech student focused on software development and
          engineering. I enjoy building reliable, user-focused applications and
          have hands-on experience with React, Next.js, Node.js, and databases.
          I'm passionate about solving real-world problems through clean,
          maintainable code and I'm looking for opportunities to grow as a
          software developer while contributing to impactful projects.
        </Subheading>
        <div className="my-8">
          <WorkExperience />
        </div>
        {/* <Timeline /> */}
      </Container>
    </div>
  );
}
