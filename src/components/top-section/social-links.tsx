import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandX,
  IconMail,
} from "@tabler/icons-react";
import Link from "next/link";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { FadeIn } from "@/components/ui/fade-in";

export const SocialLinks = () => {
  return (
    <FadeIn className="flex gap-2 pt-2 text-neutral-600 dark:text-neutral-500">
      {socialLinks.map((link, index) => {
        const Icon = iconMap[link.icon];
        return (
          <Tooltip key={index}>
            <TooltipTrigger asChild>
              <Link href={link.href} target="_blank">
                <Icon
                  size={22}
                  className="transition-colors hover:text-neutral-500 dark:hover:text-neutral-600"
                />
              </Link>
            </TooltipTrigger>
            <TooltipContent>{link.tooltipContent}</TooltipContent>
          </Tooltip>
        );
      })}
    </FadeIn>
  );
};

const iconMap = {
  linkedin: IconBrandLinkedin,
  github: IconBrandGithub,
  x: IconBrandX,
  email: IconMail,
};

const socialLinks: {
  href: string;
  tooltipContent: string;
  icon: keyof typeof iconMap;
}[] = [
  {
    href: "https://www.linkedin.com/in/harshit-gulati/",
    tooltipContent: "LinkedIn",
    icon: "linkedin",
  },
  {
    href: "https://github.com/harshit-gulati",
    tooltipContent: "GitHub",
    icon: "github",
  },
  {
    href: "https://x.com/harshitWrld",
    tooltipContent: "X",
    icon: "x",
  },
  {
    href: "mailto:harshit.gulati.999@outlook.com",
    tooltipContent: "Email",
    icon: "email",
  },
];
