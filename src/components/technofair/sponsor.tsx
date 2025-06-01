import { poppins } from "@/styles/font";
import Image from "next/image";

const sponsorUtama = {
  title: "OFFICIAL EXCLUSIVE CLOUD HOSTING PARTNER",
  image: "/technofair/dewaweb.png",
};

const otherSponsorsData = [
  {
    title: "SPONSORSHIP",
    images: ["/technofair/logoTF12/sponsorship/Salinan Dicoding Logo - White.png"],
  },
  {
    title: "PARTNERSHIP",
    images: [
      "/technofair/logoTF12/partnership/CCUG_Logo_with_Text.png",
      "/technofair/logoTF12/partnership/LOGO Gunadarma IO.png",
    ],
  },
  {
    title: "MEDIA PARTNERS",
    images: [
      "/technofair/logoTF12/medpart/Logo BEMP STI.png",
      "/technofair/logoTF12/medpart/Logo CSC background putih.jpg",
      "/technofair/logoTF12/medpart/Logo Himti.png",
      "/technofair/logoTF12/medpart/Logo Job on yours.jpg",
      "/technofair/logoTF12/medpart/logo-gdgocug.png",
      "/technofair/logoTF12/medpart/Logo TeknoEvent25.png",
      "/technofair/logoTF12/medpart/UIUX Indo.png",
      "/technofair/logoTF12/medpart/bem FTI.png",
      "/technofair/logoTF12/medpart/BEM PSI.png",
      "/technofair/logoTF12/medpart/Logo Comma Design.png",
      "/technofair/logoTF12/medpart/logo-himsi.png",
      "/technofair/logoTF12/medpart/Logo MAHAGUN.png",
    ],
  },
];

export function Sponsor() {
  return (
    <div className="mt-56 mb-60">
      <h1
        className={`${poppins.className} text-3xl lg:text-[65px] font-extrabold text-center pb-10`}
      >
        Sponsorship
      </h1>

      {/* Primary Sponsor */}
      <div className="mt-10 lg:container lg:mx-auto">
        <div className="flex items-center justify-center gap-5 whitespace-nowrap overflow-hidden">
            <div className="bg-white h-[1px] flex-1" />
            <h2 className="text-xs lg:text-base tracking-tight">
              {sponsorUtama.title}
            </h2>
            <div className="bg-white h-[1px] flex-1" />
          </div>
        <div className="flex justify-center mt-5">
          <div className="w-full max-w-md hover:scale-105 transition-all duration-300">
            <Image
              src={sponsorUtama.image}
              alt="Dewaweb Sponsor"
              width={500}
              height={250}
              layout="responsive"
              objectFit="contain"
              priority
            />
          </div>
        </div>
      </div>
      

      {/* Other Sponsors */}
      {otherSponsorsData.map((sponsor, index) => (
        <div key={index} className="mt-10 lg:container lg:mx-auto">
          <div className="flex items-center justify-center gap-5 whitespace-nowrap overflow-hidden">
            <div className="bg-white h-[1px] flex-1" />
            <h2 className="text-xs lg:text-base tracking-tight">
              {sponsor.title}
            </h2>
            <div className="bg-white h-[1px] flex-1" />
          </div>

          <div className="flex flex-wrap justify-center gap-5 mt-5">
            {sponsor.images.map((image, imgIndex) => (
              <div
                key={imgIndex}
                className="relative w-40 h-24 lg:w-48 lg:h-28 hover:scale-105 transition-all duration-300"
              >
                <Image
                  src={image}
                  alt={`${sponsor.title} logo`}
                  layout="fill"
                  objectFit="contain"
                  quality={100}
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
