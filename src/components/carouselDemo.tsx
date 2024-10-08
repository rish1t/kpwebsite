import * as React from "react"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import Image from "next/image"

export function Component() {
    return (
        <div className="w-full max-w-5xl mt-9 mx-auto md:px-0 px-[18vw]">
            <Carousel
                opts={{
                    align: "start",
                }}
                className="w-full flex flex-col"
            >
                <CarouselContent className="-ml-2.5 md:-ml-4">
                    {Array.from({ length: 5 }).map((_, index) => (
                        <CarouselItem key={index} className="pl-2.5 md:pl-4 md:basis-1/2 lg:basis-1/3">
                            <div className="relative aspect-[4/5] w-full">
                                <Image
                                    src="https://images.unsplash.com/photo-1574015974293-817f0ebebb74?q=80&w=1273&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                    alt="50% Off Haircut"
                                    fill
                                    className="object-cover rounded-lg"
                                />
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <div className="flex justify-center mt-4 gap-4">
                    <CarouselPrevious />
                    <CarouselNext />
                </div>
            </Carousel>
        </div>
    )
}