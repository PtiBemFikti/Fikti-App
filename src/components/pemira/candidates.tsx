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
            className={`${epilogue.className} text-gray-400 text-sm md:text-xl text-center pb-10`}
          >
            Get to know the nominee profiles
          </p>
          <div className="flex justify-start items-center gap-16">
            <div className="w-60 h-96 bg-white rounded-3xl border-1 md:block hidden">
              <button onClick={handleModalPaslon1}>
                <div className="flex-col">
                  <Image
                    src={"/pemira/yudha.jpg"}
                    alt={"yudha"}
                    width={250}
                    height={300}
                    className="rounded-3xl"
                  ></Image>
                  <p
                    className={`${epilogue.className} text-neutral-900 text-2xl px-4 mt-2 text-left`}
                  >
                    Yudha Ari
                  </p>
                  <p
                    className={`${epilogue.className} text-neutral-900 px-4 text-2xl text-left`}
                  >
                    &
                  </p>
                  <p
                    className={`${epilogue.className} text-neutral-900 px-4 text-2xl text-left`}
                  >
                    Agita Sonia
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
            <div className="w-60 h-96 bg-white rounded-3xl border-1 md:block hidden">
              <button onClick={handleModalPaslon2}>
                <div className="flex-col">
                  <Image
                    src={"/pemira/lutpi.jpg"}
                    alt={"yudha"}
                    width={230}
                    height={300}
                    className="rounded-3xl"
                  ></Image>
                  <p
                    className={`${epilogue.className} text-neutral-900 text-2xl text-left px-4 mt-2`}
                  >
                    Lutfi Hakim Mulih
                  </p>
                  <p
                    className={`${epilogue.className} text-neutral-900 text-2xl text-left px-4`}
                  >
                    &
                  </p>
                  <p
                    className={`${epilogue.className} text-neutral-900 text-2xl text-left px-4`}
                  >
                    Fella Salsabila
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
            <div className="w-28 h-28 bg-white rounded-3xl border-1">
              <div className="flex-col">
                <Image
                  src={"/pemira/yudha.jpg"}
                  alt={"yudha"}
                  width={250}
                  height={300}
                  className="rounded-3xl"
                ></Image>
                <p
                  className={`${epilogue.className} text-neutral-900 text-sm text-center`}
                >
                  Yudha Ari
                </p>
                <p
                  className={`${epilogue.className} text-neutral-900 text-sm text-center`}
                >
                  &
                </p>
                <p
                  className={`${epilogue.className} text-neutral-900 text-sm text-center`}
                >
                  Agita Sonia
                </p>
              </div>
            </div>
          </Link>
          <Link href={"/pemira/DetailPaslon2"}>
            <div className="w-28 h-28 bg-white rounded-3xl border-1">
              <div className="flex-col">
                <Image
                  src={"/pemira/lutpi.jpg"}
                  alt={"lutpi"}
                  width={250}
                  height={300}
                  className="rounded-3xl"
                ></Image>
                <p
                  className={`${epilogue.className} text-neutral-900 text-sm text-center`}
                >
                  Lutfi Hakim Mulih
                </p>
                <p
                  className={`${epilogue.className} text-neutral-900 text-sm text-center`}
                >
                  &
                </p>
                <p
                  className={`${epilogue.className} text-neutral-900 text-sm text-center`}
                >
                  Fella Salsabila
                </p>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
