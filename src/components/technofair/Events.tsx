import {  poppins } from "@/styles/font";
import SeminarSection from "@/components/technofair/SeminarSection";
import Textmarquee from "@/components/technofair/TextMarquee";
import KompetisiSection from "@/components/technofair/KompetisiSection";
import WorkshopSection from "@/components/technofair/WorkshopSection";

export function Events() {
  return (
    <div className="my-52">
      <div>

        <div className="lg:hidden">
          <Textmarquee />
        </div>

        <h1 className={`${poppins.className} text-4xl sm:text-5xl lg:text-[155px] font-extrabold leading-[109%] text-center`}>
          OUR UPCOMING EVENTS
        </h1>
        
        <Textmarquee />
        
        <div className="mt-[144px]"> 
          <SeminarSection />
          <div className="mt-28 lg:mt-52"><WorkshopSection /></div>
          <div className="mt-28 lg:mt-52"><KompetisiSection /></div>
        </div>

      </div>
    </div>
  );
}
