import { cn } from "@/lib/utils";

type TabButtonProps = {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
};

export const TabButton = ({ active, onClick, children }: TabButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={cn(
        "flex-1 rounded-md p-2 text-sm font-medium whitespace-nowrap transition-all",
        active
          ? "bg-white text-neutral-900 shadow dark:bg-neutral-800 dark:text-white"
          : "text-neutral-500 hover:text-neutral-900 dark:hover:text-neutral-300",
      )}
    >
      {children}
    </button>
  );
};
