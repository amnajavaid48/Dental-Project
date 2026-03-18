import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function About() {
  const images = [
    { src: "/About/About1.png" },
    { src: "About/About2.png" },
    { src: "About/About3.png" },
  ];

  return (
    <section className="bg-gray-100 py-16 px-6 lg:px-20 ">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12  items-center">
        {/* LEFT SIDE - IMAGE GRID */}
        <div className="grid grid-cols-2 gap-4 items-center">
          {/* BIG IMAGE */}
          <div className="row-span-2">
            <Image
              src={images[0].src}
              alt="About 1"
              width={400}
              height={500}
              className="rounded-md object-cover  w-full"
            />
          </div>

          {/* SMALL TOP */}
          <div>
            <Image
              src={images[1].src}
              alt="About 2"
              width={200}
              height={200}
              className="rounded-md object-cover w-full h-full"
            />
          </div>

          {/* SMALL BOTTOM */}
          <div>
            <Image
              src={images[2].src}
              alt="About 3"
              width={200}
              height={200}
              className="rounded-md object-cover w-full h-full"
            />
          </div>
        </div>

        {/* RIGHT SIDE - TEXT */}
        <div className="space-y-6">
          <h1 className="font-semibold text-3xl lg:text-[42px] leading-tight text-gray-900">
            Promising You Award <br /> Winning Dentistry
          </h1>

          <p className="text-gray-600 leading-relaxed">
            At Start Smiling you can feel safe in the hands of our expert team.
            Rest assured, every member of that team will do their utmost to
            ensure your experience with us is as stress free and enjoyable as
            possible.
          </p>

          <p className="text-gray-600 leading-relaxed">
            Your safety, well-being and happiness will always be our priority
            and we will strive to deliver first-class patient care and customer
            service. We want you to be involved at every stage of your treatment
            and we always offer a personalised service.
          </p>

          <Button
            className="bg-[#B0653C] hover:bg-[#c47a4f] text-white px-4 py-3 rounded-full  flex items-center gap-3
             group transition-all h-auto"
          >
            Book Online
            <div className="bg-white rounded-full p-2 group-hover:translate-x-1 transition-transform">
              <ArrowRight className="text-[#B0653C] w-4 h-4" />
            </div>
          </Button>
        </div>
      </div>
    </section>
  );
}
