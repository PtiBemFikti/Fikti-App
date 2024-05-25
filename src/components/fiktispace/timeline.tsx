import { Guardians } from "@/styles/font";
import Image from "next/image";

export default function TimelinePage() {
  return (
    <div className="mt-12 md:w-1/2">
      <div className="flex justify-end">
        <div className="my-8 px-8 md:px-0">
          <div
            className={`text-[#E8E8F0] mt-1 text-left md:text-center text-lg md:text-3xl ${Guardians.className}`}
          >
            Timeline
            <div className="mt-4">
              <Image
                className="ml-8"
                src={"/fiktispace/timeline.png"}
                alt="timeline"
                width={500}
                height={500}
                priority={true}
              ></Image>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
