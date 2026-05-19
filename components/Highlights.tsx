"use client";
import { motion } from "framer-motion";
const m: any = motion;
import ImageStack from "../app/home/imageStack";
import Image from "next/image";
import competenciesList from "../app/about/detailedPage/competencies-list";
import dynamic from "next/dynamic";
import { useRouter } from "next/navigation";

const imageStacks = [
  {
    src: "/highlights/1.png",
    alt: "image-stack-1",
    className: "rotate-[10deg] hover:rotate-0",
    classNamePlaceholder: "",
  },
  {
    src: "/highlights/2.png",
    alt: "image-stack-2",
    className: "rotate-[-10deg] hover:rotate-0",
    classNamePlaceholder: "",
  },
  {
    src: "/highlights/3.png",
    alt: "image-stack-3",
    className: "rotate-[10deg] hover:rotate-0",
    classNamePlaceholder: "",
  },
  {
    src: "/highlights/4.png",
    alt: "image-stack-4",
    className: "rotate-[-10deg] hover:rotate-0",
    classNamePlaceholder: "",
  },
];

// SSR is disabled for StatsStrip because it uses browser-only APIs (IntersectionObserver, useRef) for animation and visibility logic.
const StatsStrip = dynamic(() => import("../public/files/StatsStrip"), {
  ssr: false,
});

const btnLeft = {
  hidden: { y: -40, opacity: 0 },
  show: { y: 0, opacity: 1, transition: { duration: 0.6, ease: "easeOut" } },
};

const btnRight = {
  hidden: { y: 40, opacity: 0 },
  show: { y: 0, opacity: 1, transition: { duration: 0.6, ease: "easeOut" } },
};

const compContainer = {
  hidden: {},
  show: { transition: { staggerChildren: 0.03 } },
};

const compItem = {
  hidden: { scale: 0.5, opacity: 0 },
  show: { scale: 1, opacity: 1, transition: { duration: 1.0, ease: "easeOut" } },
};

export interface HighlightsProps {
  // Define all expected props here, e.g.:
  // title: string;
  // items: ItemType[];
  // ...
}

