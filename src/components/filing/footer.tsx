import React from 'react'
import Image from "next/image";
import Link from "next/link";
import { FaInstagram, FaTiktok, FaYoutube, FaLinkedin,FaWhatsapp, FaWhatsappSquare, FaMailBulk } from "react-icons/fa";
import { FaPhone, FaLocationDot } from "react-icons/fa6";
import { CiMail } from "react-icons/ci";

const footer: React.FC = () => {
  return (
    <div className='text-black'>
        <footer className="relative overflow-hidden bg-[linear-gradient(89.94deg,#3F3381_-6.02%,#CBA2EA_57.77%,#91D2F4_121.56%)] rounded-t-md bottom-0">
            <Image
              src="/filing/Ellipse-footer.png"
              alt=""
              className='img-fluid absolute bottom-0 left-0 max-md:hidden md:w-28 lg:w-40 translate-x-0 translate-y-1 z-30'
              width={50}
              height={50}
            />
            <Image
              src="/filing/Ellipse-footer2.png"
              alt=""
              className='img-fluid absolute top-0 right-0 md:w-28 lg:w-36 translate-x-0 -translate-y-[55%] lg:-translate-y-2/3 z-30'
              width={50}
              height={50}
            />
          <div className='absolute top-0 right-0 w-24 h-24 -translate-x-1/2 -translate-y-1/2'></div>  
          <div className="flex flex-wrap lg:flex lg:flex-row items-center justify-evenly relative gap-10 pt-10 mb-5 px-5 md:px-20">
              <div className="flex flex-col gap-8 lg:w-1/5 w-full font-medium">
                  <h1 className="text-xl text-white">Sosial Media</h1>
                  <div className="space-y-7">
                    <Link
                      href="https://www.instagram.com/academicc_insight/"
                      target="_blank"
                      className="flex items-center gap-2 group text-white hover:text-purpleText"
                    >
                      <FaInstagram
                        size={25}
                        className="cursor-pointer group-hover:scale-110 transition-all duration-300"
                      />
                      @academicc_insight
                    </Link>

                    <Link
                      href="https://wa.me/628174932917"
                      target="_blank"
                      className="flex items-center gap-2 group text-white hover:text-purpleText"
                    >
                      <FaWhatsapp
                        size={25}
                        className="cursor-pointer group-hover:scale-110 transition-all duration-300"
                      />
                      +62 817-4932-917
                    </Link>

                    <Link
                      href="https://wa.me/6285727635590"
                      target="_blank"
                      className="flex items-center gap-2 group text-white hover:text-purpleText"
                    >
                      <FaWhatsapp
                        size={25}
                        className="cursor-pointer group-hover:scale-110 transition-all duration-300"
                      />
                      +62 857-2763-5590
                    </Link>
                    <Link
                      href="mailto:bemfikti.ug@gmail.com"
                      target="_blank"
                      className="flex items-center gap-2 group text-white hover:text-purpleText"
                    >
                      <CiMail
                        size={25}
                        className="cursor-pointer group-hover:scale-110 transition-all duration-300"
                      />
                      bemfikti.ug@gmail.com
                    </Link>
                  </div>
              </div>

              <div className="flex flex-col lg:justify-center lg:items-center lg:w-2/5 w-full self-end gap-4 max-lg:order-1 max-md:self-center">
                <div className="flex justify-center items-center gap-4 pb-4">
                  {/* pake round */}
                  {/* <div className="w-24 h-24 max-md:w-24 max-md:h-24 bg-white rounded-full flex justify-center items-center cursor-pointer hover:scale-110 transition-all duration-300">
                    <Image
                      src="/logo-universitas-gunadarma.png"
                      alt="Logo Universitas Gunadarma"
                      width={300}
                      height={300}
                      className="bg-cover h-16 w-16
                      "
                    />
                  </div>
                  <div className="w-24 h-24 max-md:w-24 max-md:h-24 bg-white rounded-full flex justify-center items-center cursor-pointer hover:scale-110 transition-all duration-300">
                    <Image
                      src="/logo-fikti.png"
                      alt="Logo FIKTI"
                      width={300}
                      height={300}
                      className="bg-cover h-fit w-14
                      "
                    />
                  </div>
                  <Image
                    src="/LOGO ADIRAKA ROUND.png"
                    alt="Logo Kabinet Adiraka"
                    width={300}
                    height={300}
                    className="bg-cover h-24 w-24 cursor-pointer hover:scale-110 transition-all duration-300"
                  /> */}

                  {/* tidak pake round */}
                  <Image
                      src="/logo-universitas-gunadarma.png"
                      alt="Logo Universitas Gunadarma"
                      width={300}
                      height={300}
                      className="bg-cover h-16 w-16 cursor-pointer hover:scale-110 transition-all duration-300"
                    />
                  <Image
                      src="/logo-fikti.png"
                      alt="Logo FIKTI"
                      width={300}
                      height={300}
                      className="bg-cover h-24 w-20 cursor-pointer hover:scale-110 transition-all duration-300"
                    />
                  <Image
                    src="/LOGO ADIRAKA TRANSPARAN.png"
                    alt="Logo Adiraka"
                    width={300}
                    height={300}
                    className="bg-cover h-[3.5rem] w-[4.5rem] cursor-pointer hover:scale-110 transition-all duration-300"
                  />
                </div>

                <h1 className="text-xl text-center text-white font-serif">
                  BEM FIKTI UG 2024/2025<br />FIKTI LEARNING
                </h1>
              </div>

              <div className="flex flex-col gap-4 lg:w-1/5 w-full font-medium">
                <div className='flex gap-2 text-white'>
                  <FaLocationDot size={25} className="flex-shrink-0" />
                  <h1 className="text-xl">Lokasi</h1>
                </div>
                <Link
                  href="https://maps.app.goo.gl/etmNsRtGszuWaD1cA" // Ganti dengan link lokasi spesifik
                  target="_blank"
                  rel="noopener noreferrer"
                  className=" text-white hover:text-purpleText md:hover:text-violet-600"
                >
                  <p className="ml-2 font-medium">
                      Sekretariat BEM FIKTI: <br />Pusat Kegiatan Mahasiswa (PUSGIWA) Gedung 4 Lantai 3 Kampus E Universitas Gunadarma Jl. Komjen Pol. M. Jasin Kelapa Dua Depok
                  </p>
                </Link>
              </div>
          </div>
          <hr className='w-5/6 mx-auto'></hr>
          <div className='text-white text-center py-5 text-[9px] md:text-lg font-medium mx-3 lg:mx-0'>
              Copyright © 2025 BEM FIKTI UG & Made with 💜 by BIRO PTI
          </div>
        </footer>
    </div>
  )
}

export default footer;