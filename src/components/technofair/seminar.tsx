import React from "react";

export default function SeminarPage() {
  return (
    <div className="px-40 py-20 bg-gradient-to-b from-[#FEFEEA] to-[#F7F9FA]">
      <div className="p-5 flex-row justify-center items-center">
        <div className="mb-2 flex gap-5">
          <div className="w-7 h-7">
            <img src="/technofair/tandapanah.png" alt="gambar tandapanah" width={50} height={50}/>
          </div>
          <div className="text-black mt-0.5">Back</div>
        </div>
        <div className="flex justify-center w-11/12">
          <div className="w-3/6">
            <img src="/technofair/full-2.png" alt="gambar orang" width={800} height={600} />
          </div>
          <div className="w-4/6">
            <div className="p-2 flex gap-2">
              <div className="text-black font-bold text-3xl px-6">UI/UX Design</div>
              <div className="mt-3 text-[#B9BCC7]">Workshop</div>
            </div>
            <div className="px-8">
              <p className="text-black">From Concept to Creation: Mastering UI/UX Design Practices</p>
            </div>
            <div className="text-black font-bold px-8 p-4">
              <p>Sabtu, 01 Juni 2024</p>
            </div>
            <div className="text-black text-sm px-8">
              <p>Workshop bermaksud memperkenalkan UI/UX Design yang</p>
              <p>merupakan bagian dari dunia teknologi yang sedang banyak diminati</p>
              <p>saat ini dan mengimplementasikan skill yang dipersiapkan untuk</p>
              <p>menjadi UI/UX Designer</p>
            </div>
            <div className="w-96 h-12 px-8 flex mt-14 gap-2">
              <div className="w-44 h-10 border gap-2 text-sm rounded-[16px] justify-center items-center flex"> 
                <p className="text-[#6C6A67] font-bold">Hubungi Kami</p>
              </div>
              <div className="w-44 h-10 border rounded-[16px] gap-2 text-sm justify-center items-center flex bg-[#21B573]">
                <p className="text-white font-bold">Daftar Sekarang</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center py-20">
        <div className="w-2/3  flex">
          <div className="w-72 -mt-80 h-36 p-3 bg-[#F7F9FA] border-1 shadow-lg rounded-lg border-[#B9BCC7]">
            <div className="px-5 mt-1 text-black text-sm font-bold">
              <p>Details</p>
            </div>
            <div className="text-black pl-10">
              <div className="flex flex-col gap-2 ">
                <div className="flex items-center gap-2 ">
                  <img className="" src="/technofair/tandakanan.png" alt="gambar tandakanan" width={15} height={15}/>
                  <p className="text-sm px-2">About Workshop</p>
                </div>
                <div className="flex items-center gap-2 py-2 ">
                  <img src="/technofair/tandakanan.png" alt="gambar tandakanan" width={15} height={15}/>
                  <p className="text-sm px-2">Benefit Workshop</p>
                </div>
                <div className="flex items-center gap-2 ">
                  <img src="/technofair/tandakanan.png" alt="gambar tandakanan" width={15} height={15}/>
                  <p className="text-sm px-2">Jadwal & Materi</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-5/6  mr-56">
          <div className="text-black">
            <div className="flex items-center gap-6 ">
              <img className="" src="/technofair/tandakanan.png" alt="gambar tandakanan" width={15} height={15}/>
              <p className="font-bold text-xl text-[#31304D]">About Workshop</p>
            </div>
            <div className="text-sm p-4">
              <p>Kegiatan workshop merupakan kegiatan yang berorientasi praktik disertai dengan teori untuk menambah kemampuan para peserta secara teknis yang sesuai dengan perkembangan yang ada dalam dunia Teknologi Informasi. Dalam TechnoFair 11.0, salah satu workshop yang dilaksanakan berjudul "From Concept to Creation: Mastering UI/UX" Design Practices".
              </p>
              <br />
              <p>Workshop ini bermaksud memperkenalkan UI/UX Design yang merupakan bagian dari dunia teknologi yang sedang banyak diminati saat ini dan mengimplementasikan Skill yang dipersiapkan untuk menjadi UI/UX Designer</p>
              <br />
            </div>
          </div>
          <div className="">
            <div className="flex items-center gap-7 ">
              <img className="" src="/technofair/tandakanan.png" alt="gambar tandakanan" width={15} height={15}/>
              <p className="font-bold text-xl text-[#31304D]">Benefit Workshop</p>
            </div>
            <div className="pl-5">
              <div className="mt-4">
                <div className="flex gap-2">
                  <img className="" src="/technofair/centanghijau.png" alt="gambar centanghijau" width={20} height={15}/>
                  <p className="text-tiny text-black">Mengetahui pengenalan mengenai dasar UI/UX Design.</p>
                </div>
                <div className="flex py-2 gap-2">
                  <img className="" src="/technofair/centanghijau.png" alt="gambar centanghijau" width={20} height={15}/>
                  <p className="text-tiny text-black">Mengetahui gambaran bagaimana cara kerja dan implementasi dari UI/UX Design.</p>
                </div>
                <div className="flex gap-2">
                  <img className="" src="/technofair/centanghijau.png" alt="gambar centanghijau" width={20} height={15}/>
                  <p className=" text-tiny text-black">Mengetahui bagaimana prospek karir UI/UX Designer kepada peserta workshop.</p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="flex items-center gap-7 mt-7 ">
              <img className="" src="/technofair/tandakanan.png" alt="gambar tandakanan" width={15} height={15}/>
              <p className="font-bold text-[#31304D]">Jadwal & Detail Materi Workshop</p>
            </div>
            <div className="mt-4 pl-4 font-bold text-[#212427]">
              <p>Pelaksanaan Kelas :</p>
            </div>
            <div className="mt-4 pl-6 text-black">
              <div className="flex">
                <p className="font-bold">Hari, Tanggal &nbsp;</p>
                <p>:&nbsp;Sabtu, 29 Juli 2024</p>
              </div>
              <div className="flex">
                <p className="font-bold">Waktu &nbsp;</p>
                <p>:&nbsp;09.00 - 12.40 WIB</p>
                <div className=" ml-32 w-72 h-16  bg-black rounded-lg">
                  <div>
                    <p className="text-white justify-center items-center flex mt-3 font-bold text-xl">SAVE THE DATE!</p>
                    <div className="text-[#918e8b] text-tiny items-center justify-center flex">
                      <p>click here to save the date</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex">
                <p className="font-bold">Tempat &nbsp;</p>
                <p>:&nbsp;Labotarium Kampus F4,</p>
              </div>
              <p className="text-black font-bold">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Universitas Gunadarma</p>
            </div>
            <div className="mt-5 text-black">
              <div className="flex text-small ">
                <p className=" font-bold">Materi Workshop </p>
                <p>From Concept to Creation: Mastering UI/UX Design Practices</p>
                <br/>
                <br/>
              </div>
              <div className="text-small">
                <p> • Memperkenalkan dasar UI/UX Design.</p>
                <p> • Memperkenalkan Figma sebagai software penunjang.</p>
                <p> • Mengimplementasikan Ilmu Desain UI/UX dengan menggunakan Figma.</p>
                <p> • Membuat contoh project design landing page suatu website menggunakan Figma.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
