"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { X } from "lucide-react";
import SectionHeading from "../components/SectionHeading/page";

export default function Packages() {
  const packages = [
    { title: "Basic Package", img: "/images/packages/package1.jpg" },
    { title: "Standard Package", img: "/images/packages/package2.jpg" },
    { title: "Premium Package", img: "/images/packages/package3.jpg" },
  ];

  const [selected, setSelected] = useState<null | {
    title: string;
    img: string;
  }>(null);

  const [showTerms, setShowTerms] = useState(false);

  return (
    <section className="bg-[#f5f3ef] text-[#172b1b]">
      {/* Banner / Hero */}
      <div className="relative h-[90vh] flex items-center justify-center text-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/packages/banner.jpg')" }}
        ></div>
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      {/* Intro Text */}
      <div className="container mx-auto px-6 md:px-12 pt-16 text-center max-w-5xl">
        <SectionHeading
          title="Our Exclusive Packages"
          align="center"
          subtitle="Choose from our carefully crafted packages designed to meet every
          requirement whether you’re just getting started, scaling up, or
          looking for a premium solution. Each package offers the perfect
          balance of quality, creativity, and value to help you achieve your
          goals with confidence."
          subtitleColor="#333"
        />
      </div>

      {/* Packages Grid */}
      <div className="container mx-auto px-6 md:px-12 py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {packages.map((pkg, idx) => (
            <div
              key={idx}
              className="group bg-[#172b1b] text-[#e9e3db] rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition hover:bg-[#717552] hover:text-[#172b1b] cursor-pointer"
              onClick={() => setSelected(pkg)}
            >
              <Image
                src={pkg.img}
                alt={pkg.title}
                width={400}
                height={600}
                className="w-full h-[400px] object-cover"
              />
              <div className="p-6 text-center">
                <h3 className="text-2xl font-semibold group-hover:text-[#e9e3db]">
                  {pkg.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

        {/* Terms Button */}
        <div className="text-center mt-12">
          <button
            onClick={() => setShowTerms(true)}
            className="bg-[#172b1b] text-[#e9e3db] px-6 py-3 rounded-lg font-semibold hover:bg-[#717552] transition cursor-pointer"
          >
            Terms & Conditions
          </button>
        </div>
      </div>

      {/* Package Modal */}
      {selected && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 px-4">
          <div className="relative bg-[#172b1b] rounded-xl max-w-4xl w-full overflow-hidden">
            {/* Close Button */}
            <button
              className="absolute top-4 right-4 bg-[#172b1b] text-[#e9e3db] p-2 rounded-full hover:bg-[#717552] transition cursor-pointer"
              onClick={() => setSelected(null)}
            >
              <X size={24} />
            </button>

            {/* Image */}
            <Image
              src={selected.img}
              alt={selected.title}
              width={1000}
              height={800}
              className="w-full max-h-[80vh] object-cover"
            />

            {/* Title Button -> Contact Page */}
            <div className="p-6 text-center">
              <Link
                href="/contact"
                className="inline-block bg-[#e9e3db] text-[#172b1b] px-6 py-3 rounded-lg font-semibold hover:bg-[#717552] hover:text-[#e9e3db] transition cursor-pointer"
              >
                Book Now
              </Link>
            </div>
          </div>
        </div>
      )}

      {/* Terms Modal */}
      {showTerms && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 px-4">
          <div className="relative bg-[#172b1b] rounded-xl max-w-4xl w-full overflow-hidden">
            {/* Close */}
            <button
              className="absolute top-4 right-4 bg-[#172b1b] text-[#e9e3db] p-2 rounded-full hover:bg-[#717552] hover:text-[#e9e3db] transition cursor-pointer"
              onClick={() => setShowTerms(false)}
            >
              <X size={24} />
            </button>

            {/* Terms Image */}
            <Image
              src="/images/packages/terms.jpg"
              alt="Terms and Conditions"
              width={1000}
              height={800}
              className="w-full max-h-[80vh] object-cover"
            />
          </div>
        </div>
      )}
    </section>
  );
}
