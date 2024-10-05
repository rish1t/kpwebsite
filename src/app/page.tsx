import Hero from "./components/hero";
import WhatsAppChatBox from "./components/whatsapp";
import { About } from "./components/about";
import Services from "./components/services";
import Deals from "./components/deals";
import Testicles from "./components/testicles";
import Footer from "./components/footer";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-start font-[family-name:var(--font-geist-sans)] bg-[#FDFBF9] text-[#111111]">
      <WhatsAppChatBox/>
      <Hero />

      {/* About Us Section */}
      <About />

      {/* Services Section */}
      <Services/>

      {/* Deals Section */}
      <Deals />

      {/* Client Testimonials */}
      <Testicles />

      {/* Footer */}
      <Footer />
    </div>
  );
}