"use client";

import { useEffect, useState } from "react";

export default function GelbudCountdown() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const targetDate = new Date(2025, 5, 15, 19, 0, 0); // 15 Juni 2025, 19:00

    const calculateTimeLeft = () => {
      const now = new Date();
      const difference = targetDate.getTime() - now.getTime();

      if (difference > 0) {
        const totalSeconds = Math.floor(difference / 1000);

        const days = Math.floor(totalSeconds / (60 * 60 * 24));
        const hours = Math.floor((totalSeconds % (60 * 60 * 24)) / (60 * 60));
        const minutes = Math.floor((totalSeconds % (60 * 60)) / 60);
        const seconds = totalSeconds % 60;

        setTimeLeft({
          days,
          hours,
          minutes,
          seconds,
        });
      } else {
        setTimeLeft({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
        });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex justify-center items-center my-10 px-4">
      <div className="flex flex-col md:flex-row rounded-md overflow-hidden shadow-lg border border-white/20 w-full max-w-4xl">
        {/* Bagian Kiri */}
        <div className="bg-white text-black px-6 py-6 flex items-center justify-center text-center md:w-[230px]">
          <div>
            <h2 className="text-sm font-semibold">Countdown To</h2>
            <h1 className="text-lg font-bold">Gelar Budaya 2025</h1>
          </div>
        </div>

        {/* Bagian Kanan */}
        <div className="bg-black text-white px-4 py-6 grid grid-cols-2 md:grid-cols-4 gap-4 flex-1">
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold">
              {timeLeft.days}
            </div>
            <div className="text-xs mt-2 uppercase tracking-wider">Day</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold">
              {timeLeft.hours}
            </div>
            <div className="text-xs mt-2 uppercase tracking-wider">Hours</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold">
              {timeLeft.minutes}
            </div>
            <div className="text-xs mt-2 uppercase tracking-wider">Minutes</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold">
              {timeLeft.seconds}
            </div>
            <div className="text-xs mt-2 uppercase tracking-wider">Seconds</div>
          </div>
        </div>
      </div>
    </div>
  );
}
