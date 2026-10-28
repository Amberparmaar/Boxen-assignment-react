import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import Avatars from "@/components/home4/Avatars";
import { img } from "@/data/home4";

export default function Hero() {
  return (
    <section className="relative overflow-x-clip bg-[#ebeff0] text-[#0b1f23]">
      <div className="relative z-10 px-5 pb-24 pt-36 lg:min-h-[720px] lg:pl-[8vw] lg:pt-52">
        <Badge className="border-0 px-0 text-brand">Renowned Growth company</Badge>
        <h1 className="mt-5 max-w-[480px] text-5xl leading-[1.05] tracking-tight lg:text-[64px] font-bold">
          Leading Future for Corporate Business.
        </h1>
        <div className="mt-8 max-w-[400px] border-t border-[#0b1f23]/25 pt-6">
          <p className="text-sm leading-relaxed text-[#0b1f23]/70">
            Committed to delivering innovative solutions that Committed to delivering innovative solutions.
          </p>
        </div>
        <div className="mt-6 flex items-center gap-5">
          <Button to="/contact">Get Started</Button>
          <Avatars />
        </div>
      </div>

   
    <div className="absolute bottom-0 right-0 top-20 hidden w-[32vw] lg:block xl:w-[38vw]">
  <span className="absolute inset-0 bg-brand [clip-path:polygon(14%_0,24%_0,7%_19%,0_19%)]" />
  <img src={img("business-leader.webp")} alt="Bexon business leader"
       className="h-full w-full object-cover object-top [clip-path:polygon(23%_0,100%_0,100%_100%,45%_100%,6.5%_18%)]" />
</div>

      {/* Left teal triangle */}
      <span className="absolute -bottom-[60px] left-0 z-20 hidden h-[175px] w-[70px] bg-brand [clip-path:polygon(0_0,100%_55%,0_100%)] lg:block" />
    </section>
  );
}
