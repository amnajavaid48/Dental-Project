import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, ChevronUp, ChevronDown } from "lucide-react";

type TreatmentItem = {
  title: string;
  img: string;
  active?: boolean;
};

const treatments: TreatmentItem[] = [
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

const heroCards = [
  {
    title: "General Dentistry",
    img: "/General Dentistry.png",
    bg: "bg-[#B0653C] hover:bg-[#965432]",
    icon: "up",
  },
  {
    title: "Cosmetic Dentistry",
    img: "/Cosmetic Dentistry.png",
    bg: "bg-[#425466] hover:bg-[#324150]",
    icon: "down",
  },
];

export default function Treatment() {
  return (
    <section className="bg-[#F8EFEB] py-16 px-4 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-center text-[#121F39] font-serif text-[36px] md:text-[45px] mb-16">
          Treatments We Offer
        </h1>

        {/* HERO SECTION */}
        <div className="flex flex-col md:flex-row gap-8 mb-32">
          {heroCards.map((card, i) => (
            <div
              key={i}
              className={`relative flex-1 ${i === 1 ? "md:mt-0 mt-16" : ""}`}
            >
              <div className="relative h-40">
                <Image
                  src={card.img}
                  alt={card.title}
                  fill
                  className="object-cover rounded-sm"
                />
              </div>
              <button
                className={`absolute -bottom-6 left-1/2 -translate-x-1/2 ${card.bg}
                text-white min-w-[260px] h-14 text-lg rounded-md flex justify-between items-center px-6 shadow-xl transition-colors`}
              >
                {card.title}
                <div className=" p-1 ">
                  {card.icon === "up" ? (
                    <ChevronUp size={20} className="text-[#B0653C] bg-white" />
                  ) : (
                    <ChevronDown size={20} className="border" />
                  )}
                </div>
              </button>
            </div>
          ))}
        </div>

        {/* GRID SECTION WITH INNER BORDERS ONLY */}
        <div className="relative">
          {/* Main Grid Container */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
            {treatments.map((item, index) => {
              // Logic for Inner Borders
              const isLastInRow = (index + 1) % 3 === 0;
              const isBottomRow = index >= treatments.length - 3;

              return (
                <div
                  key={index}
                  className={`relative flex flex-col items-center justify-center p-12 transition-all duration-300 ${item.active ? "bg-white" : "bg-transparent"}
    /* RIGHT BORDER (except last column) */
    ${!isLastInRow ? "md:border-r border-[#45515C]" : ""}

    /* BOTTOM BORDER (except last row) */
    ${!isBottomRow ? "border-b border-[#45515C]" : ""}
  `}
                >
                  {/* Icon Circle */}
                  <div className="w-20 h-20 rounded-full flex items-center justify-center mb-6 bg-white border border-gray-100 shadow-sm">
                    <Image
                      src={item.img}
                      alt={item.title}
                      width={40}
                      height={40}
                    />
                  </div>

                  {/* Title */}
                  <h3 className="text-[#121F39] text-lg font-medium mb-6 text-center ">
                    {item.title}
                  </h3>

                  {/* Arrow Button */}
                  <button
                    className={`transition-all duration-500 flex items-center justify-center
                    ${
                      item.active
                        ? "w-12 h-12 bg-[#B0653C] text-white shadow-lg rotate-45"
                        : "w-10 h-10 text-gray-400 hover:text-[#B0653C]"
                    }`}
                    style={
                      item.active ? { borderRadius: "100% 100% 100% 0" } : {}
                    }
                  >
                    <ArrowRight
                      size={item.active ? 20 : 18}
                      className={item.active ? "-rotate-45" : ""}
                    />
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
