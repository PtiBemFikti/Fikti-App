"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { AkiraExpanded, Lato } from "@/styles/font";

export default function Section1() {
  return (
    <div className="pt-28">
      {/* banner */}
      <div className="px-6 md:px-10 lg:px-16 -mb-32">
        <Image
          src={"/fiktispace/Banner/Futsal.webp"}
          alt="banner"
          width={700}
          height={200}
          className="rounded-3xl w-full"
        ></Image>
      </div>
      {/* about */}
      <div className="flex flex-col lg:flex-row mt-12 pt-32 px-6 md:px-10 lg:px-16 gap-10 -mb-32 md:-mb-10" id="about">
        <div className="lg:w-1/2">
          <div className="bg-[#FECB62] rounded-2xl p-5 flex flex-col gap-y-3">
            <div className={`${Lato.className} text-[#0A2352] text-lg`}>Hello SpaceNation! Mohon untuk membaca ketentuan dan persyaratan yang tersedia pada halaman ini sebelum mendaftar ya!</div>
            {/* CP */}
            <div className="bg-[#0A2352] px-6 lg:px-12 py-6 rounded-3xl">
              <div className="flex items-center gap-2">
                <div className="bg-[#FECB62] p-0.5 rounded-2xl">
                  <Image
                    src={"/fiktispace/phone.svg"}
                    alt="banner"
                    width={70}
                    height={70}
                  ></Image>
                </div>
                <div className={`${Lato.className} text-lg md:text-4xl font-semibold`}>Contact</div>
              </div>
              <div className={`${Lato.className} mt-4 text-sm md:text-xl`}>
                Nazua&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; : +62 858-1919-1776 <br/>Nayla &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; : +62 858-8332-1315
              </div>
            </div>
            {/* HTM */}
            <div className="bg-[#0A2352] px-6 lg:px-12 py-6 rounded-3xl">
              <div className="flex items-center gap-2">
                <div className="bg-[#FECB62] p-0.5 rounded-2xl">
                  <Image
                    src={"/fiktispace/money.svg"}
                    alt="banner"
                    width={70}
                    height={70}
                  ></Image>
                </div>
                <div className={`${Lato.className} text-lg md:text-4xl font-semibold`}>Price</div>
              </div>
              <div className={`${Lato.className} mt-4 text-sm md:text-xl`}>
                Rp 200.000/Team
              </div>
            </div>
            {/* location */}
            <div className="bg-[#0A2352] px-6 lg:px-12 py-6 rounded-3xl">
              <div className="flex items-center gap-2">
                <div className="bg-[#FECB62] p-0.5 rounded-2xl">
                  <Image
                    src={"/fiktispace/location.svg"}
                    alt="banner"
                    width={70}
                    height={70}
                  ></Image>
                </div>
                <div className={`${Lato.className} text-lg md:text-4xl font-semibold`}>Location</div>
              </div>
              <div className={`${Lato.className} mt-4 text-sm md:text-xl`}>
              Sport Centre Kampus H
              </div>
            </div>
          </div>
        </div>
        <div className="lg:w-1/2">
          <div className="">
            <h1 className={`text-2xl sm:text-3xl md:text-[3rem] bg-gradient-to-r from-[#FECB62] to-white bg-clip-text text-transparent leading-none ${AkiraExpanded.className}`}>
              COMPETITION TIMELINE
            </h1>
            {/* timeline */}
            <div className="relative mt-4">
              <div className="absolute top-0 bottom-0 w-[0.25rem] bg-white"></div>{/* Garis vertikal di pinggir kiri */}
              <div className="space-y-5 pl-[1.6rem]">
                {[
                  { date: "19-28 May", title: "Registration", location: "Online" },
                  { date: "13 June", title: "Technical Meeting", location: "Online" },
                  { date: "16, 18, 21 June", title: "Competition Day", location: "On-site" },
                    ].map((item, idx) => (
                      <div key={idx} className="relative flex items-center gap-4">
                      {/* Lingkaran dan garis */}
                        <div className="absolute -left-8 items-center">
                        <div className="w-4 h-4 rounded-full bg-white"></div>
                      </div>

                      {/* Konten */}
                      <div className="flex w-full gap-2 lg:gap-6 py-2 px-2 md:px-4 items-center bg-[#FECB62]">
                        <div className="text-center w-4/12 lg:w-4/12 bg-gradient-to-r from-[#FF8797] to-[#FAACB3]">
                          <p className={`${Lato.className} text-base md:text-xl text-center font-seminold text-[#0A2352] py-1`}>{item.date}</p>
                        </div>
                        <div className="w-5/12 lg:w-6/12">
                          <p className={`${Lato.className} text-base md:text-xl text-left text-[#0A2352] font-semibold`}>{item.title}</p>
                        </div>
                        <div className="w-3/12 lg:w-2/8">
                          <p className="py-2 text-[#0A2352] text-sm md:text-xl font-semibold text-right">
                            {item.location}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </div>
          {/* daftar sekarang */}
          <div className="bg-[#FECB62] text-center items-center w-full rounded-2xl mt-4 mb-5 p-4">
            <div>
              <p className={`${Lato.className} text-2xl text-[#0A2352] font-semibold`}>Register now to be a champion!</p>
              <Link className="" href="">
                <button className="bg-[#0A2352] rounded-lg py-3 w-full md:w-[50%] lg:w-[30%] mt-3">Registration</button>
              </Link>
            </div>
          </div>
          <div className="flex justify-around">
            <Image
              src={"/fiktispace/Stella_polos.webp"}
              alt="banner"
              width={150}
              height={160}
            ></Image>
            <Image
              src={"/fiktispace/LOGO FS 4.webp"}
              alt="banner"
              width={150}
              height={150}
            ></Image>
            <Image
              src={"/fiktispace/Nebula_polos.webp"}
              alt="banner"
              width={150}
              height={140}
            ></Image>
          </div>
        </div>
      </div>
    </div>
  );
}
