import React from "react";

export default function SeminarPage() {
  return (
    <div className="px-40 py-20 bg-gradient-to-b from-[#FEFEEA] to-[#F7F9FA]" style={{ width: "100%", height: "698px" }}>
      <div className="mb-2 flex gap-5">
        <div className="w-7 h-7">
          <img src="/technofair/tandapanah.png" alt="gambar tandapanah" width={50} height={50}/>
        </div>
        <div className="text-black mt-0.5">Back</div>
      </div>
      <div className="flex justify-center w-11/12">
        <div style={{ width: "461px", height: "346px" }}>
          <img src="/technofair/full-2.png" alt="gambar orang" width={800} height={600} />
        </div>
        <div style={{ width: "620px", height: "350"}}>
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
            <p>Workshop ini akan memperkenalkan Product Management yang</p>
            <p>merupakan bagian dari dunia teknologi yang sedang banyak diminati</p>
            <p>saat ini dan mengimplementasikan skill yang dipersiapkan untuk</p>
            <p>menjadi Product Manager</p>
          </div>
          <div className="w-96 h-12 px-8 flex mt-5 gap-2">
            <div className="w-44 h-10 border gap-2 text-sm rounded-[16px] justify-center items-center flex"> 
              <p className="text-[#6C6A67]">Hubungi Kami</p>
            </div>
            <div className="w-44 h-10 border rounded-[16px] gap-2 text-sm justify-center items-center flex bg-[#21B573]">
              <p className="text-white ">Daftar Sekarang</p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-72 h-64 top-[546px] left-40">
        <div className="w-72 h-36 top-24 border">
          <div className="px-5 mt-1 text-black text-sm">
            <p>Details</p>
          </div>
          <div className="text-black text-sm px-16">
            <div className="mt-1 flex">
              <div className="">
                <img src="/technofair/tandakanan.png" alt="gambar tandakanan" width={10} height={10}/>
              </div>
              <p>About Workshop</p>
            </div>
            <div className="mt-1 flex">
              <div className="">
                <img src="/technofair/tandakanan.png" alt="gambar tandakanan" width={10} height={10}/>
              </div>
              <p>Benefit Workshop</p>
            </div>
            <div className="mt-1 flex">
              <div className="">
                <img src="/technofair/tandakanan.png" alt="gambar tandakanan" width={10} height={10}/>
              </div>
              <p>Jadwal & Materi</p>
            </div>
          </div>
          <div className="px-96">
            <div className="w-[725px] h-[873px] top-[644px] left-[529px] gap-10 border">
              <div className="text-black ">
                <img src="/technofair/tandakanan.png" alt="gambar tandakanan" width={10} height={10}/>
                <p>About Workshop</p>
                <div className="text-sm">
                  <p>Kegiatan workshop merupakan kegiatan yang berorientasi praktik disertai dengan teori</p>
                  <p>untuk menambah kemampuan para peserta secara teknis yang sesuai dengan</p>
                  <p>perkembangan yang ada dalam dunia Teknologi Informasi. Dalam TechnoFair 11.0, salah</p>
                  <p>satu workshop yang dilaksanakan berjudul "From Concept to Creation: Mastering UI/UX"</p>
                  <p>Design Practices".</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
