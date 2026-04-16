"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTheme } from "../app/theme/ThemeProvider";
import Image from "next/image";
import { useState } from "react";
import { X, Menu } from "lucide-react";

export default function Header() {
  const pathname = usePathname();
  const { theme, toggleTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  const isActivePath = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }

    return pathname === href || pathname.startsWith(`${href}/`);
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="fixed top-6 left-0 right-0 text-center w-full z-50 font-source-code flex sm:items-center items-start justify-center sm:flex-row flex-col sm:mx-0 mx-4">
      <div
        className="w-fit px-6 py-2.5 flex justify-center items-center gap-4 relative z-10 float-left sm:float-none mx-2 sm:mx-auto"
        style={{
          borderRadius: "10px",
          border: "1px solid var(--color-text-primary)",
          background: "linear-gradient(0deg, color-mix(in srgb, var(--color-main-bg) 50%, transparent) 0%, color-mix(in srgb, var(--color-text-muted) 50%, transparent) 100%)",
          backdropFilter: "blur(12px)",
          WebkitBackdropFilter: "blur(12px)",
        }}
      >
        {/* Desktop Menu */}
        <nav className="hidden md:flex gap-6 items-center text-base text-theme-text z-10">
          <Link
            href="/"
            className={`hover:opacity-80 hover:font-bold transition-all duration-800 ease-out hover:underline ${isActivePath("/") ? "font-bold" : ""}`}
          >
            Home
          </Link>
          <Link
            href="/work"
            className={`hover:opacity-80 hover:font-bold transition-all duration-800 ease-out hover:underline ${isActivePath("/work") ? "font-bold" : ""}`}
          >
            Work
          </Link>
          <Link
            href="/about"
            className={`hover:opacity-80 hover:font-bold transition-all duration-800 ease-out hover:underline ${isActivePath("/about") ? "font-bold" : ""}`}
          >
            About
          </Link>
          <Link
            href="/playground"
            className={`hover:opacity-80 hover:font-bold transition-all duration-800 ease-out hover:underline ${isActivePath("/playground") ? "font-bold" : ""}`}
          >
            Playground
          </Link>
          <Link
            href="/threads"
            className={`hover:opacity-80 hover:font-bold transition-all duration-800 ease-out hover:underline ${isActivePath("/threads") ? "font-bold" : ""}`}
          >
            Threads
          </Link>
          <Link
            href="/contact"
            className={`hover:opacity-80 hover:font-bold transition-all duration-800 ease-out hover:underline ${isActivePath("/contact") ? "font-bold" : ""}`}
          >
            Contact
          </Link>
        </nav>
        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-[var(--color-hover-bg)] focus:outline-none z-10"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isOpen ? (
            <X className="text-[var(--color-hover-bg)]" size={15} />
          ) : (
            <Menu className="text-[var(--color-hover-bg)]" size={15} />
          )}
        </button>
      </div>
      <div className="absolute right-10 top-2">
        <button
          type="button"
          onClick={toggleTheme}
          aria-label={
            theme === "dark" ? "Switch to light mode" : "Switch to dark mode"
          }
          className="relative w-11 h-6 rounded-full transition-colors duration-300 bg-dark-charcoal border border-theme-text focus:outline-none focus:ring-2 focus:ring-theme-text/50"
        >
          <span
            className={`absolute top-[0.2rem] inline-flex items-center justify-center w-4 h-4 rounded-full bg-white text-gray-800 shadow-md transition-all duration-300 ease-in-out ${
              theme === "dark" ? "left-6" : "left-1"
            }`}
          >
            {theme === "dark" ? (
              <Image
                unoptimized={true}
                src="/home/sun.gif"
                alt="Sun"
                width={12}
                height={12}
              />
            ) : (
              <Image
                unoptimized={true}
                src="/home/moon.gif"
                alt="Moon"
                width={12}
                height={12}
              />
            )}
          </span>
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-dark-charcoal border-t border-[var(--color-text-primary)] shadow-md mx-1">
          <nav className="flex flex-col space-y-4 p-5 text-primary font-medium w-full">
            <Link
              href="/"
              onClick={toggleMenu}
              className="hover:text-[var(--color-text-primary)] transition"
            >
              Home
            </Link>
            <Link
              href="/work"
              onClick={toggleMenu}
              className={`hover:opacity-80 hover:font-bold transition-all duration-800 ease-out hover:underline ${isActivePath("/work") ? "font-bold" : ""}`}
            >
              Work
            </Link>
            <Link
              href="/about"
              onClick={toggleMenu}
              className={`hover:opacity-80 hover:font-bold transition-all duration-800 ease-out hover:underline ${isActivePath("/about") ? "font-bold" : ""}`}
            >
              About
            </Link>
            <Link
              href="/playground"
              onClick={toggleMenu}
              className={`hover:opacity-80 hover:font-bold transition-all duration-800 ease-out hover:underline ${isActivePath("/playground") ? "font-bold" : ""}`}
            >
              Playground
            </Link>
            <Link
              href="/threads"
              onClick={toggleMenu}
              className={`hover:opacity-80 hover:font-bold transition-all duration-800 ease-out hover:underline ${isActivePath("/threads") ? "font-bold" : ""}`}
            >
              Threads
            </Link>
            <Link
              href="/contact"
              onClick={toggleMenu}
              className={`hover:opacity-80 hover:font-bold transition-all duration-800 ease-out hover:underline ${isActivePath("/contact") ? "font-bold" : ""}`}
            >
              Contact
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
