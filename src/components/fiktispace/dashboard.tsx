import Image from "next/image";
import { Guardians, Urbanist } from "@/styles/font";
import { Link } from "@nextui-org/react";
export default function DashboardPage() {
  return (
    <div className="mt-6 overflow-x-hidden">
      <div className="flex mx-6 md:ml-12 h-screen w-full justify-start items-start gap-4">
        <div className="flex-col justify-start items-start gap-3 flex">
          <Link href="/" className="mb-4">
            <Image
              src={"/fiktispace/back.png"}
              alt="back"
              width={40}
              height={40}
            ></Image>
          </Link>
          <div className="flex-col justify-center items-end md:justify-start md:items-start gap-3 flex">
            <div className={`${Urbanist.className}`}>
              <span className="text-violet-200 text-lg md:text-2xl font-normal">
                Welcome to
              </span>
              <span className="text-violet-200 text-base md:text-2xl font-semibold">
                {" "}
                FIKTI Sport and Art Championship
              </span>
            </div>
            <div className="flex-col justify-start items-start gap-3 flex">
              <div className="justify-start items-start gap-5 flex">
                <div className="flex-col justify-center items-end md:justify-start md:items-start  gap-1 flex">
                  <div
                    className={`${Guardians.className} font-normal text-violet-200 text-3xl md:text-6xl `}
                  >
                    FIKTI
                  </div>
                  <div
                    className={`${Guardians.className} font-normal text-violet-200 text-3xl md:text-6xl `}
                  >
                    SPACE
                  </div>
                </div>
                <div
                  className={`${Guardians.className} font-normal text-violet-200 text-7xl md:text-9xl`}
                >
                  3.0
                </div>
              </div>
              <div
                className={`${Guardians.className} justify-start items-start gap-1 md:gap-2 flex`}
              >
                <div className="text-violet-200 text-base md:text-3xl font-normal">
                  Harmony
                </div>
                <div className="text-violet-200 text-base md:text-3xl font-normal">
                  Of
                </div>
                <div className="text-violet-200 text-base md:text-3xl font-normal">
                  Body
                </div>
                <div className="text-violet-200 text-base md:text-3xl font-normal">
                  And
                </div>
                <div className="text-violet-200 text-base md:text-3xl font-normal">
                  Soul
                </div>
              </div>
            </div>
          </div>
          <div className="w-full">
            <div className="h-12 px-6 py-3 bg-gradient-to-r from-teal-600 to-violet-950 rounded-2xl border-0 justify-center items-center gap-2.5 flex">
              <div
                className={`${Urbanist.className}text-violet-200 text-base md:text-xl font-medium }`}
              >
                What event do we do?
              </div>
            </div>
          </div>
          <div className="md:hidden">
            <Image
              src={"/fiktispace/fsdashmobile.png"}
              alt={"dashboard mobile"}
              width={340}
              height={320}
            ></Image>
          </div>
        </div>
      </div>
    </div>
  );
}
