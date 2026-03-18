import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronUp, ChevronDown, ArrowRight } from "lucide-react";

const treatments = [
  { title: "New Patients", img: "/Treatments/New Patients.png", active: true },
  { title: "Dental Anxiety", img: "/Treatments/Dental Anxiety.png" },
  { title: "General Dentistry", img: "/Treatments/General Dentistry.png" },
  {
    title: "Root Canal Treatment",
    img: "/Treatments/Root Canal Treatment.png",
  },
  {
    title: "Sedation and Relaxation",
    img: "/Treatments/Sedation and Relaxation.png",
  },
  {
    title: "Maintaining your Smile",
    img: "/Treatments/Maintaining your smile.png",
  },
  { title: "Emergency Dentist", img: "/Treatments/Emergency Dentist.png" },
  {
    title: "Dentistry for Children",
    img: "/Treatments/Dentistry for children.png",
  },
  { title: "Dental Hygiene", img: "/Treatments/Dental Hygiene.png" },
];

export default function Treatment() {
  return (
    <section className="bg-[#F8EFEB] py-16 px-4 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-center text-[#121F39] font-serif text-[36px] md:text-[45px] mb-16">
          Treatments We Offer
        </h1>

        {/* 1. Hero Section (Buttons half-on-image) */}
        <div className="flex flex-col md:flex-row gap-8 mb-32">
          {/* General Dentistry Card */}
          <div className="relative flex-1 group">
            <div className="relative h-60 overflow-hidden rounded-md shadow-sm">
              <Image
                src="/General Dentistry.png"
                alt="General"
                fill
                className="object-cover"
              />
            </div>
            {/* Button: Positioned half-way down */}
            <Button className="absolute -bottom-5 left-1/2 -translate-x-1/2 bg-[#B0653C] hover:bg-[#965432] text-white min-w-70 h-14 text-lg flex justify-between px-6 rounded-sm shadow-xl z-20">
              General Dentistry <ChevronUp size={22} />
            </Button>
          </div>

          {/* Cosmetic Dentistry Card */}
          <div className="relative flex-1 group mt-16 md:mt-0">
            <div className="relative h-60 w-full overflow-hidden rounded-md shadow-sm">
              <Image
                src="/Cosmetic Dentistry.png"
                alt="Cosmetic"
                fill
                className="object-cover"
              />
            </div>
            <Button className="absolute -bottom-7 left-1/2 -translate-x-1/2 bg-[#425466] hover:bg-[#324150] text-white min-w-70 h-14 text-lg flex justify-between px-6 rounded-sm shadow-xl z-20">
              Cosmetic Dentistry <ChevronDown size={22} />
            </Button>
          </div>
        </div>

        {/* 2. Services Grid (With White Circles) */}
        <div className="border-t border-gray-300/40 overflow-hidden">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 -m-[0.5px]">
            {treatments.map((item, index) => (
              <Card
                key={index}
                className={`relative flex flex-col items-center p-14 rounded-none border-none shadow-none transition-all duration-300
                  border-b border-r border-gray-300/40
                  ${item.active ? "bg-white shadow-2xl z-10 scale-[1.01]" : "bg-transparent hover:bg-white/40"}`}
              >
                <CardContent className="p-0 flex flex-col items-center">
                  {/* Circular Icon Container (Wapis add kar diya) */}
                  <div className="w-20 h-20 rounded-full border border-gray-100 flex items-center justify-center mb-6 bg-white shrink-0 shadow-sm">
                    <Image
                      src={item.img}
                      alt={item.title}
                      width={45}
                      height={45}
                      className="object-contain"
                    />
                  </div>

                  <h3 className="text-[#121F39] text-[17px] font-medium mb-6 text-center leading-tight h-12 flex items-center">
                    {item.title}
                  </h3>

                  {/* Arrow Button */}
                  <button
                    className={`w-9 h-9 rounded-full flex items-center justify-center transition-all border
                    ${
                      item.active
                        ? "bg-[#B0653C] border-[#B0653C] text-white"
                        : "bg-transparent border-gray-300 text-gray-400 hover:border-[#B0653C] hover:text-[#B0653C]"
                    }`}
                  >
                    <ArrowRight size={18} />
                  </button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
