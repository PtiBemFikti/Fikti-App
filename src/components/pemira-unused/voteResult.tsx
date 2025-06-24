'use client';
import { epilogue } from '@/styles/font';
import { Urbanist } from '@/styles/font';
import Image from 'next/image';
import Link from 'next/link';
import CountDown from './Countdown/Countdown';
import { useEffect } from 'react';

export default function VoteResult() {
  return (
    <div className={`bg-[#ffffff] ${epilogue.className} py-10 md:px-24`}>
      <div className="md:flex md:gap-5">
        <div className="w-full">
          <div className="px-6 md:px-0">
            <div className="w-full bg-[#EAECF0] rounded-3xl p-6 flex justify-center items-center gap-2 md:py-8">
              <div className='flex flex-col justify-center items-center'>
                <p className="font-bold text-[#101415] text-xl md:text-4xl">Pemilihan Berakhir Dalam</p>
                <div className="py-4 md:py-2">
                  <p className="text-sm text-[#98A2B3] md:text-2xl">Hitung mundur menuju akhir dari voting</p>
                </div>
                <div>
                  <CountDown />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
