import Hero from "./components/hero";
import { Star, Scissors } from "lucide-react";
import WhatsAppChatBox from "./components/whatsapp";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-start min-h-screen font-[family-name:var(--font-geist-sans)] bg-[#FDFBF9] text-[#111111]">
      <WhatsAppChatBox/>
      <Hero />

      {/* About Us Section */}
      <section className="py-16 bg-[#FEE6E1] w-[100%]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#F27708] mb-8 text-center">About Us</h2>
          <p className="text-[#111111] text-center max-w-2xl mx-auto">
            At Chic Salon, we believe in bringing out your natural beauty. Our team of expert stylists is dedicated to providing you with the best hair care experience.
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-[#FDFBF9] w-[100%]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#F27708] mb-8 text-center">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {['Haircut & Styling', 'Color & Highlights', 'Hair Treatments'].map((service) => (
              <div key={service} className="bg-white p-6 rounded-lg shadow-lg border border-[#EACFAE] hover:border-[#F27708] transition duration-300">
                <Scissors className="w-12 h-12 text-[#F27708] mb-4 mx-auto" />
                <h3 className="text-xl font-semibold text-[#F27708] mb-2 text-center">{service}</h3>
                <p className="text-[#111111] text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Deals Section */}
      <section className="py-16 bg-[#EACFAE] w-[100%]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#F27708] mb-8 text-center">Special Deals</h2>
          <div className="bg-[#FDFBF9] p-6 rounded-lg shadow-lg border border-[#F89134] max-w-md mx-auto">
            <h3 className="text-xl font-semibold text-[#111111] mb-2 text-center">New Client Offer</h3>
            <p className="text-[#F27708] text-center mb-4">Get 20% off on your first visit!</p>
            <button className="bg-[#F27708] text-white py-2 px-6 rounded-full hover:bg-[#F89134] transition duration-300 block mx-auto">
              Claim Offer
            </button>
          </div>
        </div>
      </section>

      {/* Client Testimonials */}
      <section className="py-16 bg-[#FDFBF9] w-[100%]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#F27708] mb-8 text-center">Client Testimonials</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { name: 'Sarah L.', text: 'Amazing service! My hair has never looked better.' },
              { name: 'Mike R.', text: 'The staff is friendly and professional. Highly recommended!' },
            ].map((testimonial, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg border border-[#EACFAE] hover:border-[#F27708] transition duration-300">
                <div className="flex items-center mb-4">
                  <Star className="w-5 h-5 text-[#F89134] mr-1" />
                  <Star className="w-5 h-5 text-[#F89134] mr-1" />
                  <Star className="w-5 h-5 text-[#F89134] mr-1" />
                  <Star className="w-5 h-5 text-[#F89134] mr-1" />
                  <Star className="w-5 h-5 text-[#F89134]" />
                </div>
                <p className="text-[#111111] mb-2">{testimonial.text}</p>
                <p className="text-[#F27708] font-semibold">{testimonial.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#FEE6E1] py-8 w-[100%]">
        <div className="container mx-auto px-4 text-center">
          <p className="text-[#111111] mb-2">&copy; 2023 Chic Salon. All rights reserved.</p>
          <div className="flex justify-center space-x-4">
            <a href="#" className="text-[#F27708] hover:text-[#F89134] transition duration-300">
              Privacy Policy
            </a>
            <a href="#" className="text-[#F27708] hover:text-[#F89134] transition duration-300">
              Terms of Service
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}