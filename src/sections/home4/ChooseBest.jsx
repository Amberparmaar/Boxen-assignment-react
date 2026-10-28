import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import Icon from "@/components/Icon";
import SectionHead from "@/components/home4/SectionHead";
import { chooseBest } from "@/data/home4";

export default function ChooseBest() {
  return (
    <section className="bg-[#d8e5e4] px-5 py-24 text-[#0b1f23]">
      <SectionHead badge="Choose the best" title="Empowering Business with Expertise." className="max-w-[520px]" />
      <div className="mx-auto mt-12 grid max-w-[1296px] gap-6 md:grid-cols-3">
        {chooseBest.map((c) => (
          <article key={c.title} className="rounded-md bg-white px-8 py-10 text-center">
            <span className="mx-auto grid h-[90px] w-[90px] place-items-center rounded-full bg-[#ebeff0] text-brand">
              <Icon name={c.icon} size={40} strokeWidth={1} />
            </span>
            <h3 className="mt-6 text-xl font-medium">{c.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-[#0b1f23]/60">{c.text}</p>
            <Link to="/about" className="mt-6 inline-flex items-center gap-2 text-sm font-semibold">
              Read More
              <span className="grid h-8 w-8 place-items-center rounded-full bg-[#0b1f23] text-white"><ArrowUpRight size={14} /></span>
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
}
