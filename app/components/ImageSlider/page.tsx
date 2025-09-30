"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import { EffectCoverflow, Navigation, Autoplay } from "swiper/modules";
import Image from "next/image";
import Link from "next/link";
import { couples } from "@/app/data/couples";
import SectionHeading from "../SectionHeading/page";

export default function ImageSlider() {
  return (
    <section className="relative w-full py-20 bg-gradient-to-b from-[#f5f3ef] to-[#e9e3db]">
      {/* Reusable Heading */}
      <SectionHeading
        title="Featured Stories"
        subtitle="A glimpse into our most memorable projects"
        align="center"
      />

      {/* Swiper */}
      <div className="relative w-full max-w-6xl mx-auto fade-mask">
        <Swiper
          effect="coverflow"
          grabCursor
          centeredSlides
          slidesPerView={3}
          loop
          coverflowEffect={{
            rotate: 20,
            stretch: 0,
            depth: 200,
            modifier: 1.2,
            slideShadows: false,
          }}
          navigation
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          modules={[EffectCoverflow, Navigation, Autoplay]}
          className="w-full"
        >
          {couples.map((couple) => (
            <SwiperSlide key={couple.slug} className="max-w-xs sm:max-w-sm">
              <Link href={`/couples/${couple.slug}`}>
                <div className="relative rounded-2xl overflow-hidden shadow-xl group cursor-pointer">
                  {/* Image */}
                  <Image
                    src={couple.cover}
                    alt={couple.name}
                    width={500}
                    height={350}
                    className="w-full h-72 object-cover transform group-hover:scale-110 transition duration-700"
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>

                  {/* Name (only on hover) */}
                  <div className="absolute bottom-6 left-0 right-0 text-center px-4 opacity-0 group-hover:opacity-100 transition duration-500">
                    <h3 className="text-[16px] md:text-[18px] text-[#e9e3db] drop-shadow-md">
                      {couple.name}
                    </h3>
                  </div>
                </div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Custom Styling */}
      <style jsx global>{`
        .swiper-button-next,
        .swiper-button-prev {
          color: #e9e3db !important;
          background: #172b1b;
          width: 44px;
          height: 44px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.25);
          transition: all 0.3s ease;
          z-index: 20;
        }
        .swiper-button-next:hover,
        .swiper-button-prev:hover {
          background: #717552 !important;
        }
        .swiper-button-next::after,
        .swiper-button-prev::after {
          font-size: 16px !important;
          font-weight: bold;
        }
        .fade-mask {
          -webkit-mask-image: linear-gradient(
            to right,
            rgba(0, 0, 0, 0) 0%,
            rgba(0, 0, 0, 1) 5%,
            rgba(0, 0, 0, 1) 95%,
            rgba(0, 0, 0, 0) 100%
          );
          -webkit-mask-repeat: no-repeat;
          -webkit-mask-size: 100% 100%;
          mask-image: linear-gradient(
            to right,
            rgba(0, 0, 0, 0) 0%,
            rgba(0, 0, 0, 1) 5%,
            rgba(0, 0, 0, 1) 95%,
            rgba(0, 0, 0, 0) 100%
          );
          mask-repeat: no-repeat;
          mask-size: 100% 100%;
        }
      `}</style>
    </section>
  );
}
