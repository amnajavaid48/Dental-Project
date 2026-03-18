import Image from "next/image";
import { Phone, Mail, MapPin, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const generalDentistry = [
  "New Patients",
  "Dental Anxiety",
  "General Dentistry",
  "Root Canal Treatment",
  "Sedation and Relaxation",
  "Maintaining your Smile",
  "Emergency Dentist",
  "Dentistry for Children",
  "Dental Hygiene",
];

const cosmeticDentistry = [
  "Straight Teeth",
  "NiTime Aligners",
  "Dental Implants",
  "SmileFast",
  "Porcelain and Composite Veneers",
  "Teeth Whitening",
  "Crowns and Bridges",
  "Dentures",
  "Gum Contouring",
];

export default function Footer() {
  return (
    <footer className="relative w-full pt-20 overflow-hidden">
      {/* 1. Curvy Dark Blue Section */}
      <div className="relative bg-[#121F39] text-white pt-24 pb-16 px-6 rounded-t-[100%] scale-x-110 -mx-[5%]">
        {/* Floating Logo */}
        <div className="absolute -top-16 left-1/2 -translate-x-1/2 z-50 scale-x-[0.91]">
          <div className="w-32 h-32 bg-[#B0653C] rounded-full flex items-center justify-center p-4 shadow-xl">
            <Image
              src="/FooterImgs/FooterLogo.png"
              alt="Start Smiling Logo"
              width={80}
              height={80}
              className="object-contain"
            />
          </div>
        </div>

        {/* Social Icons with Side Lines */}
        <div className="max-w-7xl mx-auto flex items-center mb-16 scale-x-[0.91] px-4">
          <div className="flex-1 h-px bg-white/30"></div>
          <div className="flex items-center gap-4 px-8">
            <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-[#121F39] cursor-pointer hover:bg-[#A66B4C] hover:text-white transition-all">
              <span className="font-bold text-lg">f</span>
            </div>
            <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-[#121F39] cursor-pointer hover:bg-[#A66B4C] hover:text-white transition-all">
              <span className="font-bold text-sm underline">in</span>
            </div>
          </div>
          <div className="flex-1 h-px bg-white/30"></div>
        </div>

        {/* Footer Links Grid with Vertical Dividers */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 scale-x-[0.91] px-4">
          {/* Brand Info */}
          <div className="pr-8 pb-8 lg:pb-0 space-y-6">
            <p className="text-sm leading-relaxed opacity-90">
              Start Smiling delivers exceptional dental aesthetics in a modern,
              comfortable setting. We focus on health, beauty, and your natural
              confidence.
            </p>
            <div className="flex flex-col gap-3">
              <Button className="bg-[#B0653C] hover:bg-[#8e5a3e] rounded-full justify-between px-3 py-6 group w-36 transition-all">
                Contact Us
                <div className="bg-white rounded-full p-3 group-hover:translate-x-1 transition-transform">
                  <ArrowRight className="w-4 h-4 text-[#A66B4C]" />
                </div>
              </Button>
              <Button className="bg-[#B0653C] hover:bg-[#8e5a3e] rounded-full justify-between px-3 py-6 group w-36 transition-all">
                Fee Guide
                <div className="bg-white rounded-full p-3 group-hover:translate-x-1 transition-transform">
                  <ArrowRight className="w-4 h-4 text-[#A66B4C]" />
                </div>
              </Button>
            </div>
          </div>

          {/* General Dentistry - Left Border */}
          <div className="lg:border-l border-white px-0 lg:px-12 ">
            <h3 className="text-lg font-semibold ">General Dentistry</h3>
            <ul className=" text-sm opacity-80">
              {generalDentistry.map((item) => (
                <li
                  key={item}
                  className="hover:text-[#A66B4C] cursor-pointer transition-colors flex items-center gap-2"
                >
                  <span className="text-[20px]">•</span> {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Cosmetic Dentistry - Left Border */}
          <div>
            <h3 className="text-lg font-semibold ">Cosmetic Dentistry</h3>
            <ul className=" text-sm opacity-80">
              {cosmeticDentistry.map((item) => (
                <li
                  key={item}
                  className="hover:text-[#A66B4C] cursor-pointer transition-colors flex items-center gap-2"
                >
                  <span className="text-[20px]">•</span> {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Hours - Left Border */}
          <div className="  ">
            <div className="space-y-5">
              <h3 className="text-lg font-semibold">Get In Touch</h3>
              <div className="flex items-center gap-4 text-sm opacity-80">
                <Image
                  src="/FooterImgs/telephone-call.png"
                  alt="telephone image"
                  width={20}
                  height={20}
                />{" "}
                01277 887 693
              </div>
              <div className="flex items-center gap-4  opacity-80">
                <Image
                  src="/FooterImgs/email.png"
                  alt="telephone image"
                  width={20}
                  height={20}
                />{" "}
                reception@start-smiling.co.uk
              </div>
              <div className="flex items-start gap-4 opacity-80">
                <Image
                  src="/FooterImgs/map.png"
                  alt="telephone image"
                  width={20}
                  height={20}
                />{" "}
                <span>
                  5 Market Place, Ingatestone, <br /> Essex, CM4 0BY
                </span>
              </div>
            </div>

            <div className="space-y-3  mt-5">
              <h3 className="text-lg font-semibold">Opening Hours</h3>
              <p className="text-sm opacity-80">
                Monday to Friday: 8.30am – 5.30pm
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* 2. Bottom Copyright Bar */}
      <div className="bg-[#B0653C] text-white py-8 px-4 relative z-10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6 text-[11px]">
          <div className="opacity-90 text-center md:text-left leading-relaxed tracking-wide">
            © 2025 Start Smiling - All Rights Reserved <br />
            Site Last Updated 18/04/2024 <br />
            website designed and maintained by dentopia marketing
          </div>

          <div className="flex flex-wrap justify-center gap-x-6 gap-y-3 underline uppercase font-medium tracking-widest">
            <a href="#" className="hover:text-[#121F39] transition-colors">
              Complaints Policy
            </a>
            <a href="#" className="hover:text-[#121F39] transition-colors">
              Privacy Notice
            </a>
            <a href="#" className="hover:text-[#121F39] transition-colors">
              Information For Patients
            </a>
            <a href="#" className="hover:text-[#121F39] transition-colors">
              DBS Assurance
            </a>
            <a href="#" className="hover:text-[#121F39] transition-colors">
              Late cancellation & non attendance policy
            </a>
            <a href="#" className="hover:text-[#121F39] transition-colors">
              GDC website
            </a>
            <a href="#" className="hover:text-[#121F39] transition-colors">
              CQC website
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
