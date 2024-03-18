import Image from "next/image";

export default function SeminarPage() {
  return (
    <div className="px-40 py-20 bg-gradient-to-b from-[#FEFEEA] to-[#F7F9FA]" style={{ width: "100%", height: "698px" }}>
      <div className="">
      <div className=" flex mb-2 gap-5">
        <div className=" w-7 h-7"><Image src="/technofair/tandapanah.png" alt="gambar tandapanah" width={50} height={50}/></div>
        <div className="  text-black mt-0.5">Back</div>
      </div>
    <div className="">
      <div className="">
        <div className="flex justify-center w-11/12">
          <div className="" style={{ width: "461px", height: "346px" }}>
          <Image src="/technofair/full-2.png" alt="gambar orang" width={800} height={600} />
          </div>
        <div>
          <div className=" p-2 flex gap-2" style={{ width: "620px", height: "350"}}>
            <div className=" text-black font-bold text-3xl px-6">UI/UX Design</div>
            <div className=" mt-3 text-[#B9BCC7]">Workshop</div>
          </div>
          <div className="px-8">
            <p className="text-black">From Concept to Creation: Mastering UI/UX Design Practices</p>
          </div>
          <div className=" text-black font-bold px-8 p-4">
            <p>Sabtu, 01 Juni 2024</p>
          </div>
          <div className="text-black text-small px-8">
            <p>Workshop ini akan memperkenalkan Product Management yang</p>
            <p>merupakan bagian dari dunia teknologi yang sedang banyak diminati</p>
            <p>saat ini dan mengimplementasikan skill yang dipersiapkan untuk</p>
            <p>menjadi Product Manager</p>
          </div>
          <div>
          <div className=" w-96 h-12 px-8 flex">
            <div className="border w-44 h-12 gap-2">
              <p className="text-black">Hubungi Kami</p>
            </div>
            <div className="border w-44 h-12 gap-2">
              <p className="text-black">Daftar Sekarang</p>
            </div>
          </div>
          </div>
          </div>
        </div>
      </div>
     </div>
      </div>
      
     
    </div>
  );
}
