"use client";
import Image from "next/image";

interface LogoSliderProps {
  logos: string[];
  speed?: "slow" | "normal" | "fast";
  className?: string;
}

export default function LogoSlider({
  logos,
  speed = "normal",
  className = "",
}: LogoSliderProps) {
  const speedClass =
    speed === "slow"
      ? "animate-marquee-slow"
      : speed === "fast"
      ? "animate-marquee-fast"
      : "animate-marquee";

  return (
    <section className={`overflow-hidden ${className}`}>
      <div className="flex w-max">
        <div className={`flex ${speedClass}`}>
          {[...logos, ...logos].map((logo, i) => (
            <div
              key={i}
              className="mx-6 sm:mx-8 flex-shrink-0 flex items-center justify-center"
            >
              <div className="relative w-[70px] h-[35px] sm:w-[100px] sm:h-[50px] md:w-[120px] md:h-[60px]">
                <Image
                  src={logo}
                  alt="logo"
                  fill
                  className="object-contain opacity-80 hover:opacity-100 transition-opacity duration-300"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
