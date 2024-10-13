"use client";

import { ArrowUpRight } from "lucide-react";
import { useInView } from "framer-motion";
import Image from "next/image";
import React, { useRef } from "react";

export const About = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
    return (
        <div className="min-h-[100vh] bg-white pt-5 w-[100%] flex flex-col items-center gap-9 justify-center" >
            <div ref={ref} className="flex md:flex-row flex-col gap-9 w-[80%] items-stretch mt-9 py-9 justify-center" style={{
                transform: isInView ? "none" : "translateX(-200px)",
                opacity: isInView ? 1 : 0,
                transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
            }}>
                <Image className="self-center" src={"https://images.unsplash.com/photo-1727968451338-209fb8da01a3?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} width={500} height={500} alt="" />
                <p className="md:w-[30%] md:text-2xl text-md font-light">Since opening in 2004, we have successfully built a reputation on talent, with a staff so knowledgable and dedicated to hair that we guarantee you will leave feeling beautiful. At CHIC Salon, excellence is our forté and improvement never stops. Our staff receives extensive, ongoing education from world renowned industry leaders, ensuring that your new style is created using the most up to date techniques.<br /> <br />
                    Make your escape into our spacious 4000 square foot salon with floor-to-ceiling windows, state of the art lighting and styling stations that raise the bar for a creative salon environment.Like you, we get excited about fashion, new hair styles and feeling luxurious. The energy at ETCH is contagious as a result of our passion for what we do. <br /><br /><span className="flex gap-2 hover:font-semibold hover:gap-4 transition-all items-center underline unde">
                        view services <ArrowUpRight /></span></p>

            </div>
            {/* <div className="w-full h-[30rem] relative">
                <Image
                    src="https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt=""
                    fill
                    className="object-cover"
                />
            </div> */}

        </div>
    )
}