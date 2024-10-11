'use client'

import Image from "next/image"

export default function Brands() {
  return (
    <div className='md:h-[40vw] py-9 px-3 h-[100vw] w-full flex justify-center items-center bg-[#151515]'>
      <div className="md:h-[80%] h-[100%] w-[100%] text-gray-200 flex flex-col items-center justify-between">
        <h1 className="md:text-[2vw] text-[8vw] text-center ">We Use Only the Finest for your Hair.</h1>
        <div className="grid grid-cols-4 gap-12 md:w-[70%] w-[80%]">
          {Array.from({ length: 8 }).map((_, index) => (
            <div key={index} className="flex justify-center items-center">
              <Image
                width={80}
                height={80}
                alt={`Brand ${index + 1}`}
                src="https://cdn.iconscout.com/icon/free/png-512/free-white-icon-download-in-svg-png-gif-file-formats--large-square-geometric-symbols-pack-sign-icons-38025.png?f=webp&w=256"
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
