import { Heading } from "../heading";
import { WorkList } from "./work-list";

export const WorkExperience = () => {
  return (
    <div className="w-full">
      <Heading as="h2" className="grainy-text">Work Experience</Heading>
      <WorkList />
    </div>
  );
};
