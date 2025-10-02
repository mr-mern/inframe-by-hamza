"use client";

import { Mail, Phone, MapPin } from "lucide-react";
import { useRef, useState, useEffect } from "react";

// Intersection Observer Hook
function useInView<T extends HTMLElement = HTMLDivElement>(threshold = 0.2) {
  const ref = useRef<T | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [threshold]);

  return { ref, visible };
}

export default function Contact() {
  const heroAnim = useInView<HTMLDivElement>(0.3);
  const infoAnim = useInView<HTMLDivElement>(0.2);
  const formAnim = useInView<HTMLDivElement>(0.2);
  const extraAnim = useInView<HTMLDivElement>(0.2);

  return (
    <section className="bg-[#f5f3ef] text-[#172b1b]">
      {/* Hero Section */}
      <div className="relative h-[90vh] w-full overflow-hidden flex items-center justify-center text-center">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/contact/banner.jpg')" }}
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60"></div>

        {/* Hero Content */}
        <div
          ref={heroAnim.ref}
          className={`relative z-10 px-6 transition-all duration-1000 ease-out ${
            heroAnim.visible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10"
          }`}
        >
          <h1
            className={`text-5xl md:text-6xl font-bold text-[#e9e3db] mb-4 transition-all duration-1000 ${
              heroAnim.visible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
            }`}
          >
            Contact Us
          </h1>
          <p
            className={`mt-4 text-lg md:text-xl text-[#e9e3db]/90 max-w-2xl mx-auto transition-all duration-1000 delay-150 ${
              heroAnim.visible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
            }`}
          >
            We’d love to hear from you reach out and let’s connect!
          </p>
        </div>
      </div>

      {/* Contact Info */}
      <div
        ref={infoAnim.ref}
        className={`container mx-auto px-6 md:px-12 py-16 transition-all duration-1000 ease-out ${
          infoAnim.visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center mb-16">
          {/* Email */}
          <div className="relative group bg-[#e9e3db] p-8 rounded-xl shadow-lg hover:shadow-2xl transition hover:bg-[#172b1b] hover:text-[#e9e3db]">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-12 h-1 bg-[#172b1b] rounded-full transition-colors duration-300" />
            <Mail size={40} className="mx-auto mb-4 text-[#172b1b] group-hover:text-[#e9e3db]" />
            <h3 className="text-xl font-semibold mb-2">Email Us</h3>
            <a href="/contact" className="text-[#172b1b]/80 group-hover:text-[#e9e3db]/80">
              hamza.safdar83@yahoo.com
            </a>
          </div>

          {/* Phone */}
          <div className="relative group bg-[#e9e3db] p-8 rounded-xl shadow-lg hover:shadow-2xl transition hover:bg-[#172b1b] hover:text-[#e9e3db]">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-12 h-1 bg-[#172b1b] rounded-full transition-colors duration-300" />
            <Phone size={40} className="mx-auto mb-4 text-[#172b1b] group-hover:text-[#e9e3db]" />
            <h3 className="text-xl font-semibold mb-2">Call - WhatsApp</h3>
            <a
              href="https://wa.me/923001234567"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#172b1b]/80 group-hover:text-[#e9e3db]/80"
            >
              +92 303 4578055
            </a>
          </div>

          {/* Location */}
          <div className="relative group bg-[#e9e3db] p-8 rounded-xl shadow-lg hover:shadow-2xl transition hover:bg-[#172b1b] hover:text-[#e9e3db]">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-12 h-1 bg-[#172b1b] rounded-full transition-colors duration-300" />
            <MapPin size={40} className="mx-auto mb-4 text-[#172b1b] group-hover:text-[#e9e3db]" />
            <h3 className="text-xl font-semibold mb-2">Visit Us</h3>
            <a
              href="https://www.google.com/maps/place/Qodeon+Labs,+Opposite+PIPS+School,+Gujrat"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#172b1b]/80 group-hover:text-[#e9e3db]/80 transition-colors duration-300"
            >
              Qodeon Labs, Opposite PIPS School, Gujrat
            </a>
          </div>
        </div>

        {/* Contact Form */}
        <div
          ref={formAnim.ref}
          className={`max-w-3xl mx-auto bg-[#172b1b] p-10 rounded-2xl shadow-xl transition-all duration-1000 ease-out ${
            formAnim.visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-2xl md:text-3xl font-bold text-[#e9e3db] mb-6 text-center">
            Send us a Message
          </h2>
          <form className="grid grid-cols-1 gap-6">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-4 rounded-lg border border-[#e9e3db]/30 focus:ring-2 focus:ring-[#e9e3db] outline-none bg-transparent text-[#e9e3db]"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-4 rounded-lg border border-[#e9e3db]/30 focus:ring-2 focus:ring-[#e9e3db] outline-none bg-transparent text-[#e9e3db]"
            />
            <input
              type="text"
              placeholder="Subject"
              className="w-full p-4 rounded-lg border border-[#e9e3db]/30 focus:ring-2 focus:ring-[#e9e3db] outline-none bg-transparent text-[#e9e3db]"
            />
            <textarea
              rows={5}
              placeholder="Your Message"
              className="w-full p-4 rounded-lg border border-[#e9e3db]/30 focus:ring-2 focus:ring-[#e9e3db] outline-none bg-transparent text-[#e9e3db] resize-none"
            ></textarea>
            <button
              type="submit"
              className="bg-[#e9e3db] text-[#172b1b] font-semibold py-3 px-6 rounded-lg hover:bg-[#717552] hover:text-[#e9e3db] transition cursor-pointer"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Extra Content Below Form */}
        <div
          ref={extraAnim.ref}
          className={`max-w-4xl mx-auto mt-16 text-center transition-all duration-1000 ease-out ${
            extraAnim.visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h3 className="text-2xl font-bold text-[#172b1b] mb-4">Why Reach Out to Us?</h3>
          <p className="text-[#172b1b]/80 leading-relaxed mb-6">
            Whether you have a question, want to discuss a project, or simply need guidance, our
            team is here to help. We aim to respond to all queries within <span className="font-semibold">24 hours</span>.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            <div className="bg-[#717552] text-[#e9e3db] p-6 rounded-lg shadow hover:shadow-lg transition">
              <h4 className="font-semibold text-lg mb-2">Quick Response</h4>
              <p className="text-sm text-[#e9e3db]/80">
                We make sure your messages never go unanswered.
              </p>
            </div>
            <div className="bg-[#717552] text-[#e9e3db] p-6 rounded-lg shadow hover:shadow-lg transition">
              <h4 className="font-semibold text-lg mb-2">Friendly Support</h4>
              <p className="text-sm text-[#e9e3db]/80">
                Our team is approachable, professional, and always happy to help.
              </p>
            </div>
            <div className="bg-[#717552] text-[#e9e3db] p-6 rounded-lg shadow hover:shadow-lg transition">
              <h4 className="font-semibold text-lg mb-2">Tailored Solutions</h4>
              <p className="text-sm text-[#e9e3db]/80">
                Every query is handled with care and customized solutions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
