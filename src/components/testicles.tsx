'use client';
import { useInView } from "framer-motion";
import Image from 'next/image';
import React, { useRef } from "react";

const BentoGrid: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <div className="flex justify-center items-center w-[100%] min-h-fit h-screen bg-gray-200">
      <div className="grid grid-cols-6 gap-2 w-full h-[100%] p-2">
        {/* Large item */}
        <div className="col-span-6 sm:col-span-3 sm:row-span-2 relative h-40 sm:h-auto overflow-hidden" ref={ref} style={{
                transform: isInView ? "none" : "translateX(-200px)",
                opacity: isInView ? 1 : 0,
                transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.9s"
            }}>
          <Image
            src="https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Bento Image 1"
            fill
            className="object-cover"
          />
        </div>

        {/* Medium item */}
        <div className="col-span-6 sm:col-span-2 sm:row-span-2 relative h-40 sm:h-auto overflow-hidden" ref={ref} style={{
                transform: isInView ? "none" : "translateX(-200px)",
                opacity: isInView ? 1 : 0,
                transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.7s"
            }}>
          <Image
            src="https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Bento Image 2"
            fill
            className="object-cover"
          />
        </div>

        {/* Tall item */}
        <div className="col-span-3 sm:col-span-1 sm:row-span-3 relative h-40 sm:h-auto overflow-hidden" ref={ref} style={{
                transform: isInView ? "none" : "translateX(-200px)",
                opacity: isInView ? 1 : 0,
                transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
            }}>
          <Image
            src="https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Bento Image 3"
            fill
            className="object-cover"
          />
        </div>

        {/* Small item */}
        <div className="col-span-3 sm:col-span-2 relative h-40 sm:h-auto overflow-hidden" ref={ref} style={{
                transform: isInView ? "none" : "translateX(-200px)",
                opacity: isInView ? 1 : 0,
                transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.9s"
            }}>
          <Image
            src="https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Bento Image 4"
            fill
            className="object-cover"
          />
        </div>
        <div className="col-span-3 sm:col-span-2 relative h-40 sm:h-auto overflow-hidden" ref={ref} style={{
                transform: isInView ? "none" : "translateX(-200px)",
                opacity: isInView ? 1 : 0,
                transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.7s"
            }}>
          <Image
            src="https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Bento Image 4"
            fill
            className="object-cover"
          />
        </div>

        {/* Small square item */}
        <div className="col-span-3 sm:col-span-1 relative h-40 sm:h-auto overflow-hidden" ref={ref} style={{
                transform: isInView ? "none" : "translateX(-200px)",
                opacity: isInView ? 1 : 0,
                transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
            }}>
          <Image
            src="https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Bento Image 5"
            fill
            className="object-cover"
          />
        </div>

        {/* Wide item */}
        <div className="col-span-6 sm:col-span-3 relative h-40 sm:h-auto overflow-hidden" ref={ref} style={{
                transform: isInView ? "none" : "translateX(-200px)",
                opacity: isInView ? 1 : 0,
                transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.9s"
            }}>
          <Image
            src="https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Bento Image 6"
            fill
            className="object-cover"
          />
        </div>
        <div className="col-span-6 sm:col-span-3 relative h-40 sm:h-auto overflow-hidden" ref={ref} style={{
                transform: isInView ? "none" : "translateX(-200px)",
                opacity: isInView ? 1 : 0,
                transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
            }}>
          <Image
            src="https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Bento Image 6"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default BentoGrid;
