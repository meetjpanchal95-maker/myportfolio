"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

const m: any = motion;

const sectionContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      when: "beforeChildren",
    },
  },
};

const sectionItem = {
  hidden: { y: 20, opacity: 0 },
  show: {
    y: 0,
    opacity: 1,
    transition: { duration: 1.0, ease: "easeOut" },
  },
};

const typewriterContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.03,
      when: "beforeChildren",
    },
  },
};

const typewriterItem = {
  hidden: { y: 20, opacity: 0 },
  show: { y: 0, opacity: 1, transition: { duration: 1.0, ease: "easeOut" } },
};

const timelineDescription =
  "A simple editable timeline of education, career moves, and future direction. Update the entries inside this component whenever roles, dates, or milestones change.";

type TimelineEntry = {
  year: string;
  title: string;
  subtitle: string;
  details: string;
  tag: string;
  image: string;
  future?: boolean;
};

const timelineEntries: TimelineEntry[] = [
  {
    year: "2010",
    title: "Creative Foundation",
    subtitle: "Digital Media and Performing Arts",
    details: "Early exposure to performing arts during school years laid the groundwork for a design-led, cross-disciplinary approach to problem-solving.",
    tag: "Origin",
    image: "/about/timeline/2010.png",
  },
  {
    year: "2013",
    title: "B.Arch Begins",
    subtitle: "CEPT University | Faculty of Architecture",
    details: "Enrolled in the Bachelor of Architecture program for 5 Years, developing spatial reasoning, research methodology, and design thinking at one of India's leading design schools.",
    tag: "Education",
    image: "/about/timeline/2013.png",
  },
  {
    year: "2017",
    title: "Real Estate Internship",
    subtitle: "AR+A Associates",
    details: "First industry exposure through a real-estate internship during the B.Arch program, bridging built environment theory with client-facing practice under renowed architect.",
    tag: "Experience",
    image: "/about/timeline/2017.png",
  },
  {
    year: "2018",
    title: "Architecture + SAAS Product",
    subtitle: "GRaduation + Research",
    details: "Completed B.Arch, marking an early shift from physical to digital design domains and setting the stage for a career at the intersection of design, technology, and strategy.",
    tag: "Exposure",
    image: "/about/timeline/2018.png",
  },
  {
    year: "2019",
    title: "Visual Designer",
    subtitle: "INI Design Studio + Competetion Projects",
    details: "Expert in architecture visualization and digital design, working on client-facing deliverables and building fluency in project delivery, and design strategy.",
    tag: "Experience",
    image: "/about/timeline/2019.png",
  },
  {
    year: "2020",
    title: "Project Manager",
    subtitle: "INI Design Studio + management Consulting ",
    details: "Expanded scope to project management and strategic execution, coordinating delivery across teams and developing a systems-level view of infrastructure and urban scale projects.",
    tag: "Experience",
    image: "/about/timeline/2020.png",
  },
  {
    year: "2022",
    title: "Post graduation",
    subtitle: "M.Engineering + Freelance",
    details: "Started Master's after four years of work experience, parallel pursuit of business analysis in a startup context and postgraduate study in construction and real estate management in Finland.",
    tag: "Education",
    image: "/about/timeline/2022.png",
  },
  {
    year: "2023",
    title: "Creative Strategist",
    subtitle: "Stackbuilder and HTW Berlin",
    details: "Shifted to Berlin for second year of master's, evolved into creative strategy while continuing postgraduate studies in Berlin, applying systems thinking to digital transformation challenges.",
    tag: "Leadership",
    image: "/about/timeline/2023.png",
  },
  {
    year: "2024",
    title: "Academic and Program Roles",
    subtitle: "HTW Berlin and UNESCO Chair",
    details: "Took on proposal management and program support for academic and international cultural institutions, bridging strategy, policy, and research.",
    tag: "Impact",
    image: "/about/timeline/2024.png",
  },
  {
    year: "2025",
    title: "Master's Completion",
    subtitle: "HTW Berlin + Metropolia University, Helsinki",
    details: "Completed M.Sc + M.Eng in Construction and Real Estate Management with a focus on digital transformation, AEC industry, and emerging technology strategy.",
    tag: "Milestone",
    image: "/about/timeline/2025.png",
  },
  {
    year: "2030",
    title: "2030 Vision",
    subtitle: "AI · Product · Sustainability",
    details: "A future milestone to be defined across AI-driven product strategy, digital transformation consulting, or lead/associate with multidisciplinary studio at the intersection of design and technology.",
    tag: "Vision",
    image: "/about/timeline/2030.png",
    future: true,
  },
];

