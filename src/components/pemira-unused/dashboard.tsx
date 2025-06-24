import { terminaTestBold, epilogue } from "@/styles/font";
import React from "react";
import Image from "next/image";

export default function Dashboard() {
  return (
    <div className="justify-center items-center">
      <div className="w-full p-4">
        <div className="flex md:p-24">
          <div className="flex-col">
            <p
              className={`text-white ${terminaTestBold.className} text-4xl md:text-8xl font-bold tracking-wide`}
            >
              PEMIRA
            </p>
            <p
              className={`${epilogue.className} text-sm md:text-3xl md:w-3/4 w-full font-light`}
            >
              Sinergi FIKTI Dalam Demokrasi #SuaraFIKTI
            </p>
          </div>
          <div className="md:hidden block">
            <Image
              src={"/pemira/logopemira.svg"}
              alt=""
              width={125}
              height={94}
              className="w-28"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
