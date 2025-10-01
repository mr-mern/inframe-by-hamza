"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import Button from "../Button/button";
import Image from "next/image";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const nav = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About Us" },
    { href: "/ourServices", label: "Our Services" },
    { href: "/portfolios", label: "Portfolios" },
    { href: "/videos", label: "Videos" },
    { href: "/packages", label: "Packages" },
  ];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-all duration-200 ${
        scrolled
          ? "bg-[#e9e3db]/80 backdrop-blur border-[#717552]/20"
          : "bg-[#e9e3db] border-[#717552]/20"
      }`}
    >
      <div className="container h-[75px] flex items justify-between md:justify-around px-4 sm:px-6 md:px-12">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/images/logos/nav-logo.png"
            alt="logo"
            width={120}
            height={60}
            className="object-contain"
          />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-[#172b1b] hover:text-[#717552] transition-colors font-medium"
            >
              {item.label}
            </Link>
          ))}

          <Button href="/contact" label="Book Now" />
        </nav>

        {/* Mobile button */}
        <button
          onClick={() => setOpen((s) => !s)}
          className="md:hidden p-2"
          aria-label="Open menu"
        >
          {!open ? (
            <svg
              className="w-6 h-6 text-[#172b1b]"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          ) : (
            <svg
              className="w-6 h-6 text-[#172b1b]"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t bg-[#e9e3db] border-[#717552]/20">
          <div className="px-4 py-4 flex flex-col gap-3">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="py-2 text-[#172b1b]/80 hover:text-[#717552] transition-colors"
              >
                {item.label}
              </Link>
            ))}

            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="mt-2 py-2 font-semibold bg-[#172b1b] text-[#e9e3db] text-center rounded-lg hover:bg-[#717552] transition-colors"
            >
              Book Now
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
