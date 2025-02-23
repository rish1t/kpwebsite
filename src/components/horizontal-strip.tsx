"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export default function Strip() {
  const [images, setImages] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const res = await fetch("https://kpcrud-vj8f.vercel.app/api/links4");
        if (!res.ok) throw new Error("Failed to fetch images");

        const data = await res.json();
        setImages(data.map((item: { imageUrl: string }) => item.imageUrl)); // Extract URLs
      } catch (err) {
        setError((err as Error).message);
      } finally {
        setLoading(false);
      }
    };

    fetchImages();
  }, []);

  return (
    <div className="w-full px-4 py-8 overflow-x-auto">
      {loading && <p className="text-center">Loading images...</p>}
      {error && <p className="text-center text-red-500">{error}</p>}

      {!loading && !error && (
        <div className="flex md:justify-center gap-4 whitespace-nowrap">
          {images.length > 0 ? (
            images.map((src, index) => (
              <div
                key={index}
                className="relative w-[70vw] sm:w-[45vw] md:w-[23vw] aspect-[4/5] shrink-0"
              >
                <Image
                  src={src}
                  alt={`Image ${index + 1}`}
                  fill
                  className="object-cover rounded-xl"
                />
              </div>
            ))
          ) : (
            <p className="text-center w-full">No images available.</p>
          )}
        </div>
      )}
    </div>
  );
}
