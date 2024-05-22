import Link from "next/link";
import { Guardians, Urbanist } from "@/styles/font";
import Image from "next/image";

export default function CompetitionPage() {
  return (
    <div className="mt-4 md:w-1/2">
      <div className="flex items-center justify-center">
        <div className="my-8 px-8">
          <div>
            <h1
              className={`font-bold text-lg md:text-3xl text-gray-200 tracking wide ${Guardians.className}`}
            >
              COMPETITION LIST
            </h1>
            <p
              className={`text-gray-100 text-sm md:text-xl text-center ${Urbanist.className}`}
            >
              choose and click to learn more!
            </p>
          </div>
          <div className="flex mt-4 items-start justify-start">
            <Image
              className="-ml-8"
              src={"/fiktispace/meteor.png"}
              alt="sport"
              width={180}
              height={180}
              loading="eager"
            ></Image>
            <div>
              <h1
                className={`ml-2 text-violet-200 text-lg font-black ${Urbanist.className}`}
              >
                Sport
              </h1>
              <div className="mt-2 w-20 h-7 px-4 py-4 bg-[#D3BFE24D] rounded-2xl border border-[#D3BFE226] justify-start items-center flex">
                <div
                  className={`text-center text-violet-200 text-sm ${Urbanist.className}`}
                >
                  Futsal
                </div>
              </div>
              <div className="mt-2 w-36 h-7 px-4 py-4 bg-[#D3BFE24D] rounded-2xl border border-[#D3BFE226] justify-start items-center flex">
                <div
                  className={`text-center text-violet-200 text-sm ${Urbanist.className}`}
                >
                  3-on-3 Basketball
                </div>
              </div>
              <div className="mt-2 w-28 h-7 px-4 py-4 bg-[#D3BFE24D] rounded-2xl border border-[#D3BFE226] justify-start items-center flex">
                <div
                  className={`text-center text-violet-200 text-sm ${Urbanist.className}`}
                >
                  Badminton
                </div>
              </div>
            </div>
          </div>
          <div className="flex mt-4 items-center justify-start">
            <Image
              className="-ml-8"
              src={"/fiktispace/gamepad.png"}
              alt="esport"
              width={180}
              height={180}
              loading="eager"
            ></Image>
            <div>
              <h1
                className={`ml-2 text-violet-200 text-lg font-black ${Urbanist.className}`}
              >
                E-Sport
              </h1>
              <div className="mt-2 flex justify-start items-center w-36 h-7 px-4 py-4 rounded-2xl bg-[#C2EAEB4D] border border-[#C2EAEB26]">
                <div
                  className={`text-center text-[#E8E8F0] text-sm ${Urbanist.className}`}
                >
                  Mobile Legends
                </div>
              </div>
            </div>
          </div>
          <div className="flex mt-4 items-start justify-start">
            <Image
              className="-ml-8"
              src={"/fiktispace/painting.png"}
              alt="art"
              width={180}
              height={180}
              loading="eager"
            ></Image>
            <div>
              <h1
                className={`ml-2 text-[#B9B6CF] text-lg font-black ${Urbanist.className}`}
              >
                Art
              </h1>
              <div className="mt-2 flex justify-start items-center w-28 h-7 px-4 py-4 rounded-2xl bg-[#B9B6CF4D] border border-[#B9B6CF4D]">
                <div
                  className={`text-center text-[#E8E8F0] text-sm ${Urbanist.className}`}
                >
                  Solo Vocal
                </div>
              </div>
              <div className="mt-2 flex justify-start items-center w-[130px] h-7 px-4 py-4 rounded-2xl bg-[#B9B6CF4D] border border-[#B9B6CF4D]">
                <div
                  className={`text-center text-[#E8E8F0] text-sm ${Urbanist.className}`}
                >
                  Digital Poster
                </div>
              </div>
              <div className="mt-2 flex justify-start items-center w-28 h-7 px-4 py-4 rounded-2xl bg-[#B9B6CF4D] border border-[#B9B6CF4D]">
                <div
                  className={`text-center text-[#E8E8F0] text-sm ${Urbanist.className}`}
                >
                  Fotografi
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
