'use client'

import { useState } from "react"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle } from "lucide-react"

export default function Component() {
  const [activeTab, setActiveTab] = useState("hairdresser")

  const courses = [
    { id: "hairdresser", name: "Hair Dresser" },
    { id: "hairstyling", name: "Hairstyling" },
    { id: "makeup", name: "Makeup" },
  ]

  const courseContent = {
    hairdresser: {
      title: "Professional Hair Dresser Course",
      description: "Welcome to our Hair Dresser Course, where innovation meets expertise! Dive into the fascinating world of hair chemistry and discover the science behind stunning transformations.",
      duration: "2 months",
      fee: "90,000/- (inclusive of GST)",
      schedule: "5 days a week",
      learn: [
        "Different types of hair cuts",
        "Colour theory",
        "Identifying natural level and tone",
        "Identifying artificial level tone & intensity",
        "Hair Color Chemistry",
        "Hair Color Essentials",
        "Hair Color Techniques",
        "Client Consultation",
        "Product and Application Overview",
        "Global Color Technique",
        "Classic Highlights",
        "Baby Highlights",
        "Partial Highlights – Slicing",
        "Heena coated hair color",
        "Money Piece (Face Framing)",
      ],
      placement: "Assured as per your performance & our requirement.",
    },
    hairstyling: {
      title: "Hairstyling Basic to Advance Course",
      description: "Welcome to our exciting Hair Styling Course! Whether you're a budding stylist or someone looking to refine their skills, this course offers a comprehensive journey into the art of hair design.",
      duration: "1 month",
      fee: "50,000/- (inclusive of GST)",
      schedule: "5 days a week",
      learn: [
        "Blow dry",
        "Voluminous tongs",
        "Beachy curls",
        "Hollywood waves",
        "Braids",
        "Classic bun",
        "Messy bun",
        "Textured curls",
        "Sleek pony",
        "Messy pony",
        "Half pony (Deepika Padukone pony tail)",
        "Twisted bun",
        "Dutch braid with waves",
        "Balloon braid with curls",
        "Bridal sleek bun",
      ],
      placement: "Assured as per your performance & our requirement.",
    },
    makeup: {
      title: "Short Term Professional Makeup Course",
      description: "Short duration courses at Kaya Planet Academy help you revise the latest trends in makeup, hair making and styling. We encourage you to practice one on one for every look taught in the class.",
      duration: "1 month",
      fee: "70,000/- (inclusive of GST)",
      schedule: "5 days a week",
      learn: [
        "Product knowledge (Indian & international)",
        "8 different wedding looks",
        "5 different types of bridal looks",
        "Study of face shapes & sculpting",
        "Application of face contour & blusher",
        "Day makeup",
        "Night Makeup",
        "Airbrush Makeup",
        "Celebrity looks",
        "Different types of draping",
        "6 types of hairstyles",
      ],
      placement: "Assured as per your performance & our requirement.",
      additionalInfo: "Goodie bags worth 15,000/- will be given to students",
    },
  }

  return (
    <div className="min-h-screen bg-[#0f0f0f] w-full flex items-center justify-center py-16 px-4">
      <div className="w-full max-w-4xl">
        <h1 className="text-3xl font-semibold mb-16 text-center text-white">
          Our Courses
        </h1>
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="flex justify-center mb-8 bg-[#0f0f0f] rounded-lg p-5">
            {courses.map((course) => (
              <TabsTrigger
                key={course.id}
                value={course.id}
                className="px-6 py-3 text-base font-medium transition-colors rounded-md text-gray-300 hover:bg-[#2a2a2a] data-[state=active]:bg-orange-500 data-[state=active]:text-white"
              >
                {course.name}
              </TabsTrigger>
            ))}
          </TabsList>
          {Object.entries(courseContent).map(([id, content]) => (
            <TabsContent key={id} value={id}>
              <div className="space-y-8 w-[100%]">
                <Card className="bg-[#1a1a1a] border-none">
                  <CardContent className="p-8">
                    <h2 className="text-2xl font-semibold mb-4 text-orange-500">{content.title}</h2>
                    <p className="text-base mb-6 text-gray-300">{content.description}</p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6 text-base">
                      <div className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-orange-500" />
                        <span className="text-gray-200">Duration: {content.duration}</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-orange-500" />
                        <span className="text-gray-200">Fee: {content.fee}</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-orange-500" />
                        <span className="text-gray-200">Schedule: {content.schedule}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <Card className="bg-[#1a1a1a] border-none">
                  <CardContent className="p-8">
                    <h3 className="text-xl font-semibold mb-4 text-white">Course Content</h3>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-base">
                      {content.learn.map((item, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-orange-500 mt-1 flex-shrink-0" />
                          <span className="text-gray-300">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
                <Card className="bg-[#1a1a1a] border-none">
                  <CardContent className="p-8">
                    <h3 className="text-xl font-semibold mb-3 text-white">Placement</h3>
                    <p className="text-base text-gray-300">{content.placement}</p>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </div>
  )
}