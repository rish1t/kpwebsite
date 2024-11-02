"use client"
import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"

const images = [
  "https://images.unsplash.com/photo-1535637603896-07c179d71103?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://plus.unsplash.com/premium_photo-1664301489002-2fed4596c101?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1522337094846-8a818192de1f?q=80&w=1988&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
]

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0)
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
    }, 5000) // Change image every 5 seconds
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="relative w-full z-0 h-screen h-[60vh] overflow-hidden">
      <AnimatePresence initial={false}>
        <motion.img
          key={currentIndex}
          src={images[currentIndex]}
          alt={`Hero image ${currentIndex + 1}`}
          className="absolute w-full h-full object-cover filter grayscale brightness-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        />
      </AnimatePresence>

      <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center px-8">
        <div className="text-center text-white">
          <h1 className="text-5xl font-[family-name:var(--font-stardom)] mb-5 md:text-5xl lg:text-8xl font-semibold drop-shadow-lg">
          Unleash Your Inner Glow at <br/><span className="">Kaya Planet</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 drop-shadow-md">
            Step into a world of beauty and rejuvenation at Kaya Planet
          </p> 
          <button className="bg-orange-500 text-white px-8 py-3 rounded-full font-semibold text-lg hover:bg-opacity-90 transition-colors shadow-lg">
            Start Your Journey
          </button>
        </div>
      </div>
      
    </div>
  )
}
