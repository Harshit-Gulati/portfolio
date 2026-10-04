import { BlockTextCardPreview, BlockTextPageContent } from "./block-text";
import { LoadingTextCardPreview, LoadingTextPageContent } from "./loading-text";
import { LastFmCardPreview, LastFmPageContent } from "./last-fm";

export interface LabDefinition {
  slug: string;
  title: string;
  description: string;
  seo: {
    title: string;
    description: string;
  };
  CardPreview: React.ComponentType;
  PageContent: React.ComponentType;
}

export const labsRegistry: Record<string, LabDefinition> = {
  "block-text": {
    slug: "block-text",
    title: "Oblique Wireframe Text",
    description:
      "Projection-based 3D wireframe text rendering inspired by isometric architectural drawings.",
    seo: {
      title: "Oblique Wireframe Text | Labs",
      description:
        "A custom projection-based oblique wireframe text component built with React and Tailwind CSS.",
    },
    CardPreview: BlockTextCardPreview,
    PageContent: BlockTextPageContent,
  },
  "loading-text": {
    slug: "loading-text",
    title: "Wireframe Progress & Liquid Fill",
    description:
      "Text-masked wireframe progress bar and fluid-fill wave animation using motion values.",
    seo: {
      title: "Wireframe Progress & Liquid Fill | Labs",
      description:
        "Projection-based typography masks with linear wipe and fluid wave animations built with Motion and React.",
    },
    CardPreview: LoadingTextCardPreview,
    PageContent: LoadingTextPageContent,
  },
  "last-fm": {
    slug: "last-fm",
    title: "Last.fm Scrobbler Widget",
    description:
      "Live real-time music scrobbling player connecting to the Last.fm AudioScrobbler API with live album art.",
    seo: {
      title: "Last FM Component | Labs",
      description:
        "A dynamic Last.fm custom player component that displays real-time track updates and album art.",
    },
    CardPreview: LastFmCardPreview,
    PageContent: LastFmPageContent,
  },
};

export const allLabs: LabDefinition[] = Object.values(labsRegistry);

export const getLabBySlug = (slug: string): LabDefinition | undefined => {
  return labsRegistry[slug];
};
