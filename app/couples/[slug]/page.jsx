import Image from "next/image";
import SectionHeading from "@/app/components/SectionHeading/heading";
import ClientGallery from "./ClientGallery";
import { couples } from "@/app/data/couples";
import CoupleHero from "@/app/components/CoupleDetails/CoupleHero";

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
      {/* ✅ Hero Section */}
      <CoupleHero couple={couple} />

      {/* ✅ Gallery Section */}
      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 py-12 sm:py-16 md:py-20">
        <SectionHeading
          title="Our Memories"
          subtitle="A glimpse of our journey together captured in timeless moments."
          align="center"
        />
        <ClientGallery images={couple.gallery} alt={couple.name} />
      </div>
    </section>
  );
}
