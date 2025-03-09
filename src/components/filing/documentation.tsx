import { circleAmolens } from "@/styles/font";
import Image from "next/image";
import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';

export default function DocumentationPage() {
  return (
    <div className="">
      {/*Dekstop*/}
      <div className="md:block hidden">
        <div className="">
          <div className="pt-20">
            <div className="flex justify-center items-center">
              <div
                className={`${circleAmolens.className} text-center font-bold text-3xl tracking-tight text-black`}
              >
                {" "}
                DOKUMENTASI{" "}
              </div>
            </div>
            <div >
              <Swiper
                slidesPerView={1}
                loop={true}
                pagination={{
                  clickable: true,
                }}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="mySwiper md:w-5/6 lg:w-4/5 max-h-[35rem] mt-8 border-[#91D2F4] border-4 rounded-[1.75rem] "
              >
                <SwiperSlide>
                  <Image
                    src="/filing/filingdoc2.png"
                    alt=""
                    width={1000}
                    height={1600}
                    className="w-full h-full rounded-3xl"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <Image
                    src="/filing/filingdoc3.png"
                    alt=""
                    width={1000}
                    height={1600}
                    className="w-full h-full rounded-3xl"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <Image
                    src="/filing/filingdoc4.png"
                    alt=""
                    width={1000}
                    height={1600}
                    className="w-full h-full rounded-3xl"
                  />
                </SwiperSlide>
              </Swiper>
            </div>
            {/* <div className="flex mt-4 overflow-x-auto gap-4">
              <Image
                src="/filing/filingdoc1.png"
                alt=""
                width={1000}
                height={1000}
                className="w-full h-full rounded-3xl pb-8"
              />
              <Image
                src="/filing/filingdoc2.png"
                alt=""
                width={1000}
                height={1000}
                className="w-full h-full rounded-3xl pb-8"
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
            </div> */}
          </div>
        </div>
      </div>
      {/*Dekstop*/}

      {/*Mobile*/}
      <div className="md:hidden mt-2">
        <div className="px-2">
          <div className="flex justify-center items-center mt-16">
            <div
              className={`${circleAmolens.className} text-center tracking-tight text-black text-2xl sm:text-3xl font-bold p-8`}
            >
              DOKUMENTASI
            </div>
          </div>
          <div className="flex flex-col justify-center items-center space-y-6 px-2 pb-4">
            <div className="flex w-full ">
              <Image
                src="/filing/filingdoc2.png"
                alt=""
                className="w-auto h-auto rounded-xl"
                width={1000}
                height={1000}
              />
            </div>
          </div>
          <div className="flex flex-col justify-center items-center space-y-6 px-2 pb-4">
            <div className="flex w-full ">
              <Image
                src="/filing/filingdoc3.png"
                alt=""
                className="w-auto h-auto rounded-xl"
                width={1000}
                height={1000}
              />
            </div>
          </div>
          <div className="flex flex-col justify-center items-center space-y-6 px-2 pb-4">
            <div className="flex w-full ">
              <Image
                src="/filing/filingdoc4.png"
                alt=""
                className="w-auto h-auto rounded-xl"
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
