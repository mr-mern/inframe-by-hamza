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

  // Observe section visibility
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => setInView(entry.isIntersecting)),
      { threshold: 0.6 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={sectionRef}
      className="relative w-full h-[60vh] sm:h-[70vh] md:h-[80vh] flex flex-col justify-center items-center text-center overflow-hidden"
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

      <div className="relative z-10 px-4 sm:px-6 md:px-10 flex flex-col items-center">
        {/* Intro Text */}
        <motion.p
          key={inView ? "text-animate" : "text-static"}
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : -40 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-[#172b1b]/80 max-w-[300px] md:max-w-full text-sm sm:text-base mb-6 sm:mb-8 md:mb-10 uppercase tracking-[.4rem] sm:tracking-[.5rem] md:tracking-[.6rem] font-light"
        >
          Welcome to the Wedding of
        </motion.p>

        {/* Couple Name */}
        <motion.h1
          key={inView ? "name-animate" : "name-static"}
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 60 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="text-5xl sm:text-7xl md:text-9xl font-[Symphony] text-[#172b1b] mb-6 sm:mb-8 md:mb-10 break-words"
        >
          {couple.name}
        </motion.h1>

        {/* Date */}
        <motion.div
          key={inView ? "date-animate" : "date-static"}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: inView ? 1 : 0, scale: inView ? 1 : 0.8 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 mt-2"
        >
          <span className="text-[#717552]/90 text-xs sm:text-sm font-medium tracking-[.1rem] sm:tracking-[.15rem]">
            {date.toLocaleDateString("en-US", { weekday: "long" })}
          </span>

          <div className="w-8 h-8 sm:w-12 sm:h-12 md:w-14 md:h-14 flex items-center justify-center rounded-full bg-[#172b1b] text-[#e9e3db] text-base sm:text-xl md:text-2xl font-bold">
            {date.getDate()}
          </div>

          <span className="text-[#717552]/90 text-xs sm:text-sm font-medium tracking-[.1rem] sm:tracking-[.15rem]">
            {date.toLocaleDateString("en-US", { month: "long" })}
          </span>
        </motion.div>
      </div>

      {/* Author Credit */}
      <motion.div
        key={inView ? "author-animate" : "author-static"}
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
        transition={{ duration: 1, delay: 0.9 }}
        className="absolute bottom-10 z-10 text-xs sm:text-sm text-[#717552]/80 tracking-[.2rem] md:tracking-[.3rem]"
      >
        By: Hamza Safdar
      </motion.div>

      {/* Bottom Bar */}
      <div className="absolute bottom-0 left-0 w-full h-2 sm:h-3 bg-[#717552]">
        <div className="w-full h-[2px] bg-[#e9e3db]"></div>
      </div>
    </div>
  );
}
