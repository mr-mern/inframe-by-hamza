import Link from "next/link";
import { Facebook, Instagram, Twitter, Mail, Phone } from "lucide-react";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#172b1b] text-[rgb(233,227,219)] pt-10 pb-5">
      <div className="container mx-auto px-6 grid md:grid-cols-4 gap-10">
        <div>
          {/* Logo */}
          <Link href="/">
            <Image
              src="/images/logos/footer-logo.png"
              alt="logo"
              className="w-30 mb-4"
            />
          </Link>
          <p className="text-sm text-[#e9e3db]/80 leading-relaxed">
            Capturing timeless moments with elegance and artistry. Wedding,
            family, portraits & travel we tell your story beautifully.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold mb-4 relative inline-block">
            Quick Links
            <span className="block w-12 h-[2px] bg-[#717552] mt-1"></span>
          </h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/" className="hover:text-[#717552] transition">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-[#717552] transition">
                About Us
              </Link>
            </li>
            <li>
              <Link
                href="/ourServices"
                className="hover:text-[#717552] transition"
              >
                Our Services
              </Link>
            </li>
            <li>
              <Link
                href="/portfolios"
                className="hover:text-[#717552] transition"
              >
                Portfolios
              </Link>
            </li>
            <li>
              <Link href="/videos" className="hover:text-[#717552] transition">
                Videos
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="hover:text-[#717552] transition"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact */}
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
          <Image
            src="/images/logos/qr-code-cream.png"
            alt="QR Code"
            width={120}
            height={120}
          />
          <div className="mt-2">
            <p className="flex justify-center items-center text-xs font-semibold w-[25%] ml-4 py-1 rounded bg-[#e9e3db] text-[#172b1b]">Scan me</p>
          </div>
        </div>

        {/* Social */}
        <div>
          <h3 className="text-xl font-semibold mb-4 relative inline-block">
            Follow Us
            <span className="block w-12 h-[2px] bg-[#717552] mt-1"></span>
          </h3>
          <div className="flex gap-4">
            <Link
              href="#"
              className="p-2 rounded-full border border-[#717552] hover:bg-[#717552] hover:text-[#172b1b] transition"
            >
              <Facebook className="w-5 h-5" />
            </Link>
            <Link
              href="#"
              className="p-2 rounded-full border border-[#717552] hover:bg-[#717552] hover:text-[#172b1b] transition"
            >
              <Instagram className="w-5 h-5" />
            </Link>
            <Link
              href="#"
              className="p-2 rounded-full border border-[#717552] hover:bg-[#717552] hover:text-[#172b1b] transition"
            >
              <Twitter className="w-5 h-5" />
            </Link>
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
