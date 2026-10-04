"use client";

import { useState } from "react";
import {
  IconMail,
  IconCopy,
  IconCheck,
  IconMapPin,
  IconClock,
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandX,
  IconArrowUpRight,
} from "@tabler/icons-react";
import { toast } from "sonner";
import { Link } from "next-view-transitions";

export const ContactInfo = () => {
  const [copied, setCopied] = useState(false);
  const email = "harshit.gulati.999@outlook.com";

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      toast.success("Email copied to clipboard!");
      setTimeout(() => setCopied(false), 2000);
    } catch {
      toast.error("Failed to copy email.");
    }
  };

  return (
    <div className="flex flex-col gap-6">
      {/* Availability Status */}
      <div className="rounded-md border flex flex-col gap-2 border-neutral-200/80 bg-neutral-50/40 p-5 dark:border-neutral-800/80 dark:bg-neutral-900/30">
        <div className="flex items-center gap-2">
          <span className="relative flex h-2.5 w-2.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500"></span>
          </span>
          <span className="font-mono text-xs font-semibold text-emerald-800 dark:text-emerald-400">
            Available for select opportunities
          </span>
        </div>
        <p className="text-xs leading-relaxed text-neutral-600 dark:text-neutral-400">
          Open to software engineering roles, high-performance systems work, and
          technical collaborations.
        </p>
      </div>

      {/* Direct Email Card with 1-Click Copy */}
      <div className="flex flex-col gap-3 rounded-md border border-neutral-200/80 bg-neutral-50/40 p-4 dark:border-neutral-800/80 dark:bg-neutral-900/30">
        <div className="flex items-center justify-between">
          <span className="text-xs font-medium text-neutral-400 dark:text-neutral-500">
            Email
          </span>
          <button
            type="button"
            onClick={handleCopyEmail}
            className="flex items-center gap-1 rounded-md px-2 py-1 text-xs text-neutral-500 transition-colors hover:bg-neutral-200/60 hover:text-neutral-900 dark:text-neutral-400 dark:hover:bg-neutral-800 dark:hover:text-neutral-100"
            title="Copy email address"
          >
            {copied ? (
              <>
                <IconCheck size={13} className="text-emerald-500" />
                <span className="text-emerald-600 dark:text-emerald-400">
                  Copied
                </span>
              </>
            ) : (
              <>
                <IconCopy size={13} />
                <span>Copy</span>
              </>
            )}
          </button>
        </div>

        <Link
          href={`mailto:${email}`}
          className="group flex items-center gap-2 text-sm font-medium text-neutral-900 transition-colors hover:text-indigo-600 dark:text-neutral-100 dark:group-hover:text-indigo-400"
        >
          <IconMail
            size={16}
            className="text-neutral-400 group-hover:text-indigo-600 dark:text-neutral-500"
          />
          <span className="font-mono text-xs break-all sm:text-sm">
            {email}
          </span>
        </Link>
      </div>

      {/* Location & Timezone */}
      <div className="flex items-center justify-between rounded-md border border-neutral-200/80 bg-neutral-50/40 p-5 text-xs dark:border-neutral-800/80 dark:bg-neutral-900/30">
        <div className="flex items-center gap-2 text-neutral-700 dark:text-neutral-300">
          <IconMapPin size={16} className="text-neutral-400" />
          <span>Chandigarh, India</span>
        </div>
        <div className="flex items-center gap-1.5 font-mono text-neutral-500 dark:text-neutral-400">
          <IconClock size={14} className="opacity-70" />
          <span>IST (UTC+5:30)</span>
        </div>
      </div>

      {/* Social Links Rail */}
      <div className="flex flex-col gap-2">
        <span className="px-1 text-xs font-medium tracking-wider text-neutral-400 uppercase dark:text-neutral-500">
          Profiles
        </span>
        <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-3 lg:grid-cols-1">
          {profiles.map((profile) => {
            const Icon = profile.icon;
            return (
              <Link
                key={profile.name}
                href={profile.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between rounded-md border border-neutral-200/80 bg-neutral-50/40 px-3.5 py-2.5 transition-all duration-200 hover:border-indigo-500/40 hover:bg-neutral-50/70 hover:shadow-xs dark:border-neutral-800/80 dark:bg-neutral-900/30 dark:hover:border-indigo-500/30 dark:hover:bg-neutral-900/60"
              >
                <div className="flex items-center gap-2.5">
                  <Icon
                    size={17}
                    className="text-neutral-500 transition-colors group-hover:text-neutral-900 dark:text-neutral-400 dark:group-hover:text-neutral-100"
                  />
                  <div className="flex flex-col">
                    <span className="text-xs font-medium text-neutral-900 group-hover:text-indigo-600 dark:text-neutral-100 dark:group-hover:text-indigo-400">
                      {profile.name}
                    </span>
                    <span className="font-mono text-[11px] text-neutral-500 dark:text-neutral-400">
                      {profile.handle}
                    </span>
                  </div>
                </div>
                <IconArrowUpRight
                  size={14}
                  className="text-neutral-400 opacity-60 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-indigo-600 group-hover:opacity-100 dark:group-hover:text-indigo-400"
                />
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

const profiles = [
  {
    name: "GitHub",
    handle: "@harshit-gulati",
    href: "https://github.com/harshit-gulati",
    icon: IconBrandGithub,
  },
  {
    name: "LinkedIn",
    handle: "harshit-gulati",
    href: "https://www.linkedin.com/in/harshit-gulati/",
    icon: IconBrandLinkedin,
  },
  {
    name: "X / Twitter",
    handle: "@harshitWrld",
    href: "https://x.com/harshitWrld",
    icon: IconBrandX,
  },
];
