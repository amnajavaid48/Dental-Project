import Image from "next/image";
import Link from "next/link";
import { FaFacebook, FaLinkedin } from "react-icons/fa";

export default function Navbar() {
  return (
    <nav className="flex items-start w-full gap-3 bg-white">
      {/* 1. Left Section: Logo */}
      <div className="pl-32 py-2">
        {" "}
        {/* Left spacing adjust karein */}
        <Image
          src="/logo.png"
          alt="Logo"
          width={170}
          height={125}
          className="object-contain"
        />
      </div>

      {/* 2. Right Section: Top Orange Bar + Bottom Menu Items */}
      <div className="flex-1 flex flex-col">
        {/* Top Orange Bar (Full width of this section) */}
        <div className="bg-[#B0653C] text-white flex gap-111 items-center px-6 py-2">
          <p className="font-medium text-[14px] md:text-[16px]">
            Book Your Online Consultation Now: 01277 887 693
          </p>
          <div className="flex gap-4 text-xl">
            <FaFacebook className="cursor-pointer hover:opacity-80" />
            <FaLinkedin className="cursor-pointer hover:opacity-80" />
          </div>
        </div>

        {/* Bottom Navbar Links */}
        <div className="flex items-center gap-6 px-6 py-4">
          <div className="hidden lg:flex items-center gap-6 text-[15px] font-medium text-gray-700">
            <Link href="/" className="text-[#B0653C] underline">
              Home
            </Link>
            <Link href="#" className="hover:text-[#B0653C]">
              About Us ▾
            </Link>
            <Link href="#" className="hover:text-[#B0653C]">
              Smiles We&apos;ve Made ▾
            </Link>
            <Link href="#" className="hover:text-[#B0653C]">
              General Dentistry ▾
            </Link>
            <Link href="#" className="hover:text-[#B0653C]">
              Cosmetic Dentistry ▾
            </Link>
            <Link href="#" className="hover:text-[#B0653C]">
              Contact Us
            </Link>
          </div>

          <button className="bg-[#0A1D37] text-white px-3 py-2 rounded-full text-[13px] font-bold flex items-center gap-2 hover:bg-[#B0653C] transition-all duration-300">
            Free Smile Consultation
            <span className="text-lg">→</span>
          </button>
        </div>
      </div>
    </nav>
  );
}
