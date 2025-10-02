"use client";

import Image from "next/image";
import { Camera, Heart, Calendar, Briefcase } from "lucide-react";
import CTA from "../components/CTA/CTA";
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

const services = [
  {
    title: "Weddings",
    description:
      "Capture every magical moment of your special day with elegance and style.",
    icon: <Heart className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14" />,
  },
  {
    title: "Portraits",
    description:
      "Professional portraits for individuals, families, and pets, highlighting personality.",
    icon: <Camera className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14" />,
  },
  {
    title: "Events",
    description:
      "Document events and celebrations with candid and artistic photography.",
    icon: <Calendar className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14" />,
  },
  {
    title: "Commercial / Branding",
    description:
      "High-quality commercial photography to showcase your products and brand identity.",
    icon: <Briefcase className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14" />,
  },
];

export default function OurServices() {
  const heroAnim = useInView(0.3);
  const cardsAnim = useInView(0.2);
  const ctaAnim = useInView(0.3);

  return (
    <>
      {/* Hero Section */}
      <section className="relative w-full h-[70vh] sm:h-[80vh] md:h-[90vh] flex items-center justify-center text-center">
        <Image
          src="/images/ourServices/banner.jpg"
          alt="Photography Services"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />
        <div
          ref={heroAnim.ref}
          className={`relative z-10 w-full px-4 sm:px-6 md:px-12 py-20 transition-all duration-1000 ${
            heroAnim.visible
              ? "opacity-100 translate-y-0"
              : "opacity-0 -translate-y-10"
          }`}
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#e9e3db] mb-4">
            Our Services
          </h1>
          <p className="text-[#e9e3db]/90 text-base sm:text-lg md:text-xl max-w-2xl mx-auto mb-6 sm:mb-8 md:mb-10">
            Professional photography services to capture every moment, emotion, and memory.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <div
        ref={cardsAnim.ref}
        className="container mx-auto px-4 sm:px-6 md:px-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 mb-16"
      >
        {services.map((service, idx) => (
          <div
            key={idx}
            className={`bg-[#e9e3db] hover:bg-[#172b1b] rounded-xl shadow-lg p-6 flex flex-col items-center text-center hover:shadow-2xl cursor-pointer group transform transition-all duration-700 ease-out ${
  cardsAnim.visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
}`}

            style={{ transitionDelay: `${idx * 150}ms` }}
          >
            {/* Icon */}
            <div className="mb-4 text-[#172b1b] transition-colors duration-500 group-hover:text-[#e9e3db]">
              {service.icon}
            </div>

            {/* Title */}
            <h3 className="text-lg sm:text-xl md:text-xl font-semibold mb-2 text-[#172b1b] transition-colors duration-500 group-hover:text-[#e9e3db]">
              {service.title}
            </h3>

            {/* Description */}
            <p className="text-sm sm:text-base md:text-base text-[#172b1b]/80 transition-colors duration-500 group-hover:text-[#e9e3db]/80">
              {service.description}
            </p>
          </div>
        ))}
      </div>

      {/* CTA section */}
      <div
        ref={ctaAnim.ref}
        className={`transition-all duration-1000 ${
          ctaAnim.visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <CTA
          title="Ready to Capture Your Moments?"
          subtitle="Contact us today to discuss your photography needs and schedule a session."
          buttonText="Book a Session"
          buttonHref="/contact"
        />
      </div>
    </>
  );
}
