import Image from "next/image";

export default function DocumentationPage() {
  return (
    <div className="">
      {/*Dekstop*/}
      <div className="md:block hidden mt-2">
        <div className="pb-20">
          <div className="p-28">
            <div className="flex justify-center items-center">
              <div className="text-center font-bold text-3xl font-[arial] tracking-tight text-black">
                {" "}
                DOCUMENTATION{" "}
              </div>
            </div>
            <div className="flex mt-4 overflow-x-auto gap-5">
              <Image
                src="/filing/filingdoc1.png"
                alt=""
                width={1000}
                height={1000}
                className="w-full h-96 rounded-3xl pb-8"
              />
              <Image
                src="/filing/filingdoc2.png"
                alt=""
                width={1000}
                height={1000}
                className="w-full h-96 rounded-3xl pb-8"
              />
              <Image
                src="/filing/filingdoc3.png"
                alt=""
                width={1000}
                height={1000}
                className="w-full h-96 rounded-3xl pb-8"
              />
              <Image
                src="/filing/filingdoc4.png"
                alt=""
                width={800}
                height={1000}
                className="w-full h-96 rounded-3xl pb-8"
              />
              <Image
                src="/filing/filingdoc5.png"
                alt=""
                width={1000}
                height={1000}
                className="w-full h-96 rounded-3xl pb-8"
              />
              <Image
                src="/filing/filingdoc6.png"
                alt=""
                width={1000}
                height={1000}
                className="w-full h-96 rounded-3xl pb-8"
              />
              <Image
                src="/filing/filingdoc7.png"
                alt=""
                width={1000}
                height={1000}
                className="w-full h-96 rounded-3xl pb-8"
              />
              <Image
                src="/filing/filingdoc8.png"
                alt=""
                width={1000}
                height={1000}
                className="w-full h-96 rounded-3xl pb-8"
              />
            </div>
          </div>
        </div>
      </div>
      {/*Dekstop*/}

      {/* Tampilan Mobile Start */}

      {/* Tampilan Mobile End */}
      {/*Mobile*/}
      <div className="md:hidden mt-2 ">
        <div className="py-10 px-2">
          <div className="flex justify-center items-center mt-8">
            <div className="w-72 text-center tracking-tight text-black text-3xl font-bold font-[arial]">
              DOCUMENTATIONS
            </div>
          </div>
          <div className="justify-center items-center gap-4 flex px-2 pb-4">
            <div className="flex w-full ">
              <Image
                src="/filing/filingdoc2.png"
                alt=""
                width={1000}
                height={1000}
              />
            </div>
          </div>
          <div className="justify-center items-center gap-4 flex px-2 pb-4">
            <div className="flex w-full ">
              <Image
                src="/filing/filingdoc1.png"
                alt=""
                width={1000}
                height={1000}
              />
            </div>
          </div>
          <div className="justify-center items-center gap-4 flex px-2 pb-4">
            <div className="flex w-full ">
              <Image
                src="/filing/filingdoc5.png"
                alt=""
                width={1000}
                height={1000}
              />
            </div>
          </div>

          <div className="justify-center items-center gap-4 flex">
            <div className="flex w-full">
              <Image
                src="/filing/filingdoc7.png"
                alt=""
                width={1000}
                height={1000}
              />
            </div>
          </div>
        </div>
      </div>

      {/*Mobile*/}
    </div>
  );
}
