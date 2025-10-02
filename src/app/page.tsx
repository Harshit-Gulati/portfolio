import { Container } from "@/components/container";
import { Enquire } from "@/components/enquire";
import { Heading } from "@/components/heading";
import { LastFm } from "@/components/last-fm";
import { Projects } from "@/components/projects";
import { Scales } from "@/components/scales";
import { Subheading } from "@/components/subheading";
import { Timeline } from "@/components/timeline";
import { projects } from "@/constants/projects";

export default function Home() {
  return (
    <div className="flex items-start justify-start">
      <Container className="px-4 pt-10 md:px-8 md:pt-20 md:pb-1">
        <Scales />
        <Heading>Harshit Gulati</Heading>
        <Subheading>
          I&apos;m a final-year B.Tech student and aspiring full-stack
          developer, passionate about building clean, responsive, and
          user-friendly web applications.
        </Subheading>
        <Projects projects={projects.slice(0, 3)} />
        <Enquire />
        <Timeline />
        <LastFm />
      </Container>
    </div>
  );
}
