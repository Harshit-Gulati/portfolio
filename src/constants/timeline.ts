interface Timeline {
  title: string;
  content: {
    title: string;
    description?: string;
  }[];
}

export const timeline: Timeline[] = [
  {
    title: "2025",
    content: [
      {
        title: "Software Engineering Intern @ RNT Health Insights",
        description:
          "Working on real-time endoscopy analysis software — migrating legacy Qt Widgets to QML and building a clean C++ ↔ QML integration layer.",
      },
      {
        title: "Frontend Intern @ Asezment Technologies Pvt. Ltd.",
        description:
          "Built the frontend MVP for an AI assessment platform, including browser-native proctoring and a scalable Turborepo + Storybook setup.",
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
