import { ArrowRight } from 'lucide-react';
import Image from 'next/image';

const HeroSection = () => {
  return (
    <section className="w-[100%] md:px-[5%] px-3 flex items-start justify-start h-[100vh]">
      {/* Fullscreen background image */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1581404788767-726320400cea?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Salon Academy"
          layout="fill"
          objectFit="cover"
          className="grayscale brightness-50 contrast-125"
        />
        {/* Grainy overlay */}
        <div className="absolute inset-0 bg-black opacity-50 mix-blend-multiply"></div>
        <div className="absolute inset-0 bg-[url('/path-to-grainy-overlay.png')] opacity-10"></div>
      </div>

      {/* Intro text and button */}
      <div className="relative z-10 flex items-center h-full w-[100%] px-6">
        <div className="text-left">
          <h1 className="text-white  font-[family-name:var(--font-stardom)]  text-[12vw] md:text-[4vw] font-medium">
            Welcome to Our Salon Academy
          </h1>
          <p className="text-white mt-4 md:max-w-[50vw] text-[5vw] md:text-[2vw]">
            Transform your passion into profession with our hands-on training courses.
          </p>
          <button className="flex items-center justify-center gap-[1vw] mt-[4vw] md:px-[1.5vw] lg:px-[1vw] px-[4vw] lg:py-[0.8vw] md:py-[1vw] py-[1.8vw] bg-[#F27708] transition-all text-black md:text-[1.3vw] text-sm rounded-full hover:scale-105 hover:gap-[1.2vw]">
            Learn More
            <ArrowRight size={24}/>
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
