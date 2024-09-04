"use client";
import { epilogue } from "@/styles/font";
import { Urbanist } from "@/styles/font";
import Image from "next/image";
import Link from "next/link";
import CountDown from "./Countdown/Countdown";
import { useEffect, useState } from "react";

export default function VoteResult() {
  const [targetDate, setTargetDate] = useState<Date>(() => {
    if (typeof window !== "undefined") {
      const savedDate = localStorage.getItem("targetDate");
      return savedDate
        ? new Date(savedDate)
        : new Date(Date.now() + 2 * 24 * 60 * 60 * 1000);
    } else {
      return new Date(Date.now() + 2 * 24 * 60 * 60 * 1000);
    }
  });

  useEffect(() => {
    if (typeof window !== "undefined" && !localStorage.getItem("targetDate")) {
      const newTargetDate = new Date(Date.now() + 2 * 24 * 60 * 60 * 1000);
      localStorage.setItem("targetDate", newTargetDate.toString());
      setTargetDate(newTargetDate);
    }
  }, []);

  return (
    <div className={`bg-[#ffffff] ${epilogue.className} py-10 md:px-24`}>
      <div className="md:flex md:gap-5">
        <div className="w-full">
          <div className="px-4 md:px-0">
            <div className="w-full h-60 bg-[#EAECF0] rounded-3xl p-12 flex justify-between gap-2 md:py-8">
              <div>
                <p className="font-bold text-[#101415] md:text-5xl">
                  Voting Ends In
                </p>
                <div className="py-4 md:py-2">
                  <p className="text-sm text-[#98A2B3] md:text-2xl">
                    Hitung mundur menuju akhir dari voting
                  </p>
                </div>
                <div>
                  <CountDown targetDate={targetDate} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
