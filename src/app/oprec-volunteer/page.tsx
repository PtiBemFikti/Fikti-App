import React from 'react';
import Image from 'next/image';

export default function OprecPage() {
  return (
    <div className="w-full h-screen bg-purple-normal pt-14">
      {/* <Image src='/oprec-volunteer/lingkaran-2.png' alt='lingkaran' width={300} height={300} className='ml-auto top-0' /> */}
      <div className="bg-red-normal-1 w-7/12 h-5/6 rounded-e-full">
        <div className="font-Lato text-[#FFF6E0] ml-16">
          <h2 className="pt-20 text-4xl font-bold">Open Recruitment Volunteer</h2>
          <h1 className="text-7xl font-bold">Harmoni Serasi</h1>
          <br />
          <p className="text-lg">
            Program kerja yang mewadahi mahasiswa aktif FIKTI UG untuk <br /> berkontribusi dalam kepanitiaan acara dan kegiatan yang diselenggarakan <br /> oleh BEM FIKTI UG.
          </p>
          <br />
          <h4 className="text-2xl font-bold">Periode Pendaftaran:</h4>
          <h4 className="text-2xl font-bold">15 Januari 2024 - 20 Januari 2024</h4>
          <br />
          <div className="flex gap-2">
            <div className="px-3 py-1 bg-transparent rounded-full border border-brown-1 flex gap-1">
              <svg className="w-6 h-6 pt-1" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
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
              <p className="text-lg">Project Timeline</p>
            </div>
            <div className="px-3 py-1 bg-transparent rounded-full border border-brown-1 flex gap-1">
              <svg className="w-6 h-6 pt-1" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
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
              <p className="text-lg">Goals & Benefits</p>
            </div>
            <div className="px-3 py-1 bg-transparent rounded-full border border-brown-1 flex gap-1">
              <svg className='w-6 h-6 pt-1' width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_99_128)">
                  <path
                    d="M19.2573 10.7372C19.1162 12.5093 18.4695 14.2037 17.3938 15.6191C16.3181 17.0345 14.8587 18.1114 13.1891 18.7218C11.5194 19.3321 9.70957 19.4504 7.97465 19.0625C6.23973 18.6746 4.65263 17.7968 3.4019 16.5335C2.15117 15.2701 1.28939 13.6742 0.918936 11.9355C0.548483 10.1968 0.684932 8.38827 1.31207 6.72481C1.93921 5.06134 3.03068 3.61287 4.45681 2.55147C5.88294 1.49007 7.58378 0.86036 9.35726 0.737152"
                    stroke="#FFF6E0"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M13.9858 11.5572C13.7279 12.2211 13.3084 12.8104 12.7655 13.2715C12.2226 13.7327 11.5733 14.0512 10.8763 14.1984C10.1793 14.3455 9.45663 14.3166 8.77363 14.1143C8.09063 13.9119 7.46884 13.5425 6.96448 13.0394C6.46013 12.5364 6.08912 11.9155 5.88502 11.2331C5.68091 10.5506 5.65014 9.82799 5.79548 9.13063C5.94083 8.43327 6.25771 7.78314 6.71747 7.23902C7.17723 6.69491 7.76537 6.27398 8.4287 6.01429M10.0001 10L13.5716 6.42858M13.5716 6.42858L16.4287 7.14287L19.2858 4.28572L16.4287 3.57144L15.7144 0.714294L12.8573 3.57144L13.5716 6.42858Z"
                    stroke="#FFF6E0"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_99_128">
                    <rect width="20" height="20" fill="white" />
                  </clipPath>
                </defs>
              </svg>
              <p className='text-lg'>Syarat Umum Pendaftaran</p>
            </div>
          </div>
        </div>
      <Image src='/oprec-volunteer/dots-5.png' alt='dots-5' width={40} height={40} className='mt-16'/>
      </div>
    </div>
  );
}
