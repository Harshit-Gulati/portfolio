import { alphabetData } from "@/data/alphabetData";

type LetterType = "mask" | "light" | "dark" | "skeleton" | "faceMask";

type WireframeLetterProps = {
  char: string;
  variant: LetterType;
  transform?: string;
};

const getStyleData = (variant: LetterType) => {
  switch (variant) {
    case "mask":
      return { strokeColor: "white", fillColor: "black", strokeWidth: 1 };
    case "skeleton":
      return { strokeColor: "#2c2c2c", fillColor: "none", strokeWidth: 1 };
    case "light":
      return {
        strokeColor: "#2c2c2c",
        fillColor: "url(#text-gradient-light)",
        strokeWidth: 1,
      };
    case "dark":
      return {
        strokeColor: "#2c2c2c",
        fillColor: "url(#text-gradient-dark)",
        strokeWidth: 1,
      };
    case "faceMask":
      return {
        strokeColor: "#000000",
        fillColor: "#ffffff",
        strokeWidth: 1,
      };
  }
};

export const WireframeLetter = ({
  char,
  variant,
  transform,
}: WireframeLetterProps) => {
  const data = alphabetData[char.toUpperCase()];

  if (!data) return null;

  const style = getStyleData(variant);

  return (
    <g transform={transform}>
      <g
        stroke={style.strokeColor}
        strokeWidth={style.strokeWidth}
        strokeLinejoin="round"
        fill="none"
      >
        {data.wireframes.map((d, i) => (
          <path key={i} d={d} />
        ))}
      </g>

      <path d={data.body} fill={style.fillColor} stroke="none" />
    </g>
  );
};
