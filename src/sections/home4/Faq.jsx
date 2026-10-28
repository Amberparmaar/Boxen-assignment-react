import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import { faqs, img } from "@/data/home4";

export default function Faq() {
  const [open, setOpen] = useState(0);
  return (
    <section className="bg-[#ebeff0] px-5 py-24 text-[#0b1f23]">
      <div className="mx-auto grid max-w-[1250px] gap-12 lg:grid-cols-2">
        <div>
          <img src={img("faq.webp")} alt="Help" loading="lazy" className="w-full rounded-xl object-cover" />
        </div>
        <div>
          <Badge>FAQ</Badge>
          <h2 className="mt-6 text-3xl font-medium md:text-5xl">Need Help? Start Here...</h2>
          <div className="mt-8 divide-y divide-dashed divide-ink/20 border-y border-dashed border-ink/20">
            {faqs.map((f, i) => (
              <div key={f.q}>
                <button
                  className="flex w-full items-center justify-between gap-4 py-5 text-left font-medium"
                  aria-expanded={open === i}
                  onClick={() => setOpen(open === i ? -1 : i)}
                >
                  {f.q}
                  {open === i ? <Minus size={18} className="text-brand" /> : <Plus size={18} />}
                </button>
                {open === i && <p className="p-8 ps-2 text-sm leading-relaxed text-white bg-[#1d8b8a] rounded-lg">{f.a}</p>}
              </div>
            ))}
          </div>
          <div className="mt-8"><Button to="/contact">Send Message</Button></div>
        </div>
      </div>
    </section>
  );
}
