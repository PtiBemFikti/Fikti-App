import { terminaTestBold, epilogue } from '@/styles/font';
import React from 'react';
import Image from 'next/image';

export default function Dashboard() {
  return (
    <div className="w-full p-4">
      <div className="flex justify-between py-7">
        <div className="">
          <p className={`text-white text-4xl ${terminaTestBold.className} font-bold`}>PEMIRA</p>
          <p className={`${epilogue.className} text-sm`}>Rayakan Demokrasi yang Transparan dan Terintegrasi</p>
        </div>
        <div className="md:hidden block">
          <Image src={'/pemira/logo-grup.png'} alt="logo-group" width={125} height={94} className="w-48" />
        </div>
      </div>
    </div>
  );
}
