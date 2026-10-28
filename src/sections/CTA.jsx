import { useLayoutEffect, useRef } from "react";
import { gsap } from "@/lib/gsap";
import { heroPerks } from "@/data/content";
import Badge from "@/components/ui/Badge";

import Icon from "@/components/Icon";

const heroImages = [
  {
    src: "../src/assets/images/cta1.webp",
    alt: "Bexon demo left top",
    className: "-left-30 bottom-5 w-[320px] xl:w-[320px]",
  },

  {
    src: "../src/assets/images/cta2.webp",
    alt: "Bexon demo right top",
    className: "-right-0 bottom-5 w-[320px] xl:w-[320px]",
  },
];

export default function CTA() {
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
        className="bg-hero h-[500px] relative overflow-hidden text-white"
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

        <div className="relative mx-auto max-w-[1100px] px-5 pb-10 pt-40 text-center ">
          <div data-h-badge>
            <Badge dark> YOUR
                      NEXT CORPORATE BUSINESS THEME</Badge>
          </div>
          <h1
            data-h-title
            className="mt-6 text-5xl font-semibold  sm:text-6xl lg:text-[40px]"
          >
            <span className="block">
              <span className="block">Life-Time licence, free Updates  and <br />
               <span className="mx-1 inline-block rounded-full border-2 border-brand px-3 text-white p-2">
            6
          </span> month of free support.</span>
            </span>
           
          </h1>
         
        </div>

    
     
      </section>
       <div className=" bg-[#001215] text-center text-sm py-5 text-[#7f8e8f]">
       © All rights reserved by <b className="text-white">Amber Parmaar</b>
      </div>
        
    </>
  );
}


