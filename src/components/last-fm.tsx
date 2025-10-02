import { SectionHeading } from "./section-heading";
import { Player } from "./player";

export const LastFm = () => {
  return (
    <div className="my-8">
      <SectionHeading className="mx-4">Last listened to</SectionHeading>
      <Player />
    </div>
  );
};
