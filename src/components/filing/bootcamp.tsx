import Image from "next/image"
export default function BootcampPage() {
    return(
        <div className="">
            {/*Dekstop*/}
            <div className="md:block hidden mt-2">
                <div className="py-24">
                    <div className="flex justify-between py-4">
                    <div>
                        <Image src="/filing/vector1.png" alt="vector1" width={400} height={500} /> 
                    </div>
                    <div className="px-10 w-full h-1/2">
                        <div className="mt-4 tracking-tight text-center text-black text-3xl font-bold font-[arial]"> JOIN OUR BOOTCAMPS </div>
                    <div className="flex items-center justify-center">                    
                    <div className="flex mx-8 justify-center items-center">
                    <div className="w-1/2 mt-2 rounded-3xl border-2 border-stone-400 justify-center items-start">
                        <div className="p-2">
                            <div className="flex mt-4 items-center justify-center">                                                
                                <Image src="/filing/dataanalyst.png" alt="data analyst" width={350} height={350} />
                            </div>                            
                            <div className="w-28 h-7 mt-4 ml-1 bg-emerald-500 rounded-2xl justify-center items-center flex">
                                <div className="text-center text-white text-sm font-bold">BOOTCAMP</div>
                            </div>
                            <div className="mx-1 mt-1 tracking-tight text-start text-black text-2xl font-bold font-[arial]">DATA ANALYST</div>
                                <div className="mx-1 text-stone-500 text-sm font-light font-['Poppins']">“Started The Journey as a Data Analyst with Python & Tableau”</div>
                                <div className="w-full ml-1 mt-2 text-neutral-600 text-base font-normal font-['Poppins']">Data Analyst berperan sebagai jembatan antara informasi dan keputusan masa depan, dengan mengolah data dan mencari solusi dari berbagai permasalahan.</div>
                                <button className="w-full mt-4 mx-1 tracking-tight text-stone-400 text-base font-normal font-['Circle-Amolens']">CLICK TO LEARN MORE</button>
                            
                        </div>
                    </div>                                                   
                    <div className="w-1/2 mt-2 ml-4 rounded-3xl border-2 border-stone-400 justify-center items-start">
                        <div className="p-2">                                                   
                        <div className="flex mt-4 items-center justify-center">
                            <Image src={"/filing/webdev.png"} alt="webdev" width={350} height={350} />
                        </div>
                        <div className="w-28 h-7 mt-4 ml-1 bg-emerald-500 rounded-2xl justify-center items-center flex">
                            <div className="text-center text-white text-sm font-bold">BOOTCAMP</div>
                        </div>
                        <div className="mx-1 tracking-tight text-start text-black text-2xl font-bold font-[arial]">WEB DEVELOPMENT</div>
                            <div className="mx-1 text-stone-500 text-sm font-light font-['Poppins']">“Create Interactive Websites to Become a Web Developer With HTML, CSS & JS”</div>
                            <div className="w-full ml-1 mt-2 text-neutral-600 text-base font-normal font-['Poppins']">Web Developer, profesi yang sangat dibutuhkan dalam era digitalisasi ini untuk memperkenalkan dan mempromosikan produk/layanan perusahaan.</div>
                            <button className="w-full mt-3 mx-1 tracking-tight text-stone-400 text-base font-normal font-['Circle-Amolens']">CLICK TO LEARN MORE</button>
                        </div>
                    </div>                                
                    </div>
                    </div>
                    </div>
                    <div>
                        <Image src="/filing/vector2.png" alt="vector2" width={400} height={400} />
                    </div>
                    </div>
                    <div className="flex items-center justify-center">

                    </div>
                </div>
            </div>

            

            {/*Mobile*/}
            
            
        </div>
    )
}