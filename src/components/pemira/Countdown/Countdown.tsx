"use client";
import React, { useState, useEffect, useCallback } from "react";
import { Urbanist } from "@/styles/font";

interface CountdownProps {}

interface TimeLeft {
  days?: number;
  hours?: number;
  minutes?: number;
  seconds?: number;
}

const CountDown: React.FC<CountdownProps> = () => {
  const calculateNextFriday = (): Date => {
    const now = new Date();
    const dayOfWeek = now.getDay();
    const daysUntilFriday = (5 - dayOfWeek + 7) % 7; // 5 represents Friday
    const nextFriday = new Date(now);
    nextFriday.setDate(now.getDate() + daysUntilFriday);
    nextFriday.setHours(23, 59, 0, 0); // Set to 23:59:00

    return nextFriday;
  };

  const [targetDate, setTargetDate] = useState<Date>(calculateNextFriday);

  const calculateTimeLeft = useCallback(() => {
    const difference = +targetDate - +new Date();
    let timeLeft: TimeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }
    return timeLeft;
  }, [targetDate]);

  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft());
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    if (mounted) {
      const timer = setTimeout(() => {
        setTimeLeft(calculateTimeLeft());
      }, 1000);

      return () => clearTimeout(timer);
    }
  }, [calculateTimeLeft, mounted, timeLeft]);
  if (!mounted) {
    return null;
  }

  const padWithZero = (number: number | undefined) => {
    return number !== undefined && number < 10 ? `0${number}` : number;
  };

  return (
    <div className="flex space-x-4 md:space-x-20">
      {Object.keys(timeLeft).map((interval) => (
        <div key={interval} className="flex flex-col items-center">
          <p className={`${Urbanist.className} text-4xl md:text-8xl font-bold bg-clip-text text-transparent bg-gradient-to-l from-[#669BBC] to-[#003049]`}>
            {padWithZero(timeLeft[interval as keyof TimeLeft])}
          </p>
          <p className="text-[#98A2B3] md:text-4xl">
            {interval === 'days' ? 'Hari' : interval === 'hours' ? 'Jam' : interval === 'minutes' ? 'Menit' : 'Detik'}
          </p>
        </div>
      ))}
      {Object.keys(timeLeft).length === 0 && <span className='bg-clip-text text-transparent bg-gradient-to-l from-[#669BBC] to-[#003049] text-3xl font-bold'>Waktu Habis!</span>}
    </div>
  );
};

export default CountDown;
