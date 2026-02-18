import { cn } from "@/lib/utils";
import { FadeIn } from "@/components/ui/fade-in";

type HeadingProps = {
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  children: React.ReactNode;
  className?: string;
};

export const Heading = ({
  as: Tag = "h1",
  children,
  className,
}: HeadingProps) => {
  return (
    <FadeIn>
      <Tag
        className={cn(
          "text-primary text-2xl font-bold tracking-tighter drop-shadow-lg md:text-4xl",
          className,
        )}
      >
        {children}
      </Tag>
    </FadeIn>
  );
};
