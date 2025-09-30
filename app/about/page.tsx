"use client";

import Image from "next/image";
import CTA from "../components/CTA/page";
import SectionHeading from "../components/SectionHeading/page";

export default function AboutUs() {
  const featuredPhotos = [
    {
      src: "/images/categories/portrait/portrait-1.jpg",
      title: "Sunset Bliss",
    },
    { src: "/images/categories/portrait/portrait-2.jpg", title: "Urban Life" },
    { src: "/images/categories/portrait/portrait-3.jpg", title: "Nature Walk" },
    { src: "/images/categories/portrait/portrait-4.jpg", title: "Golden Hour" },
    {
      src: "/images/categories/portrait/portrait-5.jpg",
      title: "Portrait Magic",
    },
    {
      src: "/images/categories/portrait/portrait-6.jpg",
      title: "Waves & Sands",
    },
  ];

  return (
    <section className="w-full bg-[#e9e3db]">
      {/* Hero Section */}
      <div className="relative h-[90vh] w-full overflow-hidden">
        <Image
          src="/images/aboutUs/aboutBanner.jpg"
          alt="About Hero"
          fill
          className=""
        />
        <div className="absolute inset-0 bg-[#172b1b]/40 flex flex-col justify-center items-center text-center px-6">
          <h1 className="text-5xl md:text-6xl font-bold text-[#172b1b] mb-4">
            Capturing Moments
          </h1>
          <p className="text-[#717552] text-lg md:text-xl max-w-2xl">
            Photography is my passion. Every frame tells a story, every shot
            freezes a memory.
          </p>
        </div>
      </div>
      <div className="relative bg-[#172b1b] text-[#e9e3db]">
        <div className="container mx-auto px-6 md:px-12 py-20">
          <div className="flex flex-col md:flex-row items-center gap-12">
            {/* Portrait */}
            <div className="md:w-1/2">
              <Image
                src="/images/aboutUs/profile.jpg"
                alt="Photographer Portrait"
                width={500}
                height={600}
                className="rounded-xl shadow-lg object-cover"
              />
            </div>
            {/* Text */}
            <div className="md:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">My Story</h2>
              <p className="text-lg mb-4">
                Over the past decade, I have been capturing life's most
                beautiful moments. From intimate portraits to breathtaking
                landscapes, my work is a reflection of passion, creativity, and
                dedication.
              </p>
              <p className="text-lg">
                Every photo I take is more than an image it's a story frozen in
                time, a memory to be cherished forever.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom-only skew */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden">
          <div className="bg-[#172b1b] h-16 -skew-y-3 origin-top"></div>
        </div>
      </div>

      {/* Featured Works Masonry Grid */}
      <div className="py-20 bg-[#e9e3db]">
        <SectionHeading title="Featured Works" align="center" />
        <div className="columns-1 sm:columns-2 md:columns-3 gap-4 px-4 md:px-12 space-y-4">
          {featuredPhotos.map((photo, idx) => (
            <div
              key={idx}
              className="relative break-inside-avoid rounded-xl overflow-hidden shadow-lg group cursor-pointer"
            >
              <Image
                src={photo.src}
                alt={photo.title}
                width={500}
                height={600}
                className="w-full object-cover transform group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-[#172b1b]/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <span className="text-[#e9e3db] font-semibold text-lg text-center px-2">
                  {photo.title}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Approach Section */}
      <div className="bg-[#717552] text-[#e9e3db] py-16 text-center">
        <SectionHeading
          title="My Approach"
          align="center"
          titleColor="#e9e3db"
          lineColor="#172b1b"
        />
        <div className="container mx-auto px-6 md:px-12 grid md:grid-cols-3 gap-8">
          <div className="bg-[#172b1b]/90 p-6 rounded-xl shadow-lg hover:shadow-xl transition">
            <h3 className="text-xl font-semibold mb-2">Creativity</h3>
            <p>
              Unique perspectives in every frame, making each photo an artwork.
            </p>
          </div>
          <div className="bg-[#172b1b]/90 p-6 rounded-xl shadow-lg hover:shadow-xl transition">
            <h3 className="text-xl font-semibold mb-2">Passion</h3>
            <p>
              Photography is not just a job, it's a lifelong passion driving
              every shot.
            </p>
          </div>
          <div className="bg-[#172b1b]/90 p-6 rounded-xl shadow-lg hover:shadow-xl transition">
            <h3 className="text-xl font-semibold mb-2">Storytelling</h3>
            <p>Every image tells a story that evokes emotion and memory.</p>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <CTA
        title="Let's Create Together"
        subtitle="Ready to capture your moments? Contact me today and let's make memories that last forever."
        buttonText="Book a Session"
        buttonHref="/contact"
      />
    </section>
  );
}
