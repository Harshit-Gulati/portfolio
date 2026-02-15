"use server";

import fs from "fs/promises";
import path from "path";
import { CodeBlockClient } from "./code-block-client";

interface FileSourceProps {
  filePath: string;
  filename: string;
  language?: string;
}

export default async function CodeBlock({
  filePath,
  filename,
  language = "typescript",
}: FileSourceProps) {
  // Resolve the path
  const fullPath = path.join(process.cwd(), filePath);

  let rawCode = "";

  try {
    // Read the file content
    rawCode = await fs.readFile(fullPath, "utf-8");
  } catch (error) {
    console.error(error);
    return (
      <div className="rounded border border-red-500 bg-red-50 p-4 text-red-600">
        Error loading file: {filePath}
      </div>
    );
  }

  // Pass the raw string to your Client Component
  return (
    <CodeBlockClient code={rawCode} filename={filename} language={language} />
  );
}
