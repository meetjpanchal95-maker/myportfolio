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
    <header className="fixed top-7 left-0 right-0 flex flex-col items-center w-full z-50 font-source-code">
      <div
        className="w-fit px-4 py-1 flex justify-center items-center gap-4 relative z-10 mx-auto"
        style={{
          borderRadius: "10px",
          border: "1px solid var(--color-text-primary)",
          background: "linear-gradient(0deg, color-mix(in srgb, var(--color-main-bg) 50%, transparent) 0%, color-mix(in srgb, var(--color-text-muted) 50%, transparent) 100%)",
          backdropFilter: "blur(12px)",
          WebkitBackdropFilter: "blur(12px)",
        }}
      >
        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-6 items-center text-base text-theme-text z-10 w-full justify-center">
          <Link
            href="/"
            className={`hover:opacity-80 hover:font-bold transition-all duration-800 ease-out hover:underline ${isActivePath("/") ? "font-bold" : ""}`}
          >
            Home
          </Link>
          <div
            className={`relative group px-2 flex items-center h-8 cursor-pointer transition-all duration-800 ease-out rounded hover:opacity-80 hover:font-bold hover:underline ${isActivePath("/work") || isActivePath("/playground") ? "font-bold" : ""}`}
            onMouseEnter={() => setIsOpen(true)}
            onMouseLeave={() => setIsOpen(false)}
            style={{ minWidth: "90px" }}
          >
            <span className="flex items-center gap-1 w-full h-full">
              Portfolio
              <svg className="w-3 h-3 ml-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
            </span>
            {isOpen && (
              <div
                className="absolute left-0 mt-6 w-36 bg-dark-charcoal border border-theme-text rounded shadow-lg z-20"
                onMouseEnter={() => setIsOpen(true)}
                onMouseLeave={() => setIsOpen(false)}
              >
                <Link
                  href="/work"
                  className={`block px-4 py-2 hover:bg-theme-text hover:text-dark-charcoal text-theme-text text-left w-full ${isActivePath("/work") ? "font-bold" : ""}`}
                >
                  Work
                </Link>
                <Link
                  href="/playground"
                  className={`block px-4 py-2 hover:bg-theme-text hover:text-dark-charcoal text-theme-text text-left w-full ${isActivePath("/playground") ? "font-bold" : ""}`}
                >
                  Playground
                </Link>
              </div>
            )}
          </div>
          <Link
            href="/about"
            className={`hover:opacity-80 hover:font-bold transition-all duration-800 ease-out hover:underline ${isActivePath("/about") ? "font-bold" : ""}`}
          >
            About
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
          <button
            type="button"
            onClick={toggleTheme}
            aria-label={
              theme === "dark" ? "Switch to light mode" : "Switch to dark mode"
            }
            className="relative w-11 h-6 rounded-full transition-colors duration-300 bg-dark-charcoal border border-theme-text focus:outline-none focus:ring-2 focus:ring-theme-text/50"
            style={{ minWidth: '44px' }}
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
      {/* Toggle button outside main menu removed as requested */}

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
            <div className="relative">
              <details>
                <summary className="cursor-pointer hover:opacity-80 hover:font-bold transition-all duration-800 ease-out hover:underline px-2 list-none">Portfolio</summary>
                <div className="flex flex-col pl-4">
                  <Link
                    href="/work"
                    onClick={toggleMenu}
                    className={`hover:opacity-80 hover:font-bold transition-all duration-800 ease-out hover:underline ${isActivePath("/work") ? "font-bold" : ""}`}
                  >
                    Work
                  </Link>
                  <Link
                    href="/playground"
                    onClick={toggleMenu}
                    className={`hover:opacity-80 hover:font-bold transition-all duration-800 ease-out hover:underline ${isActivePath("/playground") ? "font-bold" : ""}`}
                  >
                    Playground
                  </Link>
                </div>
              </details>
            </div>
            <Link
              href="/about"
              onClick={toggleMenu}
              className={`hover:opacity-80 hover:font-bold transition-all duration-800 ease-out hover:underline ${isActivePath("/about") ? "font-bold" : ""}`}
            >
              About
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
