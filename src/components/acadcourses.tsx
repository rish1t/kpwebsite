// "use client";
// import { ArrowRight } from "lucide-react";
// import Image from "next/image";
// import React, { useRef } from "react";
// import { useInView } from "framer-motion";
// import Link from "next/link";

// export const Courses = () => {
//   const ref = useRef(null);
//   const isInView = useInView(ref, { once: true });

//   return (
//     <div className="min-h-[100vh] leading-loose py-9 w-[100%] bg-[#151515] flex flex-col md:px-0 items-center gap-9 justify-start" ref={ref}>
//       <div
//         className="md:px-0 px-3"
//         ref={ref}
//         style={{
//           transform: isInView ? "none" : "translateY(200px)",
//           opacity: isInView ? 1 : 0,
//           transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
//         }}
//       >
//         <p className="md:text-5xl text-gray-300 text-2xl leading-loose font-medium text-center mt-9">
//           We offer a wide array of courses <br /> for you to elevate your passion to a profession.
//         </p>
//       </div>
//       <div className="flex md:flex-row flex-col gap-3 mt-[3%] items-center justify-between w-[80%]">
//         {/* Course Card 1 */}
//         <div
//           className="md:w-[25%] w-[100%] h-[30rem] relative group"
//           ref={ref}
//           style={{
//             transform: isInView ? "none" : "translateY(200px)",
//             opacity: isInView ? 1 : 0,
//             transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.65s",
//           }}
//         >
//           <Image
//             src="https://images.unsplash.com/photo-1574015974293-817f0ebebb74?q=80&w=1273&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
//             alt="Hair Styling"
//             fill
//             className="object-cover"
//           />
//           {/* Overlay */}
//           <div className="absolute inset-0 bg-black opacity-50 transition-opacity duration-300 group-hover:opacity-60"></div>
//           {/* Button */}
//           <Link href={"/courses"} className="group text-lg absolute bottom-0 left-0 w-full bg-gray-300/20 backdrop-blur-xl text-white text-center py-4 font-semibold transition">
//             <div className="flex items-center justify-center gap-2 group-hover:text-xl group-hover:gap-3 transition-all">
//             View 
//             <ArrowRight/>
//             </div>
//           </Link>
//         </div>

//         {/* Course Card 2 */}
//         <div
//           className="md:w-[25%] w-[100%] h-[30rem] relative group"
//           ref={ref}
//           style={{
//             transform: isInView ? "none" : "translateY(200px)",
//             opacity: isInView ? 1 : 0,
//             transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.8s",
//           }}
//         >
//           <Image
//             src="https://images.unsplash.com/photo-1553521041-d168abd31de3?q=80&w=1364&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
//             alt="Facial Treatment"
//             fill
//             className="object-cover"
//           />
//           {/* Overlay */}
//           <div className="absolute inset-0 bg-black opacity-50 transition-opacity duration-300 group-hover:opacity-60"></div>
//           {/* Button */}
//           <Link href={"/courses"} className="group text-lg absolute bottom-0 left-0 w-full bg-gray-300/20 backdrop-blur-xl text-white text-center py-4 font-semibold transition">
//             <div className="flex items-center justify-center gap-2 group-hover:text-xl group-hover:gap-3 transition-all">
//             View 
//             <ArrowRight/>
//             </div>
//           </Link>
//         </div>

//         {/* Course Card 3 */}
//         <div
//           className="md:w-[25%] w-[100%] h-[30rem] relative group"
//           ref={ref}
//           style={{
//             transform: isInView ? "none" : "translateY(200px)",
//             opacity: isInView ? 1 : 0,
//             transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.95s",
//           }}
//         >
//           <Image
//             src="https://images.unsplash.com/photo-1574015974293-817f0ebebb74?q=80&w=1273&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
//             alt="Nail Art"
//             fill
//             className="object-cover"
//           />
//           {/* Overlay */}
//           <div className="absolute inset-0 bg-black opacity-50 transition-opacity duration-300 group-hover:opacity-60"></div>
//           {/* Button */}
//           <Link href={"/courses"} className="group text-lg absolute bottom-0 left-0 w-full bg-gray-300/20 backdrop-blur-xl text-white text-center py-4 font-semibold transition">
//             <div className="flex items-center justify-center gap-2 group-hover:text-xl group-hover:gap-3 transition-all">
//             View 
//             <ArrowRight/>
//             </div>
//           </Link>
//         </div>

