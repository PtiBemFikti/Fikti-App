import { Montserrat, poppins } from "@/styles/font";

export function About() {
    return (
        <div>
            <div className="flex justify-center items-start mx-10 mt-[250px]">
                <div className="justify-center items-center w-[650px]">
                    <h1 className={`${poppins.className} text-black text-[54px] tracking-tight font-semibold`}>What is TechnoFair?</h1> 
                    <div className="w-[650px]">
                        <p className={`${Montserrat.className} text-black text-[22px] tracking-tight mt-[36px]`}>Wadah bagi mahasiswa FIKTI Universitas Gunadarma untuk belajar berinovasi dan menciptakan masa depan melalui teknologi.</p>
                        <p className={`${Montserrat.className} text-black text-[22px] tracking-tight mt-[50px]`}>Lewat webinar, kompetisi, dan workshop, TechnoFair mengupas tuntas tema &quot;Realizing the dynamic technological transformation through collaborative innovation in FutureTech.&quot;</p>
                    </div>
                </div>

                <div className="h-[450px] w-[1px] bg-black mx-14"></div>

                <div>
                    <div>
                        <h1 className={`${poppins.className} text-black text-[15px] tracking-tight font-medium`}>Maskot</h1>
                        <h1 className={`${poppins.className} text-black text-[54px] tracking-tight font-semibold mt-[-12px]`}>Zenith</h1>
                        <p className={`${Montserrat.className} text-black text-[22px] tracking-tight mt-[24px] w-[350px]`}>Nama Zenith dipilih karena melambangkan puncak, titik tertinggi dalam suatu pencapaian. Hal ini merepresentasikan tujuan TechnoFair untuk mencapai puncak pengetahuan dan wawasan dalam bidang teknologi.</p>
                    </div>
                </div>

                <div className="w-[450px] h-[450px] bg-slate-400"></div>
                
            </div>
            
            <div className="bg-[#053B64] mt-60 container mx-auto p-14 rounded-[42px]">
                <h1 className={`${poppins.className} text-[#FFFAF0] font-semibold text-[60px]`}>TechnoFair, in 4 <span className={`${poppins.className} text-[#FE8A16] font-bold text-[60px]`}>Points</span></h1>

                <div className="grid grid-cols-2 content-start gap-6 ">
                    <div className="bg-[#043255] py-9 px-11 mt-14 rounded-3xl transform transition-transform duration-300 hover:scale-[102%] border-[#FE8A16] hover:border">
                        <h1 className={`     text-[#FFFAF0] font-medium text-[35px]`}>Innovation</h1>
                        <p className={`${Montserrat.className} text-[#FFFAF0] font-medium mt-4`}>Memperkenalkan kepada mahasiswa UG dan masyarakat umum mengenai perkembangan teknologi saat ini melalui seminar, workshop dan kompetisi.</p>
                    </div>
                    <div className="bg-[#043255] py-9 px-11 mt-14 rounded-3xl transform transition-transform duration-300 hover:scale-[102%] border-[#FE8A16] hover:border">
                        <h1 className={`${poppins.className} text-[#FFFAF0] font-medium text-[35px]`}>Creativity</h1>
                        <p className={`${Montserrat.className} text-[#FFFAF0] font-medium mt-4`}>Menumbuhkan ide kreatif mahasiswa/i Universitas Gunadarma dan masyarakat umum dalam menghadapi pesatnya perkembangan teknologi digital saat ini</p>
                    </div>
                    <div className="bg-[#043255] py-9 px-11 rounded-3xl transform transition-transform duration-300 hover:scale-[102%] border-[#FE8A16] hover:border">
                        <h1 className={`${poppins.className} text-[#FFFAF0] font-medium text-[35px]`}>Education</h1>
                        <p className={`${Montserrat.className} text-[#FFFAF0] font-medium mt-4`}>Sebagai sarana media pembelajaran dan pembekalan ilmu mahasiswa Universitas Gunadarma dan masyarakat umum di bidang teknologi informasi dalam menghadapi pesatnya perkembangan teknologi digital saat ini.</p>
                    </div>
                    <div className="bg-[#043255] py-9 px-11 rounded-3xl transform transition-transform duration-300 hover:scale-[102%] border-[#FE8A16] hover:border">
                        <h1 className={`${poppins.className} text-[#FFFAF0] font-medium text-[35px]`}>Reputation</h1>
                        <p className={`${Montserrat.className} text-[#FFFAF0] font-medium mt-4`}>Mempertegas identitas Universitas Gunadarma di masyarakat umum sebagai kampus yang berbasis di bidang IT.</p>
                    </div>
                </div>
            </div>
        </div>
        
    )
}