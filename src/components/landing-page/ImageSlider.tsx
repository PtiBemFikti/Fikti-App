import Image from "next/image";

export default function ImageSlider() {
  const imageUrls = [
    "/logo/AKADEMIK.png",
    "/logo/AU.png",
    "/logo/BISMIT.png",
    "/logo/HUMAS.png",
    "/logo/LITBANG.png",
    "/logo/MEDIA.png",
    "/logo/PTI.png",
    "/logo/OR.png",
    "/logo/POLKESMA.png",
    "/logo/PSDM.png",
    "/logo/SB.png",
    "/logo/SOSMAS.png",
  ];

  return (
    <>
      <div className="z-10 absolute bottom-[5rem]  overflow-hidden w-full py-6 bg-white/40 max-md:py-3">
        {/* Wrapper for scrolling images */}
        <div className="flex animate-infinite-scroll whitespace-nowrap">
          {Array(100)
            .fill(imageUrls)
            .flat()
            .map((url, index) => (
              <div
                key={index}
                className="flex-none w-10 h-10 mx-4 max-md:w-8 max-md:h-8 bg-white rounded-full shadow-lg flex items-center justify-center"
              >
                <Image
                  src={url}
                  alt={`Logo ${index + 1}`}
                  width={80}
                  height={80}
                  className="object-contain max-md:w-[75%] max-md:h-[75%]"
                />
              </div>
            ))}
        </div>
      </div>
    </>
  );
}
