
import { Montserrat } from "@/styles/font";
import Image from 'next/image';
import DokumSlider from "./DokumSlider";


export function Dokumentasi() {
    return (
        <div className="mt-[500px]">
            <div className="justify-center">
                <h1 className={`${Montserrat.className} text-[50px] font-semibold tracking-tighter text-center`}>TechnoFair 12.0</h1>
                <h1 className={`${Montserrat.className} text-[55px] tracking-tighter text-center`}>More Than Just Pictures, <br />
                <span className="font-bold">a Story!</span></h1>
            </div>

            <div className="">
                <DokumSlider />
            </div>
        </div>
    )
}