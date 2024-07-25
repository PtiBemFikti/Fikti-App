"use client";
import Link from "next/link";
import { Urbanist, epilogue } from "@/styles/font";
import Image from "next/image";
import VotePopUp from "./votepopup";

const handlePopUp: any = () => {
  const modal = document.getElementById("vote-popup") as HTMLDialogElement;
  modal.showModal();
};
export default function ModalPaslon3() {
  return (
    <div className="modal-box bg-white font-Urbanist space-y-3 max-w-6xl">
      <form method="dialog">
        {/* if there is a button in form, it will close the modal */}
        <button className="btn btn-lg btn-circle btn-ghost absolute text-gray-400 right-2 top-2">
          ✕
        </button>
      </form>

      <div className="md:flex hidden gap-5">
        <div className="w-80 flex flex-col gap-5">
          <div className="bg-[#DDDCE8] rounded-2xl">
            <Image
              src="/pemira/aldi.jpg"
              alt=""
              width={320}
              height={360}
              className="rounded-3xl"
            />
          </div>
          <div
            onClick={handlePopUp}
            className="flex gap-7 h-24 bg-gradient-to-l from-[#669BBC] to-[#003049] px-4 py-5 rounded-xl shadow-black shadow-custom-right-bottom"
          >
            <div className="flex-col">
              <h1
                className={`${epilogue.className} text-white text-2xl font-bold`}
              >
                Cast Your Vote
              </h1>
              <div className="flex justify-center items-center py-2 gap-2">
                <div className="flex w-15 h-5 px-2 py-2 bg-[#CC112F] rounded-md">
                  <div className="flex justify-center items-center gap-2">
                    <div className="w-2 h-2 bg-gray-100 rounded-full mb-1"></div>
                    <h1
                      className={`${epilogue.className} text-gray-100 text-base`}
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
          </div>
        </div>
        <div className="flex flex-col">
          <h1 className={`${epilogue.className} text-black font-bold text-3xl`}>
            Candidates #3
          </h1>
          <div className="w-[660px] h-[236px] p-3 bg-[#EAECF0] rounded-xl mt-4">
            <div className="ml-2">
              <div>
                <h2
                  className={`${epilogue.className} text-black font-bold text-2xl`}
                >
                  Profil
                </h2>
              </div>
              <div className="flex justify-between gap-2.5">
                <div className="flex flex-col w-1/2">
                  <div className="mt-4">
                    <p
                      className={`${Urbanist.className} text-[#98A2B3] text-sm`}
                    >
                      Ketua
                    </p>
                    <p
                      className={`${Urbanist.className} text-[#101415] text-xl`}
                    >
                      Andre Setiawan
                    </p>
                  </div>
                  <div className="mt-2">
                    <p
                      className={`${Urbanist.className} text-[#98A2B3] text-sm`}
                    >
                      NPM
                    </p>
                    <p
                      className={`${Urbanist.className} text-[#101415] text-xl`}
                    >
                      12346789
                    </p>
                  </div>
                  <div className="mt-2">
                    <p
                      className={`${Urbanist.className} text-[#98A2B3] text-sm`}
                    >
                      Kelas
                    </p>
                    <p
                      className={`${Urbanist.className} text-[#101415] text-xl`}
                    >
                      2KA33
                    </p>
                  </div>
                </div>
                <div className="flex flex-col w-1/2">
                  <div className="mt-4">
                    <p
                      className={`${Urbanist.className} text-[#98A2B3] text-sm`}
                    >
                      Wakil Ketua
                    </p>
                    <p
                      className={`${Urbanist.className} text-[#101415] text-xl`}
                    >
                      Kevin De Bruyne
                    </p>
                  </div>
                  <div className="mt-2">
                    <p
                      className={`${Urbanist.className} text-[#98A2B3] text-sm`}
                    >
                      NPM
                    </p>
                    <p
                      className={`${Urbanist.className} text-[#101415] text-xl`}
                    >
                      12345678
                    </p>
                  </div>
                  <div className="mt-2">
                    <p
                      className={`${Urbanist.className} text-[#98A2B3] text-sm`}
                    >
                      Kelas
                    </p>
                    <p
                      className={`${Urbanist.className} text-[#101415] text-xl`}
                    >
                      2KA34
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col">
            <div className="w-[660px] h-[236px] p-3 bg-[#EAECF0] rounded-xl mt-4">
              <h2
                className={`${epilogue.className} text-black font-bold text-2xl ml-2`}
              >
                Pengalaman
              </h2>
              <div className="ml-8">
                <ol
                  className={`${Urbanist.className} list-disc text-black text-lg`}
                >
                  <li>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.
                  </li>
                  <li>
                    Lorem Ipsum has been the industry`&apos;s standard dummy
                    text ever since the 1500s
                  </li>
                  <li>
                    When an unknown printer took a galley of type and scrambled
                    it to make a type specimen book.
                  </li>
                </ol>
              </div>
            </div>
          </div>
          <div className="w-[660px] h-[236px] p-3 bg-[#EAECF0] rounded-xl mt-4">
            <div className="flex justify-between gap-2.5">
              <div className="flex flex-col ml-2 w-1/2">
                <div>
                  <h2
                    className={`${epilogue.className} text-black font-bold text-2xl`}
                  >
                    Visi & Misi
                  </h2>
                </div>
                <div>
                  <ol
                    className={`${Urbanist.className} list-disc text-black text-base ml-6`}
                  >
                    <li>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry.
                    </li>
                    <li>
                      Lorem Ipsum has been the industry standard dummy text ever
                      since the 1500s
                    </li>
                    <li>
                      When an unknown printer took a galley of type and
                      scrambled it to make a type specimen book.
                    </li>
                  </ol>
                </div>
              </div>
              <div className="flex flex-col w-1/2">
                <div>
                  <h2
                    className={`${epilogue.className} text-black font-bold text-2xl`}
                  >
                    Program Kerja
                  </h2>
                  <ol
                    className={`${Urbanist.className} list-disc text-black text-base ml-6`}
                  >
                    <li>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry.
                    </li>
                    <li>
                      Lorem Ipsum has been the industry standard dummy text ever
                      since the 1500s
                    </li>
                    <li>
                      When an unknown printer took a galley of type and
                      scrambled it to make a type specimen book.
                    </li>
                  </ol>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <dialog id="vote-popup" className="modal">
        <VotePopUp />
      </dialog>
    </div>
  );
}
