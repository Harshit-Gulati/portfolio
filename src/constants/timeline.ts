interface Timeline {
  title: string;
  content: {
    title: string;
    description?: string;
  }[];
}

export const timeline: Timeline[] = [
  {
    title: "2026",
    content: [
      {
        title: "Software Engineer (Full-Time) @ RNT Health Insights",
        description:
          "Transitioned into a full-time role (July 2026 - Present), architecting real-time C++ ↔ QML video feeds, clinical imaging workflows, and performance-critical systems.",
      },
      {
        title: "Graduated with B.Tech in Aerospace & Minor in CS @ PEC",
        description:
          "Completed my undergraduate degree from Punjab Engineering College, Chandigarh, with a dual foundation in aerospace systems engineering and computer science.",
      },
    ],
  },
  {
    title: "2025",
    content: [
      {
        title: "Software Engineering Intern @ RNT Health Insights",
        description:
          "Worked on real-time endoscopy analysis software (October 2025 - June 2026) — migrating legacy Qt Widgets to QML and rebuilding the company website with Next.js.",
      },
      {
        title: "Frontend Intern @ Asezment Technologies Pvt. Ltd.",
        description:
          "Built the frontend MVP for an AI assessment platform (January 2025 - June 2025), including browser-native proctoring and a scalable Turborepo + Storybook setup.",
      },
    ],
  },
  {
    title: "2022",
    content: [
      {
        title: "Started B.Tech in Aerospace Engineering",
        description:
          "Began my undergraduate journey at Punjab Engineering College, Chandigarh.",
      },
    ],
  },
  {
    title: "2020",
    content: [
      {
        title: "Completed Class 10 @ St. Stephen's School, Chandigarh",
        description:
          "Finished secondary school and built a strong foundation in academics and problem-solving.",
      },
    ],
  },
];
