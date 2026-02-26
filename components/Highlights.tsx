"use client";
import ImageStack from "../app/home/imageStack";
import Image from "next/image";
import competenciesList from "../app/about/detailedPage/competencies-list";
import dynamic from "next/dynamic";

const imageStacks = [
  {
    src: "/highlights/1.png",
    alt: "image-stack-1",
    className:
      "bg-[url(/highlights/1.png)] rotate-[10deg] hover:rotate-0 hover:border-2 hover:border-border-white hover:border-grid",
    classNamePlaceholder: "bg-[url(/highlights/1.png)] ",
  },
  {
    src: "/highlights/2.png",
    alt: "image-stack-2",
    className:
      "bg-[url(/highlights/2.png)] rotate-[-10deg] hover:rotate-0 hover:border-2 hover:border-border-white hover:border-grid",
    classNamePlaceholder: "bg-[url(/highlights/2.png)]",
  },
  {
    src: "/highlights/3.png",
    alt: "image-stack-3",
    className:
      "bg-[url(/highlights/3.png)] rotate-[10deg] hover:rotate-0 hover:border-2 hover:border-border-white hover:border-grid",
    classNamePlaceholder: "bg-[url(/highlights/3.png)]",
  },
  {
    src: "/highlights/4.png",
    alt: "image-stack-4",
    className:
      "bg-[url(/highlights/4.png)] rotate-[-10deg] hover:rotate-0 hover:border-2 hover:border-border-white hover:border-grid",
    classNamePlaceholder: "bg-[url(/highlights/4.png)]",
  },
];

export default function Highlights(props: any) {
  return (
    <div className="relative border-border-custom">
      <div className="flex flex-col sm:py-16 py-8 sm:mx-16 mx-4 border-l-[3px] border-r-[3px] border-border-custom h-full">
        {/* Stats Strip at the top */}
        <div className="pt-4 px-0" style={{marginTop: "-90px"}}>
          <div className="rounded-[20px] overflow-hidden p-[10px]" style={{marginLeft: 0, marginRight: 0}}>
            <div className="stat-item">
              <span className="stat-value">30+</span>
              <span className="stat-label">Crossdisciplinary team collaboration</span>
            </div>
          </div>
        </div>
        {/* 50px gap below stats strip */}
        <div style={{height: 50}} />
        {/* Quote between stats and competencies */}
        <div className="w-full flex justify-center items-center my-8" style={{ marginTop: '-80px' }}>
          <div className="flex flex-col items-center w-full">
            <blockquote className="font-source-code text-xl text-center text-[var(--color-text-muted)] italic px-4 py-6 max-w-2xl">
              'A results-driven professional with a proven track record of delivering high-impact work across industries like FinTech, Real Estate, Logistics, SaaS, Construction and more. Available for full-time roles & freelance projects'
            </blockquote>
            <div className="flex flex-row gap-4 mt-4 mb-5">
              <a
                href="/contact"
                className="px-6 py-2.5 rounded-[10px] border border-[var(--color-text-primary)] font-source-code text-base text-theme-text transition-all duration-800 ease-out hover:opacity-80 hover:font-bold hover:underline"
                style={{
                  background: "linear-gradient(0deg, color-mix(in srgb, var(--color-main-bg) 50%, transparent) 0%, color-mix(in srgb, var(--color-text-muted) 50%, transparent) 100%)",
                  backdropFilter: "blur(12px)",
                  WebkitBackdropFilter: "blur(12px)",
                  display: "inline-block"
                }}
              >
                Get a Quote
              </a>
              <a
                download="Meet_Panchal_Resume.pdf"
                href="/Meet_Panchal_Resume.pdf"
                target="_blank"
                className="px-6 py-2.5 rounded-[10px] border border-[var(--color-text-primary)] font-source-code text-base text-theme-text transition-all duration-800 ease-out hover:opacity-80 hover:font-bold hover:underline flex items-center gap-2"
                style={{
                  background: "linear-gradient(0deg, color-mix(in srgb, var(--color-main-bg) 50%, transparent) 0%, color-mix(in srgb, var(--color-text-muted) 50%, transparent) 100%)",
                  backdropFilter: "blur(12px)",
                  WebkitBackdropFilter: "blur(12px)",
                  display: "inline-block"
                }}
              >
                {/* Download icon can be added here if desired, e.g. from lucide-react */}
                Download Resume
              </a>
            </div>
          </div>
        </div>
        {/* Competencies Section */}
        <div className="flex flex-wrap justify-between gap-x-5 gap-y-5 px-4 pb-8">
          {competenciesList.map((competency) => (
            <span
              key={competency}
              className="text-base font-source-code bg-[var(--color-dark-bg)] px-4 py-2 rounded-full text-[var(--color-hover-bg)] w-fit border border-[var(--color-text-primary)]"
            >
              {competency}
            </span>
          ))}
        </div>
        <div className="flex w-full relative h-full flex-col items-start px-4">
          <span className="font-montserrat text-base text-light-gray">
            Some highlights from the past year
          </span>
          <Image
            unoptimized={true}
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
