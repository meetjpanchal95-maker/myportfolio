"use client";
import React from "react";
import { motion, useInView } from "framer-motion";
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

const softwareCategories = [
  {
    title: "Design & Prototyping",
    tools: [
      { name: "Figma", logo: "/about/software/figma.svg" },
      { name: "Adobe XD", logo: "/about/software/adobe-xd.svg" },
      { name: "Sketch", logo: "/about/software/sketch.svg" },
      { name: "Photoshop", logo: "/about/software/photoshop.svg" },
      { name: "InDesign", logo: "/about/software/indesign.svg" },
      { name: "Framer", logo: "/about/software/framer.svg" },
      { name: "Webflow", logo: "/about/software/webflow.svg" },
      { name: "Visual Studio Code", logo: "/about/software/visual-studio-code.svg" },
    ],
  },
  {
    title: "Architecture Engineering Construction",
    tools: [
      { name: "Rhino 3D", logo: "/about/software/rhino-3d.svg" },
      { name: "Blender", logo: "/about/software/blender.svg" },
      { name: "AutoCAD", logo: "/about/software/autocad.svg" },
      { name: "SketchUp", logo: "/about/software/sketchup.svg" },
      { name: "Revit", logo: "/about/software/revit.svg" },
      { name: "Lumion", logo: "/about/software/lumion.svg" },
      { name: "BEXEL Manager", logo: "/about/software/bexel-manager.svg" },
      { name: "Trimble Connect", logo: "/about/software/trimble-connect.svg" },
      {
        name: "Autodesk BIM 360",
        logo: "/about/software/autodesk-construction-cloud.svg",
      },
      { name: "ARCHICAD", logo: "/about/software/archicad.svg" },
    ],
  },
  {
    title: "Project & Collaboration",
    tools: [
      {
        name: "MS Office",
        logo: "/about/software/microsoft-office-suite.svg",
      },
      { name: "Miro", logo: "/about/software/miro.svg" },
      { name: "Jira", logo: "/about/software/jira.svg" },
      { name: "Trello", logo: "/about/software/trello.svg" },
      { name: "MS Project", logo: "/about/software/microsoft-project.svg" },
      { name: "Notion", logo: "/about/software/notion.svg" },
      { name: "Asana", logo: "/about/software/asana.svg" },
    ],
  },
  {
    title: "AI & Emerging Tools",
    tools: [
      { name: "ChatGPT", logo: "/about/software/chatgpt.svg" },
      { name: "Claude", logo: "/about/software/claude.svg" },
      { name: "Midjourney", logo: "/about/software/midjourney.svg" },
      { name: "Runway ML", logo: "/about/software/runway-ml.svg" },
      { name: "Perplexity", logo: "/about/software/perplexity.svg" },
    ],
  },
];

const softSkills = [
  "Integrity",
  "Visionary",
  "Problem Solving",
  "Business Ethics",
  "Relationship Management",
  "Structured Analytical Thinking",
  "Decision Making under Ambiguity",
  "Conflict Resolution",
  "High Attention to Detail",
  "Intercultural Collaboration",
  "Business English Communications",
  "Basic Conversational German",
];

const unfilteredSoftwareLogos = new Set([
  "/about/software/gamma.svg",
]);

const customSoftwareLogoFilters = new Map([
  ["/about/software/adobe-xd.svg", "var(--software-logo-filter-adobe-xd)"],
  ["/about/software/photoshop.svg", "var(--software-logo-filter-adobe-xd)"],
  ["/about/software/indesign.svg", "var(--software-logo-filter-adobe-xd)"],
  ["/about/software/lumion.svg", "var(--software-logo-filter-adobe-xd)"],
  ["/about/software/notion.svg", "var(--software-logo-filter-adobe-xd)"],
  ["/about/software/miro.svg", "var(--software-logo-filter-adobe-xd)"],
  ["/about/software/claude.svg", "var(--software-logo-filter-adobe-xd)"],
  ["/about/software/microsoft-project.svg", "var(--software-logo-filter-adobe-xd)"],
  ["/about/software/google-workspace.svg", "var(--software-logo-filter-adobe-xd)"],
  ["/about/software/chatgpt.svg", "var(--software-logo-filter-adobe-xd)"],
  ["/about/software/midjourney.svg", "var(--software-logo-filter-adobe-xd)"],
  ["/about/software/runway-ml.svg", "var(--software-logo-filter-adobe-xd)"],
  ["/about/software/autodesk-construction-cloud.svg", "var(--software-logo-filter-adobe-xd)"],
]);

