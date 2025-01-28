// pages/index.tsx
import Image from 'next/image';
import React from 'react';

const BentoGrid: React.FC = () => {
  const images = [
    'https://drive.google.com/thumbnail?id=1-wNY0md2ZfDKCIRhGi_DnpJktm9XoJTm&sz=w1500',
    'https://drive.google.com/thumbnail?id=1Uh55kjOEUGHH0F3kGP9jAFW0yg0uoL34&sz=w1500',
    'https://drive.google.com/thumbnail?id=1bQaDvdmTRRV2WQkEv6hg9bAhv12T5D79&sz=w1500',
    'https://drive.google.com/thumbnail?id=1Lbl5hBSUXt7Q70S6hQ6iSHexrBZoJcia&sz=w1500', 
    'https://drive.google.com/thumbnail?id=1PAgkdhtgD3buCRUVhhTUKpPT55LW2tbH&sz=w1500', 
    'https://drive.google.com/thumbnail?id=1H18VydmRiA8tR-_amJ_FP1xKOzFDYmrp&sz=w1500', 
    'https://drive.google.com/thumbnail?id=13UbryPaOjZsjurLZXaa2dLBVGMUu3b7t&sz=w1500',
    'https://drive.google.com/thumbnail?id=1WWcifMJn6XcIbOpmnD6xxo56Ud0XUfyC&sz=w1500',
  ];

  return (
    <div className="min-h-fit bg-black md:py-[4%] w-screen flex items-center justify-center p-4">
      <div className="grid grid-cols-6 gap-3 w-full max-w-[90%]">
        {/* Image 1: Large wide */}
        <div className="md:col-span-4 col-span-4 relative overflow-hidden" style={{ paddingTop: '35%' }}>
          <Image
            src={images[0]}
            alt="Image 1"
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
          />
        </div>

        {/* Image 2: Small square */}
        <div className="md:col-span-2 col-span-2 relative overflow-hidden" style={{ paddingTop: '95%' }}>
          <Image
            src={images[1]}
            alt="Image 2"
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
          />
        </div>

        {/* Image 3: Tall */}
        <div className="md:col-span-2 md:row-span-2 col-span-2 relative overflow-hidden" style={{ paddingTop: '140%' }}>
          <Image
            src={images[3]}
            alt="Image 3"
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
          />
        </div>


        <div className="md:col-span-2 col-span-4 relative overflow-hidden" style={{ paddingTop: '95%' }}>
          <Image
            src={images[5]}
            alt="Image 6"
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
          />
        </div>

        {/* Image 5: Small square */}
        <div className="md:col-span-2 col-span-2 relative overflow-hidden" style={{ paddingTop: '95%' }}>
          <Image
            src={images[4]}
            alt="Image 5"
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
          />
        </div>

        {/* Image 6: Small square */}


        {/* Image 7: Large
        <div className="col-span-4 relative overflow-hidden" style={{ paddingTop: '55%' }}>
          <Image
            src={images[6]}
            alt="Image 7"
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
          />
        </div> */}

        {/* Image 8: Small square */}
        <div className="md:col-span-2 col-span-2 relative overflow-hidden" style={{ paddingTop: '95%' }}>
          <Image
            src={images[6]}
            alt="Image 8"
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
          />
        </div>

        {/* Image 8: Small square */}
        <div className="md:col-span-2 col-span-2 relative overflow-hidden" style={{ paddingTop: '95%' }}>
          <Image
            src={images[7]}
            alt="Image 8"
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default BentoGrid;
