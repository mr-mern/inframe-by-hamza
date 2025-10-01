"use client";

import Hero from "./components/HomeHero/hero";
import ImageSlider from "./components/ImageSlider/imageSlider";
import HamzaStory from "./components/HamzaStory/hamzaStory";
import CTA from "./components/CTA/CTA";
import Testimonials from "./Testimonials/page";

export default function Home() {
  return (
    <>
      <Hero />
      <ImageSlider />
      <HamzaStory />
      <Testimonials />
      {/* Call to Action */}
      <CTA
        title="Let's Create Together"
        subtitle="Ready to capture your moments? Contact me today and let&apos;s make memories that last forever."
        buttonText="Book a Session"
        buttonHref="/contact"
      />
    </>
  );
}
