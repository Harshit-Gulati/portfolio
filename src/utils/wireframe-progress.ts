import { alphabetData } from "@/data/alphabetData";

const LETTER_SPACING = 0;

const generateWavePath = (width: number, height: number) => {
  const waveHeight = 10;
  const waveLength = 40;
  const totalLoops = Math.ceil((width * 2) / waveLength) + 2;

  const path = [`M 0 0`];

  for (let i = 0; i < totalLoops; i++) {
    const startX = i * waveLength;
    path.push(
      `Q ${startX + waveLength / 2} ${waveHeight} ${startX + waveLength} 0`,
    );
    path.push(`T ${startX + waveLength * 2} 0`);
  }

  path.push(`V ${height + 200} H -100 Z`);

  return path.join(" ");
};

export const getStyleData = (text: string) => {
  let height = 0;
  let currentX = 0;

  const layout = text.split("").map((char) => {
    const characterData = alphabetData[char.toUpperCase()] ?? alphabetData[" "];
    const width = characterData.width;
    const x = currentX;
    height = Math.max(characterData.height, height);
    currentX += width + LETTER_SPACING;
    return { char, x };
  });

  const totalWidth = currentX;

  const wavePathData = generateWavePath(totalWidth, height);

  return { totalWidth, wavePathData, layout, height };
};
