import { Lato } from "@/styles/font";

export default function AboutPage() {
  return (
    <div className="pt-4 bg-[#0A2352]">
      <div className="flex items-center justify-center">
        <div className="my-8 px-8 md:px-[128px]">
          <div>
            <p className={`${Lato.className} text-center text-white text-base font-bold md:text-2xl`}>
            “FIKTI SPACE is back and inviting you to join in for an array of exciting tournaments! This year, we have competitions in Futsal, Mobile Legends, and much more! Come and compete with us!”
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
