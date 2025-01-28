import Image from "next/image"
import hero from "./../../public/hs2.jpg"
import hero1 from "./../../public/hs1.jpg"

export default function Strip() {
  const images = [hero, hero1, hero, hero1]

  return (
    <div className="w-full px-4 py-8">
      <div className="flex flex-wrap justify-center sm:justify-around gap-2">
        {images.map((src, index) => (
          <div key={index} className="relative w-full sm:w-[45%] md:w-[23%] aspect-[4/5]">
            <Image
              src={src || "/placeholder.svg"}
              alt={`Image ${index + 1}`}
              fill
              className="object-cover rounded-xl"
            />
          </div>
        ))}
      </div>
    </div>
  )
}

