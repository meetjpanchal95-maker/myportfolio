"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
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

const portfolioVariants = {
  hidden: { x: -120, opacity: 0 },
  show: { x: 0, opacity: 1, transition: { duration: 1.0, ease: "easeOut" } },
};

const meetVariants = {
  hidden: { x: 120, opacity: 0 },
  show: { x: 0, opacity: 1, transition: { duration: 1.0, ease: "easeOut" } },
};

export interface PageHeaderProps {
  title?: string;
  subtitle?: string;
}

export default function PageHeader({ title = "Strategy", subtitle = "Consulting" }: PageHeaderProps) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => { setMounted(true); }, []);
  return (
    <div className="flex flex-col items-center justify-center w-full overflow-x-hidden">
      <hr className="border-border-custom border-b-[3px] w-full" />
      <div className="flex w-full sm:px-16 px-4">
        <div className="flex flex-col w-full border-l-[3px] border-r-[3px] border-border-custom relative">
          <span className="absolute top-[-0.35rem] left-[-5.5px] w-2 h-2 bg-light-gray rounded-full z-10" />
          <span className="absolute top-[-0.35rem] right-[-5.5px] w-2 h-2 bg-light-gray rounded-full z-10" />
          {!mounted ? (
            <div className="flex items-center sm:flex-row flex-col justify-between w-full px-4 relative sm:h-36 h-48">
              <div className="flex items-center justify-center font-bebasNeue text-6xl text-[var(--color-border-custom)] [-webkit-text-stroke:1px_var(--color-hero-stroke)]">
                {title}
              </div>
              <div className="flex items-center justify-center gap-0 absolute top-0 left-0 right-0 bottom-0">
                <Image
                  
                  src="/home/hero-loading.gif"
                  alt="hero-loading"
                  width={100}
                  height={10}
                  className="opacity-50 sm:block hidden"
                />
                <Image
                  
                  src="/home/hero-loading.gif"
                  alt="hero-loading"
                  width={100}
                  height={10}
                  className="opacity-50 sm:block hidden"
                />
                <Image
                  
                  src="/home/hero-loading.gif"
                  alt="hero-loading"
                  width={100}
                  height={10}
                  className="opacity-50"
                />
              </div>
              <div className="flex items-center justify-center font-bebasNeue text-6xl text-[var(--color-border-custom)] [-webkit-text-stroke:1px_var(--color-hero-stroke)]">
                {subtitle}
              </div>
            </div>
          ) : (
            <m.div variants={container} initial="hidden" whileInView="show" viewport={{ once: false, amount: 0.35 }} className="flex items-center sm:flex-row flex-col justify-between w-full px-4 relative sm:h-36 h-48">
              <m.div variants={portfolioVariants} className="flex items-center justify-center font-bebasNeue text-6xl text-[var(--color-border-custom)] [-webkit-text-stroke:1px_var(--color-hero-stroke)]">
                {title}
              </m.div>
              <div className="flex items-center justify-center gap-0 absolute top-0 left-0 right-0 bottom-0">
                <m.div variants={item} initial="hidden" whileInView="show" viewport={{ once: true }} className="opacity-50 sm:block hidden">
                  <Image
                    
                    src="/home/hero-loading.gif"
                    alt="hero-loading"
                    width={100}
                    height={10}
                  />
                </m.div>
                <m.div variants={item} initial="hidden" whileInView="show" viewport={{ once: true }} className="opacity-50 sm:block hidden">
                  <Image
                    
                    src="/home/hero-loading.gif"
                    alt="hero-loading"
                    width={100}
                    height={10}
                  />
                </m.div>
                <m.div variants={item} initial="hidden" whileInView="show" viewport={{ once: true }} className="opacity-50">
                  <Image
                    
                    src="/home/hero-loading.gif"
                    alt="hero-loading"
                    width={100}
                    height={10}
                  />
                </m.div>
              </div>
              <m.div variants={meetVariants} className="flex items-center justify-center font-bebasNeue text-6xl text-[var(--color-border-custom)] [-webkit-text-stroke:1px_var(--color-hero-stroke)]">
                {subtitle}
              </m.div>
            </m.div>
          )}
        </div>
      </div>
      <hr className="border-border-custom border-b-[3px] w-full" />
    </div>
  );
}