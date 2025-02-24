"use client"

import { useEffect, useState } from "react"
import Image from "next/image"

export default function StudentShowcase() {
  const [images, setImages] = useState<{ src: string; alt: string }[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

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

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8 md:mb-12">
          <span className="text-sm font-semibold px-3 py-1 border border-gray-300 rounded-full">
            STUDENTS&apos; GALLERY
          </span>
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-9">
          Crafting Beauty: <br /> A Gallery of Student Excellence
        </h2>

        <div className="relative">
          {loading && <p className="text-center py-8">Loading images...</p>}
          {error && <p className="text-center text-red-500 py-8">{error}</p>}

          {!loading && !error && (
            <div className="flex gap-4 overflow-x-auto pb-4 min-w-full snap-x snap-mandatory scroll-smooth scrollbar-hide">
              {images.length > 0 ? (
                images.map((image, index) => (
                  <div key={index} className="relative w-[250px] h-[312px] shrink-0 snap-start">
                    <Image
                      src={image.src || "/placeholder.svg"}
                      alt={image.alt}
                      fill
                      className="object-cover rounded-xl"
                    />
                  </div>
                ))
              ) : (
                <p className="text-center w-full py-8">No images available.</p>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
