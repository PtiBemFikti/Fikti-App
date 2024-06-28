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
        <div className="w-1/2 bg-[#EAECF0] rounded-3xl p-4 flex flex-col justify-center items-center">
          <div className="flex gap-2 items-center">
            <Image src={'/pemira/ceklis.png'} alt="ceklis" width={16} height={16} className="w-5" />
            <p className="text-[#101415] font-bold mt-1">Total Votes</p>
          </div>
          <div className="text-sm text-[#98A2B3] py-5">
            <p>Jumlah suara yang sudah terkonfirmasi</p>
          </div>
          <div className="flex justify-center items-center">
            <p className="font-bold text-3xl text-[#101415]">1.200</p>
            <p className="text-[#98A2B3] text-sm font-bold pt-3">/2.400</p>
          </div>
        </div>
        <div className="w-1/2 bg-[#EAECF0] rounded-3xl p-4 flex flex-col justify-center items-center">
          <div className="flex gap-2 items-center">
            <Image src={'/pemira/profile.png'} alt="profile" width={16} height={16} className="w-5 h-5" />
            <p className="text-[#101415] font-bold mt-1">Voting Progress</p>
          </div>
          <div className="text-sm text-[#98A2B3] py-5">
            <p>Persentase dari total suara yang ada</p>
          </div>
          <div className="flex justify-center items-center">
            <p className="font-bold text-3xl text-[#101415]">50%</p>
          </div>
        </div>
      </div>
      <div className="px-4">
        <div className="w-full bg-[#EAECF0] rounded-3xl p-6 flex justify-between gap-2">
          <div className="">
            <p className="font-bold text-[#101415]">Time Remaining</p>
            <Image src={'/pemira/time.png'} alt="time" width={32} height={20} className="pt-3" />
          </div>
          <div className="flex justify-between items-center gap-3">
            <div className="flex flex-col items-center">
              <p className="text-4xl font-bold text-[#101415]">02</p>
              <p className="text-[#98A2B3]">Hours</p>
            </div>
            <div className="flex flex-col items-center">
              <p className="text-4xl font-bold text-[#101415]">25</p>
              <p className="text-[#98A2B3]">Minutes</p>
            </div>
            <div className="flex flex-col items-center">
              <p className="text-4xl font-bold text-[#101415]">45</p>
              <p className="text-[#98A2B3]">Seconds</p>
            </div>
          </div>
        </div>
      </div>
      <div className="px-4 py-3">
        <div className="w-full bg-[#EAECF0] rounded-3xl p-6">
          <div className="flex justify-between">
            <p className="text-[#101415] font-bold">Election Summary</p>
            <Image src={'/pemira/bar.png'} alt="bar" width={24} height={24} />
          </div>
          <div className="py-3">
            <div className="w-full bg-[#F0F2F4] rounded-xl flex justify-between items-center">
              <div className="flex items-center gap-3">
                <div className="">
                  <Image src={'/pemira/opet.png'} alt="orang" width={65} height={65} />
                </div>
                <div className="text-[#101415]">
                  <p className="font-bold">Michael Lee</p>
                  <p>350 Votes</p>
                </div>
              </div>
              <div className="text-[#101415] text-2xl px-6">
                <p>65%</p>
              </div>
            </div>
          </div>
          <div className="py-3">
            <div className="w-full bg-[#F0F2F4] rounded-xl flex justify-between items-center">
              <div className="flex items-center gap-3">
                <div className="">
                  <Image src={'/pemira/opet.png'} alt="orang" width={65} height={65} />
                </div>
                <div className="text-[#101415]">
                  <p className="font-bold">Michael Lee</p>
                  <p>350 Votes</p>
                </div>
              </div>
              <div className="text-[#101415] text-2xl px-6">
                <p>65%</p>
              </div>
            </div>
          </div>
          <div className="py-3">
            <div className="w-full bg-[#F0F2F4] rounded-xl flex justify-between items-center">
              <div className="flex items-center gap-3">
                <div className="">
                  <Image src={'/pemira/opet.png'} alt="orang" width={65} height={65} />
                </div>
                <div className="text-[#101415]">
                  <p className="font-bold">Michael Lee</p>
                  <p>350 Votes</p>
                </div>
              </div>
              <div className="text-[#101415] text-2xl px-6">
                <p>65%</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
