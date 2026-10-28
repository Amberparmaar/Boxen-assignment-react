import Badge from "@/components/ui/Badge";
import { cn } from "@/lib/utils";

export default function SectionHead({ badge, title, dark = false, align = "center", className }) {
  return (
    <div className={cn(align === "center" && "mx-auto text-center", className)}>
      <Badge dark={dark} className={cn("rounded-sm border-0", dark ? "bg-white/10" : "bg-white")}>{badge}</Badge>
      <h2 className={cn("mt-5 text-4xl font-medium leading-tight md:text-[44px]", dark ? "text-white" : "text-[#0b1f23]")}>
        {title}
      </h2>
    </div>
  );
}
