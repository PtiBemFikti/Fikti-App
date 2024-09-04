"use client";
import React, { useState, useEffect, useCallback } from "react";
import { Urbanist } from "@/styles/font";

interface CountdownProps {
  targetDate: Date;
}

interface TimeLeft {
  days?: number;
  hours?: number;
  minutes?: number;
  seconds?: number;
}

const CountDown: React.FC<CountdownProps> = ({ targetDate }) => {
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

  useEffect(() => {
    localStorage.setItem("targetDate", targetDate.toString());
  }, [targetDate]);

  if (!mounted) {
    return null;
  }

  const padWithZero = (number: number | undefined) => {
    return number !== undefined && number < 10 ? `0${number}` : number;
  };

  return (
    <div className="flex space-x-4">
      {Object.keys(timeLeft).map((interval) => (
        <div key={interval} className="flex flex-col items-center">
          <p
            className={`${Urbanist.className} text-4xl md:text-8xl font-bold bg-clip-text text-transparent bg-gradient-to-l from-[#669BBC] to-[#003049]`}
          >
            {padWithZero(timeLeft[interval as keyof TimeLeft])}
          </p>
          <p className="text-[#98A2B3]">
            {interval === "days"
              ? "Hari"
              : interval === "hours"
              ? "Jam"
              : interval === "minutes"
              ? "Menit"
              : "Detik"}
          </p>
        </div>
      ))}
      {Object.keys(timeLeft).length === 0 && <span>Waktu Habis!</span>}
    </div>
  );
};

export default CountDown;
