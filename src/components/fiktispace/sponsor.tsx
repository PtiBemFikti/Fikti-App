import { Lato, AkiraExpanded } from "@/styles/font";
import Image from "next/image";

export default function SponsorPage() {
  return (
    <div className="mt-10 w-[90%] md:w-[75%] mx-auto">
      <div className="pb-20 flex flex-col lg:flex-row justify-center gap-10">
        <div className="text-center lg:w-1/3">
          <h1 className={`text-sm md:text-xl bg-gradient-to-r from-[#FECB62] to-white bg-clip-text text-transparent ${AkiraExpanded.className}`}>
            Our Sponsor
          </h1>
          <div className="flex flex-wrap justify-center px-4 pt-5 gap-12">
            <div>
              <Image
                src={"/fiktispace/sponsor/Mile 32 Cafe.png"}
                alt="Mile 32 Cafe"
                width={500}
                height={500} 
                className="w-24 h-20 md:w-28 md:h-24 cursor-pointer hover:scale-110 transition-all duration-300 mb-2"
              ></Image>
              <p className={`${Lato.className} text-center`}>Mile 32 Café</p>
            </div>
          </div>
        </div>
        <div className="text-center lg:w-2/3">
          <h1 className={`text-sm md:text-xl bg-gradient-to-r from-[#FECB62] to-white bg-clip-text text-transparent ${AkiraExpanded.className}`}>
            Our Media Partner
          </h1>
          <div className="flex flex-wrap justify-center px-4 lg:px-10 pt-6 gap-10">
            <Image
              src={"/fiktispace/sponsor/Ikut_event.png"}
              alt="Ikut Event"
              width={500}
              height={500}
              className="w-16 h-16 lg:w-[5.5rem] lg:h-[5.5rem] cursor-pointer hover:scale-110 transition-all duration-300"
            ></Image>
            <Image
              src={"/fiktispace/sponsor/Mahagun.png"}
              alt="Mahagun"
              width={500}
              height={500}
              className="w-16 h-16 lg:w-[5.5rem] lg:h-[5.5rem] cursor-pointer hover:scale-110 transition-all duration-300"
            ></Image>
            <Image
              src={"/fiktispace/sponsor/badmin_club.png"}
              alt="UKM Badmin"
              width={500}
              height={500}
              className="w-16 h-16 lg:w-[5.5rem] lg:h-[5.5rem] cursor-pointer hover:scale-110 transition-all duration-300"
            ></Image>
            <Image
              src={"/fiktispace/sponsor/commadesign.png"}
              alt="Comma Design"
              width={500}
              height={500}
              className="w-16 h-16 lg:w-[5.5rem] lg:h-[5.5rem] cursor-pointer hover:scale-110 transition-all duration-300"
            ></Image>
            <Image
              src={"/fiktispace/sponsor/volly_club.png"}
              alt="UKM Vollyball"
              width={500}
              height={500}
              className="w-[4.5rem] h-16 lg:w-24 lg:h-[5.5rem] cursor-pointer hover:scale-110 transition-all duration-300"
            ></Image>
            <Image
              src={"/fiktispace/sponsor/futsalclub.png"}
              alt="UKM Futsal"
              width={500}
              height={500}
              className="w-16 h-16 lg:w-[5.5rem] lg:h-[5.5rem] cursor-pointer hover:scale-110 transition-all duration-300"
            ></Image>
          </div>
        </div>
      </div>
    </div>
  );
}
