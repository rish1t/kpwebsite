"use client";

import { useState, useEffect, useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";
import Avatar from "boring-avatars";

interface Testimonial {
  id: string;
  username: string;
  rating: number;
  time: string;
  text: string;
}

export default function ReviewsScroller() {
  const [reviews, setReviews] = useState<Testimonial[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const containerRef = useRef<HTMLDivElement>(null);
  const scrollerRef = useRef<HTMLDivElement>(null);
  const scrollPositionRef = useRef(0);
  const animationRef = useRef<number | null>(null);
  const [isPaused, setIsPaused] = useState<boolean>(false);

  // Fetch Reviews
  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const res = await fetch("https://kpcrud-vj8f.vercel.app/api/links6"); // <-- Replace with your actual API endpoint
        if (!res.ok) throw new Error("Failed to fetch reviews");

        const data = await res.json();
        setReviews(data); // Assumes API returns an array of review objects
      } catch (err) {
        setError((err as Error).message);
      } finally {
        setLoading(false);
      }
    };

    fetchReviews();
  }, []);

  // Infinite scroll logic
  useEffect(() => {
    const scrollContent = scrollerRef.current;
    if (!scrollContent || loading || error || reviews.length === 0) return;

    const speed = 0.5; // pixels per frame

    const animateScroll = () => {
      if (!scrollContent) return;

      if (!isPaused) {
        scrollPositionRef.current += speed;

        const scrollWidth = scrollContent.scrollWidth / 2;
        if (scrollPositionRef.current >= scrollWidth) {
          scrollPositionRef.current = 0;
        }

        scrollContent.style.transform = `translateX(-${scrollPositionRef.current}px)`;
      }

      animationRef.current = requestAnimationFrame(animateScroll);
    };

    animationRef.current = requestAnimationFrame(animateScroll);

    return () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
    };
  }, [loading, error, reviews.length, isPaused]);

  // Duplicate reviews for infinite scroll
  const displayReviews = [...reviews, ...reviews];

  return (
    <div className="w-full bg-gray-50 py-16 min-h-fit">
      <h2 className="text-3xl font-medium text-center mb-10 text-gray-800">
        Customer Testimonials
      </h2>

      {loading && <p className="text-center">Loading reviews...</p>}
      {error && <p className="text-center text-red-500">{error}</p>}

      {!loading && !error && (
        <div
          ref={containerRef}
          className="w-full overflow-hidden p-4"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={() => setIsPaused(true)}
          onTouchEnd={() => setIsPaused(false)}
        >
          <div
            ref={scrollerRef}
            className="flex p-3"
            style={{ willChange: "transform" }}
          >
            {displayReviews.map((review: Testimonial, index: number) => (
              <Card
                key={`${review.id}-${index}`}
                className="flex-shrink-0 w-[320px] mx-3 transition-all duration-300 hover:shadow-md bg-white border-none"
              >
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <Avatar
                      size={40}
                      name={review.username}
                      variant="beam"
                    />
                    <div className="flex-1">
                      <h3 className="font-medium text-base text-gray-800">
                        {review.username}
                      </h3>
                      <div className="flex items-center gap-2">
                        <div className="flex">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              size={14}
                              className={`${
                                i < review.rating
                                  ? "text-gray-800 fill-gray-800"
                                  : "text-gray-300 fill-gray-300"
                              }`}
                            />
                          ))}
                        </div>
                        <span className="text-xs text-gray-500">
                          {review.time}
                        </span>
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed mt-5">
                    {review.text}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
