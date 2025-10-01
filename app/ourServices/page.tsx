"use client";

import Image from "next/image";
import { Camera, Heart, Calendar, Briefcase } from "lucide-react";
import CTA from "../components/CTA/CTA";

const services = [
  {
    title: "Weddings",
    description:
      "Capture every magical moment of your special day with elegance and style.",
    icon: <Heart size={40} />,
  },
  {
    title: "Portraits",
    description:
      "Professional portraits for individuals, families, and pets, highlighting personality.",
    icon: <Camera size={40} />,
  },
  {
    title: "Events",
    description:
      "Document events and celebrations with candid and artistic photography.",
    icon: <Calendar size={40} />,
  },
  {
    title: "Commercial / Branding",
    description:
      "High-quality commercial photography to showcase your products and brand identity.",
    icon: <Briefcase size={40} />,
  },
];

export default function OurServices() {
  return (
    <>
      {/* Hero + Services */}
      <section className="relative w-full h-[90vh] flex items-center justify-center text-center">
        <Image
          src="/images/ourServices/banner.jpg"
          alt="Photography Services"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 w-full px-6 py-20">
          <h1 className="text-4xl md:text-5xl font-bold text-[#e9e3db] mb-4">
            Our Services
          </h1>
          <p className="text-[#e9e3db]/90 text-lg md:text-xl max-w-2xl mx-auto mb-25">
            Professional photography services to capture every moment, emotion,
            and memory.
          </p>

          {/* Services Grid */}
          <div className="container mx-auto px-6 md:px-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {services.map((service, idx) => (
              <div
                key={idx}
                className="bg-[#e9e3db] hover:bg-[#172b1b] rounded-xl shadow-lg p-6 flex flex-col items-center text-center hover:shadow-2xl transition-all duration-500 cursor-pointer group"
              >
                {/* Icon */}
                <div className="mb-4 text-[#172b1b] transition-colors duration-500 group-hover:text-[#e9e3db]">
                  {service.icon}
                </div>

                {/* Title */}
                <h3 className="text-xl font-semibold mb-2 text-[#172b1b] transition-colors duration-500 group-hover:text-[#e9e3db]">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-[#172b1b]/80 transition-colors duration-500 group-hover:text-[#e9e3db]/80">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA section */}
      <CTA
        title="Ready to Capture Your Moments?"
        subtitle="Contact us today to discuss your photography needs and schedule a session."
        buttonText="Book a Session"
        buttonHref="/contact"
      />
    </>
  );
}
