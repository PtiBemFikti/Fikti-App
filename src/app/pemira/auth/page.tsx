"use client";

import PemiraLoginForm from "@/components/pemira/LoginForm";
import { Suspense } from "react";

export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <Suspense fallback={<div>Loading login form...</div>}>
        <PemiraLoginForm />
      </Suspense>
    </div>
  );
}
