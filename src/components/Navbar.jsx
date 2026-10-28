import { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { gsap } from "@/lib/gsap";
import { navLinks } from "@/data/content";
import Logo from "./Logo";
import Button from "./ui/Button";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(ref.current, { y: -40, opacity: 0, duration: 0.8, ease: "power3.out" });
    }, ref);
    return () => ctx.revert();
  }, []);

  const link = ({ isActive }) =>
    `text-[15px] font-medium transition-colors hover:text-brand ${isActive ? "text-brand" : "text-white"}`;

  return (
    <header ref={ref} className="absolute inset-x-0 top-0 z-40 dashed-b">
      <div className="mx-auto flex max-w-[1400px] items-center justify-between px-5 py-5 lg:px-8">
        <Logo />
        <nav className="hidden items-center gap-10 lg:flex mx-auto">
          {navLinks.map((l) => (
            <NavLink key={l.to} to={l.to} className={link}>{l.label}</NavLink>
          ))}
        </nav>
       
        <button aria-label="Menu" className="text-white lg:hidden" onClick={() => setOpen(!open)}>
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>
      {open && (
        <div className="mx-5 mb-4 flex flex-col gap-4 rounded-2xl bg-ink-soft p-6 lg:hidden">
          {navLinks.map((l) => (
            <NavLink key={l.to} to={l.to} className={link} onClick={() => setOpen(false)}>{l.label}</NavLink>
          ))}
        </div>
      )}
    </header>
  );
}
