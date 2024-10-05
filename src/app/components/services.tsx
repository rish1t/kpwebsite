import { ArrowRight, ArrowUpRight } from "lucide-react";
import Image from "next/image";
import React from "react";

export const Services = () => {
    return (
        <div className="min-h-[100vh] py-5 w-[100%] flex flex-col md:px-0 items-center gap-9 justify-start">
            <div className="md:px-0 px-3">
                <p className="md:text-5xl text-2xl leading-relaxed font-medium text-center mt-9">
                    We offer a wide array of services <br /> so you can look great and feel confident
                </p>
            </div>
            <div className="flex md:flex-row flex-col gap-3 mt-9 items-center justify-between w-[80%]">

                {/* Service 1 */}
                <div className="md:w-[25%] w-[100%] h-[30rem] relative group">
                    <Image
                        src="https://images.unsplash.com/photo-1574015974293-817f0ebebb74?q=80&w=1273&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt="Hair Styling"
                        fill
                        className="object-cover"
                    />
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-black opacity-50 transition-opacity duration-300 group-hover:opacity-60"></div>
                    {/* Text */}
                    <p className="absolute bottom-4 right-4 text-white text-2xl font-medium z-10">
                        Hair Styling
                    </p>
                </div>

                {/* Service 2 */}
                <div className="md:w-[25%] w-[100%] h-[30rem] relative group">
                    <Image
                        src="https://images.unsplash.com/photo-1553521041-d168abd31de3?q=80&w=1364&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt="Facial Treatment"
                        fill
                        className="object-cover"
                    />
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-black opacity-50 transition-opacity duration-300 group-hover:opacity-60"></div>
                    {/* Text */}
                    <p className="absolute bottom-4 right-4 text-white text-2xl font-medium z-10">
                        Facial Treatment
                    </p>
                </div>

                {/* Service 3 */}
                <div className="md:w-[25%] w-[100%] h-[30rem] relative group">
                    <Image
                        src="https://images.unsplash.com/photo-1574015974293-817f0ebebb74?q=80&w=1273&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt="Nail Art"
                        fill
                        className="object-cover"
                    />
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-black opacity-50 transition-opacity duration-300 group-hover:opacity-60"></div>
                    {/* Text */}
                    <p className="absolute bottom-4 right-4 text-white text-2xl font-medium z-10">
                        Nail Art
                    </p>
                </div>

                {/* Service 4 */}
                <div className="md:w-[25%] w-[100%] h-[30rem] relative group">
                    <Image
                        src="https://images.unsplash.com/photo-1553521041-d168abd31de3?q=80&w=1364&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt="Massage Therapy"
                        fill
                        className="object-cover"
                    />
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-black opacity-50 transition-opacity duration-300 group-hover:opacity-60"></div>
                    {/* Text */}
                    <p className="absolute bottom-4 right-4 text-white text-2xl font-medium z-10">
                        Massage Therapy
                    </p>
                </div>
            </div>
            <button className="flex gap-3 hover:scale-105 hover:gap-4 transition-all px-7 items-center py-4 font-semibold bg-[#ffac8c] text-xl mt-9 rounded-3xl">
                <p>View Services</p>
                <ArrowRight size={24} />
            </button>
        </div>
    );
};

export default Services;
