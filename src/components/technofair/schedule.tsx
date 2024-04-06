import ScheduleTabs from './ScheduleTabs';
import Image from 'next/image';
import Link from 'next/link';

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
          <div className="pb-20">
            <ScheduleTabs items={items} />
          </div>
        </div>
      </div>
      {/* Tampilan Dekstop End */}

      {/* Tampilan Mobile Start */}
      <div className="md:hidden block">
        <div className="py-32 md:px-14 bg-gradient-to-t from-[#0B0E1A] to-[#211525] font-[Poppins]">
          <div className="flex justify-center items-center py-2">
            <div className="text-center">
              <p className="text-3xl font-bold">Schedule</p>
              <p className="text-sm opacity-30 py-3">Jadwal rangkaian acara TechnoFair 11.0</p>
              <div className="w-84 h-1 bg-[#512B26]"></div>
            </div>
          </div>
          <div className="px-1">
            <ScheduleTabs items={items} />
          </div>
        </div>
      </div>
      {/* Tampilan Mobile End */}
    </div>
  );
}

const items: any = [
  {
    title: 'Seminars',
    content: (
      <div className="md:flex md:justify-center md:items-center py-3 md:px-10">
        <div className="md:w-1/2 md:h-40 w-96 h-80 md:p-0 p-2">
          <div className="">
            <div className="flex justify-between items-center md:p-2">
              <div className="">
                <p className="font-bold md:text-xl text-base text-[#FFF4E7]">01 Juni 2024</p>
                <p className="font-light md:text-base text-sm">09.00 - 12.30 WIB</p>
              </div>
              <div className="md:w-72 w-48">
                <div className="flex gap-4 w-96">
                  <p className="font-bold md:text-xl text-base text-[#FFF4E7]">Data Analyst</p>
                  <div className="md:w-24 md:h-6 w-20 bg-[#AF5474] rounded-[28px] py-0.5">
                    <p className="text-black text-sm text-center">Seminar</p>
                  </div>
                </div>
                <p className="font-light italic md:text-base text-sm md:w-80">&quot;Visualizing Insights: A Beginner&apos;s Guide to Data Presentation&quot;</p>
              </div>
              <Link href={'#'}>
                <div className="flex justify-center items-center">
                  <Image src={'/technofair/arrow-kanan-bulet.png'} alt="arrow kanan bulet" width={30} height={30} />
                </div>
              </Link>
            </div>
            <div className="w-full bg-[#FFF4E71A] h-0.5 md:mt-0 mt-4"></div>
          </div>
          <div className="md:py-0 py-3">
            <div className="flex justify-between items-center md:p-2">
              <div className="">
                <p className="font-bold md:text-xl text-base text-[#FFF4E7]">20 Juli 2024</p>
                <p className="font-light md:text-base text-sm">09.00 - 13.00 WIB</p>
              </div>
              <div className="md:w-72 w-48">
                <div className="flex gap-4 md:w-96 w-72">
                  <p className="font-bold md:text-xl text-base text-[#FFF4E7]">Artificial Intelligence</p>
                  <div className="md:w-24 h-6 w-20 bg-[#AF5474] rounded-[28px] py-0.5">
                    <p className="text-black text-sm text-center">Seminar</p>
                  </div>
                </div>
                <p className="font-light italic md:text-base text-sm md:w-96">&quot;Exploring Innovations and Applications of Artificial Intelligence&quot;</p>
              </div>
              <Link href={'#'}>
                <div className="flex justify-center items-center">
                  <Image src={'/technofair/arrow-kanan-bulet.png'} alt="arrow kanan bulet" width={30} height={30} />
                </div>
              </Link>
            </div>
            <div className="w-full bg-[#FFF4E71A] h-0.5 md:mt-0 mt-4"></div>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'Workshops',
    content: (
      <div className="md:flex md:justify-center md:items-center py-3 md:px-10">
        <div className="md:w-1/2 md:h-40 w-96 h-80 md:p-0 p-2">
          <div className="">
            <div className="flex justify-between items-center md:p-2">
              <div className="">
                <p className="font-bold md:text-xl text-base text-[#FFF4E7]">6 Juli 2024</p>
                <p className="font-light md:text-base text-sm">09.00 - 12.40 WIB</p>
              </div>
              <div className="md:w-80 w-56">
                <div className="flex gap-4 w-96">
                  <p className="font-bold md:text-xl text-sm text-[#FFF4E7]">Product Management</p>
                  <div className="md:w-24 md:h-6 w-20 bg-[#F9F871] rounded-[28px] py-0.5">
                    <p className="text-black text-sm text-center">Workshop</p>
                  </div>
                </div>
                <p className="font-light italic md:text-base text-sm">&quot;Building a Strong Foundation: Mastering Product Management Skills&quot;</p>
              </div>
              <Link href={'#'}>
                <div className="flex justify-center items-center">
                  <Image src={'/technofair/arrow-kanan-bulet.png'} alt="arrow kanan bulet" width={30} height={30} />
                </div>
              </Link>
            </div>
            <div className="w-full bg-[#FFF4E71A] h-0.5 md:mt-0 mt-4"></div>
          </div>
          <div className="md:py-0 py-3">
            <div className="flex justify-between items-center md:p-2">
              <div className="">
                <p className="font-bold md:text-xl text-base text-[#FFF4E7]">29 Juli 2024</p>
                <p className="font-light md:text-base text-sm">09.00 - 12.40 WIB</p>
              </div>
              <div className="md:w-80 w-56">
                <div className="flex gap-4">
                  <p className="font-bold md:text-xl text-base text-[#FFF4E7]">UI/UX Design</p>
                  <div className="md:w-24 h-6 w-20 bg-[#F9F871] rounded-[28px] py-0.5">
                    <p className="text-black text-sm text-center">Workshop</p>
                  </div>
                </div>
                <p className="font-light italic md:text-base text-sm md:w-96">&quot;From Concept to Creation: Mastering UI/UX Design Practices&quot;</p>
              </div>
              <Link href={'#'}>
                <div className="flex justify-center items-center">
                  <Image src={'/technofair/arrow-kanan-bulet.png'} alt="arrow kanan bulet" width={30} height={30} />
                </div>
              </Link>
            </div>
            <div className="w-full bg-[#FFF4E71A] h-0.5 md:mt-0 mt-4"></div>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'Competitions',
    content: (
      <div className="md:flex md:justify-center md:items-center py-3 md:px-10">
        <div className="md:w-1/2 md:h-40 w-96 h-80 md:p-0 p-2">
          <div className="">
            <div className="flex justify-between items-center md:p-2">
              <div className="">
                <p className="font-bold md:text-xl text-base text-[#FFF4E7]">28 Mei 2022</p>
                <p className="font-light md:text-base text-sm">13.00 - 16.00</p>
              </div>
              <div className="md:w-72 w-56">
                <div className="flex md:gap-4 gap-2">
                  <p className="font-bold md:text-xl text-base text-[#FFF4E7]">Smart FIKTI</p>
                  <div className="w-24 h-6 bg-[#E6A356] rounded-[28px] py-0.5">
                    <p className="text-black text-sm text-center">Competition</p>
                  </div>
                </div>
                <p className="font-light italic md:text-base text-sm">“Kickstart your career in Big Data”</p>
              </div>
              <Link href={'#'}>
                <div className="flex justify-center items-center">
                  <Image src={'/technofair/arrow-kanan-bulet.png'} alt="arrow kanan bulet" width={30} height={30} />
                </div>
              </Link>
            </div>
            <div className="w-full bg-[#FFF4E71A] h-0.5 md:mt-0 mt-4"></div>
          </div>
          <div className="md:py-0 py-3">
            <div className="flex justify-between items-center md:p-2">
              <div className="">
                <p className="font-bold md:text-xl text-base text-[#FFF4E7]">29 Mei 2022</p>
                <p className="font-light md:text-base text-sm">09.00 - 12.00</p>
              </div>
              <div className="md:w-72 w-56">
                <div className="flex md:gap-4 gap-2">
                  <p className="font-bold md:text-xl text-base text-[#FFF4E7]">Infographic</p>
                  <div className="w-24 h-6 bg-[#E6A356] rounded-[28px] py-0.5">
                    <p className="text-black text-sm text-center">Competition</p>
                  </div>
                </div>
                <p className="font-light italic md:text-base text-sm">“How Smart City could change the world”</p>
              </div>
              <Link href={'#'}>
                <div className="flex justify-center items-center">
                  <Image src={'/technofair/arrow-kanan-bulet.png'} alt="arrow kanan bulet" width={30} height={30} />
                </div>
              </Link>
            </div>
            <div className="w-full bg-[#FFF4E71A] h-0.5 md:mt-0 mt-4"></div>
          </div>
          <div className="md:py-0 py-3">
            <div className="flex justify-between items-center md:p-2">
              <div className="">
                <p className="font-bold md:text-xl text-base text-[#FFF4E7]">29 Mei 2022</p>
                <p className="font-light md:text-base text-sm">09.00 - 12.00</p>
              </div>
              <div className="md:w-72 w-56">
                <div className="flex md:gap-4 gap-2">
                  <p className="font-bold md:text-xl text-base text-[#FFF4E7]">CTF</p>
                  <div className="w-24 h-6 bg-[#E6A356] rounded-[28px] py-0.5">
                    <p className="text-black text-sm text-center">Competition</p>
                  </div>
                </div>
                <p className="font-light italic md:text-base text-sm">“How Smart City could change the world”</p>
              </div>
              <Link href={'#'}>
                <div className="flex justify-center items-center">
                  <Image src={'/technofair/arrow-kanan-bulet.png'} alt="arrow kanan bulet" width={30} height={30} />
                </div>
              </Link>
            </div>
            <div className="w-full bg-[#FFF4E71A] h-0.5 md:mt-0 mt-4"></div>
          </div>
          <div className="md:py-0 py-3">
            <div className="flex justify-between items-center md:p-2">
              <div className="">
                <p className="font-bold md:text-xl text-base text-[#FFF4E7]">29 Mei 2022</p>
                <p className="font-light md:text-base text-sm">09.00 - 12.00</p>
              </div>
              <div className="md:w-72 w-56">
                <div className="flex md:gap-4 gap-2">
                  <p className="font-bold md:text-xl text-base text-[#FFF4E7]">UX Design</p>
                  <div className="w-24 h-6 bg-[#E6A356] rounded-[28px] py-0.5">
                    <p className="text-black text-sm text-center">Competition</p>
                  </div>
                </div>
                <p className="font-light italic md:text-base text-sm">“How Smart City could change the world”</p>
              </div>
              <Link href={'#'}>
                <div className="flex justify-center items-center">
                  <Image src={'/technofair/arrow-kanan-bulet.png'} alt="arrow kanan bulet" width={30} height={30} />
                </div>
              </Link>
            </div>
            <div className="w-full bg-[#FFF4E71A] h-0.5 md:mt-0 mt-4"></div>
          </div>
        </div>
      </div>
    ),
  },
];
