export type WorkItem = {
  company: string;
  location: string;
  logo: string;
  alt: string;
  href: string;
  details: string[];
  tech: string[];
  isCurrent: boolean;
};

export const works: WorkItem[] = [
  {
    company: "RNT Health Insights",
    location: "Remote | November 2025 - Present",
    logo: "/rnt.webp",
    alt: "RNT logo",
    href: "https://www.rntinsights.com/",
    details: [
      "Modernizing the core endoscopy analysis software by migrating legacy Qt Widgets to QML resulting in smoother clinical workflows.",
      "Engineering the C++ to QML integration layer, exposing complex backend imaging algorithms to the frontend while maintaining thread safety and real-time performance during live video feeds.",
      "Revamping the company's digital presence by rebuilding the main website with Next.js and TypeScript, implementing Server-Side Rendering (SSR) for superior SEO and initial load performance.",
    ],
    tech: [
      "Qt (C++)",
      "QML",
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "GitLab",
    ],
    isCurrent: true,
  },
  {
    company: "Asezment Technologies Private Limited",
    location: "Remote | January 2025 - June 2025",
    logo: "/asez.webp",
    alt: "asez logo",
    href: "",
    details: [
      "Architected and developed the frontend MVP for an AI-powered technical assessment platform, creating distinct, intuitive workflows for both recruiter test creation and candidate evaluation.",
      "Engineered robust, browser-native proctoring features, implementing secure validation flows for camera/microphone access, screen sharing, and full-screen enforcement to ensure assessment integrity.",
      "Spearheaded the migration to a high-performance Turborepo monorepo architecture, establishing shared configurations and optimizing build processes to enhance code maintainability and scalability.",
      "Established a comprehensive component design system using Storybook, reducing UI inconsistencies and accelerating feature development through reusable, well-documented code modules.",
    ],
    tech: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Turborepo",
      "Storybook",
      "Web APIs (MediaDevices)",
      "GitHub",
    ],
    isCurrent: false,
  },
];
