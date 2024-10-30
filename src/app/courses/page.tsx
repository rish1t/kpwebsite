'use client'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { CheckCircle } from "lucide-react"

export default function Component() {
  const courses = [
    {
      id: "hairdresser",
      name: "Professional Hair Dresser Course",
      description: "Welcome to our Hair Dresser Course, where innovation meets expertise! Dive into the fascinating world of hair chemistry and discover the science behind stunning transformations. Whether you're interested in mastering the art of coloring, perming, or straightening, our course offers hands-on training led by industry professionals.",
      details: [
        "Duration: 2 months (Students can come for queries in future as well)",
        "Fee: 90,000/- (inclusive of GST)",
        "Classes: 5 days a week",
      ],
      content: [
        "Different types of hair cuts",
        "Colour theory",
        "Identifying natural level and tone",
        "Hair Color Chemistry",
        "Hair Color Techniques",
        "Classic Highlights",
        "Baby Highlights",
        "Global Color Technique",
        "Partial Highlights – Slicing",
        "Heena coated hair color",
        "Money Piece (Face Framing)",
      ],
      placement: "Assured as per your performance & our requirement.",
    },
    {
      id: "hairstyling",
      name: "Hairstyling Basic to Advance Course",
      description: "Whether you're a budding stylist or looking to refine your skills, this course offers a comprehensive journey into the art of hair design. Learn the latest techniques in a dynamic environment with guidance from seasoned professionals.",
      details: [
        "Duration: 1 month (Students can come for queries in future as well)",
        "Fee: 50,000/- (inclusive of GST)",
        "Classes: 5 days a week",
      ],
      content: [
        "Blow dry",
        "Voluminous tongs",
        "Beachy curls",
        "Hollywood waves",
        "Braids",
        "Classic bun",
        "Textured curls",
        "Sleek pony",
        "Messy pony",
        "Twisted bun",
        "Dutch braid with waves",
        "Balloon braid with curls",
        "Bridal sleek bun",
      ],
      placement: "Assured as per your performance & our requirement.",
    },
    {
      id: "makeup",
      name: "Short Term Professional Makeup Course",
      description: "Short duration courses at Kaya Planet Academy help you stay updated with the latest trends in makeup and styling. This batch specializes in bridal makeup and accepts limited students for focused training.",
      details: [
        "Duration: 1 month (Students can come for queries in future as well)",
        "Fee: 70,000/- (inclusive of GST, includes goodie bags worth 15,000/-)",
        "Classes: 5 days a week",
      ],
      content: [
        "Product knowledge (Indian & international)",
        "8 different wedding looks",
        "5 different bridal looks",
        "Application of face contour & blusher",
        "Airbrush Makeup",
        "Celebrity looks",
        "Day & Night Makeup",
        "Different types of draping",
        "6 types of hairstyles",
      ],
      placement: "Assured as per your performance & our requirement.",
    },
  ]

  return (
    <div className="min-h-screen bg-gray-300 w-[100%] flex items-center justify-center pt-16">
      <div className="bg-gray-300 rounded-lg p-4 sm:p-6 lg:p-8 w-full max-w-6xl">
        <h1 className="text-[5vw] sm:text-[4vw] md:text-[3vw] lg:text-[2.5vw] xl:text-[2vw] font-bold mb-4 sm:mb-6 lg:mb-8 text-center">
          Salon Academy Courses
        </h1>
        <Accordion type="single" collapsible className="w-full">
          {courses.map((course) => (
            <AccordionItem key={course.id} value={course.id}>
              <AccordionTrigger className="text-[2.5vw] sm:text-[2vw] md:text-[1.5vw] lg:text-[1.2vw] xl:text-[1vw] font-semibold mb-2">
                {course.name}
              </AccordionTrigger>
              <AccordionContent>
                <div className="space-y-6 sm:space-y-8 lg:space-y-10 mt-6">
                  <p className="text-[3vw] sm:text-[2.5vw] md:text-[2vw] lg:text-[1.5vw] xl:text-[1.2vw] mb-3">{course.description}</p>
                  <section>
                    <h3 className="text-[3.5vw] sm:text-[3vw] md:text-[2.5vw] lg:text-[2vw] xl:text-[1.5vw] font-semibold mb-3 sm:mb-4">
                      Course Details
                    </h3>
                    <ul className="list-disc ml-6">
                      {course.details.map((item, index) => (
                        <li key={index} className="text-[3vw] sm:text-[2.5vw] md:text-[2vw] lg:text-[1.5vw] xl:text-[1.2vw]">{item}</li>
                      ))}
                    </ul>
                  </section>
                  <section>
                    <h3 className="text-[3.5vw] sm:text-[3vw] md:text-[2.5vw] lg:text-[2vw] xl:text-[1.5vw] font-semibold mb-3 sm:mb-4">
                      Course Content
                    </h3>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
                      {course.content.map((item, index) => (
                        <li key={index} className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-orange-500 mr-2 flex-shrink-0 mt-1" />
                          <span className="text-[3vw] sm:text-[2.5vw] md:text-[2vw] lg:text-[1.5vw] xl:text-[1.2vw]">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </section>
                  <section>
                    <h3 className="text-[3.5vw] sm:text-[3vw] md:text-[2.5vw] lg:text-[2vw] xl:text-[1.5vw] font-semibold mb-3 sm:mb-4">
                      Placement Information
                    </h3>
                    <p className="text-[3vw] sm:text-[2.5vw] md:text-[2vw] lg:text-[1.5vw] xl:text-[1.2vw]">{course.placement}</p>
                  </section>
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  )
}
