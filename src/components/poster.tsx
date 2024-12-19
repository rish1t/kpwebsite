'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'

const images = [
  '/poster1.jpg',
  '/poster2.jpg',
  '/poster3.jpg'
]

export default function Poster() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
  }

  // const prevSlide = () => {
  //   setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length)
  // }

  useEffect(() => {
    const interval = setInterval(nextSlide, 4000)
    return () => clearInterval(interval)
  }, [])

  return (
    <main className="container mx-auto px-4 py-8">
      <div className="relative w-full overflow-hidden rounded-xl">
        <div 
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {images.map((src, index) => (
            <div key={index} className="flex-shrink-0 w-full relative aspect-[16/9]">
              <Image
                src={src}
                alt={`Slide ${index + 1}`}
                fill
                sizes="100vw"
                priority={index === 0}
                className="object-cover"
              />
            </div>
          ))}
        </div>
        
        {/* <button 
          className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full"
          onClick={prevSlide}
          aria-label="Previous slide"
        >
          &#10094;
        </button>
        <button 
          className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full"
          onClick={nextSlide}
          aria-label="Next slide"
        >
          &#10095;
        </button> */}
        
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {images.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full ${
                index === currentIndex ? 'bg-white' : 'bg-white bg-opacity-50'
              }`}
              onClick={() => setCurrentIndex(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
      
    </main>
  )
}