export default function Highlights(props: HighlightsProps) {
  const router = useRouter();

  const navigateToAboutSection = (sectionId: string) => {
    sessionStorage.setItem("about-scroll-target", sectionId);
    router.push("/about");
  };

  return (
    <div className="relative border-border-custom">
      <div className="flex flex-col sm:py-16 py-8 sm:mx-16 mx-4 border-l-[3px] border-r-[3px] border-border-custom h-full">
        {/* Stats Strip at the top */}
        <div className="pt-4 px-0" style={{ marginTop: "-90px" }}>
          <div className="rounded-[20px] overflow-hidden p-[10px]" style={{ marginLeft: 0, marginRight: 0 }}>
            <StatsStrip />
          </div>
        </div>
        {/* 50px gap below stats strip */}
        <div style={{ height: 50 }} />
        {/* Quote between stats and competencies */}
        <div className="w-full flex justify-center items-center my-8" style={{ marginTop: "-50px" }}>
          <div className="flex flex-col items-center w-full">
            <blockquote className="font-source-code text-xl text-center text-[var(--color-text-muted)] italic px-4 py-6 max-w-2xl">
              {(() => {
                const text = `Six years. Multiple industries. One method: design thinking applied to real strategic problems, with the discipline to see them through to execution. I consult at the intersection of architecture, real estate, and technology. Available for strategic engagements, collaborations, and full-time roles.`;

                const container = {
                  hidden: { opacity: 0 },
                  show: {
                    opacity: 1,
                    transition: {
                      staggerChildren: 0.018,
                    },
                  },
                };

                const letter = {
                  hidden: { opacity: 0 },
                  show: { opacity: 1, transition: { duration: 0 } },
                };

                return (
                  <m.span
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: false, amount: 0.5 }}
                    aria-hidden={false}
                  >
                    {text.split("").map((char, i) => (
                        <m.span key={i} variants={letter}>
                        {char}
                        </m.span>
                    ))}
                  </m.span>
                );
              })()}
            </blockquote>
            <div className="flex flex-col gap-3 mt-4 mb-5 sm:flex-row sm:gap-4">
              <m.div
                variants={btnLeft}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.35 }}
                className="w-full sm:w-auto"
              >
                <a
                  href="/contact"
                  className="inline-flex w-full sm:w-[13rem] items-center justify-center text-center px-6 py-2.5 rounded-[10px] border border-[var(--color-text-primary)] font-source-code text-sm sm:text-base text-theme-text hover:opacity-80 hover:font-bold hover:underline transition-colors duration-200 ease-out"
                  style={{
                    background:
                      "linear-gradient(0deg, color-mix(in srgb, var(--color-main-bg) 50%, transparent) 0%, color-mix(in srgb, var(--color-text-muted) 50%, transparent) 100%)",
                    backdropFilter: "blur(12px)",
                    WebkitBackdropFilter: "blur(12px)",
                  }}
                >
                  Get a Quote
                </a>
              </m.div>
              <m.div
                variants={btnRight}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.35 }}
                className="w-full sm:w-auto"
              >
                <a
                  download="Meet_Panchal_Resume.pdf"
                  href="/meet_panchal_resume.pdf"
                  className="inline-flex w-full sm:w-[13rem] items-center justify-center gap-2 text-center px-6 py-2.5 rounded-[10px] border border-[var(--color-text-primary)] font-source-code text-sm sm:text-base text-theme-text hover:opacity-80 hover:font-bold hover:underline transition-colors duration-200 ease-out"
                  style={{
                    background:
                      "linear-gradient(0deg, color-mix(in srgb, var(--color-main-bg) 50%, transparent) 0%, color-mix(in srgb, var(--color-text-muted) 50%, transparent) 100%)",
                    backdropFilter: "blur(12px)",
                    WebkitBackdropFilter: "blur(12px)",
                  }}
                >
                  Download Resume
                </a>
              </m.div>
            </div>
          </div>
        </div>
        {/* Competencies Section */}
        <m.div
          className="flex flex-col items-center gap-y-2.5 px-4 pb-8"
          variants={compContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.35 }}
        >
          <div className="flex gap-5 justify-center flex-wrap">
            {competenciesList.slice(0, 5).map((competency) => (
              <m.span
                key={competency}
                variants={compItem}
                style={{ transformOrigin: "center center" }}
                className="text-base font-source-code bg-[var(--color-dark-bg)] px-4 py-2 rounded-full text-[var(--color-hover-bg)] border border-[var(--color-text-primary)] text-center sm:text-left whitespace-nowrap"
              >
                {competency}
              </m.span>
            ))}
          </div>

          <div className="flex gap-2.5 justify-center flex-wrap">
            {competenciesList.slice(5, 10).map((competency) => (
              <m.span
                key={competency}
                variants={compItem}
                style={{ transformOrigin: "center center" }}
                className="text-base font-source-code bg-[var(--color-dark-bg)] px-4 py-2 rounded-full text-[var(--color-hover-bg)] border border-[var(--color-text-primary)] text-center sm:text-left whitespace-nowrap"
              >
                {competency}
              </m.span>
            ))}
          </div>

          <div className="flex gap-2.5 justify-center flex-wrap">
            {competenciesList.slice(10, 14).map((competency) => (
              <m.span
                key={competency}
                variants={compItem}
                style={{ transformOrigin: "center center" }}
                className="text-base font-source-code bg-[var(--color-dark-bg)] px-4 py-2 rounded-full text-[var(--color-hover-bg)] border border-[var(--color-text-primary)] text-center sm:text-left whitespace-nowrap"
              >
                {competency}
              </m.span>
            ))}
          </div>
        </m.div>
        <div className="flex w-full justify-center px-4 pb-6 pt-1">
          <div className="flex flex-col gap-4 sm:flex-row">
            <m.button
              variants={btnLeft}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.35 }}
              type="button"
              onClick={() => navigateToAboutSection("software-skills-section")}
              className="inline-flex w-[13rem] items-center justify-center text-center px-6 py-2.5 rounded-[10px] border border-[var(--color-text-primary)] font-source-code text-base text-theme-text hover:opacity-80 hover:font-bold hover:underline transition-colors duration-200 ease-out"
              style={{
                background:
                  "linear-gradient(0deg, color-mix(in srgb, var(--color-main-bg) 50%, transparent) 0%, color-mix(in srgb, var(--color-text-muted) 50%, transparent) 100%)",
                backdropFilter: "blur(12px)",
                WebkitBackdropFilter: "blur(12px)",
                willChange: "transform, opacity",
              }}
            >
              Skills
            </m.button>
            <m.button
              variants={btnRight}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.35 }}
              type="button"
              onClick={() => navigateToAboutSection("timeline-section")}
              className="inline-flex w-[13rem] items-center justify-center text-center px-6 py-2.5 rounded-[10px] border border-[var(--color-text-primary)] font-source-code text-base text-theme-text hover:opacity-80 hover:font-bold hover:underline transition-colors duration-200 ease-out"
              style={{
                background:
                  "linear-gradient(0deg, color-mix(in srgb, var(--color-main-bg) 50%, transparent) 0%, color-mix(in srgb, var(--color-text-muted) 50%, transparent) 100%)",
                backdropFilter: "blur(12px)",
                WebkitBackdropFilter: "blur(12px)",
                willChange: "transform, opacity",
              }}
            >
              Timeline
            </m.button>
          </div>
        </div>
        <div className="flex w-full relative h-full flex-col items-start px-4">
          <span className="font-montserrat text-base text-light-gray">
            Some highlights from the past year
          </span>
          <Image
            src="/highlights/describe-arrow.png"
            alt="describe-arrow"
            width={70}
            height={70}
          />
        </div>
        <div className="flex sm:w-full relative justify-between sm:h-[400px] h-[1100px] pt-4 flex-col sm:flex-row w-4/5 mx-auto gap-14 sm:gap-0">
          {imageStacks.map((imageStack) => (
            <ImageStack
              key={imageStack.alt}
              src={imageStack.src}
              className={imageStack.className}
              classNamePlaceholder={imageStack.classNamePlaceholder}
            />
          ))}
        </div>
      </div>
      <div className="flex w-full border-t-[3px] border-border-custom" />
    </div>
  );
}