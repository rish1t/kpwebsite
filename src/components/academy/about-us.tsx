import Image from "next/image"
import { UsersRound, Scissors } from "lucide-react"

export default function AboutUs() {
  return (
    <div className="container mx-auto px-4 py-12 md:py-16 lg:py-20">
      <div className="flex justify-between items-center mb-8 md:mb-12">
        <span className="text-sm font-semibold px-3 py-1 border border-gray-300 rounded-full">ABOUT</span>
      </div>
      <div className="grid md:grid-cols-2 gap-12 items-start">
        <div className="space-y-8">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
            Crafting Excellence, One Stylist at a Time.
          </h2>
          <p className="text-lg sm:text-xl text-gray-600">Discover Kaya Planet in detail.</p>
          <div className="grid sm:grid-cols-2 gap-8 pt-8">
            <div>
              <UsersRound className="w-8 h-8 text-red-600 mb-4" />
              <h3 className="font-semibold mb-2 text-lg sm:text-xl lg:text-2xl">Tailored Learning</h3>
              <p className="text-sm sm:text-base text-gray-600">We refine your skills with the latest in hair and beauty innovations, ensuring you stand out in a competitive market.</p>
            </div>
            <div>
              <Scissors className="w-8 h-8 text-red-600 mb-4" />
              <h3 className="font-semibold mb-2 text-lg sm:text-xl lg:text-2xl">Advanced Techniques</h3>
              <p className="text-sm sm:text-base text-gray-600">Our personalized coaching programs focus on your unique journey, offering hands-on training in specialized areas to help you thrive in the beauty industry.</p>
            </div>
          </div>
        </div>
        <div className="relative h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px]">
          <Image
            src="https://images.unsplash.com/photo-1488282687151-c5e6582e7cf1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Hairstylist working on a client"
            layout="fill"
            objectFit="cover"
            className="rounded-lg grayscale brightness-50 contrast-125"
          />
          <div className="absolute bottom-4 left-4 right-4 bg-black bg-opacity-70 p-4 rounded">
            <p className="text-white text-sm sm:text-base">
              "Hair reflects who you are, telling your story before you speak. It's our job to help others discover their unique beauty."
            </p>
            <p className="text-white text-xs sm:text-sm mt-2">- Trevor Sorbie</p>
          </div>
        </div>
      </div>
    </div>
  )
}