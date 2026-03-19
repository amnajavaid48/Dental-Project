import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";

// Types
type CTAButton = {
  text: string;
  bgColor: string;
  textColor: string;
  icon?: React.ReactNode;
};
const ctaButtons: CTAButton[] = [
  {
    text: "Book Online",
    bgColor: "#121F39",
    textColor: "white",
    icon: <ArrowRight className="text-[#121F39] w-4 h-4" />,
  },
];

export default function CTAbanner() {
  return (
    <section className="relative w-full min-h-125 md:h-150 overflow-hidden flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/CTA banner.png"
          alt="Dental Team Banner"
          fill
          className="object-cover object-center brightness-90"
          priority
        />
      </div>

      {/* Content Container */}
      <div className="container mx-auto px-6 lg:ml-24 lg:px-12">
        <Card className="bg-[#b36b3f] border-none rounded-none max-w-xl relative overflow-hidden">
          {/* Dashed Border */}
          <div className="absolute inset-2 border border-white pointer-events-none border-dashed"></div>

          <CardContent className="p-8 md:p-12 text-white">
            <h1 className="text-2xl md:text-4xl font-serif mb-8 leading-tight">
              Wondering How We Can Help Improve Your Smile?
            </h1>
            {ctaButtons.map((btn, idx) => (
              <Button
                key={idx}
                className={`bg-[${btn.bgColor}] ${btn.textColor} px-4 py-3 rounded-full flex items-center gap-3 group transition-all h-auto`}
              >
                {btn.text}
                {btn.icon && (
                  <div className="bg-white rounded-full p-2 group-hover:translate-x-1 transition-transform">
                    {btn.icon}
                  </div>
                )}
              </Button>
            ))}
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
