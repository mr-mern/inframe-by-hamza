"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import Button from "../Button/button";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const nav = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About Us" },
    { href: "/ourServices", label: "Our Services" },
    { href: "/portfolios", label: "Portfolios" },
    { href: "/videos", label: "Videos" },
    { href: "/Testimonials", label: "Testimonials" },
  ];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-all duration-300 ${
        scrolled
          ? "bg-[#e9e3db]/70 backdrop-blur border-[#717552]/20 shadow-md"
          : "bg-[#e9e3db] border-[#717552]/20"
      }`}
    >
      <div className="container h-[75px] flex items-center justify-between md:justify-around px-4 sm:px-6 md:px-12">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/images/logos/nav-logo.png"
              alt="logo"
              width={120}
              height={60}
              className="object-contain"
            />
          </Link>
        </motion.div>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6">
          {nav.map((item, i) => (
            <motion.div
              key={item.href}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
            >
              <Link
                href={item.href}
                className="text-[#172b1b] hover:text-[#717552] transition-colors "
              >
                {item.label}
              </Link>
            </motion.div>
          ))}

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <Button href="/contact" label="Book Now" />
          </motion.div>
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
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="md:hidden border-t border-[#717552]/20 bg-[#e9e3db] rounded-b-3xl shadow-[0_10px_40px_rgba(0,0,0,0.1)] overflow-hidden"
          >
            <div className="flex flex-col items-center py-4 px-4 space-y-2">
              {nav.map((item, i) => (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: i * 0.07 }}
                  className="w-full"
                >
                  <Link
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="block py-1 rounded-lg text-[#172b1b] text-[16px] tracking-wide hover:bg-[#172b1b]/10 hover:text-[#717552] transition-all duration-300"
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}

              {/* Book Now Button */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.4 }}
                className="w-full pt-4"
              >
                <Link
                  href="/contact"
                  onClick={() => setOpen(false)}
                  className="block text-center py-2 bg-[#172b1b] text-[#e9e3db] font-semibold rounded-sm hover:bg-[#717552] hover:text-[#e9e3db] transition-all duration-300"
                >
                  Book Now
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
