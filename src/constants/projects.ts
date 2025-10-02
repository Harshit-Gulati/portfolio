import {
  MotionIcon,
  NextJSIcon,
  NodeJSIcon,
  ReactIcon,
  TailwindCSSIcon,
  WebSocketIcon,
} from "@/utils/icons";
import { JSX } from "react";

type Tag = { name: string; icon: JSX.Element };

export type Project = {
  title: string;
  src: string;
  href?: string;
  github: string;
  slug: string;
  description: string;
  tags: Tag[];
};

export const projects: Project[] = [
  {
    title: "freeflow",
    src: "/freeflow.png",
    description:
      "Collaborative whiteboard for teams to create and share boards.",
    slug: "",
    href: "https://freeflow-web.vercel.app/",
    github: "https://github.com/harshit-gulati/freeflow",
    tags: [
      { name: "Next.js", icon: NextJSIcon },
      { name: "Tailwind CSS", icon: TailwindCSSIcon },
    ],
  },
  {
    title: "ResumeCheck",
    src: "/resumecheck.png",
    slug: "",
    description:
      "Smart resume checker that matches your CV against job requirements.",
    href: "https://resume-check.vercel.app/",
    github: "https://github.com/harshit-gulati/resumecheck",
    tags: [
      { name: "Next.js", icon: NextJSIcon },
      { name: "Tailwind CSS", icon: TailwindCSSIcon },
      { name: "Framer Motion", icon: MotionIcon },
    ],
  },
  {
    title: "Chess",
    slug: "",
    src: "/chess.png",
    description: "A Chess app using basic WebSocket implementation.",
    github: "https://github.com/harshit-gulati/chess",
    tags: [
      { name: "React.js", icon: ReactIcon },
      { name: "Tailwind CSS", icon: TailwindCSSIcon },
      { name: "Node.js", icon: NodeJSIcon },
      { name: "WebSocket", icon: WebSocketIcon },
    ],
  },
];
