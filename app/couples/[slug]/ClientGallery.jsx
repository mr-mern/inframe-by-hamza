// ClientGallery.jsx
"use client";
import Image from "next/image";
import { useRef, useState, useEffect } from "react";

function useInView(threshold = 0.2) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!ref.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold }
    );
    observer.observe(ref.current);

    return () => observer.disconnect();
  }, [threshold]);

  return { ref, visible };
}

export default function ClientGallery({ images, alt }) {
  const refs = images.map(() => useInView(0.2));
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {images.map((img, idx) => {
        const { ref, visible } = refs[idx];
        return (
          <div
            key={idx}
            ref={ref}
            className={`group relative overflow-hidden rounded-xl shadow-lg transform transition-all duration-700 ease-out ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <Image
              src={img}
              alt={alt}
              width={500}
              height={400}
              className="rounded-xl object-cover w-full h-72 transform group-hover:scale-110 transition duration-700"
            />
          </div>
        );
      })}
    </div>
  );
}
