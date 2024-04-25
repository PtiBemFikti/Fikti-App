import Image from "next/image"

export default function DataAnalyst() {
    return (
        <div className="bg-gradient-to-t from-[#F7F9FA] to-[##F3E5EA]">
            {/* Tampilan Dekstop start */}
            <div className="px-40 py-16">
                <div className="">
                    <Image src={'/technofair/btn-back.png'} alt="button back" width={28} height={28}/>
                    <p className="text-xl font-medium text-[#545350]">Back</p>
                </div>
            </div>
            {/* Tampilan Dekstop End */}

            {/* Tampilan Mobile Start */}
            {/* Tampilan Mobile End */}
        </div>
    )
}