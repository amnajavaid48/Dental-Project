import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const teamMembers = [
  { img: "/Team/TomSealey.png", isWide: false },
  {
    img: "/Team/Dental Nurse.png",
    isWide: true,
    name: "Dentist Name",
    role: "Dental Nurse",
  },
  { img: "/Team/Dentist Name2.png", isWide: false },
  { img: "/Team/Dentist Name3.png", isWide: false },
  { img: "/Team/Dentist Name.png", isWide: false },
];

export default function Team() {
  return (
    <section className="py-20 bg-[#b36b3f] text-white">
      <div className="container mx-auto px-4 text-center">
        {/* Section Headers */}
        <h2 className="text-4xl md:text-5xl font-serif mb-6 ">
          Meet The Team!
        </h2>
        <p className="max-w-3xl mx-auto text-sm opacity-90 leading-relaxed mb-6">
          Start Smiling Dental Practice, award-winning dentistry on your
          doorstep. Offering you a choice of advanced treatments by familiar
          faces, along with general dental treatments for you and your family.
          Always wanted that perfect smile? Why not take that first step today?
        </p>
        <p className="mb-12 text-sm font-light ">
          Introducing your Dental team at Start Smiling Dental Practice in
          Essex.
        </p>

        {/* Team Grid */}
        <div className="flex flex-wrap justify-center items-end gap-3 mb-16">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className={`relative group cursor-pointer rounded-sm overflow-hidden shadow-lg transition-all duration-300
                ${member.isWide ? "w-92.5" : "w-52.5"} 
                h-87.5`}
            >
              <div className="absolute inset-0 w-full h-full">
                <Image
                  src={member.img}
                  alt="Team Member"
                  fill
                  className=" object-top group-hover:scale-105 transition-transform duration-500"
                />

                {/* Specific Overlay for the 2nd (Wide) Card */}
                {member.isWide && (
                  <div className="absolute inset-0 bg-linear-to-t from-[#1a2b4b] via-transparent to-transparent flex flex-col justify-end p-6 text-center">
                    <h4 className="text-[24px] font-bold font-serif tracking-wide leading-tight">
                      {member.name}
                    </h4>
                    <p className="text-[18px] font-medium opacity-90">
                      {member.role}
                    </p>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Action Button */}
        <div className="flex justify-center">
          <Button className="rounded-full bg-[#1e293b] hover:bg-black text-white px-10 py-7 text-md font-semibold gap-3 group shadow-xl border-none">
            Get To Know The Team
            <div className="bg-white rounded-full p-1.5 flex items-center justify-center transition-transform group-hover:translate-x-1">
              <ArrowRight className="h-4 w-4 text-[#1e293b]" />
            </div>
          </Button>
        </div>
      </div>
    </section>
  );
}