function TypewriterText({
  text,
  className,
  speed = 28,
  delay = 0,
  amount = 0.35,
}: {
  text: string;
  className?: string;
  speed?: number;
  delay?: number;
  amount?: number;
}) {
  const ref = React.useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, { once: false, amount });
  const [displayedText, setDisplayedText] = React.useState("");

  React.useEffect(() => {
    let timeoutId: ReturnType<typeof setTimeout> | undefined;
    let intervalId: ReturnType<typeof setInterval> | undefined;

    if (isInView) {
      setDisplayedText("");
      timeoutId = setTimeout(() => {
        let currentIndex = 0;
        intervalId = setInterval(() => {
          currentIndex += 1;
          setDisplayedText(text.slice(0, currentIndex));

          if (currentIndex >= text.length && intervalId) {
            clearInterval(intervalId);
          }
        }, speed);
      }, delay);
    } else {
      setDisplayedText("");
    }

    return () => {
      if (timeoutId) clearTimeout(timeoutId);
      if (intervalId) clearInterval(intervalId);
    };
  }, [delay, isInView, speed, text]);

  return (
    <div ref={ref} aria-label={text} className={`relative ${className ?? ""}`}>
      <span aria-hidden="true" className="invisible block whitespace-pre-wrap">
        {text}
      </span>
      <span aria-hidden="true" className="absolute inset-0 block whitespace-pre-wrap">
        {displayedText}
      </span>
    </div>
  );
}

function SoftwareBadge({ name, logo }: { name: string; logo: string }) {
  const useThemeFilter = !unfilteredSoftwareLogos.has(logo);
  const customFilter = customSoftwareLogoFilters.get(logo);
  const logoStyle = customFilter
    ? { filter: customFilter }
    : useThemeFilter
      ? { filter: "var(--software-logo-filter)" }
      : undefined;

  return (
    <div className="group mx-auto flex min-h-[5.5rem] w-full max-w-[8.5rem] flex-col items-center justify-start gap-2.5 px-2 py-1.5 text-center">
      <div className="flex h-12 w-full items-center justify-center rounded-xl bg-[var(--color-dark-bg)]/65 px-2 py-1.5 transition-colors duration-300 group-hover:bg-[var(--color-card-bg)]">
        <img
          src={logo}
          alt={name}
          className="block h-8 w-full object-contain transition-opacity duration-300 group-hover:opacity-80"
          style={logoStyle}
          loading="lazy"
        />
      </div>
      <TypewriterText
        text={name}
        delay={90}
        speed={20}
        amount={0.45}
        className="max-w-[8.5rem] font-source-code text-xs leading-snug text-[var(--color-hover-bg)] sm:text-sm"
      />
    </div>
  );
}

