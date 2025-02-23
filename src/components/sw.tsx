import { useEffect, useState } from "react";
import Image from "next/image";

export default function StudentShowcase() {
  const [studentWorks, setStudentWorks] = useState<{ src: string; alt: string }[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const res = await fetch("https://kpcrud-vj8f.vercel.app/api/links3");
        if (!res.ok) throw new Error("Failed to fetch images");

        const data = await res.json();
        setStudentWorks(data.map((item: { imageUrl: string }, index: number) => ({
          src: item.imageUrl,
          alt: `Student work ${index + 1}`
        })));
      } catch (error) {
        console.error("Error fetching images:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchImages();
  }, []);

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

        {loading ? (
          <p className="text-center text-gray-500">Loading images...</p>
        ) : studentWorks.length === 0 ? (
          <p className="text-center text-gray-500">No images found.</p>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
            {studentWorks.map((work, index) => (
              <div
                key={index}
                className={`relative overflow-hidden rounded-lg shadow-sm ${
                  index === 0 ? "sm:col-span-2 sm:row-span-2" : 
                  index === 5 ? "md:col-span-2 md:row-span-2" : 
                  index === 9 ? "md:hidden" : ""
                }`}
              >
                <Image
                  src={work.src || "/placeholder.svg"}
                  alt={work.alt}
                  width={400}
                  height={400}
                  className="w-full h-full object-cover"
                  sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, (max-width: 1024px) 25vw, 20vw"
                />
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
