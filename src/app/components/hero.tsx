"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";

const images = [
  "https://images.unsplash.com/photo-1535637603896-07c179d71103?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://plus.unsplash.com/premium_photo-1664301489002-2fed4596c101?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1522337094846-8a818192de1f?q=80&w=1988&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
];

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const navbarHeight = "70px"; // Assuming navbar height

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(timer);
  }, []);

  return (
    <div
      className="w-full flex md:flex-row flex-col items-center justify-around px-6 md:px-12 poppins bg-gradient-to-r from-pink-100 via-[#ffac8c] to-orange-100"
      style={{ minHeight: `calc(100vh - ${navbarHeight})`, marginTop: navbarHeight }}
    >
      {/* Left Side: Text and Call-to-Action */}
      <div className="flex flex-col md:mt-0 mt-9 w-[70%] justify-center items-start text-white text-left space-y-6">
        <h1 className="font-bold drop-shadow-lg md:text-6xl text-4xl leading-tight">
          Kaya Planet.
        </h1>
        <p className="drop-shadow-md md:text-left text-center md:w-[80%] w-[100%] md:text-2xl text-lg leading-relaxed">
          Immerse yourself in a world of serene sophistication and natural beauty. Elevating self-care with a touch of luxury and tranquil simplicity.
        </p>
        <button className="bg-white text-black flex gap-3 mt-3 px-6 py-3 rounded-full font-medium hover:bg-opacity-90 transition-all shadow-md items-center md:text-lg text-base">
          <p>Start Your Journey</p>
          <ArrowRight size={20} />
        </button>
      </div>

      {/* Right Side: Image Container */}
      <div className="md:w-[40%] w-[100%] flex justify-center items-center">
        <div className="relative w-[100%] h-[50vh] md:h-[70vh] overflow-hidden bg-gray-200 rounded-[2rem] shadow-2xl">
          <AnimatePresence initial={false}>
            <motion.img
              key={currentIndex}
              src={images[currentIndex]}
              alt={`Hero image ${currentIndex + 1}`}
              className="absolute inset-0 w-full h-full object-cover rounded-[2rem]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.6 }}
            />
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
