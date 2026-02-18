import { SectionHeading } from "./section-heading";
import { Player } from "./player";

export const LastFm = () => {
  return (
    <div className="mb-3 flex flex-col gap-3">
      <SectionHeading className="mt-0">Last listened to</SectionHeading>
      <Player />
    </div>
  );
};
