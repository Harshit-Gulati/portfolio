import wireframeTextTsx from "@/data/labs/wireframe-text/wireframe-text.tsx.code.txt";
import alphabetDataTs from "@/data/labs/wireframe-text/alphabetData.ts.code.txt";
import wireframeLetterTsx from "@/data/labs/wireframe-text/wireframe-letter.tsx.code.txt";
import wireframeTextUtilTs from "@/data/labs/wireframe-text/wireframe-text-util.ts.code.txt";

export const codes: {
  filePath: string;
  filename: string;
  language?: string;
  code: string;
}[] = [
  {
    filePath: "src/utils/wireframe-text.ts",
    filename: "utils/wireframe-text.ts",
    code: wireframeTextUtilTs,
  },
  {
    filePath: "src/data/alphabetData.ts",
    filename: "data/characters.ts",
    code: alphabetDataTs,
  },
  {
    filePath: "src/components/ui/wireframe-text.tsx",
    filename: "components/ui/wireframe-text.tsx",
    code: wireframeTextTsx,
  },
  {
    filePath: "src/components/ui/wireframe-letter.tsx",
    filename: "components/ui/wireframe-letter.tsx",
    code: wireframeLetterTsx,
  },
];
