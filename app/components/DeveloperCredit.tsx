"use client";

import { useState, useRef, useEffect } from "react";

export default function DeveloperCredit() {
  const [showIntro, setShowIntro] = useState(false);
  const popupRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  // Close popup when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        popupRef.current &&
        !popupRef.current.contains(event.target as Node) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        setShowIntro(false);
      }
    }

    if (showIntro) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showIntro]);

  return (
    <div className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-50">
      {/* Button/Icon */}
      <button
        ref={buttonRef}
        onClick={() => setShowIntro(!showIntro)}
        className="bg-[#172b1b] text-[#e9e3db] p-3 rounded-full shadow-lg hover:bg-[#717552] transition cursor-pointer"
        title="Click to see developer info"
      >
        💻
      </button>

      {/* Pop-up Intro */}
      {showIntro && (
        <div
          ref={popupRef}
          className="mt-2 bg-[#e9e3db] text-[#172b1b] rounded-xl shadow-lg p-4 w-64 text-sm md:text-base animate-slideUp"
        >
          <p>
            Hello! I am <strong>Abdul Rehman</strong>, a front-end developer
            specializing in modern, responsive websites.
          </p>
        </div>
      )}

      {/* Animation */}
      <style jsx>{`
        .animate-slideUp {
          animation: slideUp 0.3s ease forwards;
        }
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}
