import { useEffect, useState } from "react";
import Image from "next/image";

export default function PosterGrid() {
  const [imageFiles, setImageFiles] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const res = await fetch("https://kpcrud-vj8f.vercel.app/api/links5");
        if (!res.ok) throw new Error("Failed to fetch images");

        const data = await res.json();
        setImageFiles(data.map((item: { imageUrl: string }) => item.imageUrl));
      } catch (error) {
        console.error("Error fetching images:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchImages();
  }, []);

  return (
    <main className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8 md:mb-12">
        <span className="text-sm font-semibold px-3 py-1 border border-gray-300 rounded-full">
          OUR COURSES
        </span>
      </div>
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-9">
        Master the Art of Beauty <br /> with Our Courses
      </h2>

      {loading ? (
        <p className="text-center text-gray-500">Loading images...</p>
      ) : imageFiles.length === 0 ? (
        <p className="text-center text-gray-500">No images found.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {imageFiles.map((file, index) => (
            <div key={index} className="aspect-square relative overflow-hidden rounded-lg">
              <Image
                src={file}
                alt={`Course image ${index + 1}`}
                fill
                sizes="(min-width: 1024px) 25vw, (min-width: 768px) 33vw, (min-width: 640px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
          ))}
        </div>
      )}
    </main>
  );
}
