import { Play } from "lucide-react";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import Icon from "@/components/Icon";
import Avatars from "@/components/home4/Avatars";
import { aboutStats, img } from "@/data/home4";

export default function About() {
  return (
    <section className="bg-[#ebeff0] px-5 py-24 text-[#0b1f23]">
      <div className="mx-auto grid max-w-[1296px] gap-x-10 gap-y-10 lg:grid-cols-[35%_1fr]">
        <div><Badge className="rounded-sm border-0 bg-white">About our company</Badge></div>
        <h2 className="max-w-[620px] text-3xl font-medium leading-tight md:text-[44px]">
          Driven by Purpose, and Fueled by a Relentless Pursuit of Results{" "}
          <span className="text-[#0b1f23]/50">and Client Real Success.</span>
        </h2>

        <div className="relative mb-20 lg:mb-0">
          <img src={img("about.webp")} alt="About Bexon" loading="lazy"
               className="aspect-[225/175] w-full rounded-md object-cover" />
          <div className="absolute  bottom-12 left-4 w-[60%] rounded-md bg-white/40 p-4 backdrop-blur-md">
            <Avatars />
            <p className="mt-3 text-sm font-medium">We have 100+ happy customer.</p>
          </div>
        </div>

        <div>
          <div className="grid gap-4 sm:grid-cols-2">
            {aboutStats.map((s) => (
              <div key={s.value} className="rounded-md bg-white p-7">
                <Icon name={s.icon} size={34} strokeWidth={1.2} className="text-brand" />
                <p className="mt-8 text-5xl font-medium">{s.value}</p>
                <p className="mt-3 max-w-[170px] text-xs text-[#0b1f23]/60">{s.text}</p>
              </div>
            ))}
          </div>
          <p className="mt-8 max-w-md text-sm leading-relaxed text-[#0b1f23]/70">
            Recognize that exceptional customer experiences are at the heart of every successful business. Our Customer Experience Solutions are crafted to help you transform every interaction.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-5">
            <Button to="/about">Know more us</Button>
            <a href="https://www.youtube.com/watch?v=MLpWrANjFbI" target="_blank" rel="noreferrer" className="flex items-center gap-3">
              <span className="grid h-11 w-11 place-items-center rounded-full bg-[#d8e5e4] text-brand"><Play size={14} fill="currentColor" /></span>
              <span className="text-sm font-medium underline">Play our reels</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
