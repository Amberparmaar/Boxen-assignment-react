import Header4 from "@/components/home4/Header4";
import ScrollProgress from "@/components/ScrollProgress";
import Hero from "@/sections/home4/Hero";
import ChooseBest from "@/sections/home4/ChooseBest";
import About from "@/sections/home4/About";
import Services from "@/sections/home4/Services";
import Projects from "@/sections/home4/Projects";
import Testimonials from "@/sections/home4/Testimonials";
import Team from "@/sections/home4/Team";
import Blog from "@/sections/home4/Blog";
import Faq from "@/sections/home4/Faq";
import Footer4 from "@/sections/home4/Footer4";

export default function Home4() {
  return (
    <>
      <Header4 />
      <Hero />
      <ChooseBest />
      <About />
      <Services />
      <Projects />
      <Testimonials />
      <Team />
      <Blog />
      <Faq />
      <Footer4 />
      <ScrollProgress />
    </>
  );
}
