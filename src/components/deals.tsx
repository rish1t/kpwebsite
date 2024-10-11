"use client";

import React from "react";
import { Component } from "./carouselDemo";

export const Deals = () => {
    return (
        <div className="min-h-[80vh] bg-gray-100 py-20 w-[100%] flex flex-col md:px-0 items-center gap-9 justify-start text-[#000000]">
            <div className="">
                <h2 className="md:text-5xl text-[6vw] font-medium text-center  mt-9" >
                    Discover Our Exclusive Deals
                </h2>
            </div>
            <Component />
        </div>

    )
    // return (
    //     <div className="min-h-[100vh] py-5 w-[100%] flex flex-col md:px-0 items-center gap-9 justify-start bg-[#151515]">
    //         {/* Section Title */}
    //         <div ref={ref} className="" style={{
    //             transform: isInView ? "none" : "translateY(200px)",
    //             opacity: isInView ? 1 : 0,
    //             transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
    //         }}>
    //             <h2 className="text-5xl font-medium text-center text-gray-300 mt-9" >
    //                 Discover Our Exclusive Deals
    //             </h2>
    //         </div>

    //         {/* Flexbox for 8 deal boxes */}
    //         <div ref={ref} className="flex flex-wrap gap-3 mt-9 items-center justify-between w-[80%]" style={{
    //             transform: isInView ? "none" : "translateY(200px)",
    //             opacity: isInView ? 1 : 0,
    //             transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.7s"
    //         }}>

    //             {/* Deal 1 */}
    //             <div className="md:w-[24%] w-[100%] h-[25rem] relative group">
    //                 <Image
    //                     src="https://images.unsplash.com/photo-1574015974293-817f0ebebb74?q=80&w=1273&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    //                     alt="50% Off Haircut"
    //                     fill
    //                     className="object-cover"
    //                 />
    //                 {/* Overlay */}
    //                 <div className="absolute inset-0 bg-black opacity-50 transition-opacity duration-300 group-hover:opacity-60"></div>
    //                 {/* Deal Text */}
    //                 <p className="absolute bottom-4 right-4 text-white text-2xl font-medium z-10">
    //                     50% Off Haircut
    //                 </p>
    //             </div>

    //             {/* Deal 2 */}
    //             <div className="md:w-[24%] w-[100%] h-[25rem] relative group">
    //                 <Image
    //                     src="https://images.unsplash.com/photo-1553521041-d168abd31de3?q=80&w=1364&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    //                     alt="Facial Package"
    //                     fill
    //                     className="object-cover"
    //                 />
    //                 <div className="absolute inset-0 bg-black opacity-50 transition-opacity duration-300 group-hover:opacity-60"></div>
    //                 <p className="absolute bottom-4 right-4 text-white text-2xl font-medium z-10">
    //                     Facial Package
    //                 </p>
    //             </div>

    //             {/* Deal 3 */}
    //             <div className="md:w-[24%] w-[100%] h-[25rem] relative group">
    //                 <Image
    //                     src="https://images.unsplash.com/photo-1574015974293-817f0ebebb74?q=80&w=1273&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    //                     alt="Nail Art Special"
    //                     fill
    //                     className="object-cover"
    //                 />
    //                 <div className="absolute inset-0 bg-black opacity-50 transition-opacity duration-300 group-hover:opacity-60"></div>
    //                 <p className="absolute bottom-4 right-4 text-white text-2xl font-medium z-10">
    //                     Nail Art Special
    //                 </p>
    //             </div>

    //             {/* Deal 4 */}
    //             <div className="md:w-[24%] w-[100%] h-[25rem] relative group">
    //                 <Image
    //                     src="https://images.unsplash.com/photo-1553521041-d168abd31de3?q=80&w=1364&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    //                     alt="Massage Therapy"
    //                     fill
    //                     className="object-cover"
    //                 />
    //                 <div className="absolute inset-0 bg-black opacity-50 transition-opacity duration-300 group-hover:opacity-60"></div>
    //                 <p className="absolute bottom-4 right-4 text-white text-2xl font-medium z-10">
    //                     Massage Therapy
    //                 </p>
    //             </div>

    //             {/* Deal 5 */}
    //             <div className="md:w-[24%] w-[100%] h-[25rem] relative group">
    //                 <Image
    //                     src="https://images.unsplash.com/photo-1553521041-d168abd31de3?q=80&w=1364&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    //                     alt="Hair Color Special"
    //                     fill
    //                     className="object-cover"
    //                 />
    //                 <div className="absolute inset-0 bg-black opacity-50 transition-opacity duration-300 group-hover:opacity-60"></div>
    //                 <p className="absolute bottom-4 right-4 text-white text-2xl font-medium z-10">
    //                     Hair Color Special
    //                 </p>
    //             </div>

    //             {/* Deal 6 */}
    //             <div className="md:w-[24%] w-[100%] h-[25rem] relative group">
    //                 <Image
    //                     src="https://images.unsplash.com/photo-1574015974293-817f0ebebb74?q=80&w=1273&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    //                     alt="Spa Day Package"
    //                     fill
    //                     className="object-cover"
    //                 />
    //                 <div className="absolute inset-0 bg-black opacity-50 transition-opacity duration-300 group-hover:opacity-60"></div>
    //                 <p className="absolute bottom-4 right-4 text-white text-2xl font-medium z-10">
    //                     Spa Day Package
    //                 </p>
    //             </div>

    //             {/* Deal 7 */}
    //             <div className="md:w-[24%] w-[100%] h-[25rem] relative group">
    //                 <Image
    //                     src="https://images.unsplash.com/photo-1553521041-d168abd31de3?q=80&w=1364&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    //                     alt="Men's Grooming Deal"
    //                     fill
    //                     className="object-cover"
    //                 />
    //                 <div className="absolute inset-0 bg-black opacity-50 transition-opacity duration-300 group-hover:opacity-60"></div>
    //                 <p className="absolute bottom-4 right-4 text-white text-2xl font-medium z-10">
    //                     Men&apos;s Grooming Deal
    //                 </p>
    //             </div>

    //             {/* Deal 8 */}
    //             <div className="md:w-[24%] w-[100%] h-[25rem] relative group">
    //                 <Image
    //                     src="https://images.unsplash.com/photo-1574015974293-817f0ebebb74?q=80&w=1273&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    //                     alt="Manicure & Pedicure Combo"
    //                     fill
    //                     className="object-cover"
    //                 />
    //                 <div className="absolute inset-0 bg-black opacity-50 transition-opacity duration-300 group-hover:opacity-60"></div>
    //                 <p className="absolute bottom-4 right-4 text-white text-2xl font-medium z-10">
    //                     Manicure & Pedicure Combo
    //                 </p>
    //             </div>

    //         </div>

    //         {/* Button */}
    //         <button className="flex gap-3 hover:scale-105 hover:gap-4 transition-all px-7 mb-9 items-center py-4 font-semibold bg-white text-xl mt-9 rounded-3xl">
    //             <p>View All Deals</p>
    //             <ArrowRight size={24} />
    //         </button>
    //     </div>
    // );
};

export default Deals;
