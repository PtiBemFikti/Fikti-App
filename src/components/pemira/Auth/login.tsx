import React, { useState } from 'react';
import Image from 'next/image';
import { epilogue, Urbanist } from '@/styles/font';

export default function LoginPopUp() {
  const [isLogin, setIsLogin] = useState(true); // State untuk mengatur tampilan antara login dan register
  const [krsFile, setKrsFile] = useState<File | null>(null); // State untuk menyimpan file KRS
  const [isVisible, setIsVisible] = useState(true); // State untuk mengatur visibilitas pop-up

  const toggleAuthMode = () => {
    setIsLogin(!isLogin);
  };

  const handleKrsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setKrsFile(e.target.files[0]);
    } else {
      setKrsFile(null);
    }
  };

  const handleClose = () => {
    setIsVisible(false); // Menyembunyikan pop-up ketika tombol "X" diklik
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("npm", e.currentTarget.npm.value);
    formData.append("password", e.currentTarget.password.value);
  
    if (!isLogin && krsFile) {
      formData.append("krs", krsFile);
    }
  
    const endpoint = isLogin ? "/pages/api/login" : "/pages/api/register";
    const response = await fetch(endpoint, {
      method: "POST",
      body: formData,
    });
  
    const result = await response.json();
    console.log("Form data submitted:", result);
  
    if (response.ok) {
      handleClose(); // Menutup pop-up setelah submit
    } else {
      console.error("Error:", result);
    }
  };

  if (!isVisible) {
    return null; // Jika pop-up tidak terlihat, tidak ada yang dirender
  }

  return (
    <div className={`modal-box bg-[#F0F2F4] ${epilogue.className}`}>
      <form method="dialog" onSubmit={handleSubmit}>
        <div className="flex gap-2 md:gap-5 items-center p-6 md:p-12">
          <Image src="/pemira/logo-pemira.png" alt="logo pemira" width={20.22} height={24} className="w-6 md:w-10" />
          <p className={`text-black ${epilogue.className} font-bold md:text-3xl mt-1`}>
            {isLogin ? 'Login' : 'Register'}
          </p>
        </div>
        <button type="button" onClick={handleClose} className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 text-xl text-black font-bold">
          ✕
        </button>
        <div className={`${Urbanist.className} px-6 md:px-12 flex flex-col gap-2 md:gap-3`}>
          <input type="text" name="npm" placeholder="Masukkan NPM Anda" className="w-full p-3 md:p-5 bg-[#F0F2F4] border border-[#98A2B3] border-solid rounded-xl text-sm md:text-base text-[#98A2B3]" required />
          <input type="password" name="password" placeholder="Password" className="w-full p-3 md:p-5 bg-[#F0F2F4] border border-[#98A2B3] border-solid rounded-xl text-sm md:text-base text-[#98A2B3]" required />
          {!isLogin && (
            <>
              {/* <label className="text-[#98A2B3] text-sm md:text-base">Upload KRS Mahasiswa</label> */}
              <input type="file" name="krs" accept=".pdf,.jpg,.jpeg,.png" onChange={handleKrsChange} className="w-full p-3 md:p-5 bg-[#F0F2F4] border border-[#98A2B3] border-solid rounded-xl text-sm md:text-base text-[#98A2B3]" required />
            </>
          )}
        </div>
        <div className="px-6 md:px-12 py-5 flex flex-col gap-2">
          <button type="submit" className="w-full p-3 md:p-5 bg-gradient-to-l from-[#669BBC] to-[#003049] rounded-xl text-[#F0F2F4] font-bold md:text-xl">
            {isLogin ? 'Login' : 'Register'}
          </button>
          <button type="button" onClick={toggleAuthMode} className="w-full p-3 md:p-5 bg-transparent text-[#669BBC] font-bold md:text-lg">
            {isLogin ? 'Register' : 'Kembali ke Login'}
          </button>
        </div>
      </form>
    </div>
  );
}
