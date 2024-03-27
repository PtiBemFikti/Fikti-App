import Image from "next/image";

export default function DocumentationPage() {
  return (
    <div className="">
      {/*Dekstop*/}
      <div className="md:block hidden mt-2">
        <div className="pb-20">
          <div className="p-10">
            <div className="flex justify-center items-center">
              <div className="text-center font-bold text-3xl font-[arial] tracking-tight text-black">
                {" "}
                DOCUMENTATION{" "}
              </div>
            </div>
            <div className="flex mt-4 overflow-x-auto gap-5">
              <Image
                src="/filing/dumpdoc.png"
                alt="dumpdoc"
                width={200}
                height={200}
                className="w-72 h-72 rounded-3xl pb-8"
              />
              <Image
                src="/filing/dumpdoc.png"
                alt="dumpdoc"
                width={200}
                height={200}
                className="w-72 h-72 rounded-3xl pb-8"
              />
              <Image
                src="/filing/dumpdoc.png"
                alt="dumpdoc"
                width={200}
                height={200}
                className="w-72 h-72 rounded-3xl pb-8"
              />
              <Image
                src="/filing/dumpdoc.png"
                alt="dumpdoc"
                width={200}
                height={200}
                className="w-72 h-72 rounded-3xl pb-8"
              />
              <Image
                src="/filing/dumpdoc.png"
                alt="dumpdoc"
                width={200}
                height={200}
                className="w-72 h-72 rounded-3xl pb-8"
              />
              <Image
                src="/filing/dumpdoc.png"
                alt="dumpdoc"
                width={200}
                height={200}
                className="w-72 h-72 rounded-3xl pb-8"
              />
              <Image
                src="/filing/dumpdoc.png"
                alt="dumpdoc"
                width={200}
                height={200}
                className="w-72 h-72 rounded-3xl pb-8"
              />
              <Image
                src="/filing/dumpdoc.png"
                alt="dumpdoc"
                width={200}
                height={200}
                className="w-72 h-72 rounded-3xl pb-8"
              />
              <Image
                src="/filing/dumpdoc.png"
                alt="dumpdoc"
                width={200}
                height={200}
                className="w-72 h-72 rounded-3xl pb-8"
              />
            </div>
          </div>
        </div>
      </div>
      {/*Dekstop*/}

      {/*Mobile*/}
      <div className="md:hidden mt-2 bg-[#11111B]">
        <div className="py-10">
          <div className="flex justify-center items-center mt-8">
            <div className="w-72 text-center tracking-tight text-white text-3xl font-bold font-[arial]">
              DOCUMENTATIONS
            </div>
          </div>
          <div className="justify-center items-center gap-1 flex">
            <div className="flex gap-1 w-72 mt-2">
              <Image
                src="/filing/dumpdoc.png"
                alt="dumpdoc"
                width={170}
                height={170}
              />
              <div className="flex flex-col w-40 ">
                <Image
                  src="/filing/dumpdoc.png"
                  alt="dumpdoc"
                  width={120}
                  height={120}
                />
                <Image
                  src="/filing/dumpdoc.png"
                  alt="dumpdoc"
                  width={120}
                  height={120}
                />
              </div>
            </div>
          </div>
          <div className="justify-center items-center gap-1 flex">
            <div className="flex w-72">
              <Image
                src="/filing/dumpdoc.png"
                alt="dumpdoc"
                width={130}
                height={130}
              />
              <div className="flex w-72">
                <Image
                  src="/filing/dumpdoc.png"
                  alt="dumpdoc"
                  width={170}
                  height={170}
                />
              </div>
            </div>
          </div>
          <div className="justify-center items-center gap-1 flex">
            <div className="flex w-72">
              <Image
                src="/filing/dumpdoc.png"
                alt="dumpdoc"
                width={96}
                height={96}
              />
              <Image
                src="/filing/dumpdoc.png"
                alt="dumpdoc"
                width={96}
                height={96}
              />
              <Image
                src="/filing/dumpdoc.png"
                alt="dumpdoc"
                width={96}
                height={96}
              />
            </div>
          </div>
        </div>
      </div>

      {/*Mobile*/}
    </div>
  );
}
