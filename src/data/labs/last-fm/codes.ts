import playerTsx from "@/data/labs/last-fm/player.tsx.codes.txt";
import songConstantsTs from "@/data/labs/last-fm/song.ts.code.txt";

export const lastFmCodes: {
  filePath: string;
  filename: string;
  language?: string;
  code: string;
}[] = [
  {
    filePath: "",
    filename: "src/player.tsx",
    code: playerTsx,
  },
  {
    filePath: "",
    filename: "constants/song.ts",
    code: songConstantsTs,
  },
];
