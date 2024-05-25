import Image from "next/image";
import { Guardians } from "@/styles/font";
export default function DocumentationPage() {
  return (
    <div>
      <div className="mt-8">
        <div className="my-8 px-6 md:hidden">
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

      {/*Desktop*/}
      <div className="md:block hidden mt-8">
        <div className="my-8 px-6">
          <div className="flex justify-center">
            <div>
              <h1 className={`text-[#E8E8F0] text-2xl ${Guardians.className}`}>
                Documentation
              </h1>
            </div>
          </div>
          <div className="justify-center items-center flex">
            <div className="mt-4 bg-gray-200 rounded-lg border-4 w-[1072px] border-gray-200 ">
              <div className="flex mt-1">
                <div className="flex flex-col gap-2.5 ml-1">
                  <div>
                    <Image
                      src={"/fiktispace/doc1.png"}
                      alt="doc1"
                      width={463}
                      height={200}
                    ></Image>
                  </div>
                  <div className="">
                    <Image
                      src={"/fiktispace/doc5.png"}
                      alt="doc5"
                      width={463}
                      height={287}
                    ></Image>
                  </div>
                  <div>
                    <Image
                      src={"/fiktispace/doc3desktop.png"}
                      alt="doc3"
                      width={440}
                      height={287}
                    ></Image>
                  </div>
                </div>
                <div className="flex-colgap-2.5 ml-1">
                  <div>
                    <Image
                      src={"/fiktispace/doc2.png"}
                      alt="doc2"
                      width={299}
                      height={400}
                    ></Image>
                  </div>
                  <div className="mt-1">
                    <Image
                      src={"/fiktispace/doc6.png"}
                      alt="doc6"
                      width={355}
                      height={230}
                    ></Image>
                  </div>
                </div>
                <div className="flex-col  gap-2.5 ml-1">
                  <div>
                    <Image
                      src={"/fiktispace/doc4.png"}
                      alt="doc4"
                      width={390}
                      height={386}
                    ></Image>
                  </div>
                  <div className="mt-1">
                    <Image
                      src={"/fiktispace/doc7.png"}
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
                    src={"/fiktispace/doc8desktop.png"}
                    alt="doc8"
                    width={385}
                    height={341}
                  ></Image>
                </div>
                <div>
                  <Image
                    src={"/fiktispace/doc9.png"}
                    alt="doc9"
                    width={329}
                    height={341}
                  ></Image>
                </div>
                <div>
                  <Image
                    src={"/fiktispace/doc10.png"}
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
