import { poppins } from "@/styles/font";
import Image from "next/image";
import { useState } from "react";

const sponsorUtama = {
  title: "OFFICIAL EXCLUSIVE CLOUD HOSTING PARTNER",
  image: "/technofair/dewaweb.png"
};

const otherSponsorsData = [
  {
    title: "SPONSORSHIP",
    images: [
      "/technofair/logoTF12/sponsorship/Dicoding Logo.png"
    ]
  },
  {
    title: "PARTNERSHIP",
    images: [
      "/technofair/logoTF12/partnership/CCUG_Logo_with_Text.png",
      "/technofair/logoTF12/partnership/LOGO Gunadarma IO.png"
    ]
  },
  {
    title: "MEDIA PARTNERS",
    images: [
      "/technofair/logoTF12/medpart/Logo BEMP STI.png",
      "/technofair/logoTF12/medpart/Logo CSC.png",
      "/technofair/logoTF12/medpart/Logo Himti.png",
      "/technofair/logoTF12/medpart/Logo Job on yours.jpg",
      "/technofair/logoTF12/medpart/logo-gdgocug.png"
    ]
  }
];

export function Sponsor() {
  const [imgWidth, setImgWidth] = useState<number>(100);
  return (
    <div className="mt-56 mb-60">
      <h1 className={`${poppins.className} text-3xl lg:text-[65px] font-extrabold text-center`}>
        Sponsorship
      </h1>

      {/* Dewaweb Sponsor */}
      <div className="mt-10">
        <div className="lg:container lg:mx-auto">
          {/* Title with horizontal lines */}
          <div className="grid grid-cols-[auto_auto_auto] lg:flex items-center gap-1 lg:gap-5 justify-center whitespace-nowrap overflow-hidden">
            <div className="bg-white h-[1px] w-20 lg:w-full"></div>
            <h1 className="text-xs lg:text-base tracking-tight">
              {sponsorUtama.title}
            </h1>
            <div className="bg-white h-[1px] w-20 lg:w-full"></div>
          </div>
          {/* Sponsor Image */}
          <div className="flex justify-center gap-5 mt-5">
            <div className="mx-auto scale-75 lg:scale-100" style={{ maxWidth: "500px" }}>
              <Image 
                src={sponsorUtama.image}
                alt="Dewaweb Sponsor"
                height={250} 
                width={500}  
                layout="intrinsic" 
                objectFit="contain"
                priority
              />
            </div>
          </div>
        </div>
      </div>

      {/* Other Sponsors */}
      {otherSponsorsData.map((sponsor, index) => (
        <div key={index} className="mt-10">
          <div className="lg:container lg:mx-auto">
            {/* Title with horizontal lines */}
            <div className="grid grid-cols-[auto_auto_auto] lg:flex items-center gap-1 lg:gap-5 justify-center whitespace-nowrap overflow-hidden">
              <div className="bg-white h-[1px] w-36 lg:w-full"></div>
              <h1 className="text-xs lg:text-base tracking-tight">
                {sponsor.title}
              </h1>
              <div className="bg-white h-[1px] w-36 lg:w-full"></div>
            </div>
            {/* Sponsor Images */}
            <div className="flex justify-center gap-5 mt-5 flex-wrap">
              {sponsor.images.map((image, imgIndex) => (
                <div key={imgIndex} className="scale-75 lg:scale-100">
                  <Image 
                    src={image}
                    alt={image}
                    quality={100}
                    loading="lazy"
                    onLoadingComplete={({ naturalWidth, naturalHeight }) => {
                      const calculatedWidth = (naturalWidth / naturalHeight) * 100;
                      setImgWidth(calculatedWidth);
                    }}
                    width={imgWidth}
                    height={100}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
