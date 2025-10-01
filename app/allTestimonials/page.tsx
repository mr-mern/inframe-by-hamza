"use client";

import { useState, useEffect } from "react";
import { User } from "lucide-react";
import { useRouter } from "next/navigation";
import Button from "../components/Button/button";

// ⭐ Default Reviews
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

// ⭐ Star Component
function StarIcon({ filled }: { filled: boolean }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 26 26"
      className={`w-5 h-5 ${filled ? "text-yellow-400" : "text-gray-400"}`}
      fill={filled ? "currentColor" : "none"}
      stroke="currentColor"
      strokeWidth={1.4}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M11.48 3.499l2.125 5.111 5.518.442-4.204 3.602 1.285 5.385-4.725-2.885-4.725 2.885 1.285-5.385-4.204-3.602 5.518-.442z"
      />
    </svg>
  );
}

export default function AllTestimonialsPage() {
  const [reviews, setReviews] = useState(defaultTestimonials);
  const router = useRouter();

  // 🔹 Load reviews from localStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem("reviews");
    if (saved) {
      setReviews([...defaultTestimonials, ...JSON.parse(saved)]);
    }
  }, []);

  return (
    <section className="py-20 bg-[#172b1b] text-[#e9e3db]">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <h1 className="text-3xl font-bold text-center mb-12">All Reviews</h1>

        {/* Reviews Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {reviews.map((review, idx) => (
            <div
              key={idx}
              className="bg-[#e9e3db] text-[#172b1b] rounded-lg shadow-lg p-6 flex flex-col items-center text-center"
            >
              {/* Avatar */}
              <div className="w-16 h-16 mb-4 rounded-full border-2 border-[#717552] flex items-center justify-center bg-[#717552]">
                <User className="text-[#e9e3db] w-8 h-8" />
              </div>

              {/* Review Text */}
              <p className="mb-4">&ldquo;{review.text}&rdquo;</p>

              {/* Footer Box */}
              <div className="bg-[#172b1b] text-[#e9e3db] rounded-lg px-4 py-2 mt-auto w-full flex flex-col items-center justify-center">
                <h3 className="font-semibold text-lg">{review.name}</h3>
                <span className="text-[#e9e3db]/80 text-sm">
                  {review.role}
                </span>
                <div className="flex mt-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <StarIcon key={star} filled={star <= review.rating} />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Go Back Button */}
        <div className="flex justify-center">
          <Button
            label="← Go Back"
            onClick={() => router.back()}
            className="px-6 py-3 bg-[#e9e3db] text-[#172b1b] hover:bg-[#717552] hover:text-[#e9e3db]"
          />
        </div>
      </div>
    </section>
  );
}
