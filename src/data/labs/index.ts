export interface LabItem {
  id: string;
  title: string;
  description: string;
  href: string;
}

export const labItems: LabItem[] = [
  {
    id: "1",
    title: "Oblique Wireframe Text",
    description:
      "Projection-based 3D wireframe text rendering inspired by isometric architectural drawings.",
    href: "/labs/block-text",
  },
  {
    id: "2",
    title: "Wireframe Progress & Liquid Fill",
    description:
      "Text-masked wireframe progress bar and fluid-fill wave animation using motion values.",
    href: "/labs/loading-text",
  },
  {
    id: "3",
    title: "Last.fm Scrobbler Widget",
    description:
      "Live real-time music scrobbling player connecting to the Last.fm AudioScrobbler API.",
    href: "/labs/last-fm",
  },
];
