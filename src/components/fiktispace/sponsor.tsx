import { Lato, AkiraExpanded } from "@/styles/font";
import Image from "next/image";

export default function SponsorPage() {
  return (
    <div className="mt-10 w-[90%] md:w-[75%] mx-auto">
      <div className="pb-20 flex flex-col lg:flex-row justify-center gap-10">
        {/* <div className="text-center">
          <h1 className={`text-sm md:text-xl bg-gradient-to-r from-[#FECB62] to-white bg-clip-text text-transparent ${AkiraExpanded.className}`}>
            Our Sponsor
          </h1>
          <div className="flex flex-wrap justify-center px-4 pt-4 gap-8">
            <Image
              src={"/fiktispace/sponsor/badmin_club.png"}
              alt="back"
              width={500}
              height={500}
              className="w-16 h-16 lg:w-[5.5rem] lg:h-[5.5rem]"
            ></Image>
            <Image
              src={"/fiktispace/sponsor/badmin_club.png"}
              alt="back"
              width={500}
              height={500}
              className="w-16 h-16 lg:w-[5.5rem] lg:h-[5.5rem]"
            ></Image>
            <Image
              src={"/fiktispace/sponsor/badmin_club.png"}
              alt="back"
              width={500}
              height={500}
              className="w-16 h-16 lg:w-[5.5rem] lg:h-[5.5rem]"
            ></Image>
            <Image
              src={"/fiktispace/sponsor/badmin_club.png"}
              alt="back"
              width={500}
              height={500}
              className="w-16 h-16 lg:w-[5.5rem] lg:h-[5.5rem]"
            ></Image>
            <Image
              src={"/fiktispace/sponsor/badmin_club.png"}
              alt="back"
              width={500}
              height={500}
              className="w-16 h-16 lg:w-[5.5rem] lg:h-[5.5rem]"
            ></Image>
            <Image
              src={"/fiktispace/sponsor/badmin_club.png"}
              alt="back"
              width={500}
              height={500}
              className="w-16 h-16 lg:w-[5.5rem] lg:h-[5.5rem]"
            ></Image>
          </div>
        </div> */}
        <div className="text-center">
          <h1 className={`text-sm md:text-xl bg-gradient-to-r from-[#FECB62] to-white bg-clip-text text-transparent ${AkiraExpanded.className}`}>
            Our Media Partner
          </h1>
          <div className="flex flex-wrap justify-center px-4 pt-6 gap-12">
            <Image
              src={"/fiktispace/sponsor/badmin_club.png"}
              alt="back"
              width={500}
              height={500}
              className="w-16 h-16 lg:w-[5.5rem] lg:h-[5.5rem]"
            ></Image>
            <Image
              src={"/fiktispace/sponsor/commadesign.png"}
              alt="back"
              width={500}
              height={500}
              className="w-16 h-16 lg:w-[5.5rem] lg:h-[5.5rem]"
            ></Image>
          </div>
        </div>
      </div>
    </div>
  );
}
