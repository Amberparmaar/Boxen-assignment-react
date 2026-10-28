import { Link } from "react-router-dom";
import { Box, Clock } from "lucide-react";
import Logo from "@/components/Logo";
import Button from "@/components/ui/Button";
import Socials from "@/components/home4/Socials";
import { footerLinks, marqueeWords, img } from "@/data/home4";

export default function Footer4() {
  return (
    <footer
      className="overflow-hidden bg-[#0b1f23] text-white"
      style={{ backgroundImage: "radial-gradient(circle at 18% 75%, rgba(31,138,135,.28), transparent 38%)" }}
    >
      <div className="mx-auto max-w-[1296px] px-5 pt-20">
        {/* Subscribe card */}
        <div className="flex flex-col items-center justify-between gap-8 rounded-md border border-white/10 bg-white/5 p-8 md:flex-row md:px-12 md:py-10">
          <Link to="/" className="flex items-center gap-3">
            <Box className="text-brand" size={48} strokeWidth={2} />
            <span className="text-5xl font-medium tracking-tight">Bexon</span>
          </Link>
          <form onSubmit={(e) => e.preventDefault()} className="flex w-full max-w-[560px] items-center rounded-full bg-white/10 p-2">
            <input type="email" placeholder="Enter email" aria-label="Email"
                   className="min-w-0 flex-1 bg-transparent px-5 text-sm outline-none placeholder:text-white/50" />
            <Button to="/contact">Send Message</Button>
          </form>
        </div>

        {/* Columns */}
        <div className="grid gap-10 py-16 md:grid-cols-2 lg:grid-cols-[1.6fr_1fr_1fr_1fr]">
          <div>
            <Logo />
            <p className="mt-5 max-w-[240px] text-sm leading-relaxed text-white/70">
              Developing personalze our customer journeys to increase satisfaction &amp; loyalty of our expansion.
            </p>
            <div className="mt-6 flex gap-3">
              <img src={img("cluch.webp")} alt="Clutch awards" className="h-[50px] w-auto" />
              <img src={img("award.webp")} alt="Awwwards" className="h-[50px] w-auto" />
            </div>
          </div>

          {footerLinks.map((col) => (
            <div key={col.title}>
              <h4 className="mb-5 text-lg font-medium">{col.title}</h4>
              <ul className="space-y-3 text-sm text-white/70">
                {col.items.map((item) => {
                  const it = typeof item === "string" ? { label: item } : item;
                  return (
                    <li key={it.label}>
                      <a href="#" className="hover:text-brand">{it.label}</a>
                      {it.isNew && <span className="ml-2 rounded-sm bg-brand px-1.5 py-0.5 text-[9px] font-bold uppercase text-white">New</span>}
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}

          <div>
            <h4 className="mb-5 text-lg font-medium">Our Office</h4>
            <p className="max-w-[200px] text-sm leading-relaxed text-white/70">993 Renner Burg, West Rond, MT 94251-030, USA.</p>
            <p className="mt-4 text-sm font-semibold">P: +1 (009) 544-7818</p>
            <p className="mt-2 text-sm font-semibold">M: support@bexon.com</p>
            <p className="mt-4 flex items-center gap-2 text-sm text-white/70"><Clock size={16} className="text-brand" /> Mon-Fri 10am-10pm</p>
          </div>
        </div>
      </div>

      {/* Outline marquee */}
      <div className="overflow-hidden border-y border-dashed border-white/15 py-6">
        <div className="flex w-max animate-marquee items-center">
          {[0, 1].map((g) => (
            <div key={g} className="flex shrink-0 items-center" aria-hidden={g === 1}>
              {marqueeWords.map((m, i) => (
                <div key={`${g}-${i}`} className="flex items-center gap-10 pr-10">
                  <span className="text-[90px] font-medium leading-none text-transparent [-webkit-text-stroke:1px_rgba(255,255,255,0.3)] md:text-[140px]">{m.word}</span>
                  <img src={img(m.image)} alt="" className="h-[72px] w-[180px] rounded-sm object-cover" />
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Bottom bar (Layout ka footer yahan nahi chahiye, ye Home4 ka apna hai) */}
      <div className="mx-auto grid max-w-[1296px] items-center gap-4 px-5 py-6 text-sm text-white/70 md:grid-cols-3">
        <p>© {new Date().getFullYear()} <b className="text-white">Bexon</b> All right reserved</p>
        <div className="flex md:justify-center"><Socials /></div>
        <p className="md:text-right">
          <a href="/contact" className="hover:text-brand">Privacy Policy</a>
          <span className="mx-3 text-white/30">|</span>
          <a href="/contact" className="hover:text-brand">Terms &amp; Condition</a>
        </p>
      </div>
    </footer>
  );
}
