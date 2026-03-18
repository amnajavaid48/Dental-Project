"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaFacebook, FaLinkedin } from "react-icons/fa";
import { Menu, X } from "lucide-react"; // npm install lucide-react

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/", active: true },
    { name: "About Us ▾", href: "#" },
    { name: "Smiles We've Made ▾", href: "#" },
    { name: "General Dentistry ▾", href: "#" },
    { name: "Cosmetic Dentistry ▾", href: "#" },
    { name: "Contact Us", href: "#" },
  ];

  return (
    <nav className="relative w-full bg-white border-b">
      {/* Main Container */}
      <div className="flex flex-row items-stretch w-full">
        {/* 1. LEFT SECTION: Logo */}
        <div className="flex items-center px-4 md:pl-10 lg:pl-24 py-2 bg-white">
          <Image
            src="/logo.png"
            alt="Logo"
            width={170}
            height={125}
            className="object-contain w-25 md:w-37.5 lg:w-42.5"
          />
        </div>

        {/* 2. RIGHT SECTION: Top Orange Bar + Bottom Menu */}
        <div className="flex-1 flex flex-col">
          {/* Top Orange Bar */}
          <div className="bg-[#B0653C] text-white flex justify-between items-center px-4 lg:px-8 py-2">
            <p className="font-medium text-[11px] sm:text-[13px] md:text-[15px]">
              Book Your Online Consultation Now:{" "}
              <span className="font-bold">01277 887 693</span>
            </p>
            <div className="hidden sm:flex gap-4 text-lg lg:mr-20">
              <FaFacebook className="cursor-pointer hover:opacity-80 text-base md:text-xl" />
              <FaLinkedin className="cursor-pointer hover:opacity-80 text-base md:text-xl" />
            </div>
          </div>

          {/* Bottom Menu Area */}
          <div className="flex items-center justify-between px-4 lg:px-8 py-3 lg:py-5">
            {/* Desktop Links - Hidden on Mobile */}
            <div className="hidden lg:flex items-center gap-4 xl:gap-8 xl:text-[14px] text-[8px] font-semibold text-gray-700">
              {navLinks.map((item, index) => (
                <Link
                  key={index}
                  href={item.href}
                  className={`${item.active ? "text-[#B0653C] underline underline-offset-8" : "hover:text-[#B0653C]"} transition-all`}
                >
                  {item.name}
                </Link>
              ))}
            </div>

            {/* CTA Button & Mobile Icon */}
            <div className="flex items-center gap-3 ml-auto lg:mr-10">
              <button className="bg-[#0A1D37] text-white px-3 py-1.5 md:px-5 md:py-2.5 rounded-full text-[11px] md:text-[13px] font-bold flex items-center gap-2 hover:bg-[#B0653C] transition-all">
                <span className="hidden xs:block">Free Smile Consultation</span>
                <span className="xs:hidden">Free Smile Consultation</span>
                <span className="text-lg">→</span>
              </button>

              {/* Burger Menu for Mobile */}
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="lg:hidden p-1 text-gray-800"
              >
                {isOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* 3. MOBILE DROPDOWN MENU */}
      {isOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-white z-[100] shadow-xl border-t animate-in fade-in slide-in-from-top-2">
          <div className="flex flex-col p-6 space-y-4">
            {navLinks.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="text-[16px] font-medium text-gray-800 border-b border-gray-100 pb-2 hover:text-[#B0653C]"
              >
                {item.name}
              </Link>
            ))}
            {/* Social Icons for Mobile inside menu */}
            <div className="flex gap-6 pt-4 text-[#B0653C]">
              <FaFacebook size={24} />
              <FaLinkedin size={24} />
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
