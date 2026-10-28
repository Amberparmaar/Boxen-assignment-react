import { useRef } from "react";
import { Star, Zap } from "lucide-react";
import useReveal from "@/hooks/useReveal";
import { testimonials } from "@/data/content";
import Badge from "@/components/ui/Badge";

export default function Testimonials() {
  const root = useRef(null);
  useReveal(root);

  return (
    <section ref={root} className="bg-brand-light/60 px-5 py-20 md:py-28">
      <div data-reveal className="mx-auto max-w-3xl text-center">
        <Badge>Client feedback</Badge>
        <h2 className="mt-6 text-3xl font-medium md:text-5xl">Client testimonials that speak for themselves</h2>
      </div>
      <div data-stagger className="mx-auto mt-14 grid max-w-[1250px] gap-6 md:grid-cols-2 lg:grid-cols-3">
        {testimonials.map((t) => (
          <article key={t.name} className="rounded-lg bg-white p-7 transition-shadow hover:shadow-xl">
            <div className="inline-flex gap-0.5 rounded bg-brand-light px-2 py-1 text-brand">
              {Array.from({ length: 5 }).map((_, i) => <Star key={i} size={12} fill="currentColor" />)}
            </div>
            <p className="mt-6 min-h-[104px] leading-relaxed text-ink/85">"{t.text}"</p>
            <div className="mt-6 flex items-center gap-3 border-t border-dashed border-ink/20 pt-6">
              <span className="grid h-12 w-12 place-items-center rounded-full bg-[#82e04a]"><Zap size={22} fill="currentColor" /></span>
              <div>
                <p className="font-medium">{t.name}</p>
                <p className="text-sm text-ink/55">Customer</p>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
