'use client';

import { useEffect, useState } from 'react';
import { Lato } from "@/styles/font";

export default function AboutPage() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);

    const script = document.createElement('script');
    script.setAttribute('src', 'https://www.instagram.com/embed.js');
    script.setAttribute('async', '');
    document.body.appendChild(script);
  }, []);

  if (!isClient) return null;
  return (
    <div className="pt-4 ">
      <div className="flex items-center justify-center">
        <div className="py-5 md:py-12 px-6 md:px-14">
          <div>
            <p className={`${Lato.className} text-center text-white text-base font-bold md:text-2xl`}>
            FIKTI SPACE is back and inviting you to join in for an array of exciting tournaments! This year, we have competitions in Futsal, Mobile Legends, and much more! Come and compete with us!
            </p>
          </div>
          {/* <div className='mt-3'>
            <blockquote 
              className="instagram-media" 
              data-instgrm-permalink="https://www.instagram.com/reel/DJB4r8rym82/" 
              data-instgrm-version="14">
            </blockquote>
          </div> */}
        </div>
      </div>
    </div>
  );
}
