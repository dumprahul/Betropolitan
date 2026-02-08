import { cn } from "@/lib/utils";

export const Logo = ({ className, ...props }: React.HTMLAttributes<HTMLSpanElement>) => {
  return (
    <span
      className={cn(
        "font-mono font-semibold uppercase tracking-wider text-white",
        className
      )}
      {...props}
    >
      Betropolitan
    </span>
  );
};
