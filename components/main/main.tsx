
import Image from "next/image";
import Link from "next/link";

import main_lib_image from "@/public/photo-1457369804613-52c61a468e7d.avif";
import shipping from "@/public/shipping.png";
import dollar from "@/public/Dollar_Sign.svg.webp";
import paper from "@/public/book.png";

const Main = () => {
  const Features = [
    {
      title: "Free Shipping",
      description: "On orders above 3,000",
      image: shipping,
    },
    {
      title: "Special Discounts",
      description: "Great books, better prices",
      image: dollar,
    },
    {
      title: "Premium Quality",
      description: "Books made to last",
      image: paper,
    },
  ];

  return (
    <div>
      
    </div>
  );
};

export default Main;

