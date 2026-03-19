import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import React from "react";

// --- Types ---
type FormField = {
  type: "text" | "email" | "textarea";
  placeholder: string;
  rows?: number; // only for textarea
};

const formFields: FormField[] = [
  { type: "text", placeholder: "First Name" },
  { type: "text", placeholder: "Last Name" },
  { type: "text", placeholder: "Phone Number" },
  { type: "email", placeholder: "Email" },
  { type: "text", placeholder: "Which Treatment are you interested in ?" },
  { type: "textarea", placeholder: "Additional Notes", rows: 3 },
];

export default function SmileFormSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Top Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-end pb-6 gap-6">
          <h2 className="text-4xl md:text-5xl font-serif text-[#1a2b4b] max-w-lg leading-tight">
            Would You Like To <br /> Transform Your Smile?
          </h2>
          <p className="text-gray-500 max-w-lg text-sm md:text-base leading-relaxed">
            You can relax with a hot drink while you chat about how, and in{" "}
            <br /> what ways, Start Smiling can help to improve your smile.
          </p>
        </div>

        {/* Thin Divider Line */}
        <div className="w-full h-px bg-[#121F39] mb-12"></div>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 items-start">
          {/* LEFT: Image */}
          <div className="lg:col-span-5 w-full h-125 md:h-150 relative rounded-sm overflow-hidden z-0">
            <Image
              src="/FormSection Img.png"
              alt="Smiling Professional"
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* RIGHT: Text + Form */}
          <div className="lg:col-span-7 lg:pl-6 z-10">
            <div className="mb-6">
              <h3 className="text-2xl md:text-2xl font-serif text-[#1a2b4b] mb-3">
                Contact Us For Your Free Smile Analysis Today
              </h3>
              <p className="text-gray-600 text-sm md:text-[15px] leading-relaxed max-w-lg">
                Whether it&#39;s a routine check up or a smile makeover, please
                complete the below form and one of the team will be in touch
              </p>
            </div>

            {/* Form Section */}
            <div className="bg-[#f8f1ec] rounded-md p-6 md:p-8 shadow-2xl lg:-ml-36 relative">
              <form className="space-y-3">
                {/* Map over form fields */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {formFields.slice(0, 4).map((field) => (
                    <InputField key={field.placeholder} field={field} />
                  ))}
                </div>
                <div className="grid grid-cols-1 gap-3">
                  {formFields.slice(4).map((field) => (
                    <InputField key={field.placeholder} field={field} />
                  ))}
                </div>

                {/* Consent Checkbox */}
                <div className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    id="consent"
                    className="w-5 h-5 accent-[#a66b4c] cursor-pointer"
                  />
                  <label
                    htmlFor="consent"
                    className="text-[10px] text-gray-500 leading-tight cursor-pointer"
                  >
                    I consent to my personal data being collected and stored as
                    per the Privacy Policy*
                  </label>
                </div>

                {/* Submit Button */}
                <div className="flex justify-center pt-2">
                  <Button
                    variant="outline"
                    className="bg-[#B0653C] text-white px-4 py-3 rounded-full flex items-center gap-3 group transition-all h-auto"
                  >
                    Ask a Question
                    <div className="border border-white bg-white rounded-full p-2 group-hover:border-[#121F39] transition-colors">
                      <ArrowRight className="w-4 text-[#B0653C] h-4" />
                    </div>
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// --- Sub-component for Form Fields ---
function InputField({ field }: { field: FormField }) {
  if (field.type === "textarea") {
    return (
      <textarea
        placeholder={field.placeholder}
        rows={field.rows}
        className="w-full p-3 text-sm border-none outline-none bg-white placeholder:text-gray-400 resize-none"
      />
    );
  }
  return (
    <input
      type={field.type}
      placeholder={field.placeholder}
      className="w-full p-3 text-sm border-none outline-none bg-white placeholder:text-gray-400"
    />
  );
}
