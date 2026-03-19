import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  const buttons = [
    {
      text: "Book Online",
      variant: "primary",
    },
    {
      text: "Learn More About Us",
      variant: "outline",
    },
  ];

  return (
    <section className="relative w-full py-6 lg:py-0 flex items-center overflow-hidden">
      {/* BACKGROUND */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/Hero/HeroBgImage.png"
          alt="Clinic Background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-linear-to-r from-[#121F39]/60 to-[#121F39]/90" />
      </div>

      {/* CONTENT */}
      <div className="relative z-20 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-12 flex flex-col-reverse lg:flex-row items-center justify-between gap-10">
        {/* LEFT TEXT */}
        <div className="flex-1 text-white space-y-5 text-center lg:text-left">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif lg:text-4xl leading-tight">
            Welcome To <br />
            <span className="font-semibold">Start Smiling Dental Practice</span>
          </h1>

          <p className="text-gray-200 text-sm sm:text-base max-w-xl mx-auto lg:mx-0 leading-relaxed">
            We provide gentle, high-quality dental care in a calm and friendly
            environment. Our experienced team focuses on your comfort at every
            step, helping you achieve a healthy, confident smile that lasts.
          </p>

          {/* BUTTONS (MAP USED) */}
          <div className="flex flex-wrap justify-center lg:justify-start items-center gap-4">
            {buttons.map((btn, index) => (
              <Button
                key={index}
                variant={btn.variant === "outline" ? "outline" : "default"}
                className={`px-5 py-3 rounded-full flex items-center gap-3 group transition-all h-auto
                  ${
                    btn.variant === "primary"
                      ? "bg-[#B0653C] hover:bg-[#c47a4f] text-white"
                      : "bg-transparent border-white text-white hover:bg-white hover:text-[#121F39]"
                  }`}
              >
                {btn.text}
                <div
                  className={`rounded-full p-2 transition-all
                    ${
                      btn.variant === "primary"
                        ? "bg-white group-hover:translate-x-1"
                        : "bg-white border border-white group-hover:border-[#121F39]"
                    }`}
                >
                  <ArrowRight className="w-4 h-4 text-[#B0653C]" />
                </div>
              </Button>
            ))}
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="flex-1 flex justify-center lg:justify-end items-end">
          <div className="relative w-62.5 sm:w-[320px] md:w-100 lg:w-125">
            <Image
              src="/Hero/HeroImg.png"
              alt="Smiling Professional"
              width={600}
              height={700}
              className="object-contain w-full h-auto"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
