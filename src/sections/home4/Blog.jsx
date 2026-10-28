import { Link } from "react-router-dom";
import SectionHead from "@/components/home4/SectionHead";
import { posts, img } from "@/data/home4";

export default function Blog() {
  return (
    <section className="bg-[#d8e5e4] px-5 py-24 text-[#0b1f23]">
      <SectionHead badge="Read blogs" title="Strategies and Insights." />
      <div className="mx-auto mt-12 grid max-w-[1296px] gap-6 md:grid-cols-3">
        {posts.map((p, i) => (
          <Link key={i} to="/blog" className="group relative block aspect-[156/185] overflow-hidden rounded-md text-white">
            <img src={img(p.image)} alt={p.title} loading="lazy"
                 className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
            <span className="absolute inset-0 bg-gradient-to-t from-[#0b1f23]/90 via-[#0b1f23]/10 to-transparent" />
            <span className="absolute left-4 top-4 grid h-16 w-16 place-items-center bg-white/20 text-center leading-none backdrop-blur">
              <span><b className="block text-2xl font-semibold">28</b><span className="text-[10px] font-semibold uppercase">Feb</span></span>
            </span>
            <div className="absolute inset-x-0 bottom-0 p-6">
              <p className="flex items-center gap-2 text-xs">
                <span className="rounded-sm bg-white/20 px-2 py-0.5 backdrop-blur">Business</span>
                By <b>Ellinien Loma</b>
              </p>
              <h3 className="mt-3 text-[22px] font-semibold leading-snug">{p.title}</h3>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
