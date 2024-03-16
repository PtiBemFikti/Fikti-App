import Image from "next/image"
export default function SeminarPage(){
    return(
        <div className=" p-40" width={1440} height={698}>
            <div>
            <Image src={"/technofair/full-2.png"}alt="gambar orang" width={800} height={600}/>
                </div>
                <div className=" w-full h-screen pt-2 pb-2 flex justify-center items-center">
                    <p className="font-bold text-black">UI/UX Design</p>
                </div>
        </div>
    )
}