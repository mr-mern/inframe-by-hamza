"use client";
import Link from "next/link";
import { Facebook, Instagram, Twitter, Mail, Phone } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import Image from "next/image";

export default function Footer() {
  const nav = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About Us" },
    { href: "/ourServices", label: "Our Services" },
    { href: "/portfolios", label: "Portfolios" },
    { href: "/videos", label: "Videos" },
    { href: "/packages", label: "Packages" },
    { href: "/contact", label: "Contact" },
  ];

  const socialLinks = [
    {
      icon: Facebook,
      href: "https://facebook.com/yourpage",
      label: "Facebook",
    },
    {
      icon: Instagram,
      href: "https://instagram.com/yourpage",
      label: "Instagram",
    },
    { icon: Twitter, href: "https://twitter.com/yourpage", label: "Twitter" },
  ];

  return (
    <footer className="bg-[#172b1b] text-[#e9e3db] pt-12 pb-6">
      <div className="container mx-auto px-6 grid md:grid-cols-4 gap-12 md:gap-25">
        {/* Logo & Description */}
        <div>
          <Link href="/">
            <Image
              src="/images/logos/footer-logo.png"
              alt="Footer Logo"
              width={160}
              height={60}
              className="mb-4 object-contain"
            />
          </Link>
          <p className="text-sm text-[#e9e3db]/80 leading-relaxed max-w-xs">
            Capturing timeless moments with elegance and artistry. Wedding,
            family, portraits & travel we tell your story beautifully.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-5 relative inline-block">
            Quick Links
            <span className="block w-12 h-[2px] bg-[#717552] mt-1"></span>
          </h3>
          <ul className="space-y-2 text-sm">
            {nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="hover:text-[#717552] transition-colors duration-200 font-medium"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        {/* Contact & QR Code */}
        <div>
          <h3 className="text-lg font-semibold mb-5 relative inline-block">
            Contact
            <span className="block w-12 h-[2px] bg-[#717552] mt-1"></span>
          </h3>

          <ul className="space-y-3 text-sm mb-6">
            {/* Phone */}
            <li className="flex items-center gap-3">
              <Phone className="w-4 h-4 text-[#717552]" />
              <a
                href="tel:+923034578055"
                className="hover:text-[#717552] transition"
              >
                0303 457 8055
              </a>
            </li>

            {/* WhatsApp */}
            <li className="flex items-center gap-3">
              <FaWhatsapp className="w-4 h-4 text-[#717552]" />
              <a
                href="https://wa.me/923034578055"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#717552] transition"
              >
                +92 303 4578055
              </a>
            </li>

            {/* Email */}
            <li className="flex items-center gap-3">
              <Mail className="w-4 h-4 text-[#717552]" />
              <a
                href="/contact"
                className="hover:text-[#717552] transition"
              >
                hamza.safdar83@yahoo.com
              </a>
            </li>
          </ul>

          {/* QR Code */}
          <div className="flex flex-col items-center w-[110px]">
            <div className="relative w-[110px] h-[110px]">
              <Image
                src="/images/logos/qr-code-cream.png"
                alt="QR Code"
                fill
                className="object-contain"
              />
            </div>
            <p className="mt-2 px-3 py-1 w-fit text-xs font-semibold rounded bg-[#e9e3db] text-[#172b1b]">
              Scan me
            </p>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-5 relative inline-block">
            Follow Us
            <span className="block w-12 h-[2px] bg-[#717552] mt-1"></span>
          </h3>
          <div className="flex flex-col gap-3">
            {socialLinks.map(({ icon: Icon, href, label }, idx) => (
              <Link
                key={idx}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-3 w-full md:w-50 rounded border border-[#717552] hover:bg-[#717552] transition-all duration-300 shadow-md"
              >
                <Icon className="w-6 h-6" />
                <span className="font-medium text-sm">{label}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-[#717552]/40 mt-10 pt-5 text-center text-sm text-[#e9e3db]/70">
        © {new Date().getFullYear()}{" "}
        <Link
          href="/"
          className="font-bold text-[#e9e3db]/90 hover:text-[#717552] transition-colors duration-300"
        >
          InFrame by Hamza
        </Link>
        . All rights reserved.
        <br />
        <span className="mt-2 block text-xs text-[#e9e3db]/70">
          Website crafted by{" "}
          <Link
            href="https://github.com/AbdulRehman646765"
            target="_blank"
            className="font-bold text-[#e9e3db]/90 hover:text-[#717552] transition-colors duration-300"
          >
            Abdul Rehman
          </Link>
        </span>
      </div>
    </footer>
  );
}
