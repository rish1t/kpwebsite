"use client"
import Image from "next/image"
import React, { useRef } from "react"
import { useInView } from "framer-motion"

export const Services = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const services = [
    {
      name: "Hair Coloring",
      image:
        "https://images.unsplash.com/photo-1573651235591-221193be5229?q=80&w=2010&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "Skin Treatment",
      image:
        "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "Nail Art",
      image:
        "https://images.unsplash.com/photo-1658390039913-4702ba28c594?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "Makeup",
      image:
        "https://images.unsplash.com/photo-1596704017254-9b121068fb31?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ]

  return (
    <div
      className="min-h-[100vh] leading-loose py-9 w-full bg-[#151515] flex flex-col items-center gap-9 justify-start"
      ref={ref}
    >
      <div
        className="px-4 md:px-0"
        ref={ref}
        style={{
          transform: isInView ? "none" : "translateY(200px)",
          opacity: isInView ? 1 : 0,
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
        }}
      >
        <p className="text-2xl md:text-5xl text-gray-300 leading-tight md:leading-loose font-normal text-center mt-9">
          We offer a wide array of services <br className="hidden md:block" /> so you can look great and feel confident
        </p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-3 mt-[3%] w-[90%] md:w-[80%]">
        {services.map((service, index) => (
          <div
            key={service.name}
            className="w-full aspect-[3/4] md:aspect-auto md:h-[30rem] relative group"
            ref={ref}
            style={{
              transform: isInView ? "none" : "translateY(200px)",
              opacity: isInView ? 1 : 0,
              transition: `all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) ${0.65 + index * 0.15}s`,
            }}
          >
            <Image src={service.image || "/placeholder.svg"} alt={service.name} fill className="object-cover" />
            {/* Overlay */}
            <div className="absolute inset-0 bg-black opacity-50 transition-opacity duration-300 group-hover:opacity-30"></div>
            {/* Text */}
            <p className="absolute bottom-2 right-2 md:bottom-4 md:right-4 text-white text-lg md:text-2xl font-medium z-10">
              {service.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Services

