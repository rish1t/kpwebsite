// pages/index.tsx
import Image from 'next/image';
import React from 'react';

const BentoGrid: React.FC = () => {
  const images = [
    'https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  ];

  return (
    <div className="min-h-fit md:py-[4%] w-screen bg-[#1b1b1b] flex items-center justify-center p-4">
      <div className="grid grid-cols-6 gap-3 w-full max-w-7xl">
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
            src={images[2]}
            alt="Image 3"
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
          />
        </div>

        {/* Image 4: Medium wide */}
        <div className="md:col-span-4 col-span-4 relative overflow-hidden" style={{ paddingTop: '45%' }}>
          <Image
            src={images[3]}
            alt="Image 4"
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
        

        {/* Image 7: Large */}
        <div className="col-span-4 relative overflow-hidden" style={{ paddingTop: '55%' }}>
          <Image
            src={images[6]}
            alt="Image 7"
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
