import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";

const DropdownMenuNav: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOlahragaSubMenuOpen, setOlahragaSubMenuOpen] = useState(false);
  const [isEsportSubMenuOpen, setEsportSubMenuOpen] = useState(false);
  const [isSeniSubMenuOpen, setSeniSubMenuOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleToggle = () => {
    setIsOpen(!isOpen);
    setOlahragaSubMenuOpen(false);
    setEsportSubMenuOpen(false);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node)
    ) {
      setIsOpen(false);
      setOlahragaSubMenuOpen(false);
      setEsportSubMenuOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative md:block hidden" ref={dropdownRef}>
      <button
        onClick={handleToggle}
        className="flex px-4 py-2 bg-[#060E23] text-[#F1EAF6] hover:text-purpleText hover:bg-[#060E23] text-md"
      >
        Events
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1em"
          height="1em"
          viewBox="0 0 24 24"
          className=""
        >
          <path
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="m19 9l-7 7l-7-7"
          />
        </svg>
      </button>
      {isOpen && (
        <div className="absolute text-black mt-2 w-48 bg-[#F1EAF6] border border-gray-300 rounded-md shadow-lg">
          <ul className="py-1">
            <li
              onMouseEnter={() => {
                setOlahragaSubMenuOpen(true);
                setEsportSubMenuOpen(false);
              }}
              onMouseLeave={() => setOlahragaSubMenuOpen(false)}
              className="flex px-4 py-2 hover:bg-gray-100 cursor-pointer text-base"
            >
              Olahraga
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                viewBox="0 0 24 24"
                className={`h-6 w-12 transform ${
                  isOlahragaSubMenuOpen ? "-rotate-90" : ""
                }`}
              >
                <path
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m19 9l-7 7l-7-7"
                />
              </svg>
              {isOlahragaSubMenuOpen && (
                <ul className="absolute left-full top-0 mt-0 w-48 bg-[#F1EAF6] border border-gray-300 rounded-md shadow-lg">
                  <Link href={"/fiktispace/Competition/Futsal"}>
                    <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-base">
                      Futsal
                    </li>
                  </Link>
                  <Link href={"/fiktispace/Competition/Basketball"}>
                    <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-base">
                      3-on-3 Basketball
                    </li>
                  </Link>
                  <Link href={"/fiktispace/Competition/Badminton"}>
                    <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-base">
                      Badminton
                    </li>
                  </Link>
                </ul>
              )}
            </li>
          </ul>
          <ul className="py-1">
            <li
              onMouseEnter={() => {
                setEsportSubMenuOpen(true);
                setOlahragaSubMenuOpen(false);
              }}
              onMouseLeave={() => setEsportSubMenuOpen(false)}
              onClick={() => setOlahragaSubMenuOpen(false)}
              className="flex px-4 py-2 hover:bg-gray-100 cursor-pointer text-base"
            >
              Esport
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                viewBox="0 0 24 24"
                className={`h-6 w-12 transform ${
                  isEsportSubMenuOpen ? "-rotate-90" : ""
                }`}
              >
                <path
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m19 9l-7 7l-7-7"
                />
              </svg>
              {isEsportSubMenuOpen && (
                <ul className="absolute left-full top-14 mt-0 w-48 bg-[#F1EAF6] border border-gray-300 rounded-md shadow-lg">
                  <Link href={"/fiktispace/Competition/MobileLegend"}>
                    <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-base">
                      Mobile Legends
                    </li>
                  </Link>
                </ul>
              )}
            </li>
          </ul>
          <ul className="py-1">
            <li
              onMouseEnter={() => {
                setOlahragaSubMenuOpen(false);
                setEsportSubMenuOpen(false);
                setSeniSubMenuOpen(true);
              }}
              onMouseLeave={() => setSeniSubMenuOpen(false)}
              className="flex px-4 py-2 hover:bg-gray-100 cursor-pointer text-base"
            >
              Seni
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                viewBox="0 0 24 24"
                className={`h-6 w-12 transform ${
                  isSeniSubMenuOpen ? "-rotate-90" : ""
                }`}
              >
                <path
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m19 9l-7 7l-7-7"
                />
              </svg>
              {isSeniSubMenuOpen && (
                <ul className="absolute left-full top-6 mt-0 w-48 bg-[#F1EAF6] border border-gray-300 rounded-md shadow-lg">
                  <Link href={"/fiktispace/Competition/DigitalPoster"}>
                    <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-base">
                      Digital Poster
                    </li>
                  </Link>
                  <Link href={"/fiktispace/Competition/SoloVocal"}>
                    <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-base">
                      Solo Vocal
                    </li>
                  </Link>
                  <Link href={"/fiktispace/Competition/Fotografi"}>
                    <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-base">
                      Fotografi
                    </li>
                  </Link>
                </ul>
              )}
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default DropdownMenuNav;
