"use client";
import React from "react";
import { motion } from "framer-motion";
const m: any = motion;
const compContainer = {
  hidden: {},
  show: { transition: { staggerChildren: 0.03 } },
};
const compItem = {
  hidden: { scale: 0.5, opacity: 0 },
  show: { scale: 1, opacity: 1, transition: { duration: 1.0, ease: "easeOut" } },
};

// Animation variants for hero-style text
const heroTextContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.18,
      when: "beforeChildren",
    },
  },
};
const heroTextItem = {
  hidden: { y: 20, opacity: 0 },
  show: { y: 0, opacity: 1, transition: { duration: 1.0, ease: "easeOut" } },
};
import Image from "next/image";
// Animation variant for profile image (copied from HeroSection)
const profile = {
  hidden: { scale: 0.86, opacity: 0 },
  show: { scale: 1, opacity: 1, transition: { duration: 1.2, ease: "easeOut" } },
};
import competenciesList from "./competencies-list";

function PersonalDetails() {
  return (
    <div className="flex py-4 sm:px-10 px-2">
      <div className="w-full grid sm:grid-cols-3 grid-cols-1 sm:gap-10">
        <div className="col-span-2  sm:w-4/5 w-full">
          <m.div
            className="text-5xl font-bebasNeue py-4 text-[var(--color-hover-bg)] sm:w-3/4 w-full border-b border-[var(--color-text-accent)]"
            variants={heroTextContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.35 }}
          >
            {"Creative StrategisT | Business Analyst | UX designer".split(" ").map((word, idx) => (
              <m.span
                key={idx}
                variants={heroTextItem}
                className="inline-block mr-2"
                style={{ transformOrigin: "center center" }}
              >
                {word}
              </m.span>
            ))}
          </m.div>
          <div className="grid sm:grid-cols-2 grid-cols-1 items-center justify-center w-full py-8 gap-16">
            <div className="col-span-1">
              <m.div
                variants={profile}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.35 }}
                className="rounded-full overflow-hidden"
              >
                <Image
                  unoptimized={true}
                  src="/about/full-page-profile.png"
                  alt="Profile"
                  width={350}
                  height={350}
                  className="rounded-full border-2 border-theme-hero-stroke bg-dark-charcoal"
                />
              </m.div>
            </div>
            <div className="col-span-1 font-montserrat text-[var(--color-hover-bg)] text-base w-[246px] sm:w-[282px] lg:w-[352px] xl:w-[422px] 2xl:w-[493px]">
              ‘Creative Strategist and an absolute learner with six years ofwork experience in product roles, digital consulting, strategy driven solutions and user-centred design. I develop work flows with deep work at the intersection of Business + Technology + Design for delivering impactful solutions’
            </div>
          </div>
          <m.div
            className="text-4xl font-bebasNeue py-4 text-light-gray sm:w-3/4 w-full border-t border-[var(--color-text-accent)]"
            variants={heroTextContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.35 }}
          >
            {"Digital transformation ENTHUSIAST| Project Manager | architect".split(" ").map((word, idx) => (
              <m.span
                key={idx}
                variants={heroTextItem}
                className="inline-block mr-2"
                style={{ transformOrigin: "center center" }}
              >
                {word}
              </m.span>
            ))}
          </m.div>
        </div>
        <div className="col-span-1 flex flex-col gap-4">
          <div className="text-4xl font-bebasNeue py-4">Competencies</div>
          <m.div
            className="flex flex-wrap justify-start gap-2"
            variants={compContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.35 }}
          >
            {competenciesList.map((competency) => (
              <m.span
                key={competency}
                variants={compItem}
                style={{ transformOrigin: "center center" }}
                className="text-base font-source-code bg-[var(--color-dark-bg)] px-4 py-2 rounded-full text-[var(--color-hover-bg)] w-fit border border-[var(--color-text-primary)]"
              >
                {competency}
              </m.span>
            ))}
          </m.div>
        </div>
      </div>
    </div>
  );
}

export default PersonalDetails;
