import {
  IconAlertTriangle,
  IconCheck,
  IconInfoCircle,
  IconBulb,
  IconQuote,
} from "@tabler/icons-react";
import { cn } from "@/lib/utils";

type CalloutType = "info" | "warning" | "tip" | "idea" | "quote";

interface CalloutProps {
  type?: CalloutType;
  title?: string;
  children: React.ReactNode;
  className?: string;
}

const calloutConfig: Record<
  CalloutType,
  {
    icon: React.ComponentType<{ className?: string; size?: number }>;
    containerClass: string;
    iconClass: string;
    defaultTitle: string;
  }
> = {
  info: {
    icon: IconInfoCircle,
    containerClass:
      "border-sky-500/20 bg-sky-50/50 text-sky-900 dark:border-sky-500/20 dark:bg-sky-950/20 dark:text-sky-200",
    iconClass: "text-sky-600 dark:text-sky-400",
    defaultTitle: "Note",
  },
  warning: {
    icon: IconAlertTriangle,
    containerClass:
      "border-amber-500/20 bg-amber-50/50 text-amber-900 dark:border-amber-500/20 dark:bg-amber-950/20 dark:text-amber-200",
    iconClass: "text-amber-600 dark:text-amber-400",
    defaultTitle: "Warning",
  },
  tip: {
    icon: IconCheck,
    containerClass:
      "border-emerald-500/20 bg-emerald-50/50 text-emerald-900 dark:border-emerald-500/20 dark:bg-emerald-950/20 dark:text-emerald-200",
    iconClass: "text-emerald-600 dark:text-emerald-400",
    defaultTitle: "Tip",
  },
  idea: {
    icon: IconBulb,
    containerClass:
      "border-purple-500/20 bg-purple-50/50 text-purple-900 dark:border-purple-500/20 dark:bg-purple-950/20 dark:text-purple-200",
    iconClass: "text-purple-600 dark:text-purple-400",
    defaultTitle: "Idea",
  },
  quote: {
    icon: IconQuote,
    containerClass:
      "border-neutral-300 bg-neutral-50/80 text-neutral-800 dark:border-neutral-700 dark:bg-neutral-900/60 dark:text-neutral-200",
    iconClass: "text-neutral-500 dark:text-neutral-400",
    defaultTitle: "Quote",
  },
};

export const Callout = ({
  type = "info",
  title,
  children,
  className,
}: CalloutProps) => {
  const config = calloutConfig[type] || calloutConfig.info;
  const Icon = config.icon;

  return (
    <div
      className={cn(
        "my-6 flex items-start gap-3 rounded-lg border p-4 text-sm leading-relaxed",
        config.containerClass,
        className,
      )}
    >
      <div className={cn("mt-0.5 shrink-0", config.iconClass)}>
        <Icon size={20} />
      </div>
      <div className="flex-1 overflow-hidden">
        {title && (
          <div className="mb-1 font-semibold tracking-tight">
            {title || config.defaultTitle}
          </div>
        )}
        <div className="[&>*:first-child]:mt-0 [&>*:last-child]:mb-0">
          {children}
        </div>
      </div>
    </div>
  );
};
