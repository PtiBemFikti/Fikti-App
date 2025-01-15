import Image from "next/image";

export default function CoreValue() {
  return (
    <section
      id="core-value"
      className="relative z-10 pb-20 max-md:rounded-none w-screen h-fit section-about text-white max-md:py-10"
    >
      <div className="flex flex-col items-center justify-center px-6">
        <h1 className="text-[4rem] mb-16 font-bold max-md:text-3xl">
          Core Value
        </h1>
        <div className="w-[80%] h-fit flex justify-between items-center max-md:flex-col max-md:w-full max-md:gap-12">
          {/* Core Value Item 1 */}
          <div className="flex w-[300px] text-center h-[600px] bg-white/30 rounded-full flex-col justify-start items-center max-md:w-[200px] max-md:h-[400px] max-md:py-8">
            <div className="w-[300px] h-[300px] flex items-center justify-center bg-white rounded-full max-md:w-[200px] max-md:h-[200px]">
              <Image
                src="/main/akrab.png"
                alt="logo"
                width={200}
                height={200}
                className="max-md:w-[200px] h-[200px]"
              />
            </div>
            <h1 className="text-2xl font-bold my-5 max-md:text-xl">Akrab</h1>
            <p className="text-xl font-semibold px-5 max-md:text-sm">
              Hubungan erat dengan mahasiswa FIKTI
            </p>
          </div>

          {/* Core Value Item 2 */}
          <div className="flex w-[300px] text-center h-[600px] bg-white/30 rounded-full flex-col justify-start items-center max-md:w-[200px] max-md:h-[400px] max-md:py-8">
            <div className="w-[300px] h-[300px] flex items-center justify-center bg-white rounded-full max-md:w-[200px] max-md:h-[200px]">
              <Image
                src="/main/adfokatif.png"
                alt="logo"
                width={200}
                height={200}
                className="max-md:w-[200px] h-[200px]"
              />
            </div>
            <h1 className="text-2xl font-bold my-5 max-md:text-xl">
              Advokatif
            </h1>
            <p className="text-xl font-semibold px-5 max-md:text-sm">
              Menyuarakan kebutuhan dan aspirasi mahasiswa FIKTI
            </p>
          </div>

          {/* Core Value Item 3 */}
          <div className="flex w-[300px] text-center h-[600px] bg-white/30 rounded-full flex-col justify-start items-center max-md:w-[200px] max-md:h-[400px] max-md:py-8">
            <div className="w-[300px] h-[300px] flex items-center justify-center bg-white rounded-full max-md:w-[200px] max-md:h-[200px]">
              <Image
                src="/main/supportif.png"
                alt="logo"
                width={200}
                height={200}
                className="max-md:w-[200px] h-[200px]"
              />
            </div>
            <h1 className="text-2xl font-bold my-5 max-md:text-xl">
              Supportif
            </h1>
            <p className="text-xl font-semibold px-5 max-md:text-sm">
              Saling memberikan dukungan antar mahasiswa FIKTI
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
