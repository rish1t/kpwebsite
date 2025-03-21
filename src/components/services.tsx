"use client"
import Image from "next/image"
import React, { useEffect, useRef, useState } from "react"
import { useInView } from "framer-motion"

type Service = {
  id: string
  text: string[]
  imageUrl: string
}

export const Services = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const [services, setServices] = useState<Service[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [currentImageIndices, setCurrentImageIndices] = useState<number[]>([])

  useEffect(() => {
    const fetchFeatures = async () => {
      try {
        const res = await fetch("https://kpcrud-vj8f.vercel.app/api/links9")
        if (!res.ok) {
          throw new Error('Failed to fetch services')
        }

        const data = await res.json()
        console.log(data)

        setServices(data)
        setCurrentImageIndices(new Array(data.length).fill(0)) // initialize indices to 0 for each service
      } catch (err) {
        setError((err as Error).message)
      } finally {
        setLoading(false)
      }
    }

    fetchFeatures()
  }, [])

  useEffect(() => {
    if (!services.length) return

    const interval = setInterval(() => {
      setCurrentImageIndices(prevIndices =>
        prevIndices.map((index, i) => {
          const service = services[i]
          if (!service?.text?.length) return 0
          return (index + 1) % service.text.length
        })
      )
    }, 4000)

    return () => clearInterval(interval)
  }, [services])

  return (
    <div
      className="min-h-[100vh] leading-loose py-9 w-full bg-[#151515] flex flex-col items-center gap-9 justify-start"
      ref={ref}
    >
      <div
        className="px-4 md:px-0"
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
        {loading && <p className="text-white text-center">Loading...</p>}
        {error && <p className="text-red-500 text-center">{error}</p>}
        {!loading && !error && services.map((service, index) => {
          const currentImageIndex = currentImageIndices[index] || 0
          const imageUrl = service.text?.[currentImageIndex] || "/placeholder.svg"
          const serviceName = service.imageUrl || "Service"

          return (
            <div
              key={service.id}
              className="w-full aspect-[3/4] md:aspect-auto md:h-[30rem] relative group"
              style={{
                transform: isInView ? "none" : "translateY(200px)",
                opacity: isInView ? 1 : 0,
                transition: `all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) ${0.65 + index * 0.15}s`,
              }}
            >
              <Image
                src={imageUrl}
                alt={serviceName}
                fill
                className="object-cover transition-all"
              />
              <div className="absolute inset-0 bg-black opacity-50 transition-opacity duration-300 group-hover:opacity-30"></div>
              <p className="absolute bottom-2 right-2 md:bottom-4 md:right-4 text-white text-lg md:text-2xl font-medium z-10">
                {serviceName}
              </p>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Services
