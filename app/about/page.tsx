"use client";

import Image from "next/image";
import CTA from "../components/CTA/CTA";
import SectionHeading from "../components/SectionHeading/heading";
import { useEffect, useRef, useState } from "react";
import Loader from "../components/Loader/Loader";

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

export default function AboutUs() {
  const featuredPhotos = [
    { src: "/images/couples/ali-ayesha/1.jpg", title: "Sunset Bliss" },
    { src: "/images/couples/ali-ayesha/2.jpg", title: "Urban Life" },
    { src: "/images/couples/ali-ayesha/3.jpg", title: "Nature Walk" },
    { src: "/images/couples/ali-ayesha/4.jpg", title: "Golden Hour" },
    { src: "/images/couples/ali-ayesha/5.jpg", title: "Portrait Magic" },
    { src: "/images/couples/ali-ayesha/6.jpg", title: "Waves & Sands" },
  ];

  const heroAnim = useInView(0.3);
  const storyAnim = useInView(0.3);
  const gridAnim = useInView(0.3);
  const approachAnim = useInView(0.3);

  return (
    <section className="w-full bg-[#e9e3db]">
      {/* Hero Section */}
      <div className="relative h-[90vh] w-full overflow-hidden">
        <Loader />
        <Image
          src="/images/aboutUs/aboutBanner.jpg"
          alt="About Hero"
          fill
          className=""
        />
        <div
          ref={heroAnim.ref}
          className={`absolute inset-0 bg-[#172b1b]/40 flex flex-col justify-center items-center text-center px-6 transition-all duration-1000 ${
            heroAnim.visible
              ? "opacity-100 translate-x-0"
              : "opacity-0 translate-x-10"
          }`}
        >
          <h1 className="text-5xl md:text-6xl font-bold text-[#172b1b] mb-4">
            Capturing Moments
          </h1>
          <p className="text-[#717552] text-lg md:text-xl max-w-2xl">
            Photography is my passion. Every frame tells a story, every shot
            freezes a memory.
          </p>
        </div>
      </div>

      {/* Story Section */}
      <div className="relative bg-[#172b1b] text-[#e9e3db]">
        <div className="container mx-auto px-6 md:px-12 py-20">
          <div
            ref={storyAnim.ref}
            className={`flex flex-col md:flex-row items-center gap-12 transition-all duration-1000 ${
              storyAnim.visible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <div className="md:w-1/2">
              <Image
                src="/images/aboutUs/profile.jpg"
                alt="Photographer Portrait"
                width={500}
                height={600}
                className="rounded-xl shadow-lg object-cover"
              />
            </div>
            <div className="md:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">My Story</h2>
              <p className="text-lg mb-4">
                Over the past decade, I have been capturing life&apos;s most
                beautiful moments...
              </p>
              <p className="text-lg">
                Every photo I take is more than an image it&apos;s a story
                frozen in time...
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Works */}
      <div className="py-20 bg-[#e9e3db]">
        <SectionHeading title="Featured Works" align="center" />
        <div
          ref={gridAnim.ref}
          className="columns-1 sm:columns-2 md:columns-3 gap-4 px-4 md:px-12 space-y-4"
        >
          {featuredPhotos.map((photo, idx) => (
            <div
              key={idx}
              className={`relative break-inside-avoid rounded-xl overflow-hidden shadow-lg group cursor-pointer transform transition-all duration-700 ease-out ${
                gridAnim.visible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${idx * 150}ms` }}
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
      <div
        ref={approachAnim.ref}
        className={`bg-[#717552] text-[#e9e3db] py-16 text-center transition-all duration-1000 ${
          approachAnim.visible
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-10"
        }`}
      >
        <SectionHeading
          title="My Approach"
          align="center"
          titleColor="#e9e3db"
          lineColor="#172b1b"
        />
        <div className="container mx-auto px-6 md:px-12 grid md:grid-cols-3 gap-8">
          {["Creativity", "Passion", "Storytelling"].map((title, idx) => (
            <div
              key={idx}
              className="bg-[#172b1b]/90 p-6 rounded-xl shadow-lg hover:shadow-xl transition transform hover:-translate-y-2"
            >
              <h3 className="text-xl font-semibold mb-2">{title}</h3>
              <p>
                {title === "Creativity"
                  ? "Unique perspectives in every frame..."
                  : title === "Passion"
                  ? "Photography is not just a job..."
                  : "Every image tells a story that evokes emotion..."}
              </p>
            </div>
          ))}
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
