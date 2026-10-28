import { useRef } from "react";
import useReveal from "@/hooks/useReveal";
import { demos } from "@/data/content";
import { MdOutlineShoppingCart } from "react-icons/md";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import demo1 from "../assets/images/home1.webp";
import demo2 from "../assets/images/home2.webp";
import demo3 from "../assets/images/home3.webp";
import demo4 from "../assets/images/home4.webp";
import demo5 from "../assets/images/home5.webp";
import demo6 from "../assets/images/home6.webp";
import demo7 from "../assets/images/home7.webp";
import demo8 from "../assets/images/home8.webp";
import demo9 from "../assets/images/home9.webp";
import demo10 from "../assets/images/home10.webp";

const demoImages = [
  demo1,
  demo2,
  demo3,
  demo4,
  demo5,
  demo6,
  demo7,
  demo8,
  demo9,
  demo10,
  demo10,
  demo10,
];

export default function Demos() {
  const root = useRef(null);
  useReveal(root);

  return (
    <>
      <section ref={root} className="px-5 py-20 ">
        <div className="mx-auto max-w-[1100px] text-center" data-reveal>
          <Badge>Pre-built homepages</Badge>

          <h2 className="mt-6 text-3xl font-medium leading-tight md:text-5xl">
            Explore
            <span className="mx-1 inline-block rounded-full border-2 border-brand px-3 text-brand">
              11+
            </span>
            ready-to-use websites
            <br />
            for Corporate Business
          </h2>

          <p className="mx-auto mt-4 max-w-md text-sm text-ink/70">
            Experience a clean, modern design built for business success.
            Intuitive navigation ensures every decision is effortless.
          </p>
        </div>

        <div
          data-stagger
          className="mx-auto mt-14 grid max-w-[1450px] gap-6 md:grid-cols-2 xl:grid-cols-3"
        >
          {demos.map((d, i) => (
            <article
              key={d}
              className="group rounded-lg border border-ink/10 p-3 transition-shadow hover:shadow-xl"
            >
              <div className="relative aspect-[4/3] overflow-hidden rounded-md">
                <img
                  src={demoImages[i % demoImages.length]}
                  alt={`${d}`}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />

                <div className="absolute inset-0 grid place-items-center bg-ink/50 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <Button variant="white" to="/home-4">
                    Explore Demo
                  </Button>
                </div>
              </div>

              <h3 className="py-5 text-center text-sm font-medium">{d}</h3>
            </article>
          ))}
        </div>
      </section>
      <div className="flex justify-center mb-20">
        <Button icon={MdOutlineShoppingCart} to="/">
          Get Boxen Now
        </Button>
      </div>
    </>
  );
}
