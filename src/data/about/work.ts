export type Position = {
  role: string;
  type?: "Full-time" | "Internship" | "Contract";
  period: string;
  isCurrent?: boolean;
  details: string[];
};

export type WorkItem = {
  company: string;
  location: string;
  logo: string;
  alt: string;
  href: string;
  isCurrent: boolean;
  roles: Position[];
  tech: string[];
};

export const works: WorkItem[] = [
  {
    company: "RNT Health Insights Private Limited",
    location: "Chandigarh, India",
    logo: "/rnt.webp",
    alt: "RNT logo",
    href: "https://www.rntinsights.com/",
    isCurrent: true,
    roles: [
      {
        role: "Software Engineer",
        type: "Full-time",
        period: "July 2026 - Present",
        isCurrent: true,
        details: [
          "Engineering high-throughput C++ backend algorithms and exposing them to the QML frontend for real-time clinical endoscopy analysis.",
          "Architecting real-time video feed pipelines and image processing modules with strict thread safety and minimal latency.",
          "Driving the architectural modernization of mission-critical clinical software to modular, performant QML.",
        ],
      },
      {
        role: "Software Engineering Intern",
        type: "Internship",
        period: "October 2025 - June 2026",
        isCurrent: false,
        details: [
          "Modernized core endoscopy analysis software by migrating legacy Qt Widgets to QML, resulting in smoother clinical workflows.",
          "Engineered the initial C++ to QML integration layer, exposing complex imaging algorithms while maintaining thread safety during live video feeds.",
          "Revamped the company's digital presence by rebuilding the main website with Next.js and TypeScript, implementing Server-Side Rendering (SSR) for superior SEO and initial load performance.",
        ],
      },
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
  },
  {
    company: "Asezment Technologies Private Limited",
    location: "Remote",
    logo: "/asez.webp",
    alt: "asez logo",
    href: "",
    isCurrent: false,
    roles: [
      {
        role: "Frontend Intern",
        type: "Internship",
        period: "January 2025 - June 2025",
        isCurrent: false,
        details: [
          "Architected and developed the frontend MVP for an AI-powered technical assessment platform, creating distinct, intuitive workflows for both recruiter test creation and candidate evaluation.",
          "Engineered robust, browser-native proctoring features, implementing secure validation flows for camera/microphone access, screen sharing, and full-screen enforcement to ensure assessment integrity.",
          "Spearheaded the migration to a high-performance Turborepo monorepo architecture, establishing shared configurations and optimizing build processes to enhance code maintainability and scalability.",
          "Established a comprehensive component design system using Storybook, reducing UI inconsistencies and accelerating feature development through reusable, well-documented code modules.",
        ],
      },
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
  },
];
