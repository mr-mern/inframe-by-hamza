'use client';
import { useEffect, useState, useRef } from 'react';
import { usePathname } from 'next/navigation';

export default function Greeting() {
  const pathname = usePathname();
  const [greeting, setGreeting] = useState('');
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const hours = new Date().getHours();
    let msg = '';

    if (hours >= 5 && hours < 12) {
      msg = 'Good Morning';
    } else if (hours >= 12 && hours < 18) {
      msg = 'Good Afternoon';
    } else if (hours >= 18 && hours < 21) {
      msg = 'Good Evening';
    } else {
      msg = 'Good Night';
    }

    setGreeting(msg);
  }, []);

  // Intersection Observer: trigger every time it scrolls into view
  useEffect(() => {
    if (!ref.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold: 0.2 }
    );
    observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  if (pathname !== '/') return null;

  return (
    <div ref={ref} className="absolute top-20 sm:top-[80px] right-2 sm:right-2 flex flex-col items-center gap-2 z-40 overflow-hidden">
      {/* Main Greeting Box */}
      <div
        className={`bg-[#e9e3db] text-[#172b1b] rounded-lg shadow-lg p-4 w-36 sm:w-40 flex flex-col items-center transition-all duration-700 transform ${
          visible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'
        }`}
      >
        <span className="text-sm sm:text-base font-semibold uppercase tracking-wider">
          {greeting.split(' ')[0]}
        </span>
        <span className="text-base sm:text-2xl font-bold leading-none text-center">
          {greeting.split(' ')[1]}!
        </span>
      </div>

      {/* Optional Tag / Label */}
      <div
        className={`bg-[#717552] text-[#e9e3db] rounded-md shadow-md px-3 py-1 w-36 sm:w-40 flex justify-center items-center transition-all duration-700 transform ${
          visible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'
        }`}
      >
        <span className="text-xs sm:text-sm font-medium uppercase tracking-wide text-center">
          Welcome
        </span>
      </div>
    </div>
  );
}
