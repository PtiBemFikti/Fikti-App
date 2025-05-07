import Image from "next/image";
import { AkiraExpanded, Lato } from "@/styles/font";
export default function DocumentationPage() {
  return (
    <div>
      <div className="pt-44 lg:pt-24 ">
        <div className="py-10 px-1 md:px-8 justify-center items-center md:hidden bg-[#FECB62]">
          <div className="flex justify-center items-center">
            <div>
              <h1 className={`text-2xl md:text-[2.5rem] text-[#0A2352] ${AkiraExpanded.className}`}>
                Documentation
              </h1>
              <div className={`text-md text-center text-[#0A2352] ${Lato.className} `}>
                Celebrating Moments Together.
            </div>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="mt-4 bg-gray-200 p-2 rounded-lg border-4 w-[80%] border-gray-200">
              <div className="flex gap-1">
                <Image
                  src={"/fiktispace/documentation/doc1.png"}
                  alt="doc1"
                  width={205}
                  height={200}
                ></Image>
                <Image
                  src={"/fiktispace/documentation/doc2.png"}
                  alt="doc2"
                  width={91}
                  height={128}
                ></Image>
              </div>
              <div className="flex mt-1 gap-1 justify-center">
                <Image
                  src={"/fiktispace/documentation/doc3.png"}
                  alt="doc3"
                  width={305}
                  height={300}
                ></Image>
              </div>
              <div className="flex mt-1 gap-2 justify-center">
                <Image
                  src={"/fiktispace/documentation/doc4.png"}
                  alt="doc4"
                  width={115}
                  height={130}
                ></Image>
                <Image
                  src={"/fiktispace/documentation/doc5.png"}
                  alt="doc5"
                  width={180}
                  height={128}
                ></Image>
              </div>
              <div className="flex mt-1 gap-1 justify-center">
                <Image
                  src={"/fiktispace/documentation/doc6.png"}
                  alt="doc6"
                  width={160}
                  height={128}
                ></Image>
                <Image
                  src={"/fiktispace/documentation/doc7.png"}
                  alt="doc7"
                  width={140}
                  height={128}
                ></Image>
              </div>
              <div className="flex mt-1 gap-1 justify-center">
                <Image
                  src={"/fiktispace/documentation/doc8.png"}
                  alt="doc8"
                  width={305}
                  height={128}
                ></Image>
              </div>
              <div className="flex mt-1 gap-1 justify-center">
                <Image
                  src={"/fiktispace/documentation/doc9.png"}
                  alt="doc9"
                  width={150}
                  height={128}
                ></Image>
                <Image
                  src={"/fiktispace/documentation/doc10.png"}
                  alt="doc10"
                  width={150}
                  height={128}
                ></Image>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/*Desktop*/}
      <div className="md:block hidden py-10 bg-[#FECB62]">
        <div className="my-8 px-6">
          <div className="flex justify-center">
            <div>
              <h1 className={`text-2xl md:text-[2.5rem] text-[#0A2352] from-[# ${AkiraExpanded.className}`}>
                Documentation
              </h1>
              <div className={`text-md text-center text-[#0A2352] ${Lato.className} `}>
                Celebrating Moments Together.
            </div>
            </div>
          </div>
          <div className="justify-center items-center flex">
            <div className="mt-4 p-3 bg-gray-200 rounded-lg border-4 w-[70%] border-gray-200 ">
              <div className="flex mt-1 gap-2.5">
                <div className="flex flex-col gap-2.5 ml-1">
                  <div>
                    <Image
                      src={"/fiktispace/documentation/doc1.png"}
                      alt="doc1"
                      width={463}
                      height={200}
                    ></Image>
                  </div>
                  <div className="">
                    <Image
                      src={"/fiktispace/documentation/doc5.png"}
                      alt="doc5"
                      width={463}
                      height={287}
                    ></Image>
                  </div>
                  <div>
                    <Image
                      src={"/fiktispace/documentation/doc3desktop.png"}
                      alt="doc3"
                      width={440}
                      height={287}
                    ></Image>
                  </div>
                </div>
                <div className="flex-col gap-2.5 ml-1">
                  <div>
                    <Image
                      src={"/fiktispace/documentation/doc2.png"}
                      alt="doc2"
                      width={299}
                      height={400}
                    ></Image>
                  </div>
                  <div className="mt-3">
                    <Image
                      src={"/fiktispace/documentation/doc6.png"}
                      alt="doc6"
                      width={355}
                      height={230}
                    ></Image>
                  </div>
                </div>
                <div className="flex-col gap-2.5 ml-1 mt-3">
                  <div>
                    <Image
                      src={"/fiktispace/documentation/doc4.png"}
                      alt="doc4"
                      width={390}
                      height={386}
                    ></Image>
                  </div>
                  <div className="mt-3">
                    <Image
                      src={"/fiktispace/documentation/doc7.png"}
                      alt="doc7"
                      width={393}
                      height={386}
                    ></Image>
                  </div>
                </div>
              </div>
              <div className="flex gap-2.5 mt-1">
                <div className="justify-center flex items-center">
                  <Image
                    src={"/fiktispace/documentation/doc8desktop.png"}
                    alt="doc8"
                    width={385}
                    height={341}
                  ></Image>
                </div>
                <div>
                  <Image
                    src={"/fiktispace/documentation/doc9.png"}
                    alt="doc9"
                    width={329}
                    height={341}
                  ></Image>
                </div>
                <div className="mt-2">
                  <Image
                    src={"/fiktispace/documentation/doc10.png"}
                    alt="doc10"
                    width={329}
                    height={341}
                  ></Image>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
