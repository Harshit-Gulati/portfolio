import { cn } from "@/lib/utils";

type ComponentPreviewProps = {
  children: React.ReactNode;
  className?: string;
};

export const ComponentPreview = ({
  children,
  className,
}: ComponentPreviewProps) => {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-xl border border-neutral-200 bg-white shadow-sm dark:border-neutral-800 dark:bg-neutral-900",
        className,
      )}
    >
      <div className="absolute top-4 left-4 z-10 flex gap-2">
        <span className="rounded-full bg-neutral-100 px-2 py-1 text-[10px] font-medium tracking-wider text-neutral-500 uppercase dark:bg-neutral-800">
          Preview
        </span>
      </div>
      <div className="flex min-h-75 w-full items-center justify-center p-8">
        {children}
      </div>
    </div>
  );
};
