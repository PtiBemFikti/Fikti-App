import ScheduleTabs from './ScheduleTabs';
import Image from 'next/image';

export default function SchedulePage() {
  return (
    <div className="">
      {/* Tampilan Dekstop Start */}
      <div className="md:block hidden">
        <div className="py-32 px-14 bg-gradient-to-t from-[#0B0E1A] to-[#211525] font-[Poppins]">
          <div className="flex justify-center items-center">
            <div className="text-center">
              <p className="text-4xl font-bold">Schedule</p>
              <p className="text-base opacity-30 py-3">Jadwal rangkaian acara TechnoFair 11.0</p>
              <div className="w-84 h-1 bg-[#512B26]"></div>
            </div>
          </div>
          <div className="">
            <ScheduleTabs />
            {/* <div className="flex justify-center items-center py-3 gap-5">
              <div className="w-48 h-10 bg-[#E87C6C] border-[2px] rounded-[19px]">
                <p className="text-base font-bold text-center p-1.5">Seminars</p>
              </div>
              <div className="w-48 h-10 bg-[#E87C6C] border-[2px] rounded-[19px]">
                <p className="text-base font-bold text-center p-1.5">Workshops</p>
              </div>
              <div className="w-48 h-10 bg-[#E87C6C] border-[2px] rounded-[19px]">
                <p className="text-base font-bold text-center p-1.5">Competitions</p>
              </div>
            </div> */}
            {/* <div className="flex justify-center items-center py-3 px-10">
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
            </div> */}
          </div>
        </div>
      </div>
      {/* Tampilan Dekstop End */}

      {/* Tampilan Mobile Start */}
      {/* Tampilan Mobile End */}
    </div>
  );
}

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
    )
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
    )
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
    )
  },
];
