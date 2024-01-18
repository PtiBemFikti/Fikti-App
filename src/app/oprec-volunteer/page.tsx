'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import 'animate.css';
import { useEffect, useState } from 'react';
import { animate } from 'framer-motion';
import { useAnimate, stagger, motion } from 'framer-motion';

// const staggerMenuItems = stagger(0.1, { startDelay: 0.15 });

// function useMenuAnimation(isOpen: boolean) {
//   const [scope, animate] = useAnimate();

//   useEffect(() => {
//     animate('.arrow', { rotate: isOpen ? 180 : 0 }, { duration: 0.2 });

//     animate(
//       'ul',
//       {
//         clipPath: isOpen ? 'inset(0% 0% 0% 0% round 10px)' : 'inset(10% 50% 90% 50% round 10px)',
//       },
//       {
//         type: 'spring',
//         bounce: 0,
//         duration: 0.5,
//       }
//     );

//     animate('li', isOpen ? { opacity: 1, scale: 1, filter: 'blur(0px)' } : { opacity: 0, scale: 0.3, filter: 'blur(20px)' }, {
//       duration: 0.2,
//       delay: isOpen ? staggerMenuItems : 0,
//     });
//   }, [isOpen]);

//   return scope;
// }

export default function OprecPage() {
  // const descriptions = [
  //   {
  //     title: 'Divisi Acara',
  //     deksripsi: 'Mengatur seluruh rangkaian acara. Seperti membuat rundown acara beserta kebutuhannya, mencari pemateri, dll'
  //   },
  //   {
  //     title: 'Divisi Humas',
  //     deksripsi: 'Mengatur seluruh rangkaian acara. Seperti membuat rundown acara beserta kebutuhannya, mencari pemateri, dll'
  //   },
  //   {
  //     title: 'Divisi Sponsorship',
  //     deksripsi: 'Mengatur seluruh rangkaian acara. Seperti membuat rundown acara beserta kebutuhannya, mencari pemateri, dll'
  //   },
  //   {
  //     title: 'Divisi Perlengkapan',
  //     deksripsi: 'Mengatur seluruh rangkaian acara. Seperti membuat rundown acara beserta kebutuhannya, mencari pemateri, dll'
  //   },
  //   {
  //     title: 'Divisi Konsumsi',
  //     deksripsi: 'Mengatur seluruh rangkaian acara. Seperti membuat rundown acara beserta kebutuhannya, mencari pemateri, dll'
  //   },
  //   {
  //     title: 'Divisi Media',
  //     deksripsi: 'Mengatur seluruh rangkaian acara. Seperti membuat rundown acara beserta kebutuhannya, mencari pemateri, dll'
  //   },
  //   {
  //     title: 'Divisi Danus',
  //     deksripsi: 'Mengatur seluruh rangkaian acara. Seperti membuat rundown acara beserta kebutuhannya, mencari pemateri, dll'
  //   },
  // ];

  // const [showModal, setShowModal] = useState(false);

  // const btnAnimate = () => {
  //   setShowModal(true);
  // };

  // useEffect(() => {
  //   let timeout: any;
  //   if (showModal) {
  //     timeout = setTimeout(() => {
  //       setShowModal(false);
  //     }, 5000);
  //   }
  //   return () => {
  //     clearTimeout(timeout);
  //   };
  // }, [showModal]);
  // const [isOpen, setIsOpen] = useState(false);
  // const scope = useMenuAnimation(isOpen);

  return (
    <div className="main w-full font-Lato text-[#FFF6E0]">
      {/* <div
        style={{
          position: "fixed",
          bottom: -210,
          left: 200,
          width: 100,
          height: 100,
          background: "white",
        }}
      />
      <motion.button
        whileTap={{ scale: 0.97 }}
        onClick={() => setIsOpen(!isOpen)}
      >
        Menu
        <div className="arrow" style={{ transformOrigin: "50% 55%" }}>
          <svg width="15" height="15" viewBox="0 0 20 20">
            <path d="M0 7 L 20 7 L 10 16" />
          </svg>
        </div>
      </motion.button>
      <ul
        style={{
          pointerEvents: isOpen ? "auto" : "none",
          clipPath: "inset(10% 50% 90% 50% round 10px)",
        }}
      >
        <p>Diadiand</p>
      </ul>{" "} */}
      {/* Dashboard Start */}
      <div className="flex relative">
        <Image src={'/oprec-volunteer/line-9.png'} alt="line-bg" width={1029} height={975} className="object-cover absolute mx-auto w-full -top-7 hidden md:block" />

        {/* gambar mobile */}
        <Image src={'/oprec-mobile/line-1-mobile.png'} alt="line-1" width={417} height={319} className="object-cover absolute mx-auto w-full -top-8 md:hidden block" />
        <div className="">
          <Image src={'/oprec-mobile/lingkaran-1-mobile.png'} alt="lingkaran" width={100} height={100} className="object-cover absolute ml-[246px] w-36 h-36 -top-2 md:hidden block" />
          <Image src={'/oprec-mobile/dots-2-mobile.png'} alt="dots 2" width={85} height={35} className="object-cover absolute right-1 w-10 top-36 md:hidden block" />
        </div>
        <Image src={'/oprec-mobile/dots-mobile.png'} alt="dots 1" width={85} height={35} className="object-cover absolute -ml-1 w-12 h-12 top-14 md:hidden block" />

        <div className="bg-[#662549] w-3/4 h-44 rounded-e-[40px] md:w-2/3 md:h-5/6 md:rounded-e-[200px] mt-28 md:mt-36 z-10">
          <div className="md:ml-20 md:my-12 md:py-12">
            <div className="ml-3 my-4">
              <h2 className="text-md md:text-4xl">Open Recruitment Volunteer</h2>
              <h1 className="text-3xl md:text-6xl font-bold">Harmoni Serasi</h1>
            </div>
            <div className="md:ml-0">
              <div className="ml-3 my-4">
                <p className="text-xs md:text-lg">
                  Program kerja yang mewadahi mahasiswa aktif FIKTI UG untuk berkontribusi dalam kepanitiaan acara dan kegiatan yang diselenggarakan oleh <br /> BEM FIKTI UG.
                </p>
              </div>
            </div>
            <br />
            <div className="hidden md:block ml-3">
              <h4 className="text-2xl font-bold">Periode Pendaftaran:</h4>
              <h4 className="text-2xl font-bold md:mb-2">15 Januari 2024 - 20 Januari 2024</h4>
              <br />
              <div className="flex flex-wrap gap-3">
                <Link href={'#timeline'}>
                  <div className="px-3 py-1 bg-transparent rounded-full border border-brown-1 flex gap-1">
                    <svg className="w-6 h-6 mx-auto" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M6.66667 15.8333H14.5833C16.25 15.8333 17.5 14.5833 17.5 12.9166C17.5 11.25 16.25 9.99998 14.5833 9.99998H12.9167H5.41667C3.75 9.99998 2.5 8.74998 2.5 7.08331C2.5 5.41665 3.75 4.16665 5.41667 4.16665L17.5 4.16665"
                        stroke="#FFF6E0"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path d="M15.4167 6.25L17.5001 4.16667L15.4167 2.08333" stroke="#FFF6E0" stroke-linecap="round" stroke-linejoin="round" />
                      <path
                        d="M2.50008 15.8333C2.50008 16.9839 3.43282 17.9167 4.58341 17.9167C5.73401 17.9167 6.66675 16.9839 6.66675 15.8333C6.66675 14.6827 5.73401 13.75 4.58341 13.75C3.43282 13.75 2.50008 14.6827 2.50008 15.8333Z"
                        fill="#FFF6E0"
                        stroke="#FFF6E0"
                      />
                    </svg>
                    <p className="text-base">Project Timeline</p>
                  </div>
                </Link>
                <Link href={'#positions'}>
                  <div className="px-3 py-1 bg-transparent rounded-full border border-brown-1 flex gap-1">
                    <svg className="w-6 h-6 mx-auto" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 28 20" fill="none">
                      <g clip-path="url(#clip0_343_8)">
                        <path
                          d="M17.5 12.5C14.1625 12.5 7.5 14.1625 7.5 17.5V20H27.5V17.5C27.5 14.1625 20.8375 12.5 17.5 12.5ZM6.25 7.5V3.75H3.75V7.5H0V10H3.75V13.75H6.25V10H10V7.5M17.5 10C18.8261 10 20.0979 9.47322 21.0355 8.53553C21.9732 7.59785 22.5 6.32608 22.5 5C22.5 3.67392 21.9732 2.40215 21.0355 1.46447C20.0979 0.526784 18.8261 0 17.5 0C16.1739 0 14.9021 0.526784 13.9645 1.46447C13.0268 2.40215 12.5 3.67392 12.5 5C12.5 6.32608 13.0268 7.59785 13.9645 8.53553C14.9021 9.47322 16.1739 10 17.5 10Z"
                          fill="#FFF6E0"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_343_8">
                          <rect width="27.5" height="20" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                    <p className="text-base">Available Positions</p>
                  </div>
                </Link>
                <Link href={'#project-list'}>
                  <div className="px-3 py-1 bg-transparent rounded-full border border-brown-1 flex gap-1">
                    <svg className="w-6 h-6 mx-auto" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                      <g clip-path="url(#clip0_160_74)">
                        <path
                          d="M0 3.125C0 2.08984 0.839844 1.25 1.875 1.25H5.625C6.66016 1.25 7.5 2.08984 7.5 3.125V3.75H15V3.125C15 2.08984 15.8398 1.25 16.875 1.25H20.625C21.6602 1.25 22.5 2.08984 22.5 3.125V6.875C22.5 7.91016 21.6602 8.75 20.625 8.75H16.875C15.8398 8.75 15 7.91016 15 6.875V6.25H7.5V6.875C7.5 6.94141 7.49609 7.00781 7.48828 7.07031L10.625 11.25H14.375C15.4102 11.25 16.25 12.0898 16.25 13.125V16.875C16.25 17.9102 15.4102 18.75 14.375 18.75H10.625C9.58984 18.75 8.75 17.9102 8.75 16.875V13.125C8.75 13.0586 8.75391 12.9922 8.76172 12.9297L5.625 8.75H1.875C0.839844 8.75 0 7.91016 0 6.875V3.125Z"
                          fill="#FFF6E0"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_160_74">
                          <rect width="22.5" height="20" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                    <p className="text-base">Project List</p>
                  </div>
                </Link>
                <Link href={'#general'}>
                  <div className="px-3 py-1 bg-transparent rounded-full border border-brown-1 flex gap-1">
                    <svg className="w-6 h-6 mx-auto" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M6.25 5.625H8.75M6.25 10H13.75M6.25 12.5H13.75M6.25 15H8.75M5 18.125H15C15.3315 18.125 15.6495 17.9933 15.8839 17.7589C16.1183 17.5245 16.25 17.2065 16.25 16.875V3.125C16.25 2.79348 16.1183 2.47554 15.8839 2.24112C15.6495 2.0067 15.3315 1.875 15 1.875H5C4.66848 1.875 4.35054 2.0067 4.11612 2.24112C3.8817 2.47554 3.75 2.79348 3.75 3.125V16.875C3.75 17.2065 3.8817 17.5245 4.11612 17.7589C4.35054 17.9933 4.66848 18.125 5 18.125Z"
                        stroke="#FFF6E0"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M13.75 5.9375C13.9226 5.9375 14.0625 5.79759 14.0625 5.625C14.0625 5.45241 13.9226 5.3125 13.75 5.3125C13.5774 5.3125 13.4375 5.45241 13.4375 5.625C13.4375 5.79759 13.5774 5.9375 13.75 5.9375Z"
                        fill="#FFF6E0"
                        stroke="#FFF6E0"
                      />
                    </svg>
                    <p className="text-base">General Reqirements</p>
                  </div>
                </Link>
              </div>
            </div>
            <br />
          </div>
          <div className="hidden md:block">
            <Image src={'/oprec-volunteer/dots-5.png'} alt="dots" width={100} height={100} className="absolute w-12 left-0 -bottom-9" />
          </div>
        </div>
        <div className="hidden md:w-1/2 md:block relative">
          <div className="flex relative">
            <div className="hidden md:block">
              <Image src={'/oprec-volunteer/bejo-1.png'} alt="people" width={461} height={431} className="mt-64 mx-auto" />
              <div className="absolute top-0 right-0 overflow-hidden" style={{ width: '100%', height: '100%' }}>
                <div className="relative w-full h-full">
                  <Image src={'/oprec-volunteer/lingkaran-2.png'} alt="lingkaran" width={400} height={400} className="absolute -top-40 -right-36 object-cover" />
                </div>
              </div>
            </div>
          </div>
          <div className="absolute bottom-0 right-0 overflow-hidden" style={{ width: '50%', height: '50%' }}>
            <div className="relative w-full h-full">
              <Image src={'/oprec-volunteer/dots-group.png'} alt="dots-2" width={150} height={150} className="absolute bottom-40 -right-10 object-cover" />
            </div>
          </div>
        </div>
      </div>
      {/* Button dan Orang Mobile */}
      <div className="md:hidden block my-12 pb-32">
        <Image src={'/oprec-mobile/line-2-mobile.png'} alt="line 2" width={548} height={344} className="object-cover absolute w-full md:hidden block" />
        <div className="flex relative">
          <div className="w-1/2 ml-2 mt-6">
            <Image src={'/oprec-mobile/bejo-2.png'} alt="bejo" width={2000} height={2000} className="mx-auto" />
          </div>
          <div className="relative text-sm">
            <Image src={'/oprec-mobile/dots-2-mobile.png'} alt="dots 3" width={300} height={300} className="object-cover absolute w-10 top-64 ml-36" />
            <p className="text-sm ml-2 mt-5 mb-3 text-end">Skip ahead & choose!</p>
            <div className="flex flex-col gap-2">
              <Link href={'#timeline'}>
                <div className="mx-auto px-3 py-1 bg-transparent rounded-l-full border border-brown-1 flex gap-1 justify-end items-end ml-9">
                  <svg className="my-auto w-6 h-6 pt-1" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M6.66667 15.8333H14.5833C16.25 15.8333 17.5 14.5833 17.5 12.9166C17.5 11.25 16.25 9.99998 14.5833 9.99998H12.9167H5.41667C3.75 9.99998 2.5 8.74998 2.5 7.08331C2.5 5.41665 3.75 4.16665 5.41667 4.16665L17.5 4.16665"
                      stroke="#FFF6E0"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path d="M15.4167 6.25L17.5001 4.16667L15.4167 2.08333" stroke="#FFF6E0" stroke-linecap="round" stroke-linejoin="round" />
                    <path
                      d="M2.50008 15.8333C2.50008 16.9839 3.43282 17.9167 4.58341 17.9167C5.73401 17.9167 6.66675 16.9839 6.66675 15.8333C6.66675 14.6827 5.73401 13.75 4.58341 13.75C3.43282 13.75 2.50008 14.6827 2.50008 15.8333Z"
                      fill="#FFF6E0"
                      stroke="#FFF6E0"
                    />
                  </svg>
                  <p className="text-xs my-auto text-end">Project Timeline</p>
                </div>
              </Link>
              <Link href={'#project-list'}>
                <div className="mx-auto px-3 py-1 bg-transparent rounded-l-full border border-brown-1 flex gap-1 justify-end items-end ml-[60px]">
                  <svg xmlns="http://www.w3.org/2000/svg" className="my-auto w-6 h-6 pt-1" width="20" height="20" viewBox="0 0 18 14" fill="none">
                    <path
                      d="M0 1.65279C0 0.84767 0.653212 0.194458 1.45833 0.194458H4.375C5.18012 0.194458 5.83333 0.84767 5.83333 1.65279V2.1389H11.6667V1.65279C11.6667 0.84767 12.3199 0.194458 13.125 0.194458H16.0417C16.8468 0.194458 17.5 0.84767 17.5 1.65279V4.56946C17.5 5.37458 16.8468 6.02779 16.0417 6.02779H13.125C12.3199 6.02779 11.6667 5.37458 11.6667 4.56946V4.08335H5.83333V4.56946C5.83333 4.62111 5.8303 4.67276 5.82422 4.72137L8.26389 7.97224H11.1806C11.9857 7.97224 12.6389 8.62545 12.6389 9.43057V12.3472C12.6389 13.1524 11.9857 13.8056 11.1806 13.8056H8.26389C7.45877 13.8056 6.80556 13.1524 6.80556 12.3472V9.43057C6.80556 9.37892 6.80859 9.32727 6.81467 9.27866L4.375 6.02779H1.45833C0.653212 6.02779 0 5.37458 0 4.56946V1.65279Z"
                      fill="#FFF6E0"
                    />
                  </svg>
                  <p className="text-xs my-auto">Project List</p>
                </div>
              </Link>
              <Link href={'#general'}>
                <div className="mx-auto px-3 py-1 bg-transparent rounded-l-full border border-brown-1 flex gap-1 justify-end items-end">
                  <svg className="my-auto w-6 h-6 pt-1" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M6.25 5.625H8.75M6.25 10H13.75M6.25 12.5H13.75M6.25 15H8.75M5 18.125H15C15.3315 18.125 15.6495 17.9933 15.8839 17.7589C16.1183 17.5245 16.25 17.2065 16.25 16.875V3.125C16.25 2.79348 16.1183 2.47554 15.8839 2.24112C15.6495 2.0067 15.3315 1.875 15 1.875H5C4.66848 1.875 4.35054 2.0067 4.11612 2.24112C3.8817 2.47554 3.75 2.79348 3.75 3.125V16.875C3.75 17.2065 3.8817 17.5245 4.11612 17.7589C4.35054 17.9933 4.66848 18.125 5 18.125Z"
                      stroke="#FFF6E0"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M13.75 5.9375C13.9226 5.9375 14.0625 5.79759 14.0625 5.625C14.0625 5.45241 13.9226 5.3125 13.75 5.3125C13.5774 5.3125 13.4375 5.45241 13.4375 5.625C13.4375 5.79759 13.5774 5.9375 13.75 5.9375Z"
                      fill="#FFF6E0"
                      stroke="#FFF6E0"
                    />
                  </svg>
                  <p className="text-xs my-auto">General Requirements</p>
                </div>
              </Link>
              <Link href={'#positions'}>
                <div className="mx-auto px-3 py-1 bg-transparent rounded-l-full border border-brown-1 flex gap-1 justify-end items-end ml-5">
                  <svg xmlns="http://www.w3.org/2000/svg" className="my-auto w-6 h-6 pt-1" width="20" height="20" viewBox="0 0 20 14" fill="none">
                    <path
                      d="M12.25 8.75C9.91375 8.75 5.25 9.91375 5.25 12.25V14H19.25V12.25C19.25 9.91375 14.5863 8.75 12.25 8.75ZM4.375 5.25V2.625H2.625V5.25H0V7H2.625V9.625H4.375V7H7V5.25M12.25 7C13.1783 7 14.0685 6.63125 14.7249 5.97487C15.3813 5.3185 15.75 4.42826 15.75 3.5C15.75 2.57174 15.3813 1.6815 14.7249 1.02513C14.0685 0.368749 13.1783 0 12.25 0C11.3217 0 10.4315 0.368749 9.77513 1.02513C9.11875 1.6815 8.75 2.57174 8.75 3.5C8.75 4.42826 9.11875 5.3185 9.77513 5.97487C10.4315 6.63125 11.3217 7 12.25 7Z"
                      fill="#FFF6E0"
                    />
                  </svg>
                  <p className="text-xs my-auto">Available Positions</p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* Dashboard End */}
      {/* Project Timeline Start */}
      <div id="timeline" className="flex justify-center items-center md:mt-60">
        <div className="hidden md:block">
          <div
            className="bg-cover bg-center h-72 w-80 text-center items-center justify-center flex flex-col"
            style={{
              backgroundImage: 'url(/oprec-volunteer/bulet-abstrak-2.png)',
            }}
          >
            <h1 className="md:text-6xl font-bold whitespace-nowrap">Project Timeline</h1>
            <p className="whitespace-nowrap overflow-hidden pt-2 md:text-sm">
              Agar tidak ketinggalan informasi terbaru, yuk, simpan <br /> tanggal-tanggal penting di timeline ini!
            </p>
          </div>
        </div>
        <div className="md:hidden block">
          <div className="text-center items-center justify-center flex flex-col pb-4">
            <h1 className="text-3xl font-bold whitespace-nowrap z-10 mt-20">Project Timeline</h1>
            <p className="whitespace-nowrap overflow-hidden pt-2 text-xs z-10">Simpan tanggal-tanggal penting dibawah ini!</p>
          </div>
          <div className="relative">
            <Image src={'/oprec-mobile/lingkaran-mobile.png'} alt="lingkaran mobile" width={1500} height={1500} className="object-cover w-40 absolute -left-20 -top-56" />
          </div>
        </div>
      </div>
      {/* project timeline codingan */}
      {/* <div
        className="flex mx-auto bg-cover bg-no-repeat w-[1425px] h-[588px]"
        style={{ backgroundImage: "url(/oprec-volunteer/line-8.png)" }}
      >
        <div
          className="w-[360px] h-[192px] bg-no-repeat ml-[49px] pt-[80.61px]"
          style={{ backgroundImage: "url(/oprec-volunteer/timeline-1.png)" }}
        >
          <Image
            src={"/oprec-volunteer/kalender.png"}
            alt="kalender"
            width={100}
            height={100}
            className="pt-[260px]"
          />
        </div>
        <div
          className="w-[321px] h-[171px] bg-no-repeat ml-[-240px] mt-[368px]"
          style={{ backgroundImage: "url(/oprec-volunteer/timeline-2.png)" }}
        >
          <Image
            src={"/oprec-volunteer/folder.png"}
            alt="folder"
            width={100}
            height={100}
            className="ml-[220px] mt-[-450px]"
          />
        </div>
        <div
          className="w-[462px] h-[91px] bg-no-repeat ml-[150px] mt-[32px]"
          style={{ backgroundImage: "url(/oprec-volunteer/timeline-3.png)" }}
        >
          <Image
            src={"/oprec-volunteer/ceklis.png"}
            alt="ceklis"
            width={100}
            height={100}
            className="mt-[120px] ml-[-70px]"
          />
        </div>
        <div
          className="w-[423px] h-[198px] bg-no-repeat ml-[-410px] mt-[200px]"
          style={{ backgroundImage: "url(/oprec-volunteer/timeline-4.png)" }}
        >
          <Image
            src={"/oprec-volunteer/megaphone.png"}
            alt="speaker"
            width={120}
            height={120}
            className="mt-[230px] ml-[80px]"
          />
        </div>
        <div
          className="w-[467px] h-[135px] bg-no-repeat ml-[-200px] mt-[440px]"
          style={{ backgroundImage: "url(/oprec-volunteer/timeline-5.png)" }}
        >
          <Image
            src={"/oprec-volunteer/target.png"}
            alt="target"
            width={100}
            height={100}
            className="ml-[270px] mt-[-360px]"
          />
          <Image
            src={"/oprec-volunteer/dots-group.png"}
            alt="dots group"
            width={150}
            height={150}
            className="ml-[390px] mt-[100px]"
          />
        </div>
      </div> */}
      {/* Project timeline pake gambar */}
      <div className="md:w-full md:mt-5 hidden md:block">
        <Image src={'/oprec-volunteer/project-frame.png'} alt="dots group" width={1439} height={150} className="mx-auto w-full" />
      </div>
      {/* Timeline Mobile Start */}
      <div className="relative md:hidden block w-full mt-5">
        <Image src={'/oprec-mobile/timeline-mobile-2.png'} alt="timeline mobile" width={422} height={650} className="mx-auto w-full" />
      </div>
      {/* Timeline Mobile End */}
      <br />
      <div className="relative pt-3">
        <div className="md:w-[320px] md:h-[120px] w-2/3 h-36 flex main items-start flex-column rounded-e-[24px] shadow-md">
          <div className=" text-md m-auto">
            Hubungi untuk informasi lebih lanjut
            <div className="flex gap-3 mt-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
                <g clip-path="url(#clip0_49_303)">
                  <path
                    d="M0.0557861 24.7193L1.74422 18.5604C0.703599 16.7539 0.153755 14.712 0.153755 12.6111C0.153755 6.05325 5.49422 0.718872 12.0459 0.718872C15.2269 0.718872 18.2114 1.9559 20.4628 4.20731C22.7077 6.45215 23.9447 9.44325 23.9447 12.6176C23.9447 19.1754 18.6042 24.5098 12.0525 24.5098H12.0459C10.0561 24.5098 8.09954 24.0125 6.36516 23.0632L0.0557861 24.7193ZM6.65297 20.9168L7.01297 21.1329C8.53125 22.0362 10.2722 22.5073 12.0459 22.5139H12.0525C17.5045 22.5139 21.9352 18.0828 21.9352 12.6312C21.9352 9.987 20.9077 7.50637 19.0425 5.64122C17.1773 3.77606 14.6967 2.742 12.0525 2.742C6.60047 2.742 2.16329 7.17309 2.16329 12.6247C2.16329 14.4898 2.68688 16.3095 3.675 17.8868L3.91079 18.26L2.90954 21.9054L6.65297 20.9168Z"
                    fill="#FFF6E0"
                  />
                  <path
                    d="M0.467819 24.3068L2.09766 18.3575C1.08985 16.6165 0.566257 14.6398 0.566257 12.6176C0.566257 6.28856 5.71688 1.13794 12.0459 1.13794C15.1153 1.13794 18.0019 2.3356 20.168 4.50216C22.3345 6.67528 23.5322 9.55481 23.5256 12.6242C23.5256 18.9533 18.375 24.1039 12.0459 24.1039H12.0394C10.1152 24.1039 8.23032 23.6197 6.55501 22.7098L0.467819 24.3068Z"
                    fill="url(#paint0_linear_49_303)"
                  />
                  <path
                    d="M0.0557861 24.7193L1.74422 18.5604C0.703599 16.7539 0.153755 14.712 0.153755 12.6111C0.153755 6.05325 5.49422 0.718872 12.0459 0.718872C15.2269 0.718872 18.2114 1.9559 20.4628 4.20731C22.7077 6.45215 23.9447 9.44325 23.9447 12.6176C23.9447 19.1754 18.6042 24.5098 12.0525 24.5098H12.0459C10.0561 24.5098 8.09954 24.0125 6.36516 23.0632L0.0557861 24.7193ZM6.65297 20.9168L7.01297 21.1329C8.53125 22.0362 10.2722 22.5073 12.0459 22.5139H12.0525C17.5045 22.5139 21.9352 18.0828 21.9352 12.6312C21.9352 9.987 20.9077 7.50637 19.0425 5.64122C17.1773 3.77606 14.6967 2.742 12.0525 2.742C6.60047 2.742 2.16329 7.17309 2.16329 12.6247C2.16329 14.4898 2.68688 16.3095 3.675 17.8868L3.91079 18.26L2.90954 21.9054L6.65297 20.9168Z"
                    fill="url(#paint1_linear_49_303)"
                  />
                  <path
                    d="M9.07453 7.64374C8.85188 7.1464 8.61656 7.13983 8.40703 7.13327C8.23688 7.12671 8.03391 7.12671 7.8375 7.12671C7.64109 7.12671 7.32047 7.1989 7.04578 7.49983C6.77109 7.79421 6.00516 8.51421 6.00516 9.98046C6.00516 11.4401 7.07203 12.8534 7.21594 13.0564C7.36641 13.2528 9.27094 16.3484 12.2948 17.5395C14.8083 18.5276 15.3188 18.3312 15.8616 18.2858C16.4048 18.2333 17.6222 17.5658 17.8706 16.872C18.1195 16.1783 18.1195 15.5825 18.0408 15.4583C17.9686 15.3341 17.7661 15.2619 17.4713 15.1114C17.1769 14.9609 15.7106 14.2409 15.4425 14.143C15.1678 14.045 14.9714 13.9925 14.775 14.2934C14.5786 14.5878 14.0091 15.2619 13.8323 15.4583C13.6622 15.6547 13.4855 15.6809 13.1911 15.5305C12.8967 15.38 11.9344 15.0659 10.8023 14.0576C9.91875 13.2725 9.32344 12.297 9.14672 12.0026C8.97656 11.7083 9.12703 11.5447 9.2775 11.3942C9.40828 11.2634 9.57188 11.0473 9.72235 10.8706C9.87281 10.6939 9.91875 10.5762 10.0167 10.3733C10.1147 10.1769 10.0692 10.0001 9.99047 9.84968C9.91875 9.69874 9.34266 8.23296 9.07453 7.64374Z"
                    fill="#FFF6E0"
                  />
                </g>
                <defs>
                  <linearGradient id="paint0_linear_49_303" x1="11.9967" y1="24.307" x2="11.9967" y2="1.13822" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#20B038" />
                    <stop offset="1" stop-color="#60D66A" />
                  </linearGradient>
                  <linearGradient id="paint1_linear_49_303" x1="12" y1="24.7193" x2="12" y2="0.719341" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#F9F9F9" />
                    <stop offset="1" stop-color="white" />
                  </linearGradient>
                  <clipPath id="clip0_49_303">
                    <rect width="24" height="24" fill="white" transform="translate(0 0.72168)" />
                  </clipPath>
                </defs>
              </svg>
              +62-8517-3330-443 (Iqbal)
            </div>
            <div className="flex gap-3 mt-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
                <g clip-path="url(#clip0_49_343)">
                  <path d="M20.4 0.72168H3.6C1.61177 0.72168 0 2.33345 0 4.32168V21.1217C0 23.1099 1.61177 24.7217 3.6 24.7217H20.4C22.3882 24.7217 24 23.1099 24 21.1217V4.32168C24 2.33345 22.3882 0.72168 20.4 0.72168Z" fill="#00B900" />
                  <path
                    d="M20.7656 11.5498C20.6719 13.6592 19.7812 15.1123 18.375 16.3779C15.8906 18.5811 11.9531 21.2998 11.4375 20.8779C10.9219 20.2217 12.4219 18.6748 10.5 18.4404C6.375 17.8779 3.23438 14.9717 3.23438 11.5498C3.23438 7.70605 7.21875 4.51855 12.0469 4.51855C16.875 4.51855 20.9062 7.70605 20.7656 11.5498Z"
                    fill="#FFF6E0"
                  />
                  <path
                    d="M17.3906 11.5967H15.7969M17.3906 9.90918H15.7031V13.2842H17.3906M11.625 13.2842V9.90918L14.1562 13.2842V9.90918M9.98438 13.2842V9.90918M6.89062 9.90918V13.2842H8.625"
                    stroke="#00B900"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_49_343">
                    <rect width="24" height="24" fill="white" transform="translate(0 0.72168)" />
                  </clipPath>
                </defs>
              </svg>
              @baliqstic (Iqbal)
            </div>
          </div>
        </div>
      </div>
      {/* Project Timeline End */}
      {/* Project List Start */}
      <div id="project-list" className="md:w-full flex flex-col justify-center items-center mt-12 md:mt-36">
        <div className="mb-7 md:mb-20 z-10">
          <h1 className="text-center text-3xl md:text-6xl font-bold whitespace-nowrap mt-20">Project List</h1>
          <p className="md:pt-2 text-center md:text-sm text-xs">
            Proyek kerja kami membutuhkan bantuanmu,
            <br /> Yuk ramaikan acara-acara proyek kerja ini!
          </p>
        </div>
        <div className="">
          <Image src={'/oprec-mobile/lingkaran-2.png'} alt="set-lingkaran" width={500} height={500} className="w-64 md:w-96 -mt-52 md:ml-[325px] md:-mt-96 -ml-16 absolute" />
          <Image src={'/oprec-mobile/lingkaran-3.png'} alt="set-lingkaran" width={500} height={500} className="w-64 md:w-96 mt-96 -ml-48 md:-ml-[710px] md:-mt-7 absolute" />
        </div>
        <div className="grid grid-rows-1 gap-7 z-10">
          <div className="w-5/6 md:w-2/3 mx-auto flex flex-col">
            <div className="bg-[#270548] w-full h-26 px-8 py-7 rounded-t-[48px]">
              <h2 className="text-3xl md:text-5xl font-bold whitespace-nowrap">HEROES X</h2>
              <p className="text-xs md:text-sm pt-1">Hero of Educational and Social X</p>
            </div>
            <div className="px-7 md:px-auto py-7 backdrop-blur-[6.300000190734863px] bg-[#FFFFFF1A] rounded-b-[48px] bg-cover bg-no-repeat" style={{ backgroundImage: 'url(/oprec-volunteer/list-bg-1.png)' }}>
              <p className="text-sm md:text-lg text-justify">
                HEROES X (Hero of Education and Social X) adalah kegiatan bakti sosial yang dilaksanakan oleh Mahasiswa/i FIKTI UG di wilayah yang memiliki suatu permasalahan dalam keseharian. Acara ini terdapat kegiatan seperti melakukan
                sosialisasi tentang teknologi, kerja bakti, dan kegiatan sosial lainnya. Kegiatan akan berlangsung selama 3 hari.
              </p>
            </div>
          </div>
          <div className="w-5/6 md:w-2/3 mx-auto flex flex-col">
            <div className="bg-[#270548] w-full h-26 px-8 py-7 rounded-t-[48px]">
              <h2 className="text-3xl md:text-5xl font-bold whitespace-nowrap">TECHNOFAIR 11.0</h2>
            </div>
            <div className="px-7 md:px-auto py-7 backdrop-blur-[6.300000190734863px] bg-[#FFFFFF1A] rounded-b-[48px] bg-cover bg-no-repeat" style={{ backgroundImage: 'url(/oprec-volunteer/list-bg-2.png)' }}>
              <p className="text-sm md:text-lg text-justify">
                TechnoFair adalah program kerja unggulan Departemen akademik BEM FIKTI dan merupakan event IT terbesar di FIKTI yang dilaksanakan setiap tahun untuk mewadahi mahasiswa FIKTI UG dalam menyalurkan minat dan bakat di bidang
                akademik. Event ini berisi rangkaian acara berupa seminar, workshop, dan kompetisi.
              </p>
            </div>
          </div>
          <div className="w-5/6 md:w-2/3 mx-auto flex flex-col">
            <div className="bg-[#270548] w-full h-26 px-8 py-7 rounded-t-[48px]">
              <h2 className="text-3xl md:text-5xl font-bold whitespace-nowrap">FIKTI SPACE 3.0</h2>
              <p className="text-xs md:text-sm pt-1">FIKTI Sport & Art Championship</p>
            </div>
            <div className="px-7 md:px-auto py-7 backdrop-blur-[6.300000190734863px] bg-[#FFFFFF1A] rounded-b-[48px] bg-cover bg-no-repeat" style={{ backgroundImage: 'url(/oprec-volunteer/list-bg-3.png)' }}>
              <p className="text-sm md:text-lg text-justify">
                FIKTI SPACE (FIKTI Sport & Art Championship) adalah suatu rangkaian acara gabungan dari dua proker BEM FIKTI UG sebelumnya yaitu FAF dan FOSC berupa kompetisi olahraga dan seni budaya yang dilaksanakan oleh BEM FIKTI UG guna
                meningkatkan rasa sportivitas dan kreatifitas.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* Project List End */}
      <div className="py-20">
        <Image src={'/oprec-mobile/line-3-mobile.png'} alt="line" width={471} height={804} className="md:hidden block object-cover absolute w-full mx-auto " />
        {/* General Requirements Start */}
        <div className="md:block hidden relative">
          <Image src={'/oprec-mobile/dots-3.png'} alt="dots" width={170} height={90} className="w-24 ml-[1325px] mt-12 absolute" />
        </div>
        <div className="hidden md:block">
          <Image src={'/oprec-mobile/line-9.png'} alt="line" width={1509} height={1011} className="w-full absolute -mt-7" />
        </div>
        <div id="general" className="relative pb-28 pt-28 md:pt-24 md:pb-48">
          <div className="flex justify-end mt-7">
            <div className="hidden md:block pr-12">
              <Image src={'/oprec-mobile/bejo-4.png'} alt="bejo dekstop" width={600} height={600} className="w-full" />
            </div>
            <div className="bg-[#662549] md:w-1/2 w-5/6 md:h-[623px] md:rounded-l-[150px] rounded-l-[44px] z-10">
              <div className="md:ml-9 py-7 px-8 md:py-20">
                <div className="md:text-center">
                  <h1 className="font-bold md:text-5xl text-2xl">General Requirements</h1>
                  <p className="text-center font-light md:text-lg text-xs">Penuhi syarat dibawah ini untuk meningkatkan peluang diterima sebagai relawan di program kerja</p>
                </div>
                <div className="py-7 gap-4 grid md:my-2">
                  <div className="gap-3 flex">
                    <Image src={'/oprec-mobile/toggle-mobile.png'} alt="toggle" width={38} height={18} className="md:w-12 md:h-8 w-8 h-4" />
                    <p className="text-xs text-justify md:text-lg">Mahasiswa aktif FIKTI Universitas Gunadarma</p>
                  </div>
                  <div className="gap-3 flex">
                    <Image src={'/oprec-mobile/toggle-mobile.png'} alt="toggle" width={38} height={18} className="md:w-12 md:h-8 w-10 h-4" />
                    <p className="text-xs text-justify md:text-lg">Memiliki minat dan kompetensi yang relevan dengan program volunteer yang akan dilaksanakan</p>
                  </div>
                  <div className="gap-3 flex">
                    <Image src={'/oprec-mobile/toggle-mobile.png'} alt="toggle" width={38} height={18} className="md:w-12 md:h-8 w-10 h-4" />
                    <p className="text-xs text-justify md:text-lg">Bersedia dan berkomitmen untuk menjadi bagian dari kepanitiaan acara dan melaksanakan tugas-tugas dengan penuh tanggung jawab</p>
                  </div>
                  <div className="gap-3 flex">
                    <Image src={'/oprec-mobile/toggle-mobile.png'} alt="toggle" width={38} height={18} className="md:w-12 md:h-8 w-10 h-4" />
                    <p className="text-xs text-justify md:text-lg">Memiliki kemampuan kerja sama tim, manajemen waktu, dan pemprioritasan yang baik.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="md:block hidden">
            <Image src={'/oprec-mobile/dots-3.png'} alt="dots" width={170} height={90} className="w-24 ml-2 mt-10 absolute" />
          </div>
        </div>
        <div className="relative -mt-20 md:-mt-48 md:pb-32 flex justify-end">
          <div className="md:w-[320px] md:h-[120px] w-2/3 h-36 flex main items-start flex-column rounded-l-[24px] shadow-md">
            <div className=" text-md m-auto">
              Hubungi untuk informasi lebih lanjut
              <div className="flex gap-3 mt-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
                  <g clip-path="url(#clip0_49_303)">
                    <path
                      d="M0.0557861 24.7193L1.74422 18.5604C0.703599 16.7539 0.153755 14.712 0.153755 12.6111C0.153755 6.05325 5.49422 0.718872 12.0459 0.718872C15.2269 0.718872 18.2114 1.9559 20.4628 4.20731C22.7077 6.45215 23.9447 9.44325 23.9447 12.6176C23.9447 19.1754 18.6042 24.5098 12.0525 24.5098H12.0459C10.0561 24.5098 8.09954 24.0125 6.36516 23.0632L0.0557861 24.7193ZM6.65297 20.9168L7.01297 21.1329C8.53125 22.0362 10.2722 22.5073 12.0459 22.5139H12.0525C17.5045 22.5139 21.9352 18.0828 21.9352 12.6312C21.9352 9.987 20.9077 7.50637 19.0425 5.64122C17.1773 3.77606 14.6967 2.742 12.0525 2.742C6.60047 2.742 2.16329 7.17309 2.16329 12.6247C2.16329 14.4898 2.68688 16.3095 3.675 17.8868L3.91079 18.26L2.90954 21.9054L6.65297 20.9168Z"
                      fill="#FFF6E0"
                    />
                    <path
                      d="M0.467819 24.3068L2.09766 18.3575C1.08985 16.6165 0.566257 14.6398 0.566257 12.6176C0.566257 6.28856 5.71688 1.13794 12.0459 1.13794C15.1153 1.13794 18.0019 2.3356 20.168 4.50216C22.3345 6.67528 23.5322 9.55481 23.5256 12.6242C23.5256 18.9533 18.375 24.1039 12.0459 24.1039H12.0394C10.1152 24.1039 8.23032 23.6197 6.55501 22.7098L0.467819 24.3068Z"
                      fill="url(#paint0_linear_49_303)"
                    />
                    <path
                      d="M0.0557861 24.7193L1.74422 18.5604C0.703599 16.7539 0.153755 14.712 0.153755 12.6111C0.153755 6.05325 5.49422 0.718872 12.0459 0.718872C15.2269 0.718872 18.2114 1.9559 20.4628 4.20731C22.7077 6.45215 23.9447 9.44325 23.9447 12.6176C23.9447 19.1754 18.6042 24.5098 12.0525 24.5098H12.0459C10.0561 24.5098 8.09954 24.0125 6.36516 23.0632L0.0557861 24.7193ZM6.65297 20.9168L7.01297 21.1329C8.53125 22.0362 10.2722 22.5073 12.0459 22.5139H12.0525C17.5045 22.5139 21.9352 18.0828 21.9352 12.6312C21.9352 9.987 20.9077 7.50637 19.0425 5.64122C17.1773 3.77606 14.6967 2.742 12.0525 2.742C6.60047 2.742 2.16329 7.17309 2.16329 12.6247C2.16329 14.4898 2.68688 16.3095 3.675 17.8868L3.91079 18.26L2.90954 21.9054L6.65297 20.9168Z"
                      fill="url(#paint1_linear_49_303)"
                    />
                    <path
                      d="M9.07453 7.64374C8.85188 7.1464 8.61656 7.13983 8.40703 7.13327C8.23688 7.12671 8.03391 7.12671 7.8375 7.12671C7.64109 7.12671 7.32047 7.1989 7.04578 7.49983C6.77109 7.79421 6.00516 8.51421 6.00516 9.98046C6.00516 11.4401 7.07203 12.8534 7.21594 13.0564C7.36641 13.2528 9.27094 16.3484 12.2948 17.5395C14.8083 18.5276 15.3188 18.3312 15.8616 18.2858C16.4048 18.2333 17.6222 17.5658 17.8706 16.872C18.1195 16.1783 18.1195 15.5825 18.0408 15.4583C17.9686 15.3341 17.7661 15.2619 17.4713 15.1114C17.1769 14.9609 15.7106 14.2409 15.4425 14.143C15.1678 14.045 14.9714 13.9925 14.775 14.2934C14.5786 14.5878 14.0091 15.2619 13.8323 15.4583C13.6622 15.6547 13.4855 15.6809 13.1911 15.5305C12.8967 15.38 11.9344 15.0659 10.8023 14.0576C9.91875 13.2725 9.32344 12.297 9.14672 12.0026C8.97656 11.7083 9.12703 11.5447 9.2775 11.3942C9.40828 11.2634 9.57188 11.0473 9.72235 10.8706C9.87281 10.6939 9.91875 10.5762 10.0167 10.3733C10.1147 10.1769 10.0692 10.0001 9.99047 9.84968C9.91875 9.69874 9.34266 8.23296 9.07453 7.64374Z"
                      fill="#FFF6E0"
                    />
                  </g>
                  <defs>
                    <linearGradient id="paint0_linear_49_303" x1="11.9967" y1="24.307" x2="11.9967" y2="1.13822" gradientUnits="userSpaceOnUse">
                      <stop stop-color="#20B038" />
                      <stop offset="1" stop-color="#60D66A" />
                    </linearGradient>
                    <linearGradient id="paint1_linear_49_303" x1="12" y1="24.7193" x2="12" y2="0.719341" gradientUnits="userSpaceOnUse">
                      <stop stop-color="#F9F9F9" />
                      <stop offset="1" stop-color="white" />
                    </linearGradient>
                    <clipPath id="clip0_49_303">
                      <rect width="24" height="24" fill="white" transform="translate(0 0.72168)" />
                    </clipPath>
                  </defs>
                </svg>
                +62-8517-3330-443 (Iqbal)
              </div>
              <div className="flex gap-3 mt-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
                  <g clip-path="url(#clip0_49_343)">
                    <path d="M20.4 0.72168H3.6C1.61177 0.72168 0 2.33345 0 4.32168V21.1217C0 23.1099 1.61177 24.7217 3.6 24.7217H20.4C22.3882 24.7217 24 23.1099 24 21.1217V4.32168C24 2.33345 22.3882 0.72168 20.4 0.72168Z" fill="#00B900" />
                    <path
                      d="M20.7656 11.5498C20.6719 13.6592 19.7812 15.1123 18.375 16.3779C15.8906 18.5811 11.9531 21.2998 11.4375 20.8779C10.9219 20.2217 12.4219 18.6748 10.5 18.4404C6.375 17.8779 3.23438 14.9717 3.23438 11.5498C3.23438 7.70605 7.21875 4.51855 12.0469 4.51855C16.875 4.51855 20.9062 7.70605 20.7656 11.5498Z"
                      fill="#FFF6E0"
                    />
                    <path
                      d="M17.3906 11.5967H15.7969M17.3906 9.90918H15.7031V13.2842H17.3906M11.625 13.2842V9.90918L14.1562 13.2842V9.90918M9.98438 13.2842V9.90918M6.89062 9.90918V13.2842H8.625"
                      stroke="#00B900"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_49_343">
                      <rect width="24" height="24" fill="white" transform="translate(0 0.72168)" />
                    </clipPath>
                  </defs>
                </svg>
                @baliqstic (Iqbal)
              </div>
            </div>
          </div>
        </div>
        {/* General Requirements End */}
        {/* Available Positions Start */}
        <div id="positions" className="md:px-0 px-8">
          {/* Divisi mobile */}
          <div className="md:hidden block">
            <Image src={'/oprec-mobile/lingkaran-4.png'} alt="lingkaran" width={150} height={150} className="w-40 -ml-10 mt-7 absolute object-cover" />
          </div>
          <div className="pt-24 md:hidden block z-10 relative">
            <h1 className="font-bold text-2xl z-10">Available Positions</h1>
            <p className="text-sm z-10">Divisi-divisi ini membutuhkan bantuanmu, Mari ramaikan acara-acara proyek ini!</p>
          </div>
          <div className="flex relative md:pt-32">
            <div className="hidden md:block">
              <Image src={'/oprec-volunteer/persegi-panjang.png'} alt="persegi panjang" width={90} height={443} className="absolute flex justify-start z-10 pt-4" />
            </div>
            <div className="w-1/2 md:w-2/3 flex relative py-4">
              <div className="w-56 h-48 md:w-3/4 md:h-[443px] backdrop-blur-[4.199999809265137px] bg-[#FFFFFF1A] rounded-tr-3xl rounded-bl-3xl md:rounded-r-[64px] md:rounded-l-none px-3 py-3 md:py-4 gap-2 grid z-10">
                <div className="md:px-40 md:py-10 hidden md:block md:w-full md:ml-9">
                  <h1 className="font-bold text-4xl text-center">Available Positions</h1>
                  <p className="text-center text-md z-10">Divisi-divisi dibawah ini membutuhkan bantuanmu, Yuk ramaikan acara-acara proyek kerja ini!</p>
                </div>
                <div className="md:pl-40 md:-mt-32 md:flex md:justify-center md:-ml-20 md:gap-7 md:pb-12">
                  <div className="grid gap-2 md:-mt-2">
                    <button type="button">
                      <div className="flex gap-4">
                        <Image src={'/oprec-mobile/pin.png'} alt="pin" width={15} height={18} className="md:w-6 md:h-7" />
                        <p className="text-xs md:text-xl underline md:pb-1 hover:text-[#F39F5A] after:text-[#B67744]">Divisi Acara</p>
                      </div>
                    </button>
                    <button type="button">
                      <div className="flex gap-4 md:-mt-6">
                        <Image src={'/oprec-mobile/pin.png'} alt="pin" width={15} height={18} className="md:w-6 md:h-7" />
                        <p className="text-xs md:text-xl underline md:pb-1 hover:text-[#F39F5A] after:text-[#B67744]">Divisi Humas</p>
                      </div>
                    </button>
                    <button type="button">
                      <div className="flex gap-4 md:-mt-6">
                        <Image src={'/oprec-mobile/pin.png'} alt="pin" width={15} height={18} className="md:w-6 md:h-7" />
                        <p className="text-xs md:text-xl underline md:pb-1 hover:text-[#F39F5A] after:text-[#B67744]">Divisi Sponsorship</p>
                      </div>
                    </button>
                    <button type="button">
                      <div className="flex gap-4 md:-mt-6">
                        <Image src={'/oprec-mobile/pin.png'} alt="pin" width={15} height={18} className="md:w-6 md:h-7" />
                        <p className="text-xs md:text-xl underline md:pb-1 hover:text-[#F39F5A] after:text-[#B67744]">Divisi Perlengkapan</p>
                      </div>
                    </button>
                  </div>
                  <div className="mt-2 grid gap-2 md:-mt-2">
                    <button type="button">
                      <div className="flex gap-4">
                        <Image src={'/oprec-mobile/pin.png'} alt="pin" width={15} height={18} className="md:w-6 md:h-7" />
                        <p className="text-xs md:text-xl underline md:pb-1 hover:text-[#F39F5A] after:text-[#B67744]">Divisi Konsumsi</p>
                      </div>
                    </button>
                    <button type="button">
                      <div className="flex gap-4 md:-mt-11">
                        <Image src={'/oprec-mobile/pin.png'} alt="pin" width={15} height={18} className="md:w-6 md:h-7" />
                        <p className="text-xs md:text-xl underline md:pb-1 hover:text-[#F39F5A] after:text-[#B67744]">Divisi Media</p>
                      </div>
                    </button>
                    <button type="button">
                      <div className="flex gap-4 md:-mt-14">
                        <Image src={'/oprec-mobile/pin.png'} alt="pin" width={15} height={18} className="md:w-6 md:h-7" />
                        <p className="text-xs md:text-xl underline md:pb-1 hover:text-[#F39F5A] after:text-[#B67744]">Divisi Danus</p>
                      </div>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="md:hidden block">
              <Image src={'/oprec-mobile/dots-6.png'} alt="dots" width={85} height={35} className="w-28 mt-32 -ml-10 absolute" />
            </div>
            <div className="pl-10 pt-10 md:-ml-48 md:-mt-16 relative">
              <Image src={'/oprec-volunteer/bejo-5.png'} alt="bejo" width={500} height={500} className="w-full hidden md:block" />
              <Image src={'/oprec-mobile/bejo-3.png'} alt="bejo" width={130} height={180} className={`w-full md:hidden block z-10`} />
            </div>

            <div className="md:block hidden">
              <Image src={'/oprec-mobile/dots-3.png'} alt="dots" width={170} height={90} className="w-24 -ml-3 absolute" />
            </div>
            {/* Modal Box Start*/}
            {/* <div className={`relative p-4 w-full max-w-2xl max-h-full`}>
              <div className="-ml-10 relative">
                <div className="w-40 md:w-2/3 mx-auto flex flex-col">
                  <div className="bg-[#270548] w-full h-26 px-6 py-7 rounded-t-[48px]">
                    <h2 className="text-xl md:text-3xl font-bold whitespace-nowrap text-center">Divisi Acara</h2>
                  </div>
                  <div className="px-7 md:px-auto py-5 backdrop-blur-[6.300000190734863px] bg-[#FFFFFF1A] rounded-b-[48px] bg-cover bg-no-repeat">
                    <p className="text-[9px] md:text-2xl text-center">Mengatur seluruh rangkaian acara. Seperti membuat rundown acara beserta kebutuhannya, mencari pemateri, dll</p>
                  </div>
                </div>
              </div>
            </div> */}
            {/* Modal Box End */}
          </div>
        </div>
        {/* Available Positions End */}
        {/* Join Start */}
        <div className="join relative w-full pt-20 top-20 md:pt-28">
          <div className="pb-10">
            <div className="flex justify-center items-center">
              <Image src={'/oprec-volunteer/text-line.png'} alt="text line" width={128} height={22} className="absolute object-cover w-52 md:w-56 mx-auto mt-24 md:mt-28 md:mr-80" />
            </div>
            <div className="md:flex md:justify-center md:items-center md:gap-20">
              <div className="grid gap-6">
                <h1 className="text-center text-5xl font-bold z-10 font-Lato md:text-start md:text-6xl">Join us.</h1>
                <p className="text-center text-sm md:text-justify md:text-md">
                  Kami mengajak kamu untuk bergabung <br /> dengan kami dan membuat perbedaan. <br /> Daftarkan diri kamu sekarang juga!
                </p>
              </div>
              <Link href={'https://forms.gle/xC9AfiJyr8srdDZB8'}>
                <div className="flex justify-center items-center py-7">
                  <div className="flex items-center justify-center w-52 h-16 gap-2 bg-[#F39F5A] rounded-full hover:bg-[#C27F48] hover:transition-colors">
                    <button className="text-xl font-bold">Join Now!</button>
                    <svg className="" xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 21 20" fill="none">
                      <rect x="0.75" y="0.75" width="19.5" height="18.5" rx="9.25" stroke="#FFF6E0" stroke-width="1.5" />
                      <path
                        d="M7 4.57176L7 14.8575C7.00031 14.9616 7.02716 15.0637 7.07767 15.1527C7.12819 15.2417 7.20045 15.3144 7.28667 15.3627C7.3729 15.4111 7.46983 15.4334 7.56703 15.4272C7.66423 15.4211 7.75802 15.3867 7.8383 15.3278L14.784 10.1849C15.072 9.97176 15.072 9.45861 14.784 9.2449L7.8383 4.10204C7.75818 4.04251 7.66435 4.0076 7.56699 4.00111C7.46963 3.99461 7.37246 4.01678 7.28605 4.06519C7.19964 4.11361 7.12729 4.18643 7.07686 4.27574C7.02643 4.36504 6.99985 4.46742 7 4.57176Z"
                        fill="#FFF6E0"
                      />
                    </svg>
                  </div>
                </div>
              </Link>
            </div>
            <div className="">
              <Image src={'/oprec-volunteer/line-10.png'} alt="line" width={22} height={33} className="md:hidden block w-10 ml-14 -mt-5" />
              <div className="flex justify-end items-end">
                <svg className="mr-96 -mt-12" xmlns="http://www.w3.org/2000/svg" width="40" height="78" viewBox="0 0 68 105" fill="none">
                  <path
                    opacity="0.5"
                    d="M0.334608 11C0.334608 16.891 5.11024 21.6667 11.0013 21.6667C16.8923 21.6667 21.6679 16.891 21.6679 11C21.6679 5.10896 16.8923 0.333333 11.0013 0.333333C5.11024 0.333333 0.334608 5.10896 0.334608 11ZM55.3669 46.1873L53.3692 46.0926L55.3669 46.1873ZM11.0013 78.0757L13.0011 78.0501L11.0013 78.0757ZM65.9506 104.999C67.0548 105.027 67.9721 104.154 67.9994 103.049C68.0267 101.945 67.1536 101.028 66.0494 101.001L65.9506 104.999ZM11.0013 11C10.4468 12.9216 10.4466 12.9215 10.4465 12.9215C10.4467 12.9216 10.4468 12.9216 10.4472 12.9217C10.448 12.9219 10.4495 12.9224 10.4517 12.923C10.456 12.9243 10.4631 12.9263 10.4728 12.9292C10.4923 12.9349 10.5225 12.9437 10.563 12.9558C10.6441 12.9798 10.7665 13.0164 10.9276 13.0656C11.2497 13.1638 11.7261 13.3119 12.3344 13.5089C13.5513 13.9029 15.2943 14.4919 17.3849 15.2675C21.5722 16.8211 27.125 19.1128 32.629 22.0734C38.151 25.0436 43.522 28.6332 47.425 32.7487C51.3273 36.8634 53.5954 41.3182 53.3692 46.0926L57.3647 46.2819C57.6616 40.0142 54.6455 34.5494 50.3274 29.9962C46.0099 25.4436 40.2241 21.6167 34.5239 18.5507C28.8058 15.475 23.071 13.1107 18.7762 11.5173C16.6258 10.7195 14.8291 10.1122 13.5666 9.70342C12.9352 9.49897 12.437 9.34401 12.0944 9.23953C11.9232 9.18729 11.7907 9.14766 11.7 9.12077C11.6547 9.10732 11.6197 9.09705 11.5956 9.08999C11.5835 9.08645 11.5741 9.08372 11.5674 9.08178C11.5641 9.08082 11.5615 9.08005 11.5595 9.07949C11.5585 9.0792 11.5576 9.07893 11.5571 9.07879C11.5563 9.07856 11.5557 9.07839 11.0013 11ZM53.3692 46.0926C53.1588 50.5324 50.8156 53.3154 47.0078 55.4067C43.0637 57.5727 37.8164 58.838 32.236 60.1785C26.8187 61.4798 21.05 62.8591 16.6839 65.3544C14.4636 66.6233 12.5038 68.2333 11.1135 70.3614C9.70916 72.511 8.96269 75.0725 9.00144 78.1013L13.0011 78.0501C12.9716 75.7463 13.5289 73.9777 14.4622 72.5492C15.4095 71.0991 16.8214 69.883 18.6687 68.8272C22.4379 66.6731 27.5883 65.4088 33.1703 64.0679C38.5893 62.7661 44.4214 61.3905 48.9332 58.9127C53.5812 56.3601 57.0702 52.4963 57.3647 46.2819L53.3692 46.0926ZM9.00144 78.1013C9.0884 84.8988 13.1348 89.9325 18.6138 93.5796C24.0707 97.212 31.2004 99.6583 38.1478 101.322C45.1247 102.994 52.0701 103.911 57.2568 104.411C59.8541 104.662 62.0193 104.809 63.5384 104.893C64.2981 104.935 64.8967 104.961 65.3076 104.978C65.513 104.986 65.6715 104.991 65.7798 104.994C65.8339 104.996 65.8755 104.997 65.9041 104.998C65.9184 104.999 65.9295 104.999 65.9372 104.999C65.9411 104.999 65.9442 104.999 65.9464 104.999C65.9475 104.999 65.9486 104.999 65.9491 104.999C65.95 104.999 65.9506 104.999 66 103C66.0494 101.001 66.0496 101.001 66.0496 101.001C66.0494 101.001 66.0492 101.001 66.0486 101.001C66.0475 101.001 66.0456 101.001 66.0428 101C66.0374 101 66.0286 101 66.0166 101C65.9926 100.999 65.9557 100.998 65.9064 100.996C65.8076 100.993 65.659 100.988 65.4637 100.981C65.0732 100.965 64.4964 100.94 63.7599 100.899C62.2866 100.817 60.1762 100.674 57.6409 100.43C52.5625 99.9398 45.8147 99.0458 39.0796 97.4325C32.315 95.8121 25.7139 93.5007 20.8303 90.2498C15.9688 87.0138 13.0649 83.0388 13.0011 78.0501L9.00144 78.1013Z"
                    fill="#FFF6E0"
                  />
                </svg>
              </div>
              <div className="md:flex md:justify-end">
                <div className="w-40 ml-5 -mt-3 md:mr-44 md:w-48 md:-mt-5">
                  <p className="text-justify text-md font-light opacity-50">kamu akan dialihkan ke link formulir pendaftaran yang kami sediakan!</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Join End */}
      </div>
    </div>
  );
}
