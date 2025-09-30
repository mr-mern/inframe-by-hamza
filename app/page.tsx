"use client";

import Hero from "./components/HomeHero/page";
import ImageSlider from "./components/ImageSlider/page";
import HamzaStory from "./components/HamzaStory/page";
import CTA from "./components/CTA/page";
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
        subtitle="Ready to capture your moments? Contact me today and let’s make memories that last forever."
        buttonText="Book a Session"
        buttonHref="/contact"
      />
    </>
  );
}
