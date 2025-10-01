"use client";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function Hero() {
  // Images list
  const images = [
    "/images/hero-banner/banner (1).jpg",
    "/images/hero-banner/banner (2).jpg",
    "/images/hero-banner/banner (3).jpg",
    "/images/hero-banner/banner (4).jpg",
    "/images/hero-banner/banner (5).jpg",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 3000); 
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section className="relative h-[90vh] w-full overflow-hidden">
      {/* Background Images */}
      {images.map((img, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentIndex ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={img}
            alt={`Slide ${index}`}
            fill
            priority={index === 0}
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/70" />
        </div>
      ))}

      {/* Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center font-[Lora] text-center text-white px-4">
        <h1 className="text-4xl md:text-6xl font-light tracking-[1rem]">
          HAMZA
        </h1>
        <h2 className="text-3xl md:text-5xl mt-2 font-light tracking-[2rem]">
          PHOTOGRAPHY
        </h2>
      </div>
    </section>
  );
}
