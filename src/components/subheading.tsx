import { cn } from "@/lib/utils";
import { FadeIn } from "@/components/ui/fade-in";

type SubheadingProps = {
  as?: "h2" | "h2" | "h3" | "h4" | "h5" | "h6";
  children: React.ReactNode;
  className?: string;
};

export const Subheading = ({
  as: Tag = "h2",
  children,
  className,
}: SubheadingProps) => {
  return (
    <FadeIn>
      <Tag
        className={cn(
          "text-secondary max-w-lg text-base",
          className,
        )}
      >
        {children}
      </Tag>
    </FadeIn>
  );
};
