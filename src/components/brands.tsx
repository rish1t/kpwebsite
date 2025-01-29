"use client"

import Image from "next/image"
import b1 from "../../public/drive-download-20241025T123905Z-001/1 - Schwarzkopf-Logo.svg"
import b2 from "../../public/drive-download-20241025T123905Z-001/2 - Skinora-Logo.svg"
import b3 from "../../public/drive-download-20241025T123905Z-001/3 - charlottet logo.svg"
import b4 from "../../public/drive-download-20241025T123905Z-001/4 - Loreal logo.svg"
import b5 from "../../public/drive-download-20241025T123905Z-001/5 - NATURICA logo.svg"
import b6 from "../../public/drive-download-20241025T123905Z-001/6 - NARS logo.svg"
import b7 from "../../public/drive-download-20241025T123905Z-001/7 - CASMARA logo.svg"
import b8 from "../../public/drive-download-20241025T123905Z-001/8 - MAC logo.svg"

const brands = [b1, b2, b3, b4, b5, b6, b7, b8]

export default function Brands() {
  return (
    <div className="lg:h-[45vw] md:h-[55vw] h-auto py-9 px-3 min-h-screen w-full flex justify-center items-center bg-[#151515]">
      <div className="md:h-[80%] h-full w-full md:gap-0 gap-9 text-gray-200 flex flex-col items-center justify-around md:justify-between px-3 md:px-5">
        <h1 className="md:text-[2vw] text-[6vw] text-center">We Use Only the Finest for your Hair.</h1>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-y-3 md:gap-y-[10rem] gap-x-3 md:w-[70%] w-[100%]">
          {brands.map((brand, index) => (
            <div key={index} className="flex justify-center items-center min-h-[150px] border rounded-xl md:bg-inherit md:border-none p-2 border-[#1d1d1d] bg-[#1b1b1b]">
              <Image
                src={brand || "/placeholder.svg"}
                width={180}
                height={180}
                alt={`Brand ${index + 1}`}
                className="object-contain lg:w-[10vw] w-[30vw] md:mb-4"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

