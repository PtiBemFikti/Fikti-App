'use client'
import { epilogue } from '@/styles/font';
import { Urbanist } from '@/styles/font';
import Image from 'next/image';
import Link from 'next/link';
import CountDown from './Countdown/Countdown';
import { useEffect, useState } from 'react';

export default function VoteResult() {
  const [targetDate, setTargetDate] = useState<Date>(() => {
    if (typeof window !== "undefined") {
      const savedDate = localStorage.getItem('targetDate');
      return savedDate ? new Date(savedDate) : new Date(Date.now() + 2 * 24 * 60 * 60 * 1000);
    } else {
      return new Date(Date.now() + 2 * 24 * 60 * 60 * 1000);
    }
  });

  useEffect(() => {
    if (typeof window !== "undefined" && !localStorage.getItem('targetDate')) {
      const newTargetDate = new Date(Date.now() + 2 * 24 * 60 * 60 * 1000);
      localStorage.setItem('targetDate', newTargetDate.toString());
      setTargetDate(newTargetDate);
    }
  }, []);

  const addTime = (hours: number) => {
    const newTargetDate = new Date(targetDate.getTime() + hours * 60 * 60 * 1000);
    setTargetDate(newTargetDate);
    if (typeof window !== "undefined") {
      localStorage.setItem('targetDate', newTargetDate.toString());
    }
  };

  return (
    <div className={`bg-[#ffffff] ${epilogue.className} py-10 md:px-24`}>
      <div className="bg-[#EAECF0] w-full py-6 md:rounded-3xl md:flex md:justify-between">
        <div>
          <div className="flex justify-center items-center gap-2 md:justify-start md:px-12">
            <div className="pb-1">
              <Image src={'/pemira/record.png'} alt="rec" width={10} height={10} />
            </div>
            <p className="text-[#101415] font-bold text-2xl md:text-4xl">Live Vote Results</p>
          </div>
          <div className="flex justify-center items-center md:justify-start md:px-12">
            <p className="text-[#98A2B3] text-sm md:text-xl">Track the progress of election</p>
          </div>
        </div>
        <div className="md:block hidden">
          <div className="flex px-12 justify-center items-center gap-3 py-6 cursor-pointer">
            <p className="text-[#1B92FF]">refresh</p>
            <Image src={'/pemira/refresh.png'} alt="refresh" width={16} height={16} />
          </div>
        </div>
      </div>
      <div className="md:flex md:gap-5">
        <div className="md:w-1/2">
          <div className="p-5 md:px-0 md:py-3 flex gap-2 md:gap-5">
            <div className="w-1/2 bg-[#EAECF0] rounded-3xl p-4 flex flex-col justify-center items-center md:justify-start md:items-start md:p-6">
              <div className="flex gap-2 items-center">
                <Image src={'/pemira/ceklis.png'} alt="ceklis" width={16} height={16} className="w-5 md:w-7" />
                <p className="text-[#101415] font-bold mt-1 md:text-3xl">Total Votes</p>
              </div>
              <div className={`text-sm text-[#98A2B3] py-5 md:py-3 md:text-xl ${Urbanist.className}`}>
                <p>Jumlah suara yang sudah terkonfirmasi</p>
              </div>
              <div className={`flex justify-center items-center ${Urbanist.className}`}>
                <p className="font-bold text-3xl md:text-6xl bg-clip-text text-transparent bg-gradient-to-l from-[#669BBC] to-[#003049]">1.200</p>
                <p className="text-[#98A2B3] text-sm md:text-3xl pt-3">/2.400</p>
              </div>
            </div>
            <div className="w-1/2 bg-[#EAECF0] rounded-3xl p-4 flex flex-col justify-center items-center md:justify-start md:items-start md:p-6">
              <div className="flex gap-2 items-center">
                <Image src={'/pemira/profile.png'} alt="profile" width={16} height={16} className="w-5 h-5 md:w-6 md:h-6" />
                <p className="text-[#101415] font-bold mt-1 md:text-2xl">Voting Progress</p>
              </div>
              <div className={`${Urbanist.className} text-sm text-[#98A2B3] py-5 md:py-3 md:text-xl`}>
                <p>Persentase dari total suara yang ada</p>
              </div>
              <div className="flex justify-center items-center mx-auto">
                <p className={`${Urbanist.className} font-bold text-3xl bg-clip-text text-transparent bg-gradient-to-l from-[#669BBC] to-[#003049] md:text-6xl`}>50%</p>
              </div>
            </div>
          </div>
          <div className="px-4 md:px-0">
            <div className="w-full bg-[#EAECF0] rounded-3xl p-6 flex justify-between gap-2 md:py-8">
              <div>
                <p className="font-bold text-[#101415] md:text-3xl">Voting Ends In</p>
                <div className="py-4 md:py-2">
                  <p className="text-sm text-[#98A2B3] md:text-xl">Hitung mundur menuju akhir dari voting</p>
                </div>
                <div>
                  <CountDown targetDate={targetDate} />
                </div>
              </div>
              <div className="text-[#669BBC] cursor-pointer" onClick={() => addTime(1)}>
                <p className="underline">Tambah 1 Jam</p>
              </div>
            </div>
          </div>
        </div>
        <div className="md:w-1/2 md:py-3">
          <div className="bg-[#EAECF0] w-full p-4 md:rounded-3xl md:gap-5 md:px-12 md:py-16">
            <div className="flex justify-between">
              <p className="text-[#101415] font-bold md:text-2xl">Election Summary</p>
              <Image src={'/pemira/bar.png'} alt="bar" width={24} height={24} className="md:w-7" />
            </div>
            <div className="md:py-6 md:flex md:flex-col md:gap-5">
              <div className="py-3 md:py-0">
                <div className="w-full bg-[#F0F2F4] rounded-xl flex justify-between items-center">
                  <div className="flex items-center gap-3">
                    <div>
                      <Image src={'/pemira/opet.png'} alt="orang" width={65} height={65} />
                    </div>
                    <div className="text-[#101415]">
                      <p className="font-bold md:text-xl text-sm">Andre Setiawan &</p>
                      <p className="font-bold md:text-xl text-sm">John Smith</p>
                    </div>
                  </div>
                  <div className="text-[#101415] text-2xl px-6">
                    <div className={` ${Urbanist.className} flex md:gap-2 gap-1`}>
                      <p className="md:text-4xl bg-clip-text text-transparent bg-gradient-to-l from-[#669BBC] to-[#003049] font-bold">350</p>
                      <p className="md:text-base text-[#98A2B3] md:mt-3 text-sm mt-2">Votes</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="py-3">
                <div className="w-full bg-[#F0F2F4] rounded-xl flex justify-between items-center">
                  <div className="flex items-center gap-3">
                    <div>
                      <Image src={'/pemira/opet.png'} alt="orang" width={65} height={65} />
                    </div>
                    <div className="text-[#101415]">
                      <p className="font-bold md:text-xl text-sm">Andre Setiawan &</p>
                      <p className="font-bold md:text-xl text-sm">John Smith</p>
                    </div>
                  </div>
                  <div className="text-[#101415] text-2xl px-6">
                    <div className={` ${Urbanist.className} flex md:gap-2 gap-1`}>
                      <p className="md:text-4xl bg-clip-text text-transparent bg-gradient-to-l from-[#669BBC] to-[#003049] font-bold">350</p>
                      <p className="md:text-base text-[#98A2B3] md:mt-3 text-sm mt-2">Votes</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="py-3 md:py-0">
                <div className="w-full bg-[#F0F2F4] rounded-xl flex justify-between items-center">
                  <div className="flex items-center gap-3">
                    <div>
                      <Image src={'/pemira/opet.png'} alt="orang" width={65} height={65} />
                    </div>
                    <div className="text-[#101415]">
                      <p className="font-bold md:text-xl text-sm">Andre Setiawan &</p>
                      <p className="font-bold md:text-xl text-sm">John Smith</p>
                    </div>
                  </div>
                  <div className="text-[#101415] text-2xl px-6">
                    <div className={` ${Urbanist.className} flex md:gap-2 gap-1`}>
                      <p className="md:text-4xl bg-clip-text text-transparent bg-gradient-to-l from-[#669BBC] to-[#003049] font-bold">350</p>
                      <p className="md:text-base text-[#98A2B3] md:mt-3 text-sm mt-2">Votes</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
