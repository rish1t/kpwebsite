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
                        src="https://centralus1-mediap.svc.ms/transform/thumbnail?provider=spo&farmid=194056&inputFormat=heic&cs=fFNQTw&docid=https%3A%2F%2Fmy.microsoftpersonalcontent.com%2F_api%2Fv2.0%2Fdrives%2Fb!ljywatRXBEqTPA4EZRkD5aLWXaLzavpEnDSZCh2WLL6rMOGalpUsRqUbsWgxmgRP%2Fitems%2F01TQY55TW3NWUXVIR4HQQIBLZUDQAAAAAA%3Ftempauth%3Dv1e.eyJzaXRlaWQiOiI2YWIwM2M5Ni01N2Q0LTRhMDQtOTMzYy0wZTA0NjUxOTAzZTUiLCJhdWQiOiIwMDAwMDAwMy0wMDAwLTBmZjEtY2UwMC0wMDAwMDAwMDAwMDAvbXkubWljcm9zb2Z0cGVyc29uYWxjb250ZW50LmNvbUA5MTg4MDQwZC02YzY3LTRjNWItYjExMi0zNmEzMDRiNjZkYWQiLCJleHAiOiIxNzMwMzMyODAwIn0.XiiDASmyK2AMMS23E4z-ZY8aW5ZpsG7SivDlkHHjgI0shqm7SNmdMDhJph-ZkkBfc6h2wn-3f8D9jxmn-UJg64xexuDv-VGnxUspD5YR65n968DnJ9mmw05N2l-mvFZEs86kSF4K4BOaQlfajFqT-fEZI4KHIlOZV4UyRRnK9Zg4ikVDHqrxnSqf5HIoqsDeZySJI21HX9s6HJ1odji3q-Ey4YOLxRN0d8dBnwovc_0sDxMgnuM7Rja5zFi67btOjHjkcI_yWrQNjVjAJfSCLx7nWj3RvXNxUiIOZNmw3KLbdIt7dckNwX8SaDJdPb-59Nl7RFPts9lrzSqoe3cdQ2WWrYIFeX6hZWvUtOFneT7ouC27oZ7Ww3eL4sMtj_lTpXWT-vEi9yTfY0mrCTeemTCu_KSJTdHhKJsPgsK2_h_tzTvM4SrlPI-6VrBnsUinPInvjnXg2FEzS5k5oO61_27NsL2369h9AwDqh6zYYAk.OqOHsgJkrHvDy8FNGbbcZZ2dKkhxW_yP9ZsMBOUP3RU%26version%3DPublished&cb=63848303223&encodeFailures=1&width=542&height=813"
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
