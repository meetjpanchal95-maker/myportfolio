"use client";

import Image from "next/image";
import { useTheme } from "../app/theme/ThemeProvider";
import { motion } from "framer-motion";
const m: any = motion;

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.24,
      when: "beforeChildren",
    },
  },
};

const item = {
  hidden: { y: 20, opacity: 0 },
  show: { y: 0, opacity: 1, transition: { duration: 1.0, ease: "easeOut" } },
};

const profile = {
  hidden: { scale: 0.86, opacity: 0 },
  show: { scale: 1, opacity: 1, transition: { duration: 1.2, ease: "easeOut" } },
};

const portfolioVariants = {
  hidden: { x: -120, opacity: 0 },
  show: { x: 0, opacity: 1, transition: { duration: 1.0, ease: "easeOut" } },
};

const meetVariants = {
  hidden: { x: 120, opacity: 0 },
  show: { x: 0, opacity: 1, transition: { duration: 1.0, ease: "easeOut" } },
};

export default function HeroSection(props: any) {
  const { theme } = useTheme();
  const heroBgSrc = theme === "dark" ? "/home/dark-bg.png" : "/home/light-bg.png";

  return (
    <div className="relative flex h-[calc(100dvh-2rem)] max-h-[calc(100dvh-2rem)] flex-col overflow-hidden">
      <m.div className="flex h-full min-h-0 flex-col items-center justify-between" variants={container} initial="hidden" whileInView="show" viewport={{ once: false, amount: 0.35 }}>
        <div className="relative flex min-h-0 w-full flex-1 items-center justify-center overflow-hidden">
          <m.div className="relative z-10 mx-4 flex flex-col items-center justify-center gap-4 pb-6 pt-[88px] text-center sm:mx-16 sm:pb-8 sm:pt-[96px] sm:text-left" variants={item}>
            <m.div variants={profile} className="rounded-full overflow-hidden pointer-events-none">
                <Image
                src="/home/profile.png"
                alt="Meet Panchal"
                width={175}
                height={175} 
                className="rounded-full border-2 border-theme-hero-stroke bg-dark-charcoal"
              />
            </m.div>

            <m.h1 variants={meetVariants} className="text-7xl  font-normal font-bebasNeue">
              MEET PANCHAL
            </m.h1>

            <m.div variants={item} className="flex items-center justify-center max-w-xl text-center font-montserrat">
              <span className="text-base font-inter">
                Creative Lead | Product Manager | UX Researcher
                <br />
              Workshop facilitator | AI Practitioner | Digital Strategist
              </span>
            </m.div>

            <m.div variants={item} className="flex items-center flex-col justify-center font-bebasNeue">
              <m.span variants={item} className="text-4xl text-[var(--color-text-muted)]">
                Business + Design + Technology
              </m.span>
              <m.span variants={item} className="text-4xl">Portfolio</m.span>
            </m.div>

            <m.div variants={item} className="flex items-center justify-center pointer-events-none">
                <Image src="/home/hero-section.gif" alt="hero-section" width={100} height={10} />
            </m.div>
          </m.div>

          <m.div className="absolute top-0 left-0 w-full h-full pointer-events-none" initial={{ opacity: 0.6 }} whileInView={{ opacity: 1 }} transition={{ duration: 2.4 }} viewport={{ once: false, amount: 0.35 }}>
            <Image
              src={heroBgSrc}
              alt={theme === "dark" ? "Hero background" : "Hero background"}
              width={1500}
              height={100}
              className="w-full h-full object-fill"
            />
          </m.div>
        </div>

        <div className="flex items-center justify-between w-full border-b-[3px] border-t-[3px] sm:px-16 px-4 border-border-custom relative sm:h-36 h-48">
          <div className="flex border-l-[3px] justify-between px-4 border-border-custom border-r-[3px] w-full sm:h-36 h-48 sm:py-0 py-4 relative flex-col sm:flex-row">
            <span className="absolute top-[-0.2rem] left-[-5.5px] w-2 h-2 bg-light-gray rounded-full z-10" />
            <span className="absolute top-[-0.2rem] right-[-5.5px] w-2 h-2 bg-light-gray rounded-full z-10" />
            <span className="absolute bottom-[-0.2rem] left-[-5.5px] w-2 h-2 bg-light-gray rounded-full z-10" />
            <span className="absolute bottom-[-0.2rem] right-[-5.5px] w-2 h-2 bg-light-gray rounded-full z-10" />
            <m.div variants={portfolioVariants} className="flex items-center justify-center font-bebasNeue text-6xl text-[var(--color-border-custom)] [-webkit-text-stroke:1px_var(--color-hero-stroke)]">
              Portfolio
            </m.div>
            <div className="flex items-center justify-center gap-0 absolute top-0 left-0 right-0 bottom-0 pointer-events-none">
                <Image src="/home/hero-loading.gif" alt="hero-loading" width={100} height={10} className="opacity-50 sm:block hidden" />
                <Image src="/home/hero-loading.gif" alt="hero-loading" width={100} height={10} className="opacity-50 sm:block hidden" />
                <Image src="/home/hero-loading.gif" alt="hero-loading" width={100} height={10} className="opacity-50" />
            </div>
            <m.div variants={meetVariants} className="flex items-center justify-center font-bebasNeue text-6xl text-[var(--color-border-custom)] [-webkit-text-stroke:1px_var(--color-hero-stroke)]">
              Meet Panchal
            </m.div>
          </div>
        </div>
      </m.div>
    </div>
  );
}
