import { Link } from "react-router-dom";
import SectionHead from "@/components/home4/SectionHead";
import { services, img } from "@/data/home4";

export default function Services() {
  return (
    <section className="bg-[#0b1f23] px-5 py-28">
      <SectionHead dark badge="Our solutions" title="Scalable business services" className="max-w-[420px]" />
      <div className="mx-auto mt-14 grid max-w-[1296px] gap-6 md:grid-cols-3">
        {services.map((s, i) => (
          <Link key={s.title} to="/services" className="group relative block aspect-[208/225] overflow-hidden rounded-md">
            <img src={img(s.image)} alt={s.title} loading="lazy" className="h-full w-full object-cover" />
            <div className="absolute inset-x-0 bottom-0 translate-y-full bg-gradient-to-t from-black/80 to-transparent p-6 text-white transition-transform duration-300 group-hover:translate-y-0">
              <span className="text-sm text-brand-light">0{i + 1}.</span>
              <h3 className="text-xl font-medium">{s.title}</h3>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
