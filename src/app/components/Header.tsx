
"use client";
import React, { useState } from "react";
import Image from "next/image";
import { PiShoppingCartThin } from "react-icons/pi";
import { HiOutlineUserCircle } from "react-icons/hi2";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai"; // Import menu icons
import Link from "next/link";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      <header className="font-[sans-serif] min-h-[60px] tracking-wide relative z-50">
        <section className="bg-orange-700 min-h-[40px] px-4 py-2 sm:px-10 items-center">
          <p className="font-sans text-center text-white">
            FREE DELIVERY ALL ORDERS ABOVE RS. 3999
          </p>
        </section>

        <div className="flex flex-wrap items-center justify-between py-3 px-4 sm:px-10 bg-white lg:gap-y-4 gap-y-6 gap-x-4 mt-2">
          <Image
            src="/images/logo.png"
            alt="logo"
            width={150}
            height={150}
          />

          <div
            id="collapseMenu"
            className={`${
              isMenuOpen ? "block" : "hidden"
            } lg:flex lg:items-center lg:gap-x-10 max-lg:space-y-3 max-lg:fixed max-lg:bg-[#151d20] max-lg:w-2/3 max-lg:min-w-[300px] max-lg:top-0 max-lg:left-0 max-lg:px-10 max-lg:py-4 max-lg:h-full max-lg:shadow-md max-lg:overflow-auto z-50`}
          >
            <ul className="lg:flex lg:gap-x-10">
              <li className="max-lg:border-b max-lg:py-3">
                <a href="/" className="text-white lg:text-gray-900 block text-[15px] font-medium">
                  Home
                </a>
              </li>
              <li className="max-lg:border-b max-lg:py-3">
                <Link href={"/Abayas"} className="text-white lg:text-gray-900 block text-[15px] font-medium">
                  Abayas
              
                </Link>
              </li>
              <li className="max-lg:border-b max-lg:py-3">
                <Link href="/Hijabs" className="text-white lg:text-gray-900 block text-[15px] font-medium">
                  Hijabs
                </Link>
              </li>
              <li className="max-lg:border-b max-lg:py-3">
              <Link href="/Chadars" className="text-white lg:text-gray-900 block text-[15px] font-medium">
                  Chadars
                </Link>
              </li>
              {/* <li className="max-lg:border-b max-lg:py-3">
                {/* <a href="#" className="text-white lg:text-gray-900 block text-[15px] font-medium">
                  About
                </a> */}
              {/* </li> */}
              <li className="max-lg:border-b max-lg:py-3">
              <Link href="/Contact" className="text-white lg:text-gray-900 block text-[15px] font-medium">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div className="flex items-center max-sm:ml-auto space-x-4">
            {/* User Icon */}
            <HiOutlineUserCircle className="text-black text-2xl cursor-pointer" title="User Account" />

            {/* Cart Icon with badge */}
            <div className="relative">
              <PiShoppingCartThin className="text-black text-2xl cursor-pointer" title="Cart" />
              <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full px-2 text-xs">
                0
              </span>
            </div>

            {/* Toggle Menu Button */}
            <button className="lg:hidden ml-6" onClick={toggleMenu}>
              {isMenuOpen ? (
                <AiOutlineClose className="text-2xl text-black" />
              ) : (
                <AiOutlineMenu className="text-2xl text-black" />
              )}
            </button>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;




