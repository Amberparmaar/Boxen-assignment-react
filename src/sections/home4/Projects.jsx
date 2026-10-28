import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import Button from "@/components/ui/Button";
import SectionHead from "@/components/home4/SectionHead";
import { projects, img } from "@/data/home4";

export default function Projects() {
  return (
    <section className="bg-[#ebeff0] px-5 py-24 text-[#0b1f23]">
      <div className="mx-auto max-w-[1296px]">
        <div className="flex items-end justify-between gap-6">
          <SectionHead align="left" badge="Proud projects" title="Breaking Boundaries, Building Dreams." className="max-w-[460px]" />
          <Button to="/portfolio" className="shrink-0">More Projects</Button>
        </div>
        <ul className="mt-10 divide-y divide-[#0b1f23]/15 border-y border-[#0b1f23]/15">
          {projects.map((p, i) => (
            <li key={p.title}>
              <Link to="/portfolio"
                    className="group grid grid-cols-[96px_1fr_auto] items-center gap-5 py-5 md:grid-cols-[200px_60px_1fr_auto] md:gap-x-10 xl:grid-cols-[240px_90px_1fr_auto] xl:gap-x-[114px]">
                <img src={img(p.image)} alt={p.title} loading="lazy" className="aspect-[4/3] w-full rounded-md object-cover" />
                <span className="hidden text-xl md:block">0{i + 1}.</span>
                <div>
                  <span className="inline-block rounded-sm border border-[#0b1f23]/20 px-2 py-0.5 text-[11px]">Business</span>
                  <h3 className="mt-2 max-w-[320px] text-xl font-medium leading-snug md:text-2xl">{p.title}</h3>
                </div>
                <ArrowUpRight size={32} strokeWidth={1} className="transition group-hover:text-brand" />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
