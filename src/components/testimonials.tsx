'use client'

import { useEffect, useRef } from 'react'
import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"
import Avatar from "boring-avatars"

const reviews = [
  {
    id: 1,
    username: "Gaurangi Katiyar",
    reviewCount: "6 reviews",
    rating: 5,
    time: "2 years ago",
    text: "I was really stressed to find a makeup artist for my big day when I came across Kaya Planet and it was the best decision to choose this place. All the brides blindly choose this place for your makeup. They were so supportive for and they are all so so talented.",
    avatar: "G"
  },
  {
    id: 2,
    username: "Shweta Pandey",
    reviewCount: "4 reviews",
    rating: 5,
    time: "2 years ago",
    text: "Rashika mam has dolled me up on my special day 22nd April. Just saying Thank you is not enough hence I want to share my experience. She has done smokey eyes and it was amazing.",
    avatar: "S"
  },
  {
    id: 3,
    username: "Mansi B",
    reviewCount: "4 reviews",
    rating: 5,
    time: "2 years ago",
    text: "Had an amazing experience at Kaya. From day 1 of makeup discussions to the D-Day, Rashika made sure that each detail mentioned is taken care off. The bridal makeup was amazing, long lasting (stayed for good 10 hours and even beyond).",
    avatar: "M"
  },
  {
    id: 4,
    username: "Sapna Sharma",
    reviewCount: "3 reviews",
    rating: 5,
    time: "3 years ago",
    text: "I have been taking their services for 3 years now. I have been to more salons in Kanpur but somehow I confide in the staff and the owner of Kaya Planet. Rashika and Bhawna mam never suggest anything that will be wrong.",
    avatar: "S"
  },
  {
    id: 5,
    username: "Rupal Gupta",
    reviewCount: "8 reviews",
    rating: 5,
    time: "2 years ago",
    text: "I just wanna say thankyou to Rashika who did my flawless bridal makeup. She enhanced my flaws in a way that It was not looking like I had a whole lot of makeup.",
    avatar: "R"
  },
  {
    id: 6,
    username: "Tanya Gupta",
    reviewCount: "5 reviews",
    rating: 5,
    time: "a year ago",
    text: "Thank you so much Rashika, Idk ki Mai kha se start karu but you are very good artist....And every single person on my wedding appreciated my look, they were calling me pink doll and credit goes to you.",
    avatar: "T"
  }
]

export default function Component() {
  const containerRef = useRef<HTMLDivElement>(null)
  const scrollerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!scrollerRef.current || !containerRef.current) return

    const scrollContent = scrollerRef.current

    const items = Array.from(scrollContent.children)
    items.forEach(item => {
      const clone = item.cloneNode(true) as HTMLElement
      scrollContent.appendChild(clone)
    })

    const scrollWidth = items.reduce((acc, item) => acc + (item as HTMLElement).offsetWidth, 0)

    let scrollPos = 0
    let animation: number

    const scroll = () => {
      scrollPos += 0.5
      if (scrollPos >= scrollWidth) {
        scrollPos = 0
      }
      scrollContent.style.transform = `translateX(${-scrollPos}px)`
      animation = requestAnimationFrame(scroll)
    }

    animation = requestAnimationFrame(scroll)

    return () => cancelAnimationFrame(animation)
  }, [])

  return (
    <div className="w-full bg-gray-50 py-16 min-h-fit">
      <h2 className="text-3xl font-medium text-center mb-10 text-gray-800">Customer Testimonials</h2>
      <div ref={containerRef} className="w-full overflow-hidden p-4">
        <div
          ref={scrollerRef}
          className="flex p-3"
          style={{ willChange: 'transform' }}
        >
          {reviews.map((review) => (
            <Card key={review.id} className="flex-shrink-0 w-[320px] mx-3 transition-all duration-300 hover:shadow-md bg-white border-none">
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <Avatar
                    size={40}
                    name={review.username}
                    variant="beam"
                  />
                  <div className="flex-1">
                    <h3 className="font-medium text-base text-gray-800">{review.username}</h3>
                    <div className="flex items-center gap-2">
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            size={14}
                            className={`${i < review.rating
                              ? 'text-gray-800 fill-gray-800'
                              : 'text-gray-300 fill-gray-300'
                              }`}
                          />
                        ))}
                      </div>
                      <span className="text-xs text-gray-500">{review.time}</span>
                    </div>
                  </div>
                </div>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed mt-5">{review.text}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}