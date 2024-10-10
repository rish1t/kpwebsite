import { motion } from 'framer-motion'
import Image from 'next/image'
import { useRef } from 'react'
import { useInView } from 'framer-motion'

export default function Component() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true });
  const features = [
    {
      title: "Expert Stylists",
      description: "Our team of highly skilled professionals is dedicated to bringing out your best look.",
      image: "https://images.unsplash.com/photo-1595475884562-073c30d45670?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjd8fHNhbG9ufGVufDB8fDB8fHww"
    },
    {
      title: "Luxurious Experience",
      description: "Immerse yourself in a tranquil atmosphere designed for your ultimate relaxation and rejuvenation.",
      image: "https://images.unsplash.com/photo-1501699169021-3759ee435d66?q=80&w=2038&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      title: "Premium Products",
      description: "We use only the finest, salon-exclusive products to ensure the health and beauty of your hair.",
      image: "https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2Fsb258ZW58MHx8MHx8fDA%3D"
    }
  ]

  return (
    <div className="flex flex-col items-center justify-center py-[5%] px-4 sm:px-6 lg:px-8" ref={ref} style={{
        transform: isInView ? "none" : "translateY(200px)",
        opacity: isInView ? 1 : 0,
        transition: `all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s`
    }}>
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="w-full max-w-7xl mx-auto text-center"
      >
        <h1 className="text-4xl font-extrabold text-center text-stone-800 mb-[5%] sm:mb-16 lg:mb-20" >
          Why Choose Our Salon?
        </h1>
        <div className="grid grid-cols-1 mt-[9%] sm:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="flex flex-col items-center text-center"
            >
              <div className="relative w-full h-64 mb-6 overflow-hidden rounded-xl shadow-lg" >
                <Image
                  src={feature.image}
                  alt={feature.title}
                  layout="fill"
                  objectFit="cover"
                  className="transition-transform duration-300 hover:scale-105"
                />
              </div>
              <h2 className="text-2xl font-semibold text-stone-700 mb-3">{feature.title}</h2>
              <p className="text-stone-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  )
}
