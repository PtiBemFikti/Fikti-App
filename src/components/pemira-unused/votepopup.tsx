import React from "react";
import Image from "next/image";
import { epilogue } from "@/styles/font";
import { RadioGroup, Radio } from "@nextui-org/react";
import { VoteConfirmed } from "./voteConfirmed";

const handleConfirmed: any = () => {
  const modalConfirmed = document.getElementById(
    "vote-confirmed"
  ) as HTMLDialogElement;
  modalConfirmed.showModal();
};

export default function VotePopUp() {
  return (
    <div className={`modal-box bg-white ${epilogue.className}`}>
      <form method="dialog">
        <div className="flex gap-2 md:gap-5 items-center p-6 md:p-12">
          <Image
            src="/pemira/logo-pemira.png"
            alt="logo pemira"
            width={20.22}
            height={24}
            className="w-6 md:w-10"
          />
          <p
            className={`text-black ${epilogue.className} font-bold md:text-3xl mt-1`}
          >
            Confirm Your Vote
          </p>
        </div>
        {/* if there is a button in form, it will close the modal */}
        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 text-xl text-black font-bold">
          ✕
        </button>
        <RadioGroup>
          <div className="px-6 md:px-12">
            <div className="w-full bg-[#F0F2F4] rounded-xl p-1">
              <div className="flex justify-between items-center">
                <div className="flex gap-3">
                  <Image
                    src={"/pemira/1.png"}
                    alt="profile"
                    width={60}
                    height={60}
                    className="rounded-xl md:hidden"
                  />
                  <Image
                    src={"/pemira/1.png"}
                    alt="profile"
                    width={83}
                    height={83}
                    className="rounded-xl hidden md:block"
                  />
                  <div className="text-black text-sm md:text-base flex flex-col justify-center">
                    <p>Muhammad Naufal Kamil</p>
                    <p>Arya Dwi Prasetyo</p>
                  </div>
                </div>
                <Radio value="vote-1" className=""></Radio>
              </div>
            </div>
          </div>
          <div className="px-6 md:px-12">
            <div className="w-full bg-[#F0F2F4] rounded-xl p-1">
              <div className="flex justify-between items-center">
                <div className="flex gap-3">
                  <Image
                    src={"/pemira/2.png"}
                    alt="profile"
                    width={60}
                    height={60}
                    className="rounded-xl md:hidden"
                  />
                  <Image
                    src={"/pemira/2.png"}
                    alt="profile"
                    width={83}
                    height={83}
                    className="rounded-xl hidden md:block"
                  />
                  <div className="text-black text-sm md:text-base flex flex-col justify-center">
                    <p>Muhammad Dante Saputra</p>
                    <p>Daffa Aldion Rafidbudiman</p>
                  </div>
                </div>
                <Radio value="vote-2" className=""></Radio>
              </div>
            </div>
          </div>
        </RadioGroup>
        <div className="px-6 py-5 flex gap-3 md:px-12 md:py-10">
          <button className="btn btn-ghost bg-[#EAECF0] w-32 md:w-1/2 text-black py-3 text-center md:text-xl rounded-lg text-sm">
            Cancel
          </button>
          <button
            onClick={handleConfirmed}
            className="bg-gradient-to-l from-[#669BBC] to-[#003049] w-32 md:w-1/2 md:text-xl text-[#F0F2F4] py-3 text-center rounded-lg text-sm font-bold"
          >
            Confirm
          </button>
        </div>
      </form>
      <dialog id="vote-confirmed" className="modal">
        <VoteConfirmed />
      </dialog>
    </div>
  );
}