//         {/* Course Card 4 */}
//         <div
//           className="md:w-[25%] w-[100%] h-[30rem] relative group"
//           ref={ref}
//           style={{
//             transform: isInView ? "none" : "translateY(200px)",
//             opacity: isInView ? 1 : 0,
//             transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 1s",
//           }}
//         >
//           <Image
//             src="https://images.unsplash.com/photo-1553521041-d168abd31de3?q=80&w=1364&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
//             alt="Massage Therapy"
//             fill
//             className="object-cover"
//           />
//           {/* Overlay */}
//           <div className="absolute inset-0 bg-black opacity-50 transition-opacity duration-300 group-hover:opacity-60"></div>
//           {/* Button */}
//           <Link href={"/courses"} className="group text-lg absolute bottom-0 left-0 w-full bg-gray-300/20 backdrop-blur-xl text-white text-center py-4 font-semibold transition">
//             <div className="flex items-center justify-center gap-2 group-hover:text-xl group-hover:gap-3 transition-all">
//             View 
//             <ArrowRight/>
//             </div>
//           </Link>
//         </div>
//       </div>

//       {/* <button className="flex gap-3 hover:scale-105 hover:gap-4 transition-all px-7 items-center py-4 font-semibold bg-[#ffac8c] text-xl mt-9 rounded-full">
//         <p>View Services</p>
//         <ArrowRight size={24} />
//       </button> */}
//     </div>
//   );
// };

// export default Courses;

'use client'
import { useState } from "react"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { CheckCircle } from "lucide-react"

