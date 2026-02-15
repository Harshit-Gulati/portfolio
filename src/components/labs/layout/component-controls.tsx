import { cn } from "@/lib/utils";

type ComponentControlsProps = {
  children: React.ReactNode;
  className?: string;
};

export const ComponentControls = ({
  children,
  className,
}: ComponentControlsProps) => {
  return (
    <div
      className={cn(
        "rounded-xl border border-neutral-200 bg-white p-4 backdrop-blur dark:border-neutral-800 dark:bg-neutral-900",
        className,
      )}
    >
      {children}
    </div>
  );
};
