// import ImageAnimation from './ImageAnimation';
import Image from 'next/image';
import ScrollImage from './ScrollImage';

export default function StoryPage() {
  return (
    <div className="bg-[#0B0E1A]">
      {/* Tampilan Dekstop Start */}
      <div className="md:block hidden">
        <div className="flex justify-center items-center p-20">
          <div className="w-full">
            <div className="flex">
              <div className="w-3/6 pt-16">
                <div className="px-7 font-[Bricolage-Grotesque]">
                  <p className="text-[#FFF4E7] text-6xl  font-bold">TechnoFair 11.0</p>
                  <p className="text-[#FFF4E7] text-5xl">More Than Just Pictures, a Story!</p>
                </div>
                <div className="pt-96 px-7 font-[Poppins] text-[#f7f9fa]">
                  <p className="text-xl font-light">Lets Chat, Reach Out to Us</p>
                  <div className="flex gap-5 py-2">
                    <div className="flex gap-2">
                      <Image src={'/technofair/instagram.png'} alt="instagram" width={20} height={20} />
                      <p className="text-sm">@technofair</p>
                    </div>
                    <div className="flex gap-2">
                      <Image src={'/technofair/x.png'} alt="instagram" width={20} height={20} />
                      <p className="text-sm">@technofair</p>
                    </div>
                    <div className="flex gap-2">
                      <Image src={'/technofair/line.png'} alt="instagram" width={20} height={20} />
                      <p className="text-sm">@technofair</p>
                    </div>
                  </div>
                  <div className="text-sm gap-1">
                    <p className="">or <a href="#" className='underline'>Others</a></p>
                  </div>
                </div>
              </div>
              <div className=" w-5/6">
                <div className="">
                  <div className="">
                    {/* <ImageAnimation /> */}
                    <Image src={'/technofair/image-animation.png'} alt="image animation" width={825} height={734} />
                    {/* <ScrollImage/> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Tampilan Dekstop End */}

      {/* Tampilan Mobile Start */}
      <div className="md:hidden">
        <div className="flex flex-col justify-center items-center">
          <div className="px-5 text-[#fff4e7] font-[Bricolage-Grotesque] text-center">
            <p className="font-bold text-5xl">TechnoFair 11.0</p>
            <p className="text-4xl">More Than Just Pictures, a Story!</p>
          </div>
          <div className="pt-9">
            {/* <ImageAnimation /> */}
            <Image src={'/technofair/image-animation-2.png'} alt="image animation" width={360} height={914} />
          </div>
          <div className="text-center py-9">
            <p className="text-base font-light">Lets Chat, Reach Out to Us</p>
            <div className="flex gap-5 py-2">
              <div className="flex gap-2">
                <Image src={'/technofair/instagram.png'} alt="instagram" width={20} height={20} />
                <p className="text-sm">@technofair</p>
              </div>
              <div className="flex gap-2">
                <Image src={'/technofair/x.png'} alt="instagram" width={20} height={20} />
                <p className="text-sm">@technofair</p>
              </div>
              <div className="flex gap-2">
                <Image src={'/technofair/line.png'} alt="instagram" width={20} height={20} />
                <p className="text-sm">@technofair</p>
              </div>
            </div>
            <div className="flex text-sm gap-1 justify-center items-center">
              <p className="">or</p>
              <p className="underline">Others</p>
            </div>
          </div>
        </div>
      </div>
      {/* Tampilan Mobile End */}
    </div>
  );
}
