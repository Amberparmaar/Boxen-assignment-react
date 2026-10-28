import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

const variants = {
  brand: "bg-brand text-white hover:bg-brand-dark",
  white: "bg-white text-ink hover:bg-brand-light",
  green: "bg-[#82e04a] text-ink hover:bg-[#95ec60]",
};

export default function Button({
  to,
  href,
  variant = "brand",
  arrow = true,
  icon: Icon = ArrowUpRight,
  className,
  children,
  ...rest
}) {
  const cls = cn(
    "group inline-flex items-center gap-3 rounded-full py-2 pl-6 pr-2 text-sm font-semibold transition-colors duration-300",
    variants[variant],
    className
  );

  const inner = (
    <>
      {/* Sliding Text */}
      <span className="relative inline-block overflow-hidden">
        {/* Original text */}
        <span className="block transition-transform duration-[700ms] ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:-translate-y-full">
          {children}
        </span>

        {/* Sliding text */}
        <span
          aria-hidden="true"
          className="absolute left-0 top-0 block translate-y-full whitespace-nowrap transition-transform duration-[700ms] ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:translate-y-0"
        >
          {children}
        </span>
      </span>

      {/* Arrow Icon */}
      {arrow && (
        <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-ink text-white transition-transform duration-300 group-hover:rotate-45">
          <Icon size={16} />
        </span>
      )}
    </>
  );

  if (to) {
    return (
      <Link to={to} className={cls} {...rest}>
        {inner}
      </Link>
    );
  }

  return (
    <a href={href || "#"} className={cls} {...rest}>
      {inner}
    </a>
  );
}
