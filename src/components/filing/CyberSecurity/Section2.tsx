import React from "react";
import Image from "next/image";
import check from "@/../public/filing/mdi_check-bold.png";
import Date from "@/../public/filing/date.png";
import Card1 from "./Card1";
import Card2 from "./Card2";
import Card3 from "./Card3";
import Card4 from "./Card4";
import Link from "next/link";
import { circleAmolens } from "@/styles/font";

const Section2: React.FC = () => {
  return (
    <div className="bg-white p-10 flex gap-16 md:px-[50px] md:py-[50px]">
      <div className="hidden md:block border text-black md:w-[580px] h-fit border-[#D8D4CE] px-10 py-5 rounded-lg shadow-xl space-y-2">
        <h1 className="font-Poppins text-[16px] font-semibold">Details</h1>
        <div className="flex gap-1 items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="text-black w-5 h-5"
          >
            <path
              fill-rule="evenodd"
              d="M4.5 5.653c0-1.427 1.529-2.33 2.779-1.643l11.54 6.347c1.295.712 1.295 2.573 0 3.286L7.28 19.99c-1.25.687-2.779-.217-2.779-1.643V5.653Z"
              clip-rule="evenodd"
            />
          </svg>
          <Link href="#about">
            <h1 className="text-[16px]">About Bootcamp</h1>
          </Link>
        </div>
        <div className="flex gap-1 items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="text-black w-5 h-5"
          >
            <path
              fill-rule="evenodd"
              d="M4.5 5.653c0-1.427 1.529-2.33 2.779-1.643l11.54 6.347c1.295.712 1.295 2.573 0 3.286L7.28 19.99c-1.25.687-2.779-.217-2.779-1.643V5.653Z"
              clip-rule="evenodd"
            />
          </svg>
          <Link href="#benefit">
            <h1 className="text-[16px]">Benefit Bootcamp</h1>
          </Link>
        </div>
        <div className="flex gap-1 items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="text-black w-5 h-5"
          >
            <path
              fill-rule="evenodd"
              d="M4.5 5.653c0-1.427 1.529-2.33 2.779-1.643l11.54 6.347c1.295.712 1.295 2.573 0 3.286L7.28 19.99c-1.25.687-2.779-.217-2.779-1.643V5.653Z"
              clip-rule="evenodd"
            />
          </svg>
          <Link href="#jadwal">
            <h1 className="text-[16px]">Jadwal Bootcamp</h1>
          </Link>
        </div>
        <div className="flex gap-1 items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="text-black w-5 h-5"
          >
            <path
              fill-rule="evenodd"
              d="M4.5 5.653c0-1.427 1.529-2.33 2.779-1.643l11.54 6.347c1.295.712 1.295 2.573 0 3.286L7.28 19.99c-1.25.687-2.779-.217-2.779-1.643V5.653Z"
              clip-rule="evenodd"
            />
          </svg>
          <Link href="#detail">
            <h1 className="text-[16px]">Detail Materi Bootcamp</h1>
          </Link>
        </div>
      </div>
      <div>
        <div className="space-y-7">
          <div className="font-Poppins text-[#545350] space-y-7">
            <div className="flex gap-1 items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="text-black w-4 h-4 md:w-6 md:h-6"
              >
                <path
                  fill-rule="evenodd"
                  d="M4.5 5.653c0-1.427 1.529-2.33 2.779-1.643l11.54 6.347c1.295.712 1.295 2.573 0 3.286L7.28 19.99c-1.25.687-2.779-.217-2.779-1.643V5.653Z"
                  clip-rule="evenodd"
                />
              </svg>
              <h1 id="benefit" className="text-[16px] md:text-[20px] font-bold">
                About Bootcamp
              </h1>
            </div>
            <div className="pl-7 text-[14px] md:text-[16px] space-y-3">
              <h1 className="font-semibold">
                Kuasai Data dan Jadilah Web Developer dengan Bootcamp FILING!
              </h1>
              <h1 className="font-light md:font-normal">
                FILING hadir dengan bootcamp untuk membekali kamu dengan
                keterampilan dan pengetahuan yang dibutuhkan untuk menjadi Web
                Developer yang handal.
              </h1>
              <h1 className="font-light md:font-normal">
                Di era Society 5.0, data menjadi komponen penting dalam
                pengambilan keputusan dan pertumbuhan perusahaan. Data Analyst
                berperan sebagai jembatan antara informasi dan keputusan masa
                depan dengan mengolah data dan mencari
              </h1>
              <div>
                <h1 className="font-light md:font-normal">
                  Biaya Pendaftaran:
                </h1>
                <h1 className="font-light md:font-normal">
                  <b>Rp 30.000/peserta</b> atau <b>Rp 75.000/3 peserta</b>
                </h1>
              </div>
            </div>
          </div>
          <div className="font-Poppins text-[#545350] space-y-3">
            <div className="flex gap-1 items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="text-black w-4 h-4 md:w-6 md:h-6"
              >
                <path
                  fill-rule="evenodd"
                  d="M4.5 5.653c0-1.427 1.529-2.33 2.779-1.643l11.54 6.347c1.295.712 1.295 2.573 0 3.286L7.28 19.99c-1.25.687-2.779-.217-2.779-1.643V5.653Z"
                  clip-rule="evenodd"
                />
              </svg>
              <h1 id="jadwal" className="text-[16px] md:text-[20px] font-bold">
                Benefit Bootcamp
              </h1>
            </div>
            <div className="pl-7 text-[14px] md:text-[16px] space-y-3">
              <h1 className="font-semibold">Materi Kelas:</h1>
              <div className="flex items-center gap-2">
                <Image src={check} alt="" className="w-8 h-8" />
                <h1>
                  Memahami intro Web Development dan tools yang akan digunakan.
                </h1>
              </div>
              <div className="flex items-center gap-2">
                <Image src={check} alt="" className="w-8 h-8" />
                <h1>
                  Mengetahui dasar - dasar cara menggunakan HTML, CSS dan
                  JavaScript.
                </h1>
              </div>
              <div className="flex items-center gap-2">
                <Image src={check} alt="" className="w-8 h-8" />
                <h1>
                  Dapat mengoperasikan tools yang berhubungan dengan Web
                  Development.
                </h1>
              </div>
              <div className="flex items-center gap-2">
                <Image src={check} alt="" className="w-8 h-8" />
                <h1>
                  Memperoleh wawasan pengetahuan dan memiliki portofolio
                  pengerjaan project Web Developmet.
                </h1>
              </div>
            </div>
          </div>
          <div className="font-Poppins text-[#545350] space-y-3">
            <div className="flex gap-1 items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="text-black w-4 h-4 md:w-6 md:h-6"
              >
                <path
                  fill-rule="evenodd"
                  d="M4.5 5.653c0-1.427 1.529-2.33 2.779-1.643l11.54 6.347c1.295.712 1.295 2.573 0 3.286L7.28 19.99c-1.25.687-2.779-.217-2.779-1.643V5.653Z"
                  clip-rule="evenodd"
                />
              </svg>
              <h1 id="detail" className="text-[16px] md:text-[20px] font-bold">
                Jadwal & Detail Materi Bootcamp
              </h1>
            </div>
            <div className="flex gap-2 justify-between">
              <div className="md:px-7 space-y-4">
                <h1 className="font-Poppins font-semibold md:text-[16px]">
                  Pelaksanaan Kelas :
                </h1>
                <div className="flex gap-7 items-center">
                  <h1 className="text-[40px] text-[#C0BDB7]">1.</h1>
                  <div>
                    <table className="text-[14px] md:text-[16px]">
                      <tbody>
                        <tr>
                          <td className="font-semibold">Hari, Tanggal</td>
                          <td>: Minggu, 28 April 2024</td>
                        </tr>
                        <tr>
                          <td className="font-semibold">Waktu</td>
                          <td>: 13.00 - 16.30 WIB</td>
                        </tr>
                        <tr>
                          <td className="font-semibold">Tempat</td>
                          <td>
                            : <i>Zoom Cloud Meeting</i>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                <div className="flex gap-3 items-center">
                  <h1 className="text-[40px] md:text-[48px] text-[#C0BDB7]">
                    2.
                  </h1>
                  <div>
                    <table className="text-[14px] md:text-[16px]">
                      <tbody>
                        <tr>
                          <td className="font-semibold">Hari, Tanggal</td>
                          <td>: Minggu, 05 Mei 2024</td>
                        </tr>
                        <tr>
                          <td className="font-semibold">Waktu</td>
                          <td>: 13.00 - 16.00 WIB</td>
                        </tr>
                        <tr>
                          <td className="font-semibold">Tempat</td>
                          <td>
                            : <i>Zoom Cloud Meeting</i>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                <div className="flex gap-2 items-center">
                  <h1 className="text-[40px] md:text-[48px] text-[#C0BDB7]">
                    3.
                  </h1>
                  <div>
                    <table className="text-[14px] md:text-[16px]">
                      <tbody>
                        <tr>
                          <td className="font-semibold">Hari, Tanggal</td>
                          <td>: Minggu, 12 Mei 2024</td>
                        </tr>
                        <tr>
                          <td className="font-semibold">Waktu</td>
                          <td>: 13.00 - 16.00 WIB</td>
                        </tr>
                        <tr>
                          <td className="font-semibold">Tempat</td>
                          <td>
                            : <i>Zoom Cloud Meeting</i>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                <div className="flex gap-2 items-center">
                  <h1 className="text-[40px] md:text-[48px] text-[#C0BDB7]">
                    4.
                  </h1>
                  <div>
                    <table className="text-[14px] md:text-[16px]">
                      <tbody>
                        <tr>
                          <td className="font-semibold">Hari, Tanggal</td>
                          <td>: Minggu, 19 Mei 2024</td>
                        </tr>
                        <tr>
                          <td className="font-semibold">Waktu</td>
                          <td>: 13.00 - 16.00 WIB</td>
                        </tr>
                        <tr>
                          <td className="font-semibold">Tempat</td>
                          <td>
                            : <i>Zoom Cloud Meeting</i>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
              <div className="hidden md:block">
                <div className="flex flex-col gap-2">
                  <Image src={Date} alt="" className="w-[390px]" />
                  <div className="rounded-lg bg-[#11111B] text-center text-[#FEFDFC] p-3">
                    <h1 className={`${circleAmolens.className} text-[24px]`}>
                      SAVE THE DATE!
                    </h1>
                    <h1 className="font-Poppins text-[14px] opacity-50">
                      <a
                        href="https://www.evernote.com/shard/s684/sh/ec3d6f5e-04b5-44e0-1e0d-a74efe767e81/vcXIHk3gIsWUOEUWylOs8SaTJ56qS5dzXSODneIy2DY0-UEduyvIOERsNA"
                        target="_blank"
                      >
                        Click here to save the date
                      </a>
                    </h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* tampilan desktop, tampilan mobile ada di section3 */}
          <div className="hidden md:block bg-white min-h-[950px] space-y-7 pt-10">
            <Card1 title="Pertemuan Pertama" />
            <Card2 title="Pertemuan Kedua" />
            <Card3 title="Pertemuan Ketiga" />
            <Card4 title="Pertemuan Keempat" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Section2;
