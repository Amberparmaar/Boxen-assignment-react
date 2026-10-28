import { useEffect, useState } from "react";
import { Star } from "lucide-react";
import SectionHead from "@/components/home4/SectionHead";
import { testimonials, img } from "@/data/home4";

export default function Testimonials() {
  const [index, setIndex] = useState(1);

  useEffect(() => {
    const t = setInterval(() => setIndex((i) => (i + 1) % testimonials.length), 4000);
    return () => clearInterval(t);
  }, []);

  return (
    <section className="overflow-hidden bg-[#d8e5e4] py-24 text-[#0b1f23]">
      <SectionHead badge="Client feedbacks" title="Success Stories Fuel our Innovation." className="max-w-[420px] px-5" />

      <div className="relative mt-12 h-[290px] [--w:85vw] sm:[--w:474px]">
        <div
          className="absolute left-1/2 top-0 flex gap-6 transition-transform duration-700 ease-out"
          style={{ transform: `translateX(calc(var(--w) / -2 - ${index} * (var(--w) + 24px)))` }}
        >
          {testimonials.map((t, i) => (
            <article key={i} className="w-[var(--w)] shrink-0 rounded-md bg-white p-6">
              <div className="flex items-center justify-between border-b border-dashed border-[#0b1f23]/20 pb-4">
                <div className="flex items-center gap-3">
                  <img src={img(t.image)} alt="" className="h-11 w-11 rounded-full object-cover" />
                  <div>
                    <p className="text-sm font-semibold">{t.name}</p>
                    <p className="text-xs text-[#0b1f23]/55">{t.role}</p>
                  </div>
                </div>
                <div className="flex gap-0.5 text-brand">
                  {Array.from({ length: 5 }).map((_, k) => <Star key={k} size={12} fill="currentColor" />)}
                </div>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-[#0b1f23]/70">“{t.text}”</p>
            </article>
          ))}
        </div>
      </div>

      <div className="flex justify-center gap-1.5">
        {testimonials.map((_, i) => (
          <button key={i} aria-label={`Slide ${i + 1}`} onClick={() => setIndex(i)}
                  className={`h-1.5 rounded-full transition-all ${i === index ? "w-8 bg-brand" : "w-2 bg-[#0b1f23]/15"}`} />
        ))}
      </div>
    </section>
  );
}
