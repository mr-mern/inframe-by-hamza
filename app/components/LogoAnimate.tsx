"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function LogoAnimate() {
  const pathname = usePathname();
  const [key, setKey] = useState(0);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    setKey((prev) => prev + 1);
    setHidden(false);
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    const hero = document.getElementById("hero");
    if (!hero) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setHidden(!entry.isIntersecting);
      },
      { threshold: 0.6 }
    );

    observer.observe(hero);
    return () => observer.disconnect();
  }, []);

  return (
    <motion.div
      key={key}
      initial={{ y: -100, opacity: 0, scale: 0.2 }}
      animate={{
        y: hidden ? -80 : 150,
        opacity: hidden ? 0 : 1,
        scale: hidden ? 0.4 : 1,
      }}
      transition={{
        duration: 0.9,
        ease: [0.25, 0.8, 0.25, 1],
      }}
      className="fixed top-[80px] left-1/2 -translate-x-1/2 z-[60] flex justify-center items-center pointer-events-none"
    >
      <Image
        src="/images/logos/footer-logo.png"
        alt="Logo"
        width={150}
        height={150}
        className="object-contain"
      />
    </motion.div>
  );
}
