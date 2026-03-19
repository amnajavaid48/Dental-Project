"use client";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function PatientPlace() {
  return (
    <section className="relative w-full h-[543] flex items-center justify-center overflow-hidden">
      {/* 1. Main Background Image with Brown Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/PatientPlaceImages/Background.png"
          alt="Dental Office Background"
          fill
          className="object-cover"
          priority
        />
      </div>

    
      <div className="relative z-10 flex items-center justify-center w-full max-w-4xl px-4">

        <div className="absolute w-96 h-96 md:w-130 md:h-130 opacity-20 animate-spin-slow">
          <Image
            src="/PatientPlaceImages/Circle.png"
            alt="Outer Circle"
            fill
            className="object-contain"
          />
        </div>

        <div className="absolute w-64 h-64 md:w-90 md:h-90 opacity-30 animate-reverse-spin">
          <Image
            src="/PatientPlaceImages/Circle2.png"
            alt="Inner Circle"
            fill
            className="object-contain"
          />
        </div>

        {/* 3. Central Content */}
        <div className="relative z-20 text-center text-white flex flex-col items-center">
          <h2 className="text-4xl md:text-5xl font-serif mb-6 leading-tight">
            Welcome To Your Happy Place
          </h2>

          
          <p className="mb-10 leading-relaxed ">
            Dental visits can be enjoyable. At Start Smiling, we combine
            advanced digital dentistry with a modern, tranquil, spa-like
            environment. Relax with soft music while our team delivers precise,
            comfortable care for every treatment.
          </p>

          {/* New Patient Button */}
          <div className="justify-center flex">
            <Button
              variant="outline"
              className="bg-[#121F39] border-0 hover:bg-[#1a2d52] hover:text-white px-4 py-3
              rounded-full flex items-center gap-4 group transition-all h-auto shadow-lg"
            >
              <span className="text-sm font-bold uppercase tracking-widest">
                New Patient
              </span>
              <div className="bg-white rounded-full p-2 transition-colors">
                <ArrowRight className="w-4 h-4 text-[#121F39]" />
              </div>
            </Button>
          </div>
        </div>
      </div>

      <style jsx global>{`
        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        @keyframes reverse-spin {
          from {
            transform: rotate(360deg);
          }
          to {
            transform: rotate(0deg);
          }
        }
        .animate-spin-slow {
          animation: spin-slow 25s linear infinite;
        }
        .animate-reverse-spin {
          animation: reverse-spin 20s linear infinite;
        }
      `}</style>
    </section>
  );
}
