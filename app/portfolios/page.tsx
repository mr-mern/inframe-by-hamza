"use client";

import { portfolios } from "@/app/data/portfolios";
import Link from "next/link";
import SectionHeading from "../components/SectionHeading/heading";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

// Intersection Observer Hook
function useInView(threshold = 0.2) {
  const ref = useRef<HTMLDivElement | null>(null);
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

export default function PortfolioPage() {
  const heroAnim = useInView(0.3);
  const gridAnim = useInView(0.3);
  const buttonAnim = useInView(0.3);

  return (
    <main className="bg-[#e9e3db]">
      {/* Hero Banner */}
      <section className="relative h-[90vh] flex items-center justify-center text-center overflow-hidden">
        <Image
          src="/images/portfolio/banner.jpg"
          alt="About Hero"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />

        <h1
          ref={heroAnim.ref}
          className={`relative text-4xl md:text-5xl font-bold text-white z-10 transition-all duration-1000 ${
            heroAnim.visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          Our Portfolio
        </h1>
      </section>

      {/* Portfolio Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          {/* Heading */}
          <SectionHeading title="Explore Our Work" align="center" />

          {/* Grid */}
          <div
            ref={gridAnim.ref}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10"
          >
            {portfolios.map((portfolio, idx) => (
              <Link
                key={idx}
                href={`/portfolios/${portfolio.slug}`}
                className={`group rounded-2xl overflow-hidden shadow-lg cursor-pointer border border-[#717552]/40 flex flex-col transform transition-all duration-700 ease-out ${
                  gridAnim.visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${idx * 150}ms` }} // staggered effect
              >
                {/* Title outside image */}
                <div className="bg-[#172b1b] py-3 px-4 text-center">
                  <span className="text-lg md:text-xl font-semibold font-[Poppins] text-[#e9e3db]">
                    {portfolio.category}
                  </span>
                </div>

                {/* Image box */}
                <div className="relative h-[360px] overflow-hidden">
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                    style={{ backgroundImage: `url(${portfolio.cover})` }}
                  ></div>
                  <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-colors duration-500"></div>
                </div>
              </Link>
            ))}
          </div>

          {/* View All Portfolios Button */}
          <div
            ref={buttonAnim.ref}
            className={`text-center transition-all duration-1000 ${
              buttonAnim.visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <div className="inline-block transform transition-transform duration-300 hover:scale-105">
              <Link
                href="/portfolios"
                className="inline-block bg-[#172b1b] text-[#e9e3db] font-[Poppins] px-6 py-3 rounded font-medium text-lg shadow-md hover:bg-[#717552] transition-colors duration-300"
              >
                View All Portfolios
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
