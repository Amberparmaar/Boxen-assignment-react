
import { FiBox } from "react-icons/fi";

const brands = [
  "Growth and Impact",
  "Team and Values",
  "Innovation and Future",
  "Success and Impacty",
  "Founders and Vision",
 
];

export default function Marquee() {
  return (
    <div className="relative overflow-hidden bg-[#1e8a8a] py-5 text-white">
      <div className="flex w-max animate-marquee">
        {[0, 1].map((group) => (
          <div
            key={group}
            className="flex shrink-0 items-center"
            aria-hidden={group === 1}
          >
            {brands.map((name) => (
              <div
                key={name}
                className="flex flex-wrap h-12 w-40 shrink-0 items-center justify-center gap-3 px-4 md:w-64"
              >
                <FiBox className="h-7 w-7 shrink-0 md:h-9 md:w-9 " />

                <span className="text-lg font-semibold md:text-[16px]">
                  {name}
                </span>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
