"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Loader from "../Loader/Loader";

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
      <Loader />
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
    </section>
  );
}
