"use client";
import Image from "next/image";

interface LogoSliderProps {
  logos: string[];
  width?: number;
  height?: number;
  speed?: "slow" | "normal" | "fast";
  className?: string;
}

export default function LogoSlider({
  logos,
  width = 120,
  height = 60,
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
            <div key={i} className="mx-8 flex-shrink-0">
              <Image
                src={logo}
                alt="logo"
                width={width}
                height={height}
                className="object-contain opacity-80 hover:opacity-100 transition-opacity duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
