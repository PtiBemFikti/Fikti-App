import { Montserrat, poppins } from "@/styles/font";
import Link from "next/link";
import Image from "next/image";
import RotatingWords from "./RotatingWords";
import RotatingWords2 from "./RotatingWords2";

export function Dashboard() {
    const rotatingWords1 = <RotatingWords />;
    const rotatingWords2 = <RotatingWords2 />;

    return (
        <div className="pt-28 lg:pt-20 bg-[#100F21] lg:bg-transparent">

            <div className="lg:container lg:mx-auto bg-[#FFFAF0] lg:bg-transparent rounded-t-3xl">

                <div className="hidden md:block justify-center items-center text-center pt-20 ">
                    <div className="hidden lg:container mx-auto md:flex items-center justify-center relative">
                        <Link href={'/'}>
                            <div className="absolute left-0 p-2 hidden lg:block">
                                <svg 
                                    width="86" 
                                    height="75" 
                                    viewBox="0 0 86 75" 
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="transition-transform duration-500 hover:rotate-[360deg]  hover:cursor-pointer hover:scale-110 fill-black hover:fill-yellow-500"
                                >
                                    <path d="M68.6702 61.0844C62.79 53.2719 55.523 50.8187 46.5826 50.1969V54.6875C46.5826 56.3563 45.8372 57.925 44.4827 59.1062C41.7737 61.4688 37.0401 61.4531 34.367 59.1219L11.8171 39.725C11.4785 39.4342 11.2096 39.0876 11.0261 38.7054C10.8426 38.3231 10.748 37.9128 10.748 37.4984C10.748 37.084 10.8426 36.6738 11.0261 36.2915C11.2096 35.9093 11.4785 35.5627 11.8171 35.2719L34.3491 15.8875C37.0509 13.5281 41.7773 13.525 44.4863 15.8906C45.8372 17.0719 46.5826 18.6406 46.5826 20.3094V25.6344C63.134 28.55 75.2492 41.25 75.2492 56.2469V59.3719C75.2513 60.0454 75.0035 60.7015 74.5428 61.2421C74.0822 61.7827 73.4334 62.1789 72.6933 62.3716C71.9533 62.5642 71.1616 62.5429 70.4365 62.311C69.7114 62.079 69.0919 61.6487 68.6702 61.0844ZM43.0816 43.7844C50.9901 43.9594 59.7011 45.0156 67.2978 50.4125C65.9267 45.4122 62.818 40.9034 58.3968 37.5025C53.9757 34.1015 48.4578 31.9746 42.5979 31.4125C40.7919 31.2375 39.4159 31.25 39.4159 31.25V20.3219L19.4352 37.4969L39.4159 54.6844V43.75L43.0816 43.7844Z"/>
                                </svg>
                            </div>
                        </Link>
                        <h1 className={`${Montserrat.className} hidden md:block md:pb-3 lg:pb-0 text-black text-[18px] font-medium`}>
                            The Biggest IT Event Held by BEM FIKTI
                        </h1>
                    </div>
                    <h1 className={`${Montserrat.className} hidden sm:block text-black text-5xl lg:text-[100px] font-bold tracking-[3%]`}>TECHNOFAIR 12.0</h1>  
                </div>

                <div className="flex justify-center items-center w-full pt-20 lg:pt-0 lg:mt-10 px-5 lg:px-0">
                    <div className="w-full lg:w-[1161px] h-[410px] lg:h-[500px] bg-[#FE8A16]  rounded-[35px] justify-center items-center">
                        <div>
                            <div className="flex items-end lg:hidden">
                                <h1 className={`${poppins.className} text-white text-[35px] sm:text-5xl tracking-tight font-semibold pt-5 pl-4 leading-[45px] lg:text-[70px] lg:leading-[85px] lg:pl-[45px] lg:pt-[61px]`}>
                                Tech Enthusiasts, <br /> 
                                Assemble! <br className="sm:hidden"/>
                                Your Next Big<br /> 
                                Break<span className={`${poppins.className} text-[#053B64] text-[35px] sm:text-5xl tracking-tight font-semibold pt-5 pl-4 leading-[45px] lg:text-[70px] lg:leading-[85px] lg:pl-[45px] lg:pt-[61px]`}>{rotatingWords1}</span>

                                </h1>

                            </div>
                            <div className="hidden lg:flex items-end">
                                <h1 className={`${poppins.className} text-white text-[70px] font-semibold tracking-tight leading-[85px] pl-[45px] pt-[61px]`}>
                                Tech Enthusiasts,<br /> 
                                Assemble!<br />
                                Your Next Big Break
                                </h1>
                                <span className={`${poppins.className}  text-[#053B64] text-[70px] font-semibold tracking-tight leading-[85px] pl-[45px] pt-[61px]`}>{rotatingWords2}</span>
                            </div>

                            <div className="w-[300px] sm:w-[680px] lg:w-[1071px] h-[1px] bg-white mx-auto mt-7 lg:ml-[45px] lg:mt-[63px]"></div>
                        </div>

                        <div className="grid lg:flex">
                            <div className="px-1 pt-4 lg:pl-[45px] lg:pt-[30px]">
                                <h1 className={`${Montserrat.className} hidden lg:block text-[#FFFAF0] lg:text-[18px] font-medium`}>“Building Tomorrow&apos;s World with Innovation and Collaboration.”</h1>
                                <p className={`${Montserrat.className} text-[#FFFAF0] text-[12px] sm:text-base text-center lg:hidden font-medium`}>“Building Tomorrow&apos;s World with Innovation and Collaboration.”</p>
                            </div>

                            <Link href="#events" className={`${Montserrat.className} w-[220px] mx-auto text-black mt-5 tracking-tight font-semibold text-[25px] px-[43px] py-[15px] bg-[#FFFAF0] rounded-full shadow-[4px_6px_7.2px_1px_rgba(0,0,0,0.25)] lg:shadow-[12px_13px_2.1px_1px_rgba(0,0,0,0.25)] hover:bg-[#053B64] hover:text-white duration-500`}>
                                JOIN NOW
                            </Link>
                        </div>
                        
                    </div>
                </div>

            </div>
        </div>
    );
}
