"use client"

import { useEffect, useState, useRef } from "react"
import Image from "next/image"

export default function StudentShowcase() {
  const [images, setImages] = useState<{ src: string; alt: string }[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const [isPaused, setIsPaused] = useState(false)
  const animationRef = useRef<number | null>(null)

  // Fetch Images
  useEffect(() => {
    const fetchImages = async () => {
      try {
        const res = await fetch("https://kpcrud-vj8f.vercel.app/api/links3")
        if (!res.ok) throw new Error("Failed to fetch images")

        const data = await res.json()
        setImages(
          data.map((item: { imageUrl: string }, index: number) => ({
            src: item.imageUrl,
            alt: `Student work ${index + 1}`,
          }))
        )
      } catch (error) {
        console.error("Error fetching images:", error)
        setError("Error fetching images")
      } finally {
        setLoading(false)
      }
    }

    fetchImages()
  }, [])

  const scrollPositionRef = useRef(0); // Add this at the top with other refs

// Auto-scroll logic
useEffect(() => {
  const scrollContainer = scrollContainerRef.current;
  if (!scrollContainer || loading || error || images.length === 0) return;

  let speed = 0.5; // pixels per frame

  const animateScroll = () => {
    if (!scrollContainer) return;

    if (!isPaused) {
      scrollPositionRef.current += speed;

      // If we've scrolled past the first set of images, reset to the start
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


  const displayImages = [...images, ...images] // duplicate for infinite scroll

  return (
    <section className="py-16 w-full">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8 md:mb-12">
          <span className="text-sm font-semibold px-3 py-1 border border-gray-300 rounded-full">
            STUDENTS&apos; GALLERY
          </span>
        </div>

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-9">
          Crafting Beauty: <br /> A Gallery of Student Excellence
        </h2>

        <div
          className="overflow-hidden"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={() => setIsPaused(true)}
          onTouchEnd={() => setIsPaused(false)}
        >
          {loading && <p className="text-center py-8">Loading images...</p>}
          {error && <p className="text-center text-red-500 py-8">{error}</p>}

          {!loading && !error && (
            <div
              ref={scrollContainerRef}
              className="flex gap-4 py-2 md:p-0 p-3 whitespace-nowrap overflow-x-scroll scrollbar-hide"
              style={{
                scrollBehavior: "auto",
                scrollbarWidth: "none",
                msOverflowStyle: "none",
              }}
            >
              {displayImages.map(({ src, alt }, index) => (
                <div
                  key={index}
                  className="relative w-[70vw] sm:w-[45vw] md:w-[23vw] aspect-[4/5] shrink-0"
                >
                  <Image
                    src={src || "/placeholder.svg"}
                    alt={alt}
                    fill
                    className="object-cover rounded-xl"
                  />
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
