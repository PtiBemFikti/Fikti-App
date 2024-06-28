import { epilogue } from '@/styles/font';
import Image from 'next/image';

export default function VoteResult() {
  return (
    <div className={`bg-[#ffffff] ${epilogue.className} py-10`}>
      <div className="bg-[#EAECF0] w-full h-24 py-6">
        <div className="flex justify-center items-center gap-2">
          <div className="pb-1">
            <Image src={'/pemira/record.png'} alt="rec" width={10} height={10} />
          </div>
          <p className="text-[#101415] font-bold text-2xl">Live Vote Results</p>
        </div>
        <div className="flex justify-center items-center">
          <p className="text-[#98A2B3] text-sm">Track the progress of election</p>
        </div>
      </div>
      <div className="p-5 flex gap-2">
        <div className="w-1/2 bg-[#EAECF0] rounded-3xl">
            <div className=""></div>
        </div>
        <div className="w-1/2 bg-[#EAECF0] rounded-3xl"></div>
      </div>
    </div>
  );
}
