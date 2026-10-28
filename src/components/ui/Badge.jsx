import { Box } from "lucide-react";
import { cn } from "@/lib/utils";

export default function Badge({ children, dark = false, className }) {
  return (
    <span className={cn(
      "inline-flex items-center gap-2 border border-dashed px-3 py-1 text-xs font-bold uppercase tracking-wider",
      dark ? "border-white/25 text-white" : "border-ink/25 text-ink", className
    )}>
      <Box size={14} className="text-brand" /> {children}
    </span>
  );
}
