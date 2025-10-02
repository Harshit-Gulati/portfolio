import { Container } from "@/components/container";
import { Heading } from "@/components/heading";
import { Projects } from "@/components/projects";
import { Scales } from "@/components/scales";
import { Subheading } from "@/components/subheading";
import { projects } from "@/constants/projects";

export default function ProjectsPage() {
  return (
    <div className="flex min-h-screen items-start justify-start">
      <Container className="min-h-screen px-4 pt-10 md:px-8 md:pt-20 md:pb-1">
        <Scales />
        <Heading>Projects</Heading>
        <Subheading>
          These projects reflect my journey as a developer, demonstrating my
          ability to learn, adapt, and bring ideas to life through code.
        </Subheading>
        <Projects projects={projects} />
      </Container>
    </div>
  );
}
