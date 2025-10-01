import Image from "next/image";
import SectionHeading from "@/app/components/SectionHeading/heading";
import { couples } from "@/app/data/couples";

export async function generateMetadata({ params }) {
  const { slug } = await params; // 👈 yahan await
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
      <div className="relative h-[60vh] w-full">
        <Image
          src="/images/couples/cover.jpg"
          alt={couple.name}
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/30"></div>

        {/* Calendar Card */}
        <div className="absolute top-6 left-6 flex flex-col items-center gap-2">
          <div className="bg-[#e9e3db] text-[#172b1b] rounded-lg shadow-lg p-4 w-30 flex flex-col items-center">
            <span className="text-sm font-semibold uppercase">
              {new Date(couple.date).toLocaleString("default", {
                month: "short",
              })}
            </span>
            <span className="text-4xl font-bold leading-none">
              {new Date(couple.date).getDate()}
            </span>
            <span className="text-sm">
              {new Date(couple.date).getFullYear()}
            </span>
          </div>

          <div className="bg-[#717552] text-[#e9e3db] rounded-md shadow-md px-3 py-1 w-30 flex justify-center items-center">
            <span className="text-xs font-medium uppercase tracking-wide">
              Wedding Date
            </span>
          </div>
        </div>

        {/* Couple Name */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-[#e9e3db] px-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{couple.name}</h1>
        </div>

        {/* Accent line */}
        <div className="flex justify-center items-center absolute bottom-0 left-0 w-full h-3 bg-[#172b1b] shadow-[0_3px_10px_rgba(0,0,0,0.3)]">
          <div className="w-full h-[2px] bg-[#e9e3db]"></div>
        </div>
      </div>

      {/* Gallery Section */}
      <div className="container mx-auto px-6 py-16">
        <SectionHeading
          title="Our Memories"
          subtitle="A glimpse of our journey together captured in timeless moments."
          align="center"
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {couple.gallery.map((img, idx) => (
            <div
              key={idx}
              className="group relative overflow-hidden rounded-xl shadow-lg"
            >
              <Image
                src={img}
                alt={couple.name}
                width={500}
                height={400}
                className="rounded-xl object-cover w-full h-72 transform group-hover:scale-110 transition duration-700"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
