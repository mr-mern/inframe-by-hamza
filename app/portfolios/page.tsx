"use client";

import { portfolios } from "@/app/data/portfolios";
import Link from "next/link";
import SectionHeading from "../components/SectionHeading/page";
import Image from "next/image";

export default function PortfolioPage() {
  return (
    <main className="bg-[#e9e3db]">
      {/* Hero Banner */}
      <section className="relative h-[90vh] bg-cover bg-center flex items-center justify-center">
        <Image
          src="/images/portfolio/banner.jpg"
          alt="About Hero"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/50"></div>
        <h1 className="relative text-4xl md:text-5xl font-bold text-white z-10 text-center">
          Our Portfolio
        </h1>
      </section>

      {/* Portfolio Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          {/* Heading */}
          <SectionHeading title="Explore Our Work" align="center" />

          {/* Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
            {portfolios.map((portfolio, idx) => (
              <Link
                key={idx}
                href={`/portfolios/${portfolio.slug}`}
                className="group rounded-2xl overflow-hidden shadow-lg cursor-pointer border border-[#717552]/40 flex flex-col"
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
          <div className="text-center">
            <Link
              href="/portfolios"
              className="inline-block bg-[#172b1b] text-[#e9e3db] font-[Poppins] px-6 py-3 rounded font-medium text-lg shadow-md hover:bg-[#717552] transition-colors duration-300"
            >
              View All Portfolios
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
