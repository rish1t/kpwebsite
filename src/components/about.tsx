"use client";

import { ArrowUpRight } from "lucide-react";
import { useInView } from "framer-motion";
import Image from "next/image";
import React, { useRef } from "react";

export const About = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    return (
        <div className="min-h-[100vh] bg-white pt-5 w-[100%] flex flex-col items-center gap-9 justify-center">
            <div
                ref={ref}
                className="flex lg:flex-row flex-col gap-9 w-[80%] items-stretch mt-9 py-9 justify-center"
                style={{
                    transform: isInView ? "none" : "translateX(-200px)",
                    opacity: isInView ? 1 : 0,
                    transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
                }}
            >
                <div className="w-[100%] lg:w-[35%] h-auto relative">
                    <Image
                        className="self-center object-cover filter grayscale"
                        src="https://dsm01pap008files.storage.live.com/y4mDMG8Rhvtw0OZPjjTQCdQCIse6pp_v4rOzMm2cs-tinHZJIzo-OVIUzLR_RsoJY-o6t_IfcbdUAZET_qTQ3gJ963p8rrPhfYu8wK9hXmQqt3SMi_P3OWQwn7jVLpDqpzenhWWuoOE7hzIYFpB4HtvNQ1YdurfzTgz-5H4ncTKLwCY43QtlgLWDZvBVDmoMnJdjVG_RjPa-GyxmJYNzAqItA?encodeFailures=1&width=572&height=859"
                        width={500}
                        height={500}
                        layout="responsive"
                        alt="Kaya Planet"
                    />
                </div>

                <p className="lg:w-[25vw] md:text-2xl text-md font-light">
                    Welcome to Kaya Planet Beauty Salon, where luxury meets expertise. For the past nine years, we have been dedicated to providing exceptional beauty services to both men and women, ensuring that every visit is a transformative experience.
                    <br /> <br />
                    Our team consists of highly skilled artists who are passionate about their craft. Each stylist and technician brings a unique blend of creativity and professionalism, committed to delivering the highest standards of service. From cutting-edge hair design to rejuvenating skincare treatments, we tailor our offerings to meet the individual needs of our clients.
                    <br /> <br />
                    Our luxurious environment and personalized approach allow you to unwind and indulge in a sanctuary of style and relaxation. Join us, and let our experts elevate your beauty journey.
                    <br /><br />
                    <span className="flex gap-2 hover:font-semibold hover:gap-4 transition-all items-center underline">
                        view services <ArrowUpRight />
                    </span>
                </p>
            </div>
        </div>
    );
};
