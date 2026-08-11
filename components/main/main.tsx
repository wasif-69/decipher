import Image from "next/image";
import Link from "next/link";

import mainImage from "@/public/main.jpg";

export default function Main() {
  return (
    <main className="bg-[#f5f3ee]">
      {/* HERO */}
      <section className="relative h-screen min-h-[680px] w-full overflow-hidden">
        
        {/* Background Image */}
        <Image
          src={mainImage}
          alt="Decipher bookstore interior"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />

        {/* Very subtle overlay */}
        <div className="absolute inset-0 bg-black/10" />

        {/* Hero Content */}
        <div className="absolute inset-0 flex flex-col justify-end">

          <div className="mx-auto w-full max-w-[1440px] px-6 pb-24 sm:px-10 lg:px-16 lg:pb-28">

            {/* Small label */}
            <p className="mb-5 text-[10px] uppercase tracking-[0.22em] text-white/75">
              Independent Bookshop · Islamabad
            </p>

            {/* Main heading */}
            <h1 className="max-w-[850px] font-serif text-[clamp(4rem,9vw,9rem)] font-medium leading-[0.82] tracking-[-0.065em] text-white">
              Books for
              <br />
              <span className="italic">
                curious minds.
              </span>
            </h1>

            {/* Bottom information */}
            <div className="mt-10 flex flex-col gap-7 sm:flex-row sm:items-end sm:justify-between">



              <Link
                href="#latest"
                className="
                  w-fit
                  border-b
                  border-white/70
                  pb-1.5
                  text-[10px]
                  uppercase
                  tracking-[0.16em]
                  text-white
                  transition-opacity
                  duration-300
                  hover:opacity-50
                "
              >
                Explore collection ↓
              </Link>

            </div>

          </div>
        </div>

        {/* Bottom scrolling strip */}
        {/* Moving marquee */}
<div className="absolute bottom-0 left-0 w-full overflow-hidden border-t border-[#8f6848]/40 bg-[#2b2119]">

  <div className="flex w-max animate-[marqueeReverse_30s_linear_infinite]">

    {[...Array(4)].map((_, index) => (
      <div
        key={index}
        className="flex items-center whitespace-nowrap py-4"
      >

        <span className="mx-7 font-serif text-sm italic text-[#f1e8dc]">
          Read something that stays with you.
        </span>

        <span className="text-[#ca8d4c]">
          ✦
        </span>

        <span className="mx-7 text-[9px] uppercase tracking-[0.22em] text-[#cdbca9]">
          Stay curious
        </span>

        <span className="text-[#ca8d4c]">
          ✦
        </span>

        <span className="mx-7 font-serif text-sm italic text-[#f1e8dc]">
          Find your next chapter.
        </span>

        <span className="text-[#ca8d4c]">
          ✦
        </span>

      </div>
    ))}

  </div>

</div>
      </section>
    </main>
  );
}