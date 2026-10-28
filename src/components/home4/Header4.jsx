import { useState } from "react";
import { Link } from "react-router-dom";
import { Box, ChevronDown, Menu, X, Phone, AlignLeft } from "lucide-react";
import { nav } from "@/data/home4";
import Button from "@/components/ui/Button";
import Sidebar4 from "./Sidebar4";

export default function Header4() {
  const [open, setOpen] = useState(false);
  const [sidebar, setSidebar] = useState(false);

  return (
    <header className="absolute inset-x-3 top-3 z-40 rounded-full bg-white text-[#0b1f23] shadow-sm">
      <div className="relative flex items-center justify-between px-5 py-3 lg:px-7">
        <Link to="/" className="flex items-center gap-1.5">
          <Box className="text-brand" size={28} strokeWidth={2.2} />
          <span className="text-[28px] font-medium tracking-tight">Bexon</span>
        </Link>

        <nav className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-8 lg:flex">
          {nav.map((l, i) => (
            <Link key={l.label} to={l.to}
                  className={`flex items-center gap-1 text-[15px] font-medium transition-colors hover:text-brand ${i === 0 ? "text-brand" : ""}`}>
              {l.label}
              {l.menu && <ChevronDown size={13} />}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-6 lg:flex">
          <a href="tel:18884521505" className="flex items-center gap-2 text-sm font-medium underline">
            <Phone size={14} /> 1-888-452-1505
          </a>
          <Button to="/contact">Let’s Talk</Button>
          <button aria-label="Open sidebar" aria-haspopup="dialog" onClick={() => setSidebar(true)}
                  className="transition hover:text-brand">
            <AlignLeft size={24} />
          </button>
        </div>

        <button aria-label="Menu" className="lg:hidden" onClick={() => setOpen(!open)}>
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {open && (
        <div className="flex flex-col gap-4 border-t border-[#0b1f23]/10 p-6 lg:hidden">
          {nav.map((l) => (
            <Link key={l.label} to={l.to} onClick={() => setOpen(false)} className="font-medium hover:text-brand">{l.label}</Link>
          ))}
          <Button to="/contact" className="self-start">Let’s Talk</Button>
        </div>
      )}
      <Sidebar4 open={sidebar} onClose={() => setSidebar(false)} />
    </header>
  );
}
