"use client";

import PemiraLoginForm from "@/components/pemira/LoginForm";
import { Suspense } from "react";

export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-gray-100 p-4">
      <Suspense
        fallback={<div className="text-center py-8">Loading login form...</div>}
      >
        <div className="flex flex-col md:flex-row rounded-2xl shadow-xl overflow-hidden bg-white w-full max-w-4xl">
          <div className="hidden md:block md:w-1/2 bg-gradient-to-br from-gray-700 to-gray-900 relative">
            <div className="absolute inset-0 flex items-center justify-center p-8">
              <div className="text-white text-center">
                <h2 className="text-3xl font-bold mb-4">Pemira V-Class</h2>
                <p className="opacity-80">
                  Masuk untuk mengakses sistem pemilihan online
                </p>
              </div>
            </div>
          </div>
          <PemiraLoginForm />
        </div>
      </Suspense>
    </div>
  );
}
