import Image from "next/image";
import hero from "./../../public/hs2.jpg";
import hero1 from "./../../public/hs1.jpg";

export default function Strip() {
  const images = [hero, hero1, hero, hero1];

  return (
    <div className="w-full px-4 py-8 overflow-x-auto">
      <div className="flex md:justify-center gap-4 whitespace-nowrap">
        {images.map((src, index) => (
          <div key={index} className="relative w-[70vw] sm:w-[45vw] md:w-[23vw] aspect-[4/5] shrink-0">
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
  );
}
