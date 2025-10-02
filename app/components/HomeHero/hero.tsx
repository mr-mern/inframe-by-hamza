"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function Hero() {
  const images = [
    "/images/hero-banner/banner (1).jpg",
    "/images/hero-banner/banner (2).jpg",
    "/images/hero-banner/banner (3).jpg",
    "/images/hero-banner/banner (4).jpg",
    "/images/hero-banner/banner (5).jpg",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto slider
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section className="relative h-[90vh] md:h-[100vh] w-full overflow-hidden">
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
          <div className="absolute inset-0 bg-black/60 md:bg-black/70" />
        </div>
      ))}

      {/* Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center font-[Lora] text-center text-white px-4 sm:px-6 md:px-8">
        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: false, amount: 0.5 }}
          className="text-2xl sm:text-4xl md:text-6xl font-light tracking-[0.2rem] sm:tracking-[0.5rem] md:tracking-[1rem]"
        >
          HAMZA
        </motion.h1>

        {/* Subheading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          viewport={{ once: false, amount: 0.5 }}
          className="text-lg sm:text-3xl md:text-5xl mt-2 font-light tracking-[0.2rem] sm:tracking-[0.5rem] md:tracking-[2rem]"
        >
          PHOTOGRAPHY
        </motion.h2>
      </div>
    </section>
  );
}
