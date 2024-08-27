"use client";
import React, { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import DropdownComponent from "./Dropdown";
import {
  IoMenu,
  IoDocumentTextOutline,
  IoShareOutline,
  IoSunnyOutline,
  IoMoonOutline,
  IoStarOutline,
  IoPersonCircleOutline,
} from "react-icons/io5";

const Navbar = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const router = useRouter();

  return (
    <nav
      className={`bg-background-light sticky top-0 dark:bg-background-dark ${
        isDarkMode ? "dark" : ""
      }`}
    >
      <div className="max-w-7xl mx-auto px-2">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-4">
            <button
              className="text-primary dark:text-quaternary dark:hover:text-primary transition-colors p-2 rounded-full"
              onClick={() => router.push("/")}
            >
              <IoMenu size={24} />
            </button>
            <Image
              src="/icons/file.svg"
              alt="New Chat"
              width={24}
              height={24}
              className="text-secondary dark:text-quaternary"
            />
          </div>
          <div className="flex items-center space-x-2 sm:space-x-4">
            <NavButton icon={<IoDocumentTextOutline size={20} />} />
            <NavButton icon={<IoShareOutline size={20} />} />
            <NavButton
              icon={
                isDarkMode ? (
                  <IoSunnyOutline size={20} />
                ) : (
                  <IoMoonOutline size={20} />
                )
              }
              onClick={() => setIsDarkMode(!isDarkMode)}
            />
            <NavButton icon={<IoStarOutline size={20} />} />
            <button className="text-primary hover:text-primary/80 transition-colors p-1 rounded-full">
              <IoPersonCircleOutline size={32} />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

const NavButton = ({ icon, onClick }) => (
  <button
    className="text-secondary hover:text-primary dark:text-quaternary dark:hover:text-primary transition-colors p-2 rounded-full"
    onClick={onClick}
  >
    {icon}
  </button>
);

export default Navbar;
