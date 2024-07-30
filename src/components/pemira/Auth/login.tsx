import React from 'react';
import Image from 'next/image';
import { epilogue, Urbanist } from '@/styles/font';
import { RadioGroup, Radio } from '@nextui-org/react';

export default function LoginPopUp() {
  return (
    <div className={`modal-box bg-[#F0F2F4] ${epilogue.className}`}>
      <form method="dialog">
        <div className="flex gap-2 md:gap-5 items-center p-6 md:p-12">
          <Image src="/pemira/logo-pemira.png" alt="logo pemira" width={20.22} height={24} className="w-6 md:w-10" />
          <p className={`text-black ${epilogue.className} font-bold md:text-3xl mt-1`}>Login</p>
        </div>
        {/* if there is a button in form, it will close the modal */}
        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 text-xl text-black font-bold">✕</button>
        <div className={`${Urbanist.className} px-6 md:px-12 flex flex-col gap-2 md:gap-3`}>
          <input type="text" placeholder="Masukkan NPM Anda" className="w-full p-3 md:p-5 bg-[#F0F2F4] border border-[#98A2B3] border-solid rounded-xl text-sm md:text-base text-[#98A2B3]" />
          <input type="password" placeholder="Password" className="w-full p-3 md:p-5 bg-[#F0F2F4] border border-[#98A2B3] border-solid rounded-xl text-sm md:text-base text-[#98A2B3]" />
        </div>
        <div className="px-6 md:px-12 py-5 flex flex-col gap-2">
          <button className="w-full p-3 md:p-5 bg-gradient-to-l from-[#669BBC] to-[#003049] rounded-xl text-[#F0F2F4] font-bold md:text-xl">Login</button>
          {/* <button className="w-full p-3 md:p-5 bg-gradient-to-l from-[#669BBC] to-[#003049] rounded-xl text-[#F0F2F4] font-bold md:text-xl">Login dengan Google</button> */}
        </div>
      </form>
    </div>
  );
}
