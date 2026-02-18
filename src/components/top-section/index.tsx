import { Heading } from "@/components/heading";
import { Subheading } from "@/components/subheading";
import { Avatar } from "./avatar";
import { SocialLinks } from "./social-links";

export const TopSection = () => {
  return (
    <div className="mb-16 flex h-48 flex-col-reverse gap-2 md:flex-row">
      <div className="flex h-full w-full flex-col items-start justify-start">
        <Heading className="grainy-text text-3xl md:text-5xl">
          Harshit Gulati
        </Heading>
        <Subheading className="pt-2">
          Final-year B.Tech student and software developer, focused on building
          modern, responsive, and user-first web applications.
        </Subheading>
        <SocialLinks />
      </div>
      <Avatar />
    </div>
  );
};
