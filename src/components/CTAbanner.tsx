import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";

export default function CTAbanner() {
  return (
    <section className="relative w-full min-h-[500px] md:h-[600px] overflow-hidden flex items-center">
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
        {/* Shadcn Card for the Orange Box */}
        <Card className="bg-[#b36b3f] border-none rounded-none max-w-xl relative overflow-hidden">
          {/* Inner Dashed Border Effect */}
          <div className="absolute inset-2 border border-white pointer-events-none border-dashed"></div>

          <CardContent className="p-8 md:p-12 text-white">
            <h1 className="text-2xl md:text-4xl font-serif mb-8 leading-tight">
              Wondering How We Can Help Improve Your Smile?
            </h1>

            {/* Shadcn Button */}
            <Button
              className="bg-[#121F39] text-white px-4 py-3 rounded-full  flex items-center gap-3
             group transition-all h-auto"
            >
              Book Online
              <div className="bg-white rounded-full p-2 group-hover:translate-x-1 transition-transform">
                <ArrowRight className="text-[#121F39] w-4 h-4" />
              </div>
            </Button>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
