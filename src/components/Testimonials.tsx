import Image from "next/image";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight, Play } from "lucide-react";

export default function Testimonials() {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-300 mx-auto">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-serif text-[#1e293b] text-center mb-16">
          What Our Patients Have To Say
        </h2>

        {/* Flex Layout for exact control */}
        <div className="flex flex-col lg:flex-row gap-6 items-stretch justify-center">
          {/*  Video Card */}
          <Card className="flex-2 lg:max-w-152.5 bg-[#fdf7f2] border-none rounded-2xl overflow-hidden shadow-sm flex flex-col">
            <div className="relative w-full aspect-video h-55 ">
              <Image
                src="/testimonial img.png"
                alt="Patient Video"
                fill
                className="px-2 "
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black/5">
                <Button className="rounded-full bg-[#0f172a] hover:bg-black text-white px-5 py-5 flex gap-2">
                  <span className="text-xs font-bold uppercase tracking-wider">
                    Play Video
                  </span>
                  <Play className="fill-current h-4 w-4" />
                </Button>
              </div>
            </div>
            <div className="p-6 flex justify-between items-center bg-[#fdf7f2]">
              <div>
                <h3 className="font-bold text-lg text-[#1e293b]">Iman</h3>
                <p className="text-[#c17a52] text-sm">Patient</p>
              </div>
              <Image src="/Vector.png" alt="Quote Img" width={32} height={32} />
            </div>
          </Card>

          {/*  Text Card  */}
          <Card className="flex-1 min-w-75 bg-[#fdf7f2] border-none rounded-2xl p-8 flex flex-col justify-between shadow-sm">
            <div className="text-center">
              <h3 className="font-bold text-lg text-[#1e293b]">
                Terri McWilliams
              </h3>
              <p className="text-[#c17a52] text-sm mb-4">Patient</p>
              <p className="text-slate-600 text-sm leading-relaxed">
                My first time visit was exceptional. Dr. Dancy’s team of
                professionals were warm, personable & courteous. The hygienist
                that cared for my teeth cleaning was “spot on.” His technique
                was great. I highly recommend Start Smiling for your dental care
                needs and I will be back.
              </p>
            </div>
            <div className="mt-6 flex justify-center">
              <Image
                src="/left-quote.png"
                alt="Quote Img"
                width={32}
                height={32}
              />
            </div>
          </Card>

          {/*  Text Card 2 */}
          <Card className="flex-1 min-w-75 bg-[#fdf7f2] border-none rounded-2xl p-8 flex flex-col justify-between shadow-sm">
            <div className="text-center">
              <h3 className="font-bold text-lg text-[#1e293b]">Peggy Madden</h3>
              <p className="text-[#c17a52] text-sm mb-4">Patient</p>
              <p className="text-slate-600 text-sm leading-relaxed">
                Amazing staff, Bianca did an excellent job, explained everything
                she was doing and the results. My teeth thank you! Dr. Patel
                explained what she feels needs my attention and understands my
                situation. Ashley was very informative on my check out. Very
                happy to be a new patient!
              </p>
            </div>
            <div className="mt-6 flex justify-center">
              <Image
                src="/left-quote.png"
                alt="Quote Img"
                width={32}
                height={32}
              />
            </div>
          </Card>
        </div>

        {/* Navigation Buttons */}
        <div className="flex justify-center gap-4 mt-12">
          <Button
            size="icon"
            className="w-10 h-10 rounded-full bg-[#b36b3f] hover:bg-[#9a5a33] text-white"
          >
            <ArrowLeft className="h-5 w-5" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="w-10 h-10 rounded-full border-slate-300"
          >
            <ArrowRight className="h-5 w-5 text-slate-600" />
          </Button>
        </div>
      </div>
    </section>
  );
}
