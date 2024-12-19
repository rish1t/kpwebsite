"use client"

import WhatsAppChatBox from "@/components/whatsapp";
// import Deals from "@/components/deals";
import Testicles from "@/components/testicles";
import HeroSection from "@/components/acadhero";
import Courses from "@/components/acadcourses";
import AboutUs from "@/components/academy/about-us";
import Poster from "@/components/poster";

export default function Home() {
  return (
    <div className="flex overflow-x-hidden flex-col items-center justify-start font-[family-name:var(--font-geist-sans)] bg-[#FDFBF9] text-[#111111]">
      <WhatsAppChatBox />
      <HeroSection />
      <Poster/>
      <AboutUs />
      <Courses />
      <Testicles />
    </div>
  );
}