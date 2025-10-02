"use client";
import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { X } from "lucide-react";
import SectionHeading from "../components/SectionHeading/heading";

// Generic Intersection Observer Hook
function useInView<T extends HTMLElement = HTMLDivElement>(threshold = 0.2) {
  const ref = useRef<T | null>(null);
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

export default function Packages() {
  const packages = [
    { title: "Basic Package", img: "/images/packages/package1.jpg" },
    { title: "Standard Package", img: "/images/packages/package2.jpg" },
    { title: "Premium Package", img: "/images/packages/package3.jpg" },
  ];

  const [selected, setSelected] = useState<null | { title: string; img: string }>(null);
  const [showTerms, setShowTerms] = useState(false);

  // Intersection refs for animations
  const bannerAnim = useInView<HTMLDivElement>(0.3);
  const introAnim = useInView<HTMLDivElement>(0.3);
  const gridAnim = useInView<HTMLDivElement>(0.2);
  const termsAnim = useInView<HTMLButtonElement>(0.5);

  return (
    <section className="bg-[#f5f3ef] text-[#172b1b]">
      {/* Banner / Hero */}
      <div
        ref={bannerAnim.ref}
        className={`relative h-[90vh] flex items-center justify-center text-center transition-all duration-1000 ease-out overflow-hidden ${
          bannerAnim.visible ? "opacity-100" : "opacity-0 translate-y-10"
        }`}
      >
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/packages/banner.jpg')" }}
        ></div>
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      {/* Intro Text */}
      <div
        ref={introAnim.ref}
        className={`container mx-auto px-6 md:px-12 pt-16 text-center max-w-5xl transition-all duration-1000 ease-out ${
          introAnim.visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
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
      <div
        ref={gridAnim.ref}
        className="container mx-auto px-6 md:px-12 pt-20 pb-12 grid grid-cols-1 md:grid-cols-3 gap-8"
      >
        {packages.map((pkg, idx) => (
          <div
            key={idx}
            onClick={() => setSelected(pkg)}
            className={`group bg-[#172b1b] text-[#e9e3db] rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl hover:bg-[#717552] hover:text-[#172b1b] cursor-pointer transform transition-all duration-700 ease-out ${
              gridAnim.visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
            style={{ transitionDelay: `${idx * 150}ms` }}
          >
            <Image
              src={pkg.img}
              alt={pkg.title}
              width={400}
              height={600}
              className="w-full h-[400px] object-cover group-hover:scale-105 transition-transform duration-500"
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
      <div className="text-center pb-20">
        <button
          ref={termsAnim.ref}
          onClick={() => setShowTerms(true)}
          className={`bg-[#172b1b] text-[#e9e3db] px-6 py-3 rounded-lg font-semibold cursor-pointer transform transition-transform duration-500 ${
            termsAnim.visible ? "scale-100 opacity-100" : "scale-90 opacity-0"
          } hover:scale-105`}
        >
          Terms & Conditions
        </button>
      </div>

      {/* Package Modal */}
      {selected && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 px-4">
          <div className="relative bg-[#172b1b] rounded-xl max-w-4xl w-full overflow-hidden">
            <button
              className="absolute top-4 right-4 bg-[#172b1b] text-[#e9e3db] p-2 rounded-full hover:bg-[#717552] transition cursor-pointer"
              onClick={() => setSelected(null)}
            >
              <X size={24} />
            </button>

            <Image
              src={selected.img}
              alt={selected.title}
              width={1000}
              height={800}
              className="w-full max-h-[80vh] object-cover"
            />

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
            <button
              className="absolute top-4 right-4 bg-[#172b1b] text-[#e9e3db] p-2 rounded-full hover:bg-[#717552] hover:text-[#e9e3db] transition cursor-pointer"
              onClick={() => setShowTerms(false)}
            >
              <X size={24} />
            </button>

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
