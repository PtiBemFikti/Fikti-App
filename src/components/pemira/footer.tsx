import { epilogue } from "@/styles/font"
import Image from "next/image"

export default function Footer() {
    return (
        <footer className="bg-[#ffffff] bottom-0 pt-10 md:pt-24 py-2">
            <div className={`text-[#344054] flex flex-col justify-center items-center ${epilogue.className} font-bold`}>
                <p>Have a question or need assistance</p>
                <div className="flex gap-14 py-5">
                    <Image src={'/pemira/whatsapp.png'} alt="wa" width={32} height={32}/>
                    <Image src={'/pemira/instagram.png'} alt="instagram" width={32} height={32}/>
                    <Image src={'/pemira/email.png'} alt="email" width={32} height={32}/>
                </div>
            </div>
            <div className="flex justify-center items-center pt-16">
                <p className={`text-[#344054] ${epilogue.className} text-xs`}>
                    <strong>Copyright</strong> &copy; 2024 BEM FIKTI UG & Made with 💛 by BIRO PTI
                </p>
            </div>
        </footer>
    )
}