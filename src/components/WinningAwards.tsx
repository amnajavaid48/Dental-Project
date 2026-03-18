import Image from "next/image";

// Row 1: 10 images
const row1 = Array.from({ length: 10 }, (_, i) => ({
  img: `/WinningAwardsImages/DentistryImg${i + 1}.png`,
}));

// Row 2: remaining images
const row2 = Array.from({ length: 11 }, (_, i) => ({
  img: `/WinningAwardsImages/DentistryImg${i + 11}.png`,
}));

export default function WinningAwards() {
  return (
    <section className="py-16 bg-[#fdf6f0]">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <div className="max-w-[1400px] mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-serif text-[#1a2b4b] mb-12">
            Promising You Award Winning Dentistry
          </h2>

          <div className="flex flex-col gap-8 items-center">
            {/* ✅ Row 1 (ALWAYS 10 items) */}
            <div className="flex flex-nowrap justify-center gap-4 max-w-[1100px] overflow-hidden">
              {row1.map((award, index) => (
                <div
                  key={index}
                  className="relative w-[80px] h-[60px] md:w-[100px] md:h-[70px] flex-shrink-0"
                >
                  <Image
                    src={award.img}
                    alt={`Award ${index + 1}`}
                    fill
                    className="object-contain grayscale hover:grayscale-0 transition duration-300"
                  />
                </div>
              ))}
            </div>

            {/* ✅ Row 2 (remaining, still single row) */}
            <div className="flex flex-nowrap justify-center gap-4 max-w-[1100px] overflow-hidden">
              {row2.map((award, index) => (
                <div
                  key={index}
                  className="relative w-[80px] h-[60px] md:w-[100px] md:h-[70px] flex-shrink-0"
                >
                  <Image
                    src={award.img}
                    alt={`Award ${index + 11}`}
                    fill
                    className="object-contain grayscale hover:grayscale-0 transition duration-300"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
