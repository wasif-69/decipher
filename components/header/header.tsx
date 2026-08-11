"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const navLinks = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "Fiction",
    href: "/fiction",
  },
  {
    name: "Non Fiction",
    href: "/non-fiction",
  },
  {
    name: "Urdu Books",
    href: "/urdu-books",
  },
  {
    name: "Decipher Publishers",
    href: "/publishers",
  },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
  className={`
    fixed
    inset-x-0
    top-0
    z-50
    border-b
    transition-all
    duration-500
    ease-in-out

    ${
      scrolled
        ? "border-[#5a4432] bg-[#2b2119]"
        : "border-white/10 bg-transparent"
    }
  `}
>
  <div
    className="
      mx-auto
      flex
      h-[76px]
      w-[calc(100%-40px)]
      max-w-[1440px]
      items-center
      justify-between
      lg:w-[calc(100%-80px)]
    "
  >

    {/* Logo */}
    <Link
      href="/"
      className={`
        text-[16px]
        font-medium
        lowercase
        tracking-[0.16em]
        transition-colors
        duration-500

        ${
          scrolled
            ? "text-[#f1e8dc]"
            : "text-white"
        }
      `}
    >
      decipher

      <span
        className={`
          transition-colors
          duration-500

          ${
            scrolled
              ? "text-[#ca8d4c]"
              : "text-[#d85a46]"
          }
        `}
      >
        .
      </span>
    </Link>


    {/* Desktop Navigation */}
    <nav className="hidden items-center gap-8 md:flex">

      {navLinks.map((link) => (
        <Link
          key={link.name}
          href={link.href}
          className={`
            group
            relative
            py-2
            text-[10px]
            uppercase
            tracking-[0.08em]
            transition-colors
            duration-500

            ${
              scrolled
                ? "text-[#cdbca9]"
                : "text-white/90"
            }

            after:absolute
            after:bottom-0
            after:left-0
            after:h-px
            after:w-0
            after:transition-all
            after:duration-300
            group-hover:after:w-full

            ${
              scrolled
                ? "after:bg-[#ca8d4c]"
                : "after:bg-white"
            }
          `}
        >
          {link.name}
        </Link>
      ))}

    </nav>


    {/* Right */}
    <div className="flex items-center gap-6">

      {/* Bag */}
      <Link
        href="/cart"
        className={`
          text-[10px]
          uppercase
          tracking-[0.1em]
          transition-colors
          duration-500
          hover:opacity-60

          ${
            scrolled
              ? "text-[#f1e8dc]"
              : "text-white"
          }
        `}
      >
        Bag

        <span
          className={`
            ml-1
            transition-colors
            duration-500

            ${
              scrolled
                ? "text-[#8f6d50]"
                : "text-white/50"
            }
          `}
        >
          0
        </span>
      </Link>


      {/* Mobile menu */}
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        className={`
          text-[10px]
          uppercase
          tracking-[0.1em]
          transition-colors
          duration-500
          md:hidden

          ${
            scrolled
              ? "text-[#f1e8dc]"
              : "text-white"
          }
        `}
      >
        {menuOpen ? "Close" : "Menu"}
      </button>

    </div>

  </div>


  {/* Mobile Navigation */}
  {menuOpen && (
    <nav
      className={`
        border-t
        px-5
        pb-5
        transition-all
        duration-500
        md:hidden

        ${
          scrolled
            ? "border-[#5a4432] bg-[#2b2119]"
            : "border-white/10 bg-[#211913]/95 backdrop-blur-md"
        }
      `}
    >

      {navLinks.map((link) => (
        <Link
          key={link.name}
          href={link.href}
          onClick={() => setMenuOpen(false)}
          className={`
            block
            border-b
            py-4
            text-[11px]
            uppercase
            tracking-[0.08em]
            transition-colors
            duration-500
            last:border-b-0

            ${
              scrolled
                ? "border-[#5a4432] text-[#cdbca9]"
                : "border-white/10 text-white"
            }
          `}
        >
          {link.name}
        </Link>
      ))}

    </nav>
  )}

</header>
  );
}