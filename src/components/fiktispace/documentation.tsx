import Image from "next/image";
import { Guardians } from "@/styles/font";
export default function DocumentationPage() {
  return (
    <div className="mt-8">
      <div className="my-8 px-6">
        <div className="flex justify-center">
          <div>
            <h1 className={`text-[#E8E8F0] text-lg ${Guardians.className}`}>
              Documentation
            </h1>
          </div>
        </div>
        <div className="mt-4 bg-gray-200 rounded-lg border-4 border-gray-200">
          <div className="flex gap-1 justify-center">
            <Image
              src={"/fiktispace/doc1.png"}
              alt="doc1"
              width={240}
              height={200}
            ></Image>
            <Image
              src={"/fiktispace/doc2.png"}
              alt="doc2"
              width={91.81}
              height={128}
            ></Image>
          </div>
          <div className="flex mt-1 gap-1 justify-center">
            <Image
              src={"/fiktispace/doc3.png"}
              alt="doc3"
              width={340}
              height={300}
            ></Image>
          </div>
          <div className="flex mt-1 gap-2 justify-center">
            <Image
              src={"/fiktispace/doc4.png"}
              alt="doc4"
              width={130}
              height={130}
            ></Image>
            <Image
              src={"/fiktispace/doc5.png"}
              alt="doc5"
              width={201}
              height={128}
            ></Image>
          </div>
          <div className="flex mt-1 gap-1 justify-center">
            <Image
              src={"/fiktispace/doc6.png"}
              alt="doc6"
              width={191}
              height={128}
            ></Image>
            <Image
              src={"/fiktispace/doc7.png"}
              alt="doc7"
              width={143}
              height={128}
            ></Image>
          </div>
          <div className="flex mt-1 gap-1 justify-center">
            <Image
              src={"/fiktispace/doc8.png"}
              alt="doc8"
              width={340}
              height={128}
            ></Image>
          </div>
          <div className="flex mt-1 gap-1 justify-center">
            <Image
              src={"/fiktispace/doc9.png"}
              alt="doc9"
              width={167}
              height={128}
            ></Image>
            <Image
              src={"/fiktispace/doc10.png"}
              alt="doc10"
              width={167}
              height={128}
            ></Image>
          </div>
        </div>
      </div>
    </div>
  );
}
