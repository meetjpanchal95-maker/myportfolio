"use client";

import Link from "next/link";

import {
  ArrowUpRightIcon,
  AtSignIcon,
  CircleArrowDownIcon,
  PhoneIcon,
} from "lucide-react";
import ContactForm from "./ContactForm";

function ContactUs({ detailedMode = false }: { detailedMode?: boolean }) {
  const MediaLinks = [
    { name: "Behance", url: "https://www.behance.net/meet-works" },
    { name: "LinkedIn", url: "https://www.linkedin.com/in/meetjpanchal" },
  ];

  const QuickLinks = [
    { label: "Home", href: "/" },
    { label: "Work", href: "/work" },
    { label: "Playground", href: "/playground" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <>
      {!detailedMode && <hr className="border-border-custom border-b-[3px]" />}

      <div className="flex py-12 px-4 sm:mx-16 mx-4 border-l-[3px] border-r-[3px] border-border-custom h-full flex-col gap-10 relative">
        {/* Corner dots */}
        {[
          "top-[-0.35rem] left-[-5.5px]",
          "top-[-0.35rem] right-[-5.5px]",
          "bottom-[-0.35rem] left-[-5.5px]",
          "bottom-[-0.35rem] right-[-5.5px]",
        ].map((pos) => (
          <span key={pos} className={`absolute ${pos} w-2 h-2 bg-light-gray rounded-full z-10`} />
        ))}

        {/* ── Main grid ── */}
        <div className="grid sm:grid-cols-2 grid-cols-1 gap-4">
          {/* LEFT — heading + social links + contact info */}
          <div className="flex flex-col items-start justify-start w-2/3 gap-4">
            <div className="mt-[30px]">
              <h1 className="text-5xl font-bebasNeue">Get in touch</h1>
              <h2 className="text-5xl font-bebasNeue text-[#787878]">
                Send an email or DM and i'll get back to you asap
              </h2>
              <div className="flex items-start flex-wrap justify-start gap-4 py-6">
                {MediaLinks.map((link) => (
                  <div key={link.name}>
                    <Link
                      href={link.url}
                      className="text-base flex items-center justify-center gap-2 bg-dark-charcoal px-8 py-3 rounded-full font-montserrat hover:bg-light-gray hover:text-theme-main transition-colors duration-200"
                    >
                      {link.name}
                      <ArrowUpRightIcon className="w-4 h-4" />
                    </Link>
                  </div>
                ))}
              </div>
              <div className="flex items-start flex-col justify-center gap-2 pt-4">
                <span className="text-2xl font-montserrat">Let's Talk</span>
                <span className="text-lg font-montserrat flex items-center justify-start gap-4">
                  <AtSignIcon className="w-6 h-6" /> contact@meet-works.com
                </span>
                <span className="text-lg font-montserrat flex items-center justify-start gap-4">
                  <PhoneIcon className="w-6 h-6" /> +49 15252861912
                </span>
              </div>
            </div>
          </div>
          <hr className="border-border-custom border-b-[3px] sm:hidden block mx-[-1rem]" />
          {/* RIGHT — contact form */}
          <div className="flex items-start justify-start sm:w-3/4 w-full">
            <ContactForm />
          </div>
        </div>
        <hr className="border-border-custom border-b-[3px] sm:hidden block mx-[-1rem]" />
        {/* ── Bottom section — quick links + big tagline ── */}
        <div className="flex items-start flex-wrap justify-start gap-4 my-12">
          <div className="flex items-start flex-wrap justify-start gap-4 flex-col">
            <span className="text-2xl font-montserrat">Quick Links</span>
            <span className="text-lg font-montserrat flex items-center justify-start gap-4 sm:w-1/3 w-full flex-wrap">
              {QuickLinks.map((link) => (
                <div key={link.label}>
                  <Link
                    href={link.href}
                    className="hover:text-theme-main text-base flex items-center justify-center gap-2 bg-dark-charcoal px-8 py-3 rounded-full font-montserrat hover:bg-light-gray transition-colors duration-200"
                  >
                    {link.label}
                    <ArrowUpRightIcon className="w-4 h-4" />
                  </Link>
                </div>
              ))}
              <div>
                <Link
                  download="Meet_Panchal_Resume.pdf"
                  href="/Meet_Panchal_Resume.pdf"
                  target="_blank"
                  className="hover:text-theme-main text-base flex items-center justify-center gap-2 bg-dark-charcoal px-8 py-3 rounded-full font-montserrat hover:bg-light-gray transition-colors duration-200"
                >
                  <CircleArrowDownIcon className="w-4 h-4" /> Download Resume
                </Link>
              </div>
            </span>
          </div>
          <div className="flex items-start flex-wrap justify-start gap-4 flex-col mt-4">
            <span className="sm:text-8xl text-6xl font-bebasNeue tracking-[0.2em]">
              LET'S WORK TOGETHER
            </span>
          </div>
        </div>
      </div>
      <hr className="border-border-custom border-t-[3px] mb-8" />
    </>
  );
}

export default ContactUs;
