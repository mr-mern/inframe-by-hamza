"use client";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  titleColor?: string;
  lineColor?: string;
  subtitleColor?: string;
}

export default function SectionHeading({
  title,
  subtitle,
  align = "center",
  titleColor = "#172b1b",
  lineColor = "#717552",
  subtitleColor = "#717552",
}: SectionHeadingProps) {
  return (
    <div
      className={`mb-14 ${align === "center" ? "text-center" : "text-left"}`}
    >
      <h2
        className="text-3xl md:text-4xl font-bold tracking-tight"
        style={{ color: titleColor }}
      >
        {title}
        <span
          className={`block w-20 h-1 mt-3 rounded-full ${
            align === "center" ? "mx-auto" : ""
          }`}
          style={{ backgroundColor: lineColor }}
        ></span>
      </h2>
      {subtitle && (
        <p
          className="mt-4 text-lg md:text-xl"
          style={{ color: subtitleColor }}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