function SoftwareSection() {
  return (
    <div id="software-skills-section" className="w-full pt-8" style={{ scrollMarginTop: "7rem" }}>
      <m.div
        className="mb-8 flex flex-col gap-2"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: false, amount: 0.2 }}
      >
        <TypewriterText
          text="Software Skills"
          speed={55}
          className="text-4xl font-bebasNeue text-[var(--color-hover-bg)]"
        />
        <TypewriterText
          text="Proficient in modern design and engineering tools."
          delay={180}
          speed={18}
          className="max-w-3xl font-source-code text-sm uppercase tracking-[0.18em] text-[var(--color-light-gray)]"
        />
        <div className="mt-3 h-px w-full bg-[color:color-mix(in_srgb,var(--color-text-accent)_25%,var(--color-border-strong))]" />
      </m.div>

      <div className="grid gap-x-8 gap-y-8 xl:grid-cols-2">
        {softwareCategories.map((category, categoryIndex) => (
          <m.div
            key={category.title}
            className="flex flex-col gap-4"
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: "easeOut", delay: categoryIndex * 0.04 }}
            viewport={{ once: false, amount: 0.15 }}
          >
            <TypewriterText
              text={category.title}
              delay={categoryIndex * 70}
              speed={26}
              className="border-b border-[color:color-mix(in_srgb,var(--color-text-accent)_25%,var(--color-border-strong))] pb-2 font-montserrat text-lg text-[var(--color-hover-bg)]"
            />
            <div className="grid grid-cols-2 justify-items-center gap-x-4 gap-y-5 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 2xl:grid-cols-5">
              {category.tools.map((tool, toolIndex) => (
                <m.div
                  key={tool.name}
                  className="w-full"
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.35, ease: "easeOut", delay: toolIndex * 0.02 }}
                  viewport={{ once: false, amount: 0.15 }}
                  style={{ transformOrigin: "center center" }}
                >
                  <SoftwareBadge name={tool.name} logo={tool.logo} />
                </m.div>
              ))}
            </div>
          </m.div>
        ))}
      </div>

      <m.div
        className="py-14 flex flex-col gap-4"
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55, ease: "easeOut" }}
        viewport={{ once: false, amount: 0.15 }}
      >
        <TypewriterText
          text="Interpersonal Skills"
          speed={26}
          className="border-b border-[color:color-mix(in_srgb,var(--color-text-accent)_50%,var(--color-border-strong))] pb-2 font-bebasNeue text-[1.6rem] text-[var(--color-hover-bg)]"
        />
        <m.div
          className="flex flex-wrap gap-2"
          variants={compContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.2 }}
        >
          {softSkills.map((skill) => (
            <m.span
              key={skill}
              variants={compItem}
              style={{ transformOrigin: "center center" }}
              className="w-fit rounded-full border border-[var(--color-text-accent)] bg-[var(--color-dark-bg)]/65 px-3 py-1.5 font-source-code text-xs text-[var(--color-hover-bg)] sm:text-sm"
            >
              {skill}
            </m.span>
          ))}
        </m.div>
      </m.div>
    </div>
  );
}

function PersonalDetails() {
  return (
    <div className="flex py-4 sm:px-10 px-2">
      <div className="flex w-full flex-col gap-10">
        <div className="grid w-full grid-cols-1 sm:grid-cols-3 sm:gap-10">
        <div className="col-span-2  sm:w-4/5 w-full">
          {(() => {
            const [mounted, setMounted] = React.useState(false);
            React.useEffect(() => { setMounted(true); }, []);
            const heroText = "Creative Lead | Product Manager | UX Researcher";
            if (!mounted) return (
              <div className="w-full whitespace-nowrap border-b border-[color:color-mix(in_srgb,var(--color-text-accent)_50%,var(--color-border-strong))] py-4 text-4xl font-bebasNeue text-[var(--color-hover-bg)]">{heroText}</div>
            );
            return (
              <m.div
                className="w-full whitespace-nowrap border-b border-[color:color-mix(in_srgb,var(--color-text-accent)_50%,var(--color-border-strong))] py-4 text-4xl font-bebasNeue text-[var(--color-hover-bg)]"
                variants={heroTextContainer}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.35 }}
              >
                {heroText.split(" ").map((word, idx) => (
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
            );
          })()}
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
                  
                  src="/about/full-page-profile.png"
                  alt="Profile"
                  width={350}
                  height={350}
                  className="rounded-full border border-[color:color-mix(in_srgb,var(--color-hero-stroke)_50%,transparent)] bg-dark-charcoal"
                />
              </m.div>
            </div>
            <div className="col-span-1 font-montserrat text-[var(--color-hover-bg)] text-base w-[246px] sm:w-[282px] lg:w-[352px] xl:w-[422px] 2xl:w-[493px]">
              ‘Creative Strategist and an absolute learner with six years of work experience in product roles, digital consulting, strategy driven solutions and user-centred design. I develop work flows with deep work at the intersection of Business + Technology + Design for delivering impactful solutions’
            </div>
          </div>
          <m.div
            className="w-full whitespace-nowrap border-t border-[color:color-mix(in_srgb,var(--color-text-accent)_50%,var(--color-border-strong))] py-4 text-[1.9rem] font-bebasNeue text-light-gray"
            variants={heroTextContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.35 }}
          >
            {"Workshop facilitator | AI Practitioner | Digital Strategist".split(" ").map((word, idx) => (
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
        <SoftwareSection />
      </div>
    </div>
  );
}

export default PersonalDetails;
