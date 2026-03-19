import Image from "next/image";
import React from "react";

// --- TypeScript type for location ---
type Location = string;

// --- Locations Array ---
const locations: Location[] = [
  "Ingatestone",
  "Romford",
  "Harold Wood",
  "Brentwood",
  "Hutton",
  "Chelmsford",
  "Upminster",
  "Hornchurch",
  "Billericay",
  "Warley",
  "Stock",
];

export default function MapArea() {
  return (
    <section className="relative w-full py-20 bg-white overflow-hidden">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="relative flex flex-col lg:flex-row items-center">
          {/* 1. Content Card */}
          <div className="relative z-20 w-full lg:w-112.5 bg-[#F8EFEB] p-8 md:p-10 rounded-lg shadow-sm lg:-mr-24 mb-8 lg:mb-0">
            <h2 className="text-4xl font-serif text-[#1A2B4B] mb-8">
              Areas We Serve
            </h2>

            {/* Locations Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-y-5 gap-x-4">
              {locations.map((loc) => (
                <div
                  key={loc}
                  className="flex items-center gap-2 group cursor-default"
                >
                  <div className="relative w-4 h-4 shrink-0 opacity-80 group-hover:opacity-100 transition-opacity">
                    <Image
                      src="/MapImgs/Capa_1.png"
                      alt="location icon"
                      fill
                      className="object-contain"
                    />
                  </div>
                  <span className="text-[#1A2B4B] text-[13px] md:text-sm font-medium whitespace-nowrap">
                    {loc}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* 2. Map Image Container */}
          <div className="relative z-10 w-full lg:flex-1 h-100 md:h-120 rounded-2xl overflow-hidden">
            <Image
              src="/MapImgs/Map.png"
              alt="Start Smiling Location Map"
              fill
              className=""
            />

            {/* Marker point */}
            <div className="absolute top-[45%] left-[60%] -translate-x-1/2 -translate-y-1/2">
              <div className="w-4 h-4 bg-red-600 rounded-full animate-ping absolute"></div>
              <div className="w-4 h-4 bg-red-600 rounded-full relative border-2 border-white shadow-md"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
