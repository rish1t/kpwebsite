import Image from "next/image"

const studentWorks = [
  {
    src: "https://res.cloudinary.com/dgdf2noqf/image/upload/v1738089326/IMG-20250123-WA0005_cymnir.jpg",
    alt: "Student work 1",
  },
  {
    src: "https://res.cloudinary.com/dgdf2noqf/image/upload/v1738089328/IMG-20250123-WA0012_ya8w8w.jpg",
    alt: "Student work 2",
  },
  {
    src: "https://res.cloudinary.com/dgdf2noqf/image/upload/v1738089328/IMG-20250123-WA0009_kvwwtd.jpg",
    alt: "Student work 3",
  },
  {
    src: "https://res.cloudinary.com/dgdf2noqf/image/upload/v1738089327/IMG-20250123-WA0011_nhtev0.jpg",
    alt: "Student work 4",
  },
  {
    src: "https://res.cloudinary.com/dgdf2noqf/image/upload/v1738089327/IMG-20250123-WA0010_z8rsxy.jpg",
    alt: "Student work 5",
  },
  {
    src: "https://res.cloudinary.com/dgdf2noqf/image/upload/v1738089327/IMG-20250123-WA0007_abkgly.jpg",
    alt: "Student work 6",
  },
  {
    src: "https://res.cloudinary.com/dgdf2noqf/image/upload/v1738089327/IMG-20250123-WA0004_dbeyzi.jpg",
    alt: "Student work 7",
  },
  {
    src: "https://res.cloudinary.com/dgdf2noqf/image/upload/v1738089327/IMG-20250123-WA0008_kc8mcl.jpg",
    alt: "Student work 8",
  },
  {
    src: "https://res.cloudinary.com/dgdf2noqf/image/upload/v1738089326/IMG-20250123-WA0003_bxg45u.jpg",
    alt: "Student work 9",
  },
  {
    src: "https://res.cloudinary.com/dgdf2noqf/image/upload/v1738089326/IMG-20250123-WA0006_gr8nhz.jpg",
    alt: "Student work 10",
  },
]

export default function StudentShowcase() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-light text-center mb-12 tracking-wide uppercase">Student Gallery</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
          {studentWorks.map((work, index) => (
            <div
              key={index}
              className={`relative overflow-hidden rounded-lg shadow-sm ${
                index === 0 ? "sm:col-span-2 sm:row-span-2" : index === 5 ? "md:col-span-2 md:row-span-2" : ""
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
      </div>
    </section>
  )
}

