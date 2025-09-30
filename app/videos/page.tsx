"use client";

import Image from "next/image";
import Button from "../components/Button/page";
import { PlayCircle } from "lucide-react";

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
  return (
    <section className="bg-[#f5f3ef] text-[#172b1b] min-h-screen">
      {/* Hero Section */}
      <div className="relative h-[90vh] flex items-center justify-center text-center">
        <div className="absolute inset-0">
          <Image
            src="/images/videosPage/banner.jpg"
            alt="Videos Banner"
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
        </div>
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 px-6">
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
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {videos.map((video) => (
            <div
              key={video.id}
              className="bg-[#e9e3db] rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition group"
            >
              {/* Video Thumbnail with Overlay */}
              <div className="relative w-full h-56 md:h-64 overflow-hidden">
                <Image
                  src={video.thumbnail}
                  alt={video.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, 
                         (max-width: 1200px) 50vw, 
                         33vw"
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
        <div className="mt-20 text-center">
          <Button
            href="/all-videos"
            label="View All Videos"
            className="text-[#e9e3db] py-3"
          />
        </div>
      </div>
    </section>
  );
}