export default function Component() {
  const [activeTab, setActiveTab] = useState("haircare")

  const courses = [
    { id: "haircare", name: "Hair Care" },
    { id: "coloring", name: "Hair Coloring" },
    { id: "styling", name: "Styling" },
    { id: "business", name: "Business" },
  ]

  const courseContent = {
    haircare: {
      title: "Hair Care Fundamentals",
      learn: [
        "Understanding different hair types and textures",
        "Proper shampooing and conditioning techniques",
        "Scalp health and treatment",
        "Hair cutting fundamentals",
      ],
      highlights: [
        "Hands-on practice with various hair types",
        "Focus on natural and organic hair care products",
        "Learn to create personalized hair care routines",
        "Certification in trichology basics",
      ],
      faq: [
        {
          question: "How long is the Hair Care course?",
          answer: "The Hair Care Fundamentals course is 8 weeks long, with classes held twice a week.",
        },
        {
          question: "What tools are provided for the Hair Care course?",
          answer: "We provide a complete kit including shampoos, conditioners, treatment products, and cutting tools.",
        },
      ],
    },
    coloring: {
      title: "Advanced Hair Coloring",
      learn: [
        "Color theory and application techniques",
        "Balayage and highlighting methods",
        "Color correction procedures",
        "Creative and avant-garde coloring",
      ],
      highlights: [
        "Work with professional-grade coloring products",
        "Learn to create custom color formulas",
        "Hands-on experience with diverse hair types",
        "Portfolio development workshops",
      ],
      faq: [
        {
          question: "Do I need prior coloring experience for this course?",
          answer: "Basic hair coloring knowledge is recommended, but not required. We'll cover fundamentals before advancing.",
        },
        {
          question: "Are the coloring products safe and eco-friendly?",
          answer: "Yes, we use ammonia-free, low-chemical options and emphasize eco-friendly coloring practices.",
        },
      ],
    },
    styling: {
      title: "Professional Styling Techniques",
      learn: [
        "Advanced blow-drying and iron work",
        "Updos and special occasion styling",
        "Men's styling and grooming",
        "Texture manipulation and curl definition",
      ],
      highlights: [
        "Master the latest styling tools and products",
        "Create runway and editorial looks",
        "Learn time-management for efficient styling",
        "Participate in live styling events and competitions",
      ],
      faq: [
        {
          question: "What styling tools do I need to bring?",
          answer: "We provide all necessary tools, including high-end dryers, irons, and styling products.",
        },
        {
          question: "Is this course suitable for beginners?",
          answer: "While some basic styling knowledge is helpful, this course is designed for all skill levels.",
        },
      ],
    },
    business: {
      title: "Salon Business Management",
      learn: [
        "Salon operations and staff management",
        "Marketing and client retention strategies",
        "Financial planning and budgeting",
        "Legal and ethical considerations in the beauty industry",
      ],
      highlights: [
        "Develop a comprehensive business plan",
        "Learn from successful salon owners and industry leaders",
        "Master salon software and booking systems",
        "Gain insights into franchise opportunities",
      ],
      faq: [
        {
          question: "Do I need to own a salon to take this course?",
          answer: "No, this course is valuable for current and aspiring salon owners, as well as those in management positions.",
        },
        {
          question: "Does this course cover online marketing for salons?",
          answer: "Yes, we cover both traditional and digital marketing strategies, including social media and online booking systems.",
        },
      ],
    },
  }

  return (
    <div className="min-h-screen bg-gray-300 w-[100%] flex items-center justify-center pt-16"> {/* Added margin top */}
      <div className="bg-gray-300 rounded-lg p-4 sm:p-6 lg:p-8 w-full max-w-6xl">
        <h1 className="text-[5vw] sm:text-[4vw] md:text-[3vw] lg:text-[2.5vw] xl:text-[2vw] font-bold mb-4 sm:mb-6 lg:mb-8 text-center">
          Salon Academy Courses
        </h1>
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-2 sm:grid-cols-4 mb-6 bg-gray-300 min-h-fit"> {/* Adjusted spacing */}
            {courses.map((course) => (
              <TabsTrigger
                key={course.id}
                value={course.id}
                className="px-2 mx-2 md:my-0 my-2 sm:px-4 py-2 h-12 text-[2.5vw] sm:text-[2vw] md:text-[1.5vw] lg:text-[1.2vw] xl:text-[1vw] font-medium transition-colors  data-[state=active]:bg-orange-500 data-[state=active]:text-white data-[state=inactive]:bg-gray-400 data-[state=inactive]:text-black" // Set fixed height and inactive styles
              >
                {course.name}
              </TabsTrigger>
            ))}
          </TabsList>
          {Object.entries(courseContent).map(([id, content]) => (
            <TabsContent key={id} value={id}>
              <div className="space-y-6 sm:space-y-8 lg:space-y-10 mt-9"> {/* Added vertical spacing */}
                <h2 className="text-[4vw] sm:text-[3.5vw] md:text-[3vw] lg:text-[2.5vw] xl:text-[2vw] font-semibold mb-4">
                  {content.title}
                </h2>
                <section>
                  <h3 className="text-[3.5vw] sm:text-[3vw] md:text-[2.5vw] lg:text-[2vw] xl:text-[1.5vw] font-semibold mb-3 sm:mb-4">
                    What You&apos;ll Learn
                  </h3>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
                    {content.learn.map((item, index) => (
                      <li key={index} className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-orange-500 mr-2 flex-shrink-0 mt-1" />
                        <span className="text-[3vw] sm:text-[2.5vw] md:text-[2vw] lg:text-[1.5vw] xl:text-[1.2vw]">{item}</span>
                      </li>
                    ))}
                  </ul>
                </section>
                <section>
                  <h3 className="text-[3.5vw] sm:text-[3vw] md:text-[2.5vw] lg:text-[2vw] xl:text-[1.5vw] font-semibold mb-3 sm:mb-4">
                    Course Highlights
                  </h3>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
                    {content.highlights.map((item, index) => (
                      <li key={index} className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-orange-500 mr-2 flex-shrink-0 mt-1" />
                        <span className="text-[3vw] sm:text-[2.5vw] md:text-[2vw] lg:text-[1.5vw] xl:text-[1.2vw]">{item}</span>
                      </li>
                    ))}
                  </ul>
                </section>
                <section>
                  <h3 className="text-[3.5vw] sm:text-[3vw] md:text-[2.5vw] lg:text-[2vw] xl:text-[1.5vw] font-semibold mb-3 sm:mb-4">
                    Frequently Asked Questions
                  </h3>
                  <Accordion type="single" collapsible className="w-full">
                    {content.faq.map((item, index) => (
                      <AccordionItem key={index} value={`item-${index}`}>
                        <AccordionTrigger className="text-left text-[3vw] sm:text-[2.5vw] md:text-[2vw] lg:text-[1.5vw] xl:text-[1.2vw] font-medium">
                          {item.question}
                        </AccordionTrigger>
                        <AccordionContent>
                          <p className="text-[3vw] sm:text-[2.5vw] md:text-[2vw] lg:text-[1.5vw] xl:text-[1.2vw]">{item.answer}</p>
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </section>
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </div>
  )
}
