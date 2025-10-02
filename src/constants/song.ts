import { Song } from "@/types/song";

export const defaultSong: Song = {
  src: "/airport.png",
  name: "Airport Security",
  artist: "Juice WRLD",
  album: "9 9 9",
};

export const defaultImgSrc =
  "https://lastfm.freetls.fastly.net/i/u/300x300/2a96cbd8b46e442fc41c2b86b821562f.png";

export const gradientImgSrc = "/gradient.png";

export const lastFmUrl = process.env.LASTFM_URL!;
