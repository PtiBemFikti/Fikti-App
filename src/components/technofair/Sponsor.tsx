import { poppins } from "@/styles/font";
import Image from "next/image";

const sponsorUtama = {
  title: "OFFICIAL EXCLUSIVE CLOUD HOSTING PARTNER",
  image: "/technofair/dewaweb.png"
};

const otherSponsorsData = [
  {
    title: "SPONSORSHIP & PARTNERSHIP",
    images: [
      "/technofair/dapoerdjoeang.png",
      "/technofair/frisianflag.png",
      "/technofair/jh-square.png"
    ]
  },
  {
    title: "COMMUNITY PARTNER",
    images: [
      "/technofair/ccug.png",
      "/technofair/gundario.png"
    ]
  },
  {
    title: "MEDIA PARTNERS",
    images: [
      "/technofair/ugtv.png",
      "/technofair/seputar-seminar.png",
      "/technofair/anakgundardotco.png"
    ]
  }
];

export function Sponsor() {
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
                height={250} // Fixed height for dewaweb
                width={500}  // Manually set a width (or adjust based on your design)
                layout="intrinsic" // Automatically maintains aspect ratio
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
                    alt="Sponsor Image"
                    height={100}  // Fixed height
                    width={100}   // Set width dynamically to maintain aspect ratio
                    layout="intrinsic" // Ensures the image keeps its aspect ratio
                    objectFit="contain"
                    priority
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
