"use client";

import PemiraLoginForm from "@/components/pemira/LoginForm";
import { Suspense } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#DEDAD1] to-[#F5F5F5] p-4">
      <Suspense
        fallback={
          <div className="text-center py-8 text-[#19554B]">
            Loading login form...
          </div>
        }
      >
        <div className="flex flex-col md:flex-row rounded-3xl shadow-2xl overflow-hidden bg-white w-full max-w-4xl">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="hidden md:block md:w-1/2 bg-gradient-to-br from-[#19554B] to-[#134239] relative"
          >
            <div className="absolute inset-0 flex flex-col items-center justify-center p-8">
              <div className="mb-8">
                <Image
                  src="/pemira/logo-pemira-adiraka.png"
                  alt="Pemira Logo"
                  width={120}
                  height={120}
                  className="rounded-full"
                />
              </div>
              <div className="text-white text-center">
                <h2 className="text-3xl font-bold mb-4">Pemira Login</h2>
                <p className="opacity-80">
                  Masuk untuk mengakses sistem pemilihan online
                </p>
              </div>
            </div>
          </motion.div>
          <PemiraLoginForm />
        </div>
      </Suspense>
    </div>
  );
}
