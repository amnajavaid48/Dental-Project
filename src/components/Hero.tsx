import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative w-full min-h-150 flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/Hero/HeroBgImage.png"
          alt="Clinic Background"
          fill
          className="object-cover"
          priority
        />
        <div
          className="absolute inset-0 z-10"
          style={{
            background: `linear-gradient(to right, rgba(18, 31, 57, 0.4) 0%, rgba(18, 31, 57, 0.9) 100%)`,
          }}
        />
      </div>

      {/* Main Content Container */}
      <div className="relative z-20 max-w-7xl mx-auto w-full px-6 lg:px-12 flex flex-col md:flex-row items-center justify-between gap-10">
        {/* LEFT CONTENT */}
        <div className="flex-1 text-white space-y-5">
          <h1 className="text-5xl  md:text-6xl">
            Welcome To <br />
            <span className="font-semibold">Start Smiling Dental Practice</span>
          </h1>

          <p className="text-gray-200  max-w-xl  leading-relaxed">
            We provide gentle, high-quality dental care in a calm and friendly{" "}
            <br />
            environment. Our experienced team focuses on your comfort at every{" "}
            <br />
            step, helping you achieve a healthy, confident smile that lasts.
          </p>

          <div className="flex flex-wrap items-center gap-5">
            {/* Orange Button with Arrow */}
            <Button
              className="bg-[#B0653C] hover:bg-[#c47a4f] text-white px-4 py-3 rounded-full  flex items-center gap-3
             group transition-all h-auto"
            >
              Book Online
              <div className="bg-white rounded-full p-2 group-hover:translate-x-1 transition-transform">
                <ArrowRight className="text-[#B0653C] w-4 h-4" />
              </div>
            </Button>

            {/* Ghost Button with Arrow */}
            <Button
              variant="outline"
              className="bg-transparent border-white text-white hover:bg-white hover:text-[#121F39] px-4 py-3 
              rounded-full  flex items-center gap-3 group transition-all h-auto"
            >
              Learn More About Us
              <div className="border border-white bg-white rounded-full p-2 group-hover:border-[#121F39] transition-colors">
                <ArrowRight className="w-4 text-black h-4" />
              </div>
            </Button>
          </div>
        </div>

        {/* RIGHT IMAGE SECTION */}
        <div className="flex-1 relative flex justify-end items-end self-end h-full md:pt-20 ">
          {/* Main Doctor Image - Touching the bottom edge */}
          <div className="relative z-30 w-full max-w-137.5 md:mt-auto ">
            <Image
              src="/Hero/HeroImg.png"
              alt="Smiling Professional"
              width={600}
              height={700}
              className="object-contain block align-bottom"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
