import Image from "next/image";
import { Guardians, Urbanist } from "@/styles/font";
import Link from "next/link";
export default function DashboardPage() {
  return (
    <div>
      <div className="mt-6 md:hidden">
        <div className="flex justify-center items-center">
          <div className="flex px-6 h-screen justify-start items-start gap-4">
            <div className="flex-col justify-start items-start gap-3 flex">
              <Link href="/" className="mb-4">
                <Image
                  src={"/fiktispace/back.png"}
                  alt="back"
                  width={35}
                  height={35}
                ></Image>
              </Link>
              <div className="flex-col justify-center items-center md:justify-start md:items-start gap-3 flex">
                <div className={`${Urbanist.className}`}>
                  <span className="text-violet-200 text-sm md:text-lg font-normal">
                    Welcome to
                  </span>
                  <span className="text-violet-200 text-base md:text-lg font-semibold">
                    {" "}
                    FIKTI Sport and Art Championship
                  </span>
                </div>
                <div className="flex-col justify-center items-start gap-3 flex">
                  <div className="justify-start items-start gap-5 flex">
                    <div className="flex-col justify-center items-end gap-1 flex">
                      <div
                        className={`${Guardians.className} font-normal text-violet-200 text-2xl`}
                      >
                        FIKTI
                      </div>
                      <div
                        className={`${Guardians.className} font-normal text-violet-200 text-2xl`}
                      >
                        SPACE
                      </div>
                    </div>
                    <div
                      className={`${Guardians.className} font-normal text-violet-200 text-7xl`}
                    >
                      3.0
                    </div>
                  </div>
                  <div
                    className={`${Guardians.className} justify-start items-start gap-1 flex`}
                  >
                    <div className="text-violet-200 text-sm font-normal">
                      Harmony
                    </div>
                    <div className="text-violet-200 text-sm font-normal">
                      Of
                    </div>
                    <div className="text-violet-200 text-sm font-normal">
                      Body
                    </div>
                    <div className="text-violet-200 text-sm font-normal">
                      And
                    </div>
                    <div className="text-violet-200 text-sm font-normal">
                      Soul
                    </div>
                  </div>
                </div>
              </div>
              <Link href="#schedule">
                <div className="w-[310px]">
                  <div className="h-12 px-6 py-3 bg-gradient-to-r from-teal-600 to-violet-950 rounded-2xl border-0 justify-center items-center gap-2.5 flex">
                    <div
                      className={`${Urbanist.className}text-violet-200 text-base md:text-xl font-medium }`}
                    >
                      What event do we do?
                    </div>
                  </div>
                </div>
              </Link>
              <div className="w-full justify-center items-center">
                <Image
                  src={"/fiktispace/fsdashmobile.png"}
                  alt={"dashboard mobile"}
                  width={310}
                  height={320}
                ></Image>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/*Desktop*/}

      <div className="mt-6 md:block hidden">
        <div className="flex-wrap shadow-[#010417]">
          <div className="flex gap-[10px] justify-center items-end">
            <div className="flex-col mt-20 gap-3 flex">
              <Link href="/" className="mb-8">
                <Image
                  src={"/fiktispace/back.png"}
                  alt="back"
                  width={40}
                  height={40}
                ></Image>
              </Link>
              <div className={`${Urbanist.className}`}>
                <span className="text-violet-200 text-2xl font-normal">
                  Welcome to
                </span>
                <span className="text-violet-200 text-2xl font-semibold">
                  {" "}
                  FIKTI Sport and Art Championship
                </span>
              </div>
              <div className="flex-col justify-start items-start gap-3 flex">
                <div className="justify-start items-start gap-5 flex">
                  <div className="flex-col justify-start items-start gap-1 flex">
                    <div
                      className={`${Guardians.className} font-normal text-violet-200 text-[54px] leading-none`}
                    >
                      FIKTI
                    </div>
                    <div
                      className={`${Guardians.className} font-normal text-violet-200 text-[54px] leading-none`}
                    >
                      SPACE
                    </div>
                  </div>
                  <div
                    className={`${Guardians.className} font-normal text-violet-200 text-[110px] leading-none`}
                  >
                    3.0
                  </div>
                </div>
                <div
                  className={`${Guardians.className} justify-start items-start gap-2 flex`}
                >
                  <div className="text-violet-200 text-[26px] leading-9 font-normal">
                    Harmony
                  </div>
                  <div className="text-violet-200 text-[26px] leading-9 font-normal">
                    Of
                  </div>
                  <div className="text-violet-200 text-[26px] leading-9 font-normal">
                    Body
                  </div>
                  <div className="text-violet-200 text-[26px] leading-9 font-normal">
                    And
                  </div>
                  <div className="text-violet-200 text-[26px] leading-9 font-normal">
                    Soul
                  </div>
                </div>
              </div>
              <Link href="#schedule">
                <div className="w-[570px]">
                  <div className="h-12 px-6 py-3 bg-gradient-to-r from-teal-600 to-violet-950 rounded-2xl border-0 justify-center items-center gap-2.5 flex">
                    <div
                      className={`${Urbanist.className}text-violet-200 text-xl font-medium }`}
                    >
                      What event do we do?
                    </div>
                  </div>
                </div>
              </Link>
            </div>

            <div className="flex gap-[10px]">
              <Image
                src={"/fiktispace/fsdashdesktop1.png"}
                alt={"dashboard"}
                width={280}
                height={320}
              ></Image>
              <Image
                src={"/fiktispace/fsdashdesktop2.png"}
                alt={"dashboard2"}
                width={280}
                height={320}
              ></Image>
            </div>
          </div>
          <div className="flex mt-2  justify-center items-center gap-[10px]">
            <Image
              src={"/fiktispace/fsdashdesktop3.png"}
              alt={"dashboard3"}
              width={280}
              height={320}
            ></Image>
            <Image
              src={"/fiktispace/fsdashdesktop4.png"}
              alt={"dashboard4"}
              width={280}
              height={320}
            ></Image>
            <Image
              src={"/fiktispace/fsdashdesktop5.png"}
              alt={"dashboard5"}
              width={280}
              height={320}
            ></Image>
            <Image
              src={"/fiktispace/fsdashdesktop6.png"}
              alt={"dashboard6"}
              width={280}
              height={320}
            ></Image>
          </div>
        </div>
      </div>
    </div>
  );
}
