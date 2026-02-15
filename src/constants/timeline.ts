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
        title: "Software Engineering Internship @ RNT Health Insights",
        description: "Working on various softwares",
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
