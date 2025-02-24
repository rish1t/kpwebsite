'use client'

import { Button } from "@/components/ui/button"
import { ArrowRight, Instagram } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function InstagramPromo() {
    return (
        <div className="bg-gradient-to-b w-[100%] py-14 from-zinc-100 to-zinc-200 dark:from-zinc-900 dark:to-zinc-800">
            <div className="max-w-6xl mx-auto p-6 md:p-8 lg:p-12">
                <div className="bg-white dark:bg-zinc-950 rounded-[3.5rem] py-9 shadow-xl p-6 md:p-8 lg:p-16">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12">
                        <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-6 md:w-1/2">
                            <div className="space-y-2">
                                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
                                    Visit our{" "}
                                    <span className="inline-block my-1 bg-gradient-to-r from-purple-600 via-pink-600 to-yellow-500 text-transparent bg-clip-text">
                                        Instagram
                                    </span>
                                </h2>
                                <div className="flex justify-center md:justify-start">
                                    <div className="p-2 rounded-2xl bg-gradient-to-r from-purple-600 via-pink-600 to-yellow-500">
                                        <Instagram className="h-6 w-6 md:h-10 md:w-10 text-white" />
                                    </div>
                                </div>
                            </div>
                            <p className="text-zinc-500 dark:text-zinc-400 text-lg md:text-xl max-w-[600px]">
                                Stay updated with our latest posts, stories, and exclusive content. Join our growing community today!
                            </p>
                            <Link target="_blank" href={"https://www.instagram.com/kayaplanetbeautysalon/"}>
                                <Button
                                    className="group relative inline-flex h-12 items-center justify-center rounded-full px-8 text-base font-medium text-white shadow-lg transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-600 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-gradient-to-r from-purple-600 via-pink-600 to-yellow-500 hover:shadow-pink-500/25 hover:translate-y-[-2px]"
                                >
                                    Visit Instagram
                                    <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                                </Button>
                            </Link>
                        </div>
                        <div className="md:w-1/2 w-full max-w-sm">
                            <div className="relative aspect-[9/16] w-full transform transition-transform duration-300 hover:scale-[1.02]">
                                <div className="min-h-fit">
                                    <Image
                                        src="/kpinsta10kphone.png"
                                        alt="Instagram profile preview"
                                        width={500}
                                        height={500}
                                        className="object-cover"
                                        priority
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}