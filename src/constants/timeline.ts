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
        title: "Future Goal",
        description:
          "Looking for software engineering roles to contribute and grow as a full-stack developer.",
      },
      {
        title: "Internship @ Asezment Technologies Private Limited",
        description:
          "Worked on frontend development using React and TailwindCSS",
      },
    ],
  },
  {
    title: "2022",
    content: [
      {
        title: "Started B.Tech in Aerospace Engineering",
        description:
          "Began my undergraduate journey from Punjab Engineering College, Chandigarh.",
      },
    ],
  },
];
