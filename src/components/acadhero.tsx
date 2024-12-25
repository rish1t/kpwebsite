import Image from 'next/image';

const HeroSection = () => {
  return (
    <section className="relative w-full h-[40vh] md:h-screen overflow-hidden">
      {/* Fullscreen background image */}
      <div className="absolute inset-0">
        <Image
          src="/poster3.jpg"
          alt="Salon Academy"
          layout="fill"
          objectFit="cover"
          className="object-left-top lg:object-center"
        />
        {/* Grainy overlay */}
        {/* <div className="absolute inset-0 bg-black opacity-50 mix-blend-multiply"></div>
        <div className="absolute inset-0 bg-[url('/path-to-grainy-overlay.png')] opacity-10"></div> */}
      </div>

      {/* Intro text and button */}
      {/* <div className="relative z-10 flex items-center h-full w-[100%] px-6">
        <div className="text-left">
          <h1 className="text-white font-[family-name:var(--font-stardom)]  text-[12vw] md:text-[5vw] font-medium">
            Welcome to Our Academy
          </h1>
          <p className="text-white lg:ml-3 md:max-w-[50vw] text-[5vw] md:text-[1.5vw]">
            Transform your passion into profession with our hands-on training courses.
          </p>
          <button className="flex items-center justify-center gap-[1vw] mt-9 md:px-[1.5vw] lg:px-[1vw] px-[4vw] lg:py-[0.8vw] md:py-[1vw] py-[1.8vw] bg-[#F27708] transition-all text-black md:text-[1vw] text-sm rounded-full hover:scale-105 hover:gap-[1.2vw]">
            Learn More
            <ArrowRight size={24}/>
          </button>
        </div>
      </div> */}
    </section>
  );
};

export default HeroSection;

