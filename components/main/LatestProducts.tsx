import Image from "next/image";
import main_lib_image from "@/public/photo-1457369804613-52c61a468e7d.avif";

const products = [
  {
    title: "The Silent Patient",
    author: "Alex Michaelides",
    price: "Rs. 1,850",
  },
  {
    title: "The Forty Rules of Love",
    author: "Elif Shafak",
    price: "Rs. 2,250",
  },
  {
    title: "The Nectar of Pain",
    author: "Anonymous",
    price: "Rs. 1,950",
  },
  {
    title: "Pride and Prejudice",
    author: "Jane Austen",
    price: "Rs. 1,650",
  },
];

export default function LatestProducts() {
  return (
    <section
      id="latest"
      className="bg-[#f5f3ee] py-24 sm:py-32"
    >
      <div className="mx-auto max-w-[1240px] px-6 lg:px-8">

        {/* Heading */}
        <div className="mb-12 border-b border-[#d9d6ce] pb-6">
          <div className="flex items-end justify-between">

            <div className="flex items-baseline gap-4">
              <span className="text-[11px] tracking-[0.15em] text-[#8b8982]">
                01 /
              </span>

              <h2 className="font-serif text-4xl font-medium leading-none tracking-[-0.04em] text-[#171715] sm:text-5xl lg:text-6xl">
                Latest Products
              </h2>
            </div>

            <span className="hidden text-[10px] uppercase tracking-[0.15em] text-[#8b8982] sm:block">
              New arrivals
            </span>

          </div>
        </div>

        {/* Products */}
        <div className="grid grid-cols-2 gap-x-4 gap-y-12 md:grid-cols-4 md:gap-x-6">

          {products.map((product, index) => (
            <article
              key={product.title}
              className="group"
            >

              {/* Book placeholder */}
              <div className="relative flex aspect-[3/4] items-center justify-center overflow-hidden bg-[#ebe8e0]">

                {/* Simple book */}
                <div
                  className={`
                    relative
                    h-[150px]
                    w-[105px]
                    shadow-[8px_8px_0px_#d3d0c7]
                    transition-transform
                    duration-500
                    group-hover:-translate-y-2
                    ${
                      index === 0
                        ? "rotate-[-2deg] bg-[#242421]"
                        : index === 1
                          ? "rotate-[2deg] bg-[#8c877c]"
                          : index === 2
                            ? "rotate-[-1deg] bg-[#b64232]"
                            : "rotate-[3deg] bg-[#d0c8b8]"
                    }
                  `}
                >

                  <div
                    className={`
                      absolute
                      inset-3
                      flex
                      items-center
                      justify-center
                      border
                      ${
                        index === 3
                          ? "border-[#171715]/40 text-[#171715]"
                          : "border-white/40 text-white"
                      }
                    `}
                  >
                    <span className="px-2 text-center text-[8px] uppercase tracking-[0.16em]">
                      Decipher
                    </span>
                  </div>

                </div>
              </div>

              {/* Product information */}
              <div className="pt-4">

                <div className="flex items-start justify-between gap-3">

                  <div>
                    <h3 className="text-[12px] font-medium text-[#171715]">
                      {product.title}
                    </h3>

                    <p className="mt-1 text-[11px] text-[#8b8982]">
                      {product.author}
                    </p>
                  </div>

                  <p className="whitespace-nowrap text-[11px] text-[#5f5d57]">
                    {product.price}
                  </p>

                </div>

                {/* Add to cart */}
                <button
                  type="button"
                  className="
                    mt-5
                    w-full
                    border
                    border-[#171715]
                    bg-transparent
                    py-3
                    text-[10px]
                    uppercase
                    tracking-[0.12em]
                    text-[#171715]
                    transition-all
                    duration-300
                    hover:bg-[#171715]
                    hover:text-[#f5f3ee]
                  "
                >
                  Add to Cart
                </button>

              </div>

            </article>
          ))}

        </div>
      </div>
    </section>
  );
}