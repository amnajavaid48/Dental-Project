import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

type ImageType = {
  src: string;
  alt: string;
};

export default function About() {
  const images: ImageType[] = [
    { src: "/About/About1.png", alt: "About 1" },
    { src: "/About/About2.png", alt: "About 2" },
    { src: "/About/About3.png", alt: "About 3" },
  ];

  return (
    <section className="bg-white py-12 md:py-16 lg:py-20 px-4 sm:px-6 lg:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 items-center">
        {/* LEFT SIDE - IMAGE GRID */}
        <div className="grid grid-cols-2 gap-4 w-full md:w-[80%] lg:w-[80%] mx-auto">
          {/* LEFT SMALL IMAGE */}
          <div className="relative w-full h-50 sm:h-62.5 md:h-95 mt-6">
            <Image
              src={images[0].src}
              alt={images[0].alt}
              fill
              className="rounded-sm object-cover"
              priority
            />
          </div>

          {/* RIGHT SIDE  */}
          <div className="flex flex-col gap-4 w-full h-75 sm:h-100 md:h-112.5">
            {images.slice(1).map((img, index) => (
              <div key={index} className="relative flex-1 w-full">
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="rounded-sm object-cover"
                />
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT SIDE - TEXT */}
        <div className="space-y-6 text-center lg:text-left">
          <h2
            className="font-serif mt-7 md:mt-0 text-[26px] sm:text-[32px] md:text-[38px] lg:text-[42px] leading-tight text-[#121F39]
           font-semibold"
          >
            Promising You Award <br className="hidden sm:block" /> Winning
            Dentistry
          </h2>

          <div className="space-y-4 text-gray-600 text-[15px] sm:text-[16px] md:text-[17px] leading-relaxed">
            <p>
              At Start Smiling you can feel safe in the hands of our expert
              team. Rest assured, every member of that team will do their utmost
              to ensure your experience with us is as stress free and enjoyable
              as possible.
            </p>

            <p>
              Your safety, well-being and happiness will always be our priority
              and we will strive to deliver first-class patient care and
              customer service. We want you to be involved at every stage of
              your treatment and we always offer a personalised service.
            </p>
          </div>

          <div className="flex justify-center lg:justify-start">
            <Button
              className="bg-[#B0653C] hover:bg-[#c47a4f] text-white px-5 py-3 rounded-full flex items-center gap-3 
            group transition-all h-auto"
            >
              Book Online
              <div className="bg-white rounded-full p-2 group-hover:translate-x-1 transition-transform">
                <ArrowRight className="text-[#B0653C] w-4 h-4" />
              </div>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
