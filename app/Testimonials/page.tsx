"use client";

import { useState, useEffect, useRef } from "react";
import { User } from "lucide-react";
import SectionHeading from "../components/SectionHeading/heading";
import Button from "../components/Button/button";

const defaultTestimonials = [
  {
    name: "Sarah Khan",
    role: "Bride",
    text: "Working with this team was an absolute pleasure. They captured our wedding perfectly and made the whole experience so memorable!",
    rating: 5,
  },
  {
    name: "Ali Raza",
    role: "Family Client",
    text: "Amazing experience! The photos were vibrant, natural, and full of life. Highly recommend their services.",
    rating: 4,
  },
  {
    name: "Hina Malik",
    role: "Portrait Client",
    text: "I loved my portrait session. The team made me feel comfortable and the results were stunning.",
    rating: 5,
  },
  {
    name: "David Lee",
    role: "Travel Client",
    text: "Professional, creative, and fun! The travel photos turned out even better than I imagined.",
    rating: 4,
  },
];

function StarIcon({
  filled,
  size = "w-6 h-6",
}: {
  filled: boolean;
  size?: string;
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 26 26"
      className={`${size} ${filled ? "text-yellow-400" : "text-gray-400"}`}
      fill={filled ? "currentColor" : "none"}
      stroke="currentColor"
      strokeWidth={1.4}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M11.48 3.499a.562.562 0 011.04 0l2.125 
        5.111a.563.563 0 00.475.345l5.518.442c.497.04.697.663.321.988l-4.204 
        3.602a.563.563 0 00-.182.557l1.285 
        5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 
        0 00-.586 0L6.494 20.54a.562.562 0 
        01-.84-.61l1.285-5.385a.563.563 0 
        00-.182-.557L2.553 10.385a.563.563 
        0 01.321-.988l5.518-.442a.563.563 
        0 00.475-.345L11.48 3.5z"
      />
    </svg>
  );
}

export default function Testimonials() {
  const [testimonials, setTestimonials] = useState(defaultTestimonials);
  const [formData, setFormData] = useState({
    name: "",
    role: "",
    text: "",
    rating: 0,
  });
  const [hoverRating, setHoverRating] = useState(0);

  // 👇 animation state
  const [inView, setInView] = useState(false);
  const sectionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const saved = localStorage.getItem("reviews");
    if (saved) {
      setTestimonials(JSON.parse(saved));
    }
  }, []);

  const saveReviews = (reviews: typeof testimonials) => {
    setTestimonials(reviews);
    localStorage.setItem("reviews", JSON.stringify(reviews));
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleRating = (value: number) => {
    setFormData({ ...formData, rating: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (
      formData.name &&
      formData.role &&
      formData.text &&
      formData.rating > 0
    ) {
      const newReviews = [...testimonials, formData];
      saveReviews(newReviews);
      setFormData({ name: "", role: "", text: "", rating: 0 });
      setHoverRating(0);
    }
  };

  // 👇 Intersection Observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-20 bg-[#e9e3db] overflow-hidden"
    >
      <div
        className={`container mx-auto px-4 transition-all duration-1000 ease-out
        ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}
      `}
      >
        {/* Section Heading */}
        <SectionHeading title="What Our Clients Say" align="center" />

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mt-12">
          {testimonials.slice(0, 4).map((testimonial, idx) => (
            <div
              key={idx}
              className={`bg-[#172b1b] text-[#e9e3db] rounded-lg shadow-lg flex flex-col items-center text-center p-6
                transition-all duration-700 ease-out
                ${inView ? "opacity-100 scale-100" : "opacity-0 scale-90"}
              `}
              style={{ transitionDelay: `${idx * 150}ms` }} // stagger effect
            >
              {/* User Icon */}
              <div className="w-20 h-20 mb-4 rounded-full overflow-hidden border-2 border-[#717552] flex items-center justify-center bg-[#717552]">
                <User className="text-[#e9e3db] w-10 h-10" />
              </div>

              {/* Testimonial Text */}
              <p className="text-sm md:text-base mb-4 flex-1">
                &ldquo;{testimonial.text}&rdquo;
              </p>

              {/* Rating */}
              <div className="flex mb-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <StarIcon key={star} filled={star <= testimonial.rating} />
                ))}
              </div>

              {/* Name & Role */}
              <div className="bg-[#e9e3db] text-[#172b1b] rounded-lg px-4 py-2 mt-auto w-full flex flex-col items-center justify-center">
                <h3 className="font-semibold text-lg">{testimonial.name}</h3>
                <span className="text-[#717552] text-sm cursor-pointer ">
                  {testimonial.role}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* View All Reviews Button */}
        <div className="flex justify-center mt-8">
          <Button
            href="/allTestimonials"
            label="View All Reviews"
            className="py-3"
          />
        </div>

        {/* Submit Review Form */}
        <div className="mt-20 max-w-5xl mx-auto bg-gradient-to-r from-[#172b1b] to-[#1f3525] rounded-2xl shadow-xl overflow-hidden">
          <div className="grid md:grid-cols-2">
            {/* Left Info */}
            <div className="p-10 flex flex-col justify-center bg-[#717552]/20">
              <h2 className="text-3xl font-bold text-[#e9e3db] mb-4">
                We Value Your Feedback
              </h2>
              <p className="text-[#e9e3db]/80 mb-6">
                Your words inspire us to keep creating beautiful memories. Share
                your experience and let others know how we did!
              </p>
              <div className="flex gap-2 text-yellow-400 text-3xl">
                ★ ★ ★ ★ ★
              </div>
            </div>

            {/* Right Form */}
            <div className="p-10">
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full p-3 rounded-md bg-[#e9e3db] text-[#172b1b] placeholder-[#172b1b]/70 focus:outline-none focus:ring-2 focus:ring-[#717252]"
                  required
                />
                <input
                  type="text"
                  name="role"
                  placeholder="Your Role (e.g. Bride, Family)"
                  value={formData.role}
                  onChange={handleChange}
                  className="w-full p-3 rounded-md bg-[#e9e3db] text-[#172b1b] placeholder-[#172b1b]/70 focus:outline-none focus:ring-2 focus:ring-[#717252]"
                  required
                />
                <textarea
                  name="text"
                  placeholder="Your Review"
                  value={formData.text}
                  onChange={handleChange}
                  rows={4}
                  className="w-full p-3 rounded-md bg-[#e9e3db] text-[#172b1b] placeholder-[#172b1b]/70 focus:outline-none focus:ring-2 focus:ring-[#717252] resize-none"
                  required
                ></textarea>

                {/* Star Rating Input */}
                <div className="flex justify-center gap-3">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <span
                      key={star}
                      onMouseEnter={() => setHoverRating(star)}
                      onMouseLeave={() => setHoverRating(0)}
                      onClick={() => handleRating(star)}
                      className="cursor-pointer transform transition-transform hover:scale-125"
                    >
                      <StarIcon
                        filled={star <= (hoverRating || formData.rating)}
                        size="w-9 h-9"
                      />
                    </span>
                  ))}
                </div>

                <Button
                  type="submit"
                  label="Submit Review"
                  className="bg-[#717552] hover:bg-[#e9e3db] hover:text-[#172b1b]"
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
