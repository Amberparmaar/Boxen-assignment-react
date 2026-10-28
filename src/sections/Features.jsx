import { useRef } from "react";
import useReveal from "@/hooks/useReveal";
import { features } from "@/data/content";
import Badge from "@/components/ui/Badge";
import Icon from "@/components/Icon";

export default function Features() {
  const root = useRef(null);
  useReveal(root);

  return (
    <section ref={root} className="bg-hero px-5 py-20 text-white md:py-28">
      <div className="mx-auto max-w-[1300px]">
        <div data-reveal className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <div>
            <Badge dark>Key features</Badge>
            <h2 className="mt-6 max-w-2xl text-3xl font-medium leading-tight md:text-5xl">
              Packed with powerful features for seamless website building
            </h2>
          </div>
          <p className="max-w-xs text-sm text-white/70">
            Build stunning, responsive websites effortlessly with powerful features designed for speed, flexibility, and user experience.
          </p>
        </div>

        <div data-stagger className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f) => (
            <div key={f.title} className="group rounded-lg border border-white/15 p-7 transition-colors duration-300 hover:border-brand hover:bg-white/5">
              <span className="grid h-14 w-14 place-items-center rounded-full border border-white/20 transition-colors group-hover:bg-brand">
                <Icon name={f.icon} size={24} />
              </span>
              <h3 className="mb-3 mt-12 text-lg font-medium">{f.title}</h3>
              <p className="text-sm leading-relaxed text-white/65">{f.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
