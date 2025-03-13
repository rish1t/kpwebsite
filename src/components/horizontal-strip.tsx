"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";

export default function Strip() {
  const [images, setImages] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);
  const animationRef = useRef<number | null>(null);

  // Fetch Images
  useEffect(() => {
    const fetchImages = async () => {
      try {
        const res = await fetch("https://kpcrud-vj8f.vercel.app/api/links4");
        if (!res.ok) throw new Error("Failed to fetch images");

        const data = await res.json();
        setImages(data.map((item: { imageUrl: string }) => item.imageUrl));
      } catch (err) {
        setError((err as Error).message);
      } finally {
        setLoading(false);
      }
    };

    fetchImages();
  }, []);

  // Add this ref at the top with the other refs
const scrollPositionRef = useRef(0);

// Inside the useEffect
useEffect(() => {
  const scrollContainer = scrollContainerRef.current;
  if (!scrollContainer || loading || error || images.length === 0) return;

  const speed = 0.5; // pixels per frame

  const animateScroll = () => {
    if (!scrollContainer) return;

    if (!isPaused) {
      scrollPositionRef.current += speed;

      // Reset position for infinite scroll effect
      if (scrollPositionRef.current >= scrollContainer.scrollWidth / 2) {
        scrollPositionRef.current = 0;
      }

      scrollContainer.scrollLeft = scrollPositionRef.current;
    }

    animationRef.current = requestAnimationFrame(animateScroll);
  };

  animationRef.current = requestAnimationFrame(animateScroll);

  return () => {
    if (animationRef.current) cancelAnimationFrame(animationRef.current);
  };
}, [loading, error, images.length, isPaused]);


  // Duplicate images for infinite scroll effect
  const displayImages = [...images, ...images];

  return (
    <div className="w-full px-4 py-8 overflow-hidden">
      {loading && <p className="text-center">Loading images...</p>}
      {error && <p className="text-center text-red-500">{error}</p>}

      {!loading && !error && (
        <div
          ref={scrollContainerRef}
          className="flex gap-4 whitespace-nowrap overflow-x-scroll scrollbar-hide"
          style={{
            scrollBehavior: "auto",
            scrollbarWidth: "none",
            msOverflowStyle: "none",
          }}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={() => setIsPaused(true)}
          onTouchEnd={() => setIsPaused(false)}
        >
          {displayImages.map((src, index) => (
            <div
              key={index}
              className="relative w-[70vw] sm:w-[45vw] md:w-[23vw] aspect-[4/5] shrink-0"
            >
              <Image
                src={src || "/placeholder.svg"}
                alt={`Image ${index + 1}`}
                fill
                className="object-cover rounded-xl"
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
