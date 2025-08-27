import { cn } from "@/app/utils/cn";

export function HighlightedText({ className, ...props }: React.ComponentProps<"span">) {
  return (
    <span
      className={cn(
        "bg-gradient-to-r from-pink-500 via-orange-400 to-cyan-400 bg-clip-text text-transparent",
        className
      )}
      {...props}
    />
  );
}
