"use client"

import Hero from "../components/hero";
import WhatsAppChatBox from "../components/whatsapp";
import { About } from "../components/about";
import Services from "../components/services";
import Deals from "../components/deals";
import Testicles from "../components/testicles";
import Footer from "../components/footer";
import Component from "@/components/whyus";
import Brands from "@/components/brands";
import InstagramReels from "@/components/reels";

export default function Home() {
  return (
    <div className="flex flex-col overflow-x-hidden items-center justify-start font-[family-name:var(--font-geist-sans)] bg-[#FDFBF9] text-[#111111]">
      <WhatsAppChatBox />
      <Hero />


      <About />


      <Services />
      <InstagramReels />
      <Component />


      <Brands />

      <Deals />

      {/* <VideoPage /> */}
      <Testicles />

      <Footer />
    </div>
  );
}