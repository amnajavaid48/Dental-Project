import Image from "next/image";

const images = Array.from({ length: 21 }, (_, i) => ({
  img: `/WinningAwardsImages/DentistryImg${i + 1}.png`,
}));

export default function WinningAwards() {
  // We keep the desktop logic, but for mobile, we'll treat them as one collection
  const row1 = images.slice(0, 10);
  const row2 = images.slice(10);

  return (
    <section className="py-12 md:py-20 bg-[#fdf6f0]">
      <div className="container mx-auto px-4">
        {/* Teeth Section - Clean and Flush */}
        <div className="max-w-4xl mx-auto mb-12 md:mb-16">
          <div className="flex justify-center items-center rounded-lg overflow-hidden shadow-sm">
            <div className="relative w-1/2 aspect-[3/2] sm:aspect-[4/3]">
              <Image
                src="/Dental Teeth 1.png"
                alt="Before"
                fill
                className="object-cover"
                priority
              />
            </div>
            <div className="relative w-1/2 aspect-[3/2] sm:aspect-[4/3]">
              <Image
                src="/Dental Teeth 2.png"
                alt="After"
                fill
                className="object-cover border-l border-white/20"
                priority
              />
            </div>
          </div>

          <div className="flex justify-center gap-2 mt-6">
            {[...Array(8)].map((_, i) => (
              <div
                key={i}
                className={`rounded-full ${i === 4 ? "bg-[#b36b3f] w-2.5 h-2.5" : "bg-gray-300 w-2 h-2"}`}
              />
            ))}
          </div>
        </div>

        {/* Awards Section */}
        <div className="max-w-[1200px] mx-auto text-center">
          <h2 className="text-2xl md:text-4xl font-serif text-[#1a2b4b] mb-10 md:mb-14 px-4">
            Promising You Award Winning Dentistry
          </h2>

          {/* Desktop/Tablet View: Preserves your 10/11 row split */}
          <div className="hidden md:flex flex-col gap-12">
            <div className="grid md:grid-cols-5 lg:grid-cols-10 place-items-center">
              {row1.map((award, i) => (
                <AwardItem key={i} src={award.img} />
              ))}
            </div>
            <div className="grid md:grid-cols-5 lg:grid-cols-11 gap-14 place-items-center">
              {row2.map((award, i) => (
                <AwardItem key={i} src={award.img} />
              ))}
            </div>
          </div>

          {/* Mobile View: Clean 3-column grid without massive vertical gaps */}
          <div className="grid grid-cols-3 gap-y-8 gap-x-4 md:hidden place-items-center">
            {images.map((award, i) => (
              <AwardItem key={i} src={award.img} isMobile />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function AwardItem({
  src,
  isMobile = false,
}: {
  src: string;
  isMobile?: boolean;
}) {
  return (
    <div
      className={`relative transition-all duration-300 hover:scale-105 
      ${isMobile ? "w-full h-16" : "w-24 h-20"}`}
    >
      <Image
        src={src}
        alt="Award Logo"
        fill
        className="object-contain grayscale opacity-80 hover:grayscale-0 hover:opacity-100"
      />
    </div>
  );
}
