import Image from 'next/image';

export default function EventPage() {
  return (
    <div className="">
      {/* Tampilan Dekstop Start */}
      <div className="md:block hidden event">
        <div className="">
          {/* <Image src={'/technofair/noisy-gradient.png'} alt='bg gradient' width={1440} height={1931} className='absolute object-cover'/> */}
          <div className="flex justify-center items-center p-14 mt-20">
            <div className="w-2/3">
              <h1 className="text-white text-6xl font-bold font-[Bricolage-Grotesque]">
                Our Upcoming <br /> Events
              </h1>
            </div>
            <div className="w-4/5">
              <Image src={'/technofair/content.png'} alt="content" width={736} height={192} />
            </div>
          </div>

          <div className="py-20 px-14">
            <div className="font-[Poppins]">
              <p className="text-3xl font-bold text-white">Seminars & Workshops</p>
              {/* Card Acara Seminar & Workshops */}
              <div className="py-4 flex justify-center items-center gap-3">
                <div className="w-72 h-96 bg-[#833f57] border-[#E87C6C3B] border-[2px] rounded-[39px]">
                  <div className="p-7">
                    <div className="w-20 h-7 bg-[#af5474] rounded-xl">
                      <p className="text-[#241525] text-sm text-center pt-1">Seminar</p>
                    </div>
                    <div className="py-6">
                      <p className="italic font-bold text-2xl">Big Data</p>
                      <p className="text-sm text-[#B9BCC7] mt-2">A dynamic language popular for web development, big data, science, and scripting.</p>
                    </div>
                    <div className="">
                      <div className="flex gap-5">
                        <div className="flex gap-2">
                          <Image src={'/technofair/kalender.png'} alt="kalender" width={20} height={16} />
                          <p className="text-[#b9bcc7] text-sm mt-1">June 22-24, 2024</p>
                        </div>
                        <div className="flex gap-2">
                          <Image src={'/technofair/jam.png'} alt="jam" width={20} height={10} />
                          <p className="text-[#b9bcc7] text-sm mt-1">10.30</p>
                        </div>
                      </div>
                      <div className="flex gap-2 py-4">
                        <Image src={'/technofair/pena.png'} alt="pena" width={20} height={10} />
                        <p className="text-[#b9bcc7] text-sm mt-1">Information & Cybersecurity</p>
                      </div>
                      <div className="flex gap-2">
                        <Image src={'/technofair/internet.png'} alt="internet" width={20} height={10} />
                        <p className="text-[#b9bcc7] text-sm mt-1">Online</p>
                      </div>
                    </div>
                    <div className="flex gap-4 py-5 justify-end items-end">
                      <p className=" text-base font-bold text-white">Learn more</p>
                      <Image src={'/technofair/arrow-kanan.png'} alt="arrow kanan" width={23} height={12} />
                    </div>
                  </div>
                </div>
                <div className="w-72 h-96 bg-[#833f57] border-[#E87C6C3B] border-[2px] rounded-[39px]">
                  <div className="p-7">
                    <div className="w-20 h-7 bg-[#af5474] rounded-xl">
                      <p className="text-[#241525] text-sm text-center pt-1">Seminar</p>
                    </div>
                    <div className="py-6">
                      <p className="italic font-bold text-2xl">Smart City</p>
                      <p className="text-sm text-[#B9BCC7] mt-2">A dynamic language popular for web development, big data, science, and scripting.</p>
                    </div>
                    <div className="">
                      <div className="flex gap-5">
                        <div className="flex gap-2">
                          <Image src={'/technofair/kalender.png'} alt="kalender" width={20} height={16} />
                          <p className="text-[#b9bcc7] text-sm mt-1">June 22-24, 2024</p>
                        </div>
                        <div className="flex gap-2">
                          <Image src={'/technofair/jam.png'} alt="jam" width={20} height={10} />
                          <p className="text-[#b9bcc7] text-sm mt-1">10.30</p>
                        </div>
                      </div>
                      <div className="flex gap-2 py-4">
                        <Image src={'/technofair/pena.png'} alt="pena" width={20} height={10} />
                        <p className="text-[#b9bcc7] text-sm mt-1">Information & Cybersecurity</p>
                      </div>
                      <div className="flex gap-2">
                        <Image src={'/technofair/internet.png'} alt="internet" width={20} height={10} />
                        <p className="text-[#b9bcc7] text-sm mt-1">Online</p>
                      </div>
                    </div>
                    <div className="flex gap-4 py-5 justify-end items-end">
                      <p className=" text-base font-bold text-white">Learn more</p>
                      <Image src={'/technofair/arrow-kanan.png'} alt="arrow kanan" width={23} height={12} />
                    </div>
                  </div>
                </div>
                <div className="w-72 h-96 bg-[#833f57] border-[#F9F8713B] border-[2px] rounded-[39px]">
                  <div className="p-7">
                    <div className="w-24 h-7 bg-[#F9F871] rounded-xl">
                      <p className="text-[#241525] text-sm text-center pt-1">Workshop</p>
                    </div>
                    <div className="py-6">
                      <p className="italic font-bold text-2xl">Digital Marketing</p>
                      <p className="text-sm text-[#B9BCC7] mt-2">A dynamic language popular for web development, big data, science, and scripting.</p>
                    </div>
                    <div className="">
                      <div className="flex gap-5">
                        <div className="flex gap-2">
                          <Image src={'/technofair/kalender.png'} alt="kalender" width={20} height={16} />
                          <p className="text-[#b9bcc7] text-sm mt-1">June 22-24, 2024</p>
                        </div>
                        <div className="flex gap-2">
                          <Image src={'/technofair/jam.png'} alt="jam" width={20} height={10} />
                          <p className="text-[#b9bcc7] text-sm mt-1">10.30</p>
                        </div>
                      </div>
                      <div className="flex gap-2 py-4">
                        <Image src={'/technofair/pena.png'} alt="pena" width={20} height={10} />
                        <p className="text-[#b9bcc7] text-sm mt-1">Information & Cybersecurity</p>
                      </div>
                      <div className="flex gap-2">
                        <Image src={'/technofair/internet.png'} alt="internet" width={20} height={10} />
                        <p className="text-[#b9bcc7] text-sm mt-1">Online</p>
                      </div>
                    </div>
                    <div className="flex gap-4 py-5 justify-end items-end">
                      <p className=" text-base font-bold text-white">Learn more</p>
                      <Image src={'/technofair/arrow-kanan-kuning.png'} alt="arrow kanan" width={23} height={12} />
                    </div>
                  </div>
                </div>
                <div className="w-72 h-96 bg-[#833f57] border-[#F9F8713B] border-[2px] rounded-[39px]">
                  <div className="p-7">
                    <div className="w-24 h-7 bg-[#F9F871] rounded-xl">
                      <p className="text-[#241525] text-sm text-center pt-1">Workshop</p>
                    </div>
                    <div className="py-6">
                      <p className="italic font-bold text-2xl">UI Design</p>
                      <p className="text-sm text-[#B9BCC7] mt-2">A dynamic language popular for web development, big data, science, and scripting.</p>
                    </div>
                    <div className="">
                      <div className="flex gap-5">
                        <div className="flex gap-2">
                          <Image src={'/technofair/kalender.png'} alt="kalender" width={20} height={16} />
                          <p className="text-[#b9bcc7] text-sm mt-1">June 22-24, 2024</p>
                        </div>
                        <div className="flex gap-2">
                          <Image src={'/technofair/jam.png'} alt="jam" width={20} height={10} />
                          <p className="text-[#b9bcc7] text-sm mt-1">10.30</p>
                        </div>
                      </div>
                      <div className="flex gap-2 py-4">
                        <Image src={'/technofair/pena.png'} alt="pena" width={20} height={10} />
                        <p className="text-[#b9bcc7] text-sm mt-1">Information & Cybersecurity</p>
                      </div>
                      <div className="flex gap-2">
                        <Image src={'/technofair/internet.png'} alt="internet" width={20} height={10} />
                        <p className="text-[#b9bcc7] text-sm mt-1">Online</p>
                      </div>
                    </div>
                    <div className="flex gap-4 py-5 justify-end items-end">
                      <p className=" text-base font-bold text-white">Learn more</p>
                      <Image src={'/technofair/arrow-kanan-kuning.png'} alt="arrow kanan" width={23} height={12} />
                    </div>
                  </div>
                </div>
              </div>
              {/* Cara Acara Seminar & Workshops End */}
            </div>
          </div>
          <div className="px-14">
            <div className="font-[Poppins]">
              <p className="text-3xl font-bold text-white">Competitions</p>
              {/* Card Acara Competitions */}
              <div className="py-4 flex justify-center items-center gap-3">
                <div className="w-72 h-96 bg-[#833f57] border-[#E6A3563B] border-[2px] rounded-[39px]">
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
                        <div className="flex gap-2">
                          <Image src={'/technofair/kalender.png'} alt="kalender" width={20} height={16} />
                          <p className="text-[#b9bcc7] text-sm mt-1">June 22-24, 2024</p>
                        </div>
                        <div className="flex gap-2">
                          <Image src={'/technofair/jam.png'} alt="jam" width={20} height={10} />
                          <p className="text-[#b9bcc7] text-sm mt-1">10.30</p>
                        </div>
                      </div>
                      <div className="flex gap-2 py-4">
                        <Image src={'/technofair/pena.png'} alt="pena" width={20} height={10} />
                        <p className="text-[#b9bcc7] text-sm mt-1">Information & Cybersecurity</p>
                      </div>
                      <div className="flex gap-2">
                        <Image src={'/technofair/internet.png'} alt="internet" width={20} height={10} />
                        <p className="text-[#b9bcc7] text-sm mt-1">Online</p>
                      </div>
                    </div>
                    <div className="flex gap-4 py-5 justify-end items-end">
                      <p className=" text-base font-bold text-white">Learn more</p>
                      <Image src={'/technofair/arrow-kanan-oranye.png'} alt="arrow kanan" width={23} height={12} />
                    </div>
                  </div>
                </div>
                <div className="w-72 h-96 bg-[#833f57] border-[#E6A3563B] border-[2px] rounded-[39px]">
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
                        <div className="flex gap-2">
                          <Image src={'/technofair/kalender.png'} alt="kalender" width={20} height={16} />
                          <p className="text-[#b9bcc7] text-sm mt-1">June 22-24, 2024</p>
                        </div>
                        <div className="flex gap-2">
                          <Image src={'/technofair/jam.png'} alt="jam" width={20} height={10} />
                          <p className="text-[#b9bcc7] text-sm mt-1">10.30</p>
                        </div>
                      </div>
                      <div className="flex gap-2 py-4">
                        <Image src={'/technofair/pena.png'} alt="pena" width={20} height={10} />
                        <p className="text-[#b9bcc7] text-sm mt-1">Information & Cybersecurity</p>
                      </div>
                      <div className="flex gap-2">
                        <Image src={'/technofair/internet.png'} alt="internet" width={20} height={10} />
                        <p className="text-[#b9bcc7] text-sm mt-1">Online</p>
                      </div>
                    </div>
                    <div className="flex gap-4 py-5 justify-end items-end">
                      <p className=" text-base font-bold text-white">Learn more</p>
                      <Image src={'/technofair/arrow-kanan-oranye.png'} alt="arrow kanan" width={23} height={12} />
                    </div>
                  </div>
                </div>
                <div className="w-72 h-96 bg-[#833f57] border-[#E6A3563B] border-[2px] rounded-[39px]">
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
                        <div className="flex gap-2">
                          <Image src={'/technofair/kalender.png'} alt="kalender" width={20} height={16} />
                          <p className="text-[#b9bcc7] text-sm mt-1">June 22-24, 2024</p>
                        </div>
                        <div className="flex gap-2">
                          <Image src={'/technofair/jam.png'} alt="jam" width={20} height={10} />
                          <p className="text-[#b9bcc7] text-sm mt-1">10.30</p>
                        </div>
                      </div>
                      <div className="flex gap-2 py-4">
                        <Image src={'/technofair/pena.png'} alt="pena" width={20} height={10} />
                        <p className="text-[#b9bcc7] text-sm mt-1">Information & Cybersecurity</p>
                      </div>
                      <div className="flex gap-2">
                        <Image src={'/technofair/internet.png'} alt="internet" width={20} height={10} />
                        <p className="text-[#b9bcc7] text-sm mt-1">Online</p>
                      </div>
                    </div>
                    <div className="flex gap-4 py-5 justify-end items-end">
                      <p className=" text-base font-bold text-white">Learn more</p>
                      <Image src={'/technofair/arrow-kanan-oranye.png'} alt="arrow kanan" width={23} height={12} />
                    </div>
                  </div>
                </div>
                <div className="w-72 h-96 bg-[#833f57] border-[#E6A3563B] border-[2px] rounded-[39px]">
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
                        <div className="flex gap-2">
                          <Image src={'/technofair/kalender.png'} alt="kalender" width={20} height={16} />
                          <p className="text-[#b9bcc7] text-sm mt-1">June 22-24, 2024</p>
                        </div>
                        <div className="flex gap-2">
                          <Image src={'/technofair/jam.png'} alt="jam" width={20} height={10} />
                          <p className="text-[#b9bcc7] text-sm mt-1">10.30</p>
                        </div>
                      </div>
                      <div className="flex gap-2 py-4">
                        <Image src={'/technofair/pena.png'} alt="pena" width={20} height={10} />
                        <p className="text-[#b9bcc7] text-sm mt-1">Information & Cybersecurity</p>
                      </div>
                      <div className="flex gap-2">
                        <Image src={'/technofair/internet.png'} alt="internet" width={20} height={10} />
                        <p className="text-[#b9bcc7] text-sm mt-1">Online</p>
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
      
      {/* Tampilan Mobile End */}
    </div>
  );
}
