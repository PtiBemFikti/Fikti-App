import Image from "next/image";
import { Guardians } from "@/styles/font";
export default function DashboardPage() {
  return (
    <div className="md:block hidden mt-6">
      <div className="flex ml-12 h-96 py-2 justify-start items-start gap-8">
        <div className="h-72 flex-col justify-start items-start gap-3 flex">
          <a href="/" className="pb-4">
            <Image
              src={"/fiktispace/back.png"}
              alt="back"
              width={48}
              height={48}
            ></Image>
          </a>
          <div className="flex-col justify-start items-start gap-3 flex">
            <div>
              <span className="text-gray-200 text-2xl font-normal font-['Urbanist']">
                Welcome to
              </span>
              <span className="text-gray-200 text-2xl font-semibold font-['Urbanist']">
                {" "}
                FIKTI Sport and Art Championship
              </span>
            </div>
            <div className="flex-col justify-start items-start gap-3 flex">
              <div className="justify-start items-start gap-3 inline-flex">
                <div className="flex-col justify-start items-start gap-1 inline-flex">
                  <div
                    className={`${Guardians.className} font-normal text-gray-200 text-6xl `}
                  >
                    FIKTI
                  </div>
                  <div
                    className={`${Guardians.className} font-normal text-gray-200 text-6xl `}
                  >
                    SPACE
                  </div>
                </div>
                <div
                  className={`${Guardians.className} font-normal text-gray-200 text-9xl`}
                >
                  3.0
                </div>
              </div>
              <div className="justify-start items-start gap-2 inline-flex">
                <div
                  className={`${Guardians.className} font-normal text-gray-200 text-3xl `}
                >
                  Harmony
                </div>
                <div
                  className={`${Guardians.className} font-normal text-gray-200 text-3xl `}
                >
                  Of
                </div>
                <div
                  className={`${Guardians.className} font-normal text-gray-200 text-3xl `}
                >
                  Body
                </div>
                <div
                  className={`${Guardians.className} font-normal text-gray-200 text-3xl `}
                >
                  And
                </div>
                <div
                  className={`${Guardians.className} font-normal text-gray-200 text-3xl `}
                >
                  Soul
                </div>
              </div>
            </div>
          </div>
          <div className="w-full">
            <div className="h-12 px-6 py-3 bg-gradient-to-r from-teal-600 to-violet-950 rounded-2xl border-0 border-white border-opacity-10 justify-center items-center gap-2.5 flex">
              <div className="text-gray-200 text-xl font-medium font-['Urbanist']">
                What event do we do?
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
