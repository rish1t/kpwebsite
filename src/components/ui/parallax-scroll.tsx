"use client";
import { useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { cn } from "@/lib/utils";

export const ParallaxScroll = ({
  images,
  className,
}: {
  images: string[];
  className?: string;
}) => {
  const gridRef = useRef(null);
  const { scrollYProgress } = useScroll({
    container: gridRef, // remove this if your container is not fixed height
    offset: ["start start", "end start"], // remove this if your container is not fixed height
  });

  const translateFirst = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const translateSecond = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const translateThird = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const translateFourth = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const translateFifth = useTransform(scrollYProgress, [0, 1], [0, -200]);

  const fifth = Math.ceil(images.length / 5);

  const firstPart = images.slice(0, fifth);
  const secondPart = images.slice(fifth, 2 * fifth);
  const thirdPart = images.slice(2 * fifth, 3 * fifth);
  const fourthPart = images.slice(3 * fifth, 4 * fifth);
  const fifthPart = images.slice(4 * fifth);

  return (
    <div
      className={cn("h-[40rem] items-start overflow-y-auto w-full", className)}
      ref={gridRef}
    >
      <div
        className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 items-start mx-auto md:gap-10 gap-3 py-40 md:px-10 px-3"
        ref={gridRef}
      >
        <div className="grid gap-3 md:gap-10">
          {firstPart.map((el, idx) => (
            <motion.div
              style={{ y: translateFirst }} // Apply the translateY motion value here
              key={"grid-1" + idx}
            >
              <Image
                priority={true}
                src={`https://drive.google.com/uc?id=${el}&sz=w1500`} // Ensure the URL is valid
                className="h-80 w-full object-cover object-left-top rounded-lg gap-10 !m-0 !p-0"
                height={400}
                width={400}
                alt="thumbnail1"
              />
            </motion.div>
          ))}
        </div>
        <div className="grid gap-3 md:gap-10">
          {secondPart.map((el, idx) => (
            <motion.div
              style={{ y: translateSecond }} // Apply the translateY motion value here
              key={"grid-2" + idx}
            >
              <Image
                priority={true}
                src={`https://drive.google.com/uc?id=${el}&sz=w1500`}
                className="h-80 w-full object-cover object-left-top rounded-lg gap-10 !m-0 !p-0"
                height="400"
                width="400"
                alt="thumbnail2"
              />
            </motion.div>
          ))}
        </div>
        <div className="grid gap-3 md:gap-10">
          {thirdPart.map((el, idx) => (
            <motion.div style={{ y: translateThird }} key={"grid-3" + idx}>
              <Image
                priority={true}
                src={`https://drive.google.com/uc?id=${el}&sz=w1500`}
                className="h-80 w-full object-cover object-left-top rounded-lg gap-10 !m-0 !p-0"
                height="400"
                width="400"
                alt="thumbnail3"
              />
            </motion.div>
          ))}
        </div>
        <div className="grid gap-3 md:gap-10">
          {fourthPart.map((el, idx) => (
            <motion.div style={{ y: translateFourth }} key={"grid-4" + idx}>
              <Image
                priority={true}
                src={`https://drive.google.com/uc?id=${el}&sz=w1500`}
                className="h-80 w-full object-cover object-left-top rounded-lg gap-10 !m-0 !p-0"
                height="400"
                width="400"
                alt="thumbnail4"
              />
            </motion.div>
          ))}
        </div>
        <div className="grid gap-3 md:gap-10">
          {fifthPart.map((el, idx) => (
            <motion.div style={{ y: translateFifth }} key={"grid-5" + idx}>
              <Image
                priority={true}
                src={`https://drive.google.com/uc?id=${el}&sz=w1500`}
                className="h-80 w-full object-cover object-left-top rounded-lg gap-10 !m-0 !p-0"
                height="400"
                width="400"
                alt="thumbnail5"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};
