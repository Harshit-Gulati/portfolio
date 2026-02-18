import { WorkExperience } from "@/components/about/work-experience";
import { Container } from "@/components/container";
import { LastFm } from "@/components/last-fm";
import { Projects } from "@/components/projects";
import { Timeline } from "@/components/about/timeline";
import { TopSection } from "@/components/top-section";
import { projects } from "@/constants/projects";

export default function Home() {
  return (
    <div className="flex items-start justify-start">
      <Container className="overflow-visible px-4 pt-32">
        <TopSection />
        <WorkExperience />
        <Projects projects={projects.slice(0, 3)} />
        <Timeline />
        <LastFm />
      </Container>
    </div>
  );
}
