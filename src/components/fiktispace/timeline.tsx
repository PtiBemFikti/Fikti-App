import { Guardians } from "@/styles/font";
import Image from "next/image";

export default function TimelinePage() {
  return (
    <div className="mt-4">
      <div className="flex justify-end">
        <div className="my-8 px-8">
          <div
            className={`text-[#E8E8F0] text-left text-lg ${Guardians.className}`}
          >
            Timeline
            <div className="mt-4">
              <Image
                className="ml-8"
                src={"/fiktispace/Frame 113 1.png"}
                alt="timeline"
                width={504}
                height={500}
              ></Image>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
