"use client";
import Link from "next/link";
import { Urbanist, epilogue } from "@/styles/font";
import Image from "next/image";
import VotePopUp from "../votepopup";

const handlePopUp: any = () => {
  const modal = document.getElementById("vote-popup") as HTMLDialogElement;
  modal.showModal();
};
export default function DetailPaslon3() {
  return (
    <div className="md:hidden block p-6">
      <div className="justify-center items-center">
        <Link href="/pemira">
          <div className="h-12 py-3 bg-[#eaecf0] rounded-lg">
            <div className="flex justify-center items-center">
              <button
                className={`text-black ${Urbanist.className} font-bold text-center`}
              >
                Back
              </button>
            </div>
          </div>
        </Link>
        <div className="mt-8">
          <h1
            className={`text-black ${epilogue.className} font-bold text-start text-[32px]`}
          >
            Candidates #3
          </h1>
        </div>
        <div className="mt-2">
          <Image
            src={"/pemira/aldi.jpg"}
            alt={"yudha"}
            width={340}
            height={360}
            className="rounded-3xl"
          ></Image>
        </div>
        <div
          onClick={handlePopUp}
          className="flex w-full h-28 bg-gradient-to-l from-[#669BBC] to-[#003049] shadow-black shadow-custom-right-bottom px-4 py-6 rounded-xl mt-4"
        >
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
                  <h1 className={`${epilogue.className} text-gray-100 text-xl`}>
                    LIVE
                  </h1>
                </div>
              </div>
              <div className={`${epilogue.className} text-gray-100 text-xl`}>
                Vote is open now
              </div>
            </div>
          </div>
        </div>
        <div className="h-[309px] p-6 bg-[#eaecf0] rounded-xl mt-6">
          <div className="flex flex-col">
            <h1
              className={`${epilogue.className} text-black text-2xl font-bold mb-2`}
            >
              Profil
            </h1>
            <div>
              <p className={`${Urbanist.className} text-[#98a2b3] text-base`}>
                Ketua
              </p>
              <p className={`${Urbanist.className} text-black text-xl`}>
                Andre Setiawan
              </p>
            </div>
            <div className="flex gap-20">
              <div>
                <p className={`${Urbanist.className} text-[#98a2b3] text-base`}>
                  NPM
                </p>
                <p className={`${Urbanist.className} text-black text-xl`}>
                  10122174
                </p>
              </div>
              <div>
                <p className={`${Urbanist.className} text-[#98a2b3] text-base`}>
                  Kelas
                </p>
                <p className={`${Urbanist.className} text-black text-xl`}>
                  2KA69
                </p>
              </div>
            </div>
            <div className="mt-8">
              <div>
                <p className={`${Urbanist.className} text-[#98a2b3] text-base`}>
                  Wakil Ketua
                </p>
                <p className={`${Urbanist.className} text-black text-xl`}>
                  Kevin De Bruyne
                </p>
              </div>
              <div className="flex gap-20">
                <div>
                  <p
                    className={`${Urbanist.className} text-[#98a2b3] text-base`}
                  >
                    NPM
                  </p>
                  <p className={`${Urbanist.className} text-black text-xl`}>
                    10122293
                  </p>
                </div>
                <div>
                  <p
                    className={`${Urbanist.className} text-[#98a2b3] text-base`}
                  >
                    Kelas
                  </p>
                  <p className={`${Urbanist.className} text-black text-xl`}>
                    2KA71
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="h-[365px] p-6 bg-[#eaecf0] rounded-xl mt-4">
          <div className="flex flex-col">
            <h1
              className={`${epilogue.className} text-black text-2xl font-bold`}
            >
              Pengalaman
            </h1>
            <div>
              <ol
                className={`${Urbanist.className} text-black text-xl mt-4 list-disc ml-6`}
              >
                <li>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </li>
                <li>
                  Lorem Ipsum has been the industry`&apos;s standard dummy text
                  ever since the 1500s
                </li>
                <li>
                  When an unknown printer took a galley of type and scrambled it
                  to make a type specimen book.
                </li>
              </ol>
            </div>
          </div>
        </div>
        <div className="h-[732px] p-6 bg-[#eaecf0] rounded-xl mt-4">
          <div className="flex flex-col">
            <h1
              className={`${epilogue.className} text-black text-2xl font-bold`}
            >
              Visi Misi
            </h1>
            <div>
              <ol
                className={`${Urbanist.className} text-black text-xl mt-4 list-disc ml-6`}
              >
                <li>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </li>
                <li>
                  Lorem Ipsum has been the industry`&apos;s standard dummy text
                  ever since the 1500s
                </li>
                <li>
                  When an unknown printer took a galley of type and scrambled it
                  to make a type specimen book.
                </li>
              </ol>
            </div>
          </div>
          <div className="mt-8">
            <h1
              className={`${epilogue.className} text-black text-2xl font-bold`}
            >
              Program Kerja
            </h1>
            <div>
              <ol
                className={`${Urbanist.className} text-black text-xl mt-4 list-disc ml-6`}
              >
                <li>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </li>
                <li>
                  Lorem Ipsum has been the industry`&apos;s standard dummy text
                  ever since the 1500s
                </li>
                <li>
                  When an unknown printer took a galley of type and scrambled it
                  to make a type specimen book.
                </li>
              </ol>
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
