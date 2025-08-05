"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FiCalendar, FiClock, FiWatch } from "react-icons/fi";
import { FaHourglass } from "react-icons/fa";

type TimeLeft = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

type ElectionStatus = "coming" | "ongoing" | "ended";

type CountdownBoxProps = {
  value: number;
  label: string;
  icon: React.ReactNode;
};

export default function PemiraCountdownSection() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [electionStatus, setElectionStatus] =
    useState<ElectionStatus>("coming");

  useEffect(() => {
    const calculateTimeLeft = () => {
      const electionStart = new Date("August 25, 2025 00:00:00").getTime();
      const electionEnd = new Date("August 26, 2025 23:59:59").getTime();
      const now = new Date().getTime();

      if (now >= electionStart && now <= electionEnd) {
        setElectionStatus("ongoing");
        return;
      } else if (now > electionEnd) {
        setElectionStatus("ended");
        return;
      }

      // If election is still coming
      const difference = electionStart - now;
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
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#DADED1] text-[#19554B]">
      <div className="max-w-7xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6 uppercase tracking-wider">
            {electionStatus === "coming" && "PEMIRA 2025 Coming Soon"}
            {electionStatus === "ongoing" && "PEMIRA 2025 Sedang Berlangsung!"}
            {electionStatus === "ended" && "Pemilihan Telah Berakhir"}
          </h2>
          <p className="text-xl text-[#19554B]/80 max-w-2xl mx-auto">
            {electionStatus === "coming" &&
              "Hitungan mundur menuju hari pemilihan"}
            {electionStatus === "ongoing" && "Segera gunakan hak pilih Anda!"}
            {electionStatus === "ended" &&
              "Terima kasih telah berpartisipasi dalam PEMIRA 2025"}
          </p>
        </motion.div>

        {electionStatus === "coming" && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-6 md:gap-10 max-w-4xl mx-auto"
          >
            <CountdownBox
              value={timeLeft.days}
              label="Days"
              icon={<FiCalendar className="text-2xl" />}
            />
            <CountdownBox
              value={timeLeft.hours}
              label="Hours"
              icon={<FiClock className="text-2xl" />}
            />
            <CountdownBox
              value={timeLeft.minutes}
              label="Minutes"
              icon={<FiWatch className="text-2xl" />}
            />
            <CountdownBox
              value={timeLeft.seconds}
              label="Seconds"
              icon={<FaHourglass className="text-2xl" />}
            />
          </motion.div>
        )}

        {electionStatus === "ongoing" && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mt-8"
          >
            <div className="inline-flex flex-col items-center gap-8">
              <div className="bg-[#19554B] text-[#DADED1] px-8 py-4 rounded-full text-xl font-medium">
                Pemilihan berlangsung 25-26 Agustus 2025
              </div>
              <a
                href="/vote"
                className="px-8 py-4 bg-[#19554B] text-[#DADED1] rounded-full text-lg font-semibold hover:bg-[#0E2E28] transition-colors shadow-lg hover:shadow-xl flex items-center gap-2"
              >
                VOTE SEKARANG <span className="text-xl">→</span>
              </a>
            </div>
          </motion.div>
        )}

        {electionStatus === "ended" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="mt-12"
          >
            <div className="inline-block px-8 py-4 bg-[#19554B] text-[#DADED1] rounded-full text-xl font-medium">
              Hasil pemilihan akan diumumkan segera
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
}

function CountdownBox({ value, label, icon }: CountdownBoxProps) {
  return (
    <div className="flex flex-col items-center">
      <div className="relative w-32 h-32 md:w-40 md:h-40 bg-[#19554B] rounded-lg flex items-center justify-center mb-4 shadow-lg">
        <div className="absolute -inset-1 border-2 border-[#DADED1] rounded-lg opacity-30"></div>
        <div className="text-5xl md:text-6xl font-bold text-[#DADED1]">
          {value.toString().padStart(2, "0")}
        </div>
        <div className="absolute bottom-4 text-[#DADED1]/70">{icon}</div>
      </div>
      <div className="text-xl uppercase tracking-wider font-medium">
        {label}
      </div>
    </div>
  );
}
