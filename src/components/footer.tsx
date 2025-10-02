import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandX,
  IconHeartFilled,
} from "@tabler/icons-react";
import Link from "next/link";
import { Container } from "./container";

export const Footer = () => {
  return (
    <Container className="flex justify-between border-t border-neutral-100 px-10 py-3 dark:border-neutral-800">
      <p className="flex items-center text-xs text-neutral-500">
        Built with <IconHeartFilled className="mx-1 size-4" /> by Harshit Gulati
      </p>
      <div className="flex items-center justify-center gap-4">
        <Link
          href="https://www.linkedin.com/in/harshit-gulati/"
          target="_blank"
        >
          <IconBrandLinkedin className="size-4 text-neutral-500 hover:text-neutral-700" />
        </Link>
        <Link href="https://github.com/harshit-gulati" target="_blank">
          <IconBrandGithub className="size-4 text-neutral-500 hover:text-neutral-700" />
        </Link>
        <Link href="https://x.com/harshitWrld" target="_blank">
          <IconBrandX className="size-4 text-neutral-500 hover:text-neutral-700" />
        </Link>
      </div>
    </Container>
  );
};
