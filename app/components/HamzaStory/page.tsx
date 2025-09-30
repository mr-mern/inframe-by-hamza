import Image from "next/image";
import { Quote } from "lucide-react";

export default function HamzaStory() {
  return (
    <section className="py-20 bg-[#172b1b]">
      <div className="container mx-auto px-6 md:px-12 max-w-[1100px] text-center">
        {/* Client Image */}
        <div className="flex justify-center mb-8">
          <div className="relative w-80 h-50 md:w-[30rem] md:h-[15rem] overflow-hidden shadow-xl border-2 border-[#717552] rounded-tl-3xl rounded-br-3xl">
            <Image
              src="/images/client-story/hamza.jpg"
              alt="Client"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Content with Quotes */}
        <div className="relative mb-8">
          {/* Open Quote */}
          <Quote className="absolute -top-6 left-8 w-10 h-10 text-[#717552] opacity-70 rotate-180" />

          <p className="text-lg md:text-xl text-[#e9e3db] leading-relaxed font-[Poppins] tracking-[.3rem] italic px-6">
            We had the most magical experience! Every moment was captured with
            so much love and detail. These pictures will always remind us of the
            best days of our lives.
          </p>

          {/* Close Quote */}
          <Quote className="absolute -bottom-6 right-25 w-10 h-10 text-[#717552] opacity-70" />
        </div>

        {/* Signature with Stamp */}
        <div className="mt-10 flex justify-center">
          <Image
            src="/images/logos/stamp-olive.png"
            alt="Stamp"
            width={120}
            height={120}
            className="object-contain opacity-90"
          />
        </div>
      </div>
    </section>
  );
}
