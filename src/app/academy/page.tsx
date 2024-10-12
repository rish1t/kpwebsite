"use client"

import WhatsAppChatBox from "@/components/whatsapp";
// import Deals from "@/components/deals";
import Testicles from "@/components/testicles";
import Footer from "@/components/footer";
import FormComponent from "@/components/form";
import HeroSection from "@/components/acadhero";
import Courses from "@/components/acadcourses";
import AboutUs from "@/components/academy/about-us";

export default function Home() {
  return (
    <div className="flex overflow-x-hidden flex-col items-center justify-start font-[family-name:var(--font-geist-sans)] bg-[#FDFBF9] text-[#111111]">
      <WhatsAppChatBox />
      <HeroSection />


      <AboutUs />

      <Courses />
      <Testicles />
      <FormComponent />
      

      <Footer />
    </div>
  );
}