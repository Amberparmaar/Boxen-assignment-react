import { Share2 } from "lucide-react";
import SectionHead from "@/components/home4/SectionHead";
import Socials from "@/components/home4/Socials";
import { team, img } from "@/data/home4";

export default function Team() {
  return (
    <section className="bg-[#ebeff0] px-5 py-24 text-[#0b1f23]">
      <SectionHead badge="Meet our team" title="People Behind Bexon." />
      <div className="mx-auto mt-12 grid max-w-[1000px] gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {team.map((m) => (
          <article key={m.name} className="group">
            <div className="relative">
              <span className="absolute inset-0 rotate-[3deg] rounded-md border-2 border-brand opacity-0 transition duration-300 group-hover:opacity-100" />
              <div className="relative overflow-hidden rounded-md">
                <img src={img(m.image)} alt={m.name} loading="lazy" className="aspect-[115/140] w-full object-cover" />
                <div className="absolute inset-0 flex items-end justify-center bg-[#0b1f23]/55 pb-24 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <Socials className="h-8 w-8 bg-white/20 text-white" iconSize={12} />
                </div>
              </div>
            </div>
            <div className="mt-4 flex items-start justify-between gap-3">
              <div>
                <h3 className="font-medium">{m.name}</h3>
                <p className="text-xs text-[#0b1f23]/55">{m.role}</p>
              </div>
              <span className="grid h-7 w-7 place-items-center rounded-full bg-white"><Share2 size={12} /></span>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
