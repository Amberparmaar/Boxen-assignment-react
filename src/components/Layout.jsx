import { Outlet, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "./Navbar";

import ScrollProgress from "./ScrollProgress";
import { ScrollTrigger } from "@/lib/gsap";

export default function Layout() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
    setTimeout(() => ScrollTrigger.refresh(), 100);
  }, [pathname]);

  return (
    <>
      <Navbar />
      <main><Outlet /></main>
      <ScrollProgress />
    </>
  );
}