export default function CareerTimeline() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scrollTimeline = (direction: "left" | "right") => {
    const container = scrollContainerRef.current;
    if (!container) return;

    container.scrollBy({
      left: direction === "left" ? -320 : 320,
      behavior: "smooth",
    });
  };

  return (
    <section className="relative">
      <m.div
        className="relative flex flex-col py-8"
        variants={sectionContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.35 }}
      >
        <div className="px-2 sm:px-10">
          <m.div className="pb-6" variants={sectionItem}>
            <m.span
              className="flex w-full font-bebasNeue text-5xl text-[var(--color-text-primary)]"
              variants={typewriterContainer}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.5 }}
              aria-hidden={false}
            >
              {"Timeline".split("").map((char, index) => (
                <m.span key={`timeline-title-${index}`} variants={typewriterItem}>
                  {char}
                </m.span>
              ))}
            </m.span>

            <m.span
              className="flex w-full max-w-full flex-wrap font-bebasNeue text-2xl leading-tight text-light-gray sm:text-[40px] sm:leading-[0.95]"
              variants={typewriterContainer}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.5 }}
              aria-hidden={false}
            >
              {"2010-2030".split("").map((char, index) => (
                <m.span
                  key={`timeline-subtitle-${index}`}
                  variants={typewriterItem}
                  className={char === " " ? "whitespace-pre" : ""}
                >
                  {char}
                </m.span>
              ))}
            </m.span>
          </m.div>

          <m.div className="border-b border-[var(--color-text-accent)] pb-5" variants={sectionItem}>
            <m.p
              className="max-w-3xl pt-3 font-montserrat text-base leading-7 text-light-gray"
              variants={typewriterContainer}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.5 }}
            >
              {timelineDescription.split(" ").map((word, index) => (
                <m.span
                  key={`timeline-description-${index}`}
                  variants={typewriterItem}
                  className="mr-[0.35em] inline-block"
                >
                  {word}
                </m.span>
              ))}
            </m.p>
          </m.div>

          <m.div className="mt-10" variants={sectionItem}>
            <div className="mb-4 flex items-center justify-end gap-3">
              <button
                type="button"
                onClick={() => scrollTimeline("left")}
                className="rounded-current border border-[var(--color-text-accent)] px-4 py-2 font-source-code text-sm uppercase tracking-[0.16em] text-light-gray transition-colors duration-200 hover:border-[var(--color-border-strong)] hover:text-[var(--color-text-primary)]"
              >
                Prev
              </button>
              <button
                type="button"
                onClick={() => scrollTimeline("right")}
                className="rounded-current border border-[var(--color-text-accent)] px-4 py-2 font-source-code text-sm uppercase tracking-[0.16em] text-light-gray transition-colors duration-200 hover:border-[var(--color-border-strong)] hover:text-[var(--color-text-primary)]"
              >
                Next
              </button>
            </div>

            <div
              ref={scrollContainerRef}
              className="overflow-x-auto pb-4 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
            >
              <div className="relative min-w-max px-2 pb-6 pt-2">
                <div className="absolute left-0 right-0 top-[364px] h-px bg-light-gray" />

                <div className="flex items-start gap-6 pr-2">
                {timelineEntries.map((entry) => (
                  <m.div
                    key={`${entry.year}-${entry.title}`}
                    className="group relative block w-[280px] shrink-0 text-left"
                    variants={sectionItem}
                  >
                    <div className="relative h-[340px] overflow-hidden rounded-current border border-[var(--color-text-accent)] bg-[var(--color-dark-bg)]/35 px-[18px] pb-4 pt-[14px] transition-colors duration-200 group-hover:border-[var(--color-border-strong)] group-hover:bg-[var(--color-dark-charcoal-95)]">
                      <div className="transition-opacity duration-200 group-hover:opacity-0">
                        <div className="flex items-start justify-between gap-3">
                          <div>
                            <div className="font-source-code text-base font-bold uppercase tracking-[0.1em] leading-[1.4] text-[var(--color-text-primary)]">
                              {entry.title}
                            </div>
                          </div>

                          <span className="shrink-0 whitespace-nowrap border border-[var(--color-text-accent)] px-2 py-[3px] font-source-code text-sm uppercase tracking-[0.12em] text-light-gray">
                            {entry.tag}
                          </span>
                        </div>

                        <div className="mt-1 w-full font-source-code text-sm uppercase tracking-[0.15em] text-light-gray">
                          {entry.subtitle}
                        </div>
                      </div>

                      <div className="pointer-events-none absolute inset-0 flex flex-col justify-between bg-[var(--color-dark-charcoal-95)] px-[18px] pb-4 pt-[14px] opacity-0 transition-opacity duration-200 group-hover:opacity-100">
                        <div>
                          <div className="flex items-start justify-between gap-3">
                            <div>
                              <div className="font-source-code text-base font-bold uppercase tracking-[0.1em] leading-[1.4] text-[var(--color-text-primary)]">
                                {entry.title}
                              </div>
                            </div>

                            <span className="shrink-0 whitespace-nowrap border border-[var(--color-text-accent)] px-2 py-[3px] font-source-code text-sm uppercase tracking-[0.12em] text-light-gray">
                              {entry.tag}
                            </span>
                          </div>

                          <div className="mt-1 w-full font-source-code text-sm uppercase tracking-[0.15em] text-light-gray">
                            {entry.subtitle}
                          </div>
                        </div>

                        <div className="mt-3 border-t border-[var(--color-text-accent)] pt-3 font-montserrat text-base leading-7 tracking-[0.025em] text-light-gray">
                          {entry.details}
                        </div>
                      </div>
                    </div>

                    <div className="relative h-10">
                      <span className="absolute left-1/2 top-[10px] h-[11px] w-[11px] -translate-x-1/2 rounded-full bg-light-gray" />
                    </div>

                    <div className="pt-1 text-center font-source-code text-sm font-bold uppercase tracking-[0.14em] text-light-gray">
                      {entry.year}
                    </div>
                  </m.div>
                ))}
                </div>
              </div>
            </div>

            <p className="mt-8 text-center font-source-code text-sm uppercase tracking-[0.2em] text-[var(--color-text-accent)]">
              Hover to preview details
            </p>
          </m.div>
        </div>
      </m.div>
    </section>
  );
}