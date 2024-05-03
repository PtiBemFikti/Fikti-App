'use client';

import { bricolageGrotesque } from '@/styles/font';
import Image from 'next/image';
import Link from 'next/link';

export default function EventPage() {
  return (
    <div className="">
      {/* Tampilan Dekstop Start */}
      <div className="md:block hidden">
        <div className="">
          {/* <Image src={'/technofair/noisy-gradient.png'} alt='bg gradient' width={1440} height={1931} className='absolute object-cover'/> */}
          <div className="flex justify-center items-center p-14 mt-20 bg-gradient-to-t from-[#211525] to-white">
            <div className="w-2/3">
              <h1 className={`text-white text-6xl font-bold ${bricolageGrotesque.className}`}>
                Our Upcoming <br /> Events
              </h1>
            </div>
            <div className="w-4/5">
              <Image src={'/technofair/content.png'} alt="content" width={736} height={192} />
            </div>
          </div>

          <div className="py-20 px-14 bg-[#241525]">
            <div className="font-[Poppins]">
              <p className="text-3xl font-bold text-white">Seminars & Workshops</p>
              {/* Card Acara Seminar & Workshops */}
              <div className="py-4 flex justify-center items-center gap-3">
                <div className="w-72 h-96 bg-[#212427] border-[#E87C6C3B] border-[2px] rounded-[39px]">
                  <div className="py-7 px-3">
                    <div className="w-20 h-7 bg-[#af5474] rounded-xl">
                      <p className="text-[#241525] text-sm text-center pt-1">Seminar</p>
                    </div>
                    <div className="py-6">
                      <p className="italic font-bold text-2xl">Data Analyst</p>
                      <p className="text-sm text-[#B9BCC7] pt-12">Visualizing Insights: A Beginner&apos;s Guide to Data Presentation</p>
                    </div>
                    <div className="">
                      <div className="grid grid-flow-col gap-1 pt-4">
                        <div className="grid grid-flow-col">
                          <Image src={'/technofair/kalender.png'} alt="kalender" width={20} height={16} />
                          <p className="text-[#b9bcc7] text-sm mt-1 ">01 Juni 2024</p>
                        </div>
                        <div className="grid grid-flow-col">
                          <Image src={'/technofair/jam.png'} alt="jam" width={20} height={10} />
                          <p className="text-[#b9bcc7] text-sm mt-1 ">09.00 - 12.30 WIB</p>
                        </div>
                      </div>
                      <div className="grid grid-flow-col py-3">
                        <Image src={'/technofair/internet.png'} alt="internet" width={20} height={10} />
                        <p className="text-[#b9bcc7] text-sm mt-1 -ml-28">Online</p>
                      </div>
                    </div>
                    <Link href={'/technofair/details/seminar/data-analyst'} className="flex gap-4 py-5 justify-end items-end">
                      <p className=" text-base font-bold text-white">Learn more</p>
                      <Image src={'/technofair/arrow-kanan.png'} alt="arrow kanan" width={23} height={12} />
                    </Link>
                  </div>
                </div>
                <div className="w-72 h-96 bg-[#212427] border-[#E87C6C3B] border-[2px] rounded-[39px]">
                  <div className="py-7 px-3">
                    <div className="w-20 h-7 bg-[#af5474] rounded-xl">
                      <p className="text-[#241525] text-sm text-center pt-1">Seminar</p>
                    </div>
                    <div className="py-6">
                      <p className="italic font-bold text-2xl">Artificial Intelligence</p>
                      <p className="text-sm text-[#B9BCC7] pt-12">Exploring Innovations and Applications of Artificial Intelligence</p>
                    </div>
                    <div className="">
                      <div className="grid grid-flow-col gap-1 pt-4">
                        <div className="grid grid-flow-col">
                          <Image src={'/technofair/kalender.png'} alt="kalender" width={20} height={16} />
                          <p className="text-[#b9bcc7] text-sm mt-1 ">20 Juli 2024</p>
                        </div>
                        <div className="grid grid-flow-col">
                          <Image src={'/technofair/jam.png'} alt="jam" width={20} height={10} />
                          <p className="text-[#b9bcc7] text-sm mt-1 ">09.00 - 13.00 WIB</p>
                        </div>
                      </div>
                      <div className="grid grid-flow-col py-3">
                        <Image src={'/technofair/internet.png'} alt="internet" width={20} height={10} />
                        <p className="text-[#b9bcc7] text-sm mt-1 -ml-28">Online</p>
                      </div>
                    </div>
                    <Link href={'/technofair/details/seminar/artificial-intelligence'} className="flex gap-4 py-5 justify-end items-end">
                      <p className=" text-base font-bold text-white">Learn more</p>
                      <Image src={'/technofair/arrow-kanan.png'} alt="arrow kanan" width={23} height={12} />
                    </Link>
                  </div>
                </div>
                <div className="w-72 h-96 bg-[#212427] border-[#F9F8713B] border-[2px] rounded-[39px]">
                  <div className="py-7 px-3">
                    <div className="w-24 h-7 bg-[#F9F871] rounded-xl">
                      <p className="text-[#241525] text-sm text-center pt-1">Workshop</p>
                    </div>
                    <div className="py-6">
                      <p className="italic font-bold text-2xl">Product Management</p>
                      <p className="text-sm text-[#B9BCC7] pt-3">Building a Strong Foundation : Mastering Product Management Skills</p>
                    </div>
                    <div className="">
                      <div className="grid grid-flow-col gap-1">
                        <div className="grid grid-flow-col">
                          <Image src={'/technofair/kalender.png'} alt="kalender" width={20} height={16} />
                          <p className="text-[#b9bcc7] text-sm mt-1 ">06 Juli 2024</p>
                        </div>
                        <div className="grid grid-flow-col">
                          <Image src={'/technofair/jam.png'} alt="jam" width={20} height={10} />
                          <p className="text-[#b9bcc7] text-sm mt-1 ">09.00 - 12.40 WIB</p>
                        </div>
                      </div>
                      <div className="grid grid-flow-col py-3">
                        <Image src={'/technofair/internet.png'} alt="internet" width={20} height={10} />
                        <p className="text-[#b9bcc7] text-sm mt-1 -ml-28">Online</p>
                      </div>
                    </div>
                    <Link href={'/technofair/details/workshop/product-management'} className="flex gap-4 py-5 justify-end items-end">
                      <p className=" text-base font-bold text-white">Learn more</p>
                      <Image src={'/technofair/arrow-kanan-kuning.png'} alt="arrow kanan" width={23} height={12} />
                    </Link>
                  </div>
                </div>
                <div className="w-72 h-96 bg-[#212427] border-[#F9F8713B] border-[2px] rounded-[39px]">
                  <div className="py-7 px-3">
                    <div className="w-24 h-7 bg-[#F9F871] rounded-xl">
                      <p className="text-[#241525] text-sm text-center pt-1">Workshop</p>
                    </div>
                    <div className="py-6">
                      <p className="italic font-bold text-2xl">UI/UX Design</p>
                      <p className="text-sm text-[#B9BCC7] pt-12">From Concept to Creation: Mastering UI/UX Design Practices</p>
                    </div>
                    <div className="">
                      <div className="grid grid-flow-col gap-1 pt-4">
                        <div className="grid grid-flow-col">
                          <Image src={'/technofair/kalender.png'} alt="kalender" width={20} height={16} />
                          <p className="text-[#b9bcc7] text-sm mt-1 ">29 Juli 2024</p>
                        </div>
                        <div className="grid grid-flow-col">
                          <Image src={'/technofair/jam.png'} alt="jam" width={20} height={10} />
                          <p className="text-[#b9bcc7] text-sm mt-1 ">09.00 - 12.40 WIB</p>
                        </div>
                      </div>
                      <div className="grid grid-flow-col py-3">
                        <Image src={'/technofair/internet.png'} alt="internet" width={20} height={10} />
                        <p className="text-[#b9bcc7] text-sm mt-1 -ml-28">Online</p>
                      </div>
                    </div>
                    <Link href={'/technofair/details/workshop/uiux'} className="flex gap-4 py-5 justify-end items-end">
                      <p className=" text-base font-bold text-white">Learn more</p>
                      <Image src={'/technofair/arrow-kanan-kuning.png'} alt="arrow kanan" width={23} height={12} />
                    </Link>
                  </div>
                </div>
              </div>
              {/* Cara Acara Seminar & Workshops End */}
            </div>
          </div>
          <div className="px-14 bg-[#241525]">
            <div className="font-[Poppins]">
              <p className="text-3xl font-bold text-white">Competitions</p>
              {/* Card Acara Competitions */}
              <div className="py-4 flex justify-center items-center gap-3">
                <div className="w-72 h-96 bg-[#212427] border-[#E6A3563B] border-[2px] rounded-[39px]">
                  <div className="p-7">
                    <div className="w-28 h-7 bg-[#E6A356] rounded-xl">
                      <p className="text-[#241525] text-sm text-center pt-1">Competition</p>
                    </div>
                    <div className="py-6">
                      <p className="italic font-bold text-2xl">Smart Fikti</p>
                      <p className="text-sm text-[#B9BCC7] mt-2">A dynamic language popular for web development, big data, science, and scripting.</p>
                    </div>
                    <div className="">
                      <div className="flex gap-5">
                        <div className="grid grid-flow-col gap-2">
                          <Image src={'/technofair/kalender.png'} alt="kalender" width={20} height={16} />
                          <p className="text-[#b9bcc7] text-sm mt-1">June 22-24, 2024</p>
                        </div>
                        <div className="grid grid-flow-col gap-2">
                          <Image src={'/technofair/jam.png'} alt="jam" width={20} height={10} />
                          <p className="text-[#b9bcc7] text-sm mt-1">10.30</p>
                        </div>
                      </div>
                      <div className="grid grid-flow-col gap-2 py-4">
                        <Image src={'/technofair/pena.png'} alt="pena" width={20} height={10} />
                        <p className="text-[#b9bcc7] text-sm mt-1">Information & Cybersecurity</p>
                      </div>
                      <div className="grid grid-flow-col">
                        <Image src={'/technofair/internet.png'} alt="internet" width={20} height={10} />
                        <p className="text-[#b9bcc7] text-sm mt-1 mr-36">Online</p>
                      </div>
                    </div>
                    <div className="flex gap-4 py-5 justify-end items-end">
                      <p className=" text-base font-bold text-white">Learn more</p>
                      <Image src={'/technofair/arrow-kanan-oranye.png'} alt="arrow kanan" width={23} height={12} />
                    </div>
                  </div>
                </div>
                <div className="w-72 h-96 bg-[#212427] border-[#E6A3563B] border-[2px] rounded-[39px]">
                  <div className="p-7">
                    <div className="w-28 h-7 bg-[#E6A356] rounded-xl">
                      <p className="text-[#241525] text-sm text-center pt-1">Competition</p>
                    </div>
                    <div className="py-6">
                      <p className="italic font-bold text-2xl">Infographic</p>
                      <p className="text-sm text-[#B9BCC7] mt-2">A dynamic language popular for web development, big data, science, and scripting.</p>
                    </div>
                    <div className="">
                      <div className="flex gap-5">
                        <div className="grid grid-flow-col gap-2">
                          <Image src={'/technofair/kalender.png'} alt="kalender" width={20} height={16} />
                          <p className="text-[#b9bcc7] text-sm mt-1">June 22-24, 2024</p>
                        </div>
                        <div className="grid grid-flow-col gap-2">
                          <Image src={'/technofair/jam.png'} alt="jam" width={20} height={10} />
                          <p className="text-[#b9bcc7] text-sm mt-1">10.30</p>
                        </div>
                      </div>
                      <div className="grid grid-flow-col gap-2 py-4">
                        <Image src={'/technofair/pena.png'} alt="pena" width={20} height={10} />
                        <p className="text-[#b9bcc7] text-sm mt-1">Information & Cybersecurity</p>
                      </div>
                      <div className="grid grid-flow-col">
                        <Image src={'/technofair/internet.png'} alt="internet" width={20} height={10} />
                        <p className="text-[#b9bcc7] text-sm mt-1 mr-36">Online</p>
                      </div>
                    </div>
                    <div className="flex gap-4 py-5 justify-end items-end">
                      <p className=" text-base font-bold text-white">Learn more</p>
                      <Image src={'/technofair/arrow-kanan-oranye.png'} alt="arrow kanan" width={23} height={12} />
                    </div>
                  </div>
                </div>
                <div className="w-72 h-96 bg-[#212427] border-[#E6A3563B] border-[2px] rounded-[39px]">
                  <div className="p-7">
                    <div className="w-28 h-7 bg-[#E6A356] rounded-xl">
                      <p className="text-[#241525] text-sm text-center pt-1">Competition</p>
                    </div>
                    <div className="py-6">
                      <p className="italic font-bold text-2xl">Capture The Flag</p>
                      <p className="text-sm text-[#B9BCC7] mt-2">A dynamic language popular for web development, big data, science, and scripting.</p>
                    </div>
                    <div className="">
                      <div className="flex gap-5">
                        <div className="grid grid-flow-col gap-2">
                          <Image src={'/technofair/kalender.png'} alt="kalender" width={20} height={16} />
                          <p className="text-[#b9bcc7] text-sm mt-1">June 22-24, 2024</p>
                        </div>
                        <div className="grid grid-flow-col gap-2">
                          <Image src={'/technofair/jam.png'} alt="jam" width={20} height={10} />
                          <p className="text-[#b9bcc7] text-sm mt-1">10.30</p>
                        </div>
                      </div>
                      <div className="grid grid-flow-col gap-2 py-4">
                        <Image src={'/technofair/pena.png'} alt="pena" width={20} height={10} />
                        <p className="text-[#b9bcc7] text-sm mt-1">Information & Cybersecurity</p>
                      </div>
                      <div className="grid grid-flow-col">
                        <Image src={'/technofair/internet.png'} alt="internet" width={20} height={10} />
                        <p className="text-[#b9bcc7] text-sm mt-1 mr-36">Online</p>
                      </div>
                    </div>
                    <div className="flex gap-4 py-5 justify-end items-end">
                      <p className=" text-base font-bold text-white">Learn more</p>
                      <Image src={'/technofair/arrow-kanan-oranye.png'} alt="arrow kanan" width={23} height={12} />
                    </div>
                  </div>
                </div>
                <div className="w-72 h-96 bg-[#212427] border-[#E6A3563B] border-[2px] rounded-[39px]">
                  <div className="p-7">
                    <div className="w-28 h-7 bg-[#E6A356] rounded-xl">
                      <p className="text-[#241525] text-sm text-center pt-1">Competition</p>
                    </div>
                    <div className="py-6">
                      <p className="italic font-bold text-2xl">UX Designer</p>
                      <p className="text-sm text-[#B9BCC7] mt-2">A dynamic language popular for web development, big data, science, and scripting.</p>
                    </div>
                    <div className="">
                      <div className="flex gap-5">
                        <div className="grid grid-flow-col gap-2">
                          <Image src={'/technofair/kalender.png'} alt="kalender" width={20} height={16} />
                          <p className="text-[#b9bcc7] text-sm mt-1">June 22-24, 2024</p>
                        </div>
                        <div className="grid grid-flow-col gap-2">
                          <Image src={'/technofair/jam.png'} alt="jam" width={20} height={10} />
                          <p className="text-[#b9bcc7] text-sm mt-1">10.30</p>
                        </div>
                      </div>
                      <div className="grid grid-flow-col gap-2 py-4">
                        <Image src={'/technofair/pena.png'} alt="pena" width={20} height={10} />
                        <p className="text-[#b9bcc7] text-sm mt-1">Information & Cybersecurity</p>
                      </div>
                      <div className="grid grid-flow-col">
                        <Image src={'/technofair/internet.png'} alt="internet" width={20} height={10} />
                        <p className="text-[#b9bcc7] text-sm mt-1 mr-36">Online</p>
                      </div>
                    </div>
                    <div className="flex gap-4 py-5 justify-end items-end">
                      <p className=" text-base font-bold text-white">Learn more</p>
                      <Image src={'/technofair/arrow-kanan-oranye.png'} alt="arrow kanan" width={23} height={12} />
                    </div>
                  </div>
                </div>
              </div>
              {/* Cara Acara Competitions End */}
            </div>
          </div>
        </div>
      </div>
      {/* Tampilan Dekstop End */}

      {/* Tampilan Mobile Start */}
      <div className="bg-gradient-to-t from-[#241525] to-black pt-28 md:hidden">
        <div className="">
          <div className="px-4">
            <Image src={'/technofair/content-mobile.png'} alt="content mobile" width={390} height={570} />
          </div>
          <div className="">
            <div className="text-center p-10">
              <p className={`text-5xl font-bold text-[#FFF4E7] ${bricolageGrotesque.className}`}>Our Upcoming Events</p>
            </div>
            <div className="">
              <div className="px-7">
                <p className="font-bold font-[Poppins] text-xl">Seminar & Workshops</p>
              </div>
              <div className="py-5 pl-20 grid grid-flow-col gap-4 overflow-x-auto overflow-y-hidden overflow-hidden pt-4 font-[Poppins]">
                <div className="w-60 h-72 bg-[#212427] border-[2px] border-[#E87C6C3B] rounded-[28px]">
                  <div className="p-5">
                    <div className="w-20 h-7 bg-[#AF5474] rounded-[11px]">
                      <p className="text-center text-[#241525] text-sm p-1">Seminar</p>
                    </div>
                    <div className="py-3">
                      <p className="text-lg italic font-bold">Data Analyst</p>
                      <p className="text-sm text-[#B9BCC7] mt-3">Visualizing Insights: A Beginner&apos;s Guide to Data Presentation.</p>
                    </div>
                    <div className="grid grid-flow-row gap-y-2">
                      <div className="grid grid-flow-col">
                        <Image src={'/technofair/kalender.png'} alt="kalender" width={16} height={17} />
                        <p className="text-sm text-[#B9BCC7] mr-20">01 Juni 2024</p>
                      </div>
                      <div className="grid grid-flow-col">
                        <Image src={'/technofair/jam.png'} alt="jam" width={16} height={16} />
                        <p className="text-sm text-[#B9BCC7] mr-12">09.00 - 13.00 WIB</p>
                      </div>
                    </div>
                    <Link href={'/technofair/details/seminar/data-analyst'} className="py-4 flex justify-end items-end gap-4">
                      <p className="text-base font-bold">Learn More</p>
                      <Image src={'/technofair/arrow-kanan.png'} alt="arrow" width={16} height={16} className="mb-1" />
                    </Link>
                  </div>
                </div>
                <div className="w-60 h-72 bg-[#212427] border-[2px] border-[#E87C6C3B] rounded-[28px]">
                  <div className="p-5">
                    <div className="w-20 h-7 bg-[#AF5474] rounded-[11px]">
                      <p className="text-center text-[#241525] text-sm p-1">Seminar</p>
                    </div>
                    <div className="py-3">
                      <p className="text-lg italic font-bold">Artificial Intelligence</p>
                      <p className="text-sm text-[#B9BCC7] mt-3">Exploring Innovations and Applications of Artificial Intelligence.</p>
                    </div>
                    <div className="grid grid-flow-row gap-y-2">
                      <div className="grid grid-flow-col">
                        <Image src={'/technofair/kalender.png'} alt="kalender" width={16} height={17} />
                        <p className="text-sm text-[#B9BCC7] mr-20">20 Juli 2024</p>
                      </div>
                      <div className="grid grid-flow-col">
                        <Image src={'/technofair/jam.png'} alt="jam" width={16} height={16} />
                        <p className="text-sm text-[#B9BCC7] mr-12">09.00 - 13.00 WIB</p>
                      </div>
                    </div>
                    <Link href={'/technofair/details/seminar/artificial-intelligence'} className="py-4 flex justify-end items-end gap-4">
                      <p className="text-base font-bold">Learn More</p>
                      <Image src={'/technofair/arrow-kanan.png'} alt="arrow" width={16} height={16} className="mb-1" />
                    </Link>
                  </div>
                </div>
              </div>
              <div className="py-5 pl-20 grid grid-flow-col gap-4 overflow-x-auto overflow-y-hidden overflow-hidden pt-4 font-[Poppins]">
                <div className="w-60 h-72 bg-[#212427] border-[2px] border-[#F9F8713B] rounded-[28px]">
                  <div className="p-5">
                    <div className="w-24 h-7 bg-[#F9F871] rounded-[11px]">
                      <p className="text-center text-[#241525] text-sm p-1">Workshop</p>
                    </div>
                    <div className="py-3">
                      <p className="text-lg italic font-bold">Product Marketing</p>
                      <p className="text-sm text-[#B9BCC7] mt-3">Building a Strong Foundation: Mastering Product Management Skills.</p>
                    </div>
                    <div className="grid grid-flow-row gap-y-2">
                      <div className="grid grid-flow-col">
                        <Image src={'/technofair/kalender.png'} alt="kalender" width={16} height={17} />
                        <p className="text-sm text-[#B9BCC7] mr-20">06 Juli 2024</p>
                      </div>
                      <div className="grid grid-flow-col">
                        <Image src={'/technofair/jam.png'} alt="jam" width={16} height={16} />
                        <p className="text-sm text-[#B9BCC7] mr-12">09.00 - 12.40 WIB</p>
                      </div>
                    </div>
                    <Link href={'/technofair/details/workshop/product-marketing'} className="py-4 flex justify-end items-end gap-4">
                      <p className="text-base font-bold">Learn More</p>
                      <Image src={'/technofair/arrow-kanan-kuning.png'} alt="arrow" width={16} height={16} className="mb-1" />
                    </Link>
                  </div>
                </div>
                <div className="w-60 h-72 bg-[#212427] border-[2px] border-[#F9F8713B] rounded-[28px]">
                  <div className="p-5">
                    <div className="w-24 h-7 bg-[#F9F871] rounded-[11px]">
                      <p className="text-center text-[#241525] text-sm p-1">Workshop</p>
                    </div>
                    <div className="py-3">
                      <p className="text-lg italic font-bold">UI/UX Design</p>
                      <p className="text-sm text-[#B9BCC7] mt-3">From Concept to Creation: Mastering UI/UX Design Practices.</p>
                    </div>
                    <div className="grid grid-flow-row gap-y-2">
                      <div className="grid grid-flow-col">
                        <Image src={'/technofair/kalender.png'} alt="kalender" width={16} height={17} />
                        <p className="text-sm text-[#B9BCC7] mr-20">29 Juli 2024</p>
                      </div>
                      <div className="grid grid-flow-col">
                        <Image src={'/technofair/jam.png'} alt="jam" width={16} height={16} />
                        <p className="text-sm text-[#B9BCC7] mr-12">09.00 - 12.40 WIB</p>
                      </div>
                    </div>
                    <Link href={'/technofair/details/workshop/uiux'} className="py-4 flex justify-end items-end gap-4">
                      <p className="text-base font-bold">Learn More</p>
                      <Image src={'/technofair/arrow-kanan-kuning.png'} alt="arrow" width={16} height={16} className="mb-1" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="py-4">
              <div className="px-7">
                <p className="font-bold font-[Poppins] text-xl">Competitions</p>
              </div>
              <div className="py-5 pl-20 grid grid-flow-col gap-4 overflow-x-auto overflow-y-hidden overflow-hidden pt-4 font-[Poppins]">
                <div className="w-60 h-72 bg-[#212427] border-[2px] border-[#E6A3563B] rounded-[28px]">
                  <div className="p-5">
                    <div className="w-28 h-7 bg-[#E6A356] rounded-[11px]">
                      <p className="text-center text-[#241525] text-sm p-1">Competition</p>
                    </div>
                    <div className="py-3">
                      <p className="text-xl italic font-bold">Smart Fikti</p>
                      <p className="text-sm text-[#B9BCC7] mt-1">A dynamic language popular for web development, big data, science, and scripting.</p>
                    </div>
                    <div className="grid grid-flow-row gap-y-2">
                      <div className="grid grid-flow-col">
                        <Image src={'/technofair/kalender.png'} alt="kalender" width={16} height={17} />
                        <p className="text-sm text-[#B9BCC7] mr-10">June 22-24, 2024</p>
                      </div>
                      <div className="grid grid-flow-col">
                        <Image src={'/technofair/jam.png'} alt="jam" width={16} height={16} />
                        <p className="text-sm text-[#B9BCC7] mr-24">10.30 WIB</p>
                      </div>
                    </div>
                    <div className="py-4 flex justify-end items-end gap-4">
                      <p className="text-base font-bold">Learn More</p>
                      <Image src={'/technofair/arrow-kanan-oranye.png'} alt="arrow" width={16} height={16} className="mb-1" />
                    </div>
                  </div>
                </div>
                <div className="w-60 h-72 bg-[#212427] border-[2px] border-[#E6A3563B] rounded-[28px]">
                  <div className="p-5">
                    <div className="w-28 h-7 bg-[#E6A356] rounded-[11px]">
                      <p className="text-center text-[#241525] text-sm p-1">Competition</p>
                    </div>
                    <div className="py-3">
                      <p className="text-xl italic font-bold">Infographic</p>
                      <p className="text-sm text-[#B9BCC7] mt-1">A dynamic language popular for web development, big data, science, and scripting.</p>
                    </div>
                    <div className="grid grid-flow-row gap-y-2">
                      <div className="grid grid-flow-col">
                        <Image src={'/technofair/kalender.png'} alt="kalender" width={16} height={17} />
                        <p className="text-sm text-[#B9BCC7] mr-10">June 22-24, 2024</p>
                      </div>
                      <div className="grid grid-flow-col">
                        <Image src={'/technofair/jam.png'} alt="jam" width={16} height={16} />
                        <p className="text-sm text-[#B9BCC7] mr-24">10.30 WIB</p>
                      </div>
                    </div>
                    <div className="py-4 flex justify-end items-end gap-4">
                      <p className="text-base font-bold">Learn More</p>
                      <Image src={'/technofair/arrow-kanan-oranye.png'} alt="arrow" width={16} height={16} className="mb-1" />
                    </div>
                  </div>
                </div>
                <div className="w-60 h-72 bg-[#212427] border-[2px] border-[#E6A3563B] rounded-[28px]">
                  <div className="p-5">
                    <div className="w-28 h-7 bg-[#E6A356] rounded-[11px]">
                      <p className="text-center text-[#241525] text-sm p-1">Competition</p>
                    </div>
                    <div className="py-3">
                      <p className="text-xl italic font-bold">Capture The Flag</p>
                      <p className="text-sm text-[#B9BCC7] mt-1">A dynamic language popular for web development, big data, science, and scripting.</p>
                    </div>
                    <div className="grid grid-flow-row gap-y-2">
                      <div className="grid grid-flow-col">
                        <Image src={'/technofair/kalender.png'} alt="kalender" width={16} height={17} />
                        <p className="text-sm text-[#B9BCC7] mr-10">June 22-24, 2024</p>
                      </div>
                      <div className="grid grid-flow-col">
                        <Image src={'/technofair/jam.png'} alt="jam" width={16} height={16} />
                        <p className="text-sm text-[#B9BCC7] mr-24">10.30 WIB</p>
                      </div>
                    </div>
                    <div className="py-4 flex justify-end items-end gap-4">
                      <p className="text-base font-bold">Learn More</p>
                      <Image src={'/technofair/arrow-kanan-oranye.png'} alt="arrow" width={16} height={16} className="mb-1" />
                    </div>
                  </div>
                </div>
                <div className="w-60 h-72 bg-[#212427] border-[2px] border-[#E6A3563B] rounded-[28px]">
                  <div className="p-5">
                    <div className="w-28 h-7 bg-[#E6A356] rounded-[11px]">
                      <p className="text-center text-[#241525] text-sm p-1">Competition</p>
                    </div>
                    <div className="py-3">
                      <p className="text-xl italic font-bold">UX Design</p>
                      <p className="text-sm text-[#B9BCC7] mt-1">A dynamic language popular for web development, big data, science, and scripting.</p>
                    </div>
                    <div className="grid grid-flow-row gap-y-2">
                      <div className="grid grid-flow-col">
                        <Image src={'/technofair/kalender.png'} alt="kalender" width={16} height={17} />
                        <p className="text-sm text-[#B9BCC7] mr-10">June 22-24, 2024</p>
                      </div>
                      <div className="grid grid-flow-col">
                        <Image src={'/technofair/jam.png'} alt="jam" width={16} height={16} />
                        <p className="text-sm text-[#B9BCC7] mr-24">10.30 WIB</p>
                      </div>
                    </div>
                    <div className="py-4 flex justify-end items-end gap-4">
                      <p className="text-base font-bold">Learn More</p>
                      <Image src={'/technofair/arrow-kanan-oranye.png'} alt="arrow" width={16} height={16} className="mb-1" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Tampilan Mobile End */}
    </div>
  );
}
