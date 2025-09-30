import { portfolios } from "@/app/data/portfolios";
import Image from "next/image";

function shuffleArray<T>(array: T[]): T[] {
  return [...array].sort(() => Math.random() - 0.5);
}

export default function PortfolioDetail({ params }: { params: { slug: string } }) {
  const portfolio = portfolios.find((p) => p.slug === params.slug);

  if (!portfolio) {
    return <div className="py-20 text-center text-xl font-semibold">Portfolio not found</div>;
  }

  const shuffledImages = shuffleArray(portfolio.images);

  return (
    <main className="bg-[#e9e3db]">
      {/* Hero Banner */}
      <section
        className="relative h-[300px] md:h-[400px] flex items-center justify-center mb-12"
        style={{ backgroundImage: "url('/images/portfolio/banner.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
        <h1 className="relative text-4xl md:text-5xl font-bold text-white z-10">
          {portfolio.category}
        </h1>
      </section>

      {/* Staggered Image Grid */}
      <section className="container mx-auto px-4 pb-20">
        <div className="columns-1 sm:columns-2 md:columns-3 gap-4">
          {shuffledImages.map((img, idx) => (
            <div
              key={idx}
              className="mb-4 break-inside-avoid rounded-lg overflow-hidden shadow-lg group hover:scale-105 transition-transform duration-300"
            >
              <Image
                src={img}
                alt={`${portfolio.category} ${idx + 1}`}
                width={500}
                height={600}
                className="w-full h-auto object-cover"
              />
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
