"use client";

import { useState, useEffect } from "react";
import { User, Star, MessageSquareHeart } from "lucide-react";
import { useRouter } from "next/navigation";
import Button from "../components/Button/button";

//  Default Reviews
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
  const [currentPage, setCurrentPage] = useState(1);
  const reviewsPerPage = 6;
  const router = useRouter();

  useEffect(() => {
    const saved = localStorage.getItem("reviews");
    if (saved) {
      setReviews([...defaultTestimonials, ...JSON.parse(saved)]);
    }
  }, []);

  // Pagination logic
  const totalPages = Math.ceil(reviews.length / reviewsPerPage);
  const startIndex = (currentPage - 1) * reviewsPerPage;
  const currentReviews = reviews.slice(startIndex, startIndex + reviewsPerPage);

  // ⭐ Average rating
  const averageRating =
    reviews.length > 0
      ? reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length
      : 0;

  return (
    <>
      {/* Dark Main Section */}
      <section className="py-20 bg-[#172b1b] text-[#e9e3db]">
        <div className="container mx-auto px-4">
          {/* Heading */}
          <h1 className="text-3xl font-bold text-center mb-12">All Reviews</h1>

          {/* Reviews Grid */}
          {currentReviews.length === 0 ? (
            <p className="text-center text-lg">No reviews yet.</p>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              {currentReviews.map((review, idx) => (
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
          )}

          {/* ⭐ Overall Rating */}
          {reviews.length > 0 && (
            <div className="text-center mb-12">
              <p className="text-lg font-medium">Overall Rating</p>
              <div className="flex justify-center mt-2">
                {[1, 2, 3, 4, 5].map((star) => (
                  <StarIcon
                    key={star}
                    filled={star <= Math.round(averageRating)}
                  />
                ))}
              </div>
              <p className="text-sm mt-1">
                {averageRating.toFixed(1)} / 5 ({reviews.length} reviews)
              </p>
            </div>
          )}

          {/* Pagination Controls */}
          <div className="flex justify-center gap-4 mb-8">
            <Button
              label="Previous"
              onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
              className={`w-28 py-2 bg-[#e9e3db] text-[#172b1b] font-medium hover:bg-[#717552] hover:text-[#e9e3db] ${
                currentPage === 1 ? "opacity-50 cursor-not-allowed" : ""
              }`}
              disabled={currentPage === 1}
            />
            <span className="self-center">
              Page {currentPage} of {totalPages}
            </span>
            <Button
              label="Next"
              onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
              className={`w-28 py-2 bg-[#e9e3db] text-[#172b1b] font-medium hover:bg-[#717552] hover:text-[#e9e3db] ${
                currentPage === totalPages
                  ? "opacity-50 cursor-not-allowed"
                  : ""
              }`}
              disabled={currentPage === totalPages}
            />
          </div>

          {/* Action Buttons */}
          <div className="flex justify-center gap-4">
            <Button
              label="Go Back"
              onClick={() => router.back()}
              className="w-32 py-3 bg-[#e9e3db] text-[#172b1b] hover:bg-[#717552] hover:text-[#e9e3db]"
            />
          </div>
        </div>
      </section>

      {/* 🔹 Light Section */}
      <section className="py-16 bg-[#e9e3db] text-[#172b1b]">
        <div className="container mx-auto px-6 md:px-12 text-center">
          <h2 className="text-2xl font-bold mb-6">Why Our Clients Love Us</h2>

          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div className="p-6 rounded-lg shadow-md bg-white">
              <Star className="w-8 h-8 text-yellow-500 mx-auto mb-3" />
              <h3 className="font-semibold text-lg">Trusted Quality</h3>
              <p className="text-sm text-gray-600 mt-2">
                Delivering premium quality services with consistent 5⭐ reviews.
              </p>
            </div>
            <div className="p-6 rounded-lg shadow-md bg-white">
              <MessageSquareHeart className="w-8 h-8 text-pink-600 mx-auto mb-3" />
              <h3 className="font-semibold text-lg">Happy Clients</h3>
              <p className="text-sm text-gray-600 mt-2">
                Thousands of smiles captured & memories cherished forever.
              </p>
            </div>
            <div className="p-6 rounded-lg shadow-md bg-white">
              <User className="w-8 h-8 text-green-600 mx-auto mb-3" />
              <h3 className="font-semibold text-lg">Personalized Service</h3>
              <p className="text-sm text-gray-600 mt-2">
                Every client is unique & we tailor our work for your story.
              </p>
            </div>
          </div>

          <Button
            label="Write a Review"
            onClick={() => router.push("/Testimonials")}
            className="add-review px-6 py-3 bg-[#717552] text-[#e9e3db]"
          />
        </div>
      </section>
    </>
  );
}
