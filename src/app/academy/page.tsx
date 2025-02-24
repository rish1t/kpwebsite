"use client"

import WhatsAppChatBox from "@/components/whatsapp";
// import Testicles from "@/components/testicles";
import HeroSection from "@/components/acadhero";
import AboutUs from "@/components/academy/about-us";
import PosterGrid from "@/components/posterGrid";
import Strip from "@/components/horizontal-strip";
import StudentShowcase from "@/components/sw";
import Component from "@/components/form";
import Testimonials from "@/components/testimonials";
//import Poster from "@/components/poster";


export default function Home() {
  return (
    <div className="flex overflow-x-hidden flex-col items-center justify-start font-[family-name:var(--font-geist-sans)] bg-[#FDFBF9] text-[#111111]">
      <WhatsAppChatBox />
      <HeroSection />
      <Strip/>
      <AboutUs />
      <PosterGrid/>
      <Component />
      {/* <Poster/> */}
      {/* <Courses /> */}
      <StudentShowcase/>
      <Testimonials/>
    </div>
  );
}