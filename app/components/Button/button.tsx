"use client";

import Link from "next/link";
import { ButtonHTMLAttributes, ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  href?: string; 
  label: string;
  className?: string;
}

export default function Button({
  href,
  label,
  className = "",
  ...rest
}: ButtonProps) {
  const baseClasses =
    "px-4 py-2 rounded font-medium bg-[#172b1b] shadow-sm hover:bg-[#717552] transition-colors cursor-pointer";

  if (href) {
    // Link case
    return (
      <Link href={href} className={`${baseClasses} ${className}`}>
        {label}
      </Link>
    );
  }

  // Normal button case
  return (
    <button className={`${baseClasses} ${className}`} {...rest}>
      {label}
    </button>
  );
}
