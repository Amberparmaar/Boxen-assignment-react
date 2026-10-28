import { useEffect } from "react";
import { X, Search } from "lucide-react";
import Logo from "@/components/Logo";
import Socials from "./Socials";

const contact = [
  { label: "Phone", value: "+1 (009) 544-7818", href: "tel:+10095447818" },
  { label: "Email", value: "info@bexon.com", href: "mailto:info@bexon.com" },
  { label: "Location", value: "993 Renner Burg, West Rond, MT 94251-030" },
];
export default function Sidebar4({ open, onClose }) {
  // Esc se band + page scroll lock
  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [open, onClose]);

  return (
    <>
      {/* Overlay */}
      <div
        onClick={onClose}
        aria-hidden="true"
        className={`fixed inset-0 z-[60] bg-black/40 backdrop-blur-sm transition-opacity duration-300 ${
          open ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      />

      {/* Panel */}
      <aside
        role="dialog"
        aria-modal="true"
        aria-label="Sidebar"
        aria-hidden={!open}
        className={`fixed right-3 top-3 z-[70] flex h-[calc(100%-1.5rem)] w-[calc(100%-1.5rem)] max-w-[490px] flex-col overflow-y-auto rounded-lg bg-[#0b1f23] p-8 text-white shadow-2xl transition-transform duration-500 ease-out ${
          open ? "translate-x-0" : "translate-x-[110%]"
        }`}
        style={{ backgroundImage: "radial-gradient(circle at 75% 8%, rgba(31,138,135,.35), transparent 45%)" }}
      >
        <div className="flex items-center justify-between">
          <Logo />
          <button aria-label="Close sidebar" onClick={onClose} className="text-white/80 transition hover:rotate-90 hover:text-white">
            <X size={32} strokeWidth={1.5} />
          </button>
        </div>

        <p className="mt-6 text-[15px] leading-relaxed text-white/60">
          Developing personalize our customer journeys to increase satisfaction &amp; loyalty of our expansion recognized by industry leaders.
        </p>

        <h4 className="mt-10 text-xl font-medium">Search Now!</h4>
        <form onSubmit={(e) => e.preventDefault()} className="mt-4 flex overflow-hidden rounded-md bg-white text-ink">
          <input type="search" placeholder="Search here..." className="min-w-0 flex-1 px-5 py-4 text-sm outline-none" />
          <button type="submit" aria-label="Search" className="border-l border-ink/15 px-5 hover:text-brand">
            <Search size={20} />
          </button>
        </form>

        <h4 className="mt-10 text-xl font-medium">Contact Info</h4>
        <dl className="mt-4 space-y-5">
          {contact.map((c) => (
            <div key={c.label}>
              <dt className="text-sm text-white/55">{c.label}</dt>
              <dd className="mt-1 text-[15px]">
                {c.href ? <a href={c.href} className="hover:text-brand">{c.value}</a> : c.value}
              </dd>
            </div>
          ))}
        </dl>

        <div className="mt-auto pt-12">
          <h4 className="text-xl font-medium">Follow Us</h4>
          <div className="mt-4"><Socials /></div>
        </div>
      </aside>
    </>
  );
}
