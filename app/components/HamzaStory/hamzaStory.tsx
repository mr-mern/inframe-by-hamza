"use client";

import Image from "next/image";
import { Quote, Mail, Phone } from "lucide-react";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import { motion } from "framer-motion";

export default function HamzaStory() {
  return (
    <section className="relative py-24 bg-[#f5f1eb]">
      <div className="container mx-auto px-6 max-w-5xl relative">
        <div className="grid md:grid-cols-2 gap-12 items-center relative z-10">
          {/* Polaroid Style Image */}
          <motion.div
            initial={{ rotate: -5, opacity: 0 }}
            whileInView={{ rotate: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: false }}
            className="bg-white shadow-2xl p-3 rounded-md rotate-[-2deg] border border-[#ddd]"
          >
            <div className="relative w-full h-[350px] overflow-hidden">
              <Image
                src="/images/client-story/hamza.jpg"
                alt="Hamza Story"
                fill
                className="object-cover rounded"
              />
            </div>
            <p className="mt-3 text-center text-sm font-semibold text-[#172b1b]/80">
              Hamza Safdar
            </p>
          </motion.div>

          {/* Story Note */}
          <motion.div
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: false }}
            className="relative bg-white shadow-lg border-l-4 border-[#717552] rounded-r-xl p-8 h-auto"
          >
            <Quote className="w-10 h-10 text-[#717552] opacity-50 mb-4 rotate-180" />

            {/* Story */}
            <p className="text-lg md:text-xl text-[#172b1b]/80 italic mb-6">
              We had the most magical experience! Every moment was captured with
              so much love and detail. These pictures will always remind us of
              the best days of our lives.
            </p>

            {/* Connect With Me */}
            <div className="mt-6 border-t border-gray-200 pt-4 pb-2">
              <h4 className="text-sm font-semibold text-[#172b1b] mb-3">
                Connect with me
              </h4>
              <div className="flex flex-wrap gap-4 text-[#717552]">
                {/* Instagram */}
                <a
                  href="https://www.instagram.com/inframebyhamza?igsh=MXNoZTYwY2xnZjhucg=="
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-[#172b1b] transition"
                >
                  <FaInstagram className="w-5 h-5" />
                  <span className="text-sm">@inframebyhamza</span>
                </a>

                {/* Phone */}
                <a
                  href="tel:+923034578055"
                  className="flex items-center gap-2 hover:text-[#172b1b] transition"
                >
                  <Phone className="w-5 h-5" />
                  <span className="text-sm">0303 457 8055</span>
                </a>
              </div>
            </div>

            {/* Decorative Stamp */}
            <Image
              src="/images/logos/stamp-olive.png"
              alt="Stamp"
              width={80}
              height={80}
              className="absolute bottom-5 right-5 -rotate-20 opacity-80"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
