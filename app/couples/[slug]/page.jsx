import Image from "next/image";
import SectionHeading from "@/app/components/SectionHeading/heading";
import ClientGallery from "./ClientGallery";
import { couples } from "@/app/data/couples";
import LogoSlider from "@/app/components/logoSlider";
import { greenLogos } from "@/app/data/sliderLogos";

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const couple = couples.find((c) => c.slug === slug);
  return {
    title: couple ? couple.name : "Couple Not Found",
  };
}

export default async function CoupleDetail({ params }) {
  const { slug } = await params;
  const couple = couples.find((c) => c.slug === slug);

  if (!couple) {
    return (
      <div className="py-20 text-center text-xl font-semibold">
        Couple not found
      </div>
    );
  }

  return (
    <section className="bg-[#f5f3ef] min-h-screen">
      {/* Hero Section */}
      <div className="relative h-[60vh] sm:h-[70vh] md:h-[80vh] w-full">
        <Image
          src="/images/couples/cover.png"
          alt={couple.name}
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/30"></div>

        {/* Calendar Card */}
        <div className="absolute top-3 left-3 sm:top-6 sm:left-6 flex flex-col items-center gap-1">
          <div className="bg-[#e9e3db] text-[#172b1b] rounded-lg shadow-lg px-3 py-2 sm:p-4 w-full flex flex-col items-center">
            <span className="text-xs sm:text-sm font-semibold uppercase">
              {new Date(couple.date).toLocaleString("default", {
                month: "short",
              })}
            </span>
            <span className="text-2xl sm:text-3xl md:text-4xl font-bold leading-none">
              {new Date(couple.date).getDate()}
            </span>
            <span className="text-xs sm:text-sm">
              {new Date(couple.date).getFullYear()}
            </span>
          </div>

          <div className="bg-[#717552] text-[#e9e3db] rounded-md shadow-md px-2 py-1 sm:px-3 sm:py-1.5 flex justify-center items-center w-full">
            <span className="text-[8px] sm:text-xs font-medium uppercase tracking-wide">
              Wedding Date
            </span>
          </div>
        </div>

        {/* Couple Name */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-[#e9e3db] px-4 sm:px-6">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 leading-tight">
            {couple.name}
          </h1>
        </div>

        {/* Accent line */}
        <div className="flex justify-center items-center absolute bottom-0 left-0 w-full h-3 bg-[#172b1b] shadow-[0_3px_10px_rgba(0,0,0,0.3)]">
          <div className="w-full h-[2px] bg-[#e9e3db]"></div>
        </div>
      </div>

      {/* Gallery Section */}
      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 py-12 sm:py-16 md:py-20">
        <SectionHeading
          title="Our Memories"
          subtitle="A glimpse of our journey together captured in timeless moments."
          align="center"
        />
        <ClientGallery images={couple.gallery} alt={couple.name} />
      </div>
      <LogoSlider
        logos={greenLogos}
        width={100}
        height={80}
        className="pb-10"
      />
    </section>
  );
}
