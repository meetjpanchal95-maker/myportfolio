"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import Summary from "./content/summary";
import WorkExperience from "./content/workExperience";
import Education from "./content/education";

const m: any = motion;

function Tabs() {
  const [activeTab, setActiveTab] = useState("summary");
  const tabs = [
    {
      label: "Summary",
      value: "summary",
      content: <Summary />,
    },
    {
      label: "Work Experience",
      value: "workExperience",
      content: <WorkExperience />,
    },
    {
      label: "Education",
      value: "education",
      content: <Education />,
    },
  ];

  return (
    <div className="flex flex-col gap-4 pt-6 overflow-hidden sm:overflow-y-hidden">
      <div className="mx-2 grid w-auto grid-cols-1 gap-3 pt-7 text-center text-xl font-montserrat sm:mx-5 sm:grid-cols-3 sm:gap-4">
        {tabs.map((tab) => (
          <m.button
            key={tab.value}
            type="button"
            onClick={() => setActiveTab(tab.value)}
            whileHover={{ y: -2, scale: 1.015 }}
            whileTap={{ scale: 0.985 }}
            transition={{ duration: 0.18, ease: "easeOut" }}
            className={`group relative overflow-hidden rounded-2xl px-5 py-3 font-bebasNeue text-[130%] tracking-[0.06em] transition-all duration-300 ${
              activeTab === tab.value
                ? "border-[0.5px] border-[var(--color-text-primary)] text-[var(--color-hover-bg)] shadow-[0_10px_30px_rgba(0,0,0,0.12)]"
                : "border border-[var(--about-tab-idle-border)] bg-[var(--color-main-bg)]/55 text-[var(--color-light-gray)] hover:border-[var(--color-border-strong)] hover:bg-[var(--color-card-bg)]/72 hover:text-[var(--color-hover-bg)]"
            }`}
            style={
              activeTab === tab.value
                ? {
                    background:
                      "linear-gradient(0deg, color-mix(in srgb, var(--color-main-bg) 50%, transparent) 0%, color-mix(in srgb, var(--color-text-muted) 50%, transparent) 100%)",
                    backdropFilter: "blur(12px)",
                    WebkitBackdropFilter: "blur(12px)",
                  }
                : undefined
            }
          >
            <span
              className={`pointer-events-none absolute inset-x-4 bottom-0 h-px origin-left transition-transform duration-300 ${
                activeTab === tab.value
                  ? "scale-x-0 bg-[var(--color-hover-bg)]"
                  : "scale-x-0 bg-[var(--color-hover-bg)] group-hover:scale-x-100"
              }`}
            />
            {tab.label}
          </m.button>
        ))}
      </div>
      <div
        className={`sm:mx-5 mx-2 h-[62rem] min-h-[54rem] overflow-auto rounded-current transition-colors duration-300 ${
          activeTab === "summary"
            ? "border border-[var(--color-text-accent)] hover:border-[var(--color-border-strong)]"
            : "border border-transparent"
        }`}
      >
        {tabs.find((tab) => tab.value === activeTab)?.content}
      </div>
    </div>
  );
}

export default Tabs;
