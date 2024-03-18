import Image from 'next/image';

export default function ScheduleTabs() {
  const items: any = [
    {
      title: 'Seminars',
      content: (
        <div className="flex justify-center items-center py-3 px-10">
          <div className="w-1/2 h-40">
            <div className="">
              <div className="flex justify-between items-center p-2">
                <div className="">
                  <p className="font-bold text-xl text-[#FFF4E7]">28 Mei 2022</p>
                  <p className="font-light">13.00 - 16.00</p>
                </div>
                <div className="">
                  <div className="flex gap-4">
                    <p className="font-bold text-xl text-[#FFF4E7]">Big Data</p>
                    <div className="w-24 h-6 bg-[#AF5474] rounded-[28px] py-0.5">
                      <p className="text-black text-sm text-center">Webinar</p>
                    </div>
                  </div>
                  <p className="font-light italic">“Kickstart your career in Big Data”</p>
                </div>
                <div className="flex justify-center items-center">
                  <Image src={'/technofair/arrow-kanan-bulet.png'} alt="arrow kanan bulet" width={30} height={30} />
                </div>
              </div>
              <div className="w-full bg-[#FFF4E71A] h-0.5"></div>
            </div>
            <div className="">
              <div className="flex justify-between items-center p-2">
                <div className="">
                  <p className="font-bold text-xl text-[#FFF4E7]">29 Mei 2022</p>
                  <p className="font-light">09.00 - 12.00</p>
                </div>
                <div className="">
                  <div className="flex gap-4">
                    <p className="font-bold text-xl text-[#FFF4E7]">Smart City</p>
                    <div className="w-24 h-6 bg-[#AF5474] rounded-[28px] py-0.5">
                      <p className="text-black text-sm text-center">Webinar</p>
                    </div>
                  </div>
                  <p className="font-light italic">“How Smart City could change the world”</p>
                </div>
                <div className="flex justify-center items-center">
                  <Image src={'/technofair/arrow-kanan-bulet.png'} alt="arrow kanan bulet" width={30} height={30} />
                </div>
              </div>
              <div className="w-full bg-[#FFF4E71A] h-0.5"></div>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: 'Workshops',
      content: (
        <div className="flex justify-center items-center py-3 px-10">
          <div className="w-1/2 h-40">
            <div className="">
              <div className="flex justify-between items-center p-2">
                <div className="">
                  <p className="font-bold text-xl text-[#FFF4E7]">28 Mei 2022</p>
                  <p className="font-light">13.00 - 16.00</p>
                </div>
                <div className="">
                  <div className="flex gap-4">
                    <p className="font-bold text-xl text-[#FFF4E7]">Digital Marketing</p>
                    <div className="w-24 h-6 bg-[#AF5474] rounded-[28px] py-0.5">
                      <p className="text-black text-sm text-center">Workshop</p>
                    </div>
                  </div>
                  <p className="font-light italic">“Kickstart your career in Big Data”</p>
                </div>
                <div className="flex justify-center items-center">
                  <Image src={'/technofair/arrow-kanan-bulet.png'} alt="arrow kanan bulet" width={30} height={30} />
                </div>
              </div>
              <div className="w-full bg-[#FFF4E71A] h-0.5"></div>
            </div>
            <div className="">
              <div className="flex justify-between items-center p-2">
                <div className="">
                  <p className="font-bold text-xl text-[#FFF4E7]">29 Mei 2022</p>
                  <p className="font-light">09.00 - 12.00</p>
                </div>
                <div className="">
                  <div className="flex gap-4">
                    <p className="font-bold text-xl text-[#FFF4E7]">UI Design</p>
                    <div className="w-24 h-6 bg-[#AF5474] rounded-[28px] py-0.5">
                      <p className="text-black text-sm text-center">Workshop</p>
                    </div>
                  </div>
                  <p className="font-light italic">“How Smart City could change the world”</p>
                </div>
                <div className="flex justify-center items-center">
                  <Image src={'/technofair/arrow-kanan-bulet.png'} alt="arrow kanan bulet" width={30} height={30} />
                </div>
              </div>
              <div className="w-full bg-[#FFF4E71A] h-0.5"></div>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: 'Competitions',
      content: (
        <div className="flex justify-center items-center py-3 px-10">
          <div className="w-1/2 h-40">
            <div className="">
              <div className="flex justify-between items-center p-2">
                <div className="">
                  <p className="font-bold text-xl text-[#FFF4E7]">28 Mei 2022</p>
                  <p className="font-light">13.00 - 16.00</p>
                </div>
                <div className="">
                  <div className="flex gap-4">
                    <p className="font-bold text-xl text-[#FFF4E7]">Smart FIKTI</p>
                    <div className="w-24 h-6 bg-[#AF5474] rounded-[28px] py-0.5">
                      <p className="text-black text-sm text-center">Competition</p>
                    </div>
                  </div>
                  <p className="font-light italic">“Kickstart your career in Big Data”</p>
                </div>
                <div className="flex justify-center items-center">
                  <Image src={'/technofair/arrow-kanan-bulet.png'} alt="arrow kanan bulet" width={30} height={30} />
                </div>
              </div>
              <div className="w-full bg-[#FFF4E71A] h-0.5"></div>
            </div>
            <div className="">
              <div className="flex justify-between items-center p-2">
                <div className="">
                  <p className="font-bold text-xl text-[#FFF4E7]">29 Mei 2022</p>
                  <p className="font-light">09.00 - 12.00</p>
                </div>
                <div className="">
                  <div className="flex gap-4">
                    <p className="font-bold text-xl text-[#FFF4E7]">Infographic</p>
                    <div className="w-24 h-6 bg-[#AF5474] rounded-[28px] py-0.5">
                      <p className="text-black text-sm text-center">Competition</p>
                    </div>
                  </div>
                  <p className="font-light italic">“How Smart City could change the world”</p>
                </div>
                <div className="flex justify-center items-center">
                  <Image src={'/technofair/arrow-kanan-bulet.png'} alt="arrow kanan bulet" width={30} height={30} />
                </div>
              </div>
              <div className="w-full bg-[#FFF4E71A] h-0.5"></div>
            </div>
            <div className="">
              <div className="flex justify-between items-center p-2">
                <div className="">
                  <p className="font-bold text-xl text-[#FFF4E7]">29 Mei 2022</p>
                  <p className="font-light">09.00 - 12.00</p>
                </div>
                <div className="">
                  <div className="flex gap-4">
                    <p className="font-bold text-xl text-[#FFF4E7]">Capture The Flag</p>
                    <div className="w-24 h-6 bg-[#AF5474] rounded-[28px] py-0.5">
                      <p className="text-black text-sm text-center">Competition</p>
                    </div>
                  </div>
                  <p className="font-light italic">“How Smart City could change the world”</p>
                </div>
                <div className="flex justify-center items-center">
                  <Image src={'/technofair/arrow-kanan-bulet.png'} alt="arrow kanan bulet" width={30} height={30} />
                </div>
              </div>
              <div className="w-full bg-[#FFF4E71A] h-0.5"></div>
            </div>
            <div className="">
              <div className="flex justify-between items-center p-2">
                <div className="">
                  <p className="font-bold text-xl text-[#FFF4E7]">29 Mei 2022</p>
                  <p className="font-light">09.00 - 12.00</p>
                </div>
                <div className="">
                  <div className="flex gap-4">
                    <p className="font-bold text-xl text-[#FFF4E7]">UX Design</p>
                    <div className="w-24 h-6 bg-[#AF5474] rounded-[28px] py-0.5">
                      <p className="text-black text-sm text-center">Competition</p>
                    </div>
                  </div>
                  <p className="font-light italic">“How Smart City could change the world”</p>
                </div>
                <div className="flex justify-center items-center">
                  <Image src={'/technofair/arrow-kanan-bulet.png'} alt="arrow kanan bulet" width={30} height={30} />
                </div>
              </div>
              <div className="w-full bg-[#FFF4E71A] h-0.5"></div>
            </div>
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className="flex justify-center items-center">
      <div className="flex gap-5 py-3">
        {items.map((item: any, index: any) => {
          return (
            // eslint-disable-next-line react/jsx-key
            <div className="flex justify-center items-center">
              <div className="flex flex-col w-48 h-10 bg-[#E87C6C] rounded-[19px]">
                <button key={index} className="text-base font-bold text-center p-1.5">
                  {item.title}
                </button>
              </div>
            </div>
          );
        })}
      </div>
      {/* <p className="text-base font-bold text-center p-1.5"></p> */}
    </div>
  );
}
