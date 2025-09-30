"use client";

import React from "react";

interface SpacingProps {
  lg?: number | string;
  md?: number | string;
}

export default function Spacing({ lg = 80, md = 60 }: SpacingProps) {
  return (
    <>
      {/* Desktop / Tablet (>=768px) */}
      <div
        style={{
          height: typeof lg === "number" ? `${lg}px` : lg,
        }}
        className="hidden md:block"
      />
      {/* Mobile (<768px) */}
      <div
        style={{
          height: typeof md === "number" ? `${md}px` : md,
        }}
        className="block md:hidden"
      />
    </>
  );
}
