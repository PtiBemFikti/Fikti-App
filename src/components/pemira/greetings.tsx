"use client";
import { epilogue } from "@/styles/font";
import Image from "next/image";
import VotePopUp from "./votepopup";
export default function Halo() {
  const handlePopUp: any = () => {
    const modal = document.getElementById("vote-popup") as HTMLDialogElement;
    modal.showModal();
  };

  return (
    <div>
      <div className="md:block hidden">
        <div className="flex justify-center items-center">
          <div className="flex h-44 justify-between items-center bg-white px-12 py-12 rounded-3xl border-1">
            <div className="flex justify-center items-center gap-16">
              <div className="w-1/2">
                <div>
                  <h1>
                    <p
                      className={`${epilogue.className} text-neutral-900 text-2xl font-bold`}
                    >
                      Hello, Warga FIKTI👋🏻
                    </p>
                    <p
                      className={`${epilogue.className} mt-1 text-gray-400 text-xl font-normal`}
                    >
                      It&apos;s time to make your voice heard
                    </p>
                  </h1>
                </div>
              </div>

              <div className="flex w-1/2 h-28 bg-gradient-to-l from-[#669BBC] to-[#003049] shadow-black shadow-custom-right-bottom px-4 py-6 rounded-xl">
                <div className="flex flex-col gap-2">
                  <h1
                    className={`${epilogue.className} text-white text-2xl font-bold`}
                  >
                    Cast Your Vote
                  </h1>
                  <div className="flex w-64 h-7 gap-2">
                    <div className="flex px-3 py-1 bg-red-500 rounded-lg">
                      <div className="flex justify-center items-center gap-2">
                        <div className="w-2.5 h-2.5 bg-gray-100 rounded-full"></div>
                        <h1
                          className={`${epilogue.className} text-gray-100 text-xl`}
                        >
                          LIVE
                        </h1>
                      </div>
                    </div>
                    <div
                      className={`${epilogue.className} text-gray-100 text-xl`}
                    >
                      Vote is open now
                    </div>
                  </div>
                </div>
                <button onClick={handlePopUp}>
                  <div className="flex justify-end items-center w-20">
                    <Image
                      src={"/pemira/arrowright.png"}
                      alt="arrow"
                      width={48}
                      height={48}
                    ></Image>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="md:hidden block">
        <div className="flex justify-center items-center h-36">
          <button onClick={handlePopUp}>
            <div className="flex gap-7 h-24 bg-gradient-to-l from-[#669BBC] to-[#003049] px-4 py-5 rounded-xl shadow-black shadow-custom-right-bottom">
              <div className="flex-col">
                <h1
                  className={`${epilogue.className} text-white text-xl font-bold`}
                >
                  Cast Your Vote
                </h1>
                <div className="flex justify-center items-center py-2 gap-2">
                  <div className="flex w-15 h-5 px-2 py-2 bg-red-500 rounded-lg">
                    <div className="flex justify-center items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-gray-100 rounded-full mb-1"></div>
                      <h1
                        className={`${epilogue.className} text-gray-100 text-sm`}
                      >
                        LIVE
                      </h1>
                    </div>
                  </div>
                  <div className={`${epilogue.className} text-gray-100`}>
                    Vote is open now
                  </div>
                </div>
              </div>
              <div className="flex justify-end items-center">
                <Image
                  src={"/pemira/arrowright.png"}
                  alt="arrow"
                  width={35}
                  height={35}
                ></Image>
              </div>
            </div>
          </button>
        </div>
      </div>
      <dialog id="vote-popup" className="modal">
        <VotePopUp />
      </dialog>
    </div>
  );
}
