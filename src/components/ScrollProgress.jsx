import { useEffect, useRef } from "react";
import { ArrowUp } from "lucide-react";
import { ScrollTrigger } from "@/lib/gsap";

const R = 26, C = 2 * Math.PI * R;

export default function ScrollProgress() {
  const ring = useRef(null);
  const label = useRef(null);
  const arrow = useRef(null);

  useEffect(() => {
    const st = ScrollTrigger.create({
      start: 0,
      end: "max",
      onUpdate: (self) => {
        const p = self.progress;
        ring.current.style.strokeDashoffset = C * (1 - p);
        label.current.textContent = Math.round(p * 100) + "%";
        const atEnd = p > 0.98;
        arrow.current.style.opacity = atEnd ? 1 : 0;
        label.current.style.opacity = atEnd ? 0 : 1;
      },
    });
    return () => st.kill();
  }, []);

  return (
    <button
      aria-label="Scroll to top"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="fixed bottom-6 right-6 z-50 grid h-14 w-14 place-items-center rounded-full bg-white shadow-lg transition-transform hover:scale-110"
    >
      <svg className="absolute inset-0 -rotate-90" viewBox="0 0 60 60">
        <circle cx="30" cy="30" r={R} fill="none" stroke="#d9e6e5" strokeWidth="3" />
        <circle ref={ring} cx="30" cy="30" r={R} fill="none" stroke="#1f8a87" strokeWidth="3"
          strokeLinecap="round" strokeDasharray={C} strokeDashoffset={C} />
      </svg>
      <span ref={label} className="text-[11px] font-semibold">0%</span>
      <ArrowUp ref={arrow} size={20} className="absolute opacity-0 transition-opacity" />
    </button>
  );
}
