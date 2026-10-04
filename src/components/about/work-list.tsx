import { FadeIn } from "@/components/ui/fade-in";
import { SingleWorkItem } from "./work-item";
import { works } from "@/data/about/work";

export const WorkList = () => {
  return (
    <div className="mt-4 flex flex-col">
      {works.map((work, index) => (
        <FadeIn key={index}>
          <SingleWorkItem work={work} />
        </FadeIn>
      ))}
    </div>
  );
};
