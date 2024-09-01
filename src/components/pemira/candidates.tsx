"use client";
import React from "react";
import Image from "next/image";
import { epilogue } from "@/styles/font";
import ModalPaslon1 from "./modalPaslon1";
import ModalPaslon2 from "./modalPaslon2";
import Link from "next/link";

const handleModalPaslon1 = () => {
  const modal = document.getElementById("my_modal_1") as HTMLDialogElement;
  modal.showModal();
};

const handleModalPaslon2 = () => {
  const modal = document.getElementById("my_modal_2") as HTMLDialogElement;
  modal.showModal();
};

export default function Candidates() {
  return (
    <div className="py-24 md:pt-36">
      <div className="flex justify-center items-center">
        <div className="flex-col">
          <h1
            className={`${epilogue.className} text-neutral-900 text-3xl md:text-4xl font-bold text-center`}
          >
            Meet the Candidates
          </h1>
          <p
            className={`${epilogue.className} text-gray-400 text-sm md:text-xl text-center md:pb-10 pb-5`}
          >
            Get to know the nominee profiles
          </p>
          <div className="flex justify-start items-center gap-16">
            <div className="w-[22rem] h-[29rem] bg-white rounded-3xl border-1 md:block hidden">
              <button onClick={handleModalPaslon1}>
                <div className="flex-col">
                  <Image
                    src={"/pemira/1.png"}
                    alt={"1"}
                    width={350}
                    height={300}
                    className="rounded-3xl"
                  ></Image>
                  <p
                    className={`${epilogue.className} text-neutral-900 text-2xl px-4 mt-2 text-left`}
                  >
                    Muhammad Naufal Kamil
                  </p>
                  <p
                    className={`${epilogue.className} text-neutral-900 px-4 text-2xl text-left`}
                  >
                    &
                  </p>
                  <p
                    className={`${epilogue.className} text-neutral-900 px-4 text-2xl text-left`}
                  >
                    Arya Dwi Prasetyo
                  </p>
                </div>
                <div className="flex items-end justify-end px-4">
                  <Image
                    src={"/pemira/expand.svg"}
                    alt="expand"
                    width={20}
                    height={20}
                  ></Image>
                </div>
              </button>
            </div>
            <dialog id="my_modal_1" className="modal">
              <ModalPaslon1 />
            </dialog>
            <div className="w-[22rem] h-[29rem] bg-white rounded-3xl border-1 md:block hidden">
              <button onClick={handleModalPaslon2}>
                <div className="flex-col">
                  <Image
                    src={"/pemira/2.png"}
                    alt={"2"}
                    width={350}
                    height={300}
                    className="rounded-3xl"
                  ></Image>
                  <p
                    className={`${epilogue.className} text-neutral-900 text-2xl text-left px-4 mt-2`}
                  >
                    Muhammad Dante Saputra
                  </p>
                  <p
                    className={`${epilogue.className} text-neutral-900 text-2xl text-left px-4`}
                  >
                    &
                  </p>
                  <p
                    className={`${epilogue.className} text-neutral-900 text-2xl text-left px-4`}
                  >
                    Daffa Aldion Rafidbudiman
                  </p>
                </div>

                <div className="flex items-end justify-end px-4">
                  <Image
                    src={"/pemira/expand.svg"}
                    alt="expand"
                    width={20}
                    height={20}
                  ></Image>
                </div>
              </button>
            </div>
            <dialog id="my_modal_2" className="modal">
              <ModalPaslon2 />
            </dialog>
          </div>
        </div>
      </div>

      {/* Mobile */}
      <div className="mt-4 md:hidden">
        <div className="flex justify-center items-center gap-2 px-6">
          <Link href={"/pemira/DetailPaslon1"}>
            <div className="w-36 h-28 bg-white rounded-3xl border-1">
              <div className="flex-col">
                <Image
                  src={"/pemira/1.png"}
                  alt={"1"}
                  width={300}
                  height={300}
                  className="rounded-3xl"
                ></Image>
                <p
                  className={`${epilogue.className} text-neutral-900 text-sm text-center`}
                >
                  Muhammad Naufal Kamil
                </p>
                <p
                  className={`${epilogue.className} text-neutral-900 text-sm text-center`}
                >
                  &
                </p>
                <p
                  className={`${epilogue.className} text-neutral-900 text-sm text-center`}
                >
                  Arya Dwi Prasetyo
                </p>
              </div>
            </div>
          </Link>
          <Link href={"/pemira/DetailPaslon2"}>
            <div className="w-36 h-28 bg-white rounded-3xl border-1">
              <div className="flex-col">
                <Image
                  src={"/pemira/2.png"}
                  alt={"2"}
                  width={300}
                  height={300}
                  className="rounded-3xl"
                ></Image>
                <p
                  className={`${epilogue.className} text-neutral-900 text-sm text-center`}
                >
                  Muhammad Dante Saputra
                </p>

                <p
                  className={`${epilogue.className} text-neutral-900 text-sm text-center`}
                >
                  &
                </p>
                <p
                  className={`${epilogue.className} text-neutral-900 text-sm text-center`}
                >
                  Daffa Aldion Rafidbudiman
                </p>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
