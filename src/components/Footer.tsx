import Image from "next/image";
import { ArrowRight, Phone, Mail, MapPin } from "lucide-react";
import React from "react";

// --- Types ---
type FooterLink = string;
type SocialLabel = string;
type FooterButtonType = { text: string };
type ContactItemType = { icon: React.ReactNode; text: string };

// --- Data ---
const socialLabels: SocialLabel[] = ["f", "in"];

const generalDentistry: string[] = [
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

const cosmeticDentistry: string[] = [
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

const footerButtons: FooterButtonType[] = [
  { text: "Contact Us" },
  { text: "Fee Guide" },
];

const contactItems: ContactItemType[] = [
  { icon: <Phone size={16} />, text: "01277 887 693" },
  { icon: <Mail size={16} />, text: "reception@start-smiling.co.uk" },
  {
    icon: <MapPin size={16} className="mt-1" />,
    text: "5 Market Place, Ingatestone, Essex, CM4 0BY",
  },
];

const footerLinks: FooterLink[] = [
  "Complaints Policy",
  "Privacy Notice",
  "Information For Patients",
  "DBS Assurance",
  "Late cancellation policy",
  "GDC website",
  "CQC website",
];

// --- Footer Component ---
export default function Footer() {
  return (
    <footer className="relative w-full bg-white mt-10">
      {/* 1. Curved Navy Section */}
      <div className="relative pt-5">
        {/* Logo Circle */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50">
          <div className="w-32 h-32 md:w-40 md:h-40 bg-[#B0653C] rounded-full flex flex-col items-center justify-center shadow-xl">
            <Image
              src="/FooterImgs/FooterLogo.png"
              alt="Footer Logo Image"
              width={100}
              height={100}
            />
          </div>
        </div>

        {/* Navy Background with clipPath */}
        <div
          className="bg-[#121F39] text-white pt-28 pb-16 px-6"
          style={{ clipPath: "ellipse(140% 100% at 50% 100%)" }}
        >
          {/* Social Icons & Lines */}
          <div className="max-w-7xl mx-auto flex items-center mb-16 px-4">
            <div className="flex-1 h-px bg-white"></div>
            <div className="flex items-center gap-4 px-6 md:px-10">
              {socialLabels.map((label) => (
                <SocialCircle key={label} label={label} />
              ))}
            </div>
            <div className="flex-1 h-px bg-white"></div>
          </div>

          {/* Footer Grid */}
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
            {/* Column 1: Intro */}
            <div className="space-y-6">
              <p className="text-sm leading-relaxed opacity-80">
                Start Smiling delivers exceptional dental aesthetics in a
                modern, comfortable setting. We focus on health, beauty, and
                your natural confidence.
              </p>
              <div className="flex flex-col gap-3">
                {footerButtons.map((btn) => (
                  <FooterButton key={btn.text} text={btn.text} />
                ))}
              </div>
            </div>

            {/* Column 2: General Dentistry */}
            <FooterColumnList
              title="General Dentistry"
              items={generalDentistry}
            />

            {/* Column 3: Cosmetic Dentistry */}
            <FooterColumnList
              title="Cosmetic Dentistry"
              items={cosmeticDentistry}
            />

            {/* Column 4: Contact & Hours */}
            <div className="lg:pl-8 space-y-8">
              <div className="space-y-4">
                <h3 className="text-lg font-medium">Get In Touch</h3>
                {contactItems.map((c) => (
                  <ContactItem key={c.text} icon={c.icon} text={c.text} />
                ))}
              </div>
              <div>
                <h3 className="text-lg font-medium mb-2">Opening Hours</h3>
                <p className="text-sm">Monday to Friday: 8.30am – 5.30pm</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 2. Bottom Copyright Bar */}
      <div className="bg-[#B0653C] text-white py-10 px-6">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between items-center gap-8">
          <div className="text-[11px] text-center lg:text-left leading-relaxed">
            © 2025 Start Smiling - All Rights Reserved <br />
            Site Last Updated 18/04/2024 <br />
            website designed and maintained by{" "}
            <span className="font-bold">dentopia marketing</span>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 items-center justify-center gap-x-6 gap-y-4 text-[12px] tracking-widest">
            {footerLinks.map((link) => (
              <a
                key={link}
                href="#"
                className="w-fit border-b border-white/30 hover:border-white transition-all pb-0.5 whitespace-nowrap"
              >
                {link}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

// --- Sub-components ---
function SocialCircle({ label }: { label: string }) {
  return (
    <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-[#121F39] hover:bg-[#B0653C] hover:text-white transition-all cursor-pointer shadow-md">
      <span
        className={
          label === "f" ? "text-xl font-bold" : "text-sm font-bold underline"
        }
      >
        {label}
      </span>
    </div>
  );
}

function FooterButton({ text }: { text: string }) {
  return (
    <button
      className="bg-[#B0653C] hover:bg-[#945533] text-white rounded-full flex justify-between 
      items-center pl-5 pr-1 py-1 w-44 group transition-all"
    >
      <span className="text-sm font-medium">{text}</span>
      <div className="bg-white rounded-full p-2.5 group-hover:translate-x-1 transition-transform">
        <ArrowRight className="w-4 h-4 text-[#B0653C]" />
      </div>
    </button>
  );
}

function ContactItem({ icon, text }: { icon: React.ReactNode; text: string }) {
  return (
    <div className="flex items-start gap-3 text-sm opacity-80 hover:opacity-100 cursor-pointer group">
      <div className="group-hover:text-[#B0653C] transition-colors">{icon}</div>
      <span>{text}</span>
    </div>
  );
}

function FooterColumnList({
  title,
  items,
}: {
  title: string;
  items: string[];
}) {
  return (
    <div className="lg:pl-8 md:border-l border-white md:pl-8">
      <h3 className="text-lg font-medium">{title}</h3>
      <ul className="text-sm pl-2">
        {items.map((item) => (
          <li
            key={item}
            className="flex items-center gap-2 hover:text-[#B0653C] cursor-pointer transition-colors"
          >
            <span className="text-white text-lg">•</span> {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
