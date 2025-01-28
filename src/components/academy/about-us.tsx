import Image from "next/image"
import sonam from "./../../../public/sonam.jpg"

export default function AboutUs() {
  return (
    <div className="container mx-auto px-4 py-12 md:py-16 lg:py-20">
      <div className="flex justify-between items-center mb-8 md:mb-12">
        <span className="text-sm font-semibold px-3 py-1 border border-gray-300 rounded-full">ABOUT</span>
      </div>
      <div className="grid md:grid-cols-2 gap-12 items-start">
        <div className="space-y-8">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
            Elevating Beauty Education and Artistry
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 mb-6">
            Kaya Planet Academy, an IAF certified institution, offers comprehensive courses in makeup, hair, lashes,
            nails, and skin care. Our expert curriculum integrates knowledge from international beauty brands, equipping
            you with the latest trends and techniques. With skilled educators and hands-on experience, we&apos;re dedicated
            to helping you discover your potential and start a successful career in beauty.
          </p>
          <p className="text-lg sm:text-xl text-gray-600">
            Our salon has earned numerous accolades, collaborating with celebrity hairstylists like Ritika Kadam and
            Ojas Rajani, and receiving guidance from Parul Garg. We&apos;ve styled celebrities such as Mahi Vij and Sonam
            Kapoor, along with many influencers. Honored as the Best Bridal Makeup Artist in Delhi in 2018 and
            consistently ranked as the top bridal artist on WedMeGood since 2021, our reputation in the industry is
            well-established.
          </p>
        </div>
        <div className="relative h-[300px] sm:h-[400px] md:h-[500px] lg:h-[500px] lg:w-[500px]">
          <Image
            src={sonam}
            alt="Hairstylist working on a client"
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
          />
        </div>
      </div>
    </div>
  )
}

