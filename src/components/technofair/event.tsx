import Image from 'next/image';

export default function EventPage() {
  return (
    <div className="">
      {/* AWAL */}
      <div className="md:block hidden">
        <div className="">
          <div className="flex justify-center items-center p-14 mt-20 event">
            <div className="w-2/3">
              <h1 className="text-white text-6xl font-bold font-[Bricolage-Grotesque]">
                Our Upcoming <br /> Events
              </h1>
              
            </div>
            
            <div className="w-4/5">
              <Image src={'/technofair/content.png'} alt="content" width={736} height={192} />
            </div>
          </div>
          <div className="">
            <div className="px-14 py-5">
              <p className='text-[#241525] text-2xl font-bold'>Seminars & Workshops</p>
            </div>

            {/* KOTAK ATAS */}
            <div className="px-14 flex gap-2">
              <div className="w-72 h-96 bg-[#E87C6C] rounded-[39px] border-[2px] flex justify-center items-center">
                <div className="w-64 h-72 m-8">
                  <div className='w-20 h-7 rounded-[11px] bg-[#AF5474] text-black'><center>Seminar</center></div>
                  {/* big data */}
                  <div className=' w-60 h-72'>
                    <h1 className=' w-64 h-9 mt-5 font-bold text-xl'>Big Data</h1>
                    <p className=' w-64 h-14 text-sm'>A dynamic language popular for web development, big data, science, and scripting</p>
                    <p className=' w-60 h-5 mt-5 text-sm'>June 22-24, 2024 </p>
                    <p className=' w-60 h-5 text-sm mt-2'>Infomation & Cybersecurity</p>
                    <p className=' w-60 h-5 text-sm mt-2'>Online</p>
                    <p className=' w-60 h-5 text-sm mt-9'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Learn more</p>
                  </div>
                </div>
              </div>
              <div className="w-72 h-96 bg-[#E87C6C] rounded-[39px] border-[2px] flex justify-center items-center">
              <div className="w-64 h-72 m-8">
                  <div className='w-20 h-7 rounded-[11px] bg-[#AF5474] text-black'><center>Seminar</center></div>
                  {/* smart city */}
                  <div className=' w-60 h-72'>
                    <h1 className=' w-64 h-9 mt-5 font-bold text-xl'>Smart City</h1>
                    <p className=' w-64 h-14 text-sm'>A dynamic language popular for web development, big data, science, and scripting</p>
                    <p className=' w-60 h-5 mt-5 text-sm'>June 22-24, 2024 </p>
                    <p className=' w-60 h-5 text-sm mt-2'>Infomation & Cybersecurity</p>
                    <p className=' w-60 h-5 text-sm mt-2'>Online</p>
                    <p className=' w-60 h-5 text-sm mt-9'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Learn more</p>
                  </div>
                </div>
              </div>
              <div className="w-72 h-96 bg-black rounded-[39px] border-[2px] flex justify-center items-center"><div className="w-64 h-72 m-8">
                  <div className='w-20 h-7 rounded-[11px] bg-[#F9F871] text-black'><center>Workshop</center></div>
                  {/* digital marketing */}
                  <div className=' w-60 h-72'>
                    <h1 className=' w-64 h-9 mt-5 font-bold text-xl'>Digital Marketing</h1>
                    <p className=' w-64 h-14 text-sm'>A dynamic language popular for web development, big data, science, and scripting</p>
                    <p className=' w-60 h-5 mt-5 text-sm'>June 22-24, 2024 </p>
                    <p className=' w-60 h-5 text-sm mt-2'>Infomation & Cybersecurity</p>
                    <p className=' w-60 h-5 text-sm mt-2'>Online</p>
                    <p className=' w-60 h-5 text-sm mt-9'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Learn more</p>
                  </div>
                </div></div>
              <div className="w-72 h-96 bg-black rounded-[39px] border-[2px] flex justify-center items-center"><div className="w-64 h-72 m-8">
                  <div className='w-20 h-7 rounded-[11px] bg-[#F9F871] text-black'><center>Workshop</center></div>
                  {/* ui design */}
                  <div className=' w-60 h-72'>
                    <h1 className=' w-64 h-9 mt-5 font-bold text-xl'>UI Design</h1>
                    <p className=' w-64 h-14 text-sm'>A dynamic language popular for web development, big data, science, and scripting</p>
                    <p className=' w-60 h-5 mt-5 text-sm'>June 22-24, 2024 </p>
                    <p className=' w-60 h-5 text-sm mt-2'>Infomation & Cybersecurity</p>
                    <p className=' w-60 h-5 text-sm mt-2'>Online</p>
                    <p className=' w-60 h-5 text-sm mt-9'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Learn more</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="">
            <div className="px-14 py-5">
              <p className='text-[#241525] text-2xl font-bold'>Competitions</p>
            </div>

            {/* KOTAK BAWAH */}
            <div className="px-14 flex gap-2">
              <div className="w-72 h-96 bg-black rounded-[39px] border-[2px] flex justify-center items-center">
              <div className="w-64 h-72 m-8">
                  <div className='w-20 h-7 rounded-[11px] bg-[#E6A356] text-black text-small'><center>Competition</center></div>
                  {/* smart fikti */}
                  <div className=' w-60 h-72'>
                    <h1 className=' w-64 h-9 mt-5 font-bold text-xl'>Smart FIKTI</h1>
                    <p className=' w-64 h-14 text-sm'>A dynamic language popular for web development, big data, science, and scripting</p>
                    <p className=' w-60 h-5 mt-5 text-sm'>June 22-24, 2024 </p>
                    <p className=' w-60 h-5 text-sm mt-2'>Infomation & Cybersecurity</p>
                    <p className=' w-60 h-5 text-sm mt-2'>Online</p>
                    <p className=' w-60 h-5 text-sm mt-9'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Learn more</p>
                  </div>
                </div>
              </div>
              <div className="w-72 h-96 bg-black rounded-[39px] border-[2px] flex justify-center items-center">
              <div className="w-64 h-72 m-8">
                  <div className='w-20 h-7 rounded-[11px] bg-[#E6A356] text-black text-small'><center>Competition</center></div>
                  {/* infographic */}
                  <div className=' w-60 h-72'>
                    <h1 className=' w-64 h-9 mt-5 font-bold text-xl'>Infographic</h1>
                    <p className=' w-64 h-14 text-sm'>A dynamic language popular for web development, big data, science, and scripting</p>
                    <p className=' w-60 h-5 mt-5 text-sm'>June 22-24, 2024 </p>
                    <p className=' w-60 h-5 text-sm mt-2'>Infomation & Cybersecurity</p>
                    <p className=' w-60 h-5 text-sm mt-2'>Online</p>
                    <p className=' w-60 h-5 text-sm mt-9'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Learn more</p>
                  </div>
                </div>
              </div>
              <div className="w-72 h-96 bg-black rounded-[39px] border-[2px] flex justify-center items-center">
              <div className="w-64 h-72 m-8">
                  <div className='w-20 h-7 rounded-[11px] bg-[#E6A356] text-black text-small'><center>Competition</center></div>
                  {/* capture the flag */}
                  <div className=' w-60 h-72'>
                    <h1 className=' w-64 h-9 mt-5 font-bold text-xl'>Capture the Flag</h1>
                    <p className=' w-64 h-14 text-sm'>A dynamic language popular for web development, big data, science, and scripting</p>
                    <p className=' w-60 h-5 mt-5 text-sm'>June 22-24, 2024 </p>
                    <p className=' w-60 h-5 text-sm mt-2'>Infomation & Cybersecurity</p>
                    <p className=' w-60 h-5 text-sm mt-2'>Online</p>
                    <p className=' w-60 h-5 text-sm mt-9'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Learn more</p>
                  </div>
                </div>
              </div>
              <div className="w-72 h-96 bg-black rounded-[39px] border-[2px] flex justify-center items-center">
              <div className="w-64 h-72 m-8">
                  <div className='w-20 h-7 rounded-[11px] bg-[#E6A356] text-black text-small'><center>Competition</center></div>
                  {/* ux design */}
                  <div className=' w-60 h-72'>
                    <h1 className=' w-64 h-9 mt-5 font-bold text-xl'>UX Design</h1>
                    <p className=' w-64 h-14 text-sm'>A dynamic language popular for web development, big data, science, and scripting</p>
                    <p className=' w-60 h-5 mt-5 text-sm'>June 22-24, 2024 </p>
                    <p className=' w-60 h-5 text-sm mt-2'>Infomation & Cybersecurity</p>
                    <p className=' w-60 h-5 text-sm mt-2'>Online</p>
                    <p className=' w-60 h-5 text-sm mt-9'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Learn more</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Tampilan Dekstop End */}

      {/* Tampilan Mobile Start */}
      {/* Tampilan Mobile End */}
    </div>
  )
  
}