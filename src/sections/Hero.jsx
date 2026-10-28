import { useLayoutEffect, useRef } from "react";
import { gsap } from "@/lib/gsap";
import { heroPerks } from "@/data/content";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import Icon from "@/components/Icon";
import Marquee from "@/components/ui/Marquee";

const heroImages = [
  {
    src: "../src/assets/images/hero1.webp",
    alt: "Bexon demo left top",
    className: "-left-30 bottom-5 w-[320px] xl:w-[320px]",
  },

  {
    src: "../src/assets/images/hero2.webp",
    alt: "Bexon demo right top",
    className: "-right-0 bottom-5 w-[320px] xl:w-[320px]",
  },
];

export default function Hero() {
  const root = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        defaults: { ease: "power3.out", duration: 0.8 },
      });
      tl.from("[data-h-badge]", { y: 20, opacity: 0 })
        .from(
          "[data-h-title] span",
          { yPercent: 100, opacity: 0, stagger: 0.12, duration: 0.9 },
          "-=0.4",
        )
        .from("[data-h-cta]", { y: 20, opacity: 0 }, "-=0.4")
        .from("[data-h-perk]", { y: 30, opacity: 0, stagger: 0.1 }, "-=0.3")
        .from(
          "[data-h-img]",
          { y: 60, opacity: 0, stagger: 0.15, duration: 1 },
          "-=0.8",
        );
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <>
      <section
        ref={root}
        className="bg-hero h-[800px] relative overflow-hidden text-white"
      >
        {heroImages.map((img) => (
          <img
            key={img.src}
            data-h-img
            src={img.src}
            alt={img.alt}
            loading="eager"
            draggable={false}
            className={`pointer-events-none absolute hidden rounded-xl object-cover opacity-60 lg:block ${img.className}`}
          />
        ))}

        <div className="relative mx-auto max-w-[1100px] px-5 pb-10 pt-40 text-center md:pt-48">
          <div data-h-badge>
            <Badge dark>Recognized for excellence</Badge>
          </div>
          <h1
            data-h-title
            className="mt-6 text-5xl font-semibold leading-[1.05] tracking-tightest sm:text-6xl lg:text-[60px]"
          >
            <span className="block overflow-hidden">
              <span className="block mb-2">Prestige Corporate Business</span>
            </span>
            <span className="block overflow-hidden">
              <span className="block">HTML Template</span>
            </span>
          </h1>
          <div data-h-cta className="mt-10">
            <Button to="/demos">Explore Demos</Button>
          </div>
        </div>

        <div className="relative mx-auto mt-10 grid max-w-[800px] grid-cols-2 border-t border-dashed border-white/15 lg:grid-cols-4">
          {heroPerks.map((p) => (
            <div
              key={p.title}
              data-h-perk
              className="flex items-center gap-3 border-dashed border-white/15 px-4 py-6 lg:border-r last:border-r-0"
            >
              <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full border border-white/20">
                <Icon name={p.icon} size={22} />
              </span>
              <span className="text-sm font-medium">{p.title}</span>
            </div>
          ))}
        </div>
     
      </section>
         <Marquee />
    </>
  );
}
