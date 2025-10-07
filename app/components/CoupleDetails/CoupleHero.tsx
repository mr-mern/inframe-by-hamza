"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

interface Couple {
  name: string;
  date: string | Date;
}

export default function CoupleHero({ couple }: { couple: Couple }) {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const [inView, setInView] = useState(false);
  const date = new Date(couple.date);

  //  Observe section visibility
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setInView(true);
          } else {
            setInView(false);
          }
        });
      },
      { threshold: 0.6 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={sectionRef}
      className="relative w-full h-[60vh] sm:h-[70vh] md:h-[80vh] flex items-center justify-center text-center overflow-hidden"
    >
      {/* Background Banner */}
      <Image
        src="/images/couples/cover.svg"
        alt={couple.name}
        fill
        priority
        className="object-cover"
      />
      <div className="absolute inset-0 bg-[#172b1b]/20"></div>

      <div className="relative z-10 px-4">
        {/* Text Slide Down */}
        <motion.p
          key={inView ? "text-animate" : "text-static"}
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : -40 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-[#172b1b]/80 text-sm sm:text-base mb-10 uppercase tracking-[.6rem] font-light"
        >
          Welcome to the Wedding of
        </motion.p>

        {/* Couple Name Animation */}
        <motion.h1
          key={inView ? "name-animate" : "name-static"}
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 60 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="text-4xl sm:text-6xl md:text-9xl font-[Symphony] text-[#172b1b] mb-10"
        >
          {couple.name}
        </motion.h1>

        {/* Date Animation */}
        <motion.div
          key={inView ? "date-animate" : "date-static"}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: inView ? 1 : 0, scale: inView ? 1 : 0.8 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="flex items-center justify-center gap-3 sm:gap-4 mt-2"
        >
          <span className="text-[#717552]/90 text-sm sm:text-base font-medium tracking-[.2rem]">
            {date.toLocaleDateString("en-US", { weekday: "long" })}
          </span>

          <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 flex items-center justify-center rounded-full bg-[#172b1b] text-[#e9e3db] text-lg sm:text-xl md:text-2xl font-bold">
            {date.getDate()}
          </div>

          <span className="text-[#717552]/90 text-sm sm:text-base font-medium tracking-[.2rem]">
            {date.toLocaleDateString("en-US", { month: "long" })}
          </span>
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-3 bg-[#717552]">
        <div className="w-full h-[2px] bg-[#e9e3db]"></div>
      </div>
    </div>
  );
}
