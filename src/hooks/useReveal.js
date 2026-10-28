import { useLayoutEffect } from "react";
import { gsap } from "@/lib/gsap";
export default function useReveal(scope) {
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray("[data-reveal]").forEach((el) =>
        gsap.from(el, {
          y: 40, opacity: 0, duration: 0.8, ease: "power3.out",
          scrollTrigger: { trigger: el, start: "top 88%", toggleActions: "play none none reverse" },
        })
      );
      gsap.utils.toArray("[data-stagger]").forEach((el) =>
        gsap.from(el.children, {
          y: 50, opacity: 0, duration: 0.7, stagger: 0.12, ease: "power3.out",
          scrollTrigger: { trigger: el, start: "top 85%", toggleActions: "play none none reverse" },
        })
      );
    }, scope);
    return () => ctx.revert();
  }, [scope]);
}
