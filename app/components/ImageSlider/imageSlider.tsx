"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import { Navigation, Autoplay, EffectFade } from "swiper/modules";
import Image from "next/image";
import Link from "next/link";
import { couples } from "@/app/data/couples";

export default function ImageSlider() {
  return (
    <section className="relative min-h-[90vh] sm:min-h-screen w-full overflow-hidden bg-[#0d0d0c] flex flex-col justify-center items-center">
      {/* Background Layers */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0d0d0c] via-[#1b1c18] to-[#0d0d0c]" />
      <div className="absolute top-1/2 left-1/2 w-[600px] sm:w-[900px] h-[600px] sm:h-[900px] bg-[#717552]/15 blur-[150px] sm:blur-[180px] rounded-full -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute top-0 left-0 w-[300px] sm:w-[600px] h-[300px] sm:h-[600px] bg-[#e9e3db]/5 blur-[150px] sm:blur-[200px] rounded-full opacity-70" />

      {/* Heading */}
      <div className="relative z-10 text-center my-12 sm:my-16 px-4">
        <h2 className="relative inline-block text-3xl sm:text-5xl md:text-6xl font-semibold tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-[#e9e3db] via-[#f5e6c4] to-[#717552] animate-goldFlow drop-shadow-[0_0_30px_rgba(255,255,255,0.1)] leading-tight">
          Featured Love Stories
          <span className="absolute left-1/2 bottom-[-14px] sm:bottom-[-18px] w-16 sm:w-24 h-[2px] sm:h-[3px] bg-gradient-to-r from-[#f5e6c4] to-[#717552] -translate-x-1/2 rounded-full blur-[1px] shadow-[0_0_15px_rgba(245,230,196,0.5)]" />
        </h2>
        <p className="text-[#d6d2c6]/90 text-base sm:text-lg mt-6 sm:mt-8 max-w-md sm:max-w-2xl mx-auto leading-relaxed font-light tracking-wide">
          Stories of love, captured with grace and told through our lens.
        </p>
      </div>

      {/*  Swiper Section */}
      <div className="relative w-full max-w-6xl z-10 px-4 sm:px-6 md:px-0">
        <Swiper
          modules={[Navigation, Autoplay, EffectFade]}
          effect="fade"
          loop
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          navigation
          className="rounded-2xl sm:rounded-3xl overflow-hidden shadow-[0_0_100px_rgba(255,255,255,0.08)]"
        >
          {couples.map((couple, index) => (
            <SwiperSlide key={index}>
              <div className="relative w-full h-[400px] sm:h-[500px] md:h-[620px] group">
                <Image
                  src={couple.cover}
                  alt={couple.name}
                  fill
                  className="object-cover transition-all duration-[3000ms] ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/50 to-transparent" />
                <div className="absolute bottom-0 left-1/2 w-[250px] sm:w-[400px] h-[120px] sm:h-[200px] bg-[#717552]/30 blur-[100px] sm:blur-[120px] rounded-full -translate-x-1/2" />

                {/*  Info Card */}
                <div className="absolute bottom-6 sm:bottom-10 left-1/2 transform -translate-x-1/2 text-center w-[92%] sm:w-[70%] md:w-[50%] backdrop-blur-xl bg-white/10 p-5 sm:p-8 rounded-xl sm:rounded-2xl border border-white/20 shadow-[0_10px_40px_rgba(0,0,0,0.5)] group-hover:shadow-[0_0_60px_rgba(113,117,82,0.5)] transition-all duration-700">
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-[#e9e3db] mb-2 tracking-wide">
                    {couple.name}
                  </h3>
                  <p className="text-[#e9e3db]/80 text-sm sm:text-base mb-4 sm:mb-6 leading-relaxed font-light">
                    A celebration of everlasting love and cherished memories.
                  </p>
                  <Link
                    href={`/couples/${couple.slug}`}
                    className="inline-block bg-[#e9e3db] text-[#172b1b] px-5 sm:px-7 py-2 sm:py-2.5 rounded-full text-sm font-medium tracking-wide hover:bg-[#717552] hover:text-[#e9e3db] transition-all duration-300"
                  >
                    View Story →
                  </Link>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <style jsx global>{`
        .swiper-button-next,
        .swiper-button-prev {
          color: #e9e3db !important;
          background: rgba(255, 255, 255, 0.08);
          backdrop-filter: blur(10px);
          width: 40px;
          height: 40px;
          border-radius: 50%;
          box-shadow: 0 0 10px rgba(255, 255, 255, 0.08);
          transition: all 0.3s ease;
        }
        .swiper-button-next:hover,
        .swiper-button-prev:hover {
          background: #717552 !important;
          color: #fff !important;
          transform: scale(1.1);
          box-shadow: 0 0 25px rgba(113, 117, 82, 0.6);
        }
        .swiper-button-next::after,
        .swiper-button-prev::after {
          font-size: 14px !important;
          font-weight: bold;
        }

        /* Reposition arrows on small screens */
        @media (max-width: 640px) {
          .swiper-button-next,
          .swiper-button-prev {
            width: 30px;
            height: 30px;
            top: unset !important;
            bottom: 10px !important;
          }
          .swiper-button-prev {
            left: 10% !important;
          }
          .swiper-button-next {
            right: 10% !important;
          }
        }

        /*  Gold gradient shimmer animation */
        @keyframes goldFlow {
          0% {
            background-position: 0% 50%;
          }
          100% {
            background-position: 200% 50%;
          }
        }
        .animate-goldFlow {
          background-size: 200% auto;
          animation: goldFlow 6s linear infinite;
        }
      `}</style>
    </section>
  );
}
