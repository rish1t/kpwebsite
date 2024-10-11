'use client'

import Image from "next/image"

export default function Brands() {
  return(
    <div className='h-[50vw] w-full flex justify-center items-center bg-[#151515]'>
        <div className="h-[80%] md:w-[80%] text-gray-200 flex flex-col items-center justify-around">
            <h1 className="text-5xl text-center mb-6">We Use Only the Finest for your Hair.</h1>
            <div className="grid grid-cols-2 gap-2 md:grid-cols-4 h-[60%] w-full">
                {Array.from({ length: 8 }).map((_, index) => (
                    <div key={index} className="flex justify-center items-center">
                        <Image 
                            width={64} 
                            height={64} 
                            alt={`Brand ${index + 1}`} 
                            src="https://cdn.iconscout.com/icon/free/png-512/free-white-icon-download-in-svg-png-gif-file-formats--large-square-geometric-symbols-pack-sign-icons-38025.png?f=webp&w=256" 
                            className="w-[60px] h-[60px] object-contain" 
                        />
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}
