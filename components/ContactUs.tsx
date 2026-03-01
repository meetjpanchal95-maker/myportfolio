"use client";

import Link from "next/link";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

import {
  ArrowUpRightIcon,
  AtSignIcon,
  CircleArrowDownIcon,
  PhoneIcon,
} from "lucide-react";
import ContactForm from "./ContactForm";

// ─── Shared animation config ───────────────────────────────────────────────
const DURATION = 1;
const EASE = [0.25, 0.1, 0.25, 1] as const;

// Text slides in from the right
const textVariants = {
  hidden: { opacity: 0, x: 60 },
  visible: { opacity: 1, x: 0, transition: { duration: DURATION, ease: EASE } },
};

// Buttons expand from 50 → 100 % width (clip) + fade in
const buttonVariants = {
  hidden: { opacity: 0, scaleX: 0.5, originX: 0 },
  visible: {
    opacity: 1,
    scaleX: 1,
    transition: { duration: DURATION, ease: EASE },
  },
};

// Contact form drops from above
const formVariants = {
  hidden: { opacity: 0, y: -50 },
  visible: { opacity: 1, y: 0, transition: { duration: DURATION, ease: EASE } },
};

// Staggered button groups
const buttonGroupVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0,
    },
  },
};

// ─── Component ─────────────────────────────────────────────────────────────
function ContactUs({ detailedMode = false }: { detailedMode?: boolean }) {
  const ref = useRef(null);
  // Trigger every time 20% of the section is visible (not just once)
  const inView = useInView(ref, { once: false, amount: 0.2 });

  const animateState = inView ? "visible" : "hidden";

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

      <div
        ref={ref}
        className="flex py-12 px-4 sm:mx-16 mx-4 border-l-[3px] border-r-[3px] border-border-custom h-full flex-col gap-10 relative"
      >
        {/* Corner dots */}
        {[
          "top-[-0.35rem] left-[-5.5px]",
          "top-[-0.35rem] right-[-5.5px]",
          "bottom-[-0.35rem] left-[-5.5px]",
          "bottom-[-0.35rem] right-[-5.5px]",
        ].map((pos) => (
          <span
            key={pos}
            className={`absolute ${pos} w-2 h-2 bg-light-gray rounded-full z-10`}
          />
        ))}

        {/* ── Main grid ── */}
        <div className="grid sm:grid-cols-2 grid-cols-1 gap-4">
          {/* LEFT — heading + social links + contact info */}
          <div className="flex flex-col items-start justify-start w-2/3 gap-4">
            <div className="mt-[30px]">
              {/* Heading — right to left */}
              <motion.h1
                className="text-5xl font-bebasNeue"
                variants={textVariants}
                initial="hidden"
                animate={animateState}
              >
                Get in touch
              </motion.h1>
              <motion.h2
                className="text-5xl font-bebasNeue text-[#787878]"
                variants={textVariants}
                initial="hidden"
                animate={animateState}
              >
                Send an email or DM and i'll get back to you asap
              </motion.h2>

              {/* Media link buttons — 50 % → 100 % */}
              <motion.div
                className="flex items-start flex-wrap justify-start gap-4 py-6"
                variants={buttonGroupVariants}
                initial="hidden"
                animate={animateState}
              >
                {MediaLinks.map((link) => (
                  <motion.div key={link.name} variants={buttonVariants}>
                    <Link
                      href={link.url}
                      className="text-base flex items-center justify-center gap-2 bg-dark-charcoal px-8 py-3 rounded-full font-montserrat hover:bg-light-gray hover:text-theme-main transition-colors duration-200"
                    >
                      {link.name}
                      <ArrowUpRightIcon className="w-4 h-4" />
                    </Link>
                  </motion.div>
                ))}
              </motion.div>

              {/* Contact info — right to left */}
              <motion.div
                className="flex items-start flex-col justify-center gap-2 pt-4"
                variants={textVariants}
                initial="hidden"
                animate={animateState}
              >
                <span className="text-2xl font-montserrat">Let's Talk</span>
                <span className="text-lg font-montserrat flex items-center justify-start gap-4">
                  <AtSignIcon className="w-6 h-6" /> contact@meet-works.com
                </span>
                <span className="text-lg font-montserrat flex items-center justify-start gap-4">
                  <PhoneIcon className="w-6 h-6" /> +49 15252861912
                </span>
              </motion.div>
            </div>
          </div>

          <hr className="border-border-custom border-b-[3px] sm:hidden block mx-[-1rem]" />

          {/* RIGHT — contact form (top to bottom) */}
          <motion.div
            className="flex items-start justify-start sm:w-3/4 w-full"
            variants={formVariants}
            initial="hidden"
            animate={animateState}
          >
            <ContactForm />
          </motion.div>
        </div>

        <hr className="border-border-custom border-b-[3px] sm:hidden block mx-[-1rem]" />

        {/* ── Bottom section — quick links + big tagline ── */}
        <div className="flex items-start flex-wrap justify-start gap-4 my-12">
          <div className="flex items-start flex-wrap justify-start gap-4 flex-col">
            {/* "Quick Links" label — right to left */}
            <motion.span
              className="text-2xl font-montserrat"
              variants={textVariants}
              initial="hidden"
              animate={animateState}
            >
              Quick Links
            </motion.span>

            {/* Quick-link buttons — 50 % → 100 % */}
            <motion.span
              className="text-lg font-montserrat flex items-center justify-start gap-4 sm:w-1/3 w-full flex-wrap"
              variants={buttonGroupVariants}
              initial="hidden"
              animate={animateState}
            >
              {QuickLinks.map((link) => (
                <motion.div key={link.label} variants={buttonVariants}>
                  <Link
                    href={link.href}
                    className="hover:text-theme-main text-base flex items-center justify-center gap-2 bg-dark-charcoal px-8 py-3 rounded-full font-montserrat hover:bg-light-gray transition-colors duration-200"
                  >
                    {link.label}
                    <ArrowUpRightIcon className="w-4 h-4" />
                  </Link>
                </motion.div>
              ))}

              {/* Resume download button — 50 % → 100 % */}
              <motion.div variants={buttonVariants}>
                <Link
                  download="Meet_Panchal_Resume.pdf"
                  href="/Meet_Panchal_Resume.pdf"
                  target="_blank"
                  className="hover:text-theme-main text-base flex items-center justify-center gap-2 bg-dark-charcoal px-8 py-3 rounded-full font-montserrat hover:bg-light-gray transition-colors duration-200"
                >
                  <CircleArrowDownIcon className="w-4 h-4" /> Download Resume
                </Link>
              </motion.div>
            </motion.span>
          </div>

          {/* Big tagline — right to left */}
          <motion.div
            className="flex items-start flex-wrap justify-start gap-4 flex-col mt-4"
            variants={textVariants}
            initial="hidden"
            animate={animateState}
          >
            <span className="sm:text-8xl text-6xl font-bebasNeue tracking-[0.2em]">
              LET'S WORK TOGETHER
            </span>
          </motion.div>
        </div>
      </div>

      <hr className="border-border-custom border-t-[3px] mb-8" />
    </>
  );
}

export default ContactUs;