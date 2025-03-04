"use client";
import logoImg from "@/public/assets/images/logo.png";
import { navLists } from "@/utils";
import Image from "next/image";
import { useState } from "react";

const Navbar = () => {
  const [logoSize, setLogoSize] = useState(
    () =>
      // window.innerWidth > 760 ? 300 : 250
      250
  );
  return (
    <header className="w-full py-5 sm:px-10 px-5 flex justify-between items-center">
      <nav className="flex w-full screen-max-width">
        <Image src={logoImg} alt="logo" width={logoSize} height={24} />
        <div className="flex flex-1 justify-end items-center max-sm:hidden">
          {navLists.map((nav) => (
            <div
              key={nav}
              className="px-5 text-md font-bold uppercase cursor-pointer"
            >
              {nav}
            </div>
          ))}
          <button className="px-3.5 py-1 text-md font-bold uppercase cursor-pointer border border-black rounded-md">
            Sign In
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
