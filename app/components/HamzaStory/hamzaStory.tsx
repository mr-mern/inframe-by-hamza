"use client";

import Image from "next/image";
import { Quote } from "lucide-react";
import { motion } from "framer-motion";

export default function HamzaStory() {
  return (
    <section className="py-20 bg-[#172b1b]">
      <div className="container mx-auto px-6 md:px-12 max-w-[1100px] text-center">
        {/* Client Image */}
        <div className="flex justify-center mb-8">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: false }}
            className="relative w-80 h-50 md:w-[30rem] md:h-[15rem] overflow-hidden shadow-xl border-2 border-[#717552] rounded-tl-3xl rounded-br-3xl"
          >
            <Image
              src="/images/client-story/hamza.jpg"
              alt="Client"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 80vw, 
         (max-width: 1200px) 30rem, 
         30rem"
            />
          </motion.div>
        </div>

        {/* Content with Quotes */}
        <motion.div
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          viewport={{ once: false }}
          className="relative mb-8"
        >
          {/* Open Quote */}
          <motion.div
            initial={{ rotate: -90, opacity: 0 }}
            whileInView={{ rotate: 0, opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            viewport={{ once: false }}
          >
            <Quote className="absolute -top-6 left-8 w-10 h-10 text-[#717552] opacity-70 rotate-180" />
          </motion.div>

          <p className="text-lg md:text-xl text-[#e9e3db] leading-relaxed font-[Poppins] tracking-[.3rem] italic px-6">
            We had the most magical experience! Every moment was captured with
            so much love and detail. These pictures will always remind us of the
            best days of our lives.
          </p>

          {/* Close Quote */}
          <motion.div
            initial={{ rotate: 90, opacity: 0 }}
            whileInView={{ rotate: 0, opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            viewport={{ once: false }}
          >
            <Quote className="absolute -bottom-6 right-25 w-10 h-10 text-[#717552] opacity-70" />
          </motion.div>
        </motion.div>

        {/* Signature with Stamp */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2, type: "spring", stiffness: 80 }}
          viewport={{ once: false }}
          className="mt-10 flex justify-center"
        >
          <Image
            src="/images/logos/stamp-olive.png"
            alt="Stamp"
            width={120}
            height={120}
            className="object-contain opacity-90"
          />
        </motion.div>
      </div>
    </section>
  );
}
