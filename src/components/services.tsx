"use client";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import React, { useRef } from "react";
import { useInView } from "framer-motion";

export const Services = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
    return (
        <div className="min-h-[100vh] leading-loose py-9 w-[100%] bg-[#151515] flex flex-col md:px-0 items-center gap-9 justify-start" ref={ref} >
            <div className="md:px-0 px-3" ref={ref} style={{
                transform: isInView ? "none" : "translateY(200px)",
                opacity: isInView ? 1 : 0,
                transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
            }}>
                <p className="md:text-5xl text-gray-300 text-2xl leading-loose font-normal text-center mt-9">
                    We offer a wide array of services <br /> so you can look great and feel confident
                </p>
            </div>
            <div className="flex md:flex-row flex-col gap-3 mt-[3%] items-center justify-between w-[80%]">

                {/* Service 1 */}
                <div className="md:w-[25%] w-[100%] h-[30rem] relative group" ref={ref} style={{
                    transform: isInView ? "none" : "translateY(200px)",
                    opacity: isInView ? 1 : 0,
                    transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.65s"
                }}>
                    <Image
                        src="https://images.unsplash.com/photo-1573651235591-221193be5229?q=80&w=2010&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt="Hair Styling"
                        fill
                        className="object-cover"
                    />
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-black opacity-50 transition-opacity duration-300 group-hover:opacity-30"></div>
                    {/* Text */}
                    <p className="absolute bottom-4 right-4 text-white text-2xl font-medium z-10">
                        Hair Coloring
                    </p>
                </div>

                {/* Service 2 */}
                <div className="md:w-[25%] w-[100%] h-[30rem] relative group" ref={ref} style={{
                    transform: isInView ? "none" : "translateY(200px)",
                    opacity: isInView ? 1 : 0,
                    transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.8s"
                }}>
                    <Image
                        src="https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt="Facial Treatment"
                        fill
                        className="object-cover"
                    />
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-black opacity-50 transition-opacity duration-300 group-hover:opacity-40"></div>
                    {/* Text */}
                    <p className="absolute bottom-4 right-4 text-white text-2xl font-medium z-10">
                        Skin Treatment
                    </p>
                </div>

                {/* Service 3 */}
                <div className="md:w-[25%] w-[100%] h-[30rem] relative group" ref={ref} style={{
                    transform: isInView ? "none" : "translateY(200px)",
                    opacity: isInView ? 1 : 0,
                    transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.95s"
                }}>
                    <Image
                        src="https://images.unsplash.com/photo-1658390039913-4702ba28c594?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt="Nail Art"
                        fill
                        className="object-cover"
                    />
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-black opacity-50 transition-opacity duration-300 group-hover:opacity-40"></div>
                    {/* Text */}
                    <p className="absolute bottom-4 right-4 text-white text-2xl font-medium z-10">
                        Nail Art
                    </p>
                </div>

                {/* Service 4 */}
                <div className="md:w-[25%] w-[100%] h-[30rem] relative group" ref={ref} style={{
                    transform: isInView ? "none" : "translateY(200px)",
                    opacity: isInView ? 1 : 0,
                    transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 1s"
                }}>
                    <Image
                        src="https://images.unsplash.com/photo-1596704017254-9b121068fb31?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt="Massage Therapy"
                        fill
                        className="object-cover"
                    />
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-black opacity-50 transition-opacity duration-300 group-hover:opacity-40"></div>
                    {/* Text */}
                    <p className="absolute bottom-4 right-4 text-white text-2xl font-medium z-10">
                        Makeup
                    </p>
                </div>
            </div>

        </div>
    );
};

export default Services;
