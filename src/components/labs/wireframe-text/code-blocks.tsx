import { FadeIn } from "@/components/ui/fade-in";
import { CodeBlockClient } from "../code-block-client";
import { codes } from "@/data/labs/wireframe-text/wireframe-text";

export const CodeBlocks = () => {
  return (
    <FadeIn>
      {codes.map((code, index) => (
        <CodeBlockClient
          key={index}
          code={code.code}
          filename={code.filename}
          language={code.language ?? "typescript"}
        />
      ))}
    </FadeIn>
  );
};
