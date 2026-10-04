import { WorkExperience } from "@/components/about/work-experience";
import { Container } from "@/components/container";
import { LastFm } from "@/components/last-fm";
import { Projects } from "@/components/projects";
import { TopSection } from "@/components/top-section";
import { RecentBlogs } from "@/components/home/recent-writing";
import { projects } from "@/constants/projects";

export default function Home() {
  return (
    <div className="flex items-start justify-start">
      <Container className="overflow-visible px-4 pt-20 pb-10 md:pt-28">
        <TopSection />
        <WorkExperience />
        <Projects projects={projects.slice(0, 2)} />
        <RecentBlogs />
        <div className="mt-12">
          <LastFm />
        </div>
      </Container>
    </div>
  );
}
