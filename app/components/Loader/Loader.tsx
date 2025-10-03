"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export default function Loader() {
  const [videoEnded, setVideoEnded] = useState(false);

  return (
    <div className="absolute inset-0 z-10 flex items-center justify-center">
      <AnimatePresence mode="wait">
        {!videoEnded ? (
          <motion.video
            key="video"
            src="/videos/white-transparent.webm"
            autoPlay
            muted
            playsInline
            onEnded={() => setVideoEnded(true)}
            className="w-300 h-300 object-contain"
            initial={{ opacity: 0, scale: 0.2 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          />
        ) : (
          <motion.div
            key="logo"
            initial={{ x: 0, y: 0, scale: 1 }}
            animate={{ 
              y: "-35vh",   // top side move
              scale: 0.6    // thoda shrink
            }}
            transition={{ duration: 1, ease: "easeInOut" }}
          >
            <Image
              src="/images/logos/footer-logo.png"
              alt="Logo"
              width={225}
              height={225}
              className="object-contain"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
