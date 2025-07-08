"use client";

import Image from "next/image";
import PemiraLogoutButton from "../LogoutButton";
import { useState } from "react";
import { FiHome, FiUser, FiCheckSquare, FiMenu, FiX } from "react-icons/fi";

export default function PemiraProfileNavbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Mobile menu button */}
      <div className="md:hidden fixed top-4 left-4 z-50">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="p-2 rounded-md text-gray-700 hover:bg-gray-100 focus:outline-none"
          aria-label="Toggle menu"
        >
          {isOpen ? (
            <FiX className="h-6 w-6" />
          ) : (
            <FiMenu className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* Sidebar */}
      <nav
        className={`fixed top-0 left-0 h-full bg-white shadow-lg transition-all duration-300 ease-in-out z-40
          ${isOpen ? "translate-x-0 w-64" : "-translate-x-full"} 
          md:translate-x-0 md:w-64`}
      >
        <div className="flex flex-col h-full p-6">
          {/* Logo and Brand */}
          <div className="flex items-center justify-start gap-3 mb-10">
            <Image
              src="/pemira/logo-pemira-adiraka.png"
              alt="logo pemira"
              width={48}
              height={48}
              className="w-12 h-12"
              priority
            />
            <h1 className="text-xl font-bold text-black">Pemira</h1>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-col gap-4 flex-grow">
            <NavLink href="/pemira/profile" icon={<FiHome />} text="Home" />
            <NavLink
              href="/pemira/profile/voter-data"
              icon={<FiUser />}
              text="Profile"
            />
            <NavLink
              href="/pemira/profile/vote"
              icon={<FiCheckSquare />}
              text="E-Vote"
            />
          </div>

          {/* Logout Button */}
          <div className="mt-auto">
            <PemiraLogoutButton />
          </div>
        </div>
      </nav>
    </>
  );
}

function NavLink({
  href,
  icon,
  text,
}: {
  href: string;
  icon: React.ReactNode;
  text: string;
}) {
  return (
    <a
      href={href}
      className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-100 transition-colors text-gray-700 hover:text-gray-900"
    >
      <span className="text-lg">{icon}</span>
      <span className="font-medium">{text}</span>
    </a>
  );
}
