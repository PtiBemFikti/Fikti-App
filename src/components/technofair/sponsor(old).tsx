import Image from 'next/image';

export default function SponsorPage() {
  return (
    <div className="bg-[#0B0E1A]">
      {/* Tampilan Dekstop Start */}
      <div className="md:block hidden py-52">
        <div className="flex justify-center items-center">
          <div className="w-11/12 flex flex-col gap-5">
            <div className="w-full h-72 bg-white rounded-3xl text-center py-10">
              <div className="flex justify-between items-center px-9 gap-3">
                <div className="w-full h-0.5 bg-[#b8bcc7] opacity-30"></div>
                <div className="w-full">
                  <p className="text-sm text-[#262626] font-[Poppins] text-center">OFFICIAL EXCLUSIVE CLOUD HOSTING PARTNER</p>
                </div>
                <div className="w-full h-0.5 bg-[#b8bcc7] opacity-30"></div>
              </div>
              <div className="flex justify-center items-center">
                <Image src={'/technofair/dewaweb.png'} alt="dewaweb" width={400} height={200} />
              </div>
            </div>
            <div className="flex gap-5">
              <div className="flex gap-8 w-full">
                <div className="w-full h-72 bg-white rounded-3xl text-center py-10">
                  <div className="flex justify-between items-center px-9 gap-3">
                    <div className="w-1/2 h-0.5 bg-[#b8bcc7] opacity-30"></div>
                    <div className="w-56">
                      <p className="text-sm text-[#262626] font-[Poppins] text-center">SPONSORS & PARTNERSHIP</p>
                    </div>
                    <div className="w-1/2 h-0.5 bg-[#b8bcc7] opacity-30"></div>
                  </div>
                  <div className="flex justify-center items-center gap-5 py-10">
                    <Image src={'/technofair/dicoding.png'} alt="dicoding" width={230} height={75} />
                    <Image src={'/technofair/frisianflag.png'} alt="frisian flag" width={110} height={110} />
                    <Image src={'/technofair/dapoerdjoeang.png'} alt="dapoer djoeang" width={110} height={110} />
                    <Image src={'/technofair/jh-square.png'} alt="Jagoan Hosting" width={224} height={75} />
                    <Image src={'/technofair/cakap.jpeg'} alt="ohsquare" width={230} height={110} />
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full h-72 bg-white rounded-3xl text-center py-10">
              <div className="flex justify-between items-center px-9 gap-3">
                <div className="w-1/2 h-0.5 bg-[#b8bcc7] opacity-30"></div>
                <div className="w-48">
                  <p className="text-sm text-[#262626] font-[Poppins] text-center">COMMUNITY PARTNER</p>
                </div>
                <div className="w-1/2 h-0.5 bg-[#b8bcc7] opacity-30"></div>
              </div>
              <div className="flex justify-center items-center py-10 gap-5">
                <Image src={'/technofair/ccug.png'} alt="ccug" width={100} height={100} />
                <Image src={'/technofair/gundario.png'} alt="gundario" width={100} height={100} />
              </div>
            </div>
            <div className="">
              <div className="w-full bg-white rounded-3xl text-center py-10">
                <div className="flex justify-between items-center px-9 gap-3">
                  <div className="w-1/2 h-0.5 bg-[#b8bcc7] opacity-30"></div>
                  <div className="w-36">
                    <p className="text-sm text-[#262626] font-[Poppins] text-center">MEDIA PARTNERS</p>
                  </div>
                  <div className="w-1/2 h-0.5 bg-[#b8bcc7] opacity-30"></div>
                </div>
                <div className="flex flex-col justify-center items-center gap-5 pt-5">
                  <div className="flex gap-5">
                    <Image src={'/technofair/ugtv.png'} alt="ugtv" width={100} height={100} />
                    <Image src={'/technofair/commadesign.png'} alt="comma design" width={100} height={100} />
                    <Image src={'/technofair/anakgundardotco.png'} alt="anakgundardotco" width={100} height={100} />
                    <Image src={'/technofair/bemfti-ug.png'} alt="bemfti" width={110} height={100} />
                    <Image src={'/technofair/bemfikom.jpg'} alt="bemfikom" width={110} height={100} />
                    <Image src={'/technofair/himakom-unila.png'} alt="himakom unila" width={100} height={100} />
                    <Image src={'/technofair/bempsi.png'} alt="bempsi" width={100} height={100} className="w-16" />
                    <Image src={'/technofair/radioug.png'} alt="radioug" width={100} height={100} />
                  </div>
                  <div className="flex gap-5">
                    <Image src={'/technofair/bemft-unj.png'} alt="bemft-unj" width={150} height={100} />
                    <Image src={'/technofair/himti-uin.jpg'} alt="himti uin" width={110} height={100} />
                    <Image src={'/technofair/himsi-unsri.png'} alt="himsi unsri" width={140} height={100} />
                    <Image src={'/technofair/academic-insight.jpg'} alt="academic insight" width={110} height={100} />
                    <Image src={'/technofair/bemfik-upnvj.jpg'} alt="bemfik-upnvj" width={100} height={100} />
                    <Image src={'/technofair/himti-ubl.jpg'} alt="himti ubl" width={100} height={100} />
                    <Image src={'/technofair/seputar-seminar.png'} alt="seputar seminar" width={110} height={100} />
                  </div>
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
          <div className="w-full h-48 bg-white rounded-3xl py-8">
            <div className="flex justify-center items-center gap-3">
              <p className="font-[Poppins] text-sm font-light text-[#262626]">OFFICIAL EXCLUSIVE CLOUD HOSTING PARTNER</p>
            </div>
            <div className="flex justify-center items-center py-3">
              <Image src={'/technofair/dewaweb.png'} alt="dewaweb" width={185} height={30} />
            </div>
          </div>
          <div className="w-full h-56 bg-white rounded-3xl py-8">
            <div className="flex justify-center items-center gap-3">
              <div className="w-20 h-0.5 bg-[#B9BCC7] opacity-30"></div>
              <p className="font-[Poppins] text-sm font-light text-[#262626]">SPONSORS</p>
              <div className="w-20 h-0.5 bg-[#B9BCC7] opacity-30"></div>
            </div>
            <div className="">
              <div className="flex justify-center items-center gap-3 pt-3">
                <Image src={'/technofair/dicoding.png'} alt="dicoding" width={108} height={30} />
                <Image src={'/technofair/dapoerdjoeang.png'} alt="dapoerdjoeang" width={55} height={55} />
              </div>
              <div className="flex justify-center items-center gap-3">
                <Image src={'/technofair/frisianflag.png'} alt="frisianflag" width={55} height={55} />
                <Image src={'/technofair/jh-square.png'} alt="jagoan hosting" width={90} height={30} />
              </div>
              <div className="flex justify-center items-center gap-3">
                <Image src={'/technofair/cakap.jpeg'} alt="cakap" width={108} height={30} />
              </div>
            </div>
          </div>
          <div className="w-full h-44 bg-white rounded-3xl py-8">
            <div className="flex justify-center items-center gap-3">
              <p className="font-[Poppins] text-sm font-light text-[#262626]">COMMUNITY PARTNER</p>
            </div>
            <div className="flex justify-center items-center py-5 gap-3">
              <Image src={'/technofair/ccug.png'} alt="ccug" width={75} height={75} />
              <Image src={'/technofair/gundario.png'} alt="gundario" width={75} height={75} />
            </div>
          </div>
          <div className="w-full bg-white rounded-3xl py-8">
            <div className="flex justify-center items-center gap-3">
              <div className="w-20 h-0.5 bg-[#B9BCC7] opacity-30"></div>
              <p className="font-[Poppins] text-sm font-light text-[#262626]">MEDIA PARTNER</p>
              <div className="w-20 h-0.5 bg-[#B9BCC7] opacity-30"></div>
            </div>
            <div className="flex flex-col justify-center items-center py-5x` gap-4 py-2">
              <div className="flex gap-2">
                <Image src={'/technofair/ugtv.png'} alt="ugtv" width={75} height={75} />
                <Image src={'/technofair/commadesign.png'} alt="comma design" width={67} height={75} />
                <Image src={'/technofair/bempsi.png'} alt="bempsi" width={49} height={75} />
              </div>
              <div className="flex gap-2">
                <Image src={'/technofair/bemfti-ug.png'} alt="bemfti" width={85} height={75} />
                <Image src={'/technofair/bemfikom.png'} alt="bemfikom" width={75} height={75} />
                <Image src={'/technofair/anakgundardotco.png'} alt="anakgundardotco" width={75} height={75} />
              </div>
              <div className="flex gap-2">
                <Image src={'/technofair/academic-insight.jpg'} alt="academic insight" width={75} height={75} />
                <Image src={'/technofair/radioug.png'} alt="radioug" width={75} height={75} />
                <Image src={'/technofair/himsi-unsri.png'} alt="himsi fasilkom" width={95} height={75} />
              </div>
              <div className="flex gap-2">
                <Image src={'/technofair/himti-uin.jpg'} alt="unila" width={75} height={75} />
                <Image src={'/technofair/bemft-unj.png'} alt="bemft-unj" width={109.34} height={75} />
                <Image src={'/technofair/himti-ubl.jpg'} alt="bem fasilkom unsika" width={75} height={75} />
              </div>
              <div className="flex gap-2">
                <Image src={'/technofair/bemfik-upnvj.jpg'} alt="bem fisip upn" width={75} height={75} />
                <Image src={'/technofair/seputar-seminar.png'} alt="bem fti untar" width={85} height={75} />
                <Image src={'/technofair/himakom-unila.png'} alt="himakom unila" width={75} height={75} />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Tampilan Mobile End */}
    </div>
  );
}
