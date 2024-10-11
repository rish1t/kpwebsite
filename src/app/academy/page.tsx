"use client"

import Hero from "@/components/hero";
import WhatsAppChatBox from "@/components/whatsapp";
import { About } from "@/components/about";
import Services from "@/components/services";
import Deals from "@/components/deals";
import Testicles from "@/components/testicles";
import Footer from "@/components/footer";
import VideoPage from "@/components/video";
import FormComponent from "@/components/form";
import Component from "@/components/whyus";
import Brands from "@/components/brands";
import HeroSection from "@/components/acadhero";
import Courses from "@/components/acadcourses";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-start font-[family-name:var(--font-geist-sans)] bg-[#FDFBF9] text-[#111111]">
      <WhatsAppChatBox />
      <HeroSection />

      
      <About />

      <Courses/>
      <VideoPage />
      <Component />
      <Brands/>
      <Deals />

      <Testicles />
      <FormComponent />
      <Footer />
    </div>
  );
}