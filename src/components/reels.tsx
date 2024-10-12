// Import dynamic from next
import dynamic from 'next/dynamic';
import React from 'react';

// Disable SSR for the InstagramReels component
const InstagramReels = dynamic(() => import('./InstagramReelsComponent'), { ssr: false });

const Home: React.FC = () => {
  return (
    <div className="p-[5%]">
      {/* Heading */}
      <h2 className="text-2xl font-bold mb-6 text-center md:text-left">Follow us on Instagram</h2>
      
      <div className="flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0 md:space-x-6">
        {/* Instagram Reels */}
        <div className="w-full md:w-1/2">
          <InstagramReels />
        </div>
        
        {/* Instagram Button */}
        <div className="w-full md:w-1/2 flex justify-center md:justify-end">
          <a
            href="https://www.instagram.com/your-instagram-page" // Replace with your Instagram page link
            className="bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-600 text-white font-bold py-3 px-6 rounded-full hover:shadow-lg transition ease-out duration-300"
            target="_blank"
            rel="noopener noreferrer"
          >
            Visit
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
