"use client";

import Image from "next/image";
import Button from "../components/Button/button";
import { PlayCircle } from "lucide-react";
import { useEffect, useRef, useState } from "react";

// Intersection Observer Hook
function useInView(threshold = 0.2) {
  const ref = useRef<HTMLDivElement | null>(null);
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

const videos = [
  {
    id: 1,
    title: "Wedding Highlight",
    description: "A glimpse of magical wedding moments.",
    url: "https://www.youtube.com/embed/ScMzIvxBSi4",
    thumbnail: "/images/videosPage/wedding-6.jpg",
  },
  {
    id: 2,
    title: "Event Coverage",
    description: "Capturing the essence of corporate and social events.",
    url: "https://www.youtube.com/embed/ysz5S6PUM-U",
    thumbnail: "/images/videosPage/banner.jpg",
  },
  {
    id: 3,
    title: "Portrait Session",
    description: "Personalized portrait photography experience.",
    url: "https://www.youtube.com/embed/jfKfPfyJRdk",
    thumbnail: "/images/videosPage/portrait-3.jpg",
  },
];

export default function VideosPage() {
  const heroAnim = useInView(0.3);
  const gridAnim = useInView(0.3);
  const buttonAnim = useInView(0.3);

  return (
    <section className="bg-[#f5f3ef] text-[#172b1b] min-h-screen">
      {/* Hero Section */}
      <div className="relative h-[90vh] flex items-center justify-center text-center overflow-hidden">
        <Image
          src="/images/videosPage/banner.jpg"
          alt="Videos Banner"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />

        <div
          ref={heroAnim.ref}
          className={`relative z-10 px-6 transition-all duration-1000 ${
            heroAnim.visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h1 className="text-4xl md:text-6xl font-bold text-[#e9e3db]">
            Our Videos
          </h1>
          <p className="mt-4 text-lg md:text-xl text-[#e9e3db]/90 max-w-2xl mx-auto">
            Experience our work through stunning video highlights.
          </p>
        </div>
      </div>

      {/* Videos Grid */}
      <div className="container mx-auto px-6 md:px-12 py-20">
        <div
          ref={gridAnim.ref}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 mb-10"
        >
          {videos.map((video, idx) => (
            <div
              key={video.id}
              className={`bg-[#e9e3db] rounded-xl overflow-hidden shadow-lg hover:shadow-2xl group cursor-pointer transform transition-all duration-700 ease-out ${
                gridAnim.visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${idx * 150}ms` }}
            >
              {/* Video Thumbnail with Overlay */}
              <div className="relative w-full h-56 md:h-64 overflow-hidden">
                <Image
                  src={video.thumbnail}
                  alt={video.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <a
                  href={video.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 group-hover:opacity-100 transition"
                >
                  <PlayCircle
                    size={64}
                    className="text-[#e9e3db] drop-shadow-lg"
                  />
                </a>
              </div>

              {/* Content */}
              <div className="p-6 text-center">
                <h3 className="text-xl font-semibold mb-2">{video.title}</h3>
                <p className="text-[#172b1b]/80 text-sm">{video.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* View All Videos Button */}
        <div
          ref={buttonAnim.ref}
          className={`mt-20 text-center transition-all duration-1000 ${
            buttonAnim.visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="inline-block transform transition-transform duration-300 hover:scale-105">
            <Button
              href="/all-videos"
              label="View All Videos"
              className="text-[#e9e3db] py-3"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
