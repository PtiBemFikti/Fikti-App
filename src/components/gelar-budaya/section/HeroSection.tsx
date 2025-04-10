"use client";

import { useEffect, useState } from "react";
import {
  FaMapMarkerAlt,
  FaTicketAlt,
  FaArrowRight,
  FaClock,
} from "react-icons/fa";

export default function GelbudHeroSection() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    // Set your target event date here (YYYY, MM-1, DD, HH, MM)
    const targetDate = new Date(2025, 5, 15, 19, 0); // 15 December 2024, 19:00

    const calculateTimeLeft = () => {
      const now = new Date();
      const difference = targetDate.getTime() - now.getTime();

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center text-white overflow-hidden bg-[#071D2B]">
      {/* Background pattern or image */}
      <div className="absolute inset-0 bg-[url('/gelar-budaya/bg-dummy.jpg')] bg-cover bg-center opacity-70 rounded-xl"></div>

      <div className="relative z-10 w-full max-w-6xl px-6 py-16 text-center">
        {/* Main Title */}
        <h1 className="text-4xl md:text-6xl lg:text-[5rem] font-extrabold mb-6 tracking-tight">
          GELAR BUDAYA
        </h1>

        {/* Subtitle */}
        <p className="text-xl md:text-2xl font-medium mb-2">
          Panggung Kreasi dan Kebersamaan FIKTI
        </p>

        {/* Location */}
        <p className="flex items-center justify-center gap-2">
          <FaMapMarkerAlt className="text-[#ECDCC1]" />
          Auditorium Kampus D, Ged. 4, Lt. 6 Universitas Gunadarma
        </p>

        {/* Countdown Section */}
        <div className="my-12">
          <div className="flex items-center justify-center gap-2 mb-6">
            <FaClock className="text-xl" />
            <h2 className="text-xl md:text-2xl font-medium">
              Acara Dimulai Dalam:
            </h2>
          </div>

          <div className="grid grid-cols-4 gap-3 max-w-3xl mx-auto">
            <div className="bg-[#0A263A]/80 rounded-lg px-3 py-6">
              <div className="text-2xl md:text-3xl lg:text-6xl font-bold">
                {timeLeft.days}
              </div>
              <div className="text-xs md:text-sm lg:text-base">Hari</div>
            </div>
            <div className="bg-[#0A263A]/80 rounded-lg px-3 py-6">
              <div className="text-2xl md:text-3xl lg:text-6xl font-bold">
                {timeLeft.hours}
              </div>
              <div className="text-xs md:text-sm lg:text-base">Jam</div>
            </div>
            <div className="bg-[#0A263A]/80 rounded-lg px-3 py-6">
              <div className="text-2xl md:text-3xl lg:text-6xl font-bold">
                {timeLeft.minutes}
              </div>
              <div className="text-xs md:text-sm lg:text-base">Menit</div>
            </div>
            <div className="bg-[#0A263A]/80 rounded-lg px-3 py-6">
              <div className="text-2xl md:text-3xl lg:text-6xl font-bold">
                {timeLeft.seconds}
              </div>
              <div className="text-xs md:text-sm lg:text-base">Detik</div>
            </div>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button className="bg-black hover:shadow-white hover:shadow-sm text-white font-bold py-3 px-6 md:px-8 rounded-full transition-all duration-150 flex items-center justify-center gap-2">
            <FaTicketAlt />
            Beli Tiket
          </button>

          <button className="border-2 border-white hover:bg-white/10 text-white font-bold py-3 px-6 md:px-8 rounded-full transition-all duration-300 flex items-center justify-center gap-2">
            Pelajari Lebih
            <FaArrowRight />
          </button>
        </div>
      </div>
    </section>
  );
}
