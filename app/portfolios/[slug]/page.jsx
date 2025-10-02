'use client';

import { portfolios } from "@/app/data/portfolios";
import Image from "next/image";
import { useParams } from "next/navigation";
import { useEffect, useRef, useState } from "react";

// Intersection Observer Hook
function useInView(threshold = 0.2) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [threshold]);

  return { ref, visible };
}

export default function PortfolioDetail() {
  const params = useParams();
  const slug = params.slug;

  const portfolio = portfolios.find((p) => p.slug === slug);

  if (!portfolio) {
    return (
      <div className="py-20 text-center text-xl font-semibold">
        Portfolio not found
      </div>
    );
  }

  const imageRefs = portfolio.images.map(() => useInView(0.2));
  const bannerAnim = useInView(0.3);

  return (
    <main className="bg-[#e9e3db]">
      {/* Hero */}
      <section
        ref={bannerAnim.ref}
        className="relative h-[300px] md:h-[400px] flex items-center justify-center mb-12 overflow-hidden"
        style={{ backgroundImage: "url('/images/portfolio/banner.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
        <h1
          className={`relative text-4xl md:text-5xl font-bold text-white z-10 transform transition-all duration-1000 ease-out ${
            bannerAnim.visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
          }`}
        >
          {portfolio.category}
        </h1>
      </section>

      {/* Images */}
      <section className="container mx-auto px-4 pb-20">
        <div className="columns-1 sm:columns-2 md:columns-3 gap-4">
          {portfolio.images.map((img, idx) => {
            const { ref, visible } = imageRefs[idx];
            return (
              <div
                key={idx}
                ref={ref}
                className={`mb-4 break-inside-avoid rounded-lg overflow-hidden shadow-lg group transform transition-all duration-700 ease-out ${
                  visible
                    ? "opacity-100 translate-y-0 scale-100"
                    : "opacity-0 translate-y-10 scale-95"
                }`}
                style={{ transitionDelay: `${idx * 100}ms` }}
              >
                <Image
                  src={img}
                  alt={`${portfolio.category} ${idx + 1}`}
                  width={500}
                  height={600}
                  className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            );
          })}
        </div>
      </section>
    </main>
  );
}
