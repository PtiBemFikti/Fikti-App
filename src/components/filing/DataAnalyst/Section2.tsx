import React from "react";
import Image from "next/image";
import check from "@/../public/filing/mdi_check-bold.png";

const Section2: React.FC = () => {
  return (
    <>
      <div className="bg-white p-10 space-y-7">
        <div className="font-Poppins text-[#545350] space-y-3">
          <div className="flex gap-1 items-center">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="text-black w-4 h-4">
              <path fill-rule="evenodd" d="M4.5 5.653c0-1.427 1.529-2.33 2.779-1.643l11.54 6.347c1.295.712 1.295 2.573 0 3.286L7.28 19.99c-1.25.687-2.779-.217-2.779-1.643V5.653Z" clip-rule="evenodd" />
            </svg>
            <h1 className="text-[16px]">About this Bootcamp</h1>
          </div>
          <div className="pl-7 text-[14px] space-y-3">
            <h1 className="font-semibold">Kuasai Data dan Jadilah Data Analyst dengan Bootcamp FILING!</h1>
            <h1 className="font-light">FILING hadir dengan bootcamp untuk membekali kamu dengan keterampilan dan pengetahuan yang dibutuhkan untuk menjadi Data Analyst yang handal.</h1>
            <h1 className="font-light">
              Di era Society 5.0, data menjadi komponen penting dalam pengambilan keputusan dan pertumbuhan perusahaan. Data Analyst berperan sebagai jembatan antara informasi dan keputusan masa depan dengan mengolah data dan mencari solusi
              dari berbagai permasalahan.
            </h1>
          </div>
        </div>
        <div className="font-Poppins text-[#545350] space-y-3">
          <div className="flex gap-1 items-center">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="text-black w-4 h-4">
              <path fill-rule="evenodd" d="M4.5 5.653c0-1.427 1.529-2.33 2.779-1.643l11.54 6.347c1.295.712 1.295 2.573 0 3.286L7.28 19.99c-1.25.687-2.779-.217-2.779-1.643V5.653Z" clip-rule="evenodd" />
            </svg>
            <h1 className="text-[16px]">Benefit Bootcamp</h1>
          </div>
          <div className="pl-7 text-[14px] space-y-3">
            <h1 className="font-semibold">Materi Kelas:</h1>
            <div className="flex items-center gap-2">
              <Image src={check} alt="" className="w-8 h-8" />
              <h1>4 Live Class bersama mentor Experts dari Top Companies.</h1>
            </div>
            <div className="flex items-center gap-2">
              <Image src={check} alt="" className="w-8 h-8" />
              <h1>Memahami Konsep dasar Data Analyst dan Tools yang digunakan</h1>
            </div>
            <div className="flex items-center gap-2">
              <Image src={check} alt="" className="w-8 h-8" />
              <h1>Memahami konsep teknik Data Wrangling, Exploratory Data Analysis, dan Data Visualization.</h1>
            </div>
            <div className="flex items-center gap-2">
              <Image src={check} alt="" className="w-8 h-8" />
              <h1>Mampu mengoperasikan tools Data Analyst.</h1>
            </div>
            <div className="flex items-center gap-2">
              <Image src={check} alt="" className="w-8 h-8" />
              <h1>Memperoleh wawan dan portofolio project Data Analyst.</h1>
            </div>
          </div>
        </div>
        <div className="font-Poppins text-[#545350] space-y-3">
          <div className="flex gap- items-center">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="text-black w-4 h-4">
              <path fill-rule="evenodd" d="M4.5 5.653c0-1.427 1.529-2.33 2.779-1.643l11.54 6.347c1.295.712 1.295 2.573 0 3.286L7.28 19.99c-1.25.687-2.779-.217-2.779-1.643V5.653Z" clip-rule="evenodd" />
            </svg>
            <h1 className="text-[16px]">Jadwal & Silabus</h1>
          </div>
          <div className="flex gap-5 items-center">
            <h1 className="text-[40px] text-[#C0BDB7]">1.</h1>
            <div>
              <table className="text-[14px]">
                <tbody>
                  <tr>
                    <td className="font-semibold">Hari, Tanggal</td>
                    <td>: Sabtu, 27 April 2024</td>
                  </tr>
                  <tr>
                    <td className="font-semibold">Waktu</td>
                    <td>: 08.30 - 12.00 WIB</td>
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
            <h1 className="text-[40px] text-[#C0BDB7]">2.</h1>
            <div>
              <table className="text-[14px]">
                <tbody>
                  <tr>
                    <td className="font-semibold">Hari, Tanggal</td>
                    <td>: Sabtu, 04 Mei 2024</td>
                  </tr>
                  <tr>
                    <td className="font-semibold">Waktu</td>
                    <td>: 08.30 - 12.00 WIB</td>
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
            <h1 className="text-[40px] text-[#C0BDB7]">3.</h1>
            <div>
              <table className="text-[14px]">
                <tbody>
                  <tr>
                    <td className="font-semibold">Hari, Tanggal</td>
                    <td>: Sabtu, 11 Mei 2024</td>
                  </tr>
                  <tr>
                    <td className="font-semibold">Waktu</td>
                    <td>: 08.30 - 12.00 WIB</td>
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
            <h1 className="text-[40px] text-[#C0BDB7]">4.</h1>
            <div>
              <table className="text-[14px]">
                <tbody>
                  <tr>
                    <td className="font-semibold">Hari, Tanggal</td>
                    <td>: Sabtu, 18 Mei 2024</td>
                  </tr>
                  <tr>
                    <td className="font-semibold">Waktu</td>
                    <td>: 08.30 - 12.00 WIB</td>
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
      </div>
      <div className="bg-[#11111B] text-center text-[#FEFDFC] p-3">
        <h1 className="font-CircleAmolens text-[24px]">SAVE THE DATE!</h1>
        <h1 className="font-Poppins text-[14px] opacity-50">Click here to save the date</h1>
      </div>
    </>
  );
};
export default Section2;
