"use client";

import Button from "../Button/button";
import { useEffect, useRef, useState } from "react";

interface CTAProps {
  title: string;
  subtitle: string;
  buttonText: string;
  buttonHref: string;
  bgColor?: string;
  textColor?: string;
  buttonBg?: string;
  buttonTextColor?: string;
  buttonHoverBg?: string;
}

export default function CTA({
  title,
  subtitle,
  buttonText,
  buttonHref,
  bgColor = "bg-[#e9e3db]",
  textColor = "text-[#172b1b]",
  buttonBg = "bg-[#172b1b]",
  buttonTextColor = "text-[#e9e3db]",
  buttonHoverBg = "hover:bg-[#717552]",
}: CTAProps) {
  const [inView, setInView] = useState(false);
  const sectionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  return (
    <div
      ref={sectionRef}
      className={`${bgColor} ${textColor} py-20 px-5 text-center overflow-hidden`}
    >
      {/* Heading */}
      <h2
        className={`text-3xl md:text-4xl font-bold mb-4 transform transition-all duration-1000 ease-out
        ${inView ? "opacity-100 scale-100" : "opacity-0 scale-75"}`}
      >
        {title}
      </h2>

      {/* Subtitle */}
      <p
        className={`mb-10 max-w-2xl mx-auto transform transition-all duration-1000 ease-out delay-200
        ${inView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`}
      >
        {subtitle}
      </p>

      {/* Button */}
      <div
        className={`inline-block transform transition-all duration-1000 ease-out delay-500
        ${inView ? "opacity-100 scale-100" : "opacity-0 scale-50"}`}
      >
        <Button
          href={buttonHref}
          label={buttonText}
          className={`${buttonBg} ${buttonTextColor} ${buttonHoverBg} py-3 px-6`}
        />
      </div>
    </div>
  );
}
