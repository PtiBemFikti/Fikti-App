"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function PemiraCountdownSection() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [hasEnded, setHasEnded] = useState(false);

  useEffect(() => {
    const calculateTimeLeft = () => {
      const targetDate = new Date("August 25, 2025 00:00:00").getTime();
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference <= 0) {
        setHasEnded(true);
        return;
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds });
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 text-[#19554B] bg-[#DADED1]">
      <div className="max-w-7xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            {hasEnded ? "Pemilihan Telah Berakhir" : "Menuju PEMIRA 2025"}
          </h2>
          <p className="text-xl text-[#DEDAD1] max-w-2xl mx-auto">
            {hasEnded
              ? "Terima kasih telah berpartisipasi dalam PEMIRA 2025"
              : "Hitungan mundur menuju hari pemilihan"}
          </p>
        </motion.div>

        {!hasEnded && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex justify-center gap-4 md:gap-8"
          >
            <div className="bg-[#DEDAD1] text-[#19554B] rounded-lg p-6 w-24 md:w-32">
              <div className="text-3xl md:text-5xl font-bold">
                {timeLeft.days}
              </div>
              <div className="text-sm md:text-base">Hari</div>
            </div>
            <div className="bg-[#DEDAD1] text-[#19554B] rounded-lg p-6 w-24 md:w-32">
              <div className="text-3xl md:text-5xl font-bold">
                {timeLeft.hours}
              </div>
              <div className="text-sm md:text-base">Jam</div>
            </div>
            <div className="bg-[#DEDAD1] text-[#19554B] rounded-lg p-6 w-24 md:w-32">
              <div className="text-3xl md:text-5xl font-bold">
                {timeLeft.minutes}
              </div>
              <div className="text-sm md:text-base">Menit</div>
            </div>
            <div className="bg-[#DEDAD1] text-[#19554B] rounded-lg p-6 w-24 md:w-32">
              <div className="text-3xl md:text-5xl font-bold">
                {timeLeft.seconds}
              </div>
              <div className="text-sm md:text-base">Detik</div>
            </div>
          </motion.div>
        )}

        {hasEnded && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-2xl md:text-3xl text-[#DEDAD1] py-12"
          >
            <p>Hasil pemilihan akan diumumkan segera</p>
          </motion.div>
        )}
      </div>
    </section>
  );
}
