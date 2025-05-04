import Image from "next/image";
import { AkiraExpanded, Lato } from "@/styles/font";
import Link from "next/link";
export default function DashboardPage() {
  return (
    <div>
      <div className="mt-28 md:hidden">
        <div className="flex-wrap bg-[#FECB62] pt-8">
          <div className="flex px-6 items-center relative overflow-hidden z-0">
            <div className="flex-col justify-start items-start flex">
              <Link href="/" className="mb-4">
                <Image
                  src={"/fiktispace/back.png"}
                  alt="back"
                  width={35}
                  height={35}
                ></Image>
              </Link>
              <div className="flex-col justify-center items-center md:justify-start md:items-start gap-3 flex">
                <div className="flex-col flex">
                  <div className={`${Lato.className} text-[#0A2352] text-[1rem] font-medium mb-2`}>
                    Welcome to FIKTI Sport and Art Championship
                  </div>
                  <div className={`${AkiraExpanded.className} font-semibold text-[#0A2352] text-[2rem] leading-none`}>
                    FIKTI SPACE
                  </div>
                  <div className={`${AkiraExpanded.className} font-bold text-[#0A2352] text-[6rem] leading-none`}>
                    4.0
                  </div>
                  <div className={`${Lato.className} text-[#0A2352] text-[1rem] font-medium`}>
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
            <div className="-mb-2 pt-6">
              <Image
                src={"/fiktispace/Hero image.png"}
                alt={"dashboard"}
                width={700}
                height={1000}
              ></Image>
            </div>
            </div>
          </div>
        </div>
      </div>

      {/*Desktop*/}
      <div className="mt-10 md:block hidden">
        <div className="flex-wrap bg-[#FECB62]">
          <div className="flex flex-col lg:flex-row lg:justify-evenly items-center mt-28 relative overflow-hidden z-0">
            <div className="flex-col gap-3 flex py-10">
              <Link href="/">
                <Image
                  src={"/fiktispace/back.png"}
                  alt="back"
                  width={40}
                  height={40}
                ></Image>
              </Link>
              <div className={`${Lato.className} text-[#0A2352] text-[1.35rem] font-medium`}>
                Welcome to FIKTI Sport and Art Championship
              </div>
              <div className="flex-col flex">
                <div className="flex-col flex">
                  <div className={`${AkiraExpanded.className} font-semibold text-[#0A2352] text-[4rem] leading-none`}>
                    FIKTI SPACE
                  </div>
                  <div className={`${AkiraExpanded.className} font-bold text-[#0A2352] text-[10rem] leading-none`}>
                    4.0
                  </div>
                </div>
                <div className={`${Lato.className} text-[#0A2352] text-[1.35rem] font-medium`}>
                    Fuel the Passion, Embrace the Challenge!
                </div>
              </div>
            </div>

            <div className="-mb-16 lg:pt-6">
              <Image
                src={"/fiktispace/Maskot for hero.png"}
                alt={"dashboard"}
                width={600}
                height={1000}
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
    </div>
  );
}
