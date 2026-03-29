"use client";

import Link from "next/link";
import {
  ArrowUpRightIcon,
  AtSignIcon,
  CircleArrowDownIcon,
  PhoneIcon,
} from "lucide-react";
import ContactForm from "./ContactForm";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { useRouter } from "next/navigation";

// ─── Reusable animation variants ─────────────────────────────────────────────

const fromLeft = {
  hidden: { opacity: 0, x: -60 },
  visible: (i = 0) => ({
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94], delay: i * 0.12 },
  }),
};

const fromRight = {
  hidden: { opacity: 0, x: 60 },
  visible: (i = 0) => ({
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94], delay: i * 0.12 },
  }),
};

const dropIn = {
  hidden: { opacity: 0, y: -60, scale: 0.97 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.85, ease: [0.22, 1, 0.36, 1], delay: 0.25 },
  },
};

const buttonPop = {
  hidden: { opacity: 0, scale: 0.5 },
  visible: (i = 0) => ({
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: [0.34, 1.56, 0.64, 1], delay: i * 0.08 },
  }),
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut", delay: i * 0.1 },
  }),
};

// ─── Component ────────────────────────────────────────────────────────────────

function ContactUs({ detailedMode = false }: { detailedMode?: boolean }) {
  const sectionRef = useRef(null);
  const router = useRouter();
  // `once: false` → re-triggers every time the section scrolls into view
  const inView = useInView(sectionRef, { once: false, amount: 0.1 });
  const animState = inView ? "visible" : "hidden";

  const navigateToAboutSection = (sectionId: string) => {
    sessionStorage.setItem("about-scroll-target", sectionId);
    router.push("/about");
  };

  const MediaLinks = [
    { name: "Behance",  url: "https://www.behance.net/meet-works" },
    { name: "LinkedIn", url: "https://www.linkedin.com/in/meetjpanchal" },
  ];

  const QuickLinks = [
    { label: "Home",            href: "/" },
    { label: "Work",            href: "/work" },
    { label: "Playground",      href: "/playground" },
    { label: "About",           href: "/about" },
    { label: "Contact",         href: "/contact" },
  ];

  return (
    <>
      {!detailedMode && <hr className="border-border-custom border-b-[3px]" />}

      <div
        ref={sectionRef}
        className="flex py-12 px-4 sm:mx-16 mx-4 border-l-[3px] border-r-[3px] border-border-custom h-full flex-col gap-10 relative"
      >
        {/* Corner dots */}
        {[
          "top-[-0.35rem] left-[-5.5px]","top-[-0.35rem] right-[-5.5px]","bottom-[-0.35rem] left-[-5.5px]","bottom-[-0.35rem] right-[-5.5px]"
        ].map((pos) => (
          <span key={pos} className={`absolute ${pos} w-2 h-2 bg-light-gray rounded-full z-10`} />
        ))}

        {/* ── Main grid ── */}
        <div className="grid sm:grid-cols-2 grid-cols-1 gap-4">

          {/* LEFT — heading + social links + contact info */}
          <div className="flex flex-col items-start justify-start w-2/3 gap-4">
            <div className="mt-[30px]">

              {/* Heading: slides in from the left */}
              <h1 className="text-5xl font-bebasNeue">
                <motion.div
                  variants={fromLeft}
                  initial="hidden"
                  animate={animState}
                >
                  Get in touch
                </motion.div>
              </h1>

              {/* Sub-heading: slides in from the left, slightly delayed */}
              <h2 className="text-5xl font-bebasNeue text-[#787878]">
                <motion.div
                  variants={fromLeft}
                  custom={1}
                  initial="hidden"
                  animate={animState}
                >
                  Send an email or DM and i'll get back to you asap
                </motion.div>
              </h2>

              {/* Social buttons: scale from 50 → 100 % */}
              <div className="flex items-start flex-wrap justify-start gap-4 py-6">
                {MediaLinks.map((link, i) => (
                  <motion.div
                    key={link.name}
                    variants={buttonPop}
                    custom={i + 2}
                    initial="hidden"
                    animate={animState}
                    whileHover={{ scale: 1.06 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Link
                      href={link.url}
                      className="text-base flex items-center justify-center gap-2 bg-dark-charcoal px-8 py-3 rounded-full font-montserrat hover:bg-light-gray hover:text-theme-main transition-colors duration-200"
                    >
                      {link.name}
                      <ArrowUpRightIcon className="w-4 h-4" />
                    </Link>
                  </motion.div>
                ))}
              </div>

              {/* Contact details: fade + slide up from left */}
              <div className="flex items-start flex-col justify-center gap-2 pt-4">
                <span className="text-2xl font-montserrat">
                  <motion.span
                    variants={fromLeft}
                    custom={3}
                    initial="hidden"
                    animate={animState}
                  >
                    Let's Talk
                  </motion.span>
                </span>

                <span className="text-lg font-montserrat flex items-center justify-start gap-4">
                  <motion.span
                    variants={fromLeft}
                    custom={4}
                    initial="hidden"
                    animate={animState}
                  >
                    <AtSignIcon className="w-6 h-6" />
                    contact@meet-works.com
                  </motion.span>
                </span>

                <span className="text-lg font-montserrat flex items-center justify-start gap-4">
                  <motion.span
                    variants={fromLeft}
                    custom={5}
                    initial="hidden"
                    animate={animState}
                  >
                    <PhoneIcon className="w-6 h-6" />
                    +49 15252861912
                  </motion.span>
                </span>
              </div>
            </div>
          </div>

          <hr className="border-border-custom border-b-[3px] sm:hidden block mx-[-1rem]" />

          {/* RIGHT — contact form drops from the top */}
          <div className="flex items-start justify-start sm:w-3/4 w-full">
            <motion.div
              variants={dropIn}
              initial="hidden"
              animate={animState}
            >
              <ContactForm />
            </motion.div>
          </div>
        </div>

        <hr className="border-border-custom border-b-[3px] sm:hidden block mx-[-1rem]" />

        {/* ── Bottom section — quick links + big tagline ── */}
        <div className="flex items-start flex-wrap justify-start gap-4 my-12">

          {/* Quick links label: slides from the right */}
          <div className="flex items-start flex-wrap justify-start gap-4 flex-col">
            <span className="text-2xl font-montserrat">
              <motion.span
                variants={fromRight}
                initial="hidden"
                animate={animState}
              >
                Quick Links
              </motion.span>
            </span>

            <span className="text-lg font-montserrat flex items-center justify-start gap-4 sm:w-1/3 w-full flex-wrap">
              {/* Quick link buttons: scale pop */}
              {QuickLinks.map((link, i) => (
                <motion.div
                  key={link.label}
                  variants={buttonPop}
                  custom={i}
                  initial="hidden"
                  animate={animState}
                  whileHover={{ scale: 1.06 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    href={link.href}
                    className="hover:text-theme-main text-base flex items-center justify-center gap-2 bg-dark-charcoal px-8 py-3 rounded-full font-montserrat hover:bg-light-gray transition-colors duration-200"
                  >
                    {link.label}
                    <ArrowUpRightIcon className="w-4 h-4" />
                  </Link>
                </motion.div>
              ))}

              <motion.div
                variants={buttonPop}
                custom={QuickLinks.length}
                initial="hidden"
                animate={animState}
                whileHover={{ scale: 1.06 }}
                whileTap={{ scale: 0.95 }}
              >
                <button
                  type="button"
                  onClick={() => navigateToAboutSection("software-skills-section")}
                  className="hover:text-theme-main text-base flex items-center justify-center gap-2 bg-dark-charcoal px-8 py-3 rounded-full font-montserrat hover:bg-light-gray transition-colors duration-200"
                >
                  Skills
                  <ArrowUpRightIcon className="w-4 h-4" />
                </button>
              </motion.div>

              <motion.div
                variants={buttonPop}
                custom={QuickLinks.length + 1}
                initial="hidden"
                animate={animState}
                whileHover={{ scale: 1.06 }}
                whileTap={{ scale: 0.95 }}
              >
                <button
                  type="button"
                  onClick={() => navigateToAboutSection("timeline-section")}
                  className="hover:text-theme-main text-base flex items-center justify-center gap-2 bg-dark-charcoal px-8 py-3 rounded-full font-montserrat hover:bg-light-gray transition-colors duration-200"
                >
                  Timeline
                  <ArrowUpRightIcon className="w-4 h-4" />
                </button>
              </motion.div>

              {/* Resume download button */}
              <motion.div
                variants={buttonPop}
                custom={QuickLinks.length + 2}
                initial="hidden"
                animate={animState}
                whileHover={{ scale: 1.06 }}
                whileTap={{ scale: 0.95 }}
              >
                <a
                  download="Meet_Panchal_Resume.pdf"
                  href="/meet_panchal_resume.pdf"
                  className="hover:text-theme-main text-base flex items-center justify-center gap-2 bg-dark-charcoal px-8 py-3 rounded-full font-montserrat hover:bg-light-gray transition-colors duration-200"
                >
                  <CircleArrowDownIcon className="w-4 h-4" /> Download Resume
                </a>
              </motion.div>
            </span>
          </div>

          {/* Big tagline: slides from the left, word by word feel */}
          <div className="flex items-start flex-wrap justify-start gap-4 flex-col mt-4">
            <span className="sm:text-8xl text-6xl font-bebasNeue tracking-[0.2em]">
              <motion.span
                variants={fromLeft}
                custom={1}
                initial="hidden"
                animate={animState}
              >
                LET'S WORK TOGETHER
              </motion.span>
            </span>
          </div>
        </div>
      </div>

      <hr className="border-border-custom border-t-[3px] mb-8" />
    </>
  );
}

export default ContactUs;
