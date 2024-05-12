import Image from 'next/image';

export default function SponsorPage() {
  return (
    <div className="bg-[#0B0E1A]">
      {/* Tampilan Dekstop Start */}
      <div className="md:block hidden py-52">
        <div className="flex justify-center items-center">
          <div className="w-11/12">
            <div className="flex gap-8">
              <div className="w-full h-52 bg-white rounded-3xl text-center py-10">
                <div className="flex justify-between items-center px-9 gap-3">
                  <div className="w-1/2 h-0.5 bg-[#b8bcc7] opacity-30"></div>
                  <div className="">
                    <p className="text-sm text-[#262626] font-[Poppins] text-center">SPONSORS</p>
                  </div>
                  <div className="w-1/2 h-0.5 bg-[#b8bcc7] opacity-30"></div>
                </div>
                <div className="flex justify-center items-center gap-5 pt-5">
                  <Image src={'/technofair/dicoding.png'} alt="dicoding" width={271} height={75} />
                  <Image src={'/technofair/frisianflag.png'} alt="frisian flag" width={110} height={110} />
                  <Image src={'/technofair/dapoerdjoeang.png'} alt="dapoer djoeang" width={110} height={110} />
                  <Image src={'/technofair/dewaweb.png'} alt="dewaweb" width={150} height={75} />
                </div>
              </div>
            </div>
            <div className="py-5">
              <div className="w-full bg-white rounded-3xl text-center py-10">
                <div className="flex justify-between items-center px-9 gap-3">
                  <div className="w-1/2 h-0.5 bg-[#b8bcc7] opacity-30"></div>
                  <div className="w-40">
                    <p className="text-sm text-[#262626] font-[Poppins] text-center">MEDIA PARTNERS</p>
                  </div>
                  <div className="w-1/2 h-0.5 bg-[#b8bcc7] opacity-30"></div>
                </div>
                <div className="flex justify-center items-center gap-5 pt-5">
                  <Image src={'/technofair/medpar-2.png'} alt="media partners" width={1050} height={265} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Tampilan Dekstop End */}

      {/* Tampilan Mobile Start */}
      <div className="py-32 md:hidden">
        <div className="flex flex-col justify-center items-center p-4 gap-3">
          <div className="w-96 h-48 bg-white rounded-3xl py-8">
            <div className="flex justify-center items-center gap-3">
              <div className="w-20 h-0.5 bg-[#B9BCC7] opacity-30"></div>
              <p className="font-[Poppins] text-sm font-light text-[#262626]">SUPPORTED BY</p>
              <div className="w-20 h-0.5 bg-[#B9BCC7] opacity-30"></div>
            </div>
            <div className="flex justify-center items-center">
              <Image src={'/technofair/dewaweb.png'} alt="dewaweb" width={200} height={100} />
            </div>
          </div>
          <div className="w-96 h-40 bg-white rounded-3xl py-8">
            <div className="flex justify-center items-center gap-3">
              <div className="w-20 h-0.5 bg-[#B9BCC7] opacity-30"></div>
              <p className="font-[Poppins] text-sm font-light text-[#262626]">SPONSORS</p>
              <div className="w-20 h-0.5 bg-[#B9BCC7] opacity-30"></div>
            </div>
            <div className="flex justify-center items-center py-5 gap-3">
              <Image src={'/technofair/dicoding.png'} alt="dicoding" width={108} height={30} />
              <Image src={'/technofair/paragon.png'} alt="Paragon Corp" width={127} height={30} />
            </div>
          </div>
          <div className="w-96 bg-white rounded-3xl py-8">
            <div className="flex justify-center items-center gap-3">
              <div className="w-20 h-0.5 bg-[#B9BCC7] opacity-30"></div>
              <p className="font-[Poppins] text-sm font-light text-[#262626]">MEDIA PARTNER</p>
              <div className="w-20 h-0.5 bg-[#B9BCC7] opacity-30"></div>
            </div>
            <div className="flex justify-center items-center py-5">
              <Image src={'/technofair/medpar.png'} alt="Media Partner" width={290} height={410} />
            </div>
          </div>
        </div>
      </div>
      {/* Tampilan Mobile End */}
    </div>
  );
}
