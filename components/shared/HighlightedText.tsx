import { cn } from "@/app/utils/cn";

export function HighlightedText({ className, ...props }: React.ComponentProps<"span">) {
  return (
    <span
      className={cn("bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent", className)}
      {...props}
    />
  );
}
