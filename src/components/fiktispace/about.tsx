import { Lato } from "@/styles/font";

export default function AboutPage() {
  return (
    <div className="pt-4 -mb-20 md:mb-0">
      <div className="flex items-center justify-center">
        <div className="py-5 md:py-12 px-6 md:px-14">
          <div>
            <p className={`${Lato.className} text-center text-white text-lg font-medium md:text-xl`}>
            FIKTI SPACE 4.0 adalah Program Kerja Unggulan  BEM FIKTI UG yang diselenggarakan oleh Departemen Olahraga dan Seni Budaya (ORSB),  sebagai wahana eksplorasi kreativitas di <span className='font-bold font-size[1.3rem]'>bidang Seni dan Olahraga</span>  bagi mahasiswa Fakultas Ilmu Komputer dan Teknologi Informasi, Universitas Gunadarma.
            <br />
            <br />
            Tahun ini, FIKTI SPACE 4.0 hadir dengan semangat kosmis—mengajakmu untuk meluncur dari zona nyaman, menjelajahi galaksi kreativitas, berkompetisi di orbit penuh tantangan, dan bersinar seterang bintang di langit FIKTI. Bersiaplah menembus atmosfer 
            keterbatasan, dan jadikan perjalananmu di FIKTI SPACE 4.0 sebagai misi luar biasa yang dipenuhi warna, semangat, dan inspirasi tanpa gravitasi.
            {/* <br/>
            <br/>
            Fuel the passion, embrace the challenge! */}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
