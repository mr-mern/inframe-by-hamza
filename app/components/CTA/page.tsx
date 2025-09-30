"use client";

import Link from "next/link";
import Button from "../Button/page";

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
}: CTAProps) {
  return (
    
    <div className={`${bgColor} ${textColor} py-20 text-center`}>
      <h2 className="text-3xl md:text-4xl font-bold mb-4">{title}</h2>
      <p className="mb-10 max-w-2xl mx-auto">{subtitle}</p>

      <Button href={buttonHref} label={buttonText} className="py-3 px-6 text-[#e9e3db]" />
    </div>
  );
}
