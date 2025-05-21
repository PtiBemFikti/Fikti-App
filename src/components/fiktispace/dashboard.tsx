import Image from "next/image";
import { AkiraExpanded, Lato } from "@/styles/font";
import Link from "next/link";
export default function DashboardPage() {
  return (
    <div>
      {/* desktop */}
      <div className="mt-10 md:block hidden">
        <div className="flex-wrap bg-[#FECB62]">
          <div className="flex flex-col lg:flex-row lg:justify-between items-center mt-24 relative overflow-hidden z-0 px-20">
            <div className="flex-col gap-3 flex py-10">
              <Link href="/" className="">
                <Image
                  src={"/fiktispace/back.png"}
                  alt="back"
                  width={50}
                  height={50}
                  className="cursor-pointer hover:scale-x-[1.3] hover:scale-y-[1.3] transition-all duration-400"
                ></Image>
              </Link>
              <div className={`${Lato.className} text-[#0A2352] text-[1.35rem] font-semibold mt-2`}>
                Welcome to FIKTI Sport and Art Championship
              </div>
              <div className="flex-col flex">
                <div className="flex-col flex">
                  <div className={`${AkiraExpanded.className} font-semibold text-[#0A2352] text-[4.25rem] leading-none`}>
                    FIKTI SPACE
                  </div>
                  <div className={`${AkiraExpanded.className} font-bold text-[#0A2352] text-[10rem] leading-none`}>
                    4.0
                  </div>
                </div>
                <div className={`${Lato.className} text-[#0A2352] text-[1.35rem] font-semibold`}>
                  Fuel the Passion, Embrace the Challenge!
                </div>
              </div>
            </div>

            {/* <div className="-mb-16 lg:pt-6">
              <Image
                src={"/fiktispace/Maskot for hero.png"}
                alt={"dashboard"}
                width={600}
                height={1000}
              ></Image>
            </div> */}
            <div className="lg:-mb-5 lg:pt-3">
              <Image
                src={"/fiktispace/Hero image.png"}
                alt={"dashboard"}
                width={680}
                height={650}
              ></Image>
            </div>
            {/* <div className="lg:-mb-2 lg:pt-4">
              <Image
                src={"/fiktispace/Hero image.png"}
                alt={"dashboard"}
                width={700}
                height={1000}
              ></Image>
            </div> */}
          </div>
        </div>
      </div>

      {/* mobile */}
      <div className="mt-24 md:hidden">
        <div className="flex-wrap bg-[#FECB62] pt-6">
          <div className="flex px-6 items-center relative overflow-hidden z-0">
            <div className="flex-col justify-start items-start flex">
              <Link href="/" className="mb-4">
                <Image
                  src={"/fiktispace/back.png"}
                  alt="back"
                  width={45}
                  height={45}
                  className="cursor-pointer hover:scale-x-[1.3] hover:scale-y-[1.3] transition-all duration-400"
                ></Image>
              </Link>
              <div className="flex-col justify-center items-center md:justify-start md:items-start gap-3 flex">
                <div className="flex-col flex">
                  <div className={`${Lato.className} text-[#0A2352] text-[1rem] font-semibold mb-2`}>
                    Welcome to FIKTI Sport and Art Championship
                  </div>
                  <div className={`${AkiraExpanded.className} font-semibold text-[#0A2352] text-[2rem] leading-none`}>
                    FIKTI SPACE
                  </div>
                  <div className={`${AkiraExpanded.className} font-bold text-[#0A2352] text-[6rem] leading-none`}>
                    4.0
                  </div>
                  <div className={`${Lato.className} text-[#0A2352] text-[1.15rem] font-semibold`}>
                    Fuel the Passion, Embrace the Challenge!
                  </div>
                </div>
              </div>
              {/* <div className="-mb-16 pt-6">
              <Image
                src={"/fiktispace/Maskot for hero.png"}
                alt={"dashboard"}
                width={600}
                height={1000}
              ></Image>
            </div> */}
            <div className="pt-2">
              <Image
                src={"/fiktispace/Hero image animate.png"}
                alt={"dashboard"}
                width={700}
                height={1000}
              ></Image>
            </div>
            {/* <div className="-mb-2 pt-6">
              <Image
                src={"/fiktispace/Hero image.png"}
                alt={"dashboard"}
                width={700}
                height={1000}
              ></Image>
            </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
