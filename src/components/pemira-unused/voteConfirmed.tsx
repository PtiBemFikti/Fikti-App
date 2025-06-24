import React from 'react';
import Image from 'next/image';
import { epilogue } from '@/styles/font';

export const VoteConfirmed = () => {
  return (
    <div className={`modal-box bg-white ${epilogue.className}`}>
      <form method="dialog">
        <div className="p-6">
          <div className="flex flex-col justify-center items-center">
            <Image src="/pemira/logo-pemira.png" alt="logo pemira" width={64} height={80} className="md:w-20" />
            <div className="py-5 flex flex-col gap-3">
              <p className="font-bold text-xl md:text-3xl text-[#101415] text-center">Your vote has been recorded</p>
              <p className="text-sm text-[#101415] md:text-2xl text-center">Thank you for participating!</p>
            </div>
          </div>
          {/* if there is a button in form, it will close the modal */}
          <button className="btn bg-gradient-to-l from-[#669BBC] to-[#003049] w-full text-[#F0F2F4] py-3 text-center rounded-lg text-sm md:text-xl font-bold">Close</button>
        </div>
      </form>
    </div>
  );
};
