import CodeBlock from "@/components/labs/code-block";
import { FadeIn } from "@/components/ui/fade-in";
import { motion } from "motion/react";

const codes: { filePath: string; filename: string; language?: string }[] = [
  {
    filePath: "src/utils/wireframe-text.ts",
    filename: "utils/wireframe-text.ts",
  },
  {
    filePath: "src/data/alphabetData.ts",
    filename: "data/characters.ts",
  },
  {
    filePath: "src/components/ui/wireframe-text.tsx",
    filename: "components/ui/wireframe-text.tsx",
  },
  {
    filePath: "src/components/ui/wireframe-letter.tsx",
    filename: "components/ui/wireframe-letter.tsx",
  },
];

export const CodeBlocks = () => {
  return (
    <FadeIn>
      {codes.map((code, index) => (
        <CodeBlock
          key={index}
          filePath={code.filePath}
          filename={code.filename}
          language={code.language ?? "typescript"}
        />
      ))}
    </FadeIn>
  );
};
