"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaFacebook, FaLinkedin } from "react-icons/fa";
import { Menu, X, ChevronRight } from "lucide-react";

// 1. Defining Types
interface NavLink {
  name: string;
  href: string;
  active?: boolean;
}

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // 2. Navigation Data
  const navLinks: NavLink[] = [
    { name: "Home", href: "/", active: true },
    { name: "About Us ▾", href: "#" },
    { name: "Smiles We've Made ▾", href: "#" },
    { name: "General Dentistry ▾", href: "#" },
    { name: "Cosmetic Dentistry ▾", href: "#" },
    { name: "Contact Us", href: "#" },
  ];

  const socialIcons = [
    { Icon: FaFacebook, href: "#" },
    { Icon: FaLinkedin, href: "#" },
  ];

  return (
    <nav className="relative w-full bg-white border-b font-sans">
      <div className="flex flex-row items-stretch w-full">
        {/* LEFT SECTION: Logo */}
        <div className="flex items-center px-4 lg:pl-16 py-4 ">
          <Image
            src="/logo.png"
            alt="Start Smiling Logo"
            width={180}
            height={60}
            className="object-contain w-32 md:w-40 lg:w-48"
          />
        </div>

        {/* RIGHT SECTION: Multi-row Layout */}
        <div className="flex-1 flex flex-col">
          {/* Top Bar (Orange) */}
          <div className="bg-[#B0653C] text-white flex justify-between items-center px-4 lg:px-10 py-3">
            <p className="font-medium text-xs md:text-sm lg:text-[15px] tracking-wide">
              Book Your Online Consultation Now:{" "}
              <span className="font-bold ml-1 text-white">01277 887 693</span>
            </p>

            {/* Desktop Social Icons - Aligned relative to the CTA button below */}
            <div className="hidden lg:flex items-center gap-5 mr-12 lg:mr-28">
              {socialIcons.map(({ Icon, href }, idx) => (
                <Link
                  key={idx}
                  href={href}
                  className="hover:scale-110 transition-transform"
                >
                  <Icon className="text-xl" />
                </Link>
              ))}
            </div>
          </div>

          {/* Bottom Menu Area */}
          <div className="flex items-center justify-between px-4 lg:px-10 py-4 lg:py-6">
            {/* Desktop Navigation Links */}
            <div className="hidden xl:flex lg:gap-5  text-[#1a1a1a]">
              {navLinks.map((item, index) => (
                <Link
                  key={index}
                  href={item.href}
                  className={`xl:text-[13px] lg:text-[10px]  ${
                    item.active
                      ? "text-[#B0653C] border-b-2 border-[#B0653C] pb-1"
                      : "hover:text-[#B0653C] transition-colors"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>

            {/* CTA Button & Mobile Toggle */}
            <div className="flex items-center gap-4 ml-auto">
              <button className="bg-[#0A1D37] text-white px-5 py-3 md:px-8 md:py-4 rounded-full text-xs md:text-[14px] font-extrabold flex items-center gap-3 hover:bg-[#B0653C] transition-all group shadow-lg">
                <span className="uppercase tracking-wider">
                  Free Smile Consultation
                </span>
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>

              {/* Mobile Burger Menu */}
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="xl:hidden p-2 text-[#0A1D37] hover:bg-gray-100 rounded-md transition-colors"
              >
                {isOpen ? <X size={30} /> : <Menu size={30} />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* MOBILE DROPDOWN MENU */}
      {isOpen && (
        <div className="xl:hidden absolute top-full left-0 w-full bg-white z-[100] shadow-2xl border-t-2 border-[#B0653C] animate-in slide-in-from-top duration-300">
          <div className="flex flex-col p-8 space-y-6">
            {navLinks.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="text-lg font-bold text-[#0A1D37] flex justify-between items-center border-b border-gray-50 pb-4"
              >
                {item.name}
                <ChevronRight size={18} className="text-[#B0653C]" />
              </Link>
            ))}

            {/* Social Icons for Mobile */}
            <div className="flex gap-8 pt-6">
              {socialIcons.map(({ Icon, href }, idx) => (
                <Link key={idx} href={href} className="text-[#B0653C]">
                  <Icon size={28} />
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
