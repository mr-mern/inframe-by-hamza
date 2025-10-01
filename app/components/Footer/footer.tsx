"use client";
import Link from "next/link";
import { Facebook, Instagram, Twitter, Mail, Phone } from "lucide-react";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#172b1b] text-[rgb(233,227,219)] pt-10 pb-5">
      <div className="container mx-auto px-6 grid md:grid-cols-4 gap-10">
        {/* Logo & Description */}
        <div>
          <Link href="/">
            <Image
              src="/images/logos/footer-logo.png"
              alt="Footer Logo"
              width={150} 
              height={60}
              className="mb-4 object-contain"
            />
          </Link>
          <p className="text-sm text-[#e9e3db]/80 leading-relaxed">
            Capturing timeless moments with elegance and artistry. Wedding,
            family, portraits & travel — we tell your story beautifully.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold mb-4 relative inline-block">
            Quick Links
            <span className="block w-12 h-[2px] bg-[#717552] mt-1"></span>
          </h3>
          <ul className="space-y-2 text-sm">
            {[
              "Home",
              "About Us",
              "Our Services",
              "Portfolios",
              "Videos",
              "Contact",
            ].map((item) => (
              <li key={item}>
                <Link
                  href={`/${item === "Home" ? "" : item.replace(/\s/g, "")}`}
                  className="hover:text-[#717552] transition"
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact & QR Code */}
        <div>
          <h3 className="text-xl font-semibold mb-4 relative inline-block">
            Contact
            <span className="block w-12 h-[2px] bg-[#717552] mt-1"></span>
          </h3>
          <ul className="space-y-2 text-sm mb-4">
            <li className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-[#717552]" /> +92 300 1234567
            </li>
            <li className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-[#717552]" /> hello@yourstudio.com
            </li>
          </ul>

          {/* QR Code */}
          <div className="relative w-[120px] h-[120px] mx-auto">
            <Image
              src="/images/logos/qr-code-cream.png"
              alt="QR Code"
              fill
              className="object-contain"
            />
          </div>
          <p className="flex justify-center items-center text-xs font-semibold mt-2 py-1 rounded bg-[#e9e3db] text-[#172b1b] w-[25%] mx-auto">
            Scan me
          </p>
        </div>

        {/* Social Links */}
        <div>
          <h3 className="text-xl font-semibold mb-4 relative inline-block">
            Follow Us
            <span className="block w-12 h-[2px] bg-[#717552] mt-1"></span>
          </h3>
          <div className="flex gap-4">
            {[Facebook, Instagram, Twitter].map((Icon, idx) => (
              <Link
                key={idx}
                href="#"
                className="p-2 rounded-full border border-[#717552] hover:bg-[#717552] hover:text-[#172b1b] transition"
              >
                <Icon className="w-5 h-5" />
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-[#717552]/40 mt-8 pt-6 text-center flex justify-center items-center text-sm text-[#e9e3db]/70">
        © {new Date().getFullYear()}{" "}
        <span className="font-bold text-[#e9e3db]/90">
          <Link href="/">InFrame by Hamza</Link>
        </span>
        . All rights reserved.
      </div>
    </footer>
  );
}
